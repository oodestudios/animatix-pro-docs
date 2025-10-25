---
sidebar_position: 2
title: Supported Easing Curves
description: A complete reference of all supported easing curves in Animatix Pro.
---

# Supported Easing Curves

## Linear
- **Description:** Constant speed, no acceleration
- **Use Case:** Mechanical movement, simple transitions
- **Formula:** y = x

## Ease In
- **Description:** Slow start, fast finish
- **Use Case:** Natural acceleration, object falling
- **Formula:** y = x²

## Ease Out
- **Description:** Fast start, slow finish
- **Use Case:** Natural deceleration, object stopping
- **Formula:** y = 1 - (1 - x)²

## Ease In Out
- **Description:** Slow start and finish, fast middle
- **Use Case:** Most natural movement, smooth transitions
- **Formula:** y = x < 0.5 ? 2x² : 1 - 2(1 - x)²

## Ease In Back
- **Description:** Slow start with overshoot
- **Use Case:** Playful animations, bouncy effects
- **Formula:** y = x²(2.7x - 1.7)

## Ease Out Back
- **Description:** Fast start with overshoot
- **Use Case:** Dramatic exits, attention-grabbing
- **Formula:** y = 1 + (1 - x)²(2.7(1 - x) - 1.7)

## Ease In Out Back
- **Description:** Overshoot at both ends
- **Use Case:** Playful bounces, elastic effects
- **Formula:** Complex cubic function

## Bounce
- **Description:** Bouncing motion
- **Use Case:** Playful animations, elastic effects
- **Formula:** Multiple sine waves

## Elastic
- **Description:** Elastic spring motion
- **Use Case:** Spring animations, elastic effects
- **Formula:** Exponential decay with sine waves

## Custom Curves
- **Description:** User-defined animation curves
- **Use Case:** Specific timing requirements, unique effects
- **Formula:** User-defined
