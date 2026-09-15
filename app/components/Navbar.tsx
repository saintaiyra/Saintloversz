"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative w-full px-4 py-6 sm:px-6 md:px-8 md:py-8">
      <div className="flex items-center justify-between">
        
        {/* LOGO */}
        <span className="text-base font-bold tracking-tight sm:text-lg">
          SAINT LOVERS
        </span>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-6 text-sm uppercase tracking-wider md:flex">
          <a
            href="https://letterboxd.com/saintknowlove/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            FILMS
          </a>

          <a
            href="https://soundcloud.com/ssaintaiyra0666"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            MUSIC
          </a>

          <a
            href="https://www.youtube.com/@SaintAiyra"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            EDITS
          </a>

          <a
            href="https://github.com/saintaiyra"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            CODE
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`block h-px w-6 bg-current transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-px w-6 bg-current transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mt-6 flex flex-col border-t border-current pt-6 md:hidden">
          <a
            href="https://letterboxd.com/saintknowlove/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-sm uppercase tracking-wider"
          >
            FILMS
          </a>

          <a
            href="https://soundcloud.com/ssaintaiyra0666"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-sm uppercase tracking-wider"
          >
            MUSIC
          </a>

          <a
            href="https://www.youtube.com/@SaintAiyra"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-sm uppercase tracking-wider"
          >
            EDITS
          </a>

          <a
            href="https://github.com/saintaiyra"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="py-3 text-sm uppercase tracking-wider"
          >
            CODE
          </a>
        </div>
      )}
    </nav>
  );
}