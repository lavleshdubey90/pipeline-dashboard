"use client";

import React, { useState } from "react";
import { Job } from "@/types";
import JobDetails from "./JobDetails";
import JobRow from "@/components/JobRow";
import { useJobStore } from "@/store/useJobStore";
import { Plus, Search, X, Briefcase } from "lucide-react";

const ActiveJobsSection: React.FC = () => {
  const { jobs, selectedJobId, setSelectedJobId } = useJobStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  const filteredJobs = jobs.filter(
    (job: Job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleJobSelect = (jobId: string) => {
    setSelectedJobId(jobId);
    setShowMobileDetail(true);
  };

  const handleBackToList = () => {
    setShowMobileDetail(false);
  };

  return (
    <React.Fragment>
      {/* Header - Responsive */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-xl">
            <Briefcase className="size-6 text-primary" />
          </div>
          <h2 className="font-bold text-2xl">Active Jobs</h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <label className="input input-bordered flex items-center gap-2">
            <Search className="h-4 w-4 opacity-70" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="bg-transparent border-none focus:outline-none w-full sm:w-48"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
          <button className="btn btn-primary w-full sm:w-auto">
            <Plus className="size-5" />
            <span className="hidden sm:inline">Post New Job</span>
            <span className="sm:hidden">New Job</span>
          </button>
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:grid grid-cols-5 gap-6">
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
          <div className="bg-base-200 rounded-2xl p-6 sticky top-0 border border-base-300">
            <JobDetails />
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Layout - Stacked with toggle */}
      <div className="lg:hidden">
        {!showMobileDetail ? (
          /* Job List View */
          <div className="flex flex-col gap-3">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-10 text-base-content/60 bg-base-200 rounded-2xl border border-base-300">
                <Briefcase className="size-12 mx-auto mb-3 opacity-50" />
                <p>No jobs found matching your search.</p>
              </div>
            ) : (
              filteredJobs.map((job: Job) => (
                <div
                  key={job.id}
                  onClick={() => handleJobSelect(job.id)}
                  className="cursor-pointer"
                >
                  <JobRow jobId={job.id} />
                </div>
              ))
            )}
          </div>
        ) : (
          /* Job Detail View */
          <div className="flex flex-col">
            {/* Mobile Header with Back Button */}
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={handleBackToList}
                className="btn btn-ghost btn-sm btn-square"
              >
                <X className="size-5" />
              </button>
              <span className="font-semibold">Job Details</span>
            </div>
            <div className="bg-base-200 rounded-2xl p-4 sm:p-6 border border-base-300">
              <JobDetails />
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ActiveJobsSection;