/**
 * Runs after the build. For every content image in dist/assets it writes WebP copies at a few
 * widths (name-480.webp, name-960.webp, name-1440.webp) that components serve via <picture>/srcset,
 * so phones download a ~40 KB file instead of a 1–2 MB JPG. Originals stay as the fallback.
 * (The hero portrait's 384/768 px versions live in public/assets so the dev server has them too.)
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const assets = path.join(root, 'dist/assets');

export const CARD_WIDTHS = [480, 960, 1440];
const SKIP = /^(android-chrome|maskable-icon|apple-touch-icon|favicon|mstile|blue-o)/;

async function pool(items, size, worker) {
  const queue = [...items];
  await Promise.all(Array.from({ length: size }, async () => {
    while (queue.length) await worker(queue.shift());
  }));
}

const files = (await fs.readdir(assets)).filter((file) => /\.(jpe?g|png)$/i.test(file) && !SKIP.test(file));
let before = 0;
let after = 0;

await pool(files, 4, async (file) => {
  const input = path.join(assets, file);
  const base = file.replace(/\.(jpe?g|png)$/i, '');
  before += (await fs.stat(input)).size;
  for (const width of CARD_WIDTHS) {
    const output = path.join(assets, `${base}-${width}.webp`);
    const info = await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 76, effort: 4 }).toFile(output);
    if (width === 960) after += info.size;
  }
});

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`;
console.log(`🖼  ${files.length} images: originals ${mb(before)} -> 960px WebP ${mb(after)} (+ 480 and 1440 px sizes)`);
