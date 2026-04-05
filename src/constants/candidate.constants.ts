import {
  AlertCircle,
  CheckCircle,
  Clock,
  UserCheck,
  Users,
} from "lucide-react";

export const CANDIDATE_STAGES = [
  {
    label: "Applied",
    icon: Clock,
    color: "primary",
  },
  {
    label: "Shortlisted",
    icon: AlertCircle,
    color: "secondary",
  },
  {
    label: "Interview",
    icon: Users,
    color: "warning",
  },
  {
    label: "Offered",
    icon: CheckCircle,
    color: "accent",
  },
  {
    label: "Hired",
    icon: UserCheck,
    color: "success",
  },
];
