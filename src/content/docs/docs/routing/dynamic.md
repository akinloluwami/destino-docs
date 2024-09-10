---
title: Dynamic Routes
---

Destino supports dynamic routes by using square brackets (`[]`) in the file names. This allows capturing parts of the URL as route parameters.

**Example:**

For a dynamic route `src/routes/users/[id].ts`:

```js
export const GET = (req, res) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
};
```

This will match requests like `/users/123` and capture `123` as `id`.
