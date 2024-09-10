---
title: Customizing destino.config
---

To customize your Destino server, create a `destino.config.ts` file in the root of your project.

**Example:**

```js
// destino.config.ts
export default {
  port: 4000,
  cors: {
    origin: "https://example.com",
  },
  staticFiles: {
    path: "public",
  },
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  },
};
```

- **port**: Changes the port the server runs on.
- **cors**: Customize CORS settings. By default, all origins are allowed.
- **staticFiles**: Define the directory for serving static files.
- **rateLimit**: Enable and configure rate limiting to protect your server.

After creating `destino.config.ts`, these settings will automatically apply when the server starts.
