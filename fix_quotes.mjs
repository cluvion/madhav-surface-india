import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, 'src', 'constants', 'collectionTiles.js');

let content = fs.readFileSync(targetPath, 'utf8');

// Replace smart quotes with straight quotes
content = content.replace(/[“”]/g, '"');
content = content.replace(/[‘’]/g, "'");

fs.writeFileSync(targetPath, content, 'utf8');

console.log('Quotes fixed. Testing syntax...');

try {
  await import('file://' + targetPath + '?t=' + Date.now());
  console.log('Syntax OK!');
} catch (e) {
  console.error('Syntax error after fixing quotes:', e.message);
  console.error(e.stack);
}
