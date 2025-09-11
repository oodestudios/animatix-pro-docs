# Quick Start

Create your first animation in just 5 minutes! This guide will walk you through creating a simple UI button animation using Animatix Pro's visual graph editor.

## 🎯 What We'll Create

We'll create an interactive button animation that:
- **Scales up** when hovered (1.0 → 1.2)
- **Scales down** when clicked (1.2 → 0.9)
- **Returns to normal** when released (0.9 → 1.0)
- **Includes smooth easing** for professional feel

## 📋 Prerequisites

Before we start, make sure you have:
- ✅ **Unity 2021.3+** installed
- ✅ **Animatix Pro** imported in your project
- ✅ **A UI Button** in your scene (we'll create one if needed)
- ✅ **Basic Unity knowledge** (creating GameObjects, using Inspector)

## 🚀 Let's Get Started!

### Step 0: Create a UI Button (if needed)

If you don't have a UI button in your scene yet:

1. **Right-click** in the Hierarchy window
2. **Select UI > Button**
3. **Position it** in the center of your Canvas
4. **Rename it** to "MyButton" for clarity

> **💡 Tip:** Make sure you have a Canvas in your scene. If not, right-click in Hierarchy → UI → Canvas.

## Step 1: Create a GraphFlow Asset

1. **Right-click** in the Project window
2. **Select Create > Animatix Pro > GraphFlow Asset**
3. **Name it** "ButtonAnimation"
4. **Double-click** to open the GraphFlow Editor

## Step 2: Add Animation Nodes

### Add a Scale Animation Node

1. **Right-click** in the graph area
2. **Select Add Node > Animation > Scale Animation**
3. **Position it** in the center of the graph

### Add a Trigger Node

1. **Right-click** in the graph area
2. **Select Add Node > Trigger > On Button Click**
3. **Position it** to the left of the Scale Animation node

## Step 3: Connect the Nodes

1. **Click and drag** from the Trigger node's output
2. **Connect it** to the Scale Animation node's input
3. **You should see** a connection line between them

## Step 4: Configure the Animation

### Set Up the Scale Animation

1. **Select the Scale Animation node**
2. **In the Inspector panel:**
   - **Target Object**: Drag your button GameObject here
   - **Start Scale**: (1, 1, 1)
   - **End Scale**: (1.2, 1.2, 1.2)
   - **Duration**: 0.3 seconds
   - **Easing**: Ease Out Back

### Set Up the Trigger

1. **Select the On Button Click node**
2. **In the Inspector panel:**
   - **Target Button**: Drag your button GameObject here
   - **Trigger Type**: On Click

## Step 5: Test the Animation

### Preview in Editor

1. **Click the Play button** in the GraphFlow Editor
2. **Click your button** in the Scene view
3. **Watch the animation** play in real-time

### Test in Play Mode

1. **Click Play** in Unity
2. **Click the button** in the Game view
3. **Verify the animation** works correctly

## Step 6: Add More Complexity

### Add a Return Animation

1. **Add another Scale Animation node**
2. **Connect it** to the first Scale Animation node
3. **Configure it:**
   - **Start Scale**: (1.2, 1.2, 1.2)
   - **End Scale**: (1, 1, 1)
   - **Duration**: 0.2 seconds
   - **Easing**: Ease In Back

### Add a Delay

1. **Add a Wait node** between the animations
2. **Set Duration**: 0.1 seconds
3. **This creates** a pause between scale up and scale down

## Step 7: Save and Use

### Save the Graph

1. **Press Ctrl+S** (or Cmd+S on Mac)
2. **The graph is automatically saved**

### Use in Your Scene

1. **Select a GameObject** in your scene
2. **Add Component > Animatix Pro > GraphExecutor**
3. **Assign your GraphFlow Asset** to the Graph Flow Asset field
4. **The animation will play** when the trigger is activated

## Code Integration

### Trigger from Script

You can also trigger animations from code:

```csharp
using AnimatixPro.GraphFlow;

public class ButtonController : MonoBehaviour
{
    public GraphFlowAsset buttonAnimation;
    
    void Start()
    {
        // Trigger the animation
        GraphExecutorUtil.RunGraph(buttonAnimation);
    }
}
```

### Listen for Events

```csharp
using AnimatixPro.GraphFlow;

public class AnimationListener : MonoBehaviour
{
    void OnEnable()
    {
        GraphExecutor.OnAnimationComplete += OnAnimationComplete;
    }
    
    void OnDisable()
    {
        GraphExecutor.OnAnimationComplete -= OnAnimationComplete;
    }
    
    void OnAnimationComplete(string animationName)
    {
        Debug.Log($"Animation {animationName} completed!");
    }
}
```

## 🔧 Troubleshooting

### Common Issues

**Animation doesn't play:**
- Check that the GraphExecutor component is attached
- Verify the GraphFlow Asset is assigned
- Ensure the button GameObject is set in the trigger node

**Button doesn't respond:**
- Make sure the button has a Button component
- Check that the button is interactive (not disabled)
- Verify the trigger node is connected to the animation node

**Animation looks choppy:**
- Try different easing curves
- Adjust the duration values
- Check your target framerate

### Getting Help

If you run into issues:
- **Check the Console** for error messages
- **Review the Inspector** settings for each node
- **Test in Play Mode** to see real-time behavior
- **Join our Discord** for community support

## 🎉 What's Next?

Congratulations! You've created your first animation. Here's what to explore next:

### **📚 Learn More**
- **[Getting Started Overview](getting-started/overview)** - Complete setup guide
- **[GraphFlow Editor](visual-editor/graphflow-overview)** - Master the interface
- **[Animation Types](animation-types/ui-animations)** - Explore different animations

### **⚙️ Advanced Topics**
- **[Custom Actions](programming/custom-actions)** - Create your own functionality
- **[Performance Optimization](advanced-features/performance-optimization)** - Optimize your animations
- **[API Reference](api/graph-executor-util)** - Full technical documentation

### **🎯 Examples**
- **[UI/UX Animations](examples/ui-ux-animations)** - Complete UI examples
- **[Camera Animations](examples/gameplay-sequences)** - Cinematic sequences
- **[Real-world Projects](examples/real-world-projects)** - Professional examples

---

<div align="center">

**🎊 Great job!** You've successfully created your first Animatix Pro animation!

**Ready to learn more?** Check out the [Getting Started Overview](getting-started/overview) guide!

</div>