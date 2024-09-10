---
title: Static Routes
---

In Destino, static routes are simply files in the `routes` folder. The name of the file corresponds to the path of the route.

**Example:**

For a file `src/routes/about.ts`:

```js
export const GET = (req, res) => {
  res.send("About Page");
};
```

This will map to the `/about` route, and the function defined in `GET` will handle `GET` requests to `/about`.
