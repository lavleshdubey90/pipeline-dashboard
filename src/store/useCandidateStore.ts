import { create } from "zustand";
import { Candidate } from "@/types";
import { candidateData } from "@/data";

interface CandidateStore {
    candidates: Candidate[];
    getCandidateById: (id: string) => Candidate | undefined;
}

export const useCandidateStore = create<CandidateStore>((set, get) => ({
    candidates: candidateData,
    getCandidateById: (id: string) => get().candidates.find((candidate) => candidate.id === id),
}));
