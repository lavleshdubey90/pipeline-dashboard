import { BriefcaseBusiness, CalendarClock, ChartLine, House, UserRound, Settings, HelpCircle } from 'lucide-react';


export const SIDEBAR_MAIN_LINKS = [
    { name: 'Home', href: '/', icon: House },
    { name: 'Jobs', href: '/jobs', icon: BriefcaseBusiness },
    { name: 'Candidates', href: '/candidates', icon: UserRound },
    { name: 'Interviews', href: '/interviews', icon: CalendarClock },
    { name: 'Analytics', href: '/analytics', icon: ChartLine },
];

export const SIDEBAR_BOTTOM_LINKS = [
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Help', href: '/help', icon: HelpCircle },
];