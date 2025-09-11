# Cinematic Camera

Complete examples and tutorials for creating cinematic camera animations with Animatix Pro. This comprehensive guide provides ready-to-use examples for professional cinematic sequences.

## 🎬 Cinematic Camera Examples

### Camera Movement Techniques
Complete camera movement examples for different cinematic styles.

#### Dolly Shot Animation
Create smooth dolly shots for dramatic effect.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class DollyShotExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset dollyInAnimation;
    [SerializeField] private GraphFlowAsset dollyOutAnimation;
    [SerializeField] private Transform target;
    [SerializeField] private float dollySpeed = 2f;
    [SerializeField] private float dollyDistance = 10f;
    
    private GraphExecutor graphExecutor;
    private Camera camera;
    private Vector3 originalPosition;
    private bool isDollying = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        camera = GetComponent<Camera>();
        originalPosition = transform.position;
    }
    
    public void DollyIn()
    {
        if (isDollying) return;
        
        StartCoroutine(DollyInCoroutine());
    }
    
    public void DollyOut()
    {
        if (isDollying) return;
        
        StartCoroutine(DollyOutCoroutine());
    }
    
    private System.Collections.IEnumerator DollyInCoroutine()
    {
        isDollying = true;
        
        if (dollyInAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(dollyInAnimation);
            graphExecutor.Play();
        }
        else
        {
            // Manual dolly in
            Vector3 startPos = transform.position;
            Vector3 endPos = target.position - transform.forward * dollyDistance;
            
            float elapsed = 0f;
            float duration = Vector3.Distance(startPos, endPos) / dollySpeed;
            
            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float progress = elapsed / duration;
                transform.position = Vector3.Lerp(startPos, endPos, progress);
                yield return null;
            }
        }
        
        isDollying = false;
    }
    
    private System.Collections.IEnumerator DollyOutCoroutine()
    {
        isDollying = true;
        
        if (dollyOutAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(dollyOutAnimation);
            graphExecutor.Play();
        }
        else
        {
            // Manual dolly out
            Vector3 startPos = transform.position;
            Vector3 endPos = originalPosition;
            
            float elapsed = 0f;
            float duration = Vector3.Distance(startPos, endPos) / dollySpeed;
            
            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float progress = elapsed / duration;
                transform.position = Vector3.Lerp(startPos, endPos, progress);
                yield return null;
            }
        }
        
        isDollying = false;
    }
}
```

#### Crane Shot Animation
Create dramatic crane shots for cinematic sequences.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class CraneShotExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset craneUpAnimation;
    [SerializeField] private GraphFlowAsset craneDownAnimation;
    [SerializeField] private Transform cranePivot;
    [SerializeField] private float craneHeight = 20f;
    [SerializeField] private float craneSpeed = 3f;
    [SerializeField] private AnimationCurve craneCurve = AnimationCurve.EaseInOut(0, 0, 1, 1);
    
    private GraphExecutor graphExecutor;
    private Vector3 originalPosition;
    private bool isCraning = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        originalPosition = transform.position;
    }
    
    public void CraneUp()
    {
        if (isCraning) return;
        
        StartCoroutine(CraneUpCoroutine());
    }
    
    public void CraneDown()
    {
        if (isCraning) return;
        
        StartCoroutine(CraneDownCoroutine());
    }
    
    private System.Collections.IEnumerator CraneUpCoroutine()
    {
        isCraning = true;
        
        if (craneUpAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(craneUpAnimation);
            graphExecutor.Play();
        }
        else
        {
            // Manual crane up
            Vector3 startPos = transform.position;
            Vector3 endPos = startPos + Vector3.up * craneHeight;
            
            float elapsed = 0f;
            float duration = craneHeight / craneSpeed;
            
            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float progress = elapsed / duration;
                float curveValue = craneCurve.Evaluate(progress);
                
                transform.position = Vector3.Lerp(startPos, endPos, curveValue);
                yield return null;
            }
        }
        
        isCraning = false;
    }
    
    private System.Collections.IEnumerator CraneDownCoroutine()
    {
        isCraning = true;
        
        if (craneDownAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(craneDownAnimation);
            graphExecutor.Play();
        }
        else
        {
            // Manual crane down
            Vector3 startPos = transform.position;
            Vector3 endPos = originalPosition;
            
            float elapsed = 0f;
            float duration = Vector3.Distance(startPos, endPos) / craneSpeed;
            
            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float progress = elapsed / duration;
                float curveValue = craneCurve.Evaluate(progress);
                
                transform.position = Vector3.Lerp(startPos, endPos, curveValue);
                yield return null;
            }
        }
        
        isCraning = false;
    }
}
```

