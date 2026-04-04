import React from "react";
import StatCard from "@/components/StatCard";
import JobsOverview from "@/components/JobsOverview";
import CandidatesOverview from "@/components/CandidatesOverview";
import CandidatesTable from "@/components/CandidatesTable";

const dashboardOverview = [
  {
    title: "Active Jobs Post",
    value: "2",
    className: "border-primary"
  },
  {
    title: "Total Candidates",
    value: "342",
    className: "border-secondary"
  },
  {
    title: "Total Applications",
    value: "1,247",
    className: "border-accent"
  },
  {
    title: "Total Interviews",
    value: "7",
    className: "border-success"
  }
];

export default function Home() {
  return (
    <React.Fragment>
      {/* Dashboard Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
        {dashboardOverview.map((card, index) => (
          <StatCard
            key={index}
            title={card.title}
            value={card.value}
            className={`${card.className}`}
          />
        ))}
      </section>

      {/* Overview Section */}
      <section className="mt-10 flex xl:flex-row flex-col gap-5 w-full">
        <div className="space-y-2 w-full flex flex-col min-h-132 xl:min-h-full flex-1">
          <h2 className="text-xl font-bold">Candidates Status</h2>
          <CandidatesOverview />
        </div>

        <div className="space-y-2 min-w-fit md:max-w-5xl">
          <h2 className="text-xl font-bold">Jobs</h2>
          <JobsOverview />
        </div>
      </section>

      {/* Candidates Table */}
      <section className="mt-10">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Candidates</h2>
          <CandidatesTable />
        </div>
      </section>
    </React.Fragment>
  );
}
