---
sidebar_position: 1
title: UI Animations
description: Learn about UI animations - the foundation of modern interfaces that make your menus feel responsive and alive.
---

# UI Animations

UI Animations are the foundation of modern interfaces. They make your menus feel responsive, your buttons clickable, and your interface alive.

## Transform Animations

### Fade
Smoothly transitions transparency from 0% → 100%.  
Perfect for: menus, popups, loading screens.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 1.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Fade Start | float | 0.0–1.0 | 0.0 | Starting alpha value |
| Fade End | float | 0.0–1.0 | 1.0 | Ending alpha value |
| Delay Before | float | 0.0–10.0s | 0.0s | Wait time before starting |
| Delay After | float | 0.0–10.0s | 0.0s | Wait time after completing |
| Update Method | enum | LateUpdate–FixedUpdate | LateUpdate | Update timing |

### Slide
Moves objects between positions.  
Perfect for: panels, notifications, off-screen transitions.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 0.5s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Slide From | Vector2 | Any | (0, -100) | Starting position offset |
| Slide To | Vector2 | Any | (0, 0) | Ending position offset |
| Use Local Space | bool | true/false | false | Use local vs world offset |
| Snapping Mode | enum | None–Smooth | None | Position snapping |

### Scale
Changes object size smoothly.  
Perfect for: button presses, emphasis effects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 0.3s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Scale From | Vector3 | 0.0–10.0 | (0, 0, 0) | Starting scale |
| Scale To | Vector3 | 0.0–10.0 | (1, 1, 1) | Ending scale |
| Uniform Scaling | bool | true/false | true | Apply same scale to all axes |

### Rotate
Spins objects around center or local pivot.  
Perfect for: loaders, icons, interactive feedback.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 1.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Rotation From | Vector3 | 0–360° | (0, 0, 0) | Starting rotation |
| Rotation To | Vector3 | 0–360° | (0, 0, 360) | Ending rotation |
| Use Local Space | bool | true/false | true | Use local vs world rotation |
| Loop Rotation | bool | true/false | false | Continuous rotation |

## Visual Effects

### Color Tint
Changes color or alpha of UI elements.  
Perfect for: highlighting, state changes, visual feedback.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 0.5s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Color From | Color | RGBA | White | Starting color |
| Color To | Color | RGBA | Target color | Ending color |
| Alpha Only | bool | true/false | false | Only change alpha channel |

### Jelly
Bouncy, elastic deformation effect.  
Perfect for: button presses, playful interactions.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–5.0s | 0.3s | Animation duration |
| Easing | enum | Linear–Elastic | Elastic | Easing curve type |
| Scale From | float | 0.1–2.0 | 1.0 | Starting scale |
| Scale To | float | 0.1–2.0 | 1.0 | Ending scale |
| Overshoot | float | 0.0–2.0 | 0.2 | Bounce overshoot amount |
| Elasticity | float | 0.0–1.0 | 0.8 | Elastic bounce strength |

### Blur
Applies real-time UI blur effect.  
Perfect for: background blur, depth of field effects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–5.0s | 1.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Blur From | float | 0.0–10.0 | 0.0 | Starting blur strength |
| Blur To | float | 0.0–10.0 | 5.0 | Ending blur strength |
| Blur Mode | enum | Standard–Advanced | Standard | Blur quality mode |

## Impact Effects

### Punch
Sharp, quick movement for impact feedback.  
Perfect for: button clicks, error messages.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–1.0s | 0.15s | Animation duration |
| Punch Direction | Vector3 | Any | (1, 0, 0) | Direction of punch |
| Punch Amount | float | 0.0–100.0 | 10.0 | Distance of punch |
| Vibrato | int | 0–10 | 5 | Number of vibrations |
| Elasticity | float | 0.0–1.0 | 0.5 | Bounce elasticity |

### Bounce
Elastic bouncing motion.  
Perfect for: item drops, playful animations.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–2.0s | 0.5s | Animation duration |
| Bounce Height | float | 0.0–50.0 | 10.0 | Maximum bounce height |
| Bounce Count | int | 1–10 | 3 | Number of bounces |
| Decay Rate | float | 0.0–1.0 | 0.7 | Bounce decay rate |
| Direction | Vector3 | Any | (0, 1, 0) | Bounce direction |

### Shake
Random shaking motion.  
Perfect for: earthquakes, impact effects, alerts.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–3.0s | 0.5s | Animation duration |
| Shake Strength | Vector3 | Any | (5, 5, 5) | Shake strength per axis |
| Vibrato | int | 1–20 | 10 | Number of vibrations |
| Randomness | float | 0.0–100.0 | 50.0 | Shake randomness |

### Elastic Scale
Overshooting scale animation.  
Perfect for: pop-ups, attention-grabbing effects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–2.0s | 0.4s | Animation duration |
| Scale From | Vector3 | 0.0–2.0 | (0, 0, 0) | Starting scale |
| Scale To | Vector3 | 0.0–2.0 | (1, 1, 1) | Ending scale |
| Overshoot | float | 0.0–2.0 | 0.3 | Overshoot scale amount |
| Elasticity | float | 0.0–1.0 | 0.7 | Elastic strength |

## Example Use Cases

:::tip Common Workflows
**Menu Animations**
- On Start → Fade In Menu (1.0 s)
- On Click → Scale Down (0.1 s) → Scale Up (0.2 s)
- On Close → Fade Out (0.5 s)

**Interactive Elements**
- On Hover → Scale Up (0.2 s)
- On Click → Punch Effect (0.15 s)
- On Error → Shake (0.5 s)
:::

![UI Animation Node Settings](/img/screenshots/14-ui-animation-node-settings.png)
