import { useCandidateStore } from '@/store/useCandidateStore';
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Candidate } from '@/types';
import MatchScoreProgress from '@/components/MatchScoreProgress';
import { Briefcase, Building2, Award, Calendar, Clock } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';

interface ViewCandidateDetailsProps {
    id: string;
}

const CandidateDetailsContent: React.FC<{ candidate: Candidate }> = ({ candidate }) => {
    return (
        <div className="space-y-6">
            {/* Header - Avatar, Name, Email, Match Score */}
            <div className="flex flex-col items-center">
                <div className="indicator">
                    <span className="indicator-item badge py-4 badge-soft indicator-bottom">
                        <MatchScoreProgress matchScore={candidate.matchScore} />
                    </span>
                    <div className="avatar">
                        <div className="w-32 rounded-xl border-2 border-base-300">
                            <Image
                                src={candidate.avatar || ''}
                                alt={candidate.name}
                                width={128}
                                height={128}
                            />
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mt-4">{candidate.name}</h2>
                <p className="text-base-content/60">{candidate.email}</p>
            </div>

            <div className="divider my-2"></div>

            {/* Current Position */}
            <div className="bg-base-200/50 border border-base-300 rounded-box p-4">
                <h3 className="text-sm font-bold opacity-50 uppercase mb-3">Current Position</h3>
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <Briefcase className="size-4 text-primary" />
                        <span className="font-medium">{candidate.currentRole}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Building2 className="size-4 text-secondary" />
                        <span>{candidate.currentCompany}</span>
                    </div>
                </div>
            </div>

            {/* Application Details */}
            <div className="bg-base-200/50 border border-base-300 rounded-box p-4">
                <h3 className="text-sm font-bold opacity-50 uppercase mb-3">Application Details</h3>
                <div className="flex items-center gap-4 mb-4">
                    <MatchScoreProgress matchScore={candidate.matchScore} type="chart" />
                    <div>
                        <p className="text-sm opacity-70">Match Score</p>
                        <p className="text-2xl font-bold">{candidate.matchScore}%</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm opacity-70">Applied For</span>
                        <span className="font-medium">{candidate.appliedFor}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm opacity-70">Status</span>
                        <StatusBadge status={candidate.status} />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm opacity-70">Experience</span>
                        <div className="flex items-center gap-1">
                            <Award className="size-3" />
                            <span>{candidate.experience}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="bg-base-200/50 border border-base-300 rounded-box p-4">
                <h3 className="text-sm font-bold opacity-50 uppercase mb-3">Timeline</h3>
                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-3">
                        <Calendar className="size-4 opacity-50" />
                        <span className="opacity-70">Applied:</span>
                        <span>{candidate.appliedDate}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Clock className="size-4 opacity-50" />
                        <span className="opacity-70">Last Activity:</span>
                        <span>{candidate.lastActivity}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ViewCandidateDetails: React.FC<ViewCandidateDetailsProps> = ({ id }) => {
    const { getCandidateById } = useCandidateStore();
    const [candidate, setCandidate] = useState<Candidate | undefined>(undefined);
    const drawerId = `view-candidate-details-${id}`;

    return (
        <div className="drawer drawer-end">
            <input id={drawerId} type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor={drawerId}
                    onClick={() => setCandidate(getCandidateById(id))}
                    className="drawer-button btn btn-link no-underline btn-sm">View</label>
            </div>
            <div className="drawer-side">
                <label htmlFor={drawerId} aria-label="close sidebar" className="drawer-overlay"></label>

                {/* Sidebar Candidate Details */}
                <div className="menu bg-base-100/80 min-h-full backdrop-blur-sm w-xl p-7">
                    {/* Header */}
                    <div className='flex justify-between items-center'>
                        <h3 className="text-xl font-bold">Candidate Details</h3>
                        <label htmlFor={drawerId} aria-label='close sidebar'>
                            <X className='btn btn-ghost btn-error btn-square btn-link size-5' />
                        </label>
                    </div>

                    {/* Divider */}
                    <div className="divider my-5 opacity-50"></div>

                    {/* Content */}
                    {candidate ? (
                        <CandidateDetailsContent candidate={candidate} />
                    ) : (
                        <div className="w-full flex flex-1 place-items-center">
                            <p className="text-gray-500 text-xl text-center w-full">No candidate found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ViewCandidateDetails;