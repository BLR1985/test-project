import { defineConfig, passthroughImageService} from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  image: {
    service: passthroughImageService()
  },
  site: 'http://localhost:4321',
  integrations: [icon({
    iconDir: "src/icons",
  }), sitemap()]
});