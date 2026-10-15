import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo / Marque */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-black text-emerald-900 tracking-tight flex items-center gap-2"
            >
              <span className="inline-block size-3 rounded-full bg-amber-500"></span>
              Fondation Junior
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-slate-700 font-medium text-base">
              <li>
                <Link to="/apropos" className="transition-colors hover:text-emerald-700">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/programmes" className="transition-colors hover:text-emerald-700">
                  Programmes
                </Link>
              </li>
              <li>
                <Link to="/impact" className="transition-colors hover:text-emerald-700">
                  Impact
                </Link>
              </li>
              <li>
                <Link to="/partenaires" className="transition-colors hover:text-emerald-700">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-emerald-700">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Bouton CTA Action */}
            <Link
              to="/devenir-partenaire"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-900 shadow-sm transition-all duration-300 hover:bg-amber-300 hover:shadow-md"
            >
              Devenir partenaire
            </Link>
          </nav>

          {/* Bouton Menu Mobile (Hamburger) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2.5 text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Menu déroulant Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <ul className="flex flex-col space-y-3 font-medium text-slate-800">
            <li>
              <Link
                to="/apropos"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-700"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                to="/programmes"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-700"
              >
                Programmes
              </Link>
            </li>
            <li>
              <Link
                to="/impact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-700"
              >
                Impact
              </Link>
            </li>
            <li>
              <Link
                to="/partenaires"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-700"
              >
                Partenaires
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md hover:bg-emerald-50 hover:text-emerald-700"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="pt-2">
            <Link
              to="/devenir-partenaire"
              onClick={() => setIsOpen(false)}
              className="w-full text-center inline-block rounded-full bg-amber-400 py-3 text-sm font-bold text-slate-900 shadow-sm hover:bg-amber-300"
            >
              Devenir partenaire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}