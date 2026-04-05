import { UsersRound } from "lucide-react";
import type React from "react";
import { useJobStore } from "@/store/useJobStore";

interface JobRowProps {
  jobId: string;
}

const JobRow: React.FC<JobRowProps> = ({ jobId }) => {
  const { getJobById, setSelectedJobId, selectedJobId } = useJobStore();
  const job = getJobById(jobId);
  if (!job) return null;

  return (
    <div
      key={job.id}
      onClick={() => setSelectedJobId(job.id)}
      className={`p-4 capitalize rounded-box cursor-pointer transition-all duration-200 border ${
        selectedJobId === job.id
          ? "bg-primary/10 border-primary"
          : "bg-base-200 border-transparent hover:bg-base-300"
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-base-content leading-tight">
          {job.title}
        </h3>
        {/* <span
                    className={`font-medium badge badge-sm 
                        ${job.status === "active"
                            ? "badge-success"
                            : job.status === "paused"
                                ? "badge-warning"
                                : "badge-error"
                        }`}
                >
                    {job.status}
                </span> */}
        <span
          className={`badge font-semibold badge-xs ${
            job.workplace === "Remote"
              ? "badge-info"
              : job.workplace === "Hybrid"
                ? "badge-warning"
                : "badge-secondary"
          }`}
        >
          {job.workplace}
        </span>
      </div>

      <div className="flex items-center gap-2 text-sm text-base-content/70 mb-2">
        <span>{job.department}</span>
        <span>•</span>
        <span>{job.location}</span>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-success">{job.salary}</span>
          <span className="text-xs text-base-content/50">{job.postedDate}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-base-content/70">
          <UsersRound className="size-4" />
          {job.applicants}
        </div>
      </div>
    </div>
  );
};

export default JobRow;
