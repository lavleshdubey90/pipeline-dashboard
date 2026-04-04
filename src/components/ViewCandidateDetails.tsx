import { useCandidateStore } from '@/store/useCandidateStore';
import { X } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Candidate } from '@/types';
import MatchScoreProgress from '@/components/MatchScoreProgress';
import { Briefcase, Award, Calendar, Clock, Mail, TrendingUp, FileText, Target, Activity, History } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';

interface ViewCandidateDetailsProps {
    id: string;
}

const CandidateDetailsContent: React.FC<{ candidate: Candidate }> = ({ candidate }) => {
    return (
        <div className="space-y-5">

            <div className="relative flex flex-col items-center">
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
                <h2 className="text-2xl md:text-3xl font-bold mt-5 text-center">{candidate.name}</h2>
                <p className="text-base-content/60 text-sm md:text-base flex items-center gap-2 mt-1">
                    <Mail className="size-4" />
                    {candidate.email}
                </p>
            </div>


            {/* Match Score Card - Prominent display */}
            <div className="bg-base-100 border border-base-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <MatchScoreProgress matchScore={candidate.matchScore} type="chart" />
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50">Match Score</p>
                            <div className="text-2xl font-bold"><MatchScoreProgress matchScore={candidate.matchScore} type="score" /></div>
                            <p className="text-xs text-success flex items-center gap-1 mt-0.5">
                                <TrendingUp className="size-4" />
                                Strong match
                            </p>
                        </div>
                    </div>
                    <StatusBadge status={candidate.status} />
                </div>
            </div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Current Position Card */}
                <div className="bg-base-200/50 border border-base-300 rounded-xl p-4 hover:bg-base-200 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Briefcase className="size-4 text-primary" />
                        </div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-base-content/50">Current Position</h3>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="font-semibold text-base">{candidate.currentRole}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-base-content/70">
                            <span>{candidate.currentCompany}</span>
                        </div>
                    </div>
                </div>

                {/* Experience Card */}
                <div className="bg-base-200/50 border border-base-300 rounded-xl p-4 hover:bg-base-200 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-2 bg-success/10 rounded-lg">
                            <Award className="size-4 text-success" />
                        </div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-base-content/50">Experience</h3>
                    </div>
                    <p className="text-2xl font-bold">{candidate.experience}</p>
                    <p className="text-xs text-base-content/50 mt-1">Professional experience</p>
                </div>
            </div>

            {/* Application Details */}
            <div className="bg-base-100 border border-base-300 rounded-2xl p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-base-content/50 mb-4 flex items-center gap-2">
                    <FileText className="size-4" />
                    Application Details
                </h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-base-200">
                        <span className="text-sm text-base-content/60 flex items-center gap-2">
                            <Target className="size-4" />
                            Applied For
                        </span>
                        <span className="text-primary font-medium capitalize text-sm">{candidate.appliedFor}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-base-200">
                        <span className="text-sm text-base-content/60 flex items-center gap-2">
                            <Activity className="size-4" />
                            Status
                        </span>
                        <StatusBadge status={candidate.status} />
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <span className="text-sm text-base-content/60 flex items-center gap-2">
                            <Award className="size-4" />
                            Experience Level
                        </span>
                        <span className="font-medium">{candidate.experience}</span>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="bg-base-100 border border-base-300 rounded-2xl p-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-base-content/50 mb-4 flex items-center gap-2">
                    <History className="size-4" />
                    Timeline
                </h3>
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-linear-to-b from-primary via-secondary to-base-300 rounded-full"></div>

                    <div className="space-y-6">
                        <div className="relative flex items-start gap-4 pl-1">
                            <div className="relative z-10 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-sm">
                                <Calendar className="size-3 text-primary-content" />
                            </div>
                            <div className="flex-1 pt-0.5">
                                <p className="text-xs text-base-content/50 uppercase tracking-wide">Applied</p>
                                <p className="font-medium">{candidate.appliedDate}</p>
                            </div>
                        </div>

                        <div className="relative flex items-start gap-4 pl-1">
                            <div className="relative z-10 w-6 h-6 rounded-full bg-secondary flex items-center justify-center shadow-sm">
                                <Clock className="size-3 text-secondary-content" />
                            </div>
                            <div className="flex-1 pt-0.5">
                                <p className="text-xs text-base-content/50 uppercase tracking-wide">Last Activity</p>
                                <p className="font-medium">{candidate.lastActivity}</p>
                            </div>
                        </div>
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
                <div className="menu bg-base-100/80 min-h-full backdrop-blur-sm max-w-xl w-full p-7 shadow-sm shadow-base-300">
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