# Welcome to Animatix Pro

<div className="hero-banner">
  <div className="hero-content">
    <h1>🎨 Animatix Pro</h1>
    <p className="hero-subtitle">Professional Animation System for Unity</p>
    <p className="hero-description">
      A visual graph-based animation system for Unity that empowers developers, designers, and artists to create professional animations, without writing code.
    </p>
    <div className="hero-buttons">
      <a className="button button--primary button--lg" href="/docs/getting-started/installation">
        Get Started
      </a>
      <a className="button button--secondary button--lg" href="/docs/getting-started/quick-start">
        Quick Start
      </a>
    </div>
  </div>
  <div className="hero-demo">
    <img src="/img/animatix-pro-demo.gif" alt="Animatix Pro Demo" />
  </div>
</div>

## What is Animatix Pro?

Animatix Pro is a visual graph-based animation system for Unity. That empowers developers, designers, and artists to create professional animations, without writing code.

## 🎯 Perfect for Every Role

### For Artists:
- No coding required  
- Intuitive node-based workflow  
- Professional animation tools  

### For Programmers:
- Full API access  
- Custom triggers, conditions & actions  
- Runtime control  
- Easy integration with Unity code

### For Teams:
- Version control friendly  
- Consistent animation standards  
- Smooth handoff between artists & programmers  
- Production-ready workflow  

## ✨ Key Features

### 🎨 Visual Graph Editor
Create complex animations using our intuitive node-based editor. Drag, drop, and connect nodes to build sophisticated animation sequences without writing code.

### ⚡ High Performance
Optimized for mobile and desktop with efficient animation execution. Built with performance in mind for smooth 60fps animations on all platforms.

### 🔧 Programmatic Control
Full API access for advanced users who need script control. Integrate seamlessly with your existing codebase and create custom functionality.

### 🎯 Production Ready
Used by professional game developers worldwide. Battle-tested in real projects and constantly updated with new features and improvements.

## What You Can Create

### 🖥️ UI/UX Animations
- Button interactions and hover effects
- Menu transitions and panel animations
- Loading sequences and progress indicators
- Responsive UI elements

### Text Animations
- Typewriter effects  
- Character-by-character reveals  
- Scramble, flip, fade effects  
- Per-word, per-line animation control

### 🎬 Camera Animations
- Cinematic camera movements
- Dynamic camera following
- Cutscene sequences

### 🎮 Object Animations
- Environmental animations
- Interactive object behaviors
- Physics-based animations

### ✨ Particle Effects
- Visual effects and explosions
- Environmental particles
- UI particle systems
- Custom effect sequences

### 🔊 Audio Integration
- Synchronized audio and visual effects
- Dynamic music transitions
- Sound-triggered animations
- Audio-reactive elements

## 🚀 Quick Start

Create stunning UI, Text, 3D Objects and camera animations with ease using our powerful visual graph-based system. No coding required, but full programmatic control when you need it.

## 📚 Documentation

- **Getting Started** - Installation and setup guide
- **Quick Start** - Create your first animation in 5 minutes
- **API Reference** - Complete API documentation
- **Examples** - Real-world code examples and patterns

## 🎮 Usage Example

```csharp
using AnimatixPro.GraphFlow;

public class MyGameController : MonoBehaviour
{
    void Start()
    {
        // Play animation by name
        GraphExecutorUtil.RunGraph("IntroAnimation");
    }
    
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            // Trigger animation on key press
            GraphExecutorUtil.RunGraph("JumpAnimation");
        }
    }
}
```

## 🛠️ Installation

### System Requirements
- Unity: 2021.3 or later
- Platforms: Windows, macOS, Linux
- Target Platforms: All Unity-supported platforms
- Performance: Optimized for mobile and desktop

### Quick Installation
1. Download from Unity Asset Store
2. Import into your Unity project
3. Create a GraphFlow Asset
4. Add GraphExecutor component
5. Start creating amazing animations!

### Getting Help
- **Documentation**: Complete guides and tutorials
- **API Reference**: Detailed method documentation
- **Examples**: Real-world implementation examples
- **Community**: Join our Discord for support

---

<div className="cta-section">
  <h2>Ready to Get Started?</h2>
  <p>Join thousands of developers creating amazing animations with Animatix Pro.</p>
  <a className="button button--primary button--lg" href="/docs/getting-started/installation">
    Install Animatix Pro
  </a>
</div>
