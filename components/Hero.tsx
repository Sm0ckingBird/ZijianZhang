import { profile } from "@/lib/data";
import { ExternalLinkIcon } from "./Icons";

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-screen flex-col justify-center px-6 pt-16 sm:px-10"
    >
      <div className="mx-auto w-full max-w-4xl">
        <p className="mb-4 font-mono text-teal">Hi, my name is</p>
        <h1 className="text-4xl font-bold text-lightest-slate sm:text-6xl">
          {profile.name}.
        </h1>
        <h2 className="mt-2 text-3xl font-bold text-slate sm:text-5xl">
          {profile.tagline}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-slate">{profile.bio}</p>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded border border-teal px-7 py-4 font-mono text-teal transition-all hover:-translate-y-1 hover:bg-teal/10"
        >
          View Full Résumé
          <ExternalLinkIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
