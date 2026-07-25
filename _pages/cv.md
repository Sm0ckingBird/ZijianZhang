---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<a href="{{ site.author.resume }}" class="btn btn--info" target="_blank" rel="noopener noreferrer"><i class="fas fa-fw fa-file-lines"></i> View / Download Full Resume</a>

Education
======
* M.S. in Computer Science, **Columbia University**, New York, USA — Sep 2021 - Dec 2022
* B.S. in Computer Science, **Wuhan University**, Wuhan, China — Sep 2016 - Jul 2020

Skills
======
* **Knowledge:** Linux Kernel, eBPF, Cilium, Network Observability and Troubleshooting, Operating Systems
* **Frameworks & Tools:** K8S, Docker, containerd, Kubernetes, Helm, Argocd, libbpf, bpftrace, bpftool, pwru, BCC, perf, ftrace, gdb, netperf, iperf3, tcpdump, wireshark, iproute2, llvm/clang
* **Programming Languages:** C/C++, Python, Go, Java, OCaml, Haskell, SQL, Shell

Open Source Contributions
======
**[Linux Kernel](https://github.com/torvalds/linux), sockmap & tcp_bpf** — 16 patches merged into the Linux mainline kernel ([commit history](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/log/?qt=author&q=Zijian+Zhang))
* Fixed memory leak and charging bugs and resolved critical race conditions in eBPF `skmsg` helper functions.
* Enhanced kernel testing coverage by authoring robust test cases for eBPF sockmap redirection, and fixed out-of-memory issues in the `msg_zerocopy` self-tests.

**[Cilium](https://github.com/cilium/cilium), datapath & agent bootstrap** — 4 patches merged into upstream Cilium ([merged PRs](https://github.com/cilium/cilium/pulls?q=is%3Apr+author%3ASm0ckingBird+is%3Aclosed))
* Fixed a bug regarding backend slice processing within Local Redirect Policy and cleaned up redundant components inside the endpoint subsystem.
* Troubleshot and resolved a [service-deletion race condition](https://github.com/cilium/cilium/issues/29679) during agent startup caused by mismatched K8s API synchronization, preventing temporary datapath service disruption.

Work Experience
======
* **Cloud Network Engineer**, ByteDance Inc., San Jose, USA — Feb 2023 - Present
  * Key words: Cilium, Linux Kernel Networking, eBPF, Cloud Network, Performance Optimization
  * Architected and maintained container/VM/Baremetal network for ByteDance's global infrastructure, supporting 10,000+ servers across 100+ self-built PoPs utilizing custom-built Cilium and KubeVirt.
  * Engineered Cilium custom dataplane TC/XDP eBPF features tailored to production needs, including an IPIP-based DSR, etc.
  * Guided global rollouts and upgrades of Cilium CNI across the world, maintaining absolute traffic continuity; leveraged deep-dive troubleshooting to rapidly resolve critical production network outages and ensure high-availability SLAs.
  * Designed the Linux kernel patchset [tcp_bpf: improve ingress redirection performance with message corking](https://lore.kernel.org/netdev/20250306220205.53753-5-xiyou.wangcong@gmail.com/), leveraging sock map to bypass TCP/IP stacks and improve local Pod-to-Pod throughput by up to 60%.
  * Contributed upstream bug fixes/selftests to the kernel sockmap subsystem, while backporting critical features (vsock, ipvs-stat, etc) and leading feasibility studies for Homa and TCP Zero-Copy adoption.
  * Resolved complex production K8s network anomalies using bpftrace/pwru; redesigned dataplanes via eBPF routing and netkit to reduce network softIRQ overhead by 30% and reclaim host CPU.
  * Mitigated multi-tenant "noisy neighbors" by enforcing strict CPU/NUMA socket isolation and utilizing Linux RFS to isolate network softIRQs across tenant boundaries.

* **Linux Kernel Engineer Intern**, ByteDance Inc., New York, USA — May 2022 - Aug 2022
  * Key words: Linux Kernel, Virtio-Net/Vhost, QEMU, Shared Memory, Congestion Control
  * Architected a low-latency backpressure feedback loop using virtio/net shared memory to resolve the host-congestion invisibility issue for guest VMs.
  * Engineered vhost/virtio-net extensions and a guest-side socket throttling mechanism that stops the VM user-space from transmitting traffic during host-side saturation.
  * Mitigated guest CPU spinning/idle overhead and optimized network efficiency, successfully reducing packet drop rate from 44% to 3% and reclaiming substantial CPU resources.

* **Compiler Engineer**, Terapines, Wuhan, China — Aug 2020 - May 2021
  * Key words: LLVM/Clang Backend, RISC-V Codegen, Backend Pass Optimization
  * Analyzed and extended the LLVM/Clang backend codebase to support custom hardware architectures and implement low-level optimizations.
  * Implemented instruction codegen for 50+ proprietary [GAP8](https://greenwaves-technologies.com/low-power-processor/) instructions (multiply-add, bitmanip, and vector extensions) targeting energy-efficient edge processors.
  * Developed a custom LLVM backend pass to eliminate redundant stack pointer stores in dynamic allocation, reducing instruction count and easing register pressure.

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

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
