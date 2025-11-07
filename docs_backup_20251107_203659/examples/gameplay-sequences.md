# Gameplay Sequences

Complete examples and tutorials for creating engaging gameplay animations with Animatix Pro. This comprehensive guide provides ready-to-use examples for common gameplay animation patterns.

## 🎮 Gameplay Animation Examples

### Character Animations
Complete character animation examples for different gameplay scenarios.

#### Player Movement Animation
Create smooth player movement animations.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class PlayerMovementExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset walkAnimation;
    [SerializeField] private GraphFlowAsset runAnimation;
    [SerializeField] private GraphFlowAsset jumpAnimation;
    [SerializeField] private GraphFlowAsset idleAnimation;
    
    private GraphExecutor graphExecutor;
    private CharacterController characterController;
    private bool isGrounded = true;
    private bool isMoving = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        characterController = GetComponent<CharacterController>();
    }
    
    private void Update()
    {
        HandleMovement();
        HandleJump();
        UpdateAnimation();
    }
    
    private void HandleMovement()
    {
        float horizontal = Input.GetAxis("Horizontal");
        float vertical = Input.GetAxis("Vertical");
        Vector3 direction = new Vector3(horizontal, 0, vertical).normalized;
        
        if (direction.magnitude > 0.1f)
        {
            isMoving = true;
            characterController.Move(direction * 5f * Time.deltaTime);
        }
        else
        {
            isMoving = false;
        }
    }
    
    private void HandleJump()
    {
        if (Input.GetButtonDown("Jump") && isGrounded)
        {
            isGrounded = false;
            characterController.Move(Vector3.up * 8f);
            PlayJumpAnimation();
        }
    }
    
    private void UpdateAnimation()
    {
        if (!isGrounded)
        {
            // Don't change animation while jumping
            return;
        }
        
        if (isMoving)
        {
            if (Input.GetKey(KeyCode.LeftShift))
            {
                PlayRunAnimation();
            }
            else
            {
                PlayWalkAnimation();
            }
        }
        else
        {
            PlayIdleAnimation();
        }
    }
    
    private void PlayWalkAnimation()
    {
        if (walkAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(walkAnimation);
            graphExecutor.Play();
        }
    }
    
    private void PlayRunAnimation()
    {
        if (runAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(runAnimation);
            graphExecutor.Play();
        }
    }
    
    private void PlayJumpAnimation()
    {
        if (jumpAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(jumpAnimation);
            graphExecutor.Play();
        }
    }
    
    private void PlayIdleAnimation()
    {
        if (idleAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(idleAnimation);
            graphExecutor.Play();
        }
    }
    
    private void OnControllerColliderHit(ControllerColliderHit hit)
    {
        if (hit.normal.y > 0.3f)
        {
            isGrounded = true;
        }
    }
}
```

#### Combat Animation System
Create a comprehensive combat animation system.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class CombatAnimationExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset attackAnimation;
    [SerializeField] private GraphFlowAsset defendAnimation;
    [SerializeField] private GraphFlowAsset hitAnimation;
    [SerializeField] private GraphFlowAsset deathAnimation;
    [SerializeField] private GraphFlowAsset victoryAnimation;
    
    private GraphExecutor graphExecutor;
    private bool isAttacking = false;
    private bool isDefending = false;
    private bool isDead = false;
    
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
        if (isDead) return;
        
        HandleCombatInput();
    }
    
    private void HandleCombatInput()
    {
        if (Input.GetButtonDown("Fire1") && !isAttacking)
        {
            StartAttack();
        }
        
        if (Input.GetButton("Fire2"))
        {
            StartDefending();
        }
        else
        {
            StopDefending();
        }
    }
    
    private void StartAttack()
    {
        isAttacking = true;
        
        if (attackAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(attackAnimation);
            graphExecutor.Play();
            
            // Reset attack state after animation
            StartCoroutine(ResetAttackState());
        }
    }
    
    private void StartDefending()
    {
        if (!isDefending)
        {
            isDefending = true;
            
            if (defendAnimation != null)
            {
                graphExecutor.SetGraphFlowAsset(defendAnimation);
                graphExecutor.Play();
            }
        }
    }
    
    private void StopDefending()
    {
        if (isDefending)
        {
            isDefending = false;
            graphExecutor.Stop();
        }
    }
    
    private System.Collections.IEnumerator ResetAttackState()
    {
        yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        isAttacking = false;
    }
    
    public void TakeDamage()
    {
        if (isDead) return;
        
        if (hitAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(hitAnimation);
            graphExecutor.Play();
        }
    }
    
    public void Die()
    {
        isDead = true;
        
        if (deathAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(deathAnimation);
            graphExecutor.Play();
        }
    }
    
    public void Victory()
    {
        if (victoryAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(victoryAnimation);
            graphExecutor.Play();
        }
    }
}
```

