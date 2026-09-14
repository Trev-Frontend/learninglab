// scripts/optimize-images.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const BACKUP_DIR = path.join(PROJECT_ROOT, '.image_backup');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

ensureDir(BACKUP_DIR);

function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(filePath));
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      results.push(filePath);
    }
  });
  return results;
}

const images = getAllImages(PUBLIC_DIR);
let totalOriginal = 0;
let totalOptimized = 0;
let processed = 0;

(async () => {
  for (const imgPath of images) {
    const rel = path.relative(PUBLIC_DIR, imgPath);
    const backupPath = path.join(BACKUP_DIR, rel);
    ensureDir(path.dirname(backupPath));
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(imgPath, backupPath);
    }
    const { size: origSize } = fs.statSync(imgPath);
    totalOriginal += origSize;
    try {
      const image = sharp(imgPath);
      const metadata = await image.metadata();
      let pipeline = image.clone();
      const MAX_DIM = 1200; // max width or height
      if (metadata.width && metadata.width > MAX_DIM) {
        pipeline = pipeline.resize({ width: MAX_DIM, withoutEnlargement: true });
      } else if (metadata.height && metadata.height > MAX_DIM) {
        pipeline = pipeline.resize({ height: MAX_DIM, withoutEnlargement: true });
      }
      if (metadata.format === 'jpeg') {
        pipeline = pipeline.jpeg({ quality: 82, progressive: true, mozjpeg: true });
      } else if (metadata.format === 'png') {
        pipeline = pipeline.png({ compressionLevel: 9, quality: 85, adaptiveFiltering: true });
      }
      await pipeline.toFile(imgPath + '.opt');
      const optStat = fs.statSync(imgPath + '.opt');
      totalOptimized += optStat.size;
      fs.renameSync(imgPath + '.opt', imgPath);
      processed++;
      console.log(`Optimized: ${rel} (${(origSize/1024).toFixed(1)}KB -> ${(optStat.size/1024).toFixed(1)}KB)`);
    } catch (e) {
      console.error(`Failed to process ${rel}:`, e.message);
    }
  }
  console.log('\n=== Summary ===');
  console.log(`Processed ${processed}/${images.length} images`);
  console.log(`Total original size: ${(totalOriginal/1024/1024).toFixed(2)} MB`);
  console.log(`Total optimized size: ${(totalOptimized/1024/1024).toFixed(2)} MB`);
  console.log(`Reduction: ${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}%`);
})();
