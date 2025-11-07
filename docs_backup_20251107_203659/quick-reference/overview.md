---
sidebar_position: 1
---

# Quick Reference

## 8️⃣ Quick Reference

### Complete Animation Type List

#### UI Animations

| Category | Animation | Description | Duration |
|----------|-----------|-------------|----------|
| Transform | Fade | Change transparency | 0.5-2.0s |
| | Slide | Move position | 0.3-1.5s |
| | Scale | Change size | 0.2-0.8s |
| | Rotate | Spin rotation | 0.5-3.0s |
| Visual | Color Tint | Change color | 0.2-1.0s |
| | Jelly | Elastic deformation | 0.3-0.8s |
| | Blur | Blur effect | 0.5-2.0s |
| | Glow Pulse | Glowing effect | 0.5-2.0s |
| | Image Fill Amount | Fill progress | 0.5-3.0s |
| | Outline Shadow Color | Change outline | 0.3-1.0s |
| Impact | Punch | Sharp movement | 0.1-0.5s |
| | Bounce | Elastic bounce | 0.3-1.0s |
| | Shake | Random movement | 0.2-1.0s |
| | Elastic Scale | Overshoot scale | 0.3-1.0s |

#### Text Animations

| Category | Animation | Description | Duration |
|----------|-----------|-------------|----------|
| Character Effects | Character Scale Pop | Bouncy character scale | 0.5-1.5s |
| | Character Fade | Character-by-character fade | 0.8-2.0s |
| | Character Slide In | Character slide reveal | 0.6-1.8s |
| | Character Bounce | Character drop bounce | 0.8-2.0s |
| | Character Shake | Character shake effect | 0.3-1.0s |
| | Character Jitter | Character jitter motion | 0.5-2.0s |
| | Character Wave | Character wave motion | 1.0-3.0s |
| | Character Flip Reveal | Character flip reveal | 0.5-1.5s |
| | Character Rotate Reveal | Character rotate reveal | 0.4-1.2s |
| | Character Zoom In | Character zoom effect | 0.3-1.0s |
| Reveal | Typewriter | Character-by-character typing | 1.0-5.0s |
| | Fade Up | Text fade with upward movement | 0.8-2.0s |
| | Grow and Fade | Text scale with fade | 0.6-1.5s |
| | Word Fade In | Word-by-word fade | 1.0-3.0s |
| | Line Drop | Line-by-line drop | 0.8-2.5s |
| | Scramble Text | Text scramble effect | 0.5-2.0s |
| | Explosion Reveal | Character explosion | 0.8-2.0s |
| | Gravity Drop | Character gravity fall | 1.0-3.0s |
| | Curtain Reveal | Curtain-style reveal | 1.0-2.5s |
| | Crumble Reveal | Crumble-style reveal | 1.0-2.5s |
| Text Effects | Wiggle | Text wiggle motion | 0.5-2.0s |
| | Breathing Scale | Text breathing scale | 1.0-3.0s |
| | Skew | Text skew effect | 0.3-1.0s |
| | Rainbow Text Color | Rainbow color cycle | 1.0-5.0s |
| | Wobble | Text wobble motion | 0.5-2.0s |
| | Wind Drift | Text wind drift | 1.0-3.0s |
| | Pendulum Swing | Text pendulum swing | 1.0-4.0s |
| | Text Flicker | Text flicker effect | 0.2-1.0s |
| | Blinking | Text blinking effect | 0.5-2.0s |

#### 3D Object Animations

| Animation | Description | Duration |
|-----------|-------------|----------|
| Move 3D | World space movement | 1.0-5.0s |
| Move Local 3D | Local space movement | 1.0-5.0s |
| Rotate 3D | 3D rotation | 1.0-10.0s |
| Scale 3D | 3D scaling | 0.5-3.0s |
| Look At 3D | Face target object | 0.5-2.0s |

#### Camera Animations

| Category | Animation | Description | Duration |
|----------|-----------|-------------|----------|
| Movement | Move To | Move to position | 2.0-8.0s |
| | Pan To | Pan to look at point | 1.0-5.0s |
| | Zoom To | Change field of view | 1.0-3.0s |
| | Cut To | Instant position change | Instant |
| Look & Follow | Look At | Face target object | 1.0-4.0s |
| | Follow Target | Follow moving object | Continuous |
| Orbital | Orbit Around | Orbit around point | 2.0-10.0s |
| | Spin Loop | Continuous spinning | Continuous |
| Effects | Shake | Camera shake | 0.2-2.0s |
| | Punch Position | Quick position punch | 0.1-0.5s |
| | Breath Zoom | Breathing zoom effect | 1.0-3.0s |
| | Flash Shake | Flash with shake | 0.3-1.0s |
| Advanced Motion | Dolly Move | Forward/backward movement | 2.0-8.0s |
| | Bob Motion | Up/down bobbing | 1.0-3.0s |
| | Drift Motion | Slow directional drift | 2.0-10.0s |

#### Audio Animations

| Animation | Description | Duration |
|-----------|-------------|----------|
| Play Sound | Play audio clip | Variable |
| Stop Sound | Stop audio playback | Instant |
| Volume Tween | Change volume over time | 0.5-3.0s |
| Pitch Tween | Change pitch over time | 0.5-3.0s |

#### Material Animations

