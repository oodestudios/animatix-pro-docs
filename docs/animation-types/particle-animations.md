# Particle Animations

Create stunning particle effects that bring your scenes to life with fire, smoke, magic, and more. This comprehensive guide covers all aspects of particle animation with Animatix Pro.

## ✨ Particle Animation Fundamentals

Particle animations are essential for:
- **Visual Effects** - Fire, smoke, explosions, magic
- **Environmental Effects** - Rain, snow, dust, fog
- **Gameplay Feedback** - Hit effects, power-ups, collectibles
- **Atmospheric Enhancement** - Ambiance and mood setting

### Animation Types
- **Emission Animations** - Control particle spawning
- **Property Animations** - Animate particle properties
- **System Animations** - Control entire particle systems
- **Behavior Animations** - Animate particle behavior

## 🔥 Emission Animations

### Emission Rate
Control how many particles are spawned.

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

#### Pulsing Emission
```
Animation: Emission Rate (20 → 80 → 20)
Duration: 1.0 seconds
Easing: Ease In Out
Loop: Infinite
```

### Emission Shape
Control where particles are spawned.

#### Point Emission
```
Animation: Emission Shape (Point)
Duration: 1.0 seconds
Easing: Linear
```

#### Sphere Emission
```
Animation: Emission Shape (Sphere)
Duration: 1.0 seconds
Easing: Linear
```

#### Box Emission
```
Animation: Emission Shape (Box)
Duration: 1.0 seconds
Easing: Linear
```

### Emission Direction
Control particle direction.

#### Random Direction
```
Animation: Direction (Random)
Duration: 1.0 seconds
Easing: Linear
```

#### Cone Direction
```
Animation: Direction (Cone)
Duration: 1.0 seconds
Easing: Linear
```

#### Custom Direction
```
Animation: Direction (Custom)
Duration: 1.0 seconds
Easing: Linear
```

## 🎨 Property Animations

### Size Over Lifetime
Animate particle size changes.

#### Growing Particles
```
Animation: Size (0.1 → 1.0)
Duration: 2.0 seconds
Easing: Ease Out
```

#### Shrinking Particles
```
Animation: Size (1.0 → 0.1)
Duration: 1.5 seconds
Easing: Ease In
```

#### Pulsing Particles
```
Animation: Size (0.5 → 1.5 → 0.5)
Duration: 1.0 seconds
Easing: Ease In Out
Loop: Infinite
```

### Color Over Lifetime
Animate particle color changes.

#### Fade Out
```
Animation: Color (White → Transparent)
Duration: 2.0 seconds
Easing: Linear
```

#### Color Transition
```
Animation: Color (Red → Yellow → Blue)
Duration: 3.0 seconds
Easing: Linear
```

#### Rainbow Effect
```
Animation: Color (Red → Orange → Yellow → Green → Blue → Purple)
Duration: 4.0 seconds
Easing: Linear
Loop: Infinite
```

### Velocity Over Lifetime
Animate particle speed changes.

#### Slowing Down
```
Animation: Velocity (High → Low)
Duration: 2.0 seconds
Easing: Ease Out
```

#### Speeding Up
```
Animation: Velocity (Low → High)
Duration: 1.5 seconds
Easing: Ease In
```

#### Variable Speed
```
Animation: Velocity (High → Low → High)
Duration: 2.0 seconds
Easing: Ease In Out
```

## 🎭 System Animations

### System Enable/Disable
Control entire particle systems.

#### System Start
```
Animation: System Enabled (False → True)
Duration: 0.0 seconds
Easing: Instant
```

#### System Stop
```
Animation: System Enabled (True → False)
Duration: 0.0 seconds
Easing: Instant
```

#### System Toggle
```
Animation: System Enabled (Toggle)
Duration: 0.0 seconds
Easing: Instant
```

### System Properties
Animate system-wide properties.

#### System Speed
```
Animation: Simulation Speed (0.5 → 2.0)
Duration: 1.0 seconds
Easing: Ease In Out
```

#### System Scale
```
Animation: System Scale (1.0 → 2.0)
Duration: 1.5 seconds
Easing: Ease Out
```

#### System Rotation
```
Animation: System Rotation (0° → 360°)
Duration: 4.0 seconds
Easing: Linear
```

## 🎪 Behavior Animations

### Force Animations
Apply forces to particles.

#### Gravity
```
Animation: Gravity (0 → -9.81)
Duration: 1.0 seconds
Easing: Ease In
```

