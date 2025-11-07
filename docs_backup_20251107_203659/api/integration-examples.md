# Integration Examples

**Integration Examples** demonstrate how to integrate Animatix Pro with other Unity systems.

## Overview

**Purpose:** Examples of integrating Animatix Pro with Unity systems

**Common Integrations:**

- **UI Systems:** Integrate with Unity UI
- **Audio Systems:** Integrate with Unity Audio
- **Animation Systems:** Integrate with Animator
- **Event Systems:** Integrate with Unity Events

## Example: UI Integration

```csharp
// Trigger animation on button click
Button button = GetComponent<Button>();
button.onClick.AddListener(() => {
    GraphExecutorUtil.TriggerEventByName("ButtonClicked");
});
```

## Example: Audio Integration

```csharp
// Play audio when animation completes
GraphFlowEventHandler handler = GetComponent<GraphFlowEventHandler>();
handler.OnGraphCompleted += (executor) => {
    audioSource.Play();
};
```

## Best Practices

- Use events for decoupled integration
- Test integrations thoroughly
- Document integration patterns
- Follow Unity best practices

---

**Next:** [Best Practices: Organization](../best-practices/organization)

