const fs = require('fs');
let content = fs.readFileSync('src/constants/collectionTiles.js', 'utf8');
// Fix unquoted "Staircases & Tabletops" in useCase array
content = content.replace(
  /Staircases & Tabletops\]/g,
  '"Staircases & Tabletops"]'
);
fs.writeFileSync('src/constants/collectionTiles.js', content);
console.log('Fix applied successfully.');
