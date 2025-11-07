# Connection System

Connections are the **visual links between nodes** that define how your animation executes. Understanding how connections work — from simple sequential flows to complex parallel execution — is essential for building effective animation graphs.

## How Connections Work: Execution Order Representation

Connections visually represent **execution order** and **timing** in your animation graph.

**Fundamental Concept:**

- **Connections = Execution Flow** — Each connection line represents a path of execution
- **Left to Right** — Execution flows from output ports (right side of source node) to input ports (left side of target node)
- **Visual Mapping** — The graph layout directly maps to execution order

**Connection Anatomy:**

| **Element** | **Location** | **Purpose** |
|-------------|--------------|-------------|
| **Input Port** | Left side of node | Receives execution from previous node |
| **Output Port** | Right side of node | Sends execution to next node |
| **Connection Line** | Between ports | Represents execution path |

**Execution Order Rules:**

1. **Sequential Execution:** When Node A connects to Node B, Node B starts **after** Node A completes
2. **Visual Left-to-Right:** Reading the graph left-to-right shows execution order
3. **No Circular Dependencies:** Connections cannot form loops (prevents infinite execution)

*Connection anatomy — input ports receive, output ports send, connection lines represent execution flow*

**Reading Connection Flow:**

```
On Start → Fade → Scale → Rotate
```

This means:
1. `On Start` fires (trigger activates)
2. `Fade` executes (waits for trigger to complete)
3. `Scale` executes (waits for Fade to complete)
4. `Rotate` executes (waits for Scale to complete)

The connection lines make this execution order **visually obvious** at a glance.

## Sequential vs. Parallel Execution

Execution mode is determined by the `RunWithPrevious` property on animation nodes, not by the number of connections.

### Sequential Execution

When nodes are connected sequentially without `RunWithPrevious`, they execute **one after another**.

**Pattern:**
```
Node A → Node B → Node C
```

**Execution Order:**
1. Node A executes
2. Node B executes (after A completes)
3. Node C executes (after B completes)

**Use Cases:**
- **Chained animations:** Fade → Scale → Rotate sequence
- **Timed sequences:** Wait → Action → Wait → Action
- **Ordered operations:** Load → Prepare → Display

*Sequential execution — one connection path, nodes execute in order*

### Parallel Execution with RunWithPrevious

When the second node in a sequence has `RunWithPrevious` enabled, it executes **simultaneously** with the first node.

**Pattern:**
```
Node A → Node B (RunWithPrevious: true)
```

**Execution Order:**
1. Node A executes
2. Node B starts **at the same time** as Node A (because `RunWithPrevious` is enabled on B)
3. Both nodes execute concurrently (2 nodes max at once)

**Use Cases:**
- **Layered effects:** Fade + Scale simultaneously (using RunWithPrevious)
- **Synchronized animations:** Two properties animating together
- **Complex animations:** Two properties animating in parallel

*Parallel execution — sequential connections with RunWithPrevious enabled on the second node*

**Parallel Execution Details:**

| **Aspect** | **Behavior** |
|------------|--------------|
| **Start Time** | Second node starts at the same time as first node (when RunWithPrevious is enabled) |
| **Execution** | Two nodes run **concurrently**, not blocking each other |
| **Completion** | Nodes complete independently based on their durations |
| **Limitation** | Maximum 2 nodes can run in parallel at once |

**Real-World Example:**

A button click triggers two simultaneous animations using RunWithPrevious:

```
On Button Click
  → Fade In (0.5s)
  → Scale Up (0.3s, RunWithPrevious: true)    // Runs with Fade
```

Both animations start when the button is clicked and execute in parallel.

## Connection Types: Standard and Conditional Branches

Connections come in two main types: **standard** (linear flow) and **conditional** (branching logic).

### Standard Connections

Standard connections create **linear execution paths** — one node flows to the next in a straight line.

**Characteristics:**
- **Single path** — One execution route
- **Predictable** — Always follows the same path
- **Simple** — Easy to read and understand

**Pattern:**
```
Trigger → Animation → Action → Event
```

*Standard connections — linear, predictable execution paths*

### Conditional Branches

Conditional connections use **condition nodes** to evaluate conditions and control execution flow — execution continues if the condition is true, or stops if false.

**Characteristics:**
- **Single output port** — Condition node has one output port
- **Condition-based** — Evaluates conditions (e.g., "If Player Enter", "If has tag")
- **Continue or stop** — Execution continues if true, stops if false
- **Dynamic** — Execution varies based on condition evaluation

