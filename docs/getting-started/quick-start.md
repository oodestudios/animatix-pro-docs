---
sidebar_position: 2
title: Quick Start
description: Create your first animation in 5 minutes
---

# Quick Start: Your First Animation

:::note Time to Complete
**Estimated:** 5 minutes  
**Difficulty:** Beginner  
**Result:** A fully functional button fade-in animation
:::

Let's create a simple button fade-in animation in under 5 minutes.

## Step 1: Create the Graph

<details>
<summary><strong>Visual Guide</strong> - Click to see detailed steps</summary>

1. Right-click in the Project Window → Create → Animatix Pro → GraphFlow Asset
2. Name it `ButtonFadeIn`
3. Double-click to open the GraphFlow Editor

</details>

![Creating a New GraphFlow Asset](/img/screenshots/02-creating-graphflow-asset.png)

## Step 2: Add Nodes

1. Right-click in the graph → Add Node → Trigger → On Start
2. Right-click again → Add Node → Animation → Fade
3. Right-click again → Add Node → Action → Play Animation
4. Drag from the On Start node's output port to the Fade node's input port.

![Basic Node Connection in GraphFlow Editor](/img/screenshots/03-basic-node-connection.png)

## Step 3: Configure the Animation

1. Select the Fade node.
2. In the Inspector, set:
   - **Duration:** 1.0 seconds
   - **Fade Start:** 0 (invisible)
   - **Fade End:** 1 (fully visible)
   - **Easing:** Ease In Out

![Fade Node Settings in Inspector](/img/screenshots/04-fade-node-settings.png)

## Step 4: Attach GraphExecutor to Target

1. Select your UI button in the scene.
2. Add the GraphExecutor component to the button.
3. Assign the `ButtonFadeIn` asset to the Graph Asset field.

![GraphExecutor Component with Assigned GraphFlow Asset](/img/screenshots/05-graph-executor-component.png)

## Step 5: Test the Animation

1. Press Play in Unity.
2. Watch your button fade in automatically!

:::success Congratulations! 🎉
You've created your first Animatix Pro animation! The button now fades in smoothly when the scene starts.

**What you've learned:**
- How to create a GraphFlow Asset
- How to add and connect nodes
- How to configure animation parameters
- How to assign the GraphExecutor component

**Next Steps:** Try adding more nodes like Slide, Scale, or Play Sound to create more complex animations!
:::
