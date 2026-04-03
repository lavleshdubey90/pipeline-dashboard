import React from 'react';

interface StatCardProps {
    title: string;
    value: string;
    className: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, className }) => {
    return (
        <div className={`rounded-box p-5 border-l-4 bg-base-200 ${className}`}>
            <p className="text-3xl font-bold text-base-content">{value}</p>
            <span className="text-sm block mt-5 font-bold">{title}</span>
        </div>
    )
}

export default StatCard;