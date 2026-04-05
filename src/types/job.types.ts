export type JobType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Freelance"
  | "Internship";

export type WorkplaceType = "Remote" | "Hybrid" | "Onsite";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: JobType;
  workplace: WorkplaceType;
  salary: string;
  postedDate: string;
  applicants: number;
  openPositions: number;
  hiringManager: string;
  status: "active" | "paused" | "closed";
  description: string;
  requirements: string[];
  responsibilities: string[];
  skills: string[];
  experience: string;
}
