---
sidebar_position: 1
---

# Using Events & Actions

## Adding Trigger Nodes

Trigger nodes are the starting points of your animations. They detect when something happens and start the animation sequence.

### On Start Trigger
- **When it fires**: Automatically when the scene begins
- **Perfect for**: Auto-playing animations, scene initialization
- **Settings**:
  - Startup Delay: Wait time before firing (prevents false triggers)
  - Fire Once: Only trigger once per scene

### On Button Click Trigger
- **When it fires**: When a UI button is pressed
- **Perfect for**: Interactive UI, menu systems, user input
- **Settings**:
  - Target Button: Which button to monitor
  - Fire Once: Only trigger once per click
  - Reset on Scene Change: Reset trigger state

### On Key Press Trigger
- **When it fires**: When a specific key is pressed
- **Perfect for**: Keyboard shortcuts, debug controls, alternative input
- **Settings**:
  - Key Code: Which key to monitor (Space, Enter, etc.)
  - Fire Once: Only trigger once per press
  - Startup Delay: Wait time before monitoring

### On Collision Trigger
- **When it fires**: When objects collide
- **Perfect for**: Physics-based triggers, interaction systems
- **Settings**:
  - Collision Layer: Which layers to detect
  - Collision Type: Enter, Exit, or Stay
  - Target Object: Specific object to collide with

### On Timer Trigger
- **When it fires**: After a specific time delay
- **Perfect for**: Timed sequences, delayed actions, scheduled events
- **Settings**:
  - Timer Duration: How long to wait
  - Fire Once: Only trigger once
  - Loop: Repeat the timer

### On API Call Trigger
- **When it fires**: When called from code
- **Perfect for**: Programmatic triggers, custom events
- **Settings**:
  - Trigger Name: Identifier for the trigger
  - Fire Once: Only trigger once per call
  - Reset Method: How to reset the trigger

### Setting Up Triggers:

1. **Add Trigger Node**
   - Right-click in GraphFlow Editor
   - Add Node → Trigger → [Trigger Type]
   - Configure settings in Inspector

2. **Connect to Animation**
   - Drag from trigger's output port
   - Connect to animation node's input port
   - Set up the animation sequence

3. **Test the Trigger**
   - Press Play in Unity
   - Trigger the condition (click button, press key, etc.)
   - Watch the animation play

<!-- ![Screenshot Placeholder: Trigger node settings in Inspector](/static/img/events-actions/21.png) -->

## Action Nodes

Action nodes perform side effects during your animations. They don't create visual effects but trigger other systems.

### Log Message Action
- **What it does**: Prints messages to the console
- **Perfect for**: Debugging, development testing, status updates
- **Settings**:
  - Message: Text to display
  - Log Type: Log, Warning, or Error
  - Show Timestamp: Include time information

### Set Active Action
- **What it does**: Shows or hides GameObjects
- **Perfect for**: UI state changes, object management, scene control
- **Settings**:
  - Target Object: GameObject to control
  - Set Active: True (show) or False (hide)
  - Toggle Mode: Toggle current state
  - Delay: Wait before changing state

### Play Audio Action
- **What it does**: Plays sound effects or music
- **Perfect for**: Audio feedback, sound effects, music triggers
- **Settings**:
  - Audio Source: AudioSource component to use
  - Audio Clip: Sound file to play
  - Volume: Loudness (0.0 to 1.0)
  - Pitch: Speed/tone (0.1 to 3.0)
  - Loop: Repeat continuously
  - Stop Previous: Stop other sounds first

### Play Animation Action
- **What it does**: Triggers other animations or systems
- **Perfect for**: Chained effects, complex sequences, system integration
- **Settings**:
  - Animation Name: Name of animation to trigger
  - Wait for Completion: Wait for animation to finish
  - Loop Animation: Repeat the animation
  - Animation Speed: Speed multiplier

### Wait Action
- **What it does**: Pauses execution for a specific time
- **Perfect for**: Timing control, pacing, delays between actions
- **Settings**:
  - Wait Duration: How long to wait (seconds)
  - Wait Mode: Fixed time or until condition
  - Can Be Interrupted: Allow early termination

