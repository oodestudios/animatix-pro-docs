# Project Setup

Configure your Unity project for optimal Animatix Pro performance and workflow. This guide covers project settings, folder structure, and best practices.

## 📁 Recommended Folder Structure

Organize your project with this structure for better management:

```
Assets/
├── Animatix Pro/                 # Animatix Pro package files
├── Animations/                   # Your animation assets
│   ├── UI/                      # UI animations
│   ├── Camera/                  # Camera animations
│   ├── Objects/                 # Object animations
│   └── Effects/                 # Particle and effect animations
├── Scripts/                     # Your custom scripts
│   ├── Animation/               # Animation-related scripts
│   ├── Triggers/                # Custom trigger scripts
│   └── Actions/                 # Custom action scripts
├── Prefabs/                     # Reusable prefabs
│   ├── UI/                      # UI prefabs
│   └── Animated/                # Animated prefabs
├── Scenes/                      # Your game scenes
├── Materials/                   # Materials and shaders
├── Textures/                    # Textures and sprites
└── Audio/                       # Sound effects and music
```

## ⚙️ Project Settings Configuration

### 1. Quality Settings

Configure quality settings for your target platform:

#### For Mobile (Android/iOS)
```
Quality Level: Simple
- VSync Count: Don't Sync
- Anti Aliasing: Disabled
- Anisotropic Textures: Disabled
- Soft Particles: Disabled
- Realtime Reflection Probes: Disabled
```

#### For Desktop (PC/Mac)
```
Quality Level: Good
- VSync Count: Don't Sync
- Anti Aliasing: 2x Multi Sampling
- Anisotropic Textures: Per Texture
- Soft Particles: Enabled
- Realtime Reflection Probes: Enabled
```

### 2. Animatix Pro Settings

Access via **Edit > Project Settings > Animatix Pro**:

#### Performance Settings
- **Default Animation Duration**: 1.0 seconds
- **Max Concurrent Animations**: 50 (adjust based on target device)
- **Animation Update Rate**: 60 FPS
- **Memory Pool Size**: 100 MB

#### Debug Settings
- **Enable Debug Mode**: ✓ (for development)
- **Show Animation Gizmos**: ✓ (for debugging)
- **Log Animation Events**: ✓ (for troubleshooting)
- **Performance Profiler**: ✓ (for optimization)

#### Quality Settings
- **Animation Quality**: High (for desktop) / Medium (for mobile)
- **Easing Precision**: High
- **Interpolation Method**: Smooth
- **Frame Rate Target**: 60 FPS

### 3. Input Settings

Configure input for trigger systems:

1. **Go to Edit > Project Settings > Input Manager**
2. **Add these custom inputs:**
   - **Touch**: Primary Touch
   - **Swipe**: Mouse X/Y
   - **Pinch**: Mouse ScrollWheel
   - **Shake**: Gyroscope (mobile)

## 🎨 UI Setup Best Practices

### Canvas Configuration

#### For UI Animations
```
Canvas Settings:
- Render Mode: Screen Space - Overlay
- Pixel Perfect: ✓
- Sort Order: 0
- Target Display: 0
- Additional Shader Channels: None
```

#### For World Space UI
```
Canvas Settings:
- Render Mode: World Space
- Event Camera: Main Camera
- Pixel Perfect: ✗
- Sort Order: 0
- Additional Shader Channels: TexCoord1, Normal
```

### UI Hierarchy Structure

Organize your UI elements for better animation management:

```
Canvas
├── Background
├── MainMenu
│   ├── Title
│   ├── Buttons
│   │   ├── PlayButton
│   │   ├── SettingsButton
│   │   └── QuitButton
│   └── Logo
├── GameUI
│   ├── HUD
│   ├── Minimap
│   └── Inventory
└── Effects
    ├── Particles
    └── Overlays
```

## 🎬 Animation Asset Management

### Naming Conventions

Use consistent naming for better organization:

```
Animation Files:
- UI_ButtonHover.asset
- UI_MenuSlideIn.asset
- Camera_IntroSequence.asset
- Object_CoinCollect.asset
- Effect_Explosion.asset

Scripts:
- ButtonHoverTrigger.cs
- MenuSlideAction.cs
- CameraIntroSequence.cs
```

### Asset Organization

#### By Type
```
Animations/
├── UI/
│   ├── Buttons/
│   ├── Menus/
│   └── HUD/
├── Camera/
│   ├── Intro/
│   ├── Transitions/
│   └── Cinematic/
└── Objects/
    ├── Characters/
    ├── Environment/
    └── Effects/
```

#### By Scene
```
Animations/
├── MainMenu/
├── Gameplay/
├── PauseMenu/
└── Credits/
```

## 🔧 Performance Optimization

### 1. Animation Pooling

