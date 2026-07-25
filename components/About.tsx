import { education, profile, skills } from "@/lib/data";
import { withBasePath } from "@/lib/basePath";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="max-w-4xl px-6 py-10 sm:px-10 lg:px-12">
      <SectionHeading number="01" title="About Me" />

      <p>
        I&apos;m a Linux kernel and cloud-networking engineer based in {profile.location}.
        I spend most of my time inside the Linux networking stack and Cilium&apos;s
        dataplane, and I&apos;m an upstream contributor to the kernel&apos;s{" "}
        <code className="text-teal">sockmap</code>/<code className="text-teal">tcp_bpf</code>{" "}
        subsystem.
      </p>
      <p className="mt-4">Here are a few technologies I work with day to day:</p>

      <ul className="mt-4 grid grid-cols-1 gap-2 font-mono text-sm sm:grid-cols-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="text-teal">▹</span>
            {skill}
          </li>
        ))}
      </ul>

      <ul className="mt-8 space-y-4">
        {education.map((item) => (
          <li key={item.school} className="flex items-center gap-4">
            <img
              src={withBasePath(item.logo)}
              alt={item.school}
              className="h-9 w-auto max-w-[130px] flex-none object-contain object-left"
            />
            <span className="text-sm">
              <span className="text-lightest-slate">{item.degree}</span>, {item.school}{" "}
              &middot; <span className="font-mono text-slate-dim">{item.period}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
