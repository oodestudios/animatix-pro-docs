---
sidebar_position: 1
title: Organizing Graphs
description: Learn best practices for organizing your Animatix Pro graphs and assets.
---

# Organizing Graphs

## Naming Conventions
- **Graph Names:** Use descriptive names like "MainMenu_ButtonFade" or "Gameplay_PlayerDeath"
- **Node Names:** Keep node titles short but clear ("Fade In", "Play Sound", "Wait 2s")
- **Categories:** Use the built-in categories (UI, Camera, Cutscene, Gameplay, VFX, Misc)

## File Organization
```
Assets/
├── AnimatixPro/
│   ├── UI/
│   │   ├── MainMenu_ButtonFade.asset
│   │   ├── Settings_PanelSlide.asset
│   │   └── Loading_ScreenTransition.asset
│   ├── Gameplay/
│   │   ├── Player_DeathSequence.asset
│   │   ├── Enemy_SpawnEffect.asset
│   │   └── PowerUp_Collection.asset
│   └── Cutscenes/
│       ├── Intro_CameraSweep.asset
│       └── Ending_CreditsRoll.asset
```

## Graph Structure
- **Keep graphs focused** — One graph per specific animation sequence
- **Use clear flow** — Left to right, top to bottom
- **Group related nodes** — Keep similar animations together
- **Add comments** — Use node titles to document purpose

## Version Control
- **Use meaningful commit messages** — "Add button hover animation" vs. "Updated graph"
- **Test before committing** — Ensure animations work correctly
- **Document changes** — Note what was modified and why