### Weapon Animations
Complete weapon animation examples.

#### Weapon Switching Animation
Create smooth weapon switching animations.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class WeaponSwitchingExample : MonoBehaviour
{
    [SerializeField] private GameObject[] weapons;
    [SerializeField] private GraphFlowAsset[] switchAnimations;
    [SerializeField] private int currentWeaponIndex = 0;
    
    private GraphExecutor graphExecutor;
    private bool isSwitching = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initially hide all weapons except the first one
        for (int i = 0; i < weapons.Length; i++)
        {
            weapons[i].SetActive(i == currentWeaponIndex);
        }
    }
    
    private void Update()
    {
        HandleWeaponSwitching();
    }
    
    private void HandleWeaponSwitching()
    {
        if (isSwitching) return;
        
        if (Input.GetKeyDown(KeyCode.Alpha1))
        {
            SwitchToWeapon(0);
        }
        else if (Input.GetKeyDown(KeyCode.Alpha2))
        {
            SwitchToWeapon(1);
        }
        else if (Input.GetKeyDown(KeyCode.Alpha3))
        {
            SwitchToWeapon(2);
        }
        else if (Input.GetAxis("Mouse ScrollWheel") > 0f)
        {
            SwitchToNextWeapon();
        }
        else if (Input.GetAxis("Mouse ScrollWheel") < 0f)
        {
            SwitchToPreviousWeapon();
        }
    }
    
    private void SwitchToWeapon(int weaponIndex)
    {
        if (weaponIndex == currentWeaponIndex || weaponIndex >= weapons.Length) return;
        
        StartCoroutine(SwitchWeaponCoroutine(weaponIndex));
    }
    
    private void SwitchToNextWeapon()
    {
        int nextIndex = (currentWeaponIndex + 1) % weapons.Length;
        SwitchToWeapon(nextIndex);
    }
    
    private void SwitchToPreviousWeapon()
    {
        int prevIndex = (currentWeaponIndex - 1 + weapons.Length) % weapons.Length;
        SwitchToWeapon(prevIndex);
    }
    
    private System.Collections.IEnumerator SwitchWeaponCoroutine(int weaponIndex)
    {
        isSwitching = true;
        
        // Play switch animation
        if (switchAnimations.Length > currentWeaponIndex && switchAnimations[currentWeaponIndex] != null)
        {
            graphExecutor.SetGraphFlowAsset(switchAnimations[currentWeaponIndex]);
            graphExecutor.Play();
            
            yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        }
        
        // Hide current weapon
        weapons[currentWeaponIndex].SetActive(false);
        
        // Show new weapon
        weapons[weaponIndex].SetActive(true);
        currentWeaponIndex = weaponIndex;
        
        isSwitching = false;
    }
}
```

#### Weapon Firing Animation
Create weapon firing animations with recoil.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class WeaponFiringExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset fireAnimation;
    [SerializeField] private GraphFlowAsset reloadAnimation;
    [SerializeField] private Transform firePoint;
    [SerializeField] private GameObject bulletPrefab;
    [SerializeField] private float fireRate = 0.1f;
    [SerializeField] private int maxAmmo = 30;
    
    private GraphExecutor graphExecutor;
    private float lastFireTime = 0f;
    private int currentAmmo;
    private bool isReloading = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        currentAmmo = maxAmmo;
    }
    
    private void Update()
    {
        HandleFiring();
        HandleReloading();
    }
    
    private void HandleFiring()
    {
        if (isReloading) return;
        
        if (Input.GetButton("Fire1") && Time.time - lastFireTime >= fireRate && currentAmmo > 0)
        {
            Fire();
        }
    }
    
    private void HandleReloading()
    {
        if (Input.GetKeyDown(KeyCode.R) && !isReloading && currentAmmo < maxAmmo)
        {
            StartReload();
        }
    }
    
    private void Fire()
    {
        lastFireTime = Time.time;
        currentAmmo--;
        
        // Play fire animation
        if (fireAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(fireAnimation);
            graphExecutor.Play();
        }
        
        // Create bullet
        if (bulletPrefab != null && firePoint != null)
        {
            Instantiate(bulletPrefab, firePoint.position, firePoint.rotation);
        }
    }
    
    private void StartReload()
    {
        isReloading = true;
        
        if (reloadAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(reloadAnimation);
            graphExecutor.Play();
            
            StartCoroutine(ReloadCoroutine());
        }
        else
        {
            // Simple reload without animation
            currentAmmo = maxAmmo;
            isReloading = false;
        }
    }
    
    private System.Collections.IEnumerator ReloadCoroutine()
    {
        yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        
        currentAmmo = maxAmmo;
        isReloading = false;
    }
}
```

