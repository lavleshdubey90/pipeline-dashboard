import {
  Briefcase,
  Building2,
  CheckCircle2,
  Clock,
  MapPin,
  Share2,
  Target,
  Users,
  X,
} from "lucide-react";
import type React from "react";
import { CANDIDATE_STAGES } from "@/constants";
import { useCandidateStore } from "@/store/useCandidateStore";
import { useJobStore } from "@/store/useJobStore";

interface JobDetailsProps {
  jobId: string;
}

const JobDetails: React.FC<JobDetailsProps> = ({ jobId }) => {
  const job = useJobStore((state) => state.getJobById(jobId));
  const candidates = useCandidateStore((state) => state.candidates);

  // Get candidates for this job and count by stage
  const jobCandidates = candidates.filter((c) => c.appliedFor === job?.title);
  const stageCounts = CANDIDATE_STAGES.map((stage) => ({
    ...stage,
    count: jobCandidates.filter((c) => c.status === stage.label).length,
  }));

  const drawerId = `job-details-${jobId}`;

  if (!job) {
    return (
      <div className="hero min-h-[300px]">
        <div className="hero-content text-center">
          <div>
            <div className="w-24 h-24 bg-base-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="size-10 opacity-50" />
            </div>
            <h2 className="text-xl font-bold">Job not found</h2>
            <p className="text-base-content/60">
              The job you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Compact Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-full flex items-start justify-between">
            <div className="flex-1 flex-col gap-1 flex w-full!">
              <h1 className="text-xl font-bold">{job.title}</h1>
              <div
                className={`badge badge-sm capitalize font-medium ${
                  job.status === "active"
                    ? "badge-success"
                    : job.status === "paused"
                      ? "badge-warning"
                      : "badge-error"
                }`}
              >
                {job.status}
              </div>
            </div>
            <label htmlFor={drawerId} aria-label="close sidebar">
              <X className="btn btn-ghost btn-error btn-square btn-link size-5" />
            </label>
          </div>
        </div>
        <p className="text-sm text-primary font-medium">{job.department}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-base-content/70 mt-2">
          <span className="flex items-center gap-1">
            <MapPin className="size-3" />
            {job.location}
          </span>
          <span className="flex items-center gap-1">
            <Building2 className="size-3" />
            {job.workplace}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3" />
            {job.type}
          </span>
        </div>
      </div>

      {/* Compact Stats Row */}
      <div className="flex gap-2">
        <div className="flex-1 bg-base-300 rounded-lg p-2 text-center">
          <p className=" font-bold text-primary">{job.applicants}</p>
          <p className="text-sm text-base-content/60">Candidates</p>
        </div>
        <div className="flex-1 bg-base-300 rounded-lg p-2 text-center">
          <p className=" font-bold text-success truncate">{job.salary}</p>
          <p className="text-sm text-base-content/60">Salary</p>
        </div>
        <div className="flex-1 bg-base-300 rounded-lg p-2 text-center">
          <p className=" font-bold text-accent">{job.experience}</p>
          <p className="text-sm text-base-content/60">Exp</p>
        </div>
      </div>

      {/* Description */}
      <div className="bg-base-100 rounded-lg p-3">
        <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-primary rounded-full"></span>
          About
        </h2>
        <p className="text-base-content leading-relaxed mt-1">
          {job.description}
        </p>
      </div>

      {/* Skills */}
      <div className="bg-base-100 rounded-lg p-3">
        <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-secondary rounded-full"></span>
          Skills
        </h2>
        <div className="flex flex-wrap gap-2 mt-1">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="badge badge-sm badge-primary badge-soft font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-base-100 rounded-lg p-3">
        <h2 className="font-semibold text-lg mb-3 flex items-center gap-2">
          <span className="w-1 h-6 bg-success rounded-full"></span>
          Requirements
        </h2>
        <div className="space-y-2">
          {job.requirements.map((req, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm justify-start flex-row text-base-content"
            >
              <div aria-label="success" className="status status-success" />{" "}
              {req}
            </div>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="bg-base-100 rounded-lg p-3">
        <h2 className="font-semibold text-lg mb-3 flex items-center gap-2">
          <span className="w-1 h-6 bg-accent rounded-full"></span>
          Responsibilities
        </h2>
        <div className="space-y-2">
          {job.responsibilities.map((resp, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm justify-start flex-row text-base-content"
            >
              <div aria-label="accent" className="status status-accent" />{" "}
              {resp}
            </div>
          ))}
        </div>
      </div>

      {/* Hiring Pipeline */}
      <div className="bg-base-100 rounded-lg p-3">
        <h2 className="font-semibold text-lg mb-3 flex items-center gap-2">
          <span className="w-1 h-6 bg-warning rounded-full"></span>
          Hiring Pipeline
          <span className="text-sm font-normal text-base-content/50 ml-auto">
            {jobCandidates.length} total
          </span>
        </h2>
        <ul className="steps steps-vertical w-full">
          {stageCounts.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div key={index} className={`step step-${stage.color} relative`}>
                <div className="flex items-center justify-between w-full pl-2">
                  <span className="flex items-center gap-2">
                    <Icon className="size-4" />
                    {stage.label}
                  </span>
                  <span
                    className={`badge badge-sm badge-${stage.color} badge-soft`}
                  >
                    {stage.count}
                  </span>
                </div>
              </div>
            );
          })}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-2">
        <button className="btn btn-primary btn-md flex-1">
          <Users className="size-4" />
          Applicants
        </button>
        <button className="btn btn-primary btn-soft btn-md">
          <Share2 className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
