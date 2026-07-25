import { education, profile, skills } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
      <SectionHeading number="01" title="About Me" />

      <div className="grid gap-12 sm:grid-cols-[2fr_1fr]">
        <div>
          <p>
            I&apos;m a Linux kernel and cloud-networking engineer based in{" "}
            {profile.location}. I spend most of my time inside the Linux networking
            stack and Cilium&apos;s dataplane, and I&apos;m an upstream contributor to
            the kernel&apos;s <code className="text-teal">sockmap</code>/
            <code className="text-teal">tcp_bpf</code> subsystem.
          </p>
          <p className="mt-4">
            Here are a few technologies I work with day to day:
          </p>

          <ul className="mt-4 grid grid-cols-1 gap-2 font-mono text-sm sm:grid-cols-2">
            {skills.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="text-teal">▹</span>
                {skill}
              </li>
            ))}
          </ul>

          <ul className="mt-8 space-y-3">
            {education.map((item) => (
              <li key={item.school} className="flex items-center gap-3">
                <img
                  src={withBasePath(item.logo)}
                  alt={item.school}
                  className="h-8 w-8 flex-none object-contain"
                />
                <span className="text-sm">
                  <span className="text-lightest-slate">{item.degree}</span>,{" "}
                  {item.school} &middot;{" "}
                  <span className="font-mono text-slate-dim">{item.period}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="group relative mx-auto w-48 sm:w-full sm:max-w-[220px]">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded border-2 border-teal transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
          <img
            src={withBasePath(profile.photo)}
            alt={profile.name}
            className="relative z-10 aspect-square w-full rounded object-cover"
          />
        </div>
      </div>
    </section>
  );
}
