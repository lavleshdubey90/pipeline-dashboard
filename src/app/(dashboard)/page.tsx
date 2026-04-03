import DashboardOverviewCard from "@/components/DashboardOverviewCard";

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
    <div>
      {/* Dashboard Stats */}
      <div className="grid grid-cols-4 gap-5">
        {dashboardOverview.map((card, index) => (
          <DashboardOverviewCard
            key={index}
            title={card.title}
            value={card.value}
            className={`${card.className}`}
          />
        ))}
      </div>

      {/* Active Jobs */}
      <div className="mt-10">
        <h2 className="font-bold text-2xl">Active Jobs</h2>
        
        
      </div>
    </div>
  );
}
