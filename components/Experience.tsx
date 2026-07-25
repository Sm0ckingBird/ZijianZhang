import { experience, profile } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";
import { SectionHeading } from "./SectionHeading";
import { BulletList } from "./BulletList";

export function Experience() {
  return (
    <section id="experience" className="max-w-4xl px-6 py-8 sm:px-10 lg:px-12">
      <SectionHeading number="03" title="Work Experience" />

      <div className="space-y-4">
        {experience.map((job) => (
          <div
            key={`${job.company}-${job.role}`}
            className="rounded-lg border border-navy-lighter bg-navy-light p-5 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-teal"
          >
            <div className="flex flex-wrap items-center gap-3">
              {job.logo && (
                <img
                  src={withBasePath(job.logo)}
                  alt={job.company}
                  className="h-9 w-auto max-w-[130px] flex-none object-contain"
                />
              )}
              <div>
                <h3 className="font-semibold text-lightest-slate">
                  {job.role} <span className="font-normal text-teal">@ {job.company}</span>
                </h3>
                <p className="font-mono text-xs text-slate-dim">
                  {job.location} &middot;{" "}
                  <span className="font-semibold text-teal">{job.period}</span>
                </p>
              </div>
            </div>
            {job.bullets.length > 0 && <BulletList bullets={job.bullets} />}
          </div>
        ))}
      </div>

      <a
        href={profile.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block w-fit rounded border border-teal px-5 py-2.5 font-mono text-xs text-teal transition-all hover:-translate-y-0.5 hover:bg-teal/10"
      >
        View Full Résumé
      </a>
    </section>
  );
}
