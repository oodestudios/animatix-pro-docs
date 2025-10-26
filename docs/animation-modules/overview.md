---
sidebar_position: 1
---

# Animation Modules

## 3️⃣ Animation Modules

Animatix Pro offers a complete suite of animation modules designed to bring every element of your game or app to life — from UI and text to 3D objects, cameras, audio, materials, and particles.

Each module is modular, stackable, and fully compatible with the GraphFlow System, Event System, and GraphExecutor runtime engine.

### 🟦 UI Animations

UI Animations are the foundation of modern interfaces. They make your menus feel responsive, your buttons clickable, and your interface alive.

#### Transform Animations

**Fade**
- Smoothly transitions transparency from 0% → 100%.
- Perfect for: menus, popups, loading screens.
- Key Settings:
  - Duration: 0.5–2.0 s
  - Easing: Ease In Out
  - Fade Start / End: 0 → 1

**Slide**
- Moves objects between positions.
- Perfect for: panels, notifications, off-screen transitions.
- Key Settings:
  - Duration: 0.3–1.5 s
  - Start/End Position
  - Snapping Mode

**Scale**
- Changes object size smoothly.
- Perfect for: button presses, emphasis effects.
- Key Settings:
  - Duration: 0.2–0.8 s
  - Start/End Scale
  - Uniform Scaling

**Rotate**
- Spins objects around center or local pivot.
- Perfect for: loaders, icons, interactive feedback.
- Key Settings:
  - Duration: 0.5–3.0 s
  - Start/End Angle
  - Local Rotation

#### Visual Effects

**Color Tint**
- Changes color or alpha of UI elements.
- Key Settings: Duration 0.2–1.0 s | Color Start/End | Alpha Only

**Jelly**
- Bouncy, elastic deformation.
- Key Settings: Press Scale | Overshoot | Durations

**Blur**
- Applies real-time UI blur.
- Key Settings: Blur Mode | Strength | Canvas Group

#### Impact Effects

**Punch / Bounce / Shake / Elastic Scale**
- Add tactile motion and impact feedback with physical motion curves.

**Example Use Cases**
- On Start → Fade In Menu (1.0 s)
- On Click → Scale Down (0.1 s) → Scale Up (0.2 s)

**📸 [Screenshot Placeholder: UI Animation Node Settings in Inspector]**

---

### 🟨 Text Animations

Text animations make dialogue dynamic, menus expressive, and words memorable.

#### Character Effects
**Scale Pop | Fade | Slide | Bounce | Shake | Wave** — all per character with interval control.

#### Reveal Effects
**Typewriter | Fade Up | Word Fade In | Line Drop** — perfect for dialogue, intros, and dynamic storytelling.

#### Special Reveals
**Explosion Reveal | Gravity Drop** — physics-driven letter effects for dramatic moments.

#### Text Effects
**Wiggle | Breathing Scale | Rainbow Color** — continuous looping visual styles.

**Example Use Cases**
- On Start → Typewriter (2.0 s) → Fade Out (0.5 s)
- On Error → Character Shake (0.5 s)

**📸 [Screenshot Placeholder: Text Animation Node Settings – Character and Word Modes]**

---

### 🟥 3D Object Animations

Bring 3D objects to life with smooth transformations and cinematic motion.

#### Transform Animations
**Move 3D | Move Local 3D | Rotate 3D | Scale 3D | Look At 3D**

Each includes duration, easing, and world/local space control.

**Example Use Cases**
- On Start → Move 3D Camera (3 s) → Look At Target (1 s)
- On Trigger → Scale 3D Object (0.5 s) → Rotate 3D (1 s)

**📸 [Screenshot Placeholder: 3D Object Animation Inspector View]**

---

### 🟩 Camera Animations

Camera animations create cinematic immersion and smooth scene flow.

#### Movement Animations
**Move To | Pan To | Zoom To | Cut To**

#### Look & Follow
**Look At | Follow Target**

#### Orbital Animations
**Orbit Around | Spin Loop**

#### Effects
**Camera Shake | Punch Position | Breath Zoom**

#### Advanced Motion
**Dolly Move | Bob Motion | Drift Motion**

**Example Use Cases**
- On Explosion → Camera Shake (0.5 s) → Punch Position (0.2 s)
- On Start → Orbit Around Object (4 s) → Follow Target (continuous)

**📸 [Screenshot Placeholder: Camera Animation Node – Movement and Effects]**

---

### 🟧 Audio Animations

Synchronize sound with motion for total immersion.

**Play Sound / Stop Sound / Volume Tween / Pitch Tween**

Each node supports runtime mixing, fading, and dynamic pitch changes.

**Example Use Cases**
- On Click → Play Click Sound → Scale Button
- On Scene Change → Volume Tween Down (2 s) → Stop Music → Play New Track

**📸 [Screenshot Placeholder: Audio Animation Node Inspector – Volume and Pitch Controls]**

---

### 🟪 Material Animations

Change surface look and feel dynamically to match game events.

**Color Tween / Float Property Tween / Texture Swap / Material Fade**

All support duration, property targeting, and easing.

**Example Use Cases**
- On Damage → Color Tween to Red (0.2 s) → Tween Back (1.0 s)
- On Death → Material Fade Out (2 s) → Deactivate Object

**📸 [Screenshot Placeholder: Material Animation Node Inspector – Color and Fade Settings]**

---

### 🟫 Particle System Control

Control Unity's particle systems directly through animation nodes.

**Play Particles / Stop Particles / Loop Particles / Emission Rate Tween / Simulate Particles**

**Example Use Cases**
- On Explosion → Play Particles (2 s) → Stop Particles → Wait (1 s)
- On Start → Loop Particles (infinite) → Emission Rate Tween Up (3 s)

**📸 [Screenshot Placeholder: Particle System Control Node Inspector – Emission Tween]**