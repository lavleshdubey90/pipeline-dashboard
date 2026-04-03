import React from "react";
import StatCard from "@/components/StatCard";
import JobsOverview from "@/components/JobsOverview";
import CandidatesOverview from "@/components/CandidatesOverview";

const dashboardOverview = [
  {
    title: "Active Jobs Post",
    value: "24",
    className: "border-primary"
  },
  {
    title: "Total Candidates",
    value: "593",
    className: "border-secondary"
  },
  {
    title: "Total Applications",
    value: "1,247",
    className: "border-accent"
  },
  {
    title: "Total Interviews",
    value: "89",
    className: "border-success"
  }
];

export default function Home() {
  return (
    <React.Fragment>
      {/* Dashboard Stats */}
      <div className="grid grid-cols-4 gap-5">
        {dashboardOverview.map((card, index) => (
          <StatCard
            key={index}
            title={card.title}
            value={card.value}
            className={`${card.className}`}
          />
        ))}
      </div>

      {/* Overview Section */}
      <section className="mt-10 flex gap-5 w-full">
        <div className="space-y-2 w-full">
          <h2 className="text-xl font-bold">Overview</h2>
          <CandidatesOverview />
        </div>

        <div className="space-y-2 min-w-40 max-w-5xl">
          <h2 className="text-xl font-bold">Jobs</h2>
          <JobsOverview />
        </div>
      </section>
    </React.Fragment>
  );
}
