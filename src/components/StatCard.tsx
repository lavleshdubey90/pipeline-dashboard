import type React from "react";

interface StatCardProps {
  title: string;
  value: string;
  className: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, className }) => {
  return (
    <div className={`rounded-box p-5 border-l-4 bg-base-200 ${className}`}>
      <p className="text-2xl 2xl:text-3xl font-bold text-base-content">
        {value}
      </p>
      <span className="md:text-sm text-xs block mt-5 tracking-wide text-base-content/70">
        {title}
      </span>
    </div>
  );
};

export default StatCard;
