import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, MailIcon, GoogleScholarIcon, OrcidIcon } from "./Icons";

const links = [
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: profile.googleScholar, label: "Google Scholar", Icon: GoogleScholarIcon },
  { href: profile.orcid, label: "ORCID", Icon: OrcidIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
];

export function Footer() {
  return (
    <footer className="max-w-4xl px-6 pb-12 pt-6 text-center sm:px-10 lg:px-12">
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
        Built with Next.js &amp; Tailwind CSS &middot; {profile.name}
      </p>
    </footer>
  );
}
