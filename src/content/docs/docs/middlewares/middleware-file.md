---
title: _middleware file
---

Destino also supports directory-based middleware by placing a `_middleware.ts` or `_middleware.js` file inside a folder. This middleware is automatically applied to all routes in that directory.

**Example:**

If you have the following structure:

```
src/
├── routes/
│   ├── _middleware.ts
│   ├── users/
│   │   ├── [id].ts
```

The middleware in `_middleware.ts` will apply to all routes inside the `users` folder.

```js
// src/routes/_middleware.ts
export const middleware = (req, res, next) => {
  console.log(`Request to ${req.path}`);
  next();
};
```
