---
sidebar_position: 1
title: Stacked Modal with Blur and Sound
---

# Stacked Modal with Blur and Sound

Goal: Open modal, blur background, play whoosh.

```mermaid
flowchart LR
  A[On Button Click] --> B[Play Sound]
  B --> C[Blur Background]
  C --> D[Slide In Modal]
```

## Steps
1. Trigger: On Button Click
2. Action: Play Sound (whoosh)
3. UI: Blur Background (Blur 0→6)
4. UI: Slide In Modal (from bottom)

## Expected Result
- Whoosh plays, background blurs, modal slides in.

## Pitfalls
- Don’t blur entire canvas; use overlay or dedicated target.


