# Parallel vs Sequential Execution

Understanding when to use **sequential** (one-after-another) versus **parallel** (simultaneous) execution is crucial for creating efficient, well-timed animations. This section explains the differences, use cases, and practical examples.

## Sequential: One After Another

**Sequential execution** means nodes execute **one after another** in a defined order — each node waits for the previous node to complete before starting.

**How Sequential Works:**

```
Node A → Node B → Node C
```

**Execution Timeline:**
- Node A executes (0.0s - 1.0s)
- Node B starts after A completes (1.0s - 2.0s)
- Node C starts after B completes (2.0s - 3.0s)

**Total Duration:** Sum of all node durations (e.g., 1s + 1s + 1s = 3s)

**Characteristics:**

| **Aspect** | **Behavior** |
|------------|--------------|
| **Execution Order** | Strictly sequential — one completes before next starts |
| **Timing** | Nodes execute in order, no overlap |
| **Duration** | Total time = sum of all durations |
| **Dependencies** | Each node depends on previous completion |

**When to Use Sequential:**

- **Ordered sequences:** Actions must happen in specific order
- **Dependent operations:** Later actions depend on earlier results
- **Timed pacing:** Control timing between steps
- **Resource sharing:** Avoid conflicts by executing one at a time

**Common Use Cases:**

| **Use Case** | **Example** |
|--------------|-------------|
| **Chained animations** | Fade in → Wait → Scale up → Wait → Rotate |
| **Timed sequences** | Show message → Wait 2s → Hide message |
| **Ordered operations** | Load data → Process → Display result |
| **Progressive reveals** | Reveal element 1 → Wait → Reveal element 2 → Wait → Reveal element 3 |

**Example: Sequential Flow**

```
On Button Click → Fade In (0.5s) → Wait (1s) → Scale Up (0.3s) → Wait (0.5s) → Play Audio
```

**Timeline:**
- 0.0s: Button clicked
- 0.0s - 0.5s: Fade In executes
- 0.5s - 1.5s: Wait period
- 1.5s - 1.8s: Scale Up executes
- 1.8s - 2.3s: Wait period
- 2.3s: Play Audio executes

**Total Time:** ~2.3 seconds

*Sequential execution — nodes execute one after another with no overlap*

## Parallel: Simultaneous Execution

**Parallel execution** means two nodes execute **simultaneously** using the `RunWithPrevious` property on sequential connections.

**How Parallel Works:**

```
On Start → Fade In → Scale Up (RunWithPrevious: true)
```

**Execution Timeline:**
- 0.0s: Both Fade In and Scale Up start simultaneously
- 0.3s: Scale Up completes
- 0.5s: Fade In completes

**Total Duration:** Longest node duration among parallel nodes (e.g., max(0.5s, 0.3s) = 0.5s)

**Characteristics:**

| **Aspect** | **Behavior** |
|------------|--------------|
| **Execution Order** | Simultaneous — both nodes start together (when RunWithPrevious is enabled) |
| **Timing** | Nodes execute concurrently, with overlap |
| **Duration** | Total time = longest duration among parallel nodes |
| **Dependencies** | Nodes are independent, can run simultaneously |
| **Limitation** | Maximum 2 nodes can run in parallel at once |

> 💡 **For 3+ nodes:** Use the **Trigger Relay** node for unlimited parallel execution. See [Parallel Execution Strategies](../advanced/parallel-execution) for details.

---

### Trigger Relay: Unlimited Parallel Execution (3+ Nodes)

For executing **3 or more nodes** in parallel, use the **Trigger Relay** node instead of `RunWithPrevious`.

**Trigger Relay** automatically executes all connected output nodes in parallel, supporting **unlimited parallel execution** (unlike `RunWithPrevious` which is limited to 2 nodes).

**Quick Example:**

```
On Button Click
    ↓
Trigger Relay
    ↓         ↓         ↓
Move 3D   Color Tween  Rotate 3D
```

<!-- TODO: image pending: /img/screenshots/50.trigger-relay-multiple-connections.png -->

**Result:** All three animations play simultaneously on the same object.

<!-- TODO: image pending: /img/screenshots/53.trigger-relay-parallel-execution-timeline.png -->

