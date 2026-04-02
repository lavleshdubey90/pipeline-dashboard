"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { SIDEBAR_MAIN_LINKS, SIDEBAR_BOTTOM_LINKS } from '@/constants';

const Sidebar: React.FC = () => {
    const path = usePathname();
    return (
        <aside className="w-80 border border-base-300 bg-base-200 p-4 rounded-box flex flex-col">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} className='invert' />
            <div className="divider opacity-50" />

            <div className='flex-1 flex flex-col justify-between w-full'>
                <ul className="w-full menu p-0! space-y-2">
                    {SIDEBAR_MAIN_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={
                                    `p-3 gap-4 rounded-box
                                ${path === link.href && 'bg-primary text-primary-content'}`
                                }
                            >
                                {link.icon && <link.icon className="size-5" />}
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className="w-full menu p-0! space-y-2">
                    {SIDEBAR_BOTTOM_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={
                                    `p-3 gap-4 rounded-box
                                ${path === link.href && 'bg-primary text-primary-content'}`
                                }
                            >
                                {link.icon && <link.icon className="size-5" />}
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;