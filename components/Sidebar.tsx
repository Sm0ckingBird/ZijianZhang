"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";
import { GithubIcon, LinkedinIcon, MailIcon, CloseIcon, MenuIcon } from "./Icons";

const sectionLinks = navLinks.filter((link) => !link.external);
const sectionIds = sectionLinks.map((link) => link.href.replace("#", ""));

const socialLinks = [
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
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
    <ul className="flex items-center gap-5">
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

  return (
    <>
      {/* Desktop fixed sidebar */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-[380px] flex-col justify-between px-12 py-16 lg:flex">
        <div>
          <img
            src={withBasePath(profile.photo)}
            alt={profile.name}
            className="h-20 w-20 rounded-full border-2 border-teal/40 object-cover"
          />
          <h1 className="mt-6 text-3xl font-bold text-lightest-slate">{profile.name}</h1>
          <p className="mt-2 text-lg font-medium text-slate">{profile.role}</p>
          <p className="mt-4 text-sm leading-relaxed text-slate">{profile.tagline}</p>

          <nav className="mt-12">
            <Nav active={active} />
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded border border-teal px-5 py-2.5 font-mono text-xs text-teal transition-all hover:-translate-y-0.5 hover:bg-teal/10"
          >
            View Full Résumé
          </a>
          <SocialIcons />
        </div>
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
          <div className="flex flex-col gap-8">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit rounded border border-teal px-5 py-2.5 font-mono text-xs text-teal"
              onClick={() => setOpen(false)}
            >
              View Full Résumé
            </a>
            <SocialIcons />
          </div>
        </div>
      )}
    </>
  );
}
