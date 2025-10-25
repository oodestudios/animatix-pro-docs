---
sidebar_position: 2
title: API Reference Example
description: See practical examples of how to use the Animatix Pro API in your projects.
---

# API Reference Example

The AnimatixProAPIReference.cs file demonstrates common API usage patterns:

```csharp
public class AnimatixProAPIReference : MonoBehaviour
{
    [Header("Settings")]
    public string animationName = "MyAnimation";
    public bool showUI = true;

    void Update()
    {
        // SPACE - Start/Stop
        if (Input.GetKeyDown(KeyCode.Space))
        {
            if (GraphExecutorUtil.IsPlaying(animationName))
            {
                GraphExecutorUtil.StopByName(animationName);
            }
            else
            {
                StartAnimation();
            }
        }
        
        // P - Pause
        if (Input.GetKeyDown(KeyCode.P))
        {
            GraphExecutorUtil.PauseByName(animationName);
        }
        
        // R - Resume
        if (Input.GetKeyDown(KeyCode.R))
        {
            GraphExecutorUtil.ResumeByName(animationName);
        }
    }

    void StartAnimation()
    {
        // Trigger API call for OnApiCallTrigger
        TriggerApiCall();
        
        // Start animation
        GraphExecutorUtil.RunByName(animationName);
    }
}
```

![API Reference example in action](/img/api-reference/25-api-reference-example.png)