### Environment Animations
Complete environment animation examples.

#### Interactive Object Animation
Create animations for interactive objects.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class InteractiveObjectExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset activateAnimation;
    [SerializeField] private GraphFlowAsset deactivateAnimation;
    [SerializeField] private bool isActivated = false;
    [SerializeField] private float interactionRange = 2f;
    [SerializeField] private string interactionPrompt = "Press E to interact";
    
    private GraphExecutor graphExecutor;
    private Transform player;
    private bool isInteracting = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Find player
        player = GameObject.FindGameObjectWithTag("Player")?.transform;
    }
    
    private void Update()
    {
        if (player == null) return;
        
        float distance = Vector3.Distance(transform.position, player.position);
        
        if (distance <= interactionRange)
        {
            if (Input.GetKeyDown(KeyCode.E) && !isInteracting)
            {
                Interact();
            }
        }
    }
    
    private void Interact()
    {
        isInteracting = true;
        
        if (isActivated)
        {
            Deactivate();
        }
        else
        {
            Activate();
        }
    }
    
    private void Activate()
    {
        isActivated = true;
        
        if (activateAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(activateAnimation);
            graphExecutor.Play();
        }
        
        StartCoroutine(ResetInteractionState());
    }
    
    private void Deactivate()
    {
        isActivated = false;
        
        if (deactivateAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(deactivateAnimation);
            graphExecutor.Play();
        }
        
        StartCoroutine(ResetInteractionState());
    }
    
    private System.Collections.IEnumerator ResetInteractionState()
    {
        yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        isInteracting = false;
    }
    
    private void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.yellow;
        Gizmos.DrawWireSphere(transform.position, interactionRange);
    }
}
```

#### Door Animation System
Create animated doors with different states.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;

public class DoorAnimationExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset openAnimation;
    [SerializeField] private GraphFlowAsset closeAnimation;
    [SerializeField] private GraphFlowAsset lockedAnimation;
    [SerializeField] private bool isLocked = false;
    [SerializeField] private bool isOpen = false;
    [SerializeField] private string requiredKey = "";
    
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
    
    public void TryOpen()
    {
        if (isAnimating) return;
        
        if (isLocked)
        {
            TryUnlock();
        }
        else
        {
            ToggleDoor();
        }
    }
    
    private void TryUnlock()
    {
        // Check if player has required key
        if (HasKey(requiredKey))
        {
            isLocked = false;
            ToggleDoor();
        }
        else
        {
            PlayLockedAnimation();
        }
    }
    
    private bool HasKey(string keyName)
    {
        // Check player inventory for key
        // This would integrate with your inventory system
        return true; // Placeholder
    }
    
    private void ToggleDoor()
    {
        if (isOpen)
        {
            CloseDoor();
        }
        else
        {
            OpenDoor();
        }
    }
    
    private void OpenDoor()
    {
        isAnimating = true;
        isOpen = true;
        
        if (openAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(openAnimation);
            graphExecutor.Play();
        }
        
        StartCoroutine(ResetAnimationState());
    }
    
    private void CloseDoor()
    {
        isAnimating = true;
        isOpen = false;
        
        if (closeAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(closeAnimation);
            graphExecutor.Play();
        }
        
        StartCoroutine(ResetAnimationState());
    }
    
    private void PlayLockedAnimation()
    {
        if (lockedAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(lockedAnimation);
            graphExecutor.Play();
        }
    }
    
    private System.Collections.IEnumerator ResetAnimationState()
    {
        yield return new WaitUntil(() => !graphExecutor.IsPlaying());
        isAnimating = false;
    }
}
```

