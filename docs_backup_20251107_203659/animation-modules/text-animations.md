---
sidebar_position: 2
title: Text Animations
description: Learn about text animations that make dialogue dynamic, menus expressive, and words memorable.
---

# Text Animations

Text animations make dialogue dynamic, menus expressive, and words memorable.

## Character Effects

<details>
<summary><strong>Character Scale Pop</strong> - Bouncy character scaling effect</summary>

Perfect for: titles, headings, emphasis.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.1–5.0s | 1.0s | Animation duration |
| Easing | enum | Linear–Elastic | Elastic | Easing curve type |
| Target Type | enum | Character–Word–Line | Character | Text targeting |
| Scale From | float | 0.0–2.0 | 0.5 | Starting scale |
| Scale To | float | 0.0–2.0 | 1.0 | Ending scale |
| Interval | float | 0.0–1.0s | 0.05s | Delay between each character |
| Overshoot | float | 0.0–1.0 | 0.2 | Bounce overshoot |

</details>

<details>
<summary><strong>Typewriter</strong> - Character-by-character typing effect</summary>

Perfect for: dialogue, code display, dramatic reveals.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 1.0–30.0s | 5.0s | Total animation duration |
| Target Type | enum | Character–Word–Line | Character | Text targeting |
| Type Speed | float | 0.001–0.5s | 0.05s | Time per character |
| Scramble Before Reveal | bool | true/false | false | Scramble characters before typing |
| Scramble Charset | string | Any | "ABC123" | Scramble character set |

</details>

<details>
<summary><strong>Character Fade</strong> - Character-by-character fade reveal</summary>

Perfect for: dramatic reveals, dialogue.

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| Duration | float | 0.5–10.0s | 2.0s | Animation duration |
| Easing | enum | Linear–Elastic | EaseInOut | Easing curve type |
| Target Type | enum | Character–Word–Line | Character | Text targeting |
| Fade From | float | 0.0–1.0 | 0.0 | Starting alpha |
| Fade To | float | 0.0–1.0 | 1.0 | Ending alpha |
| Interval | float | 0.0–1.0s | 0.03s | Delay between each character |

</details>

## Example Use Cases

:::tip Common Workflows
**Dialogue & Narratives**
- On Start → Typewriter (2.0 s) → Fade Out (0.5 s)
- On Scene Change → Character Fade (1.5 s)

**Interactive Feedback**
- On Error → Character Shake (0.5 s)
- On Success → Character Scale Pop (0.8 s)
:::

![Text Animation Character and Word Modes](/img/screenshots/15-text-animation-character-word-modes.png)
