---
sidebar_position: 4
title: Camera Animations
description: Create cinematic immersion and smooth scene flow with camera animations
---

# Camera Animations

Camera animations create cinematic immersion and smooth scene flow.

## Movement Animations

### Move To
Camera movement to position.  
Perfect for: cinematic camera moves.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 1.0–30.0s | 5.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Target Position | Vector3 | Any | (0, 0, 0) | Target camera position |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |

### Zoom To
Camera FOV change (zoom effect).  
Perfect for: focus shifts, dramatic zooms.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.5–10.0s | 2.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| FOV From | float | 1–179° | 60° | Starting FOV |
| FOV To | float | 1–179° | 30° | Ending FOV |

### Camera Shake
Random camera shake for impact.  
Perfect for: explosions, impacts, dramatic moments.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–5.0s | 1.0s | Shake duration |
| Shake Strength | Vector3 | Any | (2, 2, 2) | Shake intensity per axis |
| Vibrato | int | 1–50 | 10 | Number of shake vibrations |
| Randomness | float | 0.0–100.0 | 80.0 | Shake randomness |

### Orbit Around
Camera orbiting around target.  
Perfect for: product showcases, scenic views.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 2.0–60.0s | 10.0s | Orbit duration |
| Target | Transform | Reference | null | Center of orbit |
| Radius | float | 0.1–100.0 | 5.0 | Orbit radius |
| Height Offset | float | -100–100.0 | 0.0 | Vertical offset |
| Speed | float | 0.1–10.0 | 1.0 | Orbit speed |
| Loop | bool | true/false | true | Continuous orbit |

## How to Use

### Example 1: Dramatic Impact

```
On Explosion Trigger
     ↓
Camera Shake (0.5s duration, strength 5, 15 vibrato)
```

**Expected Result:** Camera shakes violently to emphasize the explosion impact.

### Example 2: Cinematic Intro

```
On Start
     ↓
Camera Move To Position (5s, target: (10, 5, -10))
     ↓
Camera Zoom To (2s, FOV 60° → 40°)
```

**Expected Result:** Camera moves to reveal the scene, then zooms in for dramatic focus.

![Camera Animation Movement and Effects](/img/screenshots/17-camera-animation-movement-effects.png)

## Example Use Cases

:::tip Common Workflows
**Explosion Effects**
- On Explosion → Camera Shake (0.5 s) → Punch Position (0.2 s)

**Product Showcases**
- On Start → Orbit Around Object (4 s) → Follow Target (continuous)

**Cinematic Sequences**
- On Start → Move To (5s) → Zoom To (2s) → Look At Target (1s)
:::
