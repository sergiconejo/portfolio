import { settings } from "./src/i18n/i18n.ts";

console.log("Generating robots & sitemap for SEO...");

const { domain, defaultLang, langs } = settings;
const route = `${process.cwd()}/public`;
const robotsPath = `${route}/robots.txt`;
const sitemapPath = `${route}/sitemap.xml`;

const robotsContent = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
Host: ${domain}`;

const today = new Date().toISOString().split("T")[0];
const getLangUrl = (lang) =>
  lang === defaultLang ? domain : `${domain}/${lang}`;

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">

${langs
  .map((lang) => {
    const loc = getLangUrl(lang);

    return `  <url>
    <loc>${loc}</loc>
    ${langs
      .map((altLang) => {
        const altLoc = getLangUrl(altLang);
        return `<xhtml:link rel="alternate" hreflang="${altLang}" href="${altLoc}" />`;
      })
      .join("\n    ")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}" />
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>${lang === defaultLang ? "1.0" : "0.8"}</priority>
  </url>`;
  })
  .join("\n\n")}

</urlset>`;

if (await Bun.file(robotsPath).exists()) await Bun.file(robotsPath).delete();
if (await Bun.file(sitemapPath).exists()) await Bun.file(sitemapPath).delete();

await Bun.write(robotsPath, robotsContent);
await Bun.write(sitemapPath, sitemapContent);

console.log("SEO robots.txt & sitemap.xml generated at /public");
