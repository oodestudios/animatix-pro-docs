# UI Animations

Create stunning UI animations that enhance user experience and bring your interfaces to life. This comprehensive guide covers all aspects of UI animation with Animatix Pro.

## 🎨 UI Animation Fundamentals

UI animations serve several important purposes:
- **Visual Feedback** - Confirm user actions
- **Spatial Orientation** - Help users understand layout
- **Brand Personality** - Express your app's character
- **User Engagement** - Make interfaces more enjoyable

### Animation Principles

#### Easing and Timing
- **Ease In** - Slow start, fast finish (good for entrances)
- **Ease Out** - Fast start, slow finish (good for exits)
- **Ease In Out** - Slow start and finish (good for transitions)
- **Bounce** - Playful, attention-grabbing
- **Elastic** - Stretchy, rubber-like motion

#### Duration Guidelines
- **Micro-interactions** - 0.1-0.3 seconds
- **UI Transitions** - 0.3-0.5 seconds
- **Page Transitions** - 0.5-1.0 seconds
- **Complex Sequences** - 1.0-3.0 seconds

## 🖱️ Button Animations

### Hover Effects
Create engaging hover states for buttons.

#### Scale Hover
```
Trigger: On Mouse Enter
Animation: Scale (1.0 → 1.1)
Duration: 0.2 seconds
Easing: Ease Out Back
```

#### Color Hover
```
Trigger: On Mouse Enter
Animation: Color (Default → Highlight)
Duration: 0.15 seconds
Easing: Ease In Out
```

#### Shadow Hover
```
Trigger: On Mouse Enter
Animation: Shadow (None → Soft Shadow)
Duration: 0.2 seconds
Easing: Ease Out
```

### Click Effects
Provide immediate feedback on button clicks.

#### Press Down
```
Trigger: On Button Press
Animation: Scale (1.1 → 0.95)
Duration: 0.1 seconds
Easing: Ease In
```

#### Release Bounce
```
Trigger: On Button Release
Animation: Scale (0.95 → 1.0)
Duration: 0.2 seconds
Easing: Ease Out Bounce
```

#### Ripple Effect
```
Trigger: On Button Click
Animation: Scale + Alpha (0 → 1 → 0)
Duration: 0.4 seconds
Easing: Ease Out
```

### Complete Button Animation
Combine multiple effects for a polished button:

```
1. Hover: Scale + Color + Shadow
2. Press: Scale Down
3. Release: Scale Up + Bounce
4. Ripple: Scale + Alpha
```

## 📱 Menu Animations

### Slide-In Menus
Create smooth menu transitions.

#### Slide from Left
```
Animation: Position (Off-screen → On-screen)
Duration: 0.3 seconds
Easing: Ease Out Back
```

#### Slide from Top
```
Animation: Position (Above screen → On-screen)
Duration: 0.25 seconds
Easing: Ease Out
```

#### Slide from Bottom
```
Animation: Position (Below screen → On-screen)
Duration: 0.3 seconds
Easing: Ease Out Bounce
```

### Fade-In Menus
Subtle appearance effects.

#### Fade In
```
Animation: Alpha (0 → 1)
Duration: 0.2 seconds
Easing: Ease In
```

#### Scale + Fade
```
Animation: Scale (0.8 → 1.0) + Alpha (0 → 1)
Duration: 0.25 seconds
Easing: Ease Out Back
```

### Staggered Menu Items
Animate menu items with delays.

```
Item 1: Delay 0.0s
Item 2: Delay 0.1s
Item 3: Delay 0.2s
Item 4: Delay 0.3s
```

## 🎯 Panel Animations

### Panel Transitions
Smooth transitions between different UI panels.

#### Slide Transition
```
Outgoing Panel: Position (On-screen → Off-screen)
Incoming Panel: Position (Off-screen → On-screen)
Duration: 0.4 seconds
Easing: Ease In Out
```

#### Fade Transition
```
Outgoing Panel: Alpha (1 → 0)
Incoming Panel: Alpha (0 → 1)
Duration: 0.3 seconds
Easing: Ease In Out
```

#### Scale Transition
```
Outgoing Panel: Scale (1 → 0.8) + Alpha (1 → 0)
Incoming Panel: Scale (0.8 → 1) + Alpha (0 → 1)
Duration: 0.35 seconds
Easing: Ease Out Back
```

### Panel Resizing
Dynamic panel size changes.

#### Expand Panel
```
Animation: Size (Small → Large)
Duration: 0.3 seconds
Easing: Ease Out
```

#### Collapse Panel
```
Animation: Size (Large → Small)
Duration: 0.25 seconds
Easing: Ease In
```

## 📊 Data Visualization Animations

### Chart Animations
Animate data charts and graphs.

#### Bar Chart Growth
```
Animation: Scale Y (0 → 1)
Duration: 0.8 seconds
Easing: Ease Out
Stagger: 0.1s between bars
```

#### Line Chart Drawing
```
Animation: Line drawing effect
Duration: 1.0 seconds
Easing: Ease In Out
```

#### Pie Chart Rotation
```
Animation: Rotation (0 → 360°)
Duration: 1.2 seconds
Easing: Ease Out
```

### Counter Animations
Animate number counters.

#### Count Up
```
Animation: Text value (0 → Target)
Duration: 1.0 seconds
Easing: Ease Out
```

#### Count Down
```
Animation: Text value (Target → 0)
Duration: 0.8 seconds
Easing: Ease In
```

## 🎨 Loading Animations

### Spinner Animations
Various loading spinner styles.

