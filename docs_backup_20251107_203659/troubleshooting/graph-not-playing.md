# Graph Not Playing? Checklist

**Graph Not Playing Checklist** helps diagnose why graphs aren't executing.

## Checklist

- [ ] **GraphExecutor enabled:** GraphExecutor component is enabled
- [ ] **Graph Asset assigned:** GraphFlow Asset is assigned to GraphExecutor
- [ ] **Auto Start enabled:** Auto Start On Enable is enabled (if needed)
- [ ] **Trigger node exists:** Graph has at least one trigger node
- [ ] **Nodes connected:** Nodes are properly connected
- [ ] **GameObject active:** GameObject with GraphExecutor is active
- [ ] **Scene in Play Mode:** Scene is in Play Mode
- [ ] **No errors in console:** Check Unity Console for errors

## Common Causes

- **Missing trigger:** Graph has no trigger node
- **Missing connections:** Nodes aren't connected
- **GraphExecutor disabled:** GraphExecutor component is disabled
- **Graph Asset not assigned:** GraphFlow Asset is not assigned

## Solutions

- **Add trigger node:** Add a trigger node to the graph
- **Connect nodes:** Connect nodes properly
- **Enable GraphExecutor:** Enable GraphExecutor component
- **Assign Graph Asset:** Assign GraphFlow Asset to GraphExecutor

---

**Next:** [Node Errors](./node-errors)

