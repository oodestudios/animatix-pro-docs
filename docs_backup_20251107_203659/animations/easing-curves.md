# Easing Curves Guide

**Easing curves** control how animations accelerate and decelerate over time — they define the "feel" of your animations.

## Overview

**Purpose:** Control animation acceleration and deceleration

**Common Use Cases:**

- **Natural Motion:** Smooth, organic-feeling animations
- **Mechanical Motion:** Precise, linear transitions
- **Dramatic Effects:** Strong acceleration or deceleration
- **Custom Timing:** User-defined animation curves

## Easing Types

### Linear

- **Pattern:** Constant speed throughout
- **Use Case:** Mechanical transitions, precise timing
- **Visual:** Straight diagonal line

### Ease In

- **Pattern:** Slow start, fast end
- **Use Case:** Natural acceleration
- **Visual:** Curved line starting slow, ending fast

### Ease Out

- **Pattern:** Fast start, slow end
- **Use Case:** Natural deceleration
- **Visual:** Curved line starting fast, ending slow

### Ease In Out

- **Pattern:** Slow start and end, fast middle
- **Use Case:** Smooth, natural motion
- **Visual:** S-curve with slow ends and fast middle

### Custom Curves

- **Pattern:** User-defined shape
- **Use Case:** Precise control over timing
- **Visual:** Custom curve shape

## Common Easing Types

| **Easing Type** | **Pattern** | **Use Case** |
|----------------|-------------|--------------|
| **Linear** | Constant speed | Mechanical transitions |
| **Ease In** | Slow start, fast end | Natural acceleration |
| **Ease Out** | Fast start, slow end | Natural deceleration |
| **Ease In Out** | Slow start and end | Smooth, natural motion |
| **Ease Out Back** | Overshoot effect | Bouncy, playful animations |
| **Ease In Sine** | Smooth acceleration | Natural, organic feel |
| **Ease Out Elastic** | Elastic effect | Dramatic, elastic animations |

## Best Practices

- Use **Ease Out** for UI elements (feels responsive)
- Use **Ease In Out** for smooth, natural motion
- Use **Ease Out Back** for playful, bouncy effects
- Use **Custom Curves** for precise timing control
- Test easing curves in context for best feel

---

**Next:** [Advanced: Complex Graphs](../advanced/complex-graphs)

