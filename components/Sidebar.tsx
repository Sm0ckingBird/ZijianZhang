"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  GoogleScholarIcon,
  OrcidIcon,
  CloseIcon,
  MenuIcon,
} from "./Icons";

const sectionLinks = navLinks.filter((link) => !link.external);
const sectionIds = sectionLinks.map((link) => link.href.replace("#", ""));

const socialLinks = [
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: profile.googleScholar, label: "Google Scholar", Icon: GoogleScholarIcon },
  { href: profile.orcid, label: "ORCID", Icon: OrcidIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
];

function useActiveSection() {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

function Nav({ active, onNavigate }: { active: string; onNavigate?: () => void }) {
  return (
    <ol className="space-y-3 font-mono text-sm">
      {sectionLinks.map((link, i) => {
        const id = link.href.replace("#", "");
        const isActive = id === active;
        return (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onNavigate}
              className={`group flex items-center gap-3 ${
                isActive ? "text-lightest-slate" : "text-slate hover:text-lightest-slate"
              }`}
            >
              <span
                className={`h-px transition-all duration-300 ${
                  isActive ? "w-10 bg-teal" : "w-5 bg-slate-dim group-hover:w-10 group-hover:bg-teal"
                }`}
              />
              0{i + 1}. {link.label}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

function SocialIcons() {
  return (
    <ul className="flex items-center gap-4">
      {socialLinks.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="block text-slate transition-all duration-200 hover:-translate-y-1 hover:text-teal"
          >
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Sidebar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

  return (
    <>
      {/* Desktop sticky sidebar */}
      <aside className="sticky top-0 hidden h-screen w-[440px] flex-none flex-col justify-between self-start px-14 py-16 lg:flex">
        <div>
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            aria-label={`View full-size photo of ${profile.name}`}
            className="block rounded-full transition-transform duration-200 hover:scale-105"
          >
            <img
              src={withBasePath(profile.photo)}
              alt={profile.name}
              className="h-32 w-32 rounded-full border-2 border-teal/40 object-cover"
            />
          </button>
          <h1 className="mt-6 text-3xl font-bold text-lightest-slate">{profile.name}</h1>
          <p className="mt-2 text-lg font-medium text-slate">{profile.role}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate">{profile.tagline}</p>

          <nav className="mt-12">
            <Nav active={active} />
          </nav>
        </div>

        <SocialIcons />
      </aside>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-30 flex h-16 items-center justify-between border-b border-navy-lighter/60 bg-navy/85 px-6 backdrop-blur lg:hidden">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={withBasePath(profile.photo)}
            alt={profile.name}
            className="h-8 w-8 rounded-full border border-teal/40 object-cover"
          />
          <span className="font-mono text-sm text-lightest-slate">{profile.name}</span>
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-lightest-slate"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 top-16 z-30 flex flex-col justify-between bg-navy px-8 py-10 lg:hidden">
          <nav>
            <Nav active={active} onNavigate={() => setOpen(false)} />
          </nav>
          <SocialIcons />
        </div>
      )}

      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 p-6 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-6 top-6 text-slate transition-colors hover:text-teal"
            onClick={() => setLightboxOpen(false)}
          >
            <CloseIcon className="h-7 w-7" />
          </button>
          <img
            src={withBasePath(profile.photo)}
            alt={profile.name}
            className="max-h-[85vh] max-w-[90vw] rounded-lg border-2 border-teal/40 object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