#### Tracking Shot Animation
Create smooth tracking shots that follow subjects.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class TrackingShotExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset trackingAnimation;
    [SerializeField] private Transform target;
    [SerializeField] private Vector3 offset = new Vector3(0, 5, -10);
    [SerializeField] private float trackingSpeed = 5f;
    [SerializeField] private float lookAheadDistance = 2f;
    
    private GraphExecutor graphExecutor;
    private bool isTracking = false;
    private Vector3 targetPosition;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
    }
    
    public void StartTracking()
    {
        if (isTracking) return;
        
        isTracking = true;
        
        if (trackingAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(trackingAnimation);
            graphExecutor.Play();
        }
        else
        {
            StartCoroutine(ManualTracking());
        }
    }
    
    public void StopTracking()
    {
        isTracking = false;
        
        if (graphExecutor.IsPlaying())
        {
            graphExecutor.Stop();
        }
    }
    
    private System.Collections.IEnumerator ManualTracking()
    {
        while (isTracking && target != null)
        {
            // Calculate target position with offset
            targetPosition = target.position + offset;
            
            // Smoothly move camera to target position
            transform.position = Vector3.Lerp(transform.position, targetPosition, trackingSpeed * Time.deltaTime);
            
            // Look at target with look ahead
            Vector3 lookTarget = target.position + target.forward * lookAheadDistance;
            transform.LookAt(lookTarget);
            
            yield return null;
        }
    }
}
```

### Camera Transition Effects
Complete camera transition examples for smooth scene changes.

#### Fade Transition
Create smooth fade transitions between scenes.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class FadeTransitionExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset fadeInAnimation;
    [SerializeField] private GraphFlowAsset fadeOutAnimation;
    [SerializeField] private Image fadeImage;
    [SerializeField] private float fadeDuration = 1f;
    
    private GraphExecutor graphExecutor;
    private bool isTransitioning = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initially hide fade image
        if (fadeImage != null)
        {
            fadeImage.gameObject.SetActive(false);
        }
    }
    
    public void FadeIn()
    {
        if (isTransitioning) return;
        
        StartCoroutine(FadeInCoroutine());
    }
    
    public void FadeOut()
    {
        if (isTransitioning) return;
        
        StartCoroutine(FadeOutCoroutine());
    }
    
    public void FadeToScene(System.Action onComplete = null)
    {
        if (isTransitioning) return;
        
        StartCoroutine(FadeToSceneCoroutine(onComplete));
    }
    
    private System.Collections.IEnumerator FadeInCoroutine()
    {
        isTransitioning = true;
        
        if (fadeImage != null)
        {
            fadeImage.gameObject.SetActive(true);
        }
        
        if (fadeInAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(fadeInAnimation);
            graphExecutor.Play();
        }
        else
        {
            // Manual fade in
            Color color = fadeImage.color;
            color.a = 1f;
            fadeImage.color = color;
            
            float elapsed = 0f;
            while (elapsed < fadeDuration)
            {
                elapsed += Time.deltaTime;
                float progress = elapsed / fadeDuration;
                color.a = 1f - progress;
                fadeImage.color = color;
                yield return null;
            }
            
            color.a = 0f;
            fadeImage.color = color;
        }
        
        if (fadeImage != null)
        {
            fadeImage.gameObject.SetActive(false);
        }
        
        isTransitioning = false;
    }
    
    private System.Collections.IEnumerator FadeOutCoroutine()
    {
        isTransitioning = true;
        
        if (fadeImage != null)
        {
            fadeImage.gameObject.SetActive(true);
        }
        
        if (fadeOutAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(fadeOutAnimation);
            graphExecutor.Play();
        }
        else
        {
            // Manual fade out
            Color color = fadeImage.color;
            color.a = 0f;
            fadeImage.color = color;
            
            float elapsed = 0f;
            while (elapsed < fadeDuration)
            {
                elapsed += Time.deltaTime;
                float progress = elapsed / fadeDuration;
                color.a = progress;
                fadeImage.color = color;
                yield return null;
            }
            
            color.a = 1f;
            fadeImage.color = color;
        }
        
        isTransitioning = false;
    }
    
    private System.Collections.IEnumerator FadeToSceneCoroutine(System.Action onComplete)
    {
        yield return StartCoroutine(FadeOutCoroutine());
        
        // Scene change logic would go here
        onComplete?.Invoke();
        
        yield return StartCoroutine(FadeInCoroutine());
    }
}
```

