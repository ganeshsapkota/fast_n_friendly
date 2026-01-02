import React from 'react';
import { AlertTriangle } from 'lucide-react';
import './AgeGate.css';

const AgeGate = ({ onVerify, onCancel }) => {
    return (
        <div className="age-gate-overlay">
            <div className="age-gate-modal">
                <AlertTriangle size={48} className="age-gate-icon" />
                <h2>Age Verification Required</h2>
                <p>You must be 21+ to view Tobacco products and promotions.</p>
                <div className="age-gate-actions">
                    <button className="btn-cancel" onClick={onCancel}>
                        I am under 21
                    </button>
                    <button className="btn-verify" onClick={onVerify}>
                        I am 21+
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgeGate;
