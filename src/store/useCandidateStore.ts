import { create } from "zustand";
import { candidateData } from "@/data";
import type { Candidate, CandidateStatus } from "@/types";

interface CandidateStore {
  candidates: Candidate[];
  getCandidateById: (id: string) => Candidate | undefined;
  updateCandidateStatus: (id: string, status: CandidateStatus) => void;
}

export const useCandidateStore = create<CandidateStore>((set, get) => ({
  candidates: candidateData,
  getCandidateById: (id: string) =>
    get().candidates.find((candidate) => candidate.id === id),
  updateCandidateStatus: (id: string, status: CandidateStatus) =>
    set((state) => ({
      candidates: state.candidates.map((candidate) =>
        candidate.id === id ? { ...candidate, status } : candidate,
      ),
    })),
}));
