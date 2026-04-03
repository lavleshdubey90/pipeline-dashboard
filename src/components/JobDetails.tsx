import React from 'react';
import { useJobStore } from '@/store/useJobStore';

const JobDetails: React.FC = () => {
    const selectedJobId = useJobStore((state) => state.selectedJobId);
    const selectedJob = useJobStore((state) => state.getJobById(selectedJobId || ''));

    console.log(selectedJob);

    if (!selectedJob) {
        return <div className="text-center text-base-content/70 py-12">Job not found!</div>;
    }

    return (
        <React.Fragment>
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-2xl font-bold text-base-content">
                            {selectedJob.title}
                        </h2>
                        <span className="badge badge-primary badge-lg">
                            {selectedJob.department}
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-base-content/70">
                        <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            {selectedJob.location}
                        </span>
                        <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                            {selectedJob.workplace}
                        </span>
                        <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                            {selectedJob.type}
                        </span>
                        <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            Posted {selectedJob.postedDate}
                        </span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-outline btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /></svg>
                        Edit
                    </button>
                    <button className="btn btn-error btn-sm btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                    </button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-base-300 rounded-box p-4">
                    <p className="text-2xl font-bold text-primary">{selectedJob.applicants}</p>
                    <p className="text-sm text-base-content/70">Total Applicants</p>
                </div>
                <div className="bg-base-300 rounded-box p-4">
                    <p className="text-2xl font-bold text-success">{selectedJob.salary}</p>
                    <p className="text-sm text-base-content/70">Salary Range</p>
                </div>
                <div className="bg-base-300 rounded-box p-4">
                    <p className="text-2xl font-bold text-accent">{selectedJob.experience}</p>
                    <p className="text-sm text-base-content/70">Experience</p>
                </div>
            </div>

            {/* Description */}
            <div className="mb-6">
                <h3 className="font-semibold text-lg mb-2">About the Role</h3>
                <p className="text-base-content/80 leading-relaxed">
                    {selectedJob.description}
                </p>
            </div>

            {/* Skills */}
            <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill, index) => (
                        <span key={index} className="badge badge-outline badge-primary">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Requirements */}
            <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">Requirements</h3>
                <ul className="space-y-2">
                    {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-base-content/80">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success mt-0.5 shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                            {req}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Responsibilities */}
            <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3">Responsibilities</h3>
                <ul className="space-y-2">
                    {selectedJob.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start gap-2 text-base-content/80">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5 shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                            {resp}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t border-base-300">
                <button className="btn btn-primary flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    View Applicants
                </button>
                <button className="btn btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" x2="12" y1="2" y2="15" /></svg>
                    Share
                </button>
            </div>
        </React.Fragment>
    )
}

export default JobDetails;