"use client";

import Link from "next/link";
import NavLink from "./ui/NavLink";
import { Github, Linkedin, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="flex items-center justify-between py-5">
        <Link href="/" className="font-bold text-xl">
          O. Veselyi
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-12">
            <li>
              <NavLink href="/">About</NavLink>
            </li>
            <li>
              <NavLink href="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink href="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>
        <ul className="hidden lg:flex items-center gap-5">
          <li>
            <Link
              href="https://github.com/sany0chekk"
              target="_blank"
              className="transition-opacity hover:opacity-50"
            >
              <Github />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/sany0chekk"
              target="_blank"
              className="transition-opacity hover:opacity-50"
            >
              <Linkedin />
            </Link>
          </li>
        </ul>
        <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu />
        </button>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
