#!/usr/bin/env node

import { writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import data from source files
const { SERVICES } = await import(join(__dirname, 'src/constants.ts'));
const { getAllBlogPosts } = await import(join(__dirname, 'src/data/blog-posts/index.ts'));
const { getAllBusinessUpdates } = await import(join(__dirname, 'src/data/business-updates/index.ts'));

const BASE_URL = 'https://blumarkdcs.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// Helper function to create URL entry
function createUrl(loc, priority, changefreq, lastmod = CURRENT_DATE) {
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

// Generate sitemap entries
const urls = [];

// 1. Home page
urls.push(createUrl(`${BASE_URL}/`, '1.0', 'weekly'));

// 2. Service pages
SERVICES.forEach(service => {
  urls.push(createUrl(`${BASE_URL}/service/${service.id}`, '0.9', 'monthly'));
});

// 3. Service detail pages (same as service pages in this SPA)
// Note: In this SPA, /service/:id serves both listing and detail views
// We already added them above

// 4. Application form
urls.push(createUrl(`${BASE_URL}/apply`, '0.8', 'monthly'));

// 5. Journals listing page
urls.push(createUrl(`${BASE_URL}/journals`, '0.7', 'weekly'));

// 6. Journal detail pages
const blogPosts = getAllBlogPosts();
blogPosts.forEach(post => {
  urls.push(createUrl(`${BASE_URL}/journals/${post.id}`, '0.7', 'monthly'));
});

// 7. Business updates listing page
urls.push(createUrl(`${BASE_URL}/business-updates`, '0.7', 'weekly'));

// 8. Business update detail pages
const businessUpdates = getAllBusinessUpdates();
businessUpdates.forEach(update => {
  urls.push(createUrl(`${BASE_URL}/business-update/${update.id}`, '0.7', 'monthly'));
});

// 9. About page
urls.push(createUrl(`${BASE_URL}/about`, '0.8', 'monthly'));

// 10. Contact page
urls.push(createUrl(`${BASE_URL}/contact`, '0.8', 'monthly'));

// 11. Location page
urls.push(createUrl(`${BASE_URL}/location`, '0.7', 'monthly'));

// 12. Detailed services page
urls.push(createUrl(`${BASE_URL}/detailed-services`, '0.8', 'monthly'));

// 13. Admin login (low priority, can be excluded by search engines)
urls.push(createUrl(`${BASE_URL}/admin-login`, '0.3', 'monthly'));

// Generate XML
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

// Write to file
writeFileSync(join(__dirname, 'public/sitemap.xml'), xml);
console.log(`✅ Sitemap generated with ${urls.length} URLs`);
console.log(`📁 Saved to: ${join(__dirname, 'public/sitemap.xml')}`);

// Also generate a text sitemap for reference
const textSitemap = urls.map(url => {
  const match = url.match(/<loc>(.*?)<\/loc>/);
  return match ? match[1] : '';
}).filter(Boolean).join('\n');

writeFileSync(join(__dirname, 'public/sitemap.txt'), textSitemap);
console.log(`📄 Text sitemap saved to: ${join(__dirname, 'public/sitemap.txt')}`);