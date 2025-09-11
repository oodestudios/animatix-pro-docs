# UI/UX Animations

Complete examples and tutorials for creating stunning UI/UX animations with Animatix Pro. This comprehensive guide provides ready-to-use examples for common UI animation patterns.

## 🎨 UI Animation Examples

### Button Animations
Complete button animation examples for different use cases.

#### Hover Button Animation
Create an engaging hover effect for buttons.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class HoverButtonExample : MonoBehaviour
{
    [SerializeField] private Button button;
    [SerializeField] private GraphFlowAsset hoverAnimation;
    [SerializeField] private GraphFlowAsset clickAnimation;
    
    private GraphExecutor graphExecutor;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Set up button events
        button.onClick.AddListener(OnButtonClick);
        
        // Set up hover events
        var eventTrigger = button.gameObject.AddComponent<UnityEngine.EventSystems.EventTrigger>();
        
        var pointerEnter = new UnityEngine.EventSystems.EventTrigger.Entry();
        pointerEnter.eventID = UnityEngine.EventSystems.EventTriggerType.PointerEnter;
        pointerEnter.callback.AddListener((data) => OnPointerEnter());
        eventTrigger.triggers.Add(pointerEnter);
        
        var pointerExit = new UnityEngine.EventSystems.EventTrigger.Entry();
        pointerExit.eventID = UnityEngine.EventSystems.EventTriggerType.PointerExit;
        pointerExit.callback.AddListener((data) => OnPointerExit());
        eventTrigger.triggers.Add(pointerExit);
    }
    
    private void OnPointerEnter()
    {
        if (hoverAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(hoverAnimation);
            graphExecutor.Play();
        }
    }
    
    private void OnPointerExit()
    {
        if (hoverAnimation != null)
        {
            graphExecutor.Stop();
        }
    }
    
    private void OnButtonClick()
    {
        if (clickAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(clickAnimation);
            graphExecutor.Play();
        }
    }
}
```

#### Toggle Button Animation
Create an animated toggle button.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class ToggleButtonExample : MonoBehaviour
{
    [SerializeField] private Toggle toggle;
    [SerializeField] private GraphFlowAsset onAnimation;
    [SerializeField] private GraphFlowAsset offAnimation;
    [SerializeField] private Image toggleBackground;
    [SerializeField] private RectTransform toggleHandle;
    
    private GraphExecutor graphExecutor;
    private bool isAnimating = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        toggle.onValueChanged.AddListener(OnToggleValueChanged);
    }
    
    private void OnToggleValueChanged(bool isOn)
    {
        if (isAnimating) return;
        
        StartCoroutine(AnimateToggle(isOn));
    }
    
    private System.Collections.IEnumerator AnimateToggle(bool isOn)
    {
        isAnimating = true;
        
        GraphFlowAsset animation = isOn ? onAnimation : offAnimation;
        if (animation != null)
        {
            graphExecutor.SetGraphFlowAsset(animation);
            graphExecutor.Play();
            
            // Wait for animation to complete
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        }
        
        isAnimating = false;
    }
}
```

### Menu Animations
Complete menu animation examples.

