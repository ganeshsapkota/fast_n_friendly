import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AgeVerificationModal.css';

const AgeVerificationModal = ({ onVerify }) => {
    const navigate = useNavigate();

    const handleYes = () => {
        if (onVerify) {
            onVerify();
        }
    };

    const handleNo = () => {
        navigate('/');
    };

    return (
        <div className="age-gate-overlay">
            <div className="age-gate-modal">
                <ShieldAlert size={64} className="age-gate-icon" />
                <h2>Age Verification Required</h2>
                <p>
                    You must be 21 years of age or older to view this content.
                    By clicking "I am 21+", you certify that you are of legal smoking age in your jurisdiction.
                </p>
                <div className="age-gate-buttons">
                    <button className="btn-age-yes" onClick={handleYes}>
                        I am 21+
                    </button>
                    <button className="btn-age-no" onClick={handleNo}>
                        I am under 21
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgeVerificationModal;
