"use client";

import React from "react";
import { candidateData } from "@/data/candidate.data";
import { CANDIDATE_STAGES } from "@/constants";
import CandidateRow from "@/components/CandidateRow";

const CandidatesOverview: React.FC = () => {
  return (
    <div className="bg-base-200 rounded-box p-5 max-h-full flex flex-col w-full">
      <div className="tabs tabs-lift shadow-none gap-x-4 h-full">
        {CANDIDATE_STAGES.map((stage, index) => {
          const stageCandidates = candidateData.filter((c) => c.status === stage.label);

          return (
            <React.Fragment key={index}>
              <label className="tab gap-3">
                {stage.label}
                <input
                  type="radio"
                  name="my_tabs_1"
                  className={`tab checked:bg-${stage.color}`}
                  aria-label={stage.label}
                  defaultChecked={index === 0}
                />
                <stage.icon className="size-5" />
                <span className={`badge badge-xs font-bold badge-${stage.color}`}>{stageCandidates.length}</span>
              </label>
              <div className="tab-content bg-base-100 border-base-300 p-5">
                <div className="space-y-3 overflow-y-auto min-h-96 max-h-96">
                  {stageCandidates.length === 0 ? (
                    <div className="text-center py-8 text-base-content/50 text-sm">
                      No candidates in this stage
                    </div>
                  ) : (
                    stageCandidates.map((candidate) => (
                      <CandidateRow key={candidate.id} candidate={candidate} />
                    ))
                  )}
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CandidatesOverview;
