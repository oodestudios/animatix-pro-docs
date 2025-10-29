---
sidebar_position: 4
title: Typewriter with Per-Word SFX
---

# Typewriter with Per-Word SFX

```mermaid
flowchart LR
  A[On Start] --> B[Typewriter]
  B --> C[Play SFX each word]
```

## Steps
1. Text: Typewriter (character) speed 0.04s
2. Action: Event every word → Play Sound

## Expected Result
- Text types in; subtle blip plays per word.

## Pitfalls
- Throttle SFX for long paragraphs.


