#!/usr/bin/env node

/**
 * Generates static HTML pages for each blog post and business update.
 * Each page gets:
 * - Unique title and meta tags for SEO
 * - Proper Open Graph / Twitter Card tags for social sharing
 * - JSON-LD structured data
 * - Canonical URL pointing to the correct page
 *
 * This solves the SPA problem where Google Analytics only tracked /
 * and Google couldn't differentiate blog posts in search results.
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = join(__dirname, '..');

const { getAllBlogPosts } = await import(join(ROOT, 'src/data/blog-posts/index.ts'));
const { getAllBusinessUpdates } = await import(join(ROOT, 'src/data/business-updates/index.ts'));

const BASE_URL = 'https://blumarkdcs.com';

// Read existing index.html as template
const templatePath = join(ROOT, 'index.html');
let template = readFileSync(templatePath, 'utf-8');

// Build the page generation function using template literals
function buildPage({ title, description, url, image, schemaType, datePublished, dateModified, headline }) {
  // Escape values for safe HTML embedding
  const safeTitle = title.replace(/"/g, '"').replace(/&/g, '&');
  const safeDescription = (description || '').replace(/"/g, '"').replace(/&/g, '&');
  const safeHeadline = (headline || title).replace(/"/g, '"').replace(/&/g, '&');
  const safeDatePublished = datePublished || dateModified;

  return template
    .replace(/<title>.*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"/,
      `<meta name="description" content="${safeDescription}"`
    )
    .replace(
      /<meta property="og:title" content="[^"]*"/,
      `<meta property="og:title" content="${safeTitle}"`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"/,
      `<meta property="og:description" content="${safeDescription}"`
    )
    .replace(
      /<meta property="og:url" content="[^"]*"/,
      `<meta property="og:url" content="${url}"`
    )
    .replace(
      /<meta property="og:image" content="[^"]*"/,
      `<meta property="og:image" content="${image}"`
    )
    .replace(
      /<meta property="twitter:title" content="[^"]*"/,
      `<meta property="twitter:title" content="${safeTitle}"`
    )
    .replace(
      /<meta property="twitter:description" content="[^"]*"/,
      `<meta property="twitter:description" content="${safeDescription}"`
    )
    .replace(
      /<meta property="twitter:image" content="[^"]*"/,
      `<meta property="twitter:image" content="${image}"`
    )
    .replace(
      /<meta property="twitter:url" content="[^"]*"/,
      `<meta property="twitter:url" content="${url}"`
    )
    .replace(
      /<link rel="canonical" href="[^"]*"/,
      `<link rel="canonical" href="${url}"`
    )
    .replace(
      /"@id": "https:\/\/blumarkdcs\.com"/,
      `"@id": "${url}"`
    )
    .replace(
      /"url": "https:\/\/blumarkdcs\.com"/,
      `"url": "${url}"`
    )
    .replace(
      '</head>',
      `  <!-- Article Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "${schemaType}",
    "headline": "${safeHeadline}",
    "description": "${safeDescription}",
    "image": "${image}",
    "url": "${url}",
    "datePublished": "${safeDatePublished}",
    "dateModified": "${dateModified}",
    "author": {
      "@type": "Organization",
      "name": "BlueMark Documents Clearing Services LLC"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BlueMark Documents Clearing Services LLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://blumarkdcs.com/assets/bluemark_logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "${url}"
    }
  }
  </script>
  </head>`
    );
}

// Ensure output directory exists
const pagesDir = join(ROOT, 'public', 'pages');
if (!existsSync(pagesDir)) {
  mkdirSync(pagesDir, { recursive: true });
}

let generatedCount = 0;
const today = new Date().toISOString().split('T')[0];

// ============================================================================
// Generate Blog Post Pages
// ============================================================================
const blogPosts = getAllBlogPosts();
console.log(`\nGenerating ${blogPosts.length} blog post pages...\n`);

blogPosts.forEach(post => {
  const url = `${BASE_URL}/journals/${post.id}`;
  const title = `${post.title} | BlueMark Documents Clearing Services LLC`;
  const image = post.image.startsWith('http') ? post.image : `${BASE_URL}${post.image}`;

  const page = buildPage({
    title,
    description: post.excerpt,
    url,
    image,
    schemaType: 'Article',
    headline: post.title,
    datePublished: post.date || today,
    dateModified: today
  });

  const postDir = join(pagesDir, post.id);
  if (!existsSync(postDir)) {
    mkdirSync(postDir, { recursive: true });
  }
  writeFileSync(join(postDir, 'index.html'), page);
  console.log(`  OK /journals/${post.id}/`);
  generatedCount++;
});

// ============================================================================
// Generate Business Update Pages
// ============================================================================
const businessUpdates = getAllBusinessUpdates();
console.log(`\nGenerating ${businessUpdates.length} business update pages...\n`);

businessUpdates.forEach(update => {
  const url = `${BASE_URL}/business-update/${update.id}`;
  const title = `${update.title} | BlueMark Documents Clearing Services LLC`;
  const image = update.image.startsWith('http') ? update.image : `${BASE_URL}${update.image}`;

  const page = buildPage({
    title,
    description: update.excerpt,
    url,
    image,
    schemaType: 'NewsArticle',
    headline: update.title,
    datePublished: update.date || today,
    dateModified: today
  });

  const updateDir = join(pagesDir, update.id);
  if (!existsSync(updateDir)) {
    mkdirSync(updateDir, { recursive: true });
  }
  writeFileSync(join(updateDir, 'index.html'), page);
  console.log(`  OK /business-update/${update.id}/`);
  generatedCount++;
});

console.log(`\nDone - Generated ${generatedCount} static pages`);
console.log(`Output: ${pagesDir}\n`);