# VR/AR & Mobile

Complete examples and tutorials for creating VR/AR and mobile animations with Animatix Pro. This comprehensive guide provides ready-to-use examples for immersive and mobile experiences.

## 🥽 VR/AR Animation Examples

### VR Interaction Animations
Complete VR interaction examples for immersive experiences.

#### VR Hand Tracking Animation
Create animations that respond to hand tracking.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.XR;

public class VRHandTrackingExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset handOpenAnimation;
    [SerializeField] private GraphFlowAsset handCloseAnimation;
    [SerializeField] private GraphFlowAsset handPointAnimation;
    [SerializeField] private Transform leftHand;
    [SerializeField] private Transform rightHand;
    [SerializeField] private float gestureThreshold = 0.8f;
    
    private GraphExecutor graphExecutor;
    private bool isLeftHandOpen = false;
    private bool isRightHandOpen = false;
    private bool isLeftHandPointing = false;
    private bool isRightHandPointing = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
    }
    
    private void Update()
    {
        HandleHandTracking();
    }
    
    private void HandleHandTracking()
    {
        // Get hand tracking data (this would integrate with your VR SDK)
        float leftHandOpenness = GetHandOpenness(XRNode.LeftHand);
        float rightHandOpenness = GetHandOpenness(XRNode.RightHand);
        bool leftHandPointing = GetHandPointing(XRNode.LeftHand);
        bool rightHandPointing = GetHandPointing(XRNode.RightHand);
        
        // Handle left hand gestures
        HandleHandGesture(leftHandOpenness, leftHandPointing, true);
        
        // Handle right hand gestures
        HandleHandGesture(rightHandOpenness, rightHandPointing, false);
    }
    
    private void HandleHandGesture(float openness, bool pointing, bool isLeftHand)
    {
        if (pointing)
        {
            if (isLeftHand && !isLeftHandPointing)
            {
                isLeftHandPointing = true;
                PlayHandAnimation(handPointAnimation, leftHand);
            }
            else if (!isLeftHand && !isRightHandPointing)
            {
                isRightHandPointing = true;
                PlayHandAnimation(handPointAnimation, rightHand);
            }
        }
        else
        {
            if (isLeftHand && isLeftHandPointing)
            {
                isLeftHandPointing = false;
            }
            else if (!isLeftHand && isRightHandPointing)
            {
                isRightHandPointing = false;
            }
            
            // Handle open/close gestures
            if (openness > gestureThreshold)
            {
                if (isLeftHand && !isLeftHandOpen)
                {
                    isLeftHandOpen = true;
                    PlayHandAnimation(handOpenAnimation, leftHand);
                }
                else if (!isLeftHand && !isRightHandOpen)
                {
                    isRightHandOpen = true;
                    PlayHandAnimation(handOpenAnimation, rightHand);
                }
            }
            else
            {
                if (isLeftHand && isLeftHandOpen)
                {
                    isLeftHandOpen = false;
                    PlayHandAnimation(handCloseAnimation, leftHand);
                }
                else if (!isLeftHand && isRightHandOpen)
                {
                    isRightHandOpen = false;
                    PlayHandAnimation(handCloseAnimation, rightHand);
                }
            }
        }
    }
    
    private void PlayHandAnimation(GraphFlowAsset animation, Transform hand)
    {
        if (animation != null && hand != null)
        {
            // Create a temporary GraphExecutor for this hand
            GraphExecutor handExecutor = hand.GetComponent<GraphExecutor>();
            if (handExecutor == null)
            {
                handExecutor = hand.gameObject.AddComponent<GraphExecutor>();
            }
            
            handExecutor.SetGraphFlowAsset(animation);
            handExecutor.Play();
        }
    }
    
    private float GetHandOpenness(XRNode hand)
    {
        // This would integrate with your VR SDK's hand tracking
        // For example, with Oculus Integration:
        // return OVRInput.Get(OVRInput.Axis1D.PrimaryHandTrigger, hand == XRNode.LeftHand ? OVRInput.Controller.LTouch : OVRInput.Controller.RTouch);
        
        // Placeholder implementation
        return Input.GetAxis("HandOpenness");
    }
    
    private bool GetHandPointing(XRNode hand)
    {
        // This would integrate with your VR SDK's hand tracking
        // Placeholder implementation
        return Input.GetKey(hand == XRNode.LeftHand ? KeyCode.Q : KeyCode.E);
    }
}
```

#### VR Object Interaction
Create animations for VR object interactions.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.XR;

public class VRObjectInteractionExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset grabAnimation;
    [SerializeField] private GraphFlowAsset releaseAnimation;
    [SerializeField] private GraphFlowAsset hoverAnimation;
    [SerializeField] private Transform vrHand;
    [SerializeField] private float interactionDistance = 0.1f;
    
    private GraphExecutor graphExecutor;
    private bool isGrabbed = false;
    private bool isHovered = false;
    private Transform originalParent;
    private Vector3 originalPosition;
    private Quaternion originalRotation;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        originalParent = transform.parent;
        originalPosition = transform.position;
        originalRotation = transform.rotation;
    }
    
    private void Update()
    {
        HandleVRInteraction();
    }
    
    private void HandleVRInteraction()
    {
        if (vrHand == null) return;
        
        float distance = Vector3.Distance(transform.position, vrHand.position);
        bool isInRange = distance <= interactionDistance;
        
        // Handle hover state
        if (isInRange && !isHovered)
        {
            StartHover();
        }
        else if (!isInRange && isHovered)
        {
            StopHover();
        }
        
        // Handle grab/release
        if (isInRange && GetGrabInput() && !isGrabbed)
        {
            GrabObject();
        }
        else if (isGrabbed && !GetGrabInput())
        {
            ReleaseObject();
        }
        
        // Handle grabbed object movement
        if (isGrabbed)
        {
            UpdateGrabbedObject();
        }
    }
    
    private void StartHover()
    {
        isHovered = true;
        
        if (hoverAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(hoverAnimation);
            graphExecutor.Play();
        }
    }
    
    private void StopHover()
    {
        isHovered = false;
        
        if (graphExecutor.IsPlaying())
        {
            graphExecutor.Stop();
        }
    }
    
    private void GrabObject()
    {
        isGrabbed = true;
        
        if (grabAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(grabAnimation);
            graphExecutor.Play();
        }
        
        // Parent to hand for movement
        transform.SetParent(vrHand);
    }
    
    private void ReleaseObject()
    {
        isGrabbed = false;
        
        if (releaseAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(releaseAnimation);
            graphExecutor.Play();
        }
        
        // Return to original parent
        transform.SetParent(originalParent);
    }
    
    private void UpdateGrabbedObject()
    {
        // Smoothly follow hand position
        transform.position = Vector3.Lerp(transform.position, vrHand.position, Time.deltaTime * 10f);
        transform.rotation = Quaternion.Lerp(transform.rotation, vrHand.rotation, Time.deltaTime * 10f);
    }
    
    private bool GetGrabInput()
    {
        // This would integrate with your VR SDK's input system
        // For example, with Oculus Integration:
        // return OVRInput.Get(OVRInput.Button.PrimaryHandTrigger, OVRInput.Controller.RTouch);
        
        // Placeholder implementation
        return Input.GetKey(KeyCode.G);
    }
}
```

