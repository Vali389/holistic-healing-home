import fs from "node:fs";
import path from "node:path";

const rootDir = process.cwd();
const outputPublicDir = path.join(rootDir, ".output", "public");
const distDir = path.join(rootDir, "dist");

if (!fs.existsSync(outputPublicDir)) {
  console.error("Error: .output/public does not exist. Run vite build first.");
  process.exit(1);
}

// Clean and recreate dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Copy all assets from .output/public to dist
fs.cpSync(outputPublicDir, distDir, { recursive: true });

// Find JS and CSS entry files in dist/assets
const assetsDir = path.join(distDir, "assets");
let mainJs = "";
let mainCss = "";

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const indexJs = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
  const cssFile = files.find((f) => f.startsWith("styles-") && f.endsWith(".css"));
  if (indexJs) mainJs = `/assets/${indexJs}`;
  if (cssFile) mainCss = `/assets/${cssFile}`;
}

const htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Holistic Healing Home — Find New You, Create Happy Families</title>
    <meta name="description" content="Holistic healing, meditation, manifestation, EFT, Reiki, Pranic & Chakra healing with Nagasri Lakshmi Prakash. 4+ years of experience, 2000+ people supported." />
    <meta name="keywords" content="Holistic Healing, Personal Transformation, Self Healing, Meditation, Manifestation, EFT Tapping, Reiki Healing, Pranic Healing, Chakra Healing, Chakra Balancing, Natural Healing, Power Breathing, Emotional Wellness, Inner Peace, Stress Management, Happy Families, Nagasri Lakshmi Prakash" />
    <meta property="og:title" content="Holistic Healing Home — Transform Yourself, Transform Your Family" />
    <meta property="og:description" content="Begin your journey towards inner peace, emotional wellness and happier family relationships." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Noto+Sans+Telugu:wght@400;500;600;700&family=Noto+Serif+Telugu:wght@500;600;700&display=swap" />
    ${mainCss ? `<link rel="stylesheet" href="${mainCss}" />` : ""}
    ${mainJs ? `<script type="module" src="${mainJs}"></script>` : ""}
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`;

fs.writeFileSync(path.join(distDir, "index.html"), htmlContent, "utf-8");
fs.writeFileSync(path.join(distDir, "404.html"), htmlContent, "utf-8");
fs.writeFileSync(path.join(distDir, "200.html"), htmlContent, "utf-8");

console.log("✓ Successfully generated dist/ folder with index.html and static assets ready for deployment!");
