import { candidateData } from "@/data/candidate.data";
import StatusBadge from "@/components/StatusBadge";

interface CandidateRowProps {
    candidate: typeof candidateData[0];
}


const CandidateRow: React.FC<CandidateRowProps> = ({ candidate }) => {
    const initials = candidate.name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();

    return (
        <div className="flex items-center gap-3 p-3 rounded-lg bg-base-200 hover:bg-base-300 transition-all cursor-pointer group">
            {/* Avatar */}
            <div className="avatar avatar-placeholder">
                <div className="bg-neutral text-neutral-content w-12 border border-base-300 rounded-full">
                    <span className="text-sm font-bold">{initials}</span>
                </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm truncate">{candidate.name}</h3>
                    <StatusBadge status={candidate.status} />
                </div>
                <div className="flex items-center gap-2 text-xs text-base-content/60 mt-0.5">
                    <span className="truncate">{candidate.currentRole}</span>
                    <span>•</span>
                    <span className="text-primary truncate">{candidate.appliedFor}</span>
                </div>
            </div>

            {/* Experience */}
            <div className="hidden sm:block text-xs text-base-content/50 shrink-0">
                {candidate.experience}
            </div>
        </div>
    );
};

export default CandidateRow;