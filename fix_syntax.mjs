import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, 'src', 'constants', 'collectionTiles.js');

let lines = fs.readFileSync(targetPath, 'utf8').split('\n');
let inMultilineString = false;
let modifiedLines = [];

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (!inMultilineString) {
        // Replace smart quotes for keys
        line = line.replace(/^[ \t]*[“"”]([a-zA-Z0-9_-]+)[“"”]\s*:/, (match, key) => {
            return match.replace(/[“"”]/g, '').replace(key, `"${key}"`);
        });

        // Check if there's a key and a string value starting with a quote
        const match = line.match(/^([ \t]*"[a-zA-Z0-9_-]+"\s*:\s*)[“"”](.*)$/);
        if (match) {
            let prefix = match[1];
            let rest = match[2];
            
            // Does this string close on the same line?
            // It closes if it ends with ", or ” or ”, or "
            const endsWithQuote = /[“"”],?\s*$/.test(rest);
            
            if (endsWithQuote) {
                // It closes on the same line. Replace quotes with backticks.
                let val = rest.replace(/[“"”],?\s*$/, '');
                // Escape backticks in val
                val = val.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
                
                let comma = rest.trim().endsWith(',') ? ',' : '';
                line = `${prefix}\`${val}\`${comma}`;
            } else {
                // It's a multiline string!
                inMultilineString = true;
                let val = rest;
                val = val.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
                line = `${prefix}\`${val}`;
            }
        }
    } else {
        // We are inside a multiline string
        // Does it close on this line?
        const endsWithQuote = /[“"”],?\s*$/.test(line);
        if (endsWithQuote) {
            inMultilineString = false;
            let val = line.replace(/[“"”],?\s*$/, '');
            val = val.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
            let comma = line.trim().endsWith(',') ? ',' : '';
            line = `${val}\`${comma}`;
        } else {
            // Still inside multiline string
            line = line.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
        }
    }
    
    modifiedLines.push(line);
}

fs.writeFileSync(targetPath, modifiedLines.join('\n'), 'utf8');
console.log('Fixed syntax. Testing syntax...');

try {
  await import('file://' + targetPath.replace(/\\/g, '/') + '?t=' + Date.now());
  console.log('Syntax OK!');
} catch (e) {
  console.error('Syntax error after fixing quotes:', e.message);
  console.error(e.stack);
}
