---
sidebar_position: 3
title: 3D Animations
description: Bring 3D objects to life with smooth transformations and cinematic motion
---

# 3D Object Animations

Bring 3D objects to life with smooth transformations and cinematic motion.

## Transform Animations

### Move 3D
World space 3D object movement.  
Perfect for: scene transitions, cinematic movement.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–20.0s | 3.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Move From | Vector3 | Any | (0, 0, 0) | Starting position |
| Move To | Vector3 | Any | Target position | Ending position |
| Use Local Space | bool | true/false | false | Use local vs world space |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |
| Delay After | float | 0.0–10.0s | 0.0s | Wait time after completing |

### Rotate 3D
3D object rotation.  
Perfect for: spinning effects, orientation changes.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–30.0s | 5.0s | Animation duration |
| Easing | enum | Linear–Elastic | Linear | Easing curve type |
| Rotate From | Vector3 | 0–360° | (0, 0, 0) | Starting rotation |
| Rotate To | Vector3 | 0–360° | (0, 0, 360) | Ending rotation |
| Use Local Space | bool | true/false | true | Use local vs world space |
| Loop Rotation | bool | true/false | false | Continuous rotation |

### Scale 3D
3D object scaling.  
Perfect for: growth effects, expanding objects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 1.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseOutBack | Easing curve type |
| Scale From | Vector3 | 0.0–10.0 | (0, 0, 0) | Starting scale |
| Scale To | Vector3 | 0.0–10.0 | (1, 1, 1) | Ending scale |
| Uniform Scaling | bool | true/false | true | Apply same scale to all axes |

### Look At 3D
3D object orientation toward target.  
Perfect for: aiming, facing targets.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 2.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Look At Target | Transform | Reference | null | Target to look at |
| Lock Axis | enum | None–XY–XZ–YZ | None | Axis to lock |
| Rotation Speed | float | 0.1–10.0 | 5.0 | Rotation speed multiplier |

## Example Use Cases

:::tip Common Workflows
**Scene Transitions**
- On Start → Move 3D Camera (3 s) → Look At Target (1 s)
- On Trigger → Scale 3D Object (0.5 s) → Rotate 3D (1 s)

**Interactive Elements**
- On Click → Scale 3D Up (0.3 s) → Look At Player (1 s)
- On Spawn → Scale from (0,0,0) to (1,1,1) with elastic bounce
:::

![3D Object Animation Inspector](/img/screenshots/16-3d-object-animation-inspector.png)