#### Slide-In Menu
Create a smooth slide-in menu animation.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class SlideInMenuExample : MonoBehaviour
{
    [SerializeField] private RectTransform menuPanel;
    [SerializeField] private Button openButton;
    [SerializeField] private Button closeButton;
    [SerializeField] private GraphFlowAsset slideInAnimation;
    [SerializeField] private GraphFlowAsset slideOutAnimation;
    
    private GraphExecutor graphExecutor;
    private bool isOpen = false;
    private bool isAnimating = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initially hide the menu
        menuPanel.gameObject.SetActive(false);
        
        // Set up button events
        openButton.onClick.AddListener(OpenMenu);
        closeButton.onClick.AddListener(CloseMenu);
    }
    
    public void OpenMenu()
    {
        if (isAnimating) return;
        
        StartCoroutine(AnimateMenu(true));
    }
    
    public void CloseMenu()
    {
        if (isAnimating) return;
        
        StartCoroutine(AnimateMenu(false));
    }
    
    private System.Collections.IEnumerator AnimateMenu(bool open)
    {
        isAnimating = true;
        
        if (open)
        {
            menuPanel.gameObject.SetActive(true);
            graphExecutor.SetGraphFlowAsset(slideInAnimation);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
            isOpen = true;
        }
        else
        {
            graphExecutor.SetGraphFlowAsset(slideOutAnimation);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
            menuPanel.gameObject.SetActive(false);
            isOpen = false;
        }
        
        isAnimating = false;
    }
}
```

#### Dropdown Menu
Create an animated dropdown menu.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;
using System.Collections.Generic;

public class DropdownMenuExample : MonoBehaviour
{
    [SerializeField] private Button dropdownButton;
    [SerializeField] private RectTransform dropdownContent;
    [SerializeField] private GraphFlowAsset expandAnimation;
    [SerializeField] private GraphFlowAsset collapseAnimation;
    [SerializeField] private List<Button> menuItems = new List<Button>();
    
    private GraphExecutor graphExecutor;
    private bool isExpanded = false;
    private bool isAnimating = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initially hide the dropdown content
        dropdownContent.gameObject.SetActive(false);
        
        // Set up button events
        dropdownButton.onClick.AddListener(ToggleDropdown);
        
        // Set up menu item events
        foreach (var item in menuItems)
        {
            item.onClick.AddListener(() => OnMenuItemSelected(item));
        }
    }
    
    private void ToggleDropdown()
    {
        if (isAnimating) return;
        
        StartCoroutine(AnimateDropdown(!isExpanded));
    }
    
    private void OnMenuItemSelected(Button selectedItem)
    {
        if (isAnimating) return;
        
        StartCoroutine(AnimateDropdown(false));
        
        // Handle menu item selection
        Debug.Log($"Selected: {selectedItem.name}");
    }
    
    private System.Collections.IEnumerator AnimateDropdown(bool expand)
    {
        isAnimating = true;
        
        if (expand)
        {
            dropdownContent.gameObject.SetActive(true);
            graphExecutor.SetGraphFlowAsset(expandAnimation);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
            isExpanded = true;
        }
        else
        {
            graphExecutor.SetGraphFlowAsset(collapseAnimation);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
            dropdownContent.gameObject.SetActive(false);
            isExpanded = false;
        }
        
        isAnimating = false;
    }
}
```

### Loading Animations
Complete loading animation examples.

#### Progress Bar Animation
Create an animated progress bar.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class ProgressBarExample : MonoBehaviour
{
    [SerializeField] private Slider progressBar;
    [SerializeField] private Text progressText;
    [SerializeField] private GraphFlowAsset fillAnimation;
    [SerializeField] private GraphFlowAsset completeAnimation;
    
    private GraphExecutor graphExecutor;
    private bool isAnimating = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initialize progress bar
        progressBar.value = 0f;
        UpdateProgressText();
    }
    
    public void StartProgress(float duration)
    {
        if (isAnimating) return;
        
        StartCoroutine(AnimateProgress(duration));
    }
    
    private System.Collections.IEnumerator AnimateProgress(float duration)
    {
        isAnimating = true;
        
        // Start fill animation
        if (fillAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(fillAnimation);
            graphExecutor.Play();
        }
        
        float elapsed = 0f;
        while (elapsed < duration)
        {
            float progress = elapsed / duration;
            progressBar.value = progress;
            UpdateProgressText();
            
            elapsed += Time.deltaTime;
            yield return null;
        }
        
        // Complete the progress bar
        progressBar.value = 1f;
        UpdateProgressText();
        
        // Play completion animation
        if (completeAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(completeAnimation);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        }
        
        isAnimating = false;
    }
    
    private void UpdateProgressText()
    {
        if (progressText != null)
        {
            progressText.text = $"{Mathf.RoundToInt(progressBar.value * 100)}%";
        }
    }
}
```

#### Spinner Animation
Create a rotating spinner animation.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class SpinnerExample : MonoBehaviour
{
    [SerializeField] private RectTransform spinner;
    [SerializeField] private GraphFlowAsset spinAnimation;
    [SerializeField] private float spinSpeed = 360f;
    
    private GraphExecutor graphExecutor;
    private bool isSpinning = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initially hide the spinner
        spinner.gameObject.SetActive(false);
    }
    
    public void StartSpinning()
    {
        if (isSpinning) return;
        
        spinner.gameObject.SetActive(true);
        isSpinning = true;
        
        if (spinAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(spinAnimation);
            graphExecutor.Play();
        }
        else
        {
            // Fallback to simple rotation
            StartCoroutine(SimpleSpin());
        }
    }
    
    public void StopSpinning()
    {
        if (!isSpinning) return;
        
        isSpinning = false;
        
        if (graphExecutor.IsPlaying())
        {
            graphExecutor.Stop();
        }
        
        spinner.gameObject.SetActive(false);
    }
    
    private System.Collections.IEnumerator SimpleSpin()
    {
        while (isSpinning)
        {
            spinner.Rotate(0, 0, -spinSpeed * Time.deltaTime);
            yield return null;
        }
    }
}
```

