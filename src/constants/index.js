// All products - flat list combining regular-tiles and granite-slabs collections
// Source images from CDN: https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master

import { collectionTiles } from './collectionTiles';

export const products = [
  ...collectionTiles['regular-tiles'],
  ...collectionTiles['granite-slabs'],
];