Set up object pooling for frequently used animations:

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class AnimationPool : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset[] animationAssets;
    [SerializeField] private int poolSize = 10;
    
    private Queue<GraphExecutor> animationPool = new Queue<GraphExecutor>();
    
    void Start()
    {
        // Pre-instantiate animation objects
        for (int i = 0; i < poolSize; i++)
        {
            GameObject animObj = new GameObject($"Animation_{i}");
            GraphExecutor executor = animObj.AddComponent<GraphExecutor>();
            animationPool.Enqueue(executor);
        }
    }
    
    public GraphExecutor GetAnimation()
    {
        if (animationPool.Count > 0)
        {
            return animationPool.Dequeue();
        }
        return null;
    }
    
    public void ReturnAnimation(GraphExecutor executor)
    {
        animationPool.Enqueue(executor);
    }
}
```

### 2. Memory Management

Configure memory settings for your target platform:

#### Mobile Settings
```csharp
// In your initialization script
void Start()
{
    // Limit animation memory usage
    Application.targetFrameRate = 60;
    QualitySettings.vSyncCount = 0;
    
    // Configure Animatix Pro for mobile
    AnimatixProSettings.SetMaxConcurrentAnimations(25);
    AnimatixProSettings.SetMemoryPoolSize(50); // MB
}
```

#### Desktop Settings
```csharp
// In your initialization script
void Start()
{
    // Allow higher animation quality
    Application.targetFrameRate = 120;
    QualitySettings.vSyncCount = 1;
    
    // Configure Animatix Pro for desktop
    AnimatixProSettings.SetMaxConcurrentAnimations(100);
    AnimatixProSettings.SetMemoryPoolSize(200); // MB
}
```

## 🎯 Platform-Specific Setup

### Mobile (Android/iOS)

#### Android Configuration
```
Player Settings:
- Minimum API Level: 21 (Android 5.0)
- Target API Level: 33 (Android 13)
- Scripting Backend: IL2CPP
- Target Architectures: ARM64
- Graphics APIs: Vulkan, OpenGL ES 3.0
```

#### iOS Configuration
```
Player Settings:
- Target iOS Version: 12.0
- Scripting Backend: IL2CPP
- Target Device: iPhone & iPad
- Graphics APIs: Metal
- Architecture: ARM64
```

### Desktop (PC/Mac/Linux)

#### PC Configuration
```
Player Settings:
- Default Cursor: Hardware
- Default Screen Width: 1920
- Default Screen Height: 1080
- Fullscreen Mode: Fullscreen Window
- Graphics APIs: Direct3D11, Direct3D12
```

#### Mac Configuration
```
Player Settings:
- Default Cursor: Hardware
- Default Screen Width: 1920
- Default Screen Height: 1080
- Fullscreen Mode: Fullscreen Window
- Graphics APIs: Metal, OpenGL Core
```

## 🔍 Testing and Validation

### 1. Performance Testing

Test your animations on target devices:

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class PerformanceTester : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset testAnimation;
    [SerializeField] private int testCount = 100;
    
    void Start()
    {
        StartCoroutine(PerformanceTest());
    }
    
    IEnumerator PerformanceTest()
    {
        float startTime = Time.realtimeSinceStartup;
        
        for (int i = 0; i < testCount; i++)
        {
            GraphExecutorUtil.RunGraph(testAnimation);
            yield return new WaitForSeconds(0.1f);
        }
        
        float endTime = Time.realtimeSinceStartup;
        float duration = endTime - startTime;
        
        Debug.Log($"Performance Test: {testCount} animations in {duration:F2} seconds");
        Debug.Log($"Average FPS: {testCount / duration:F2}");
    }
}
```

### 2. Memory Profiling

Monitor memory usage during development:

1. **Open Window > Analysis > Memory Profiler**
2. **Take a snapshot** before running animations
3. **Run your animations** for 30 seconds
4. **Take another snapshot** after animations
5. **Compare snapshots** to identify memory leaks

## 🚀 Deployment Checklist

Before building your project:

### ✅ Pre-Build Checklist
- [ ] All animations tested on target platform
- [ ] Performance optimized for target device
- [ ] Memory usage within acceptable limits
- [ ] All GraphFlow assets properly configured
- [ ] Custom scripts compiled without errors
- [ ] UI elements properly scaled for target resolution
- [ ] Audio files compressed appropriately
- [ ] Build settings configured correctly

### ✅ Post-Build Testing
- [ ] All animations play correctly
- [ ] Performance meets target framerate
- [ ] No memory leaks detected
- [ ] UI responsive on all screen sizes
- [ ] Audio synchronized with animations
- [ ] No console errors or warnings

## 🎉 What's Next?

Your project is now properly configured! Here's what to explore:

### **📚 Learn More**
- **[GraphFlow Editor](visual-editor/graphflow-overview)** - Master the interface
- **[Animation Types](animation-types/ui-animations)** - Explore different animations
- **[Advanced Features](advanced-features/triggers-conditions)** - Complex workflows

### **🎯 Start Creating**
- **[UI/UX Animations](examples/ui-ux-animations)** - Complete UI examples
- **[Camera Animations](examples/cinematic-camera)** - Cinematic sequences
- **[Custom Actions](developer-guide/custom-actions)** - Create your own functionality

---

<div align="center">

**🎊 Project setup complete!** You're ready to create amazing animations!

**Let's start building!** Check out the [GraphFlow Editor](visual-editor/graphflow-overview) guide!

</div>