#### Wipe Transition
Create dynamic wipe transitions for scene changes.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class WipeTransitionExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset wipeLeftAnimation;
    [SerializeField] private GraphFlowAsset wipeRightAnimation;
    [SerializeField] private GraphFlowAsset wipeUpAnimation;
    [SerializeField] private GraphFlowAsset wipeDownAnimation;
    [SerializeField] private Image wipeImage;
    [SerializeField] private float wipeDuration = 1f;
    
    private GraphExecutor graphExecutor;
    private bool isTransitioning = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initially hide wipe image
        if (wipeImage != null)
        {
            wipeImage.gameObject.SetActive(false);
        }
    }
    
    public void WipeLeft()
    {
        if (isTransitioning) return;
        
        StartCoroutine(WipeCoroutine(wipeLeftAnimation, Vector2.left));
    }
    
    public void WipeRight()
    {
        if (isTransitioning) return;
        
        StartCoroutine(WipeCoroutine(wipeRightAnimation, Vector2.right));
    }
    
    public void WipeUp()
    {
        if (isTransitioning) return;
        
        StartCoroutine(WipeCoroutine(wipeUpAnimation, Vector2.up));
    }
    
    public void WipeDown()
    {
        if (isTransitioning) return;
        
        StartCoroutine(WipeCoroutine(wipeDownAnimation, Vector2.down));
    }
    
    private System.Collections.IEnumerator WipeCoroutine(GraphFlowAsset animation, Vector2 direction)
    {
        isTransitioning = true;
        
        if (wipeImage != null)
        {
            wipeImage.gameObject.SetActive(true);
        }
        
        if (animation != null)
        {
            graphExecutor.SetGraphFlowAsset(animation);
            graphExecutor.Play();
        }
        else
        {
            // Manual wipe
            RectTransform rectTransform = wipeImage.rectTransform;
            Vector2 startPos = rectTransform.anchoredPosition;
            Vector2 endPos = startPos + direction * 2000f; // Large offset for wipe effect
            
            float elapsed = 0f;
            while (elapsed < wipeDuration)
            {
                elapsed += Time.deltaTime;
                float progress = elapsed / wipeDuration;
                rectTransform.anchoredPosition = Vector2.Lerp(startPos, endPos, progress);
                yield return null;
            }
        }
        
        if (wipeImage != null)
        {
            wipeImage.gameObject.SetActive(false);
        }
        
        isTransitioning = false;
    }
}
```

### Depth of Field Effects
Complete depth of field examples for cinematic focus.

#### Focus Pull Animation
Create smooth focus pull effects.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class FocusPullExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset focusPullAnimation;
    [SerializeField] private Transform nearTarget;
    [SerializeField] private Transform farTarget;
    [SerializeField] private float focusSpeed = 2f;
    [SerializeField] private float focusRange = 50f;
    
    private GraphExecutor graphExecutor;
    private Camera camera;
    private bool isFocusPulling = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        camera = GetComponent<Camera>();
    }
    
    public void FocusPullToNear()
    {
        if (isFocusPulling || nearTarget == null) return;
        
        StartCoroutine(FocusPullCoroutine(nearTarget.position));
    }
    
    public void FocusPullToFar()
    {
        if (isFocusPulling || farTarget == null) return;
        
        StartCoroutine(FocusPullCoroutine(farTarget.position));
    }
    
    private System.Collections.IEnumerator FocusPullCoroutine(Vector3 targetPosition)
    {
        isFocusPulling = true;
        
        if (focusPullAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(focusPullAnimation);
            graphExecutor.Play();
        }
        else
        {
            // Manual focus pull
            float startDistance = Vector3.Distance(transform.position, targetPosition);
            float targetDistance = focusRange;
            
            float elapsed = 0f;
            float duration = Mathf.Abs(startDistance - targetDistance) / focusSpeed;
            
            while (elapsed < duration)
            {
                elapsed += Time.deltaTime;
                float progress = elapsed / duration;
                float currentDistance = Mathf.Lerp(startDistance, targetDistance, progress);
                
                // Update camera focus distance
                // This would integrate with your post-processing system
                yield return null;
            }
        }
        
        isFocusPulling = false;
    }
}
```

