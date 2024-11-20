"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({ href, children, onClick }: Props) {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === href
      : pathname?.startsWith(href) && pathname !== "/";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative font-medium text-2xl md:text-xl lg:text-base transition-colors hover:text-green before:transition-all before:content-['<'] before:opacity-0 before:absolute  before:text-[10px] before:top-1/2 before:-translate-y-1/2 before:-left-2 after:transition-all after:content-['>'] after:opacity-0 after:absolute after:text-[10px] after:top-1/2 after:-translate-y-1/2 after:-right-2 ${
        isActive &&
        "text-green before:-left-3 before:opacity-100 after:-right-3 after:opacity-100"
      }`}
    >
      {children}
    </Link>
  );
}