> 📘 **Learn More:** 
> - Full documentation: [Parallel Execution Strategies](../advanced/parallel-execution#trigger-relay-node-unlimited-parallel-execution)
> - Node details: [Trigger Relay Node](../node-types/trigger-nodes#trigger-relay-node)

---

**When to Use Parallel:**

- **Layered effects:** Multiple properties animating together
- **Independent operations:** Actions that don't depend on each other
- **Performance optimization:** Faster execution than sequential
- **Complex animations:** Two properties happening at once

**Common Use Cases:**

| **Use Case** | **Example** |
|--------------|-------------|
| **Layered animations** | Fade + Scale together (using RunWithPrevious) |
| **Synchronized effects** | Two properties animating simultaneously |
| **Complex animations** | Two properties animating in parallel |

**Example: Parallel Flow**

```
On Start
  → Fade In (0.5s)
  → Scale Up (0.3s, RunWithPrevious: true)    // Runs with Fade
```

**Timeline:**
- 0.0s: Both Fade In and Scale Up start simultaneously
- 0.3s: Scale Up completes
- 0.5s: Fade In completes

**Total Time:** ~0.5 seconds (longest duration)

*Parallel execution — nodes execute simultaneously with overlap*

## When to Use Each: Use Case Guidance

Choosing between sequential and parallel execution depends on your animation goals and requirements.

**Decision Matrix:**

| **Factor** | **Use Sequential** | **Use Parallel** |
|------------|-------------------|------------------|
| **Dependencies** | Later steps depend on earlier results | Steps are independent |
| **Timing** | Need specific delays between steps | All should happen together |
| **Performance** | No rush, willing to wait longer | Want fastest execution |
| **Visual Effect** | Progressive, step-by-step reveal | Layered, simultaneous effects |
| **Resources** | Shared resources (avoid conflicts) | Independent resources |

**Sequential Execution — Best For:**

1. **Storytelling Sequences**
   - Cutscenes with timed reveals
   - Dialogue appearing step-by-step
   - Progressive narrative pacing

2. **Ordered Operations**
   - Load → Process → Display workflows
   - Data processing pipelines
   - Sequential state changes

3. **Timed Pacing**
   - Dramatic pauses between actions
   - Build-up sequences
   - Staged reveals

4. **Resource-Sensitive Operations**
   - Shared resources that can't be accessed simultaneously
   - Memory-intensive operations
   - Thread-sensitive operations

**Parallel Execution — Best For:**

1. **Layered Visual Effects**
   - Fade + Scale together (using RunWithPrevious)
   - Multiple UI elements animating simultaneously
   - Complex multi-property animations

2. **Performance Optimization**
   - Faster overall execution
   - Independent operations that can run together
   - Efficient resource utilization

3. **Synchronized Effects**
   - Two properties animating together
   - Coordinated multi-system operations

4. **Complex Animations**
   - Two properties animating in parallel

**Combined Approach:**

You can **mix sequential and parallel** for complex sequences:

```
On Start → Fade In
  → Scale Up (RunWithPrevious: true)    // Runs with Fade
     ↓
  Wait 1s (Sequential after parallel)
     ↓
Play Audio
```

**Timeline:**
- 0.0s: Fade and Scale start (parallel)
- 0.3s: Scale completes
- 0.5s: Fade completes
- 0.5s - 1.5s: Wait period (sequential)
- 1.5s: Play Audio (sequential)

*Mixed execution — parallel followed by sequential*

## Examples: Parallel Animation Scenarios

Here are real-world examples of parallel execution in action:

**Scenario 1: Button Click Effect**

```
On Button Click
  → Fade In (0.2s)
  → Scale Up (0.15s, RunWithPrevious: true)    // Runs with Fade
```

**Result:** Button fades in and scales up simultaneously for rich, layered feedback.

**Use Case:** Enhanced button interactions with multiple simultaneous effects.

**Scenario 2: Menu Panel Entrance**

```
On Start
  → Fade In (0.5s)
  → Slide In (0.4s, RunWithPrevious: true)    // Runs with Fade
```

**Result:** Menu panel fades and slides simultaneously for polished entrance.

**Use Case:** Professional menu transitions with coordinated effects.

## Performance Considerations

**Sequential Performance:**

- **Total Time:** Sum of all durations
- **Resource Usage:** Lower peak usage (one at a time)
- **Best For:** Ordered workflows, resource-sensitive operations

**Parallel Performance:**

- **Total Time:** Longest duration among parallel nodes
- **Resource Usage:** Higher peak usage (both at once)
- **Best For:** Speed optimization, independent operations
- **Limitation:** Maximum 2 nodes can run in parallel at once

**Optimization Tips:**

| **Tip** | **When to Apply** |
|---------|-------------------|
| **Use parallel for speed** | When operations are independent |
| **Use sequential for order** | When timing matters |
| **Mix for complex sequences** | When you need both order and speed |
| **Limit parallel nodes** | Maximum 2 nodes at once |

---

> **Key Takeaways:**
>
> - **Sequential = ordered** — Nodes execute one after another
> - **Parallel = simultaneous** — Two nodes execute together (using RunWithPrevious)
> - **Choose based on goals** — Dependencies, timing, performance needs
> - **Mix when needed** — Combine both for complex sequences
> - **Performance matters** — Parallel is faster, sequential is safer
> - **Limitation** — Maximum 2 nodes can run in parallel at once (use Trigger Relay for 3+)

---

**Next:** [Node Types: Trigger Nodes](../node-types/trigger-nodes)

