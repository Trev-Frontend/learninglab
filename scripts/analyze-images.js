const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath));
    } else {
      results.push(filePath);
    }
  });
  return results;
}

const publicDir = path.resolve(__dirname, '../public');
const srcDir = path.resolve(__dirname, '..');

// Find all image references in .tsx, .ts, .jsx, .js, .css
const codeFiles = getFiles(srcDir).filter(f => 
  /\.(tsx|ts|jsx|js|css)$/i.test(f) && 
  !f.includes('node_modules') && 
  !f.includes('.next') && 
  !f.includes('scripts')
);

const referencedImages = new Map();
codeFiles.forEach(cf => {
  const content = fs.readFileSync(cf, 'utf8');
  const matches = content.match(/['"`](\/(?:images|newimages|cards|illustrations)[^'"`]+)['"`]/g) || [];
  matches.forEach(m => {
    const cleanPath = m.replace(/['"`]/g, '');
    if (!referencedImages.has(cleanPath)) {
      referencedImages.set(cleanPath, []);
    }
    referencedImages.get(cleanPath).push(path.relative(srcDir, cf).replace(/\\/g, '/'));
  });
});

const imageFiles = getFiles(publicDir).filter(f => /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(f));
let totalBytes = 0;

const details = imageFiles.map(f => {
  const stat = fs.statSync(f);
  totalBytes += stat.size;
  const relFromPublic = '/' + path.relative(publicDir, f).replace(/\\/g, '/');
  const usedIn = referencedImages.get(relFromPublic) || [];
  return {
    filePath: f,
    rel: relFromPublic,
    sizeKB: Math.round(stat.size / 1024),
    bytes: stat.size,
    usedCount: usedIn.length,
    usedIn: usedIn
  };
});

details.sort((a, b) => b.bytes - a.bytes);

console.log('=== IMAGE ANALYSIS ===');
console.log(`Total image files in public: ${details.length}`);
console.log(`Total size: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB`);
console.log(`Referenced images in code: ${referencedImages.size}`);

console.log('\n--- Top 30 Largest Images ---');
details.slice(0, 30).forEach(d => {
  console.log(`${String(d.sizeKB).padStart(6)} KB | Used: ${String(d.usedCount).padStart(2)} | ${d.rel}`);
});

console.log('\n--- Unreferenced Images with large sizes (>500KB) ---');
details.filter(d => d.usedCount === 0 && d.sizeKB > 500).forEach(d => {
  console.log(`${String(d.sizeKB).padStart(6)} KB | ${d.rel}`);
});
