"use client";

import React, { useState } from "react";
import { Job } from "@/types";
import JobDetails from "./JobDetails";
import JobRow from "@/components/JobRow";
import { useJobStore } from "@/store/useJobStore";

const ActiveJobsSection: React.FC = () => {
  const { jobs } = useJobStore();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobs.filter(
    (job: Job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-bold text-2xl">Active Jobs</h2>
        <div className="flex gap-3">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              placeholder="Search jobs..."
              className="bg-transparent border-none focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
          <button className="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            Post New Job
          </button>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {/* Job List - Left Side */}
        <div className="col-span-2 flex flex-col gap-3 max-h-[700px] overflow-y-auto pr-2">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-10 text-base-content/60">
              No jobs found matching your search.
            </div>
          ) : (
            filteredJobs.map((job: Job) => (
              <JobRow key={job.id} jobId={job.id} />
            ))
          )}
        </div>

        {/* Job Details Card - Right Side */}
        <div className="col-span-3">
          <div className="bg-base-200 rounded-box p-6 sticky top-0">
            <JobDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveJobsSection;