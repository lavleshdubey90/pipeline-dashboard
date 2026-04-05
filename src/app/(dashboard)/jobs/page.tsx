"use client";

import { Briefcase, Plus, Search } from "lucide-react";
import React, { useState } from "react";
import JobCard from "@/components/JobCard";
import { useJobStore } from "@/store/useJobStore";
import type { Job } from "@/types";

const Jobs: React.FC = () => {
  const { jobs } = useJobStore();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobs.filter(
    (job: Job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <React.Fragment>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        {/* Header with icon and title */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-xl">
            <Briefcase className="size-6 text-primary" />
          </div>
          <h2 className="font-bold text-2xl">Active Jobs</h2>
        </div>

        {/* Searchbar with Post New Job button */}
        <div className="flex gap-3">
          <label className="input input-bordered flex items-center gap-2 w-full pl-2">
            <Search className="h-4 w-4 opacity-70" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="bg-transparent border-none focus:outline-none sm:w-48"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
          <button className="btn btn-primary btn-square">
            <Plus className="size-5" />
          </button>
        </div>
      </div>

      {/* Jobs List */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job: Job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-base-content/60">No jobs found</p>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Jobs;
