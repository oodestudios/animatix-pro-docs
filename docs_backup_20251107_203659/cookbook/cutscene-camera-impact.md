---
sidebar_position: 3
title: Cutscene – Move, LookAt, Zoom, Impact Shake
---

# Cutscene – Move, LookAt, Zoom, Impact Shake

```mermaid
sequenceDiagram
  participant T as On Start
  participant M as Camera Move To
  participant L as Look At Target
  participant Z as Zoom To
  participant S as Camera Shake
  T->>M: trigger
  M->>L: on complete
  L->>Z: on complete
  Z->>S: on impact event
```

## Steps
1. Move To (5s)
2. Look At (1s)
3. Zoom To (2s)
4. Camera Shake (0.4s on impact)

## Expected Result
- Cinematic intro then punchy shake on impact cue.


