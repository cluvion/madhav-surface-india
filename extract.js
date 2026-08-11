const fs = require('fs');
const content = fs.readFileSync('src/constants/collectionTiles.js', 'utf8');
const products = [
    'Blue Deep', 'Crystalita Blue', 'Megma', 'Volupia Maestro', 'Laguna Crystal', 
    'Crystal Soulages', 'Crystallo Classico', 'Pandora White', 'Brown Fantasy', 
    'Panda White', 'Statuario Extra', 'Astoria', 'Colonial White'
];

const results = products.map(p => {
    // Look for a block that has `name: 'p'` or similar.
    // The id and image might be above or below it.
    let idMatch, imageMatch;
    
    const blockRegex = new RegExp(`{[^{}]*?name:\\s*['"\`]${p}['"\`][^{}]*?}`, 's');
    const match = content.match(blockRegex);
    if (match) {
        const block = match[0];
        const idRegex = /id:\s*['"`](.*?)['"`]/;
        const imageRegex = /image:\s*['"`](.*?)['"`]/;
        
        idMatch = block.match(idRegex);
        imageMatch = block.match(imageRegex);
        
        return {
            name: p,
            id: idMatch ? idMatch[1] : null,
            image: imageMatch ? imageMatch[1] : null
        };
    }
    return { name: p, error: 'Not found in single block regex, trying wider regex' };
});

console.log(JSON.stringify(results, null, 2));
