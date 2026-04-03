import React from 'react';
import { candidateData } from '@/data';
import StatusBadge from '@/components/StatusBadge';
import MatchScoreProgress from '@/components/MatchScoreProgress';
import Image from 'next/image';

const CandidatesTable: React.FC = () => {
    return (
        <React.Fragment>
            <div className="overflow-x-auto rounded-box">
                <table className="table">
                    {/* head */}
                    <thead className='bg-base-200'>
                        <tr>
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
                        {/* row 1 */}
                        {candidateData.map((candidate, index) => (
                            <tr key={candidate.id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="size-12 rounded-full">
                                                <Image
                                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
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
                                    <MatchScoreProgress matchScore={candidate.matchScore} />
                                </td>
                                <td>{candidate.lastActivity}</td>
                                <th>
                                    <button className="btn btn-link btn-sm">View</button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default CandidatesTable;