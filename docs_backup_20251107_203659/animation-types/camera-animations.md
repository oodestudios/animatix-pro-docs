# Camera Animations

Master the art of camera animation to create cinematic sequences, smooth transitions, and engaging gameplay experiences. This comprehensive guide covers all aspects of camera animation with Animatix Pro.

## 🎬 Camera Animation Fundamentals

Camera animations are crucial for:
- **Cinematic Storytelling** - Guide audience attention
- **Gameplay Enhancement** - Improve player experience
- **Smooth Transitions** - Seamless scene changes
- **Dynamic Perspectives** - Create visual interest

### Animation Types
- **Position Animations** - Move camera through space
- **Rotation Animations** - Change camera orientation
- **Field of View** - Adjust zoom and perspective
- **Depth of Field** - Control focus and blur
- **Post-Processing** - Animate visual effects

## 📍 Position Animations

### Linear Movement
Smooth, straight-line camera movement.

#### Dolly Shot
Move camera forward/backward.

```
Animation: Position (Start → End)
Duration: 3.0 seconds
Easing: Ease In Out
```

#### Tracking Shot
Move camera left/right.

```
Animation: Position (Left → Right)
Duration: 4.0 seconds
Easing: Ease In Out
```

#### Crane Shot
Move camera up/down.

```
Animation: Position (Low → High)
Duration: 2.5 seconds
Easing: Ease Out
```

### Curved Movement
Follow curved paths for cinematic effect.

#### Arc Movement
```
Animation: Position (Arc path)
Duration: 5.0 seconds
Easing: Ease In Out
```

#### Spiral Movement
```
Animation: Position (Spiral path)
Duration: 6.0 seconds
Easing: Linear
```

#### Figure-8 Movement
```
Animation: Position (Figure-8 path)
Duration: 8.0 seconds
Easing: Ease In Out
```

### Following Movement
Camera follows a target object.

#### Follow Target
```
Animation: Position (Follow target)
Duration: Continuous
Easing: Smooth
```

#### Lead Target
```
Animation: Position (Lead target)
Duration: Continuous
Easing: Smooth
```

#### Orbit Target
```
Animation: Position (Orbit around target)
Duration: Continuous
Easing: Linear
```

## 🔄 Rotation Animations

### Single Axis Rotation
Rotate around one axis.

#### Pan Left/Right
```
Animation: Rotation Y (0° → 90°)
Duration: 2.0 seconds
Easing: Ease In Out
```

#### Tilt Up/Down
```
Animation: Rotation X (0° → 30°)
Duration: 1.5 seconds
Easing: Ease Out
```

#### Roll Left/Right
```
Animation: Rotation Z (0° → 15°)
Duration: 1.0 seconds
Easing: Ease In Out
```

### Multi-Axis Rotation
Combine multiple rotation axes.

#### Complex Pan
```
Animation: Rotation (0,0,0 → 45,30,0)
Duration: 3.0 seconds
Easing: Ease In Out
```

#### Spinning Effect
```
Animation: Rotation (0,0,0 → 0,360,0)
Duration: 4.0 seconds
Easing: Linear
```

#### Tumbling Effect
```
Animation: Rotation (0,0,0 → 180,180,180)
Duration: 2.0 seconds
Easing: Ease Out
```

### Look-At Animations
Camera looks at specific targets.

#### Look at Target
```
Animation: Look At (Target object)
Duration: 2.0 seconds
Easing: Ease In Out
```

#### Smooth Look At
```
Animation: Look At (Smooth transition)
Duration: 3.0 seconds
Easing: Ease Out
```

#### Quick Look At
```
Animation: Look At (Quick snap)
Duration: 0.5 seconds
Easing: Ease Out
```

## 🔍 Field of View Animations

### Zoom Effects
Change camera field of view.

#### Zoom In
```
Animation: Field of View (60° → 30°)
Duration: 2.0 seconds
Easing: Ease In
```

#### Zoom Out
```
Animation: Field of View (30° → 60°)
Duration: 1.5 seconds
Easing: Ease Out
```

#### Zoom to Target
```
Animation: Field of View (Current → Target)
Duration: 2.5 seconds
Easing: Ease In Out
```

### Dynamic Zoom
Zoom based on gameplay events.

#### Combat Zoom
```
Animation: Field of View (60° → 45°)
Duration: 0.3 seconds
Easing: Ease Out
```

#### Exploration Zoom
```
Animation: Field of View (45° → 60°)
Duration: 0.5 seconds
Easing: Ease In
```

