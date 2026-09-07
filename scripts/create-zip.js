const fs = require('fs');
const path = require('path');
const { ZipArchive } = require('archiver');

const outDir = path.resolve(__dirname, '..', 'out');
const zipPath = path.resolve('C:\\Users\\Hp\\OneDrive\\Documents\\Antigravity\\learninglab_hostinger_build.zip');

console.log('Source directory:', outDir);
console.log('Output zip file:', zipPath);

if (fs.existsSync(zipPath)) {
  try {
    fs.unlinkSync(zipPath);
    console.log('Existing zip deleted.');
  } catch (e) {
    console.warn('Could not delete existing zip:', e.message);
  }
}

const output = fs.createWriteStream(zipPath);
const archive = new ZipArchive({
  zlib: { level: 6 },
});

output.on('close', () => {
  const sizeMb = (archive.pointer() / 1024 / 1024).toFixed(2);
  console.log(`Successfully created zip: ${sizeMb} MB (${archive.pointer()} bytes)`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

function walk(dir, relPath = '') {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullItemPath = path.join(dir, item);
    const itemRelPath = relPath ? `${relPath}/${item}` : item;
    const stat = fs.statSync(fullItemPath);

    if (stat.isDirectory()) {
      archive.append(null, {
        name: `${itemRelPath}/`,
        mode: 0o755,
      });
      walk(fullItemPath, itemRelPath);
    } else {
      archive.file(fullItemPath, {
        name: itemRelPath,
        mode: 0o644,
      });
    }
  }
}

walk(outDir);

archive.finalize();
