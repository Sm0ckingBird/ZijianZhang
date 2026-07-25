---
permalink: /
title: "Zijian Zhang"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I'm a Cloud Network Engineer at **ByteDance**, working on Cilium, eBPF, and Linux kernel networking for global cloud infrastructure. I'm also a Linux kernel contributor to the `sockmap`/`tcp_bpf` subsystem and the Cilium project.

<a href="{{ site.author.resume }}" class="btn btn--info" target="_blank" rel="noopener noreferrer"><i class="fas fa-fw fa-file-lines"></i> View Full Resume</a>

Education
======
* M.S. in Computer Science, **Columbia University**, Sep 2021 - Dec 2022
* B.S. in Computer Science, **Wuhan University**, Sep 2016 - Jul 2020

Work Experience
======
* Cloud Network Engineer, **ByteDance Inc.**, San Jose, USA — Feb 2023 - Present
* Linux Kernel Engineer Intern, **ByteDance Inc.**, New York, USA — May 2022 - Aug 2022
* Teaching Assistant, Operating Systems, **Columbia University**, New York, USA — Aug 2022 - Dec 2022
* Compiler Engineer, **Terapines**, Wuhan, China — Aug 2020 - May 2021

Open Source Contributions
======
* [**Linux Kernel**](https://github.com/torvalds/linux) — `sockmap` & `tcp_bpf`, 16 patches merged into the mainline kernel. Fixed memory leak/charging bugs and race conditions in eBPF `skmsg` helpers, and authored the `tcp_bpf` patchset improving Pod-to-Pod throughput by up to 60%. [Commit history](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/log/?qt=author&q=Zijian+Zhang)
* [**Cilium**](https://github.com/cilium/cilium) — datapath & agent bootstrap, 4 patches merged upstream. Fixed a Local Redirect Policy backend-slice bug and resolved a [service-deletion race condition](https://github.com/cilium/cilium/issues/29679) during agent startup. [Merged PRs](https://github.com/cilium/cilium/pulls?q=is%3Apr+author%3ASm0ckingBird+is%3Aclosed)

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
