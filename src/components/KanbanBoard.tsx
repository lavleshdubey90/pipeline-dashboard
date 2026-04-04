import { Candidate, CandidateStatus } from '@/types';
import React, { useState } from 'react';
import CandidateRow from '@/components/CandidateRow';
import { CANDIDATE_STAGES } from '@/constants';
import { useCandidateStore } from '@/store/useCandidateStore';

interface KanbanBoardProps {
    candidates: Candidate[];
}

const KanbanBoard: React.FC<KanbanBoardProps> = ({ candidates }) => {
    const { updateCandidateStatus } = useCandidateStore();
    const [dragOverStage, setDragOverStage] = useState<string | null>(null);

    const handleDragOver = (e: React.DragEvent, stageLabel: string) => {
        e.preventDefault();
        setDragOverStage(stageLabel);
    };

    const handleDragLeave = () => {
        setDragOverStage(null);
    };

    const handleDrop = (e: React.DragEvent, stageLabel: string) => {
        e.preventDefault();
        setDragOverStage(null);
        const candidateId = e.dataTransfer.getData("candidateId");
        if (candidateId) {
            updateCandidateStatus(candidateId, stageLabel as CandidateStatus);
        }
    };

    return (
        <div className="flex gap-4 lg:gap-5 min-h-fit absolute">
            {CANDIDATE_STAGES.map((stage) => {
                const stageCandidates = candidates.filter((c) => c.status === stage.label);
                const StageIcon = stage.icon;
                const isDragOver = dragOverStage === stage.label;

                return (
                    <div
                        key={stage.label}
                        onDragOver={(e) => handleDragOver(e, stage.label)}
                        onDragLeave={handleDragLeave}
                        onDrop={(e) => handleDrop(e, stage.label)}
                        className={`flex flex-col bg-base-100 rounded-box border w-80 shrink-0 transition-colors ${
                            isDragOver ? 'border-primary ring-2 ring-primary/20' : 'border-base-300'
                        }`}
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