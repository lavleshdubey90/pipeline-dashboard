import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import React from 'react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <main className="h-dvh w-full flex flex-1 p-5 gap-5 drawer lg:drawer-open">
            <Sidebar />
            <div className="flex flex-col w-full gap-5 drawer-content">
                <Header />
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default DashboardLayout;