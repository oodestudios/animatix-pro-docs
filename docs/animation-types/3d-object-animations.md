# 3D Object Animations

Create stunning 3D object animations that bring your scenes to life. This comprehensive guide covers everything from simple rotations to complex cinematic sequences.

## 🎬 3D Animation Fundamentals

3D object animations are essential for:
- **Gameplay Mechanics** - Character movement, object interactions
- **Cinematic Sequences** - Storytelling and cutscenes
- **Environmental Effects** - Dynamic world elements
- **User Interface** - 3D UI elements and interactions

### Animation Types
- **Transform Animations** - Position, rotation, scale
- **Material Animations** - Color, texture, shader properties
- **Component Animations** - Light, camera, particle systems
- **Physics Animations** - Rigidbody, collider properties

## 🔄 Transform Animations

### Position Animations
Move objects through 3D space.

#### Linear Movement
```
Animation: Position (Start → End)
Duration: 2.0 seconds
Easing: Linear
```

#### Curved Movement
```
Animation: Position (Start → Control → End)
Duration: 3.0 seconds
Easing: Ease In Out
```

#### Bouncing Movement
```
Animation: Position (Start → End)
Duration: 1.5 seconds
Easing: Ease Out Bounce
```

### Rotation Animations
Rotate objects around their axes.

#### Single Axis Rotation
```
Animation: Rotation Y (0° → 360°)
Duration: 2.0 seconds
Easing: Linear
```

#### Multi-Axis Rotation
```
Animation: Rotation (0,0,0 → 180,90,45)
Duration: 3.0 seconds
Easing: Ease In Out
```

#### Spinning Effect
```
Animation: Rotation Y (0° → 720°)
Duration: 1.0 seconds
Easing: Linear
Loop: Infinite
```

### Scale Animations
Change object size dynamically.

#### Uniform Scaling
```
Animation: Scale (1,1,1 → 2,2,2)
Duration: 1.0 seconds
Easing: Ease Out Back
```

#### Non-Uniform Scaling
```
Animation: Scale (1,1,1 → 2,1,1)
Duration: 1.5 seconds
Easing: Ease In Out
```

#### Pulsing Effect
```
Animation: Scale (1 → 1.2 → 1)
Duration: 0.8 seconds
Easing: Ease In Out
Loop: Infinite
```

## 🎨 Material Animations

### Color Animations
Animate material colors and properties.

#### Color Transition
```
Animation: Color (Start → End)
Duration: 1.0 seconds
Easing: Ease In Out
```

#### Rainbow Effect
```
Animation: Color (Red → Orange → Yellow → Green → Blue → Purple)
Duration: 3.0 seconds
Easing: Linear
Loop: Infinite
```

#### Fade In/Out
```
Animation: Alpha (0 → 1)
Duration: 0.5 seconds
Easing: Ease In
```

### Texture Animations
Animate texture properties.

#### Texture Offset
```
Animation: Texture Offset (0,0 → 1,1)
Duration: 2.0 seconds
Easing: Linear
Loop: Infinite
```

#### Texture Scale
```
Animation: Texture Scale (1,1 → 2,2)
Duration: 1.0 seconds
Easing: Ease Out
```

#### Texture Rotation
```
Animation: Texture Rotation (0° → 360°)
Duration: 4.0 seconds
Easing: Linear
Loop: Infinite
```

### Shader Animations
Animate custom shader properties.

#### Emission Intensity
```
Animation: Emission (0 → 2)
Duration: 1.0 seconds
Easing: Ease In Out
```

#### Metallic Value
```
Animation: Metallic (0 → 1)
Duration: 0.8 seconds
Easing: Ease Out
```

#### Smoothness Value
```
Animation: Smoothness (0 → 1)
Duration: 1.2 seconds
Easing: Ease In Out
```

## 💡 Light Animations

### Light Intensity
Animate light brightness.

#### Fade In
```
Animation: Intensity (0 → 2)
Duration: 1.0 seconds
Easing: Ease In
```

#### Flickering Effect
```
Animation: Intensity (1 → 1.5 → 0.8 → 1.2)
Duration: 0.1 seconds
Easing: Linear
Loop: Infinite
```

