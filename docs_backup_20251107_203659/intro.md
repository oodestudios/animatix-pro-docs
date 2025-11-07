# Welcome to Animatix Pro

<div align="center">

# 🎨 Animatix Pro
## Professional Animation System for Unity

[<!-- ![\1](\2) -->](https://oodestudios.github.io/animatix-pro-docs/)
[<!-- ![\1](\2) -->](https://unity.com/)
[<!-- ![\1](\2) -->](https://oodestudios.github.io/animatix-pro-docs/)

</div>

---

## What is Animatix Pro?

Animatix Pro is a powerful visual graph-based animation system for Unity that revolutionizes how you create animations. Whether you're a game developer, UI designer, or technical artist, Animatix Pro provides the tools you need to create stunning animations without writing a single line of code.

### 🎯 Perfect for Every Role

**For Artists:**
- Visual workflow with no coding required
- Intuitive node-based interface
- Real-time preview and iteration
- Professional animation tools

**For Programmers:**
- Full API access and programmatic control
- Custom triggers, conditions, and actions
- Runtime animation control
- Seamless integration with existing code

**For Teams:**
- Collaborative workflow with version control
- Consistent animation standards
- Easy handoff between artists and programmers
- Production-ready pipeline

---

## ✨ Key Features

### 🎨 Visual Graph Editor
Create complex animations using our intuitive node-based editor. Drag, drop, and connect nodes to build sophisticated animation sequences without writing code.

### ⚡ High Performance
Optimized for mobile and desktop with efficient animation execution. Built with performance in mind for smooth 60fps animations on all platforms.

### 🔧 Programmatic Control
Full API access for advanced users who need script control. Integrate seamlessly with your existing codebase and create custom functionality.

### 🎯 Production Ready
Used by professional game developers worldwide. Battle-tested in real projects and constantly updated with new features and improvements.

---

## What You Can Create

### 🖥️ UI/UX Animations
- Button interactions and hover effects
- Menu transitions and panel animations
- Loading sequences and progress indicators
- Responsive UI elements

### 🎬 Camera Animations
- Cinematic camera movements
- Smooth transitions between scenes
- Dynamic camera following
- Cutscene sequences

### 🎮 Object Animations
- Character movements and gestures
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

---

## 🚀 Quick Start

Create stunning UI and camera animations with ease using our powerful visual graph-based system. No coding required, but full programmatic control when you need it.

### 📚 Documentation

- **[Getting Started](getting-started/overview)** - Installation and setup guide
- **[Quick Start](getting-started/quick-start)** - Create your first animation in 5 minutes
- **[API Reference](api/graph-executor-util)** - Complete API documentation
- **[Examples](examples/ui-ux-animations)** - Real-world code examples and patterns

### 🎮 Usage Example

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

---

## 🛠️ Installation

### System Requirements
- **Unity**: 2021.3 or later
- **Platforms**: Windows, macOS, Linux
- **Target Platforms**: All Unity-supported platforms
- **Performance**: Optimized for mobile and desktop

### Quick Installation
1. **Download** from Unity Asset Store
2. **Import** into your Unity project
3. **Create** a GraphFlow Asset
4. **Add** GraphExecutor component
5. **Start** creating amazing animations!

### Getting Help
- **Documentation**: Complete guides and tutorials
- **API Reference**: Detailed method documentation  
- **Examples**: Real-world implementation examples
- **Community**: Join our Discord for support

---

<div align="center">

**Ready to create amazing animations?** 🚀

[Get Started Now](getting-started/overview) | [View Examples](examples/ui-ux-animations) | [API Reference](api/graph-executor-util)

---

*Built with ❤️ by OODE Studios*

</div>
