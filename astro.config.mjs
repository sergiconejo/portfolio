// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { settings } from "@i18n";

const { domain, defaultLang, langs } = settings;
const defaultRedirect = `/${defaultLang}`;

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    locales: langs,
    defaultLocale: defaultLang,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: true,
  site: domain,
  redirects: { [defaultRedirect]: "/" },
  build: {
    format: "file",
  },
  trailingSlash: "never",
});
