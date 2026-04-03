import React from "react";
import { CandidateStatus } from "@/types";

interface StatusBadgeProps {
    status: CandidateStatus;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const styles: Record<CandidateStatus, string> = {
        Applied: "badge-primary",
        Shortlisted: "badge-secondary",
        Interview: "badge-warning",
        Offered: "badge-accent",
        Hired: "badge-success",
    };
    return <span className={`badge badge-sm font-medium ${styles[status]}`}> {status} </span>;
};

export default StatusBadge;
