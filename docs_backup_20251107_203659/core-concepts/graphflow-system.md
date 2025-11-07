# How the GraphFlow System Works

The GraphFlow system is built on a simple yet powerful concept: **visual flowchart logic for animations**.

## Flowchart Concept: Nodes & Connections

Think of your animation graph as a **flowchart** where:

- **Nodes** = Individual actions or operations
- **Connections** = Timing and execution order
- **Flow Direction** = Left to right (output → input)

Each node performs one task — trigger, delay, condition, or action. Connections between nodes determine **when** and **in what order** these actions execute.


*GraphFlow system visualized as a flowchart — nodes represent actions, connections define timing and order*

**Fundamental Rules:**

| **Element** | **Represents** | **Example** |
|-------------|----------------|-------------|
| **Node** | A single action or operation | "Fade In", "Wait 2 Seconds", "Play Sound" |
| **Connection** | Execution order and timing | Link from "On Start" → "Fade" means "When scene starts, then fade" |
| **Flow Direction** | Execution sequence | Always flows from left (output) to right (input) |

## Standard Flow Pattern

The GraphFlow system follows a predictable execution pattern:

```
Trigger → Animation → Action → Event
```

**Breaking Down Each Stage:**

**1. Trigger** 🟧 (Start Point)

- Initiates the animation sequence
- Examples: `On Start`, `On Button Click`, `On Key Press`
- No input connections needed — triggers are entry points
- Can connect to animation nodes that use `RunWithPrevious` for parallel execution

**2. Animation** 🟩 (Visual Effect)

- Performs the actual visual animation
- Examples: `Fade`, `Move`, `Scale`, `Rotate`, `Slide`
- Takes input from Trigger or previous Animation node
- Can chain multiple Animation nodes sequentially

**3. Action** 🟦 (System Operation)

- Executes non-visual operations
- Examples: `Play Audio`, `Log Message`, `Set Active`, `Load Scene`
- Executes after Animation completes (or in parallel)
- Optional stage — not all flows need Actions

**4. Event** 🟪 (Callback/Completion)

- Handles completion or custom callbacks
- Examples: `Event Node` with automatic listener management
- Often used to trigger other systems or notify completion
- Optional stage — useful for complex workflows

**Visual Flow Example:**


*Standard flow: Trigger → Animation → Action → Event*

## Key Principles

Understanding these core principles will help you build effective and efficient animations:

### Principle 1: Nodes as Actions

Every node represents a **single, atomic action**. This design keeps graphs clear, modular, and easy to understand.

**Characteristics:**

- Each node does **one thing** well
- Nodes are **reusable** — same node type can be used multiple times
- Nodes are **configurable** — properties customize behavior without creating new node types
- Nodes are **independent** — no hidden dependencies between nodes

**Example:**

Instead of a single "Complex Animation" node, you use:
- `Fade` node for transparency
- `Scale` node for size
- `Rotate` node for rotation

This modularity gives you **complete control** and **maximum flexibility**.

> **Design Philosophy:**
>
> GraphFlow encourages **modular thinking** — small, reusable nodes that you can combine to create complex behavior visually. This design allows you to build sophisticated animations from simple, composable building blocks.

### Principle 2: Connections as Timing

Connections define **when** actions execute, not just the order.

**Timing Rules:**

| **Connection Type** | **Timing Behavior** |
|---------------------|---------------------|
| **Sequential Connection** | Node B starts **after** Node A completes |
| **Parallel Connection** | Multiple nodes start **simultaneously** from the same output |
| **Conditional Connection** | Node B starts only **if** condition in Node A is true |

**Example Scenarios:**

- **Sequential:** `On Start → Wait 2s → Fade In` (waits 2 seconds, then fades)
- **Parallel:** `On Start` connects to both `Fade In` and `Play Audio` (both start simultaneously)
- **Conditional:** `If Condition → Fade In` (fades only if condition is met)


*Different timing patterns: sequential (top), parallel (middle), and conditional (bottom)*

### Principle 3: Directional Flow

GraphFlow uses **unidirectional flow** — execution always moves from left to right (output port to input port).

**Why This Matters:**

- **Predictable execution** — you always know the order
- **Clear visual flow** — easy to read and understand
- **No circular dependencies** — prevents infinite loops
- **Easy debugging** — execution path is visually obvious

**Flow Rules:**

- **Input ports** (left side) = Receives execution from previous nodes
- **Output ports** (right side) = Sends execution to next nodes
- **Parallel execution** = Use `RunWithPrevious` property on sequential connections (2 nodes max at once)
- **Multiple inputs** = Not allowed for execution ports (prevents ambiguity)


*Directional flow: always left to right, from output port to input port*

### Principle 4: Parallel Execution

Two nodes can execute **simultaneously** using the `RunWithPrevious` property on sequential connections.

**Parallel Execution Benefits:**

- **Efficiency** — animate two properties at once
- **Layered effects** — combine Fade + Scale simultaneously
- **Complex animations** — orchestrate multiple properties in sync
- **Performance** — parallel animations don't block each other

**How It Works:**

Parallel execution uses sequential connections with `RunWithPrevious` enabled on the second node:

```
On Start
  → Fade In (0 to 1)
  → Scale (0.5 to 1.0, RunWithPrevious: true)    // Runs with Fade
```

The second animation (Scale) runs simultaneously with the first (Fade) because `RunWithPrevious` is enabled.

**Parallel vs. Sequential:**

| **Pattern** | **When to Use** | **Example** |
|-------------|-----------------|-------------|
| **Sequential** | Actions must happen in order | Wait for dialogue → Fade in menu → Play sound |
| **Parallel** | Two actions can happen simultaneously | Fade + Scale together for layered effect (using RunWithPrevious) |


*Parallel execution: sequential connections with RunWithPrevious enabled on the second node*

## Execution Model

Understanding how GraphFlow executes your animation graph:

**Execution Stages:**

1. **Initialization:** GraphFlow loads and prepares all nodes
2. **Trigger Activation:** Trigger node fires (e.g., scene starts, button clicked)
3. **Node Execution:** Connected nodes execute in defined order
4. **Parallel Processing:** Multiple nodes execute simultaneously when connected from same output
5. **Completion:** Animation sequence completes, optional events fire

**Execution Guarantees:**

- **Ordered Execution:** Sequential connections always execute in order
- **Synchronous Start:** Parallel connections start at the exact same frame
- **Frame-Perfect Timing:** No frame drops or timing drift
- **Resource Management:** Nodes clean up resources automatically

> **Performance Note:** GraphFlow executes lightweight coroutines optimized for frame-perfect timing. Even large graphs (100+ nodes) run efficiently due to parallelized node processing and lazy resource cleanup.

---

> **Key Takeaways:**
>
> - **Nodes = actions** — Each node performs one specific operation
> - **Connections = timing** — Links define when actions execute
> - **Always flow left → right** — Execution moves from output to input ports
> - **Use sequential for order, parallel for sync** — Choose based on timing needs

---

**Next:** [Graph Structure](./graph-structure)