#### Bokeh Effect Animation
Create animated bokeh effects for cinematic depth.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class BokehEffectExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset bokehAnimation;
    [SerializeField] private float bokehIntensity = 1f;
    [SerializeField] private float bokehSize = 1f;
    [SerializeField] private float animationSpeed = 1f;
    
    private GraphExecutor graphExecutor;
    private bool isAnimating = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
    }
    
    public void StartBokehAnimation()
    {
        if (isAnimating) return;
        
        isAnimating = true;
        
        if (bokehAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(bokehAnimation);
            graphExecutor.Play();
        }
        else
        {
            StartCoroutine(ManualBokehAnimation());
        }
    }
    
    public void StopBokehAnimation()
    {
        isAnimating = false;
        
        if (graphExecutor.IsPlaying())
        {
            graphExecutor.Stop();
        }
    }
    
    private System.Collections.IEnumerator ManualBokehAnimation()
    {
        while (isAnimating)
        {
            // Animate bokeh parameters
            float time = Time.time * animationSpeed;
            float intensity = bokehIntensity * (1f + Mathf.Sin(time) * 0.5f);
            float size = bokehSize * (1f + Mathf.Cos(time * 0.7f) * 0.3f);
            
            // Update bokeh effect parameters
            // This would integrate with your post-processing system
            
            yield return null;
        }
    }
}
```

### Camera Shake Effects
Complete camera shake examples for impact and drama.

#### Impact Shake
Create camera shake for impacts and explosions.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class ImpactShakeExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset impactShakeAnimation;
    [SerializeField] private float shakeIntensity = 1f;
    [SerializeField] private float shakeDuration = 0.5f;
    [SerializeField] private float shakeFrequency = 10f;
    
    private GraphExecutor graphExecutor;
    private Vector3 originalPosition;
    private bool isShaking = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        originalPosition = transform.position;
    }
    
    public void TriggerImpactShake()
    {
        if (isShaking) return;
        
        StartCoroutine(ImpactShakeCoroutine());
    }
    
    private System.Collections.IEnumerator ImpactShakeCoroutine()
    {
        isShaking = true;
        
        if (impactShakeAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(impactShakeAnimation);
            graphExecutor.Play();
        }
        else
        {
            // Manual impact shake
            float elapsed = 0f;
            while (elapsed < shakeDuration)
            {
                elapsed += Time.deltaTime;
                float progress = elapsed / shakeDuration;
                float intensity = shakeIntensity * (1f - progress);
                
                Vector3 randomOffset = new Vector3(
                    Random.Range(-1f, 1f) * intensity,
                    Random.Range(-1f, 1f) * intensity,
                    Random.Range(-1f, 1f) * intensity
                );
                
                transform.position = originalPosition + randomOffset;
                yield return null;
            }
        }
        
        transform.position = originalPosition;
        isShaking = false;
    }
}
```

