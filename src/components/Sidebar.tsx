"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { SIDEBAR_MAIN_LINKS, SIDEBAR_BOTTOM_LINKS } from '@/constants';
import { PanelLeftClose, PanelLeftOpen } from 'lucide-react';

const Sidebar: React.FC = () => {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <aside
            className={`border border-base-300 bg-base-200 p-4 rounded-box flex flex-col 
                ${isOpen ? 'w-80' : 'w-20'}
                duration-300 transition-all ease-in-out`}
        >

            {/* Logo and toggle button */}
            <div className={`flex justify-between items-center ${!isOpen && 'justify-center'}`}>
                <Image hidden={!isOpen} src="/logo.svg" alt="Logo" width={100} height={100} className='invert w-32 h-auto' />

                {/* Hiding and showing sidebar */}
                <label className="btn btn-circle btn-link opacity-50 btn-ghost swap swap-rotate">
                    <input
                        type="checkbox"
                        checked={isOpen}
                        onChange={() => setIsOpen(prev => !prev)}
                    />
                    <PanelLeftOpen className='swap-on' />
                    <PanelLeftClose className='swap-off' />
                </label>
            </div>

            {/* Divider */}
            <div className="divider opacity-50" />

            {/* Navigation links */}
            <div className='flex-1 flex flex-col justify-between w-full'>
                {/* Main Links */}
                <ul className="w-full menu p-0! space-y-2">
                    {SIDEBAR_MAIN_LINKS.map((link) => (
                        <li
                            key={link.href}
                            className={isOpen ? 'w-full' : 'w-fit tooltip tooltip-right'}
                            data-tip={link.name}
                        >
                            <Link
                                href={link.href}
                                className={
                                    `p-3 gap-4 rounded-box
                                ${path === link.href && 'bg-primary text-primary-content'}`
                                }
                            >
                                {link.icon && <link.icon className="size-5" />}
                                {isOpen && link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Bottom Links */}
                <ul className="w-full menu p-0! space-y-2">
                    {SIDEBAR_BOTTOM_LINKS.map((link) => (
                        <li key={link.href} className={isOpen ? 'w-full' : 'w-fit tooltip tooltip-right'} data-tip={link.name}>
                            <Link
                                href={link.href}
                                className={
                                    `p-3 gap-4 rounded-box
                                ${path === link.href && 'bg-primary text-primary-content'}`
                                }
                            >
                                {link.icon && <link.icon className="size-5" />}
                                {isOpen && link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;