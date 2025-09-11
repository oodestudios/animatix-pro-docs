# Your First Animation

Learn how to create your first animation using Animatix Pro's visual graph editor. This guide will walk you through creating a simple but impressive UI animation.

## 🎯 What We'll Create

We'll create a **card flip animation** that demonstrates:
- **Scale animation** for the flip effect
- **Rotation animation** for the 3D flip
- **Color transition** for visual appeal
- **Timing coordination** between multiple animations

## 📋 Prerequisites

Before starting, make sure you have:
- ✅ **Animatix Pro installed** (see [Installation Guide](installation))
- ✅ **Unity 2021.3+** running
- ✅ **A UI Canvas** in your scene
- ✅ **Basic Unity knowledge** (creating GameObjects, using Inspector)

## 🚀 Step-by-Step Tutorial

### Step 1: Create the UI Card

1. **Right-click** in the Hierarchy window
2. **Select UI > Image** to create a card background
3. **Rename it** to "Card"
4. **Set the size** to 200x300 pixels
5. **Add a child Image** for the card content
6. **Rename the child** to "CardContent"

### Step 2: Create the GraphFlow Asset

1. **Right-click** in the Project window
2. **Select Create > Animatix Pro > GraphFlow Asset**
3. **Name it** "CardFlipAnimation"
4. **Double-click** to open the GraphFlow Editor

### Step 3: Add Animation Nodes

#### Add Scale Animation Node
1. **Right-click** in the graph area
2. **Select Add Node > Animation > Scale Animation**
3. **Position it** in the center
4. **Configure:**
   - **Target Object**: Drag the Card GameObject
   - **Start Scale**: (1, 1, 1)
   - **End Scale**: (1.2, 1.2, 1.2)
   - **Duration**: 0.5 seconds
   - **Easing**: Ease Out Back

#### Add Rotation Animation Node
1. **Right-click** in the graph area
2. **Select Add Node > Animation > Rotation Animation**
3. **Position it** below the Scale node
4. **Configure:**
   - **Target Object**: Drag the Card GameObject
   - **Start Rotation**: (0, 0, 0)
   - **End Rotation**: (0, 180, 0)
   - **Duration**: 0.8 seconds
   - **Easing**: Ease In Out

#### Add Color Animation Node
1. **Right-click** in the graph area
2. **Select Add Node > Animation > Color Animation**
3. **Position it** to the right of the Scale node
4. **Configure:**
   - **Target Object**: Drag the CardContent GameObject
   - **Start Color**: White (1, 1, 1, 1)
   - **End Color**: Blue (0, 0.5, 1, 1)
   - **Duration**: 0.6 seconds
   - **Easing**: Ease In Out

### Step 4: Add Trigger and Control Nodes

#### Add Button Click Trigger
1. **Right-click** in the graph area
2. **Select Add Node > Trigger > On Button Click**
3. **Position it** to the left of the Scale node
4. **Configure:**
   - **Target Button**: Drag the Card GameObject
   - **Trigger Type**: On Click

#### Add Delay Node
1. **Right-click** in the graph area
2. **Select Add Node > Control > Wait**
3. **Position it** between Scale and Rotation nodes
4. **Configure:**
   - **Duration**: 0.2 seconds

### Step 5: Connect the Nodes

Create the following connections:
1. **Button Click** → **Scale Animation**
2. **Scale Animation** → **Wait**
3. **Wait** → **Rotation Animation**
4. **Button Click** → **Color Animation** (parallel)

### Step 6: Configure the Card

#### Add Button Component
1. **Select the Card GameObject**
2. **Add Component > Button**
3. **Configure the Button:**
   - **Interactable**: ✓
   - **Transition**: None (we'll handle with animation)

#### Add GraphExecutor Component
1. **Select the Card GameObject**
2. **Add Component > Animatix Pro > GraphExecutor**
3. **Assign the CardFlipAnimation** to the Graph Flow Asset field

### Step 7: Test the Animation

#### Preview in Editor
1. **Click the Play button** in the GraphFlow Editor
2. **Click the card** in the Scene view
3. **Watch the animation** play in real-time

#### Test in Play Mode
1. **Click Play** in Unity
2. **Click the card** in the Game view
3. **Verify all animations** work together smoothly

## 🎨 Advanced Enhancements

### Add Reverse Animation

Create a second set of animations that reverse the flip:

1. **Add another Scale Animation** (1.2 → 1.0)
2. **Add another Rotation Animation** (180° → 0°)
3. **Add another Color Animation** (Blue → White)
4. **Connect them** after the first set completes

### Add Sound Effects

1. **Add an Audio Source** to the Card
2. **Add an Audio Play node** to the graph
3. **Connect it** to the Button Click trigger
4. **Assign a flip sound** to the Audio Source

### Add Particle Effects

1. **Add a Particle System** as a child of the Card
2. **Add a Particle Play node** to the graph
3. **Connect it** to trigger when the flip completes
4. **Configure the particles** for a magical effect

## 🔧 Troubleshooting

### Common Issues

**Animation doesn't play:**
- Check that GraphExecutor component is attached
- Verify the GraphFlow Asset is assigned
- Ensure the Button component is interactive

**Animations are out of sync:**
- Adjust the Wait node duration
- Check the timing of each animation node
- Use the same easing curves for consistency

**Card doesn't flip properly:**
- Verify the rotation axis (Y-axis for horizontal flip)
- Check that the pivot point is centered
- Ensure the card has a RectTransform component

### Performance Tips

- **Use object pooling** for frequently animated objects
- **Limit simultaneous animations** to avoid frame drops
- **Test on target devices** to ensure smooth performance
- **Use appropriate easing curves** for natural motion

## 🎉 What's Next?

Congratulations! You've created your first complex animation. Here's what to explore:

### **📚 Learn More**
- **[Project Setup](project-setup)** - Configure your project properly
- **[GraphFlow Editor](visual-editor/graphflow-overview)** - Master the interface
- **[Animation Types](animation-types/ui-animations)** - Explore different animations

### **🎯 Try These Examples**
- **[UI/UX Animations](examples/ui-ux-animations)** - Complete UI examples
- **[Camera Animations](examples/cinematic-camera)** - Cinematic sequences
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

### **⚙️ Advanced Topics**
- **[Custom Actions](developer-guide/custom-actions)** - Create your own functionality
- **[Performance Optimization](advanced-features/performance-optimization)** - Optimize your animations
- **[API Reference](api/graph-executor-util)** - Full technical documentation

---

<div align="center">

**🎊 Excellent work!** You've mastered the basics of Animatix Pro!

**Ready for more?** Check out the [Project Setup](project-setup) guide!

</div>