| Animation | Description | Duration |
|-----------|-------------|----------|
| Color Tween | Change material color | 0.5-3.0s |
| Float Property Tween | Change material property | 0.5-3.0s |
| Texture Swap | Change material texture | Instant |
| Material Fade | Change material transparency | 0.5-3.0s |

#### Particle System Control

| Animation | Description | Duration |
|-----------|-------------|----------|
| Play Particles | Start particle emission | Variable |
| Stop Particles | Stop particle emission | Instant |
| Loop Particles | Set particle looping | Continuous |
| Emission Rate Tween | Change emission rate | 0.5-3.0s |
| Simulate Particles | Advance particle simulation | Variable |

---

### Supported Easing Curves

#### Linear
- **Description:** Constant speed, no acceleration
- **Use Case:** Mechanical movement, simple transitions
- **Formula:** y = x

#### Ease In
- **Description:** Slow start, fast finish
- **Use Case:** Natural acceleration, object falling
- **Formula:** y = x²

#### Ease Out
- **Description:** Fast start, slow finish
- **Use Case:** Natural deceleration, object stopping
- **Formula:** y = 1 - (1 - x)²

#### Ease In Out
- **Description:** Slow start and finish, fast middle
- **Use Case:** Most natural movement, smooth transitions
- **Formula:** y = x < 0.5 ? 2x² : 1 - 2(1 - x)²

#### Ease In Back
- **Description:** Slow start with overshoot
- **Use Case:** Playful animations, bouncy effects
- **Formula:** y = x²(2.7x - 1.7)

#### Ease Out Back
- **Description:** Fast start with overshoot
- **Use Case:** Dramatic exits, attention-grabbing
- **Formula:** y = 1 + (1 - x)²(2.7(1 - x) - 1.7)

#### Ease In Out Back
- **Description:** Overshoot at both ends
- **Use Case:** Playful bounces, elastic effects
- **Formula:** Complex cubic function

#### Bounce
- **Description:** Bouncing motion
- **Use Case:** Playful animations, elastic effects
- **Formula:** Multiple sine waves

#### Elastic
- **Description:** Elastic spring motion
- **Use Case:** Spring animations, elastic effects
- **Formula:** Exponential decay with sine waves

#### Custom Curves
- **Description:** User-defined animation curves
- **Use Case:** Specific timing requirements, unique effects
- **Formula:** User-defined

---

### Node Types Summary

| Node Type | Color | Inputs | Outputs | Purpose | Common Use |
|-----------|-------|--------|---------|---------|------------|
| Trigger | Green | 0 | 1 | Start animations | On Start, On Click, On Key |
| Animation | Blue | 1+ | 1+ | Visual effects | Fade, Slide, Scale, Rotate |
| Action | Orange | 1+ | 0-1 | Side effects | Play Sound, Set Active, Wait |
| Event | Purple | 1+ | 1+ | Unity Events | Custom events, system integration |
| Condition | Yellow | 1+ | 1+ | Logic decisions | State checks, conditional flow |
| Delay | Gray | 1+ | 1+ | Timing control | Pauses, delays, pacing |

---

### Keyboard Shortcuts & Tips

#### GraphFlow Editor
- **Right-click:** Open node creation menu
- **Drag:** Pan the graph view
- **Scroll:** Zoom in/out
- **Ctrl+Z:** Undo last action
- **Ctrl+Y:** Redo last action
- **Delete:** Remove selected nodes
- **Ctrl+A:** Select all nodes
- **Ctrl+D:** Duplicate selected nodes

#### Inspector Window
- **Tab:** Move between fields
- **Enter:** Apply changes
- **Escape:** Cancel changes
- **Ctrl+C:** Copy values
- **Ctrl+V:** Paste values
- **F:** Focus on selected object

#### General Tips
- Use descriptive names for graphs and nodes
- Group related nodes together visually
- Test animations frequently during development
- Use parallel connections for simultaneous animations
- Keep animations short for better performance
- Use consistent timing across similar animations
- Test on target hardware for performance validation
- Document complex animations for team members
- Use version control for animation assets
- Backup important graphs regularly

#### Performance Tips
- Limit particle counts on mobile devices
- Use object pooling for frequently used objects
- Cache frequently accessed objects and components
- Optimize texture sizes for target platforms
- Test on actual hardware, not just the editor
- Use simpler animations for distant objects
- Avoid continuous animations that drain battery
- Profile performance regularly during development

---

## Conclusion

Animatix Pro transforms how you create animations in Unity. With its visual graph system, comprehensive animation types, and powerful API, you can create professional-quality animations without writing code.

### Key Takeaways
- **Visual Workflow** — Drag, connect, and configure nodes for instant results
- **Comprehensive Coverage** — UI, text, 3D, camera, audio, materials, and particles
- **Performance Optimized** — Built for Unity's rendering pipeline
- **Developer Friendly** — Full API access for runtime control
- **Artist Friendly** — No coding required, intuitive interface

### Next Steps
1. **Start Simple** — Create basic fade and slide animations
2. **Explore Types** — Try different animation categories
3. **Build Sequences** — Combine multiple animations
4. **Add Interactivity** — Use triggers and actions
5. **Optimize Performance** — Test on target hardware
6. **Share Knowledge** — Document your animations for your team

**Remember:** The best animations enhance the player experience without getting in the way. Keep animations purposeful, performant, and polished.

---

## Happy Animating! 🎨✨

For technical support, feature requests, or community discussions, visit the Animatix Pro documentation and support channels.

**Contact email:** oode.contact@gmail.com