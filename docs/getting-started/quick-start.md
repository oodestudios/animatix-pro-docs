# Quick Start

Create your first animation in 5 minutes! This guide will walk you through creating a simple UI button animation.

## Step 1: Create a GraphFlow Asset

1. Right-click in the Project window
2. Navigate to `Create > Animatix Pro > GraphFlow Asset`
3. Name it "ButtonAnimation"
4. Double-click to open the GraphFlow Editor

## Step 2: Add a Trigger Node

1. In the GraphFlow Editor, right-click in the empty space
2. Select `Add Node > Trigger > On Button Click`
3. This will create a trigger that fires when a button is clicked

## Step 3: Add an Animation Node

1. Right-click again and select `Add Node > Animation > UI Animation`
2. Choose an animation type (e.g., "Scale" or "Fade")
3. Set the duration to 1.0 seconds

## Step 4: Connect the Nodes

1. Drag from the trigger node's output to the animation node's input
2. You should see a connection line between them
3. The trigger will now start the animation when fired

## Step 5: Configure the Animation

1. Select the animation node
2. In the Inspector window, configure:
   - **Target**: Drag your UI button here
   - **Animation Type**: Choose from 119+ options
   - **Duration**: Set how long the animation takes
   - **Easing**: Choose how the animation feels

## Step 6: Set Up the GraphExecutor

1. Create an empty GameObject in your scene
2. Add the `GraphExecutor` component
3. Assign your "ButtonAnimation" GraphFlow Asset
4. Set the Executor Name to "ButtonAnim"

## Step 7: Test Your Animation

1. Press Play in Unity
2. Click your UI button
3. Watch your animation play!

## Code Example

You can also trigger animations from code:

```csharp
using AnimatixPro.GraphFlow;

public class ButtonController : MonoBehaviour
{
    public void OnButtonClick()
    {
        // Trigger the animation by name
        GraphExecutorUtil.RunGraph("ButtonAnim");
    }
}
```

## What You've Learned

✅ **GraphFlow System** - Visual node-based animation creation  
✅ **Triggers** - Events that start animations  
✅ **Animation Nodes** - The actual animations  
✅ **GraphExecutor** - Runs your animations in the scene  
✅ **Programmatic Control** - Trigger animations from code  

## Next Steps

Now that you've created your first animation:

- **[Learn about different node types](/docs/core-concepts/node-types)**
- **[Explore the 119+ animation types](/docs/core-concepts/actions-animations)**
- **[Create more complex animations](/docs/tutorials/basic-ui-animation)**
- **[Learn about the API](/docs/api/graph-executor-util)**

## Common Issues

### **Animation Not Playing**
- Check that the GraphExecutor is in the scene
- Verify the Executor Name matches your code
- Make sure the target object is assigned

### **Button Not Working**
- Ensure the button has a collider
- Check that the trigger is properly connected
- Verify the button is active and enabled

### **Animation Looks Wrong**
- Check the animation settings in the Inspector
- Try different easing types
- Adjust the duration and delay

---

<div className="success-box">
  <h3>🎉 Congratulations!</h3>
  <p>You've created your first Animatix Pro animation! This is just the beginning of what you can create with our powerful system.</p>
</div>
