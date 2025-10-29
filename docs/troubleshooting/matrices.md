---
sidebar_position: 2
title: Troubleshooting Matrices
description: Fast cause→check→fix matrices for common issues
---

# Troubleshooting Matrices

## Animation didn’t play

| Cause | Check | Fix |
|------|-------|-----|
| `GraphExecutor` missing | Is component on the target GameObject? | Add `GraphExecutor` |
| No Graph assigned | Is `GraphAsset` field set? | Assign the graph asset |
| Trigger not firing | Is trigger configured and condition met? | Adjust trigger, test in Play mode |
| Connections broken | Orphaned nodes or disabled connections? | Reconnect nodes, ensure start trigger |
| Target inactive | Is object active and visible? | Activate, ensure required components |

## Event didn’t fire

| Cause | Check | Fix |
|------|-------|-----|
| Wrong event name | Does listener name match exactly? | Align names, avoid typos |
| Auto listener disabled | Is event system enabled? | Enable event manager, verify scene init |
| Fired before ready | Fired on `Awake` before listeners exist? | Delay with small `Startup Delay` |

## Particles not visible

| Cause | Check | Fix |
|------|-------|-----|
| Emission off | Is emission enabled / rate > 0? | Enable emission / tween rate |
| Wrong layer / camera | Camera culling masks include layer? | Adjust layer/mask |
| Material/shader issue | Has valid material and shader? | Assign correct material |
| Simulation space | Local vs World mismatch | Match to graph intent |

## Audio not playing

| Cause | Check | Fix |
|------|-------|-----|
| No AudioSource | Component assigned? | Add/assign `AudioSource` |
| Volume muted | Volume > 0? | Raise volume / remove mute |
| Clip missing | AudioClip assigned? | Assign clip |

## Performance hiccups

| Cause | Check | Fix |
|------|-------|-----|
| Too many concurrent graphs | Count live graphs | Cap concurrency, combine branches |
| Expensive particles on mobile | GPU overdraw | Reduce rate, lifetime, size |
| Excess logging | Verbose debug enabled | Disable debug in production |


