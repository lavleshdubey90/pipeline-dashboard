import React from 'react';

interface MatchScoreProgressProps {
    matchScore: number;
}

const MatchScoreProgress: React.FC<MatchScoreProgressProps> = ({ matchScore }) => {
    const scoreColor = matchScore >= 90 ? 'text-success' : matchScore >= 70 ? "text-primary" : matchScore >= 50 ? 'text-warning' : 'text-error';
    return (
        <div className={`radial-progress scale-75 font-bold ${scoreColor}`} style={{ "--value": matchScore } as React.CSSProperties}
            aria-valuenow={matchScore} role="progressbar">{matchScore}%</div>
    )
}

export default MatchScoreProgress;