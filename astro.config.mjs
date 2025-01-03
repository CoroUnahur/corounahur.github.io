// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  site: "https://corounahur.github.io",
  integrations: [tailwind()],
});
