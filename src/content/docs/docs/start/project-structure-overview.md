---
title: Project Structure Overview
---

Destino uses a file-based routing system where files in the `routes` directory correspond to HTTP routes. A typical project structure looks like this:

```
my-destino-app/
├── src/
│   ├── routes/
│   │   ├── index.ts       # Handles requests to "/"
│   │   └── users.ts       # Handles requests to "/users"
│   ├── middleware/
│   │   └── auth.ts        # Authentication middleware
├── destino.config.ts       # Optional configuration file
├── package.json
└── node_modules/
```

- **src/routes**: Files in this directory are mapped to HTTP routes. For example, `src/routes/index.ts` will handle the root (`/`) route, and `src/routes/users.ts` will handle `/users`.
- **src/middleware**: Place middleware functions here and apply them globally or per route.
- **destino.config.ts**: This optional configuration file allows customization of server behavior like CORS settings, port, etc.

---
