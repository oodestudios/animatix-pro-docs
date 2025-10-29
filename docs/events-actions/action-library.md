---
sidebar_position: 2
title: Action Library
description: Built-in actions, parameters, and example flows
---

# Action Library

| Action | Parameters (key) | Purpose |
|--------|-------------------|---------|
| Log Message | message, type | Debug and instrumentation |
| Set Active | target, state, delay | Toggle GameObject visibility |
| Play Audio | source, clip, volume, pitch, loop, stopPrevious | Trigger audio feedback |
| Play Animation | name, waitForCompletion, loop, speed | Chain other graphs |
| Wait | duration, mode, interruptible | Timing control between steps |
| Trigger Animation | graph, waitForCompletion, loop, speed | Cross-graph orchestration |

## Example Flow
```
On Button Click
     ↓
Play Audio (click)
     ↓
Set Active (Panel=true)
     ↓
Trigger Animation (Panel_Enter)
```

Expected Result: Click sound, panel appears, enter animation runs.


