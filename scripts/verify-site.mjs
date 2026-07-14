import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const htmlFiles = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
};
walk(root);

const errors = [];
const titles = new Map();
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]+)"/i)?.[1];
  if (!title) errors.push(`${file}: missing title`);
  if (!desc) errors.push(`${file}: missing description`);
  if (title) {
    if (titles.has(title) && !title.startsWith('Page not found')) errors.push(`${file}: duplicate title with ${titles.get(title)}`);
    titles.set(title, file);
  }
  for (const tag of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt="[^"]+"/i.test(tag[0])) errors.push(`${file}: image missing meaningful alt`);
  }
  for (const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const ref = match[1].split(/[?#]/)[0];
    if (!ref || ref.startsWith('/_astro/')) continue;
    const target = path.join(root, decodeURIComponent(ref));
    const candidates = [target, path.join(target, 'index.html'), `${target}.html`];
    if (!candidates.some(fs.existsSync)) errors.push(`${file}: missing local asset or route ${ref}`);
  }
}

const contact = fs.readFileSync(path.join(root, 'contact', 'index.html'), 'utf8');
if (!contact.includes('https://formspree.io/f/mnjylywy')) errors.push('contact: wrong Formspree endpoint');
if (!fs.existsSync(path.join(root, 'sitemap-index.xml'))) errors.push('missing sitemap-index.xml');
if (!fs.existsSync(path.join(root, 'robots.txt'))) errors.push('missing robots.txt');
if (!fs.existsSync(path.join(root, 'og.png'))) errors.push('missing social card');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Verified ${htmlFiles.length} HTML pages: local routes/assets, metadata, image alt text, form endpoint, sitemap, robots and social card.`);
