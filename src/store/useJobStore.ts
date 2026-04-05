import { create } from "zustand";
import { jobsData } from "@/data";
import type { Job } from "@/types";

type JobStore = {
  jobs: Job[];
  setJobs: (jobs: Job[]) => void;
  selectedJobId: string | null;
  getJobById: (id: string) => Job | undefined;
  setSelectedJobId: (jobId: string) => void;
};

export const useJobStore = create<JobStore>((set, get) => ({
  jobs: jobsData,
  selectedJobId: jobsData[0].id,
  setJobs: (jobs: Job[]) => set({ jobs }),
  setSelectedJobId: (jobId: string) => set({ selectedJobId: jobId }),
  getJobById: (id: string) => get().jobs.find((job) => job.id === id),
}));