### UI Gameplay Animations
Complete UI animations for gameplay elements.

#### Health Bar Animation
Create animated health bars with smooth transitions.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class HealthBarExample : MonoBehaviour
{
    [SerializeField] private Slider healthBar;
    [SerializeField] private Image healthFill;
    [SerializeField] private GraphFlowAsset damageAnimation;
    [SerializeField] private GraphFlowAsset healAnimation;
    [SerializeField] private GraphFlowAsset lowHealthAnimation;
    [SerializeField] private float lowHealthThreshold = 0.3f;
    
    private GraphExecutor graphExecutor;
    private float currentHealth = 1f;
    private float targetHealth = 1f;
    private bool isLowHealth = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        healthBar.value = currentHealth;
    }
    
    private void Update()
    {
        // Smoothly animate health bar
        if (Mathf.Abs(currentHealth - targetHealth) > 0.01f)
        {
            currentHealth = Mathf.Lerp(currentHealth, targetHealth, Time.deltaTime * 5f);
            healthBar.value = currentHealth;
            
            // Check for low health
            bool wasLowHealth = isLowHealth;
            isLowHealth = currentHealth <= lowHealthThreshold;
            
            if (isLowHealth && !wasLowHealth)
            {
                StartLowHealthAnimation();
            }
            else if (!isLowHealth && wasLowHealth)
            {
                StopLowHealthAnimation();
            }
        }
    }
    
    public void TakeDamage(float damage)
    {
        targetHealth = Mathf.Clamp01(targetHealth - damage);
        
        if (damageAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(damageAnimation);
            graphExecutor.Play();
        }
    }
    
    public void Heal(float amount)
    {
        targetHealth = Mathf.Clamp01(targetHealth + amount);
        
        if (healAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(healAnimation);
            graphExecutor.Play();
        }
    }
    
    private void StartLowHealthAnimation()
    {
        if (lowHealthAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(lowHealthAnimation);
            graphExecutor.Play();
        }
    }
    
    private void StopLowHealthAnimation()
    {
        if (graphExecutor.IsPlaying())
        {
            graphExecutor.Stop();
        }
    }
}
```

#### Score Animation System
Create animated score displays with counting effects.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;

public class ScoreAnimationExample : MonoBehaviour
{
    [SerializeField] private Text scoreText;
    [SerializeField] private GraphFlowAsset scoreIncreaseAnimation;
    [SerializeField] private GraphFlowAsset highScoreAnimation;
    [SerializeField] private float countSpeed = 10f;
    
    private GraphExecutor graphExecutor;
    private int currentScore = 0;
    private int targetScore = 0;
    private int highScore = 0;
    private bool isCounting = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        UpdateScoreDisplay();
    }
    
    private void Update()
    {
        if (isCounting)
        {
            if (currentScore < targetScore)
            {
                currentScore = Mathf.Min(targetScore, currentScore + Mathf.CeilToInt(countSpeed * Time.deltaTime));
                UpdateScoreDisplay();
            }
            else
            {
                isCounting = false;
                currentScore = targetScore;
                UpdateScoreDisplay();
            }
        }
    }
    
    public void AddScore(int points)
    {
        targetScore += points;
        isCounting = true;
        
        if (scoreIncreaseAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(scoreIncreaseAnimation);
            graphExecutor.Play();
        }
        
        // Check for high score
        if (targetScore > highScore)
        {
            highScore = targetScore;
            PlayHighScoreAnimation();
        }
    }
    
    private void PlayHighScoreAnimation()
    {
        if (highScoreAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(highScoreAnimation);
            graphExecutor.Play();
        }
    }
    
    private void UpdateScoreDisplay()
    {
        if (scoreText != null)
        {
            scoreText.text = $"Score: {currentScore}";
        }
    }
}
```