#### Wind Force
```
Animation: Wind (0 → 5.0)
Duration: 2.0 seconds
Easing: Ease In Out
```

#### Magnetic Force
```
Animation: Magnetic (0 → 10.0)
Duration: 1.5 seconds
Easing: Ease Out
```

### Collision Animations
Control particle collisions.

#### Collision Enable
```
Animation: Collision (False → True)
Duration: 0.0 seconds
Easing: Instant
```

#### Collision Damping
```
Animation: Damping (0 → 0.8)
Duration: 1.0 seconds
Easing: Ease In Out
```

#### Collision Bounce
```
Animation: Bounce (0 → 1.0)
Duration: 0.5 seconds
Easing: Ease Out
```

## 🔥 Fire Effects

### Basic Fire
Create realistic fire effects.

#### Fire Emission
```
Animation: Emission Rate (50 → 100)
Duration: 1.0 seconds
Easing: Ease In
```

#### Fire Color
```
Animation: Color (Red → Yellow → White)
Duration: 2.0 seconds
Easing: Linear
```

#### Fire Size
```
Animation: Size (0.5 → 2.0)
Duration: 1.5 seconds
Easing: Ease Out
```

### Fire Variations
Different types of fire effects.

#### Candle Flame
```
Animation: Emission Rate (10 → 20)
Duration: 0.5 seconds
Easing: Ease In Out
Loop: Infinite
```

#### Bonfire
```
Animation: Emission Rate (100 → 200)
Duration: 2.0 seconds
Easing: Ease In Out
```

#### Explosion
```
Animation: Emission Rate (0 → 500 → 0)
Duration: 0.5 seconds
Easing: Ease Out
```

## 💨 Smoke Effects

### Basic Smoke
Create realistic smoke effects.

#### Smoke Emission
```
Animation: Emission Rate (30 → 80)
Duration: 1.0 seconds
Easing: Ease In
```

#### Smoke Color
```
Animation: Color (White → Gray → Transparent)
Duration: 3.0 seconds
Easing: Linear
```

#### Smoke Size
```
Animation: Size (0.5 → 3.0)
Duration: 2.0 seconds
Easing: Ease Out
```

### Smoke Variations
Different types of smoke effects.

#### Steam
```
Animation: Emission Rate (20 → 40)
Duration: 1.0 seconds
Easing: Ease In Out
```

#### Dust
```
Animation: Emission Rate (10 → 30)
Duration: 0.5 seconds
Easing: Ease In Out
```

#### Fog
```
Animation: Emission Rate (50 → 100)
Duration: 2.0 seconds
Easing: Ease In
```

## ⚡ Magic Effects

### Basic Magic
Create magical particle effects.

#### Magic Emission
```
Animation: Emission Rate (40 → 80)
Duration: 1.0 seconds
Easing: Ease In
```

#### Magic Color
```
Animation: Color (Blue → Purple → Pink)
Duration: 2.0 seconds
Easing: Linear
```

#### Magic Size
```
Animation: Size (0.3 → 1.5)
Duration: 1.0 seconds
Easing: Ease Out
```

### Magic Variations
Different types of magic effects.

#### Healing Magic
```
Animation: Color (Green → White)
Duration: 1.5 seconds
Easing: Linear
```

#### Damage Magic
```
Animation: Color (Red → Orange)
Duration: 1.0 seconds
Easing: Linear
```

#### Teleport Magic
```
Animation: Color (Purple → Blue)
Duration: 2.0 seconds
Easing: Linear
```

## 🌧️ Weather Effects

### Rain
Create realistic rain effects.

#### Rain Emission
```
Animation: Emission Rate (100 → 200)
Duration: 2.0 seconds
Easing: Ease In
```

#### Rain Direction
```
Animation: Direction (Downward)
Duration: 1.0 seconds
Easing: Linear
```

#### Rain Speed
```
Animation: Velocity (5 → 15)
Duration: 1.0 seconds
Easing: Ease In
```

### Snow
Create realistic snow effects.

#### Snow Emission
```
Animation: Emission Rate (50 → 100)
Duration: 2.0 seconds
Easing: Ease In
```

#### Snow Direction
```
Animation: Direction (Floating)
Duration: 1.0 seconds
Easing: Linear
```

#### Snow Speed
```
Animation: Velocity (2 → 8)
Duration: 1.0 seconds
Easing: Ease In
```

