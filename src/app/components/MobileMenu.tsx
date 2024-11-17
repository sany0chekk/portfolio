import { Github, Linkedin, X } from "lucide-react";
import NavLink from "./ui/NavLink";
import Link from "next/link";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <div
      className={`lg:hidden z-50 fixed overflow-y-auto bg-modal w-full shadow-lg md:w-[40%] h-full top-0 right-0 p-6 flex flex-col gap-32 transition-all ${
        isOpen
          ? "visible opacity-100 translate-x-0 pointer-events-auto"
          : "invisible opacity-0 translate-x-full pointer-events-none"
      }`}
    >
      <button className="ml-auto" onClick={onClose}>
        <X />
      </button>
      <nav>
        <ul className="flex flex-col items-center gap-8">
          <li>
            <NavLink href="/" onClick={onClose}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink href="/projects" onClick={onClose}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink href="/contacts" onClick={onClose}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <ul className="flex items-center justify-center gap-5 mt-auto">
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
            href="https://www.linkedin.com/in/o-veselyi/"
            target="_blank"
            className="transition-opacity hover:opacity-50"
          >
            <Linkedin />
          </Link>
        </li>
      </ul>
    </div>
  );
}
