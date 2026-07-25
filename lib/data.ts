export const profile = {
  name: "Zijian Zhang",
  role: "Cloud Network Engineer @ ByteDance",
  tagline: "I build cloud networks and hack the Linux kernel.",
  bio: "Working on Cilium, eBPF, and Linux kernel networking for ByteDance's global cloud infrastructure. Linux kernel contributor to the sockmap/tcp_bpf subsystem and the Cilium project.",
  location: "Santa Clara, CA",
  email: "zijianzhang0226@gmail.com",
  github: "https://github.com/Sm0ckingBird",
  linkedin: "https://www.linkedin.com/in/zijian-zhang-0226",
  googleScholar:
    "https://scholar.google.com/citations?view_op=list_works&hl=en&user=NE0DJFIAAAAJ",
  orcid: "https://orcid.org/0009-0001-9300-2798",
  resumeUrl:
    "https://docs.google.com/document/d/1CQRTQiuIbVqY-QSShJz1IOvknmkrXZN0DC8GMK4ABuM/edit?usp=sharing",
  photo: "/images/myself.jpeg",
};

// GoatCounter site code — https://CODE.goatcounter.com. Requires "Allow adding visitor
// counts on your website" enabled in GoatCounter site settings for the counter widget,
// and the dashboard set to public for the stats link to be viewable by visitors.
export const analytics = {
  goatcounterCode: "nightwalkzz",
};

export const skills = [
  "Linux Kernel",
  "eBPF",
  "Cilium / Kubernetes",
  "C / C++ / Go",
  "bpftrace / pwru",
  "Python / Shell",
  "Docker / containerd",
  "libbpf / BCC",
];

export const education = [
  {
    school: "Columbia University in the City of New York",
    degree: "M.S. in Computer Science",
    period: "Sep 2021 – Dec 2022",
    logo: "/images/logos/columbia-crown.png",
  },
  {
    school: "Wuhan University",
    degree: "B.S. in Computer Science",
    period: "Sep 2016 – Jul 2020",
    logo: "/images/logos/wuhan-university.png",
  },
];

export type OpenSourceProject = {
  name: string;
  subtitle: string;
  meta: string;
  metaUrl: string;
  logo: string;
  bullets: { text: string; linkText?: string; linkUrl?: string }[];
};

export const openSource: OpenSourceProject[] = [
  {
    name: "Linux Kernel",
    subtitle: "sockmap & tcp_bpf",
    meta: "16 patches merged",
    metaUrl:
      "https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/log/?qt=author&q=Zijian+Zhang",
    logo: "/images/logos/tux.svg",
    bullets: [
      {
        text: "Fixed memory leak, charging bugs, and race conditions in eBPF skmsg helper functions.",
      },
      {
        text: "Authored test coverage for eBPF sockmap redirection and fixed OOM issues in the msg_zerocopy self-tests.",
      },
    ],
  },
  {
    name: "Cilium",
    subtitle: "datapath",
    meta: "4 patches merged",
    metaUrl:
      "https://github.com/cilium/cilium/pulls?q=is%3Apr+author%3ASm0ckingBird+is%3Aclosed",
    logo: "/images/logos/cilium.png",
    bullets: [
      {
        text: "Fixed a backend-slice bug in Local Redirect Policy and cleaned up the endpoint subsystem.",
      },
      {
        text: "Resolved a",
        linkText: "service-deletion race condition",
        linkUrl: "https://github.com/cilium/cilium/issues/29679",
      },
    ],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  logo?: string;
  bullets: { text: string; linkText?: string; linkUrl?: string }[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Cloud Network Engineer",
    company: "ByteDance Inc.",
    location: "San Jose, USA",
    period: "Feb 2023 – Present",
    logo: "/images/logos/bytedance.svg",
    bullets: [
      {
        text: "Architected and maintained container/VM/Baremetal networking for ByteDance's global infrastructure — 10,000+ servers across 100+ self-built PoPs on custom-built Cilium and KubeVirt.",
      },
      {
        text: "Designed the Linux kernel patchset",
        linkText: "tcp_bpf: improve ingress redirection with message corking",
        linkUrl:
          "https://lore.kernel.org/netdev/20250306220205.53753-5-xiyou.wangcong@gmail.com/",
      },
      {
        text: "Led global Cilium CNI rollouts and resolved critical production network outages while maintaining high-availability SLAs.",
      },
    ],
  },
  {
    role: "Linux Kernel Engineer Intern",
    company: "ByteDance Inc.",
    location: "New York, USA",
    period: "May 2022 – Aug 2022",
    logo: "/images/logos/bytedance.svg",
    bullets: [
      {
        text: "Built a low-latency backpressure feedback loop over virtio/net shared memory to expose host-side congestion to guest VMs.",
      },
      {
        text: "Reduced packet drop rate from 44% to 3% via vhost/virtio-net extensions and guest-side socket throttling.",
      },
    ],
  },
  {
    role: "Teaching Assistant, Operating Systems",
    company: "Columbia University in the City of New York",
    location: "New York, USA",
    period: "Aug 2022 – Dec 2022",
    logo: "/images/logos/columbia-crown.png",
    bullets: [
      {
        text: "Held office hours and graded assignments covering processes, threads, synchronization, virtual memory, and file systems.",
      },
    ],
  },
  {
    role: "Compiler Engineer",
    company: "Terapines",
    location: "Wuhan, China",
    period: "Aug 2020 – May 2021",
    logo: "/images/logos/terapines.svg",
    bullets: [
      {
        text: "Implemented instruction codegen for 50+ proprietary",
        linkText: "GAP8",
        linkUrl: "https://greenwaves-technologies.com/low-power-processor/",
      },
      {
        text: "Built a custom LLVM backend pass to reduce instruction count and register pressure in dynamic allocation.",
      },
    ],
  },
];

export type PubTalk = {
  title: string;
  venue: string;
  date: string;
  url: string;
  kind: "Publication" | "Talk";
};

export const publicationsAndTalks: PubTalk[] = [
  {
    title: "ezFS: A Pedagogical Linux File System",
    venue: "SIGCSE TS 2025",
    date: "Feb 2025",
    url: "https://dl.acm.org/doi/pdf/10.1145/3641554.3701884",
    kind: "Publication",
  },
  {
    title: "Cilium: an eBPF based K8S CNI",
    venue: "eBPF Developer Conference 2025",
    date: "Apr 2025",
    url: "https://www.bilibili.com/video/BV17G4y1f76q/",
    kind: "Talk",
  },
  {
    title: "A lightweight zerocopy notification mechanism",
    venue: "Netdev 0x18",
    date: "Jul 2024",
    url: "https://netdevconf.info/0x18/sessions/talk/a-new-lightweight-zero-copy-notification-mechanism-in-linux.html",
    kind: "Talk",
  },
  {
    title: "Enhancing Homa Linux for Efficient RPC Transportation",
    venue: "Linux Plumbers Conference 2023",
    date: "Nov 2023",
    url: "https://lpc.events/event/17/contributions/1611/",
    kind: "Talk",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Open Source", href: "#open-source" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Résumé", href: profile.resumeUrl, external: true },
];
