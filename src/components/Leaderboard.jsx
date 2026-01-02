import React from 'react';
import { Medal } from 'lucide-react';
import './Leaderboard.css';

const Leaderboard = () => {
    const leaders = [
        { id: 1, name: "Sarah J.", points: 2450 },
        { id: 2, name: "Mike R.", points: 2100 },
        { id: 3, name: "Alex T.", points: 1950 },
        { id: 4, name: "Lisa M.", points: 1800 },
        { id: 5, name: "David K.", points: 1650 }
    ];

    return (
        <div className="leaderboard-card">
            <div className="leaderboard-header">
                <Medal size={24} className="trophy-icon" />
                <h3>Top Fuelers</h3>
            </div>
            <div className="leaderboard-list">
                {leaders.map((leader, index) => (
                    <div key={leader.id} className="leader-row">
                        <span className={`rank rank-${index + 1}`}>{index + 1}</span>
                        <span className="leader-name">{leader.name}</span>
                        <span className="leader-points">{leader.points} pts</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
