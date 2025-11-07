---
sidebar_position: 6
title: Material Animations
description: Change surface look and feel dynamically to match game events
---

# Material Animations

Change surface look and feel dynamically to match game events.

## Color Tween
Animate material color.  
Perfect for: state changes, damage effects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 1.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Color From | Color | RGBA | White | Starting color |
| Color To | Color | RGBA | Target | Ending color |
| Property Name | string | Any | "_Color" | Shader property name |

## Float Property Tween
Animate any float shader property.  
Perfect for: glow, emission, displacement.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 2.0s | Animation duration |
| Property Name | string | Any | "_Metallic" | Shader property name |
| Value From | float | Any | 0.0 | Starting value |
| Value To | float | Any | 1.0 | Ending value |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |

## Material Fade
Animate material transparency.  
Perfect for: disappearances, reveals.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.5–10.0s | 2.0s | Animation duration |
| Fade From | float | 0.0–1.0 | 1.0 | Starting alpha |
| Fade To | float | 0.0–1.0 | 0.0 | Ending alpha |
| Property Name | string | Any | "_Transparency" | Alpha property name |

## How to Use

### Example 1: Damage Feedback

```
On Damage Trigger
     ↓
Color Tween to Red (0.2s, _Color, White → Red)
     ↓
Wait (0.1s)
     ↓
Color Tween Back (1.0s, _Color, Red → White)
```

**Expected Result:** Object flashes red when damaged, then fades back to normal.

### Example 2: Power-Up Effect

```
On Power-Up Collected
     ↓
Float Property Tween (2s, _EmissionIntensity, 0 → 5)
     ↓
Color Tween (2s, _Color, White → Yellow)
```

**Expected Result:** Object glows brightly with emission and color change.

![Material Animation Color and Fade Settings](/img/screenshots/19-material-animation-color-fade.png)

## Example Use Cases

:::tip Common Workflows
**Damage Effects**
- On Damage → Color Tween to Red (0.2 s) → Tween Back (1.0 s)

**Item Dissolve**
- On Death → Material Fade Out (2 s) → Deactivate Object

**Visual Feedback**
- On Selection → Emission Tween Up (0.5s) → Glow Effect
:::