**Pattern:**
```
Trigger → Condition Node (e.g., "If Player Enter")
  ↓
  If true → Next Node
  If false → Execution stops
```

**How Conditional Branches Work:**

1. **Condition Node Evaluates:** Checks a condition (e.g., "Is Key Pressed?", "Has Tag?", "If Player Enter")
2. **Evaluation Result:** Returns true or false based on condition content
3. **Execution Flow:** If true, execution continues to the next connected node; if false, execution stops
4. **Single Path:** Only one execution path exists — continue if true, stop if false

*Conditional branches — condition nodes evaluate conditions and continue execution if true, stop if false*

**Example: Conditional Flow**

```
On Button Click → Is Bool True (Has Coin)
  ↓
  If true → Fade In (Success UI) → Play Audio (Success Sound)
  If false → Execution stops (no animation)
```

**Execution Flow:**
- If `Has Coin` is `true`: Success UI fades in, success sound plays
- If `Has Coin` is `false`: Execution stops, no animations play

**Conditional Flow Types:**

| **Flow Type** | **Structure** | **Use Case** |
|-----------------|---------------|--------------|
| **Simple Condition** | Condition → Next Node (if true) | Basic conditional logic |
| **Chained Conditions** | Condition A → Condition B → Condition C | Complex logic chains |
| **Conditional Sequences** | Condition → [If true → Animation → Condition] | Multi-level conditional sequences |

## Visual Examples: Connection Patterns

Here are common connection patterns you'll use in Animatix Pro:

### Pattern 1: Simple Sequence

```
On Start → Fade In → Scale Up → Complete
```

**Use Case:** Basic animation sequence  
**Execution:** Sequential, one-after-another

*Simple sequence — straightforward linear flow*

### Pattern 2: Parallel Effects

```
On Start
  → Fade In
  → Scale Up (RunWithPrevious: true)    // Runs with Fade
```

**Use Case:** Layered simultaneous animations  
**Execution:** Two animations start together (using RunWithPrevious)

*Parallel effects — two animations starting simultaneously using RunWithPrevious*

### Pattern 3: Conditional Branch

```
On Button Click → Is Bool True
  ↓
  If true → Show Success → Play Sound
  If false → Execution stops
```

**Use Case:** Decision-based animations  
**Execution:** Execution continues if condition is true, stops if false

*Conditional branch — condition node evaluates condition and continues execution if true*

### Pattern 4: Mixed Sequential and Parallel

```
On Start → Fade In
  → Scale Up (RunWithPrevious: true)    // Runs with Fade
     ↓
  Wait 1s
     ↓
Play Audio
```

**Use Case:** Parallel animations followed by sequential actions  
**Execution:** Fade and Scale together → Wait → Play Audio

*Mixed pattern — parallel (2 nodes) then sequential execution*

### Pattern 5: Complex Conditional Sequences

```
On Start → Condition A (e.g., "If Player Enter")
  ↓
  If true → Condition B (e.g., "If has tag")
    ↓
    If true → Path 1
    If false → Execution stops
  If false → Execution stops
```

**Use Case:** Multi-level conditional logic  
**Execution:** Chained condition nodes evaluating sequentially

*Complex conditional sequences — nested condition nodes evaluating sequentially*

## Connection Best Practices

**Organization:**

- **Visual Clarity:** Keep connections clean and avoid crossing lines when possible
- **Logical Grouping:** Group related nodes visually for easier reading
- **Clear Flow:** Maintain left-to-right flow for readability

**Performance:**

- **Parallel When Possible:** Use parallel connections for simultaneous effects (faster than sequential)
- **Avoid Deep Nesting:** Keep conditional branches shallow for performance
- **Optimize Paths:** Reduce unnecessary connections in complex graphs

**Debugging:**

- **Visual Inspection:** Read connections left-to-right to verify execution order
- **Test Condition Evaluation:** Verify execution continues when condition is true, stops when false
- **Check Timing:** Ensure parallel nodes have appropriate durations

---

> **Key Takeaways:**
>
> - **Connections = execution order** — Lines represent execution flow
> - **Sequential = one-after-another, parallel = RunWithPrevious** — Use RunWithPrevious for parallel execution (2 nodes max)
> - **Standard = linear, conditional = evaluation** — Two main connection types
> - **Visual clarity matters** — Clean connections improve readability and debugging

---

**Next:** [Parallel vs Sequential Execution](./parallel-sequential)

