export type CandidateStatus = "Applied" | "Shortlisted" | "Interview" | "Offered" | "Hired";

export interface Candidate {
    id: string;
    name: string;
    role: string;
    appliedFor: string;
    status: CandidateStatus;
    appliedDate: string;
    avatar?: string;
    email: string;
    experience: string;
}