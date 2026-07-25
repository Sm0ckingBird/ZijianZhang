import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const links = [
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-6 pb-16 pt-8 text-center sm:px-10">
      <ul className="mb-6 flex justify-center gap-6 lg:hidden">
        {links.map(({ href, label, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="block text-slate transition-colors hover:text-teal"
            >
              <Icon className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
      <p className="font-mono text-xs text-slate-dim">
        <a
          href={profile.googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal"
        >
          Google Scholar
        </a>{" "}
        &middot;{" "}
        <a href={profile.orcid} target="_blank" rel="noopener noreferrer" className="hover:text-teal">
          ORCID
        </a>
      </p>
      <p className="mt-4 font-mono text-xs text-slate-dim">
        Built with Next.js &amp; Tailwind CSS &middot; {profile.name}
      </p>
    </footer>
  );
}