#### Earthquake Shake
Create continuous earthquake shake effects.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class EarthquakeShakeExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset earthquakeAnimation;
    [SerializeField] private float shakeIntensity = 0.5f;
    [SerializeField] private float shakeFrequency = 5f;
    [SerializeField] private float earthquakeDuration = 10f;
    
    private GraphExecutor graphExecutor;
    private Vector3 originalPosition;
    private bool isEarthquaking = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        originalPosition = transform.position;
    }
    
    public void StartEarthquake()
    {
        if (isEarthquaking) return;
        
        StartCoroutine(EarthquakeCoroutine());
    }
    
    public void StopEarthquake()
    {
        isEarthquaking = false;
        
        if (graphExecutor.IsPlaying())
        {
            graphExecutor.Stop();
        }
    }
    
    private System.Collections.IEnumerator EarthquakeCoroutine()
    {
        isEarthquaking = true;
        
        if (earthquakeAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(earthquakeAnimation);
            graphExecutor.Play();
        }
        else
        {
            // Manual earthquake shake
            float elapsed = 0f;
            while (isEarthquaking && elapsed < earthquakeDuration)
            {
                elapsed += Time.deltaTime;
                float time = Time.time * shakeFrequency;
                
                Vector3 randomOffset = new Vector3(
                    Mathf.Sin(time) * shakeIntensity,
                    Mathf.Cos(time * 1.3f) * shakeIntensity * 0.5f,
                    Mathf.Sin(time * 0.7f) * shakeIntensity * 0.3f
                );
                
                transform.position = originalPosition + randomOffset;
                yield return null;
            }
        }
        
        transform.position = originalPosition;
        isEarthquaking = false;
    }
}
```

## 🎨 Advanced Cinematic Examples

### Cinematic Sequence System
Create a complete cinematic sequence system.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class CinematicSequenceExample : MonoBehaviour
{
    [SerializeField] private List<CinematicShot> shots = new List<CinematicShot>();
    [SerializeField] private Camera cinematicCamera;
    [SerializeField] private Camera gameplayCamera;
    
    [System.Serializable]
    public class CinematicShot
    {
        public string shotName;
        public GraphFlowAsset animation;
        public float duration;
        public Transform target;
        public Vector3 cameraPosition;
        public Vector3 cameraRotation;
        public bool waitForInput;
    }
    
    private GraphExecutor graphExecutor;
    private bool isPlayingSequence = false;
    private int currentShotIndex = 0;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initially hide cinematic camera
        if (cinematicCamera != null)
        {
            cinematicCamera.gameObject.SetActive(false);
        }
    }
    
    public void PlaySequence()
    {
        if (isPlayingSequence) return;
        
        StartCoroutine(PlaySequenceCoroutine());
    }
    
    private IEnumerator PlaySequenceCoroutine()
    {
        isPlayingSequence = true;
        
        // Switch to cinematic camera
        if (cinematicCamera != null && gameplayCamera != null)
        {
            gameplayCamera.gameObject.SetActive(false);
            cinematicCamera.gameObject.SetActive(true);
        }
        
        // Play each shot in sequence
        for (int i = 0; i < shots.Count; i++)
        {
            currentShotIndex = i;
            CinematicShot shot = shots[i];
            
            // Set up camera for this shot
            if (shot.target != null)
            {
                cinematicCamera.transform.position = shot.cameraPosition;
                cinematicCamera.transform.rotation = Quaternion.Euler(shot.cameraRotation);
                cinematicCamera.transform.LookAt(shot.target);
            }
            
            // Play shot animation
            if (shot.animation != null)
            {
                graphExecutor.SetGraphFlowAsset(shot.animation);
                graphExecutor.Play();
            }
            
            // Wait for shot duration or input
            if (shot.waitForInput)
            {
                yield return new WaitUntil(() => Input.GetKeyDown(KeyCode.Space) || !graphExecutor.IsPlaying());
            }
            else
            {
                yield return new WaitForSeconds(shot.duration);
            }
        }
        
        // Switch back to gameplay camera
        if (cinematicCamera != null && gameplayCamera != null)
        {
            cinematicCamera.gameObject.SetActive(false);
            gameplayCamera.gameObject.SetActive(true);
        }
        
        isPlayingSequence = false;
    }
}
```

