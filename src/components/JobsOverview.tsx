"use client";

import React from "react";
import { useJobStore } from "@/store/useJobStore";
import { Job } from "@/types";
import { MapPin, Users, UserCircle } from "lucide-react";
import Link from "next/link";

const JobsOverview: React.FC = () => {
    const { jobs, selectedJobId, setSelectedJobId } = useJobStore();

    // Get active jobs only, limit to 6 for overview
    const activeJobs = jobs
        .filter((job: Job) => job.status === "active")
        .slice(0, 6);

    return (
        <div className="bg-base-200 rounded-box p-3 sm:p-5 max-h-full flex flex-col">
            {/* Jobs Summary Table */}
            <div className="flex-1 overflow-auto max-h-96">
                <div className="flex flex-col gap-2">
                    {activeJobs.map((job: Job) => (
                        <div
                            key={job.id}
                            onClick={() => setSelectedJobId(job.id)}
                            className="p-2 sm:p-4"
                        >
                            <div className="flex items-center justify-between gap-2 sm:gap-4">
                                {/* Job Info */}
                                <div className="flex items-center gap-3 min-w-0 flex-1">
                                    <div className="min-w-0 flex-1">
                                        <h3 className="font-semibold text-sm truncate">{job.title}</h3>
                                        <div className="flex items-center gap-2 text-xs text-base-content/60 mt-0.5">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="size-3 text-primary" />
                                                {job.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="flex items-center gap-4 text-sm shrink-0">

                                    {/* Hiring Manager */}
                                    <div className="hidden sm:flex items-center gap-2 min-w-fit">
                                        <UserCircle className="size-4 text-base-content/50" />
                                        <span className="text-sm text-base-content/80 truncate">
                                            {job.hiringManager}
                                        </span>
                                    </div>

                                    {/* Applicants */}
                                    <div className="flex items-center gap-1.5 min-w-[70px] justify-end">
                                        <Users className="size-4 text-primary" />
                                        <span className="font-semibold">{job.applicants}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Actions */}
            <div className="flex gap-2 mt-4 pt-4">
                <div className="divider"></div>
                <Link href="/jobs" className="btn btn-primary btn-md flex-1">
                    Manage Jobs
                </Link>
                {/* <div className="divider divider-horizontal"></div> */}
                <button className="btn btn-outline btn-md flex-1">
                    + Post New
                </button>
            </div>
        </div>
    );
};

export default JobsOverview;