import { experience } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";
import { SectionHeading } from "./SectionHeading";
import { BulletList } from "./BulletList";

export function Experience() {
  return (
    <section id="experience" className="max-w-3xl px-6 py-16 sm:px-10 lg:px-12">
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
                  className="h-8 max-w-[110px] flex-none object-contain"
                />
              )}
              <div>
                <h3 className="font-semibold text-lightest-slate">
                  {job.role} <span className="font-normal text-teal">@ {job.company}</span>
                </h3>
                <p className="font-mono text-xs text-slate-dim">
                  {job.location} &middot; {job.period}
                </p>
              </div>
            </div>
            {job.bullets.length > 0 && <BulletList bullets={job.bullets} />}
          </div>
        ))}
      </div>
    </section>
  );
}
