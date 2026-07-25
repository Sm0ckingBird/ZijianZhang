import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const links = [
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
];

export function LeftRail() {
  return (
    <aside className="fixed bottom-0 left-6 z-20 hidden lg:flex">
      <div className="flex flex-col items-center gap-6">
        <ul className="flex flex-col items-center gap-5">
          {links.map(({ href, label, Icon }) => (
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
        <div className="h-24 w-px bg-slate-dim" />
      </div>
    </aside>
  );
}

export function RightRail() {
  return (
    <aside className="fixed bottom-0 right-6 z-20 hidden lg:flex">
      <div className="flex flex-col items-center gap-6">
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-sm tracking-widest text-slate transition-colors duration-200 hover:text-teal [writing-mode:vertical-rl]"
        >
          {profile.email}
        </a>
        <div className="h-24 w-px bg-slate-dim" />
      </div>
    </aside>
  );
}
