import React, { useRef, useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { Trophy, MoveLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ScratchWin.css';

const ScratchWin = () => {
    const canvasRef = useRef(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [prize, setPrize] = useState(null);
    const { addToast } = useToast();
    const { user, updatePoints } = useAuth();

    useEffect(() => {
        // Random prize logic
        const prizes = [
            { id: 1, text: "50 Bonus Points", type: "points", val: 50 },
            { id: 2, text: "Free Coffee", type: "item", val: "coffee" },
            { id: 3, text: "10% Off Fuel", type: "discount", val: 10 },
            { id: 4, text: "Better Luck Next Time!", type: "none", val: 0 }
        ];
        setPrize(prizes[Math.floor(Math.random() * prizes.length)]);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Fill with scratchable overlay
        ctx.fillStyle = '#C0C0C0'; // Silver
        ctx.fillRect(0, 0, width, height);

        // Add "Scratch Here" text
        ctx.font = '20px Arial';
        ctx.fillStyle = '#666';
        ctx.textAlign = 'center';
        ctx.fillText('SCRATCH HERE', width / 2, height / 2);

        let isDrawing = false;

        const getPos = (e) => {
            const rect = canvas.getBoundingClientRect();
            let x, y;
            if (e.type.includes('touch')) {
                x = e.touches[0].clientX - rect.left;
                y = e.touches[0].clientY - rect.top;
            } else {
                x = e.clientX - rect.left;
                y = e.clientY - rect.top;
            }
            return { x, y };
        };

        const scratch = (x, y) => {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI * 2);
            ctx.fill();
            checkReveal();
        };

        const checkReveal = () => {
            // Sample pixels to check how much is cleared
            const imageData = ctx.getImageData(0, 0, width, height);
            const pixels = imageData.data;
            let transparent = 0;
            for (let i = 0; i < pixels.length; i += 4) {
                if (pixels[i + 3] < 128) transparent++;
            }

            // If > 50% cleared, auto-reveal
            if (transparent > (pixels.length / 4) * 0.5 && !isRevealed) {
                setIsRevealed(true);
                canvas.style.opacity = 0; // Fade out canvas
            }
        };

        const startDraw = (e) => { isDrawing = true; };
        const endDraw = () => { isDrawing = false; };
        const draw = (e) => {
            if (!isDrawing || isRevealed) return;
            const { x, y } = getPos(e);
            scratch(x, y);
        };

        // Events
        canvas.addEventListener('mousedown', startDraw);
        canvas.addEventListener('touchstart', startDraw);
        window.addEventListener('mouseup', endDraw);
        window.addEventListener('touchend', endDraw);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('touchmove', draw);

        return () => {
            // Cleanup events
            if (canvas) {
                canvas.removeEventListener('mousedown', startDraw);
                canvas.removeEventListener('touchstart', startDraw);
                canvas.removeEventListener('mousemove', draw);
                canvas.removeEventListener('touchmove', draw);
            }
            window.removeEventListener('mouseup', endDraw);
            window.removeEventListener('touchend', endDraw);
        };
    }, [isRevealed]);

    useEffect(() => {
        if (isRevealed && prize) {
            if (prize.type !== 'none') {
                addToast(`You won: ${prize.text}!`, 'success');
                if (prize.type === 'points') {
                    updatePoints(prize.val);
                }
            } else {
                addToast('No prize today, try tomorrow!', 'info');
            }
        }
    }, [isRevealed, prize, updatePoints, addToast]);

    return (
        <div className="page-scratch">
            <div className="container">
                <Link to="/" className="back-link"><MoveLeft size={16} /> Back Home</Link>

                <header className="scratch-header">
                    <h1 className="text-gradient">Daily Scratch & Win</h1>
                    <p>Scratch the card below to reveal your daily prize!</p>
                </header>

                <div className="scratch-area">
                    <div className="prize-layer">
                        {prize && (
                            <div className="prize-content">
                                <Trophy size={48} className="prize-icon" />
                                <h2>{prize.text}</h2>
                                {prize.type === 'none' ? (
                                    <p>Come back tomorrow!</p>
                                ) : (
                                    <p>Redeem at your nearest store.</p>
                                )}
                            </div>
                        )}
                    </div>
                    <canvas
                        ref={canvasRef}
                        width={300}
                        height={200}
                        className={`scratch-canvas ${isRevealed ? 'hidden' : ''}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default ScratchWin;
