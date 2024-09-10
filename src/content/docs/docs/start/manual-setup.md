---
title: Manual Setup
---

If you prefer not to use the CLI and want to manually set up a project, follow these steps:

1. **Install dependencies**:

   ```bash
   npm install destino express
   ```

2. **Create a basic folder structure**:

   ```bash
   ├── src
   │   ├── routes
   │   │   ├── index.ts
   │   ├── middleware
   ├── destino.config.ts
   └── package.json
   ```

3. **Define your server in `src/routes/index.ts`**:

   ```js
   export const GET = (req, res) => {
     res.json({ message: "Hello from Destino!" });
   };
   ```

4. **Run the server**:
   Add a start script in `package.json`:

   ```json
   "scripts": {
     "start": "destino start"
   }
   ```

   Start the server:

   ```bash
   npm start
   ```

---
