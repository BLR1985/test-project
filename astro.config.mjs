import { defineConfig, passthroughImageService} from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  image: {
    service: passthroughImageService()
  },
  site: 'https://astro-blog-test1985.netlify.app',
  integrations: [icon({
    iconDir: "src/icons",
  }), sitemap()]
});