## 🎯 Advanced Gameplay Examples

### Cutscene System
Create a cutscene system with smooth transitions.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using System.Collections;
using System.Collections.Generic;

public class CutsceneSystemExample : MonoBehaviour
{
    [SerializeField] private List<CutsceneSequence> cutscenes = new List<CutsceneSequence>();
    [SerializeField] private Camera cutsceneCamera;
    [SerializeField] private Camera gameplayCamera;
    
    [System.Serializable]
    public class CutsceneSequence
    {
        public string sequenceName;
        public GraphFlowAsset animation;
        public float duration;
        public bool waitForInput;
    }
    
    private GraphExecutor graphExecutor;
    private bool isPlayingCutscene = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initially hide cutscene camera
        if (cutsceneCamera != null)
        {
            cutsceneCamera.gameObject.SetActive(false);
        }
    }
    
    public void PlayCutscene(string sequenceName)
    {
        if (isPlayingCutscene) return;
        
        CutsceneSequence sequence = cutscenes.Find(s => s.sequenceName == sequenceName);
        if (sequence == null) return;
        
        StartCoroutine(PlayCutsceneCoroutine(sequence));
    }
    
    private IEnumerator PlayCutsceneCoroutine(CutsceneSequence sequence)
    {
        isPlayingCutscene = true;
        
        // Switch to cutscene camera
        if (cutsceneCamera != null && gameplayCamera != null)
        {
            gameplayCamera.gameObject.SetActive(false);
            cutsceneCamera.gameObject.SetActive(true);
        }
        
        // Play cutscene animation
        if (sequence.animation != null)
        {
            graphExecutor.SetGraphFlowAsset(sequence.animation);
            graphExecutor.Play();
        }
        
        // Wait for duration or input
        if (sequence.waitForInput)
        {
            yield return new WaitUntil(() => Input.GetKeyDown(KeyCode.Space) || !graphExecutor.IsPlaying());
        }
        else
        {
            yield return new WaitForSeconds(sequence.duration);
        }
        
        // Switch back to gameplay camera
        if (cutsceneCamera != null && gameplayCamera != null)
        {
            cutsceneCamera.gameObject.SetActive(false);
            gameplayCamera.gameObject.SetActive(true);
        }
        
        isPlayingCutscene = false;
    }
}
```

### Achievement System
Create an achievement system with animations.

```csharp
using AnimatixPro.GraphFlow;
using UnityEngine;
using UnityEngine.UI;
using System.Collections.Generic;

