---
sidebar_position: 1
title: UI Animations
description: Learn about UI animations - the foundation of modern interfaces that make your menus feel responsive and alive.
---

# 🟦 UI Animations

UI Animations are the foundation of modern interfaces. They make your menus feel responsive, your buttons clickable, and your interface alive.

## Transform Animations

### Fade
- Smoothly transitions transparency from 0% → 100%.
- Perfect for: menus, popups, loading screens.
- Key Settings:
  - Duration: 0.5–2.0 s
  - Easing: Ease In Out
  - Fade Start / End: 0 → 1

### Slide
- Moves objects between positions.
- Perfect for: panels, notifications, off-screen transitions.
- Key Settings:
  - Duration: 0.3–1.5 s
  - Start/End Position
  - Snapping Mode

### Scale
- Changes object size smoothly.
- Perfect for: button presses, emphasis effects.
- Key Settings:
  - Duration: 0.2–0.8 s
  - Start/End Scale
  - Uniform Scaling

### Rotate
- Spins objects around center or local pivot.
- Perfect for: loaders, icons, interactive feedback.
- Key Settings:
  - Duration: 0.5–3.0 s
  - Start/End Angle
  - Local Rotation

## Visual Effects

### Color Tint
- Changes color or alpha of UI elements.
- Key Settings: Duration 0.2–1.0 s | Color Start/End | Alpha Only

### Jelly
- Bouncy, elastic deformation.
- Key Settings: Press Scale | Overshoot | Durations

### Blur
- Applies real-time UI blur.
- Key Settings: Blur Mode | Strength | Canvas Group

## Impact Effects

### Punch / Bounce / Shake / Elastic Scale
- Add tactile motion and impact feedback with physical motion curves.

## Example Use Cases
- On Start → Fade In Menu (1.0 s)
- On Click → Scale Down (0.1 s) → Scale Up (0.2 s)

![UI Animation Node Settings in Inspector](/img/animation-modules/14-ui-animation-node-settings.png)
