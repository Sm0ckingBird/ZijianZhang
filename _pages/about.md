---
permalink: /
title: "Academic Pages is a ready-to-fork GitHub Pages template for academic personal websites"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Education
======
* Master of Computer Science, Columbia University, Graduated in Dec. 2022
* Bachelor of Computer Science, Wuhan University, Graduated in Jun. 2020

Work experience
======
* Feb. 2023 ~ Present: Linux Network Engineer, ByteDance
* Aug. 2022 ~ Dec. 2022: Operating System Teaching Assistant, Columbia University
* May. 2022 ~ Aug. 2022: Linux Network Engineer Intern, ByteDance
* Aug. 2020 ~ May. 2021: Software Engineer, Terapines Technology（Wuhan）Co,.Ltd

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
