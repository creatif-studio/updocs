---
title: Overview
sidebar_position: 1
---

# Animation
### A set of properties and helpers for high-performance, declarative animations.

Animations in Product are primarily controlled via the Frame component. The key properties are animate and transition, which take a variety of options to customize animations. All the animation properties and helpers are included when you import Frame, with the exception of useCycle. You can find all the Frame animation properties and methods here.

:::warning Please note
Product Library v0.10 and earlier used an older Animation API.
[Learn More](#).
:::

```jsx title="Code Snippet"
import * as React from "react"
import { Frame } from "framer"

export function MyComponent() {
  return (
    <Frame
      animate={{ rotate: 360 }}
      transition={{ duration: 2 }}
    />
  )
}
```

### Overview