#### Pulsing Light
```
Animation: Intensity (1 → 2 → 1)
Duration: 1.0 seconds
Easing: Ease In Out
Loop: Infinite
```

### Light Color
Animate light color properties.

#### Color Transition
```
Animation: Color (White → Blue → Red)
Duration: 2.0 seconds
Easing: Ease In Out
```

#### Temperature Change
```
Animation: Temperature (5500K → 3000K)
Duration: 1.5 seconds
Easing: Ease In Out
```

### Light Position
Animate light movement.

#### Moving Light
```
Animation: Position (Start → End)
Duration: 3.0 seconds
Easing: Ease In Out
```

#### Orbiting Light
```
Animation: Position (Circular orbit)
Duration: 4.0 seconds
Easing: Linear
Loop: Infinite
```

## 🎭 Particle System Animations

### Particle Emission
Control particle emission rates.

#### Burst Emission
```
Animation: Emission Rate (0 → 100 → 0)
Duration: 0.5 seconds
Easing: Ease Out
```

#### Continuous Emission
```
Animation: Emission Rate (0 → 50)
Duration: 1.0 seconds
Easing: Ease In
```

### Particle Properties
Animate particle system properties.

#### Size Over Lifetime
```
Animation: Size (1 → 0.5 → 0)
Duration: 2.0 seconds
Easing: Ease Out
```

#### Color Over Lifetime
```
Animation: Color (White → Yellow → Red → Transparent)
Duration: 2.0 seconds
Easing: Linear
```

#### Velocity Over Lifetime
```
Animation: Velocity (High → Low)
Duration: 1.5 seconds
Easing: Ease Out
```

## 🎪 Physics Animations

### Rigidbody Animations
Animate physics properties.

#### Mass Animation
```
Animation: Mass (1 → 5)
Duration: 1.0 seconds
Easing: Ease In Out
```

#### Drag Animation
```
Animation: Drag (0 → 2)
Duration: 0.8 seconds
Easing: Ease Out
```

#### Angular Drag
```
Animation: Angular Drag (0 → 1)
Duration: 1.2 seconds
Easing: Ease In Out
```

### Collider Animations
Animate collider properties.

#### Size Animation
```
Animation: Collider Size (1 → 2)
Duration: 1.0 seconds
Easing: Ease Out Back
```

#### Center Animation
```
Animation: Collider Center (0,0,0 → 0,1,0)
Duration: 0.5 seconds
Easing: Ease In Out
```

## 🎬 Cinematic Animations

### Camera Shake
Create camera shake effects.

#### Impact Shake
```
Animation: Position (Random shake)
Duration: 0.5 seconds
Easing: Ease Out
```

#### Earthquake Shake
```
Animation: Position (Continuous shake)
Duration: 3.0 seconds
Easing: Linear
```

#### Explosion Shake
```
Animation: Position (Intense shake)
Duration: 1.0 seconds
Easing: Ease Out
```

### Depth of Field
Animate camera focus.

#### Focus Pull
```
Animation: Focus Distance (Near → Far)
Duration: 2.0 seconds
Easing: Ease In Out
```

#### Bokeh Effect
```
Animation: Aperture (2.8 → 16)
Duration: 1.5 seconds
Easing: Ease Out
```

### Camera Movement
Animate camera positioning.

#### Dolly Shot
```
Animation: Position (Start → End)
Duration: 5.0 seconds
Easing: Ease In Out
```

#### Pan Shot
```
Animation: Rotation (Start → End)
Duration: 3.0 seconds
Easing: Ease In Out
```

#### Crane Shot
```
Animation: Position + Rotation (Combined)
Duration: 4.0 seconds
Easing: Ease In Out
```

## 🎮 Gameplay Animations

### Character Animations
Animate character properties.

#### Health Bar
```
Animation: Scale X (1 → 0.5)
Duration: 0.5 seconds
Easing: Ease Out
```

#### Experience Bar
```
Animation: Scale X (0 → 1)
Duration: 1.0 seconds
Easing: Ease Out
```

#### Damage Indicator
```
Animation: Color (White → Red → White)
Duration: 0.3 seconds
Easing: Ease In Out
```

### Weapon Animations
Animate weapon properties.

#### Recoil
```
Animation: Position (Rest → Recoil → Rest)
Duration: 0.2 seconds
Easing: Ease Out
```

