import type React from "react";

interface MatchScoreProgressProps {
  matchScore: number;
  type?: "chart" | "score";
}

const MatchScoreProgress: React.FC<MatchScoreProgressProps> = ({
  matchScore,
  type = "score",
}) => {
  const scoreColor =
    matchScore >= 90
      ? "text-success"
      : matchScore >= 70
        ? "text-primary"
        : matchScore >= 50
          ? "text-warning"
          : "text-error";

  if (type === "chart") {
    return (
      <div
        className={`radial-progress scale-75 font-bold ${scoreColor}`}
        style={{ "--value": matchScore } as React.CSSProperties}
        aria-valuenow={matchScore}
        role="progressbar"
      >
        {matchScore}%
      </div>
    );
  }
  return <p className={`font-bold ${scoreColor}`}>{matchScore}%</p>;
};

export default MatchScoreProgress;
