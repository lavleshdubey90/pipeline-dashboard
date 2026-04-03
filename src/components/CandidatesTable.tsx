"use client";

import React, { useMemo } from 'react';
import { candidateData } from '@/data';
import StatusBadge from '@/components/StatusBadge';
import MatchScoreProgress from '@/components/MatchScoreProgress';
import Image from 'next/image';
import Filters from '@/components/Filters';
import { useFilterStore } from '@/store/useFilterStore';
import { Candidate } from '@/types';

const CandidatesTable: React.FC = () => {
    const { filters } = useFilterStore();

    // Filter candidates based on store state
    const filteredCandidates = useMemo(() => {
        return candidateData.filter((candidate: Candidate & { matchScore: number; currentRole: string; currentCompany: string; lastActivity: string }) => {
            // Search by name or email
            const searchLower = filters.search.toLowerCase();
            const matchesSearch = !filters.search || 
                candidate.name.toLowerCase().includes(searchLower) ||
                candidate.email.toLowerCase().includes(searchLower);

            // Filter by stage
            const matchesStage = filters.stage === "All" || candidate.status === filters.stage;

            // Filter by experience
            const years = parseInt(candidate.experience);
            const matchesExperience = filters.experience === "All" ||
                (filters.experience === "0-2" && years <= 2) ||
                (filters.experience === "3-5" && years >= 3 && years <= 5) ||
                (filters.experience === "6+" && years >= 6);

            // Filter by score range
            let matchesScore = true;
            if (filters.scoreRange !== "All") {
                const [min, max] = filters.scoreRange.split("-").map(Number);
                matchesScore = candidate.matchScore >= min && candidate.matchScore <= max;
            }

            return matchesSearch && matchesStage && matchesExperience && matchesScore;
        });
    }, [filters]);

    return (
        <React.Fragment>
            <Filters />

            <div className="overflow-x-auto rounded-box">
                <table className="table">
                    {/* head */}
                    <thead className='bg-base-200'>
                        <tr className='h-16'>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Current Role</th>
                            <th>Current Company</th>
                            <th>Applied For</th>
                            <th>Experience</th>
                            <th>Status</th>
                            <th>Match Score</th>
                            <th>Last Activity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCandidates.length === 0 ? (
                            <tr>
                                <td colSpan={10} className="text-center py-12 text-base-content/50">
                                    <p className="text-lg">No candidates match your filters</p>
                                    <p className="text-sm mt-2">Try adjusting your search or filter criteria</p>
                                </td>
                            </tr>
                        ) : (
                            filteredCandidates.map((candidate, index) => (
                            <tr key={candidate.id}>
                                <th className='font-bold'>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="size-12 rounded-full">
                                                <Image
                                                    src={candidate.avatar || ""}
                                                    alt="Avatar Tailwind CSS Component"
                                                    width={48}
                                                    height={48}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{candidate.name}</div>
                                            <div className="text-sm opacity-50">{candidate.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {candidate.currentRole}
                                </td>
                                <td>
                                    {candidate.currentCompany}
                                </td>
                                <td>
                                    {candidate.appliedFor}
                                </td>
                                <td>{candidate.experience}</td>
                                <td>
                                    <StatusBadge status={candidate.status} />
                                </td>
                                <td>
                                    <MatchScoreProgress matchScore={candidate.matchScore} type="score" />
                                </td>
                                <td>{candidate.lastActivity}</td>
                                <th>
                                    <button className="btn btn-link no-underline btn-sm">View</button>
                                </th>
                            </tr>
                        ))
                        )}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default CandidatesTable;