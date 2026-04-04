import Image from "next/image";
import MatchScoreProgress from "@/components/MatchScoreProgress";
import { Candidate } from "@/types";

interface CandidateRowProps {
    candidate: Candidate;
}

const CandidateRow: React.FC<CandidateRowProps> = ({ candidate }) => {
    const handleDragStart = (e: React.DragEvent) => {
        e.dataTransfer.setData("candidateId", candidate.id);
        e.dataTransfer.effectAllowed = "move";
    };

    return (
        <div
            draggable
            onDragStart={handleDragStart}
            className="cursor-move bg-base-200 rounded-box p-3 hover:bg-base-300 transition-colors"
        >
            <div className="flex items-start gap-2">
                {/* Avatar */}
                <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-12 border border-base-300 rounded-full">
                        <Image
                            src={candidate.avatar || ""}
                            alt="Candidate"
                            width={48}
                            height={48}
                        />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm text-base-content truncate">
                        {candidate.name}
                    </h4>
                    <p className="text-xs text-base-content/60 truncate">
                        {candidate.currentRole}
                    </p>
                    <div className="flex items-center justify-between gap-2 mt-1">
                        <span className="text-xs text-primary font-medium">
                            {candidate.experience}
                        </span>
                        <div className="flex items-center gap-1 text-sm">
                            <MatchScoreProgress matchScore={candidate.matchScore} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateRow;