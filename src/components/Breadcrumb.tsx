"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div className="hidden md:block breadcrumbs text-sm">
      <ul>
        <li>
          <Link
            href="/"
            className={
              pathname === "/" ? "no-underline cursor-default text-primary" : ""
            }
          >
            Dashboard
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");

          return (
            <li key={href} className="capitalize">
              {index === pathSegments.length - 1 ? (
                <span className="text-primary">{segment}</span>
              ) : (
                <Link href={href}>{segment}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