#### Cinematic Zoom
```
Animation: Field of View (60° → 20°)
Duration: 4.0 seconds
Easing: Ease In Out
```

## 🎭 Depth of Field Animations

### Focus Animations
Control camera focus distance.

#### Focus Pull
```
Animation: Focus Distance (Near → Far)
Duration: 3.0 seconds
Easing: Ease In Out
```

#### Focus Push
```
Animation: Focus Distance (Far → Near)
Duration: 2.0 seconds
Easing: Ease Out
```

#### Rack Focus
```
Animation: Focus Distance (Object A → Object B)
Duration: 1.5 seconds
Easing: Ease In Out
```

### Aperture Animations
Control depth of field blur.

#### Shallow Focus
```
Animation: Aperture (16 → 2.8)
Duration: 2.0 seconds
Easing: Ease Out
```

#### Deep Focus
```
Animation: Aperture (2.8 → 16)
Duration: 1.5 seconds
Easing: Ease In
```

#### Bokeh Effect
```
Animation: Aperture (8 → 1.4)
Duration: 3.0 seconds
Easing: Ease In Out
```

## 🎨 Post-Processing Animations

### Color Grading
Animate color correction properties.

#### Color Temperature
```
Animation: Temperature (5500K → 3000K)
Duration: 2.0 seconds
Easing: Ease In Out
```

#### Saturation
```
Animation: Saturation (1.0 → 1.5)
Duration: 1.0 seconds
Easing: Ease Out
```

#### Contrast
```
Animation: Contrast (1.0 → 1.2)
Duration: 1.5 seconds
Easing: Ease In Out
```

### Exposure Animations
Control camera exposure.

#### Brightness
```
Animation: Brightness (0 → 1)
Duration: 1.0 seconds
Easing: Ease In
```

#### Exposure
```
Animation: Exposure (0 → 2)
Duration: 2.0 seconds
Easing: Ease Out
```

#### Gamma
```
Animation: Gamma (1.0 → 1.5)
Duration: 1.5 seconds
Easing: Ease In Out
```

### Special Effects
Animate visual effects.

#### Vignette
```
Animation: Vignette (0 → 0.5)
Duration: 2.0 seconds
Easing: Ease In Out
```

#### Chromatic Aberration
```
Animation: Chromatic Aberration (0 → 0.3)
Duration: 1.0 seconds
Easing: Ease Out
```

#### Film Grain
```
Animation: Film Grain (0 → 0.5)
Duration: 1.5 seconds
Easing: Ease In
```

## 🎪 Cinematic Techniques

### Camera Shake
Create various shake effects.

#### Handheld Shake
```
Animation: Position (Random shake)
Duration: 2.0 seconds
Easing: Linear
```

#### Impact Shake
```
Animation: Position (Intense shake)
Duration: 0.5 seconds
Easing: Ease Out
```

#### Earthquake Shake
```
Animation: Position (Continuous shake)
Duration: 5.0 seconds
Easing: Linear
```

### Camera Transitions
Smooth transitions between shots.

#### Cut Transition
```
Animation: Instant change
Duration: 0.0 seconds
```

#### Fade Transition
```
Animation: Alpha (1 → 0 → 1)
Duration: 1.0 seconds
Easing: Ease In Out
```

#### Wipe Transition
```
Animation: Mask (0 → 1)
Duration: 1.5 seconds
Easing: Ease In Out
```

### Camera Motifs
Common cinematic camera movements.

#### Establishing Shot
```
Animation: Position (Wide view)
Duration: 3.0 seconds
Easing: Ease In Out
```

#### Close-up Shot
```
Animation: Position (Close to subject)
Duration: 2.0 seconds
Easing: Ease In
```

#### Over-the-Shoulder
```
Animation: Position (Behind character)
Duration: 1.5 seconds
Easing: Ease Out
```

## 🎮 Gameplay Camera Animations

### First-Person Camera
Animate first-person perspective.

#### Head Bob
```
Animation: Position (Up/down movement)
Duration: 0.5 seconds
Easing: Linear
Loop: Infinite
```

#### Weapon Sway
```
Animation: Rotation (Slight sway)
Duration: 1.0 seconds
Easing: Linear
Loop: Infinite
```

#### Recoil Effect
```
Animation: Rotation (Recoil movement)
Duration: 0.2 seconds
Easing: Ease Out
```

### Third-Person Camera
Animate third-person perspective.

#### Follow Distance
```
Animation: Position (Maintain distance)
Duration: Continuous
Easing: Smooth
```

#### Height Adjustment
```
Animation: Position (Adjust height)
Duration: 1.0 seconds
Easing: Ease In Out
```

