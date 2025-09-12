# UI/UX Animations

This section provides comprehensive examples of UI and UX animations created with Animatix Pro.

## Button Animations

### Hover Effects

Create engaging button hover animations that provide visual feedback to users.

#### Scale on Hover

```csharp
// Simple scale animation on hover
public class ButtonHover : MonoBehaviour
{
    public GraphFlowAsset hoverAnimation;
    
    public void OnPointerEnter()
    {
        GraphExecutorUtil.RunGraph(hoverAnimation);
    }
}
```

**GraphFlow Setup:**
1. Add **On Hover** trigger node
2. Add **Scale Animation** node
3. Configure: Start Scale (1,1,1) → End Scale (1.1,1.1,1.1)
4. Set duration: 0.2 seconds
5. Use Ease Out Back easing

#### Color Transition

```csharp
// Color change animation
public class ButtonColorHover : MonoBehaviour
{
    public GraphFlowAsset colorAnimation;
    
    public void OnPointerEnter()
    {
        GraphExecutorUtil.RunGraph(colorAnimation);
    }
}
```

**GraphFlow Setup:**
1. Add **On Hover** trigger node
2. Add **Color Animation** node
3. Configure: Start Color (White) → End Color (Blue)
4. Set duration: 0.3 seconds
5. Use Ease In Out easing

### Click Animations

#### Press Effect

```csharp
// Button press animation
public class ButtonPress : MonoBehaviour
{
    public GraphFlowAsset pressAnimation;
    
    public void OnPointerDown()
    {
        GraphExecutorUtil.RunGraph(pressAnimation);
    }
}
```

**GraphFlow Setup:**
1. Add **On Click** trigger node
2. Add **Scale Animation** node
3. Configure: Start Scale (1,1,1) → End Scale (0.95,0.95,0.95)
4. Set duration: 0.1 seconds
5. Use Ease In Out easing

#### Ripple Effect

```csharp
// Ripple effect on click
public class ButtonRipple : MonoBehaviour
{
    public GraphFlowAsset rippleAnimation;
    
    public void OnPointerClick()
    {
        GraphExecutorUtil.RunGraph(rippleAnimation);
    }
}
```

**GraphFlow Setup:**
1. Add **On Click** trigger node
2. Add **Scale Animation** node (for ripple)
3. Add **Fade Animation** node (for opacity)
4. Configure parallel execution
5. Set duration: 0.5 seconds

## Panel Animations

### Slide In/Out

#### From Right

```csharp
// Panel slides in from right
public class PanelSlideIn : MonoBehaviour
{
    public GraphFlowAsset slideInAnimation;
    
    public void ShowPanel()
    {
        GraphExecutorUtil.RunGraph(slideInAnimation);
    }
}
```

**GraphFlow Setup:**
1. Add **On Trigger** node
2. Add **Move Animation** node
3. Configure: Start Position (Screen Right) → End Position (Center)
4. Set duration: 0.4 seconds
5. Use Ease Out Back easing

#### From Bottom

```csharp
// Panel slides in from bottom
public class PanelSlideUp : MonoBehaviour
{
    public GraphFlowAsset slideUpAnimation;
    
    public void ShowPanel()
    {
        GraphExecutorUtil.RunGraph(slideUpAnimation);
    }
}
```

**GraphFlow Setup:**
1. Add **On Trigger** node
2. Add **Move Animation** node
3. Configure: Start Position (Screen Bottom) → End Position (Center)
4. Set duration: 0.3 seconds
5. Use Ease Out Cubic easing

### Fade In/Out

#### Simple Fade

```csharp
// Simple fade in/out
public class PanelFade : MonoBehaviour
{
    public GraphFlowAsset fadeInAnimation;
    public GraphFlowAsset fadeOutAnimation;
    
    public void ShowPanel()
    {
        GraphExecutorUtil.RunGraph(fadeInAnimation);
    }
    
    public void HidePanel()
    {
        GraphExecutorUtil.RunGraph(fadeOutAnimation);
    }
}
```

**GraphFlow Setup:**
1. Add **Fade Animation** node
2. Configure: Start Alpha (0) → End Alpha (1)
3. Set duration: 0.3 seconds
4. Use Ease In Out easing

## Menu Animations

### Staggered Animation

```csharp
// Staggered menu item animation
public class MenuStagger : MonoBehaviour
{
    public GraphFlowAsset[] menuItemAnimations;
    
    public void ShowMenu()
    {
        for (int i = 0; i < menuItemAnimations.Length; i++)
        {
            StartCoroutine(AnimateMenuItem(i));
        }
    }
    
    IEnumerator AnimateMenuItem(int index)
    {
        yield return new WaitForSeconds(index * 0.1f);
        GraphExecutorUtil.RunGraph(menuItemAnimations[index]);
    }
}
```

**GraphFlow Setup:**
1. Add **Move Animation** node
2. Configure: Start Position (Above) → End Position (Final)
3. Set duration: 0.4 seconds
4. Use Ease Out Back easing

