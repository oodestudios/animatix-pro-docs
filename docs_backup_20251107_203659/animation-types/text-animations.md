# Text Animations

Create engaging text animations that bring your typography to life. This guide covers everything from simple fade-ins to complex typewriter effects.

## 📝 Text Animation Fundamentals

Text animations are crucial for:
- **Drawing Attention** - Highlight important information
- **Storytelling** - Guide users through content
- **Brand Personality** - Express your app's character
- **User Engagement** - Make text more interesting

### Animation Types
- **Character-based** - Animate individual characters
- **Word-based** - Animate entire words
- **Line-based** - Animate lines of text
- **Paragraph-based** - Animate entire paragraphs

## ⌨️ Typewriter Effects

### Basic Typewriter
Reveal text character by character.

```
Animation: Character visibility (0 → 1)
Duration: 0.05 seconds per character
Easing: Linear
```

### Typewriter with Cursor
Add a blinking cursor effect.

```
Text: Character visibility (0 → 1)
Cursor: Alpha (0 → 1 → 0)
Duration: 0.05s per character + 0.5s cursor blink
```

### Variable Speed Typewriter
Change speed based on punctuation.

```
Normal characters: 0.05s
Punctuation: 0.2s pause
Spaces: 0.1s pause
```

## ✨ Text Entrance Effects

### Fade In
Simple text appearance.

```
Animation: Alpha (0 → 1)
Duration: 0.5 seconds
Easing: Ease In
```

### Slide In
Text slides in from different directions.

#### Slide from Left
```
Animation: Position (Left off-screen → On-screen)
Duration: 0.4 seconds
Easing: Ease Out Back
```

#### Slide from Right
```
Animation: Position (Right off-screen → On-screen)
Duration: 0.4 seconds
Easing: Ease Out Back
```

#### Slide from Bottom
```
Animation: Position (Bottom off-screen → On-screen)
Duration: 0.3 seconds
Easing: Ease Out Bounce
```

### Scale In
Text grows into view.

```
Animation: Scale (0 → 1)
Duration: 0.3 seconds
Easing: Ease Out Back
```

### Rotate In
Text rotates into view.

```
Animation: Rotation (0 → 360°)
Duration: 0.6 seconds
Easing: Ease Out
```

## 🎭 Text Emphasis Effects

### Highlight Animation
Draw attention to specific text.

```
Animation: Background color (Transparent → Highlight)
Duration: 0.3 seconds
Easing: Ease In Out
```

### Underline Animation
Animate underline appearance.

```
Animation: Underline width (0 → 100%)
Duration: 0.4 seconds
Easing: Ease Out
```

### Glow Effect
Add a glowing effect to text.

```
Animation: Glow intensity (0 → 1)
Duration: 0.5 seconds
Easing: Ease In Out
```

## 📊 Text Data Animations

### Counter Animation
Animate number changes.

```
Animation: Text value (0 → Target)
Duration: 1.0 seconds
Easing: Ease Out
```

### Percentage Counter
Animate percentage changes.

```
Animation: Text value (0% → 100%)
Duration: 2.0 seconds
Easing: Ease Out
```

### Currency Counter
Animate currency values.

```
Animation: Text value ($0 → $1,000)
Duration: 1.5 seconds
Easing: Ease Out
```

## 🎨 Text Color Animations

### Color Transition
Change text color smoothly.

```
Animation: Color (Start → End)
Duration: 0.3 seconds
Easing: Ease In Out
```

### Rainbow Effect
Cycle through colors.

```
Animation: Color (Red → Orange → Yellow → Green → Blue → Purple)
Duration: 2.0 seconds
Easing: Linear
Loop: Infinite
```

### Gradient Animation
Animate gradient colors.

```
Animation: Gradient colors (Start → End)
Duration: 1.0 seconds
Easing: Ease In Out
```

## 📱 Text Layout Animations

### Text Wrapping
Animate text wrapping behavior.

```
Animation: Text width (Narrow → Wide)
Duration: 0.5 seconds
Easing: Ease Out
```

### Line Spacing
Animate line spacing changes.

```
Animation: Line spacing (Tight → Loose)
Duration: 0.4 seconds
Easing: Ease In Out
```

### Text Alignment
Animate text alignment changes.

```
Animation: Alignment (Left → Center → Right)
Duration: 0.6 seconds
Easing: Ease In Out
```

