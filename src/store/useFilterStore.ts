"use client";

import { create } from "zustand";
import type { CandidateStatus } from "@/types";

export type ScoreRange =
  | "All"
  | "0-20"
  | "21-40"
  | "41-60"
  | "61-80"
  | "81-100";

export type FilterKey = "search" | "stage" | "experience" | "scoreRange";

export interface Filters {
  search: string;
  stage: CandidateStatus | "All";
  experience: string;
  scoreRange: ScoreRange;
}

interface FilterState {
  filters: Filters;
  setFilter: (key: FilterKey, value: string) => void;
  resetFilters: () => void;
}

const initialFilters: Filters = {
  search: "",
  stage: "All",
  experience: "All",
  scoreRange: "All",
};

export const useFilterStore = create<FilterState>((set) => ({
  filters: initialFilters,
  setFilter: (key, value) =>
    set((state) => ({ filters: { ...state.filters, [key]: value } })),
  resetFilters: () => set({ filters: initialFilters }),
}));
