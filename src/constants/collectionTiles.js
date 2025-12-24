// Collection-specific tiles configuration for ScrollStack component
// This file defines which specific products should be displayed as tiles for each collection

export const collectionTiles = {
  bedrock: [
    { name: "Arctic Snow", id: 105 },
    { name: "Kandy Krush", id: 300 },
    { name: "Cobblestone", id: 307 },
    { name: "Black Opal", id: 303 },
    { name: "Grey Expo", id: 315 }
  ],

  pinnacle: [
    { name: "K2", id: 406 },
    { name: "Matterhorn", id: 407 },
    { name: "Kilimanjaro", id: 106 },
    { name: "Midnight Mist", id: 110 },
    { name: "Basalt Ridge", id: 112 },
    { name: "Zermatt", id: 414 },
    { name: "Viola", id: 420 },
    { name: "Udaipur Dusk", id: 107 }
  ],

  opulence: [
    { name: "Arabescato", id: 500 },
    { name: "Bianco Tiffone", id: 114 },
    { name: "Calacatta Aurica", id: 504 },
    { name: "Isabella", id: 115 },
    { name: "Masseto", id: 127 },
    { name: "Viola Fantasy", id: 547 },
    { name: "Calacatta Sunny Vogue", id: 521 } // Using Calacatta Gold as closest match
  ],

  serenity: [
    { name: "Torano", id: 605 },
    { name: "Black Caspian Gold", id: 600 },
    { name: "Elegant Grey", id: 122 },
    { name: "Blanco Massa", id: 602 },
    { name: "Rossalio", id: 121 }
  ],

  silicalite: [
    { name: "Zermatt", id: 123 },
    { name: "Silver Cascade", id: 124 },
    { name: "Glacier Cloud", id: 125 },
    { name: "Dolce Vita Lite", id: 126 }
  ]
};

// Helper function to get tiles for a specific collection
export const getTilesForCollection = (collectionName) => {
  const normalizedName = collectionName.toLowerCase().replace(/\s+/g, '');
  return collectionTiles[normalizedName] || [];
};

// Helper function to get product data for collection tiles
export const getCollectionTileProducts = (products, collectionName) => {
  const tiles = getTilesForCollection(collectionName);
  return products.filter(product =>
    tiles.some(tile => tile.id === product.id)
  );
};
