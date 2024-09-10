---
title: Defining Middlewares
---

Middlewares in Destino are Express-like functions that have access to `req`, `res`, and `next`. You can define and apply middleware globally, to specific routes, or by placing them in specific directories.

**Example of a Middleware Function**:

```js
// src/middleware/logger.ts
export const logger = (req, res, next) => {
  console.log(`Request to ${req.path}`);
  next();
};
```

To apply this middleware globally, import it in your server entry point and use it as you would in Express:

```js
import { createServer } from "destino";
import { logger } from "./middleware/logger.ts";

const app = createServer();

app.use(logger);

app.start();
```