### Notification Animations
Complete notification animation examples.

#### Toast Notification
Create an animated toast notification.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class ToastNotificationExample : MonoBehaviour
{
    [SerializeField] private RectTransform toastPanel;
    [SerializeField] private Text messageText;
    [SerializeField] private GraphFlowAsset showAnimation;
    [SerializeField] private GraphFlowAsset hideAnimation;
    [SerializeField] private float displayDuration = 3f;
    
    private GraphExecutor graphExecutor;
    private bool isShowing = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initially hide the toast
        toastPanel.gameObject.SetActive(false);
    }
    
    public void ShowToast(string message)
    {
        if (isShowing) return;
        
        StartCoroutine(ShowToastCoroutine(message));
    }
    
    private IEnumerator ShowToastCoroutine(string message)
    {
        isShowing = true;
        
        // Set message and show panel
        messageText.text = message;
        toastPanel.gameObject.SetActive(true);
        
        // Play show animation
        if (showAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(showAnimation);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        }
        
        // Wait for display duration
        yield return new WaitForSeconds(displayDuration);
        
        // Play hide animation
        if (hideAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(hideAnimation);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        }
        
        // Hide the toast
        toastPanel.gameObject.SetActive(false);
        isShowing = false;
    }
}
```

#### Alert Animation
Create an animated alert notification.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class AlertExample : MonoBehaviour
{
    [SerializeField] private RectTransform alertPanel;
    [SerializeField] private Text alertText;
    [SerializeField] private Button closeButton;
    [SerializeField] private GraphFlowAsset alertAnimation;
    [SerializeField] private GraphFlowAsset closeAnimation;
    
    private GraphExecutor graphExecutor;
    private bool isShowing = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initially hide the alert
        alertPanel.gameObject.SetActive(false);
        
        // Set up close button
        closeButton.onClick.AddListener(CloseAlert);
    }
    
    public void ShowAlert(string message)
    {
        if (isShowing) return;
        
        StartCoroutine(ShowAlertCoroutine(message));
    }
    
    private System.Collections.IEnumerator ShowAlertCoroutine(string message)
    {
        isShowing = true;
        
        // Set message and show panel
        alertText.text = message;
        alertPanel.gameObject.SetActive(true);
        
        // Play alert animation
        if (alertAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(alertAnimation);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        }
    }
    
    private void CloseAlert()
    {
        if (!isShowing) return;
        
        StartCoroutine(CloseAlertCoroutine());
    }
    
    private System.Collections.IEnumerator CloseAlertCoroutine()
    {
        // Play close animation
        if (closeAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(closeAnimation);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        }
        
        // Hide the alert
        alertPanel.gameObject.SetActive(false);
        isShowing = false;
    }
}
```

## 🎮 Interactive Examples

