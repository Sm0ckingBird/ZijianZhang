import { publicationsAndTalks } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { ExternalLinkIcon } from "./Icons";

export function PublicationsTalks() {
  return (
    <section id="publications" className="max-w-3xl px-6 py-16 sm:px-10 lg:px-12">
      <SectionHeading number="04" title="Publications & Talks" />

      <ul className="space-y-3">
        {publicationsAndTalks.map((item) => (
          <li key={item.title}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-lg border border-navy-lighter bg-navy-light px-5 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-teal"
            >
              <div>
                <span className="mb-1 inline-block rounded border border-teal/40 px-2 py-0.5 font-mono text-[11px] text-teal">
                  {item.kind}
                </span>
                <h3 className="font-semibold text-lightest-slate group-hover:text-teal">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-slate-dim">
                  {item.venue} &middot; {item.date}
                </p>
              </div>
              <ExternalLinkIcon className="h-5 w-5 flex-none text-slate group-hover:text-teal" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
