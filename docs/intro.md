# Welcome to Animatix Pro

<div align="center">

# 🎨 Animatix Pro
## Professional Animation System for Unity

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://oodestudios.github.io/animatix-pro-docs/)
[![Unity](https://img.shields.io/badge/Unity-2021.3%2B-blue)](https://unity.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)]()

</div>

---

## 🚀 Quick Start

Create stunning UI and camera animations with ease using our powerful visual graph-based system. No coding required, but full programmatic control when you need it.

### ✨ Key Features

- **🎨 Visual Graph Editor** - Create complex animations using our intuitive node-based editor
- **⚡ High Performance** - Optimized for mobile and desktop with efficient animation execution  
- **🔧 Programmatic Control** - Full API access for advanced users who need script control
- **🎯 Production Ready** - Used by professional game developers worldwide

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

### 🛠️ Installation

1. Download from Unity Asset Store
2. Import into your Unity project
3. Create a GraphFlow Asset
4. Add GraphExecutor component
5. Start creating amazing animations!

### 📖 Learn More

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