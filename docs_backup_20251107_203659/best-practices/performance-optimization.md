---
sidebar_position: 2
title: Performance & Optimization
description: Practical budgets and tips for mobile, desktop, and WebGL
---

# Performance & Optimization

## Recommended Budgets
- UI graphs: 5–10 concurrent (mobile), 10–20 (desktop)
- Particles: keep emission modest on mobile; pool systems
- Text effects: prefer per-word over per-character on low-end devices

## General Tips
- Use LateUpdate for UI, FixedUpdate for physics
- Avoid long sequential chains; prefer parallel branches with aligned delays
- Disable debug logging for production builds
- Cache component references; avoid per-frame `GetComponent`

## Mobile
- Reduce particle count, lifetime, size; avoid heavy post-process
- Pause animations when off-screen or inactive

## WebGL
- Limit graph complexity; simpler easing curves
- Compress assets; test in browser builds early

## Profiling
- Use Unity Profiler; watch CPU, GC allocations, draw calls
- Benchmark on target devices


