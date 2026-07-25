import { openSource } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";
import { SectionHeading } from "./SectionHeading";
import { BulletList } from "./BulletList";

export function OpenSource() {
  return (
    <section id="open-source" className="max-w-3xl px-6 py-16 sm:px-10 lg:px-12">
      <SectionHeading number="02" title="Open Source Contributions" />

      <div className="grid gap-5 sm:grid-cols-2">
        {openSource.map((project) => (
          <div
            key={project.name}
            className="rounded-lg border border-navy-lighter bg-navy-light p-5 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-teal"
          >
            <div className="flex items-center gap-3">
              <img
                src={withBasePath(project.logo)}
                alt={project.name}
                className="h-7 w-7 flex-none object-contain"
              />
              <div>
                <h3 className="font-semibold text-lightest-slate">
                  {project.name}{" "}
                  <span className="font-normal text-slate">{project.subtitle}</span>
                </h3>
                <p className="font-mono text-xs text-slate-dim">
                  {project.meta} &middot;{" "}
                  <a
                    href={project.metaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal hover:underline"
                  >
                    view history
                  </a>
                </p>
              </div>
            </div>
            <BulletList bullets={project.bullets} />
          </div>
        ))}
      </div>
    </section>
  );
}
