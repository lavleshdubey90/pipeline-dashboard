import type React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <main className="h-dvh w-full flex flex-1 p-4 lg:p-5 gap-4 lg:gap-5">
      <Sidebar />
      <div className="flex flex-col w-full overflow-hidden gap-5">
        <Header />
        <div className="flex-1 h-full flex flex-col overflow-x-hidden overflow-y-auto py-2">
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
