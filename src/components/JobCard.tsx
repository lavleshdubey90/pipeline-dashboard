import React from "react";
import { Job } from "@/types";
import { MapPin, Users, Clock, MoreHorizontal, ArrowUpRight, Edit, Trash } from "lucide-react";
import JobDetails from "./JobDetails";

interface JobCardProps {
    job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    const drawerId = `job-details-${job.id}`;
    return (
        <div className="card bg-linear-to-br from-base-100 to-base-200 border border-base-300">
            <div className="card-body p-5">
                {/* Header: Title & Department */}
                <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg leading-tight truncate">
                            {job.title}
                        </h3>
                        <span className="badge badge-primary badge-sm mt-2">
                            {job.department}
                        </span>
                    </div>

                    {/* Card Actions */}
                    <div className="flex items-center gap-1">
                        <button className="btn btn-ghost btn-xs btn-square text-warning" title="Edit">
                            <Edit className="size-4" />
                        </button>
                        <button className="btn btn-ghost btn-xs btn-square text-error" title="Delete">
                            <Trash className="size-4" />
                        </button>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-base-content/70">
                        <div className="p-1.5 bg-base-300 rounded-md">
                            <MapPin className="size-3.5" />
                        </div>
                        <span className="truncate">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-base-content/70">
                        <div className="p-1.5 bg-base-300 rounded-md">
                            <Clock className="size-3.5" />
                        </div>
                        <span>{job.type}</span>
                    </div>
                </div>

                {/* Stats & Status */}
                <div className="flex items-center justify-between py-3 border-y border-base-300/50 mb-4">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="size-10 rounded-box bg-primary/10 flex items-center justify-center">
                                <Users className="size-5 text-primary" />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold text-lg leading-none">{job.applicants}</p>
                            <p className="text-xs text-base-content/50">Applicants</p>
                        </div>
                    </div>

                    <div className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 
                        ${job.status === 'active' ? 'text-success' :
                            job.status === 'paused' ? 'text-warning' : 'text-error'
                        }
                    `}>
                        <span className={`indicator-item status ${job.status === 'active' ? 'status-success' : job.status === 'paused' ? 'status-warning' : 'status-error'}`} />
                        <span className="text-sm font-medium capitalize">{job.status}</span>
                    </div>
                </div>

                {/* Drawer for Job Details */}
                <div className="drawer drawer-end">
                    <input id={drawerId} type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor={drawerId} className="drawer-button btn btn-primary btn-block group/btn">
                            <span>View Details</span>
                            <ArrowUpRight className="size-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor={drawerId} aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 min-h-full w-full max-w-xl lg:max-w-2xl p-3 sm:p-5">
                            <JobDetails jobId={job.id} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard;