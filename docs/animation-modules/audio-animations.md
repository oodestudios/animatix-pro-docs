---
sidebar_position: 5
title: Audio Animations
description: Synchronize sound with motion for total immersion
---

# Audio Animations

Synchronize sound with motion for total immersion.

## Play Sound
Play audio clip with control.  
Perfect for: feedback, sound effects.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Audio Source | AudioSource | Reference | null | AudioSource component |
| Audio Clip | AudioClip | Reference | null | Sound clip to play |
| Volume | float | 0.0–1.0 | 0.5 | Playback volume |
| Pitch | float | 0.1–3.0 | 1.0 | Playback pitch |
| Loop | bool | true/false | false | Loop audio |
| Stop Previous | bool | true/false | true | Stop other sounds first |

## Volume Tween
Animate audio volume over time.  
Perfect for: fade ins/outs, smooth volume changes.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 2.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Volume From | float | 0.0–1.0 | 0.0 | Starting volume |
| Volume To | float | 0.0–1.0 | 1.0 | Ending volume |
| Audio Source | AudioSource | Reference | null | AudioSource to control |

## Pitch Tween
Animate audio pitch over time.  
Perfect for: effects, transformations.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–10.0s | 2.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Pitch From | float | 0.1–3.0 | 1.0 | Starting pitch |
| Pitch To | float | 0.1–3.0 | 1.5 | Ending pitch |
| Audio Source | AudioSource | Reference | null | AudioSource to control |

## How to Use

### Example 1: Button Click Sound

```
On Button Click
     ↓
Play Sound (click.ogg, volume 0.5, immediate)
     ↓
Scale Button Down (0.1s)
```

**Expected Result:** When button is clicked, you hear the click sound while the button scales down for tactile feedback.

### Example 2: Scene Music Fade

```
On Scene Start
     ↓
Volume Tween Up (3s, 0.0 → 1.0)
```

**Expected Result:** Background music smoothly fades in over 3 seconds as the scene begins.

![Audio Animation Volume and Pitch Controls](/img/screenshots/18-audio-animation-volume-pitch.png)

## Example Use Cases

:::tip Common Workflows
**Interactive Feedback**
- On Click → Play Click Sound → Scale Button

**Scene Transitions**
- On Scene Change → Volume Tween Down (2 s) → Stop Music → Play New Track

**Dynamic Effects**
- On Transform → Pitch Tween Up (0.5s, 1.0 → 1.5) → Pitch Tween Back (1.0s)
:::
