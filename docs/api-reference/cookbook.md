---
sidebar_position: 2
title: API Cookbook
description: Practical, defensive runtime patterns for controlling Animatix Pro
keywords: [api, runtime, examples, cookbook]
---

# API Cookbook

Short, copy‑pasteable patterns for robust runtime control.

## Start / Stop with Safety

```csharp
// Guard: null checks and status checks
if (executor != null && executor.GraphAsset != null && !GraphExecutorUtil.IsPlaying("MainMenu"))
{
    GraphExecutorUtil.RunByName("MainMenu");
}
```

## Pause / Resume with Timeout Cancel

```csharp
GraphExecutorUtil.PauseByName("Intro");
StartCoroutine(CancelIfStuck("Intro", 2.0f));

IEnumerator CancelIfStuck(string name, float timeout)
{
    yield return new WaitForSeconds(timeout);
    if (GraphExecutorUtil.IsPaused(name))
    {
        GraphExecutorUtil.StopByName(name);
    }
}
```

## Subscribe to Completion

```csharp
GraphExecutorUtil.RunByName("LevelIntro", () =>
{
    // Next step
    GraphExecutorUtil.RunByName("UI_ShowHUD");
});
```

## Modify Node Params at Runtime (Safe)

```csharp
var graph = executor?.GraphAsset;
if (graph == null) yield break;
var fade = graph.Nodes.OfType<AnimationNode>().FirstOrDefault(n => n.Title == "Fade");
if (fade != null)
{
    fade.Duration = 0.5f;
    executor.RefreshGraph();
}
```

## Parallel + Sequence Composition

```csharp
// Kick two graphs in parallel, then run a third
GraphExecutorUtil.RunByName("OpenPanel");
GraphExecutorUtil.RunByName("DimBackground");
GraphExecutorUtil.RunByName("PlayWhoosh", () =>
{
    GraphExecutorUtil.RunByName("FocusTitle");
});
```

## Multi-Scene Lifecycle

```csharp
void OnDisable()
{
    GraphExecutorUtil.StopAll();
}
```

## Query Progress + Drive UI

```csharp
float p = GraphExecutorUtil.GetProgress("Loading");
progressBar.value = p;
```

## Errors to Avoid

- Null executors or unassigned `GraphAsset`
- Mutating nodes without `RefreshGraph()`
- Forgetting to stop background graphs on scene unload
- Playing the same long-running graph twice without guards