## 🎪 Interactive Text Effects

### Hover Effects
Animate text on mouse hover.

#### Scale on Hover
```
Trigger: On Mouse Enter
Animation: Scale (1 → 1.1)
Duration: 0.2 seconds
Easing: Ease Out Back
```

#### Color on Hover
```
Trigger: On Mouse Enter
Animation: Color (Default → Highlight)
Duration: 0.15 seconds
Easing: Ease In Out
```

### Click Effects
Animate text on click.

#### Press Down
```
Trigger: On Click
Animation: Scale (1 → 0.95)
Duration: 0.1 seconds
Easing: Ease In
```

#### Bounce Back
```
Trigger: On Release
Animation: Scale (0.95 → 1)
Duration: 0.2 seconds
Easing: Ease Out Bounce
```

## 🎭 Advanced Text Effects

### Text Morphing
Transform one text into another.

```
Step 1: Fade out original text
Step 2: Scale down original text
Step 3: Scale up new text
Step 4: Fade in new text
```

### Text Shaking
Create shaking text effect.

```
Animation: Position (Center → Left → Right → Center)
Duration: 0.1 seconds
Easing: Ease In Out
Loop: 3 times
```

### Text Waving
Create waving text effect.

```
Animation: Rotation (0° → 10° → -10° → 0°)
Duration: 0.5 seconds
Easing: Ease In Out
Loop: Infinite
```

## 🎨 Typography Animations

### Font Weight Changes
Animate font weight changes.

```
Animation: Font weight (Normal → Bold)
Duration: 0.3 seconds
Easing: Ease In Out
```

### Font Size Changes
Animate font size changes.

```
Animation: Font size (Small → Large)
Duration: 0.4 seconds
Easing: Ease Out Back
```

### Font Style Changes
Animate font style changes.

```
Animation: Font style (Normal → Italic)
Duration: 0.2 seconds
Easing: Ease In Out
```

## 🚀 Performance Optimization

### Text Animation Best Practices

#### Optimize for Performance
- **Use TextMeshPro** for better performance
- **Limit character animations** (max 100 characters)
- **Use efficient easing curves** for smooth motion
- **Test on target devices** regularly

#### Memory Management
- **Disable unused text animations** when not needed
- **Use object pooling** for repeated text effects
- **Limit particle effects** on text
- **Profile memory usage** during development

#### Platform Considerations
- **Mobile**: Simpler text effects, lower character counts
- **Desktop**: More complex effects, higher character counts
- **Web**: Consider font loading and rendering
- **Console**: Optimize for specific hardware

## 🎯 Common Text Animation Patterns

### Reading Flow
Guide users through text content.

```
Line 1: Fade in, Delay 0.0s
Line 2: Fade in, Delay 0.5s
Line 3: Fade in, Delay 1.0s
Line 4: Fade in, Delay 1.5s
```

### Emphasis Hierarchy
Use animation to show importance.

```
Title: Scale + Color animation
Subtitle: Fade in animation
Body: Simple fade in
Caption: Subtle fade in
```

### Interactive Feedback
Provide feedback for user interactions.

```
Hover: Color change
Click: Scale + Color change
Focus: Glow effect
Active: Underline animation
```

## 🔧 Troubleshooting Text Animations

### Common Issues

#### Text Not Animating
- Check if TextMeshPro component is attached
- Verify the GraphFlow Asset is assigned
- Ensure text is visible and interactive
- Check for conflicting animations

#### Performance Issues
- Reduce number of animated characters
- Use simpler easing curves
- Optimize text rendering
- Test on target devices

#### Visual Glitches
- Check for overlapping text elements
- Verify font settings are correct
- Ensure proper text alignment
- Test on different screen sizes

### Debug Tips
- **Use Debug Mode** to see animation execution
- **Add breakpoints** for complex sequences
- **Log text animation events** for troubleshooting
- **Test incrementally** to isolate issues

## 🎉 What's Next?

Now that you understand text animations:

### **📚 Learn More**
- **[3D Object Animations](3d-object-animations)** - Animate 3D objects
- **[Camera Animations](camera-animations)** - Animate camera movements
- **[Particle Animations](particle-animations)** - Animate particle effects

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game text examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Text Animation mastery achieved!** You're ready to create engaging typography!

**Let's animate 3D objects!** Check out the [3D Object Animations](3d-object-animations) guide!

</div>
