"use client";

import { useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { CloseIcon, MenuIcon } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-navy-lighter/60 bg-navy/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-10">
        <a
          href="#top"
          className="font-mono text-lg font-semibold text-teal"
          onClick={() => setOpen(false)}
        >
          ZZ
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <ol className="flex items-center gap-6 font-mono text-sm text-lightest-slate">
            {navLinks
              .filter((link) => !link.external)
              .map((link, i) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-teal">
                    <span className="text-teal">0{i + 1}.</span> {link.label}
                  </a>
                </li>
              ))}
          </ol>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-teal px-4 py-2 font-mono text-sm text-teal transition-all hover:-translate-y-0.5 hover:bg-teal/10"
          >
            Résumé
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-lightest-slate md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy-lighter bg-navy px-6 py-6 md:hidden">
          <ol className="flex flex-col gap-5 font-mono text-sm text-lightest-slate">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="transition-colors hover:text-teal"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-teal">0{i + 1}.</span> {link.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </header>
  );
}
