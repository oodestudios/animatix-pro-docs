# Trigger Relay Documentation Images - Naming Guide

This document maps the image filenames used in the documentation to descriptive names you should use when saving/uploading images to Google Drive.

## Image Mapping Table

| **Documentation Filename** | **Google Drive Name (Use This)** | **Location in Docs** | **What It Should Show** |
|----------------------------|-----------------------------------|----------------------|-------------------------|
| `49-trigger-relay-node-in-editor.png` | `49-trigger-relay-node-in-editor.png` | `docs/advanced/parallel-execution.md`<br>`docs/node-types/trigger-nodes.md` | GraphFlow Editor showing Trigger Relay node (purple header) positioned between a Trigger node and multiple animation nodes. Should clearly show the node's visual appearance in the editor. |
| `50-trigger-relay-multiple-connections.png` | `50-trigger-relay-multiple-connections.png` | `docs/advanced/parallel-execution.md`<br>`docs/core-concepts/parallel-sequential.md`<br>`docs/node-types/trigger-nodes.md` | GraphFlow Editor showing: **On Button Click** → **Trigger Relay** → **[Move 3D, Color Tween, Rotate 3D]** with all three connection lines clearly visible. This is the main example graph. |
| `51-trigger-relay-inspector.png` | `51-trigger-relay-inspector.png` | `docs/node-types/trigger-nodes.md` | Inspector panel (right side) showing Trigger Relay node properties: Title field, connection count display, and any other visible properties. |
| `52-runwithprevious-vs-trigger-relay-comparison.png` | `52-runwithprevious-vs-trigger-relay-comparison.png` | `docs/advanced/parallel-execution.md` | Side-by-side comparison: **Left side** shows RunWithPrevious method (2 nodes max), **Right side** shows Trigger Relay method (unlimited nodes). Should visually demonstrate the difference. |
| `53-trigger-relay-parallel-execution-timeline.png` | `53-trigger-relay-parallel-execution-timeline.png` | `docs/core-concepts/parallel-sequential.md` | Timeline diagram showing all three animations (Move 3D, Color Tween, Rotate 3D) starting simultaneously at 0.0s. Horizontal timeline with bars showing parallel execution. |
| `54-trigger-relay-same-object-animation.gif` | `54-trigger-relay-same-object-animation.gif` | `docs/advanced/parallel-execution.md` | **Animated GIF** showing a cube/object simultaneously: moving, changing color, and rotating. All three animations playing at once on the same object. Should be a short loop (2-3 seconds). |

## Quick Reference: What Each Image Shows

### Image 49: Trigger Relay Node in Editor
- **Focus:** The Trigger Relay node itself
- **Context:** Show it in the GraphFlow Editor canvas
- **Key Elements:** Node header, icon, position in graph

### Image 50: Multiple Connections (Main Example)
- **Focus:** The complete example graph
- **Context:** Full graph from trigger to all three animations
- **Key Elements:** All connection lines visible, node labels readable

### Image 51: Inspector Panel
- **Focus:** Trigger Relay properties in Inspector
- **Context:** Unity Inspector window
- **Key Elements:** Title field, any visible properties

### Image 52: Comparison Diagram
- **Focus:** RunWithPrevious vs Trigger Relay
- **Context:** Side-by-side visual comparison
- **Key Elements:** Clear visual distinction between 2-node limit vs unlimited

### Image 53: Timeline Diagram
- **Focus:** Parallel execution timeline
- **Context:** Horizontal timeline visualization
- **Key Elements:** All animations starting at same time, duration bars

### Image 54: Animation GIF
- **Focus:** Live demonstration of parallel execution
- **Context:** Game view or Scene view showing animated object
- **Key Elements:** Object moving, color changing, rotating simultaneously

## Instructions for Google Drive Upload

1. **Name your files exactly as shown in "Google Drive Name" column**
2. **Keep the number prefix (49, 50, 51, etc.)** - this matches the documentation numbering
3. **Use the exact filename** - I'll match them automatically when downloading
4. **For the GIF (54):** Make sure it's a proper animated GIF, not a static image

## After Upload

Once you share the Google Drive folder, I will:
1. Download all images matching these filenames
2. Place them in `static/img/screenshots/`
3. Verify they display correctly in the documentation

---

**Note:** The documentation already has placeholders for these images. Once the images are added to `static/img/screenshots/`, they will automatically appear in the docs.