### Dynamic Camera System
Create a dynamic camera system that responds to gameplay.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class DynamicCameraExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset[] cameraModes;
    [SerializeField] private Transform player;
    [SerializeField] private float followSpeed = 5f;
    [SerializeField] private float lookAheadDistance = 3f;
    
    private GraphExecutor graphExecutor;
    private Camera camera;
    private int currentMode = 0;
    private bool isFollowing = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        camera = GetComponent<Camera>();
    }
    
    private void Update()
    {
        HandleCameraModes();
        HandleFollowing();
    }
    
    private void HandleCameraModes()
    {
        if (Input.GetKeyDown(KeyCode.Alpha1))
        {
            SetCameraMode(0);
        }
        else if (Input.GetKeyDown(KeyCode.Alpha2))
        {
            SetCameraMode(1);
        }
        else if (Input.GetKeyDown(KeyCode.Alpha3))
        {
            SetCameraMode(2);
        }
    }
    
    private void SetCameraMode(int mode)
    {
        if (mode >= cameraModes.Length || mode == currentMode) return;
        
        currentMode = mode;
        
        if (cameraModes[mode] != null)
        {
            graphExecutor.SetGraphFlowAsset(cameraModes[mode]);
            graphExecutor.Play();
        }
        
        // Enable/disable following based on mode
        isFollowing = (mode == 0); // Only follow in mode 0
    }
    
    private void HandleFollowing()
    {
        if (!isFollowing || player == null) return;
        
        // Smoothly follow player
        Vector3 targetPosition = player.position + Vector3.back * 10f + Vector3.up * 5f;
        transform.position = Vector3.Lerp(transform.position, targetPosition, followSpeed * Time.deltaTime);
        
        // Look ahead of player
        Vector3 lookTarget = player.position + player.forward * lookAheadDistance;
        transform.LookAt(lookTarget);
    }
}
```

## 🚀 Performance Optimization

### Cinematic Camera Best Practices
- **Use efficient camera transitions** to prevent frame drops
- **Limit simultaneous camera effects** for better performance
- **Use appropriate camera settings** for different platforms
- **Profile cinematic performance** regularly

### Mobile Considerations
- **Simplify camera effects** for mobile devices
- **Use lower resolution** for cinematic sequences
- **Optimize camera animations** for mobile performance
- **Test on actual devices** for accurate performance

## 🎉 What's Next?

Now that you understand cinematic camera techniques:

### **📚 Learn More**
- **[VR/AR & Mobile](vr-ar-mobile)** - VR/AR and mobile examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows
- **[API Reference](api/graph-executor-util)** - Technical documentation

### **🎯 Try These Examples**
- **[VR/AR & Mobile](examples/vr-ar-mobile)** - Complete VR/AR examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows
- **[API Reference](api/graph-executor-util)** - Technical documentation

---

<div align="center">

**🎊 Cinematic Camera mastery achieved!** You're ready to create professional cinematics!

**Let's explore VR/AR!** Check out the [VR/AR & Mobile](vr-ar-mobile) guide!

</div>
