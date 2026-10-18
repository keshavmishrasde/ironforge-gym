import React from "react";
import { Menu } from "lucide-react";

const links = ["Home", "Programs", "Trainers", "Pricing", "Contact"];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-[#26262D] bg-[#1A1A1D]/90 px-4 backdrop-blur md:h-20 md:px-8 lg:px-16">
      <div className="logo flex items-center gap-2">
        <img
          src="/favicon.png"
          alt="IronForge"
          className="h-8 w-8 md:h-10 md:w-10"
        />
        <span className="font-display text-2xl tracking-wide text-white md:text-3xl font-extrabold">
          IRONFORGE
        </span>
      </div>

      <ul className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-zinc-300 transition hover:text-[#C6FF3D] lg:text-base"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <button className="hidden rounded-full bg-[#C6FF3D] px-6 py-2.5 text-sm font-semibold text-black transition hover:brightness-110 md:block">
        Join Now
      </button>

      <button
        aria-label="Open menu"
        className="menu rounded-lg p-2 text-[#C6FF3D] active:bg-white/10 md:hidden"
      >
        <Menu size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