#### Rotating Spinner
```
Animation: Rotation (0 → 360°)
Duration: 1.0 seconds
Easing: Linear
Loop: Infinite
```

#### Pulsing Spinner
```
Animation: Scale (0.8 → 1.2 → 0.8)
Duration: 0.8 seconds
Easing: Ease In Out
Loop: Infinite
```

#### Bouncing Dots
```
Dot 1: Scale (0.5 → 1 → 0.5), Delay 0.0s
Dot 2: Scale (0.5 → 1 → 0.5), Delay 0.2s
Dot 3: Scale (0.5 → 1 → 0.5), Delay 0.4s
```

### Progress Bars
Animate progress indicators.

#### Fill Progress
```
Animation: Scale X (0 → 1)
Duration: 2.0 seconds
Easing: Ease Out
```

#### Segmented Progress
```
Segment 1: Fill, Delay 0.0s
Segment 2: Fill, Delay 0.5s
Segment 3: Fill, Delay 1.0s
Segment 4: Fill, Delay 1.5s
```

## 🎭 Notification Animations

### Toast Notifications
Animate notification messages.

#### Slide In from Top
```
Animation: Position (Above screen → On-screen)
Duration: 0.3 seconds
Easing: Ease Out Back
```

#### Slide In from Right
```
Animation: Position (Off-screen right → On-screen)
Duration: 0.25 seconds
Easing: Ease Out
```

### Alert Animations
Draw attention to important messages.

#### Shake Alert
```
Animation: Position (Center → Left → Right → Center)
Duration: 0.5 seconds
Easing: Ease In Out
```

#### Pulse Alert
```
Animation: Scale (1 → 1.1 → 1)
Duration: 0.3 seconds
Easing: Ease In Out
Loop: 3 times
```

## 🎪 Interactive Elements

### Toggle Switches
Animate toggle switch states.

#### Switch Toggle
```
Animation: Position (Left → Right)
Duration: 0.2 seconds
Easing: Ease Out
```

#### Switch Background
```
Animation: Color (Off → On)
Duration: 0.2 seconds
Easing: Ease In Out
```

### Sliders
Animate slider interactions.

#### Slider Handle
```
Animation: Position (Start → End)
Duration: 0.3 seconds
Easing: Ease Out
```

#### Slider Fill
```
Animation: Scale X (0 → 1)
Duration: 0.3 seconds
Easing: Ease Out
```

### Checkboxes
Animate checkbox states.

#### Checkbox Check
```
Animation: Scale (0 → 1)
Duration: 0.2 seconds
Easing: Ease Out Back
```

#### Checkbox Background
```
Animation: Color (Unchecked → Checked)
Duration: 0.15 seconds
Easing: Ease In Out
```

## 🎨 Advanced UI Techniques

### Parallax Scrolling
Create depth with layered animations.

```
Background: Move slowly
Midground: Move medium speed
Foreground: Move fast
```

### Morphing Animations
Transform one UI element into another.

```
Step 1: Scale down original
Step 2: Fade out original
Step 3: Fade in new element
Step 4: Scale up new element
```

### Particle Effects
Add particle effects to UI elements.

```
Button Click: Particle burst
Menu Open: Particle trail
Notification: Particle shower
```

## 🚀 Performance Optimization

### UI Animation Best Practices

#### Optimize for Performance
- **Use RectTransform** for UI elements
- **Limit simultaneous animations** (max 10-15)
- **Use object pooling** for repeated animations
- **Test on target devices** regularly

#### Memory Management
- **Disable unused animations** when not needed
- **Use efficient easing curves** (avoid complex calculations)
- **Limit particle effects** on mobile devices
- **Profile memory usage** during development

#### Platform Considerations
- **Mobile**: Simpler animations, lower frame rates
- **Desktop**: More complex animations, higher frame rates
- **Web**: Consider bandwidth and performance
- **Console**: Optimize for specific hardware

## 🎯 Common UI Animation Patterns

### Material Design
- **Elevation changes** with shadows
- **Ripple effects** on touch
- **Smooth transitions** between states
- **Consistent timing** across elements

### iOS Design
- **Spring animations** with bounce
- **Blur effects** for depth
- **Smooth scrolling** with momentum
- **Gesture-based interactions**

### Custom Brand
- **Unique easing curves** for brand personality
- **Custom particle effects** for signature look
- **Consistent color transitions** for brand colors
- **Signature animation patterns** for recognition

## 🔧 Troubleshooting UI Animations

### Common Issues

#### Animation Not Playing
- Check if GraphExecutor component is attached
- Verify the GraphFlow Asset is assigned
- Ensure UI elements are interactive
- Check for conflicting animations

#### Performance Issues
- Reduce number of simultaneous animations
- Use simpler easing curves
- Optimize particle effects
- Test on target devices

#### Visual Glitches
- Check for overlapping UI elements
- Verify anchor points are correct
- Ensure proper layering order
- Test on different screen sizes

### Debug Tips
- **Use Debug Mode** to see animation execution
- **Add breakpoints** for complex sequences
- **Log animation events** for troubleshooting
- **Test incrementally** to isolate issues

## 🎉 What's Next?

Now that you understand UI animations:

### **📚 Learn More**
- **[Text Animations](text-animations)** - Animate text and typography
- **[3D Object Animations](3d-object-animations)** - Animate 3D objects
- **[Camera Animations](camera-animations)** - Animate camera movements

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game UI examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 UI Animation mastery achieved!** You're ready to create stunning interfaces!

**Let's animate text!** Check out the [Text Animations](text-animations) guide!

</div>