### Drag and Drop
Create drag and drop functionality with animations.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class DragDropExample : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    [SerializeField] private RectTransform dragObject;
    [SerializeField] private GraphFlowAsset dragStartAnimation;
    [SerializeField] private GraphFlowAsset dragEndAnimation;
    [SerializeField] private Canvas canvas;
    
    private GraphExecutor graphExecutor;
    private Vector2 originalPosition;
    private bool isDragging = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        originalPosition = dragObject.anchoredPosition;
    }
    
    public void OnBeginDrag(PointerEventData eventData)
    {
        if (isDragging) return;
        
        isDragging = true;
        
        // Play drag start animation
        if (dragStartAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(dragStartAnimation);
            graphExecutor.Play();
        }
    }
    
    public void OnDrag(PointerEventData eventData)
    {
        if (!isDragging) return;
        
        // Update position
        dragObject.anchoredPosition += eventData.delta / canvas.scaleFactor;
    }
    
    public void OnEndDrag(PointerEventData eventData)
    {
        if (!isDragging) return;
        
        isDragging = false;
        
        // Play drag end animation
        if (dragEndAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(dragEndAnimation);
            graphExecutor.Play();
        }
        
        // Check for drop target
        CheckForDropTarget(eventData);
    }
    
    private void CheckForDropTarget(PointerEventData eventData)
    {
        // Check if dropped on a valid target
        var results = new System.Collections.Generic.List<RaycastResult>();
        EventSystem.current.RaycastAll(eventData, results);
        
        foreach (var result in results)
        {
            if (result.gameObject.CompareTag("DropTarget"))
            {
                // Handle successful drop
                HandleSuccessfulDrop(result.gameObject);
                return;
            }
        }
        
        // Return to original position if no valid target
        StartCoroutine(ReturnToOriginalPosition());
    }
    
    private void HandleSuccessfulDrop(GameObject target)
    {
        // Handle successful drop logic
        Debug.Log($"Dropped on {target.name}");
    }
    
    private System.Collections.IEnumerator ReturnToOriginalPosition()
    {
        Vector2 startPosition = dragObject.anchoredPosition;
        float elapsed = 0f;
        float duration = 0.5f;
        
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float progress = elapsed / duration;
            dragObject.anchoredPosition = Vector2.Lerp(startPosition, originalPosition, progress);
            yield return null;
        }
        
        dragObject.anchoredPosition = originalPosition;
    }
}
```

### Swipe Gestures
Create swipe gesture recognition with animations.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class SwipeGestureExample : MonoBehaviour, IBeginDragHandler, IDragHandler, IEndDragHandler
{
    [SerializeField] private RectTransform swipeObject;
    [SerializeField] private GraphFlowAsset swipeLeftAnimation;
    [SerializeField] private GraphFlowAsset swipeRightAnimation;
    [SerializeField] private GraphFlowAsset swipeUpAnimation;
    [SerializeField] private GraphFlowAsset swipeDownAnimation;
    
    private GraphExecutor graphExecutor;
    private Vector2 startPosition;
    private Vector2 endPosition;
    private float minSwipeDistance = 50f;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
    }
    
    public void OnBeginDrag(PointerEventData eventData)
    {
        startPosition = eventData.position;
    }
    
    public void OnDrag(PointerEventData eventData)
    {
        // Update object position during drag
        Vector2 delta = eventData.delta;
        swipeObject.anchoredPosition += delta;
    }
    
    public void OnEndDrag(PointerEventData eventData)
    {
        endPosition = eventData.position;
        Vector2 swipeDirection = endPosition - startPosition;
        
        if (swipeDirection.magnitude >= minSwipeDistance)
        {
            DetectSwipeDirection(swipeDirection);
        }
        else
        {
            // Return to original position
            StartCoroutine(ReturnToOriginalPosition());
        }
    }
    
    private void DetectSwipeDirection(Vector2 direction)
    {
        float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
        
        if (angle > -45f && angle <= 45f)
        {
            // Swipe right
            PlaySwipeAnimation(swipeRightAnimation);
        }
        else if (angle > 45f && angle <= 135f)
        {
            // Swipe up
            PlaySwipeAnimation(swipeUpAnimation);
        }
        else if (angle > 135f || angle <= -135f)
        {
            // Swipe left
            PlaySwipeAnimation(swipeLeftAnimation);
        }
        else if (angle > -135f && angle <= -45f)
        {
            // Swipe down
            PlaySwipeAnimation(swipeDownAnimation);
        }
    }
    
    private void PlaySwipeAnimation(GraphFlowAsset animation)
    {
        if (animation != null)
        {
            graphExecutor.SetGraphFlowAsset(animation);
            graphExecutor.Play();
        }
    }
    
    private System.Collections.IEnumerator ReturnToOriginalPosition()
    {
        Vector2 startPos = swipeObject.anchoredPosition;
        Vector2 targetPos = Vector2.zero;
        float elapsed = 0f;
        float duration = 0.3f;
        
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float progress = elapsed / duration;
            swipeObject.anchoredPosition = Vector2.Lerp(startPos, targetPos, progress);
            yield return null;
        }
        
        swipeObject.anchoredPosition = targetPos;
    }
}
```

