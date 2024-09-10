import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "Destino docs",
      customCss: ["./src/custom.css"],
      sidebar: [
        {
          label: "Intro",
          slug: "docs",
          collapsed: false,
        },
        {
          label: "Getting Started",
          collapsed: false,
          items: [
            "docs/start/installation",
            "docs/start/manual-setup",
            "docs/start/project-structure-overview",
          ],
        },
        {
          label: "File-based Routing",
          collapsed: false,
          items: ["docs/routing/static", "docs/routing/dynamic"],
        },
        {
          label: "Middlewares",
          collapsed: false,
          items: [
            "docs/middlewares/defining-middlewares",
            "docs/middlewares/middleware-file",
          ],
        },
        {
          label: "Configuration",
          collapsed: false,
          items: ["docs/configuration/default", "docs/configuration/custom"],
        },
      ],
    }),
  ],
});