### AR Animation Examples
Complete AR animation examples for augmented reality experiences.

#### AR Object Placement
Create animations for AR object placement.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;

public class ARObjectPlacementExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset placementAnimation;
    [SerializeField] private GraphFlowAsset selectionAnimation;
    [SerializeField] private GameObject arObjectPrefab;
    [SerializeField] private ARRaycastManager raycastManager;
    [SerializeField] private Camera arCamera;
    
    private GraphExecutor graphExecutor;
    private GameObject placedObject;
    private bool isPlacing = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
    }
    
    private void Update()
    {
        HandleARPlacement();
    }
    
    private void HandleARPlacement()
    {
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);
            
            if (touch.phase == TouchPhase.Began)
            {
                TryPlaceObject(touch.position);
            }
        }
        
        // Handle mouse input for testing
        if (Input.GetMouseButtonDown(0))
        {
            TryPlaceObject(Input.mousePosition);
        }
    }
    
    private void TryPlaceObject(Vector2 screenPosition)
    {
        if (isPlacing) return;
        
        List<ARRaycastHit> hits = new List<ARRaycastHit>();
        
        if (raycastManager.Raycast(screenPosition, hits, TrackableType.PlaneWithinPolygon))
        {
            ARRaycastHit hit = hits[0];
            Vector3 worldPosition = hit.pose.position;
            
            if (placedObject == null)
            {
                PlaceObject(worldPosition);
            }
            else
            {
                MoveObject(worldPosition);
            }
        }
    }
    
    private void PlaceObject(Vector3 position)
    {
        isPlacing = true;
        
        // Create AR object
        placedObject = Instantiate(arObjectPrefab, position, Quaternion.identity);
        
        // Play placement animation
        if (placementAnimation != null)
        {
            GraphExecutor objectExecutor = placedObject.GetComponent<GraphExecutor>();
            if (objectExecutor == null)
            {
                objectExecutor = placedObject.AddComponent<GraphExecutor>();
            }
            
            objectExecutor.SetGraphFlowAsset(placementAnimation);
            objectExecutor.Play();
        }
        
        isPlacing = false;
    }
    
    private void MoveObject(Vector3 position)
    {
        if (placedObject == null) return;
        
        // Smoothly move object to new position
        StartCoroutine(MoveObjectCoroutine(placedObject.transform, position));
    }
    
    private System.Collections.IEnumerator MoveObjectCoroutine(Transform objectTransform, Vector3 targetPosition)
    {
        Vector3 startPosition = objectTransform.position;
        float elapsed = 0f;
        float duration = 0.5f;
        
        while (elapsed < duration)
        {
            elapsed += Time.deltaTime;
            float progress = elapsed / duration;
            objectTransform.position = Vector3.Lerp(startPosition, targetPosition, progress);
            yield return null;
        }
        
        objectTransform.position = targetPosition;
    }
}
```

#### AR Face Tracking
Create animations that respond to face tracking.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using UnityEngine.XR.ARSubsystems;

public class ARFaceTrackingExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset smileAnimation;
    [SerializeField] private GraphFlowAsset frownAnimation;
    [SerializeField] private GraphFlowAsset winkAnimation;
    [SerializeField] private ARFaceManager faceManager;
    [SerializeField] private float expressionThreshold = 0.5f;
    
    private GraphExecutor graphExecutor;
    private bool isSmiling = false;
    private bool isFrowning = false;
    private bool isWinking = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
    }
    
    private void Update()
    {
        HandleFaceTracking();
    }
    
    private void HandleFaceTracking()
    {
        if (faceManager == null) return;
        
        // Get face tracking data
        foreach (var face in faceManager.trackables)
        {
            if (face.trackingState == TrackingState.Tracking)
            {
                // Get facial expressions (this would integrate with your AR SDK)
                float smileValue = GetSmileValue(face);
                float frownValue = GetFrownValue(face);
                bool isWinkingLeft = GetWinkValue(face, true);
                bool isWinkingRight = GetWinkValue(face, false);
                
                // Handle smile expression
                if (smileValue > expressionThreshold && !isSmiling)
                {
                    isSmiling = true;
                    PlayExpressionAnimation(smileAnimation);
                }
                else if (smileValue <= expressionThreshold && isSmiling)
                {
                    isSmiling = false;
                }
                
                // Handle frown expression
                if (frownValue > expressionThreshold && !isFrowning)
                {
                    isFrowning = true;
                    PlayExpressionAnimation(frownAnimation);
                }
                else if (frownValue <= expressionThreshold && isFrowning)
                {
                    isFrowning = false;
                }
                
                // Handle wink expression
                if ((isWinkingLeft || isWinkingRight) && !isWinking)
                {
                    isWinking = true;
                    PlayExpressionAnimation(winkAnimation);
                }
                else if (!isWinkingLeft && !isWinkingRight && isWinking)
                {
                    isWinking = false;
                }
            }
        }
    }
    
    private void PlayExpressionAnimation(GraphFlowAsset animation)
    {
        if (animation != null)
        {
            graphExecutor.SetGraphFlowAsset(animation);
            graphExecutor.Play();
        }
    }
    
    private float GetSmileValue(ARFace face)
    {
        // This would integrate with your AR SDK's face tracking
        // Placeholder implementation
        return Input.GetAxis("Smile");
    }
    
    private float GetFrownValue(ARFace face)
    {
        // This would integrate with your AR SDK's face tracking
        // Placeholder implementation
        return Input.GetAxis("Frown");
    }
    
    private bool GetWinkValue(ARFace face, bool leftEye)
    {
        // This would integrate with your AR SDK's face tracking
        // Placeholder implementation
        return Input.GetKey(leftEye ? KeyCode.LeftArrow : KeyCode.RightArrow);
    }
}
```