## 🎮 Gameplay Effects

### Hit Effects
Visual feedback for hits.

#### Hit Burst
```
Animation: Emission Rate (0 → 100 → 0)
Duration: 0.2 seconds
Easing: Ease Out
```

#### Hit Color
```
Animation: Color (White → Red)
Duration: 0.1 seconds
Easing: Linear
```

#### Hit Size
```
Animation: Size (0.5 → 2.0)
Duration: 0.3 seconds
Easing: Ease Out
```

### Power-up Effects
Visual feedback for power-ups.

#### Power-up Glow
```
Animation: Color (White → Gold)
Duration: 1.0 seconds
Easing: Ease In Out
```

#### Power-up Size
```
Animation: Size (1.0 → 1.5)
Duration: 0.5 seconds
Easing: Ease Out
```

#### Power-up Emission
```
Animation: Emission Rate (20 → 50)
Duration: 1.0 seconds
Easing: Ease In
```

## 🎨 Advanced Particle Techniques

### Particle Trails
Create particle trail effects.

#### Trail Emission
```
Animation: Emission Rate (10 → 30)
Duration: 1.0 seconds
Easing: Ease In
```

#### Trail Color
```
Animation: Color (Bright → Fade)
Duration: 2.0 seconds
Easing: Linear
```

#### Trail Size
```
Animation: Size (1.0 → 0.1)
Duration: 1.5 seconds
Easing: Ease Out
```

### Particle Swarms
Create swarming particle effects.

#### Swarm Movement
```
Animation: Position (Swarm pattern)
Duration: 3.0 seconds
Easing: Linear
```

#### Swarm Size
```
Animation: Size (0.5 → 1.5)
Duration: 1.0 seconds
Easing: Ease In Out
```

#### Swarm Color
```
Animation: Color (Blue → Green)
Duration: 2.0 seconds
Easing: Linear
```

## 🚀 Performance Optimization

### Particle Animation Best Practices

#### Optimize for Performance
- **Limit particle count** (max 1000-2000 per system)
- **Use efficient emission rates** for smooth performance
- **Test on target devices** regularly
- **Profile particle performance** during development

#### Memory Management
- **Disable unused particle systems** when not needed
- **Use particle pooling** for repeated effects
- **Limit complex effects** on mobile devices
- **Profile memory usage** during development

#### Platform Considerations
- **Mobile**: Simpler effects, lower particle counts
- **Desktop**: More complex effects, higher particle counts
- **Console**: Optimize for specific hardware
- **VR**: Consider frame rate requirements

## 🎯 Common Particle Patterns

### Visual Effects Patterns
- **Explosion effects** for impacts and destruction
- **Magic effects** for spells and abilities
- **Environmental effects** for atmosphere
- **UI effects** for interface feedback

### Gameplay Patterns
- **Hit effects** for combat feedback
- **Power-up effects** for collectibles
- **Trail effects** for movement
- **Aura effects** for status effects

### Cinematic Patterns
- **Atmospheric effects** for mood setting
- **Transition effects** for scene changes
- **Dramatic effects** for story moments
- **Background effects** for ambiance

## 🔧 Troubleshooting Particle Animations

### Common Issues

#### Particles Not Spawning
- Check if particle system is enabled
- Verify the GraphFlow Asset is assigned
- Ensure emission rate is greater than 0
- Check for conflicting animations

#### Performance Issues
- Reduce particle count
- Use simpler emission patterns
- Optimize particle properties
- Test on target devices

#### Visual Glitches
- Check for overlapping particle systems
- Verify particle material settings
- Ensure proper lighting
- Test on different screen sizes

### Debug Tips
- **Use Debug Mode** to see particle execution
- **Add breakpoints** for complex sequences
- **Log particle events** for troubleshooting
- **Test incrementally** to isolate issues

## 🎉 What's Next?

Now that you understand particle animations:

### **📚 Learn More**
- **[Audio Animations](audio-animations)** - Animate audio properties
- **[Advanced Features](advanced-features/triggers-conditions)** - Complex workflows
- **[Examples & Tutorials](examples/ui-ux-animations)** - Complete examples

### **🎯 Try These Examples**
- **[UI/UX Examples](examples/ui-ux-animations)** - Complete UI examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game effect examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Particle Animation mastery achieved!** You're ready to create stunning effects!

**Let's animate audio!** Check out the [Audio Animations](audio-animations) guide!

</div>