#### Collision Avoidance
```
Animation: Position (Avoid obstacles)
Duration: 0.5 seconds
Easing: Ease Out
```

### Camera Switching
Switch between different camera modes.

#### Mode Transition
```
Animation: Position + Rotation (Smooth transition)
Duration: 2.0 seconds
Easing: Ease In Out
```

#### Instant Switch
```
Animation: Instant change
Duration: 0.0 seconds
```

#### Fade Switch
```
Animation: Alpha (1 → 0 → 1)
Duration: 1.0 seconds
Easing: Ease In Out
```

## 🎨 Advanced Camera Techniques

### Camera Rigs
Complex camera setups.

#### Multi-Camera Setup
```
Camera 1: Wide shot
Camera 2: Close-up
Camera 3: Overhead
Switch between cameras
```

#### Camera Array
```
Multiple cameras: Different angles
Switch based on events
Smooth transitions
```

#### Virtual Camera
```
Camera follows virtual path
Smooth interpolation
Cinematic quality
```

### Dynamic Camera
Camera responds to gameplay.

#### Combat Camera
```
Animation: Position (Combat positioning)
Duration: 0.5 seconds
Easing: Ease Out
```

#### Exploration Camera
```
Animation: Position (Exploration positioning)
Duration: 1.0 seconds
Easing: Ease In Out
```

#### Dialogue Camera
```
Animation: Position (Dialogue positioning)
Duration: 2.0 seconds
Easing: Ease In Out
```

### Camera Effects
Special camera effects.

#### Slow Motion
```
Animation: Time Scale (1.0 → 0.5)
Duration: 2.0 seconds
Easing: Ease In Out
```

#### Speed Ramp
```
Animation: Time Scale (1.0 → 0.1 → 1.0)
Duration: 3.0 seconds
Easing: Ease In Out
```

#### Bullet Time
```
Animation: Time Scale (1.0 → 0.05)
Duration: 1.0 seconds
Easing: Ease Out
```

## 🚀 Performance Optimization

### Camera Animation Best Practices

#### Optimize for Performance
- **Limit camera changes** per frame
- **Use efficient easing curves** for smooth motion
- **Test on target devices** regularly
- **Profile camera performance** during development

#### Memory Management
- **Disable unused cameras** when not needed
- **Use camera pooling** for dynamic cameras
- **Limit post-processing effects** on mobile
- **Profile memory usage** during development

#### Platform Considerations
- **Mobile**: Simpler camera movements, lower quality
- **Desktop**: More complex movements, higher quality
- **Console**: Optimize for specific hardware
- **VR**: Consider frame rate requirements

## 🎯 Common Camera Patterns

### Cinematic Patterns
- **Establishing shots** for scene setting
- **Close-ups** for emotional impact
- **Tracking shots** for following action
- **Aerial shots** for dramatic effect

### Gameplay Patterns
- **Combat cameras** for action sequences
- **Exploration cameras** for open worlds
- **Dialogue cameras** for conversations
- **Cutscene cameras** for story moments

### UI Patterns
- **Menu cameras** for interface navigation
- **HUD cameras** for information display
- **Transition cameras** for scene changes
- **Effect cameras** for visual feedback

## 🔧 Troubleshooting Camera Animations

### Common Issues

#### Camera Not Moving
- Check if camera has required components
- Verify the GraphFlow Asset is assigned
- Ensure camera is active and enabled
- Check for conflicting animations

#### Performance Issues
- Reduce number of camera changes
- Use simpler easing curves
- Optimize post-processing effects
- Test on target devices

#### Visual Glitches
- Check for camera clipping
- Verify camera settings
- Ensure proper lighting
- Test on different screen sizes

### Debug Tips
- **Use Debug Mode** to see camera execution
- **Add breakpoints** for complex sequences
- **Log camera events** for troubleshooting
- **Test incrementally** to isolate issues

## 🎉 What's Next?

Now that you understand camera animations:

### **📚 Learn More**
- **[Particle Animations](particle-animations)** - Animate particle effects
- **[Audio Animations](audio-animations)** - Animate audio properties
- **[Advanced Features](advanced-features/triggers-conditions)** - Complex workflows

### **🎯 Try These Examples**
- **[Cinematic Camera](examples/cinematic-camera)** - Complete cinematic examples
- **[Gameplay Sequences](examples/gameplay-sequences)** - Game camera examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Camera Animation mastery achieved!** You're ready to create cinematic experiences!

**Let's animate particles!** Check out the [Particle Animations](particle-animations) guide!

</div>
