# Audio Animations

**Audio Animations** control sound playback, volume, pitch, and spatial properties — perfect for ambient audio, reactive sound effects, and dynamic audio mixing.

## Overview

**Purpose:** Create dynamic audio effects and transitions

**Common Use Cases:**

- **Volume Fades:** Smooth volume transitions
- **Pitch Changes:** Voice modulation, speed changes
- **Spatial Audio:** 3D audio positioning
- **Audio Cues:** Grouped audio effects
- **Sound Playback:** Trigger audio clips

## Animation Types

### Playback Animations

- **Sound** — Play audio clip
- **Play Sound** — Sound playback control

### Property Animations

- **Pitch Tween** — Pitch transition
- **Volume Tween** — Volume transition
- **Audio Cue Group** — Grouped audio cues
- **Spatial Audio Tween** — Spatial audio control

## Common Parameters

- **Duration:** 0.5–2.0s typical (quick sounds: instant, fades: 1.0–3.0s)
- **Easing:** EaseInOutQuad for smooth volume fades, Linear for pitch changes
- **Loop Type:** None (one-time), Loop for continuous audio (ambient loops)

## Best Practices

- Use volume tweens for smooth audio transitions
- Use pitch tweens for voice modulation effects
- Use spatial audio for 3D positioning
- Test audio animations with different audio sources

---

**Next:** [Material Animations](./material-animations)

