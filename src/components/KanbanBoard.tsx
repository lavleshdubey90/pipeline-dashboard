import { Candidate } from '@/types';
import React from 'react';
import CandidateRow from '@/components/CandidateRow';
import { CANDIDATE_STAGES } from '@/constants';

interface KanbanBoardProps {
    candidates: Candidate[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ candidates }) => {
    return (
        // <div className="flex gap-4 overflow-x-auto pb-4">
        <div className="flex gap-5 min-h-fit absolute">
            {CANDIDATE_STAGES.map((stage) => {
                const stageCandidates = candidates.filter((c) => c.status === stage.label);
                const StageIcon = stage.icon;

                return (
                    <div
                        key={stage.label}
                        className="flex flex-col bg-base-100 rounded-box border border-base-300 w-80 shrink-0"
                    >
                        {/* Kanban Card Header */}
                        <div
                            className="px-4 rounded-t-box py-3 bg-linear-to-r from-base-200 to-base-100 border-b border-base-300 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-2">
                                <StageIcon className={`size-5 text-${stage.color}`} />
                                <div>
                                    <h3 className="font-semibold text-sm text-base-content">{stage.label}</h3>
                                    <p className="text-xs text-base-content/50">{stageCandidates.length} candidate{stageCandidates.length !== 1 ? 's' : ''}</p>
                                </div>
                            </div>
                            <span className={`badge badge-sm badge-${stage.color} gap-1`}>
                                {stageCandidates.length}
                            </span>
                        </div>

                        {/* Kanban Card Body */}
                        <div className="p-4 space-y-3 overflow-y-auto max-h-96">
                            {stageCandidates.length === 0 ? (
                                <div className="flex items-center justify-center h-24 text-base-content/30 text-sm">
                                    <p>No candidates</p>
                                </div>
                            ) : (
                                stageCandidates.map((candidate) => (
                                    <CandidateRow key={candidate.id} candidate={candidate} />
                                ))
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default KanbanBoard;