public class AchievementSystemExample : MonoBehaviour
{
    [SerializeField] private GraphFlowAsset achievementAnimation;
    [SerializeField] private Text achievementText;
    [SerializeField] private Image achievementIcon;
    [SerializeField] private float displayDuration = 3f;
    
    [System.Serializable]
    public class Achievement
    {
        public string id;
        public string name;
        public string description;
        public Sprite icon;
        public bool isUnlocked;
    }
    
    [SerializeField] private List<Achievement> achievements = new List<Achievement>();
    
    private GraphExecutor graphExecutor;
    private Queue<Achievement> achievementQueue = new Queue<Achievement>();
    private bool isDisplayingAchievement = false;
    
    private void Start()
    {
        graphExecutor = GetComponent<GraphExecutor>();
        if (graphExecutor == null)
        {
            graphExecutor = gameObject.AddComponent<GraphExecutor>();
        }
        
        // Initially hide achievement UI
        if (achievementText != null)
        {
            achievementText.gameObject.SetActive(false);
        }
        if (achievementIcon != null)
        {
            achievementIcon.gameObject.SetActive(false);
        }
    }
    
    private void Update()
    {
        if (!isDisplayingAchievement && achievementQueue.Count > 0)
        {
            StartCoroutine(DisplayAchievement(achievementQueue.Dequeue()));
        }
    }
    
    public void UnlockAchievement(string achievementId)
    {
        Achievement achievement = achievements.Find(a => a.id == achievementId);
        if (achievement != null && !achievement.isUnlocked)
        {
            achievement.isUnlocked = true;
            achievementQueue.Enqueue(achievement);
        }
    }
    
    private IEnumerator DisplayAchievement(Achievement achievement)
    {
        isDisplayingAchievement = true;
        
        // Show achievement UI
        if (achievementText != null)
        {
            achievementText.text = achievement.name;
            achievementText.gameObject.SetActive(true);
        }
        if (achievementIcon != null)
        {
            achievementIcon.sprite = achievement.icon;
            achievementIcon.gameObject.SetActive(true);
        }
        
        // Play achievement animation
        if (achievementAnimation != null)
        {
            graphExecutor.SetGraphFlowAsset(achievementAnimation);
            graphExecutor.Play();
        }
        
        // Wait for display duration
        yield return new WaitForSeconds(displayDuration);
        
        // Hide achievement UI
        if (achievementText != null)
        {
            achievementText.gameObject.SetActive(false);
        }
        if (achievementIcon != null)
        {
            achievementIcon.gameObject.SetActive(false);
        }
        
        isDisplayingAchievement = false;
    }
}
```

## 🚀 Performance Optimization

### Gameplay Animation Best Practices
- **Use object pooling** for frequently animated objects
- **Limit simultaneous animations** to prevent frame drops
- **Use efficient easing curves** for smooth performance
- **Profile gameplay performance** regularly on target devices

### Mobile Considerations
- **Simplify animations** for mobile devices
- **Use lower frame rates** for complex animations
- **Optimize texture sizes** for animated objects
- **Test on actual devices** for accurate performance

## 🎉 What's Next?

Now that you understand gameplay sequences:

### **📚 Learn More**
- **[Cinematic Camera](cinematic-camera)** - Cinematic animation examples
- **[VR/AR & Mobile](vr-ar-mobile)** - VR/AR and mobile examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

### **🎯 Try These Examples**
- **[Cinematic Camera](examples/cinematic-camera)** - Complete cinematic examples
- **[VR/AR & Mobile](examples/vr-ar-mobile)** - VR/AR examples
- **[Advanced Techniques](advanced-features/triggers-conditions)** - Complex workflows

---

<div align="center">

**🎊 Gameplay Sequence mastery achieved!** You're ready to create engaging games!

**Let's explore cinematic camera!** Check out the [Cinematic Camera](cinematic-camera) guide!

</div>