## 🎨 Advanced Examples

### Parallax Scrolling
Create a parallax scrolling effect.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class ParallaxScrollingExample : MonoBehaviour
{
    [SerializeField] private RectTransform[] parallaxLayers;
    [SerializeField] private float[] parallaxSpeeds;
    [SerializeField] private float scrollSpeed = 100f;
    
    private GraphExecutor graphExecutor;
    private bool isScrolling = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
    }
    
    public void StartScrolling()
    {
        if (isScrolling) return;
        
        isScrolling = true;
        StartCoroutine(ParallaxScroll());
    }
    
    public void StopScrolling()
    {
        isScrolling = false;
    }
    
    private System.Collections.IEnumerator ParallaxScroll()
    {
        while (isScrolling)
        {
            for (int i = 0; i < parallaxLayers.Length; i++)
            {
                if (parallaxLayers[i] != null)
                {
                    float speed = scrollSpeed * parallaxSpeeds[i];
                    parallaxLayers[i].anchoredPosition += Vector2.left * speed * Time.deltaTime;
                }
            }
            
            yield return null;
        }
    }
}
```

### Morphing UI
Create morphing UI elements.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class MorphingUIExample : MonoBehaviour
{
    [SerializeField] private RectTransform morphObject;
    [SerializeField] private GraphFlowAsset morphAnimation;
    [SerializeField] private Vector2[] targetPositions;
    [SerializeField] private Vector2[] targetSizes;
    
    private GraphExecutor graphExecutor;
    private int currentMorphIndex = 0;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
    }
    
    public void MorphToNext()
    {
        if (morphAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(morphAnimation);
            graphExecutor.Play();
        }
        else
        {
            StartCoroutine(SimpleMorph());
        }
    }
    
    private System.Collections.IEnumerator SimpleMorph()
    {
        Vector2 startPos = morphObject.anchoredPosition;
        Vector2 startSize = morphObject.sizeDelta;
        
        Vector2 targetPos = targetPositions[currentMorphIndex];
        Vector2 targetSize = targetSizes[currentMorphIndex];
        
        float elapsed = 0f;
        float duration = 1f;
        
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float progress = elapsed / duration;
            
            morphObject.anchoredPosition = Vector2.Lerp(startPos, targetPos, progress);
            morphObject.sizeDelta = Vector2.Lerp(startSize, targetSize, progress);
            
            yield return null;
        }
        
        currentMorphIndex = (currentMorphIndex + 1) % targetPositions.Length;
    }
}
```

## 🚀 Performance Tips

### Optimization Best Practices
- **Use object pooling** for frequently animated UI elements
- **Limit simultaneous animations** to prevent frame drops
- **Use efficient easing curves** for smooth performance
- **Profile UI performance** regularly on target devices

### Mobile Considerations
- **Simplify animations** for mobile devices
- **Use lower frame rates** for complex animations
- **Optimize texture sizes** for UI elements
- **Test on actual devices** for accurate performance

## 🎉 What's Next?

Now that you understand UI/UX animations:

### **📚 Learn More**
- **[Gameplay Sequences](gameplay-sequences)** - Game animation examples
- **[Cinematic Camera](cinematic-camera)** - Cinematic animation examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

### **🎯 Try These Examples**
- **[Gameplay Sequences](examples/gameplay-sequences)** - Complete game examples
- **[Cinematic Camera](examples/cinematic-camera)** - Cinematic examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 UI/UX Animation mastery achieved!** You're ready to create stunning interfaces!

**Let's explore gameplay!** Check out the [Gameplay Sequences](gameplay-sequences) guide!

</div>