### Trigger Animation Action
- **What it does**: Starts other GraphFlow animations
- **Perfect for**: Complex sequences, branching animations, system integration
- **Settings**:
  - Target Graph: GraphFlow Asset to trigger
  - Wait for Completion: Wait for animation to finish
  - Loop Animation: Repeat the animation
  - Animation Speed: Speed multiplier

### Setting Up Actions:

1. **Add Action Node**
   - Right-click in GraphFlow Editor
   - Add Node → Action → [Action Type]
   - Configure settings in Inspector

2. **Connect to Animation**
   - Drag from animation node's output port
   - Connect to action node's input port
   - Set up the action sequence

3. **Test the Action**
   - Press Play in Unity
   - Trigger the animation
   - Verify the action executes

<!-- ![Screenshot Placeholder: Action node settings in Inspector](/static/img/events-actions/22.png) -->

## Event Nodes

Event nodes integrate with Unity's event system, allowing you to trigger custom events that other systems can listen to.

### UnityEvent Integration
- **What it does**: Fires Unity Events when triggered
- **Perfect for**: System integration, custom events, external triggers
- **Settings**:
  - Event Name: Identifier for the event
  - Fire On Start: Trigger automatically when node starts
  - Auto Preview: Test the event in editor
  - Preview Delay: Wait time before preview

### Parameterized Events
- **What it does**: Sends data with the event
- **Perfect for**: Complex event systems, data passing, state changes
- **Settings**:
  - Use Parameters: Enable parameter passing
  - Parameter Type: String, Integer, Float, or Boolean
  - Parameter Value: Data to send with event
  - Event Name: Identifier for the event

### Event Listeners
- **What it does**: Responds to events from other systems automatically
- **Perfect for**: Event-driven architecture, system communication
- **Settings**:
  - Event Name: Which event to listen for
  - Fire Once: Only respond once per event
  - Reset on Scene Change: Reset listener state
  - Automatic Setup: Listeners are created automatically by the Event Manager

### Setting Up Events:

1. **Add Event Node**
   - Right-click in GraphFlow Editor
   - Add Node → Event → [Event Type]
   - Configure settings in Inspector

2. **Event Listeners Created Automatically**
   - The Event system automatically creates listeners
   - No manual listener setup required
   - Events are handled by the Event Manager automatically

3. **Test the Event**
   - Press Play in Unity
   - Trigger the event
   - Verify the event system responds automatically

<!-- ![Screenshot Placeholder: Event node settings in Inspector](/static/img/events-actions/23.png) -->

## Condition Nodes

Condition nodes add logic to your animations, allowing them to make decisions based on game state.

### Boolean Logic
- **What it does**: Evaluates true/false conditions
- **Perfect for**: Conditional animations, state checks, decision making
- **Settings**:
  - Condition Type: What to check
  - Target Object: Object to check
  - Expected Value: What value to expect
  - Invert Result: Flip true/false result

### UI State Checks
- **What it does**: Checks UI element states
- **Perfect for**: UI interactions, button states, menu systems
- **Settings**:
  - UI Element: Which UI element to check
  - Check Type: Active, Enabled, Visible, etc.
  - Expected State: What state to expect
  - Update Frequency: How often to check

### Game State Checks
- **What it does**: Checks game variables or states
- **Perfect for**: Game logic, progress checks, conditional content
- **Settings**:
  - Variable Name: Which variable to check
  - Check Type: Equals, Greater Than, Less Than, etc.
  - Expected Value: What value to expect
  - Update Frequency: How often to check

### Setting Up Conditions:

1. **Add Condition Node**
   - Right-click in GraphFlow Editor
   - Add Node → Condition → [Condition Type]
   - Configure settings in Inspector

2. **Set Up Conditional Flow**
   - Connect from condition node
   - Create branches for true/false results
   - Set up different animations for each branch

3. **Test the Condition**
   - Press Play in Unity
   - Change the condition state
   - Verify correct branch executes

<!-- ![Screenshot Placeholder: Condition node settings in Inspector](/static/img/events-actions/24.png) -->
