"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { SIDEBAR_BOTTOM_LINKS, SIDEBAR_MAIN_LINKS } from "@/constants";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Close drawer when pathname changes (page navigation)
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  return (
    <header className='border border-base-300 w-full rounded-box p-2 px-4 lg:p-4 bg-base-200'>
      <nav className="flex justify-between items-center">
        <Breadcrumb />

        {/* Logged In User (Static) */}
        <div className="hidden md:flex items-center gap-2">
          <div className="avatar avatar-placeholder">
            <div className="bg-base-300 text-base-content w-12 rounded-full">
              <span className="text-sm font-bold">SD</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm truncate">Sarah Doe</h3>
            <div className="text-xs text-base-content/60">sarah.doe@example.com</div>
          </div>
        </div>

        <Image
          src="/logo.svg"
          alt="Logo"
          width={72}
          height={72}
          preload
          className="logo md:hidden w-[72px] h-auto"
        />

        <div className="drawer drawer-end block md:hidden w-fit">
          <input 
            id="sidebar" 
            type="checkbox" 
            className="drawer-toggle" 
            checked={isDrawerOpen}
            onChange={(e) => setIsDrawerOpen(e.target.checked)}
          />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="sidebar" className="drawer-button btn btn-primary btn-square btn-link">
              <Menu className="text-base-content opacity-50" />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-72 p-4">

              <div className="flex flex-col gap-2">
                {/* Close button */}
                <div className="justify-end flex">
                  <button 
                    onClick={() => setIsDrawerOpen(false)}
                    className="btn btn-ghost btn-error btn-square btn-link"
                    aria-label='close sidebar'
                  >
                    <X className="size-5" />
                  </button>
                </div>

                {/* User Avatar */}
                <div className="items-center flex gap-2">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-base-300 text-base-content w-12 rounded-full">
                      <span className="text-sm font-bold">SD</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm truncate">Sarah Doe</h3>
                    <div className="text-xs text-base-content/60">sarah.doe@example.com</div>
                  </div>
                </div>
              </div>

              <div className="divider opacity-50" />


              {/* Navigation links */}
              <div className='flex-1 flex flex-col justify-between w-full'>
                {/* Main Links */}
                <ul className="w-full menu p-0! space-y-2">
                  {SIDEBAR_MAIN_LINKS.map((link) => (
                    <li
                      key={link.href}
                      className='w-full'
                      data-tip={link.name}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsDrawerOpen(false)}
                        className={
                          `p-3 gap-4 rounded-box ${pathname === link.href ? 'bg-primary text-primary-content' : ''}`
                        }
                      >
                        {link.icon && <link.icon className="size-5" />}
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Bottom Links */}
                <ul className="w-full menu p-0! space-y-2">
                  {SIDEBAR_BOTTOM_LINKS.map((link) => (
                    <li key={link.href} className='w-full'>
                      <Link
                        href={link.href}
                        onClick={() => setIsDrawerOpen(false)}
                        className={
                          `p-3 gap-4 rounded-box ${pathname === link.href ? 'bg-primary text-primary-content' : ''}`
                        }
                      >
                        {link.icon && <link.icon className="size-5" />}
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;