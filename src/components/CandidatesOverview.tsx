"use client";

import type React from "react";
import KanbanBoard from "@/components/KanbanBoard";
import { useCandidateStore } from "@/store/useCandidateStore";

const CandidatesOverview: React.FC = () => {
  const { candidates } = useCandidateStore();

  return (
    <div className="max-h-full flex flex-1">
      {/* Kanban Board */}
      <div className="w-full overflow-x-scroll relative min-h-fit">
        <KanbanBoard candidates={candidates} />
      </div>
    </div>
  );
};

export default CandidatesOverview;
