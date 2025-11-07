---
sidebar_position: 4
title: Condition Nodes
description: Learn about condition nodes that add logic to your animations for decision-based flows.
---

# Condition Nodes

Condition nodes add logic to your animations, allowing them to make decisions based on game state.

## Boolean Logic
- **What it does:** Evaluates true/false conditions
- **Perfect for:** Conditional animations, state checks, decision making
- **Settings:**
  - Condition Type: What to check
  - Target Object: Object to check
  - Expected Value: What value to expect
  - Invert Result: Flip true/false result

## UI State Checks
- **What it does:** Checks UI element states
- **Perfect for:** UI interactions, button states, menu systems
- **Settings:**
  - UI Element: Which UI element to check
  - Check Type: Active, Enabled, Visible, etc.
  - Expected State: What state to expect
  - Update Frequency: How often to check

## Game State Checks
- **What it does:** Checks game variables or states
- **Perfect for:** Game logic, progress checks, conditional content
- **Settings:**
  - Variable Name: Which variable to check
  - Check Type: Equals, Greater Than, Less Than, etc.
  - Expected Value: What value to expect
  - Update Frequency: How often to check

## Setting Up Conditions

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

<!-- ![\1](\2) -->
