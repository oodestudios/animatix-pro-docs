---
sidebar_position: 7
title: Particle Systems
description: Control Unity's particle systems directly through animation nodes
---

# Particle System Control

Control Unity's particle systems directly through animation nodes.

## Play Particles
Start particle emission.  
Perfect for: explosions, effects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Particle System | ParticleSystem | Reference | null | Particle system to control |
| Duration | float | 0.1–60.0s | 5.0s | Emission duration |
| Loop | bool | true/false | false | Continuous emission |

## Emission Rate Tween
Animate particle emission rate.  
Perfect for: gradual effects, crescendos.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.5–30.0s | 3.0s | Animation duration |
| Rate From | float | 0–10000.0 | 0.0 | Starting emission rate |
| Rate To | float | 0–10000.0 | 100.0 | Ending emission rate |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Particle System | ParticleSystem | Reference | null | Particle system to control |

## Simulate Particles
Advance particle simulation forward.  
Perfect for: pre-warming, specific states.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Particle System | ParticleSystem | Reference | null | Particle system to control |
| Simulation Time | float | 0.0–100.0s | 5.0s | Time to simulate forward |
| Reset On Complete | bool | true/false | true | Reset simulation after |

## How to Use

### Example 1: Explosion Effect

```
On Explosion Trigger
     ↓
Play Particles (2s, explosion particles)
     ↓
Wait (1s)
     ↓
Stop Particles
```

**Expected Result:** Explosion particles emit for 2 seconds, creating a dramatic impact effect, then stop.

### Example 2: Gradual Build-Up

```
On Start
     ↓
Emission Rate Tween Up (3s, 0 → 100 particles/sec)
     ↓
Wait (5s)
     ↓
Emission Rate Tween Down (2s, 100 → 0 particles/sec)
```

**Expected Result:** Particles gradually appear, stay for 5 seconds, then fade away smoothly.

![Particle System Emission Tween](/img/screenshots/20-particle-system-emission-tween.png)

## Example Use Cases

:::tip Common Workflows
**Explosion Sequences**
- On Explosion → Play Particles (2 s) → Stop Particles → Wait (1 s)

**Continuous Effects**
- On Start → Loop Particles (infinite) → Emission Rate Tween Up (3 s)

**Environmental Effects**
- On Trigger → Simulate Particles (10s to pre-warm) → Play Particles → Fade Out
:::
