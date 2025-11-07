# AnimatixAnimatorManager Component

**AnimatixAnimatorManager** manages UIAnimationStep sequences and animation playback.

## Overview

**Purpose:** Manage animation step sequences and playback

**Key Features:**

- **Step Management:** Manage UIAnimationStep sequences
- **Playback Control:** Start, stop, pause animations
- **Sequence Control:** Control animation sequence execution

## Configuration

| **Property** | **Type** | **Description** |
|--------------|----------|-----------------|
| **Animation Steps** | `List<UIAnimationStep>` | Animation step sequence |
| **Auto Start** | `bool` | Start automatically on enable |

## API

```csharp
// Start animation sequence
animatorManager.Play();

// Stop animation sequence
animatorManager.Stop();

// Pause animation sequence
animatorManager.Pause();
```

## Best Practices

- Configure animation steps in Inspector
- Use Auto Start for automatic playback
- Test animation sequences in Play Mode
- Document animation step sequences

---

**Next:** [UI Event System](./ui-event-system)