### Accordion Menu

```csharp
// Accordion-style menu expansion
public class AccordionMenu : MonoBehaviour
{
    public GraphFlowAsset expandAnimation;
    public GraphFlowAsset collapseAnimation;
    
    private bool isExpanded = false;
    
    public void ToggleMenu()
    {
        if (isExpanded)
        {
            GraphExecutorUtil.RunGraph(collapseAnimation);
        }
        else
        {
            GraphExecutorUtil.RunGraph(expandAnimation);
        }
        isExpanded = !isExpanded;
    }
}
```

**GraphFlow Setup:**
1. Add **Scale Animation** node
2. Configure: Start Scale (1,0,1) → End Scale (1,1,1)
3. Set duration: 0.3 seconds
4. Use Ease Out Back easing

## Loading Animations

### Spinner

```csharp
// Rotating loading spinner
public class LoadingSpinner : MonoBehaviour
{
    public GraphFlowAsset spinnerAnimation;
    
    void Start()
    {
        GraphExecutorUtil.RunGraph(spinnerAnimation);
    }
}
```

**GraphFlow Setup:**
1. Add **Rotate Animation** node
2. Configure: Start Rotation (0) → End Rotation (360)
3. Set duration: 1.0 seconds
4. Use Linear easing
5. Set to loop infinitely

### Progress Bar

```csharp
// Animated progress bar
public class ProgressBar : MonoBehaviour
{
    public GraphFlowAsset progressAnimation;
    
    public void UpdateProgress(float progress)
    {
        // Update progress value
        GraphExecutorUtil.RunGraph(progressAnimation);
    }
}
```

**GraphFlow Setup:**
1. Add **Scale Animation** node
2. Configure: Start Scale (0,1,1) → End Scale (1,1,1)
3. Set duration: 0.5 seconds
4. Use Ease Out Cubic easing

## Advanced Examples

### Complex UI Sequence

```csharp
// Complex UI animation sequence
public class ComplexUISequence : MonoBehaviour
{
    public GraphFlowAsset[] sequenceAnimations;
    
    public void PlaySequence()
    {
        StartCoroutine(PlayAnimationSequence());
    }
    
    IEnumerator PlayAnimationSequence()
    {
        // Fade in background
        GraphExecutorUtil.RunGraph(sequenceAnimations[0]);
        yield return new WaitForSeconds(0.5f);
        
        // Slide in main panel
        GraphExecutorUtil.RunGraph(sequenceAnimations[1]);
        yield return new WaitForSeconds(0.3f);
        
        // Stagger in menu items
        for (int i = 2; i < sequenceAnimations.Length; i++)
        {
            GraphExecutorUtil.RunGraph(sequenceAnimations[i]);
            yield return new WaitForSeconds(0.1f);
        }
    }
}
```

### Interactive Elements

```csharp
// Interactive UI elements with multiple states
public class InteractiveElement : MonoBehaviour
{
    public GraphFlowAsset idleAnimation;
    public GraphFlowAsset hoverAnimation;
    public GraphFlowAsset clickAnimation;
    public GraphFlowAsset disabledAnimation;
    
    private bool isEnabled = true;
    
    public void OnPointerEnter()
    {
        if (isEnabled)
        {
            GraphExecutorUtil.RunGraph(hoverAnimation);
        }
    }
    
    public void OnPointerClick()
    {
        if (isEnabled)
        {
            GraphExecutorUtil.RunGraph(clickAnimation);
        }
    }
    
    public void SetEnabled(bool enabled)
    {
        isEnabled = enabled;
        if (!enabled)
        {
            GraphExecutorUtil.RunGraph(disabledAnimation);
        }
        else
        {
            GraphExecutorUtil.RunGraph(idleAnimation);
        }
    }
}
```

## Best Practices

### Performance
- **Use object pooling** for frequently animated elements
- **Optimize animation curves** for smooth performance
- **Test on target platforms** to ensure compatibility
- **Use appropriate easing functions** for natural feel

### User Experience
- **Keep animations short** (0.2-0.5 seconds)
- **Provide visual feedback** for all interactions
- **Use consistent timing** across your UI
- **Test with different input methods** (mouse, touch, keyboard)

### Code Organization
- **Group related animations** in the same GraphFlow asset
- **Use meaningful names** for your animation assets
- **Implement proper cleanup** in OnDestroy
- **Document complex sequences** with comments

## Related Topics

- **[Animation Types](animation-types/ui-animations)** - Learn about different UI animation types
- **[Performance Optimization](advanced-features/performance-optimization)** - Optimize your animations
- **[Custom Actions](programming/custom-actions)** - Create custom UI actions
- **[API Reference](api/graph-executor-util)** - Complete API documentation

---

**Ready to create your own UI animations?** Check out the [Quick Start Guide](getting-started/quick-start) to get started!