#### Reload
```
Animation: Rotation (0° → 90° → 0°)
Duration: 1.0 seconds
Easing: Ease In Out
```

#### Muzzle Flash
```
Animation: Scale (0 → 1 → 0)
Duration: 0.1 seconds
Easing: Ease Out
```

### Environment Animations
Animate environmental elements.

#### Door Opening
```
Animation: Rotation (0° → 90°)
Duration: 1.0 seconds
Easing: Ease Out
```

#### Platform Moving
```
Animation: Position (Start → End)
Duration: 2.0 seconds
Easing: Ease In Out
```

#### Water Level
```
Animation: Position (Low → High)
Duration: 5.0 seconds
Easing: Ease In Out
```

## 🎨 Advanced 3D Techniques

### Morphing Animations
Transform one object into another.

```
Step 1: Scale down original object
Step 2: Fade out original object
Step 3: Fade in new object
Step 4: Scale up new object
```

### Procedural Animations
Create procedural movement patterns.

#### Sine Wave Movement
```
Animation: Position Y (Sine wave)
Duration: 2.0 seconds
Easing: Linear
Loop: Infinite
```

#### Figure-8 Movement
```
Animation: Position (Figure-8 pattern)
Duration: 4.0 seconds
Easing: Linear
Loop: Infinite
```

#### Spiral Movement
```
Animation: Position (Spiral pattern)
Duration: 3.0 seconds
Easing: Linear
Loop: Infinite
```

### Layered Animations
Combine multiple animation layers.

#### Base Layer: Position
#### Layer 1: Rotation
#### Layer 2: Scale
#### Layer 3: Color

## 🚀 Performance Optimization

### 3D Animation Best Practices

#### Optimize for Performance
- **Use LODs** for distant objects
- **Limit simultaneous animations** (max 20-30)
- **Use efficient easing curves** for smooth motion
- **Test on target devices** regularly

#### Memory Management
- **Disable unused animations** when not needed
- **Use object pooling** for repeated effects
- **Limit particle effects** on mobile devices
- **Profile memory usage** during development

#### Platform Considerations
- **Mobile**: Simpler animations, lower object counts
- **Desktop**: More complex animations, higher object counts
- **Console**: Optimize for specific hardware
- **VR**: Consider frame rate requirements

## 🎯 Common 3D Animation Patterns

### Gameplay Patterns
- **Pickup animations** for collectibles
- **Door animations** for interactive elements
- **Platform animations** for moving objects
- **Effect animations** for visual feedback

### Cinematic Patterns
- **Camera movements** for dramatic effect
- **Light changes** for mood setting
- **Object reveals** for storytelling
- **Transition effects** between scenes

### UI Patterns
- **3D UI elements** for immersive interfaces
- **Holographic effects** for futuristic UIs
- **Depth-based navigation** for complex menus
- **Spatial interactions** for touch interfaces

## 🔧 Troubleshooting 3D Animations

### Common Issues

#### Animation Not Playing
- Check if object has required components
- Verify the GraphFlow Asset is assigned
- Ensure object is active and visible
- Check for conflicting animations

#### Performance Issues
- Reduce number of animated objects
- Use simpler easing curves
- Optimize particle effects
- Test on target devices

#### Visual Glitches
- Check for overlapping objects
- Verify material settings
- Ensure proper lighting
- Test on different screen sizes

### Debug Tips
- **Use Debug Mode** to see animation execution
- **Add breakpoints** for complex sequences
- **Log animation events** for troubleshooting
- **Test incrementally** to isolate issues

## 🎉 What's Next?

Now that you understand 3D object animations:

### **📚 Learn More**
- **[Camera Animations](camera-animations)** - Animate camera movements
- **[Particle Animations](particle-animations)** - Animate particle effects
- **[Audio Animations](audio-animations)** - Animate audio properties

### **🎯 Try These Examples**
- **[Gameplay Sequences](examples/gameplay-sequences)** - Complete game examples
- **[Cinematic Camera](examples/cinematic-camera)** - Cinematic sequences
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 3D Animation mastery achieved!** You're ready to create stunning 3D scenes!

**Let's animate cameras!** Check out the [Camera Animations](camera-animations) guide!

</div>
