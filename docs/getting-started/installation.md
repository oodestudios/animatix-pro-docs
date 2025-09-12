# Installation

This guide will help you install Animatix Pro in your Unity project.

## Requirements

- **Unity 2021.3 LTS** or later
- **Universal Render Pipeline (URP)** or **Built-in Render Pipeline**
- **Windows, macOS, or Linux**

## Installation Methods

### Method 1: Unity Asset Store (Recommended)

1. Open the Unity Asset Store
2. Search for "Animatix Pro"
3. Click "Add to My Assets"
4. Import the package to your project

### Method 2: Package Manager (Git)

1. Open Unity Package Manager
2. Click the "+" button
3. Select "Add package from git URL"
4. Enter: `https://github.com/oode-studios/animatix-pro.git`
5. Click "Add"

### Method 3: Manual Installation

1. Download the latest release from [GitHub](https://github.com/oode-studios/animatix-pro/releases)
2. Extract the package
3. Import the `.unitypackage` file into your project

## Post-Installation Setup

### 1. Verify Installation

After importing, you should see:
- `Assets/OODE STUDIOS/Animatix Pro/` folder
- `Animatix Pro` menu in the Unity toolbar

### 2. Create Your First Graph

1. Right-click in the Project window
2. Navigate to `Create > Animatix Pro > GraphFlow Asset`
3. Name it "MyFirstAnimation"
4. Double-click to open the GraphFlow Editor

### 3. Set Up a GraphExecutor

1. Create an empty GameObject in your scene
2. Add the `GraphExecutor` component
3. Assign your GraphFlow Asset to the `Graph Asset` field
4. Set an `Executor Name` (e.g., "MyAnimation")

## Troubleshooting

### Common Issues

#### **Import Errors**
If you see import errors:
1. Make sure you're using Unity 2021.3 LTS or later
2. Check that all required dependencies are installed
3. Try reimporting the package

#### **Missing Dependencies**
Animatix Pro requires:
- Unity UI (uGUI)
- TextMeshPro (for text animations)
- Cinemachine (for camera animations)

These are usually included with Unity, but if you see missing references:
1. Go to `Window > Package Manager`
2. Install missing packages from the Unity Registry

#### **Performance Issues**
If you experience performance issues:
1. Check the `GraphExecutor` settings
2. Reduce the number of simultaneous animations
3. Use the performance profiler to identify bottlenecks

## Next Steps

Now that Animatix Pro is installed, you can:

- **[Create your first animation](/docs/getting-started/quick-start)**
- **[Learn about the GraphFlow system](/docs/core-concepts/graphflow-system)**
- **[Explore the API](/docs/api/graph-executor-util)**

## Support

If you encounter any issues during installation:

- Check our [FAQ](/docs/support/faq)
- Visit our [Discord community](https://discord.gg/animatix-pro)
- Open an issue on [GitHub](https://github.com/oode-studios/animatix-pro/issues)

---

<div className="info-box">
  <h3>💡 Pro Tip</h3>
  <p>Make sure to backup your project before installing any new packages, especially in production projects.</p>
</div>
