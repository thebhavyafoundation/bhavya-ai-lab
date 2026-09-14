---
title: "Static AI lab site on constrained hardware"
description: "An experiment measuring whether a credible AI Lab digital presence can be built as a static site with near-zero client JavaScript and a small dist footprint."
status: published
author: "Bhavya AI Lab"
date: 2026-08-14
honestyLabel: experiment
tags:
  - performance
  - static
  - tooling
question: "Can Bhavya AI Lab ship a serious-looking digital presence with static HTML, minimal CSS, and effectively no client JavaScript while remaining comfortable to build on modest hardware?"
hypothesis: "A static Astro + Tailwind site with system fonts and no third-party scripts can stay under a few hundred KB of dist output and still communicate laboratory credibility."
method: "Initialize Astro 5 with TypeScript and Tailwind 3; implement homepage and core routes; production-build; measure dist size, presence of client JS, CSS weight, and build duration."
tools:
  - Astro 5.18
  - TypeScript
  - Tailwind CSS 3
result: "Production build produced approximately 228 KB total dist, roughly 20 KB CSS, and no client JavaScript files in the output."
whatWorked: "Static output, system font stack, and avoiding UI/animation libraries kept the payload small."
whatFailed: "Early tooling fragility on constrained environments; Lighthouse not always available in sandbox."
lessons: "Credibility does not require a heavy SPA. Measure dist size early. Empty states are a product decision."
---

## Context

Bhavya AI Lab targets ₹0 initial infrastructure and development on an Intel i3 / 8 GB class machine.

## Evidence summary

| Metric | Observed |
|--------|----------|
| dist total | ~228 KB |
| Client JS in dist | 0 |
| CSS | ~20 KB |
| Build | ~2.5–3 s |

## Limitations

Sandbox measurements are not a substitute for Windows i3 timings or live Lighthouse on a public preview URL.
