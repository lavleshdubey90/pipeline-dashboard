"use client";

import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";

const Header: React.FC = () => {
  const path = usePathname();
  return (
    <header className='border border-base-300 w-full rounded-box p-4 bg-base-200'>
      <nav className="flex justify-between items-center">
        <Breadcrumb />
      </nav>
    </header>
  )
}

export default Header;