## 📱 Mobile Animation Examples

### Touch Gesture Animations
Complete touch gesture examples for mobile devices.

#### Pinch Zoom Animation
Create pinch zoom animations for mobile interfaces.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class PinchZoomExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset zoomInAnimation;
    [SerializeField] private GraphFlowAsset zoomOutAnimation;
    [SerializeField] private float minScale = 0.5f;
    [SerializeField] private float maxScale = 3f;
    [SerializeField] private float zoomSpeed = 2f;
    
    private GraphExecutor graphExecutor;
    private float initialDistance = 0f;
    private float initialScale = 1f;
    private bool isZooming = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
    }
    
    private void Update()
    {
        HandlePinchZoom();
    }
    
    private void HandlePinchZoom()
    {
        if (Input.touchCount == 2)
        {
            Touch touch1 = Input.GetTouch(0);
            Touch touch2 = Input.GetTouch(1);
            
            if (touch1.phase == TouchPhase.Began || touch2.phase == TouchPhase.Began)
            {
                initialDistance = Vector2.Distance(touch1.position, touch2.position);
                initialScale = transform.localScale.x;
                isZooming = true;
            }
            else if (touch1.phase == TouchPhase.Moved || touch2.phase == TouchPhase.Moved)
            {
                if (isZooming)
                {
                    float currentDistance = Vector2.Distance(touch1.position, touch2.position);
                    float scaleFactor = currentDistance / initialDistance;
                    float newScale = initialScale * scaleFactor;
                    
                    // Clamp scale
                    newScale = Mathf.Clamp(newScale, minScale, maxScale);
                    
                    // Apply scale
                    transform.localScale = Vector3.one * newScale;
                    
                    // Play appropriate animation
                    if (scaleFactor > 1.1f && zoomInAnimation != null)
                    {
                        graphExecutor.SetGraphFlowAsset(zoomInAnimation);
                        graphExecutor.Play();
                    }
                    else if (scaleFactor < 0.9f && zoomOutAnimation != null)
                    {
                        graphExecutor.SetGraphFlowAsset(zoomOutAnimation);
                        graphExecutor.Play();
                    }
                }
            }
        }
        else
        {
            isZooming = false;
        }
    }
}
```

#### Swipe Navigation Animation
Create swipe navigation animations for mobile interfaces.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class SwipeNavigationExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset swipeLeftAnimation;
    [SerializeField] private GraphFlowAsset swipeRightAnimation;
    [SerializeField] private GraphFlowAsset swipeUpAnimation;
    [SerializeField] private GraphFlowAsset swipeDownAnimation;
    [SerializeField] private float swipeThreshold = 50f;
    [SerializeField] private float swipeSpeed = 5f;
    
    private GraphExecutor graphExecutor;
    private Vector2 startTouchPosition;
    private Vector2 endTouchPosition;
    private bool isSwiping = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
    }
    
    private void Update()
    {
        HandleSwipeInput();
    }
    
    private void HandleSwipeInput()
    {
        if (Input.touchCount > 0)
        {
            Touch touch = Input.GetTouch(0);
            
            if (touch.phase == TouchPhase.Began)
            {
                startTouchPosition = touch.position;
                isSwiping = true;
            }
            else if (touch.phase == TouchPhase.Ended && isSwiping)
            {
                endTouchPosition = touch.position;
                ProcessSwipe();
                isSwiping = false;
            }
        }
        
        // Handle mouse input for testing
        if (Input.GetMouseButtonDown(0))
        {
            startTouchPosition = Input.mousePosition;
            isSwiping = true;
        }
        else if (Input.GetMouseButtonUp(0) && isSwiping)
        {
            endTouchPosition = Input.mousePosition;
            ProcessSwipe();
            isSwiping = false;
        }
    }
    
    private void ProcessSwipe()
    {
        Vector2 swipeDirection = endTouchPosition - startTouchPosition;
        float swipeDistance = swipeDirection.magnitude;
        
        if (swipeDistance > swipeThreshold)
        {
            swipeDirection.Normalize();
            
            if (Mathf.Abs(swipeDirection.x) > Mathf.Abs(swipeDirection.y))
            {
                // Horizontal swipe
                if (swipeDirection.x > 0)
                {
                    SwipeRight();
                }
                else
                {
                    SwipeLeft();
                }
            }
            else
            {
                // Vertical swipe
                if (swipeDirection.y > 0)
                {
                    SwipeUp();
                }
                else
                {
                    SwipeDown();
                }
            }
        }
    }
    
    private void SwipeLeft()
    {
        if (swipeLeftAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(swipeLeftAnimation);
            graphExecutor.Play();
        }
    }
    
    private void SwipeRight()
    {
        if (swipeRightAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(swipeRightAnimation);
            graphExecutor.Play();
        }
    }
    
    private void SwipeUp()
    {
        if (swipeUpAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(swipeUpAnimation);
            graphExecutor.Play();
        }
    }
    
    private void SwipeDown()
    {
        if (swipeDownAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(swipeDownAnimation);
            graphExecutor.Play();
        }
    }
}
```

### Mobile UI Animations
Complete mobile UI animation examples.

#### Mobile Menu Animation
Create mobile-optimized menu animations.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class MobileMenuExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset menuSlideInAnimation;
    [SerializeField] private GraphFlowAsset menuSlideOutAnimation;
    [SerializeField] private RectTransform menuPanel;
    [SerializeField] private Button menuButton;
    [SerializeField] private Button closeButton;
    [SerializeField] private bool isMenuOpen = false;
    
    private GraphExecutor graphExecutor;
    private bool isAnimating = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initially hide menu
        menuPanel.gameObject.SetActive(false);
        
        // Set up button events
        menuButton.onClick.AddListener(ToggleMenu);
        closeButton.onClick.AddListener(CloseMenu);
    }
    
    private void ToggleMenu()
    {
        if (isAnimating) return;
        
        if (isMenuOpen)
        {
            CloseMenu();
        }
        else
        {
            OpenMenu();
        }
    }
    
    private void OpenMenu()
    {
        if (isAnimating) return;
        
        StartCoroutine(OpenMenuCoroutine());
    }
    
    private void CloseMenu()
    {
        if (isAnimating) return;
        
        StartCoroutine(CloseMenuCoroutine());
    }
    
    private System.Collections.IEnumerator OpenMenuCoroutine()
    {
        isAnimating = true;
        isMenuOpen = true;
        
        // Show menu panel
        menuPanel.gameObject.SetActive(true);
        
        // Play slide in animation
        if (menuSlideInAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(menuSlideInAnimation);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        }
        
        isAnimating = false;
    }
    
    private System.Collections.IEnumerator CloseMenuCoroutine()
    {
        isAnimating = true;
        isMenuOpen = false;
        
        // Play slide out animation
        if (menuSlideOutAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(menuSlideOutAnimation);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        }
        
        // Hide menu panel
        menuPanel.gameObject.SetActive(false);
        
        isAnimating = false;
    }
}
```

#### Mobile Notification Animation
Create mobile-optimized notification animations.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class MobileNotificationExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset notificationSlideInAnimation;
    [SerializeField] private GraphFlowAsset notificationSlideOutAnimation;
    [SerializeField] private RectTransform notificationPanel;
    [SerializeField] private Text notificationText;
    [SerializeField] private Button dismissButton;
    [SerializeField] private float displayDuration = 3f;
    
    private GraphExecutor graphExecutor;
    private bool isShowing = false;
    private bool isAnimating = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initially hide notification
        notificationPanel.gameObject.SetActive(false);
        
        // Set up button events
        dismissButton.onClick.AddListener(DismissNotification);
    }
    
    public void ShowNotification(string message)
    {
        if (isShowing || isAnimating) return;
        
        StartCoroutine(ShowNotificationCoroutine(message));
    }
    
    private System.Collections.IEnumerator ShowNotificationCoroutine(string message)
    {
        isShowing = true;
        isAnimating = true;
        
        // Set message and show panel
        notificationText.text = message;
        notificationPanel.gameObject.SetActive(true);
        
        // Play slide in animation
        if (notificationSlideInAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(notificationSlideInAnimation);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        }
        
        isAnimating = false;
        
        // Wait for display duration
        yield return new WaitForSeconds(displayDuration);
        
        // Auto-dismiss if not manually dismissed
        if (isShowing)
        {
            yield return StartCoroutine(DismissNotificationCoroutine());
        }
    }
    
    private void DismissNotification()
    {
        if (!isShowing || isAnimating) return;
        
        StartCoroutine(DismissNotificationCoroutine());
    }
    
    private System.Collections.IEnumerator DismissNotificationCoroutine()
    {
        isAnimating = true;
        isShowing = false;
        
        // Play slide out animation
        if (notificationSlideOutAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(notificationSlideOutAnimation);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        }
        
        // Hide notification panel
        notificationPanel.gameObject.SetActive(false);
        
        isAnimating = false;
    }
}
```

## 🚀 Performance Optimization

### VR/AR Performance Best Practices
- **Optimize for 90fps** for VR experiences
- **Use efficient rendering** for AR overlays
- **Limit simultaneous animations** to prevent frame drops
- **Test on actual devices** for accurate performance

### Mobile Performance Best Practices
- **Optimize for 60fps** on mobile devices
- **Use efficient touch handling** for smooth interactions
- **Limit animation complexity** for better performance
- **Test on various devices** for compatibility

## 🎉 What's Next?

Now that you understand VR/AR and mobile animations:

### **📚 Learn More**
- **[API Reference](api/graph-executor-util)** - Technical documentation
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows
- **[Reference](reference/node-reference)** - Complete reference guide

### **🎯 Try These Examples**
- **[API Reference](api/graph-executor-util)** - Complete API examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows
- **[Reference](reference/node-reference)** - Complete reference guide

---

<div align="center">

**🎊 VR/AR & Mobile mastery achieved!** You're ready to create immersive experiences!

**Let's explore the API!** Check out the [API Reference](api/graph-executor-util) guide!

</div>
