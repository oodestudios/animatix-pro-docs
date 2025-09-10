# Installation

This guide will walk you through installing Animatix Pro in your Unity project.

## Prerequisites

Before installing Animatix Pro, ensure you have:

- **Unity 2021.3 LTS** or later
- **Windows 10/11** or **macOS 10.15+**
- **4GB RAM** minimum (8GB recommended)
- **DirectX 11** or **Metal** compatible graphics

## Installation Methods

### Method 1: Unity Asset Store (Recommended)

1. **Open Unity Hub**
2. **Navigate to the Asset Store**
3. **Search for "Animatix Pro"**
4. **Click "Add to My Assets"**
5. **Open your Unity project**
6. **Go to Window > Package Manager**
7. **Select "My Assets"**
8. **Find Animatix Pro and click "Import"**

### Method 2: Direct Download

1. **Download the package** from our website
2. **Open your Unity project**
3. **Go to Assets > Import Package > Custom Package**
4. **Select the downloaded .unitypackage file**
5. **Click "Import"**

### Method 3: Git Integration

1. **Open your Unity project**
2. **Go to Window > Package Manager**
3. **Click the "+" button**
4. **Select "Add package from git URL"**
5. **Enter the repository URL**
6. **Click "Add"**

## Post-Installation Setup

### 1. Verify Installation

After importing, you should see:
- **Animatix Pro** menu in the Unity toolbar
- **GraphFlow** window accessible via Window > Animatix Pro > GraphFlow Editor
- **Animatix Pro** folder in your Project window

### 2. Create Your First Graph

1. **Right-click in Project window**
2. **Select Create > Animatix Pro > GraphFlow Asset**
3. **Name your graph** (e.g., "MyFirstAnimation")
4. **Double-click to open** in the GraphFlow Editor

### 3. Add GraphExecutor Component

1. **Select a GameObject** in your scene
2. **Add Component > Animatix Pro > GraphExecutor**
3. **Assign your GraphFlow Asset** to the Graph Flow Asset field

## Configuration

### Project Settings

1. **Go to Edit > Project Settings**
2. **Select Animatix Pro** from the left panel
3. **Configure the following settings:**
   - **Default Animation Duration**: 1.0 seconds
   - **Enable Debug Mode**: Check for development
   - **Performance Mode**: Auto (recommended)

### Quality Settings

For optimal performance:

1. **Go to Edit > Project Settings > Quality**
2. **Select your target platform**
3. **Ensure the following settings:**
   - **VSync Count**: Don't Sync (for testing)
   - **Anti Aliasing**: 2x Multi Sampling
   - **Anisotropic Textures**: Per Texture

## Troubleshooting

### Common Issues

#### "GraphFlow Editor not found"
- **Solution**: Ensure the package was imported correctly
- **Check**: Window > Animatix Pro > GraphFlow Editor should be available

#### "GraphExecutor component missing"
- **Solution**: Reimport the Animatix Pro package
- **Check**: The component should be available in Add Component menu

#### "Performance issues"
- **Solution**: Check your Quality Settings
- **Tip**: Use Performance Mode in Project Settings

### Getting Help

If you encounter issues:

1. **Check the [Troubleshooting Guide](troubleshooting)**
2. **Visit our [Community Forum](community/forum)**
3. **Join our [Discord Server](community/discord)**
4. **Submit an issue on [GitHub](community/github-issues)**

## Next Steps

Now that Animatix Pro is installed:

1. **[Quick Start Guide](quick-start)** - Create your first animation
2. **[Project Setup](project-setup)** - Configure your project
3. **[Basic Concepts](basic-concepts)** - Learn the fundamentals

---

**Installation complete!** Ready to create your first animation? Check out the [Quick Start Guide](quick-start)!