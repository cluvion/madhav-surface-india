// Collection-specific tiles configuration for ScrollStack component
// This file defines which specific products should be displayed as tiles for each collection

const BASE_URL = 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master';

export const collectionTiles = {
  //   'regular-tiles': [
  //     {
  //       id: 'rt-001',
  //       name: 'Amba White',
  //       image: '/assets/regular-tiles/AMBAWHITE-1.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/AMBAWHITE-1.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'A classic and versatile white granite featuring delicate grey and black speckles, perfect for creating bright, elegant spaces.',
  //       longDescription: `Amba White is an elegant premium quality Indian granite renowned for its crisp white background adorned with beautiful grey and black speckles. This exquisite natural stone brings a sense of light and spaciousness to any environment.\n\nMined and processed with state-of-the-art technology, Amba White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.\n\nWhether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Amba White granite delivers both aesthetic appeal and long-lasting performance.`,
  //       color: 'White',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India',
  //       tags: ['granite', 'natural', 'premium', 'white', 'durable']
  //     },
  //     {
  //       id: 'rt-002',
  //       name: 'Bengal White',
  //       image: '/assets/regular-tiles/BENGALWHITE-1.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/BENGALWHITE-1.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Bengal White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Bengal White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Bengal White delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-003',
  //       name: 'Black Forest',
  //       image: '/assets/regular-tiles/BLACKFOREST-1.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/BLACKFOREST-1.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Black Forest is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Black Forest offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Black Forest delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-004',
  //       name: 'Black Galaxy',
  //       image: '/assets/regular-tiles/BLACKGALAXY.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/BLACKGALAXY.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Black Galaxy is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Black Galaxy offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Black Galaxy delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-005',
  //       name: 'Coffee Brown',
  //       image: '/assets/regular-tiles/COFFEEBROWN.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/COFFEEBROWN.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Coffee Brown is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Coffee Brown offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Coffee Brown delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-006',
  //       name: 'Absolute Black',
  //       image: '/assets/regular-tiles/absolute-black-1.png',
  //       thumbnailImages: ['/assets/regular-tiles/absolute-black-1.png'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Absolute Black is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Absolute Black offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Absolute Black delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-007',
  //       name: 'Colombo Juprana',
  //       image: '/assets/regular-tiles/colombo-juprana.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/colombo-juprana.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Colombo Juprana is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Colombo Juprana offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Colombo Juprana delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-008',
  //       name: 'Indian Dakota',
  //       image: '/assets/regular-tiles/indian-dakota.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/indian-dakota.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Indian Dakota is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Indian Dakota offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Indian Dakota delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-009',
  //       name: 'Ivory Brown',
  //       image: '/assets/regular-tiles/ivorybrown.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/ivorybrown.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Ivory Brown is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Ivory Brown offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Ivory Brown delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-010',
  //       name: 'Ivory Fantasy',
  //       image: '/assets/regular-tiles/ivoryfantasy.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/ivoryfantasy.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Ivory Fantasy is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Ivory Fantasy offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Ivory Fantasy delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-011',
  //       name: 'Kashmir Cream',
  //       image: '/assets/regular-tiles/kashmir-cream.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/kashmir-cream.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Kashmir Cream is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Kashmir Cream offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Kashmir Cream delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-012',
  //       name: 'Kashmir White',
  //       image: '/assets/regular-tiles/kashmir-white.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/kashmir-white.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Kashmir White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Kashmir White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Kashmir White delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-013',
  //       name: 'Multi Color',
  //       image: '/assets/regular-tiles/multi-color.png',
  //       thumbnailImages: ['/assets/regular-tiles/multi-color.png'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Multi Color is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Multi Color offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Multi Color delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-014',
  //       name: 'New Kashmir Cream',
  //       image: '/assets/regular-tiles/new-kashmir-cream-calibrated-tiles.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/new-kashmir-cream-calibrated-tiles.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `New Kashmir Cream is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, New Kashmir Cream offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, New Kashmir Cream delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-015',
  //       name: 'Paradiso Bash',
  //       image: '/assets/regular-tiles/paradiso-bash.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/paradiso-bash.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Paradiso Bash is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Paradiso Bash offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Paradiso Bash delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-016',
  //       name: 'Paradiso Classic',
  //       image: '/assets/regular-tiles/paradiso-classic1.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/paradiso-classic1.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Paradiso Classic is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Paradiso Classic offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Paradiso Classic delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-017',
  //       name: 'Steel Grey',
  //       image: '/assets/regular-tiles/steel-grey.png',
  //       thumbnailImages: ['/assets/regular-tiles/steel-grey.png'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Steel Grey is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Steel Grey offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Steel Grey delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-018',
  //       name: 'Tan Brown',
  //       image: '/assets/regular-tiles/tan-brown.png',
  //       thumbnailImages: ['/assets/regular-tiles/tan-brown.png'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Tan Brown is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Tan Brown offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Tan Brown delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'rt-019',
  //       name: 'Viscount White Tiles',
  //       image: '/assets/regular-tiles/viscount-white-tiles.jpg',
  //       thumbnailImages: ['/assets/regular-tiles/viscount-white-tiles.jpg'],
  //       collection: 'Regular Tiles',
  //       description: 'Premium natural granite tile.',
  //       tags: ['granite', 'natural', 'premium'],

  //       longDescription: `Viscount White Tiles is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Viscount White Tiles offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Viscount White Tiles delivers both aesthetic appeal and long-lasting performance.`,

  //       color: 'Various',
  //       finish: 'Polished',
  //       useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     }
  //   ],

  "regular-tiles": [
    {
      "id": "rt-001",
      "name": "Amba White",
      "image": "/assets/regular-tiles/AMBAWHITE-1.jpg",
      "thumbnailImages": ["/assets/regular-tiles/AMBAWHITE-1.jpg"],
      "collection": "Regular Tiles",
      "description": "A classic and versatile white granite featuring delicate grey and black speckles, perfect for creating bright, elegant spaces.",
      "longDescription": "Amba White is an elegant premium quality Indian granite renowned for its crisp white background adorned with beautiful grey and black speckles. This exquisite natural stone brings a sense of light and spaciousness to any environment.\n\nMined and processed with state-of-the-art technology, Amba White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.\n\nWhether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Amba White granite delivers both aesthetic appeal and long-lasting performance.",
      "color": "White",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "Rajasthan, India",
      "tags": ["granite", "natural", "premium", "white", "durable"]
    },
    {
      "id": "rt-002",
      "name": "Coffee Brown",
      "image": "/assets/regular-tiles/COFFEEBROWN.jpg",
      "thumbnailImages": ["/assets/regular-tiles/COFFEEBROWN.jpg"],
      "collection": "Regular Tiles",
      "description": "A rich, deeply textured dark brown granite infused with chocolate, black, and coffee-toned minerals for a sophisticated warmth.",
      "longDescription": "Coffee Brown is a highly sought-after Indian granite featuring a deep, dark brown backdrop beautifully interlaced with black, coffee, and chocolate-toned minerals. It lends an air of understated luxury, structure, and intense depth to architectural spaces.\n\nCrafted with advanced calibration, this granite provides uniform consistency and superior surface resilience, protecting against scratches and heat. Its warm, dark spectrum effortlessly complements wooden cabinetry, sleek metal accents, and bright modern interiors alike.",
      "color": "Brown",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "brown", "durable"]
    },
    {
      "id": "rt-003",
      "name": "Bengal White",
      "image": "/assets/regular-tiles/BENGALWHITE-1.jpg",
      "thumbnailImages": ["/assets/regular-tiles/BENGALWHITE-1.jpg"],
      "collection": "Regular Tiles",
      "description": "A clean and luminous white granite displaying uniform crystalline patterns and soft grey specks.",
      "longDescription": "Bengal White granite is characterized by its bright white background baseline layered with fine, well-balanced distribution of dark grey and deep pinhead minerals. It offers a pristine, minimalist surface ideal for brightening spaces with high-end style.\n\nHighly valued for commercial installations and premium home layouts, it guarantees long-term durability with very minimal maintenance required, standing strong against daily wear.",
      "color": "White",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "white", "durable"]
    },
    {
      "id": "rt-004",
      "name": "Black Forest",
      "image": "/assets/regular-tiles/BLACKFOREST-1.jpg",
      "thumbnailImages": ["/assets/regular-tiles/BLACKFOREST-1.jpg"],
      "collection": "Regular Tiles",
      "description": "A dramatic black granite accented with striking, unpredictable sweeping veins of white and silver crystalline rivers.",
      "longDescription": "Black Forest granite captures a bold, dramatic aesthetic. Its deep black core acts as a canvas for stark, fluid white and silver veins running across the tiles, mimicking a natural wild woodland setting.\n\nIt serves as an excellent feature-wall stone or primary floor surface, making an unforgettable statement in luxury lobbies, high-profile offices, and executive washrooms.",
      "color": "Black",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "black", "durable"]
    },
    {
      "id": "rt-005",
      "name": "Black Galaxy",
      "image": "/assets/regular-tiles/BLACKGALAXY.jpg",
      "thumbnailImages": ["/assets/regular-tiles/BLACKGALAXY.jpg"],
      "collection": "Regular Tiles",
      "description": "An iconic rich black granite glittering with brilliant golden and metallic bronzite flecks resembling a starlit night sky.",
      "longDescription": "Black Galaxy is a globally famous premium granite featuring a dark black background peppered with shining, reflective metallic flecks. The golden speckles glint under direct lighting, bringing unparalleled luxury to any space.\n\nPerfect for high-end accent walls, upscale kitchen surfaces, and luxury entryways, it brings exceptional density and structural integrity alongside its striking appearance.",
      "color": "Black",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "black", "durable"]
    },
    {
      "id": "rt-006",
      "name": "Indian Dakota",
      "image": "/assets/regular-tiles/indian-dakota.jpg",
      "thumbnailImages": ["/assets/regular-tiles/indian-dakota.jpg"],
      "collection": "Regular Tiles",
      "description": "A deeply rich and uniform dark brown granite accented with micro-crystalline structures for subtle textural depth.",
      "longDescription": "Indian Dakota granite showcases a beautifully stable dark mahogany-to-brownish background. It delivers a deeply consistent structure with micro-crystalline flecks that present a balanced look across large floor spaces.\n\nIts excellent thermal resistance and structural density make it an absolute favorite for outdoor terraces, courtyard paths, and busy high-traffic residential areas.",
      "color": "Brown",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "India",
      "tags": ["granite", "natural", "premium", "brown", "durable"]
    },
    {
      "id": "rt-007",
      "name": "Colombo Juparana",
      "image": "/assets/regular-tiles/colombo-juprana.jpg",
      "thumbnailImages": ["/assets/regular-tiles/colombo-juprana.jpg"],
      "collection": "Regular Tiles",
      "description": "An exotic swirling blend of soft pink, grey, and cream wavy patterns presenting artistic, fluid movement.",
      "longDescription": "Colombo Juparana is a dynamic natural stone displaying an intricate mixture of wave-like bands in soft pinks, light greys, and muted cream tones. It is renowned for its organic movement, ensuring no two tiles look identical.\n\nThis artistic stone is heavily utilized to form feature walls, sweeping entryways, and expressive design borders that call for a classic look with natural energy.",
      "color": "Pink",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "exotic", "durable"]
    },
    {
      "id": "rt-008",
      "name": "Ivory Fantasy",
      "image": "/assets/regular-tiles/ivoryfantasy.jpg",
      "thumbnailImages": ["/assets/regular-tiles/ivoryfantasy.jpg"],
      "collection": "Regular Tiles",
      "description": "A cream-colored granite displaying subtle pinkish swirls and soft amber hues that soften any interior.",
      "longDescription": "Ivory Fantasy brings an inviting warmth with its beige and ivory foundation, decorated with gentle, flowing streaks of sand, peach, and soft charcoal minerals. It offers a bright finish without the stark coldness of solid white stones.\n\nBecause of its capacity to blend into warm design themes, it is frequently chosen for luxury bathrooms, resort flooring, and modern residential kitchens.",
      "color": "Cream",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "cream", "durable"]
    },
    {
      "id": "rt-009",
      "name": "Kashmir White",
      "image": "/assets/regular-tiles/kashmir-white.jpg",
      "thumbnailImages": ["/assets/regular-tiles/kashmir-white.jpg"],
      "collection": "Regular Tiles",
      "description": "A refined, famous white-to-grey granite with dark burgundy granulates scattered elegantly across its surface.",
      "longDescription": "Kashmir White is an elite, highly recognized Indian granite. It features a predominantly snowy-white background layered with soft grey clouds and unique, dark crimson or burgundy flecks that dot the stone.\n\nIts bright aesthetic makes it standard for large corporate office flooring, retail storefronts, and contemporary open-concept residential spaces.",
      "color": "White",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "white", "durable"]
    },
    {
      "id": "rt-010",
      "name": "Ivory Brown",
      "image": "/assets/regular-tiles/ivorybrown.jpg",
      "thumbnailImages": ["/assets/regular-tiles/ivorybrown.jpg"],
      "collection": "Regular Tiles",
      "description": "An attractive earthy stone combining cream and light brown bands with subtle hints of grey.",
      "longDescription": "Ivory Brown granite provides a balanced neutral palette. It balances sandy beige colors with sweeping bands of light walnut brown, establishing a comforting, grounded feel in open architectural designs.\n\nIt is exceptionally hard-wearing, ensuring it holds its high-shine polish even when subjected to intense traffic in public plazas or active households.",
      "color": "Cream",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "cream", "durable"]
    },
    {
      "id": "rt-011",
      "name": "Absolute Black",
      "image": "/assets/regular-tiles/absolute-black-1.png",
      "thumbnailImages": ["/assets/regular-tiles/absolute-black-1.png"],
      "collection": "Regular Tiles",
      "description": "A perfectly solid, deep black granite providing unmatched depth and a stark, highly reflective mirror finish.",
      "longDescription": "Absolute Black granite is the ultimate deep dark stone, prized globally for its consistent monochrome tone without major veining. When polished, it acts like a dark mirror, producing incredible contrast against lighter materials.\n\nIt stands as the benchmark choice for luxury vanity tops, clean geometric flooring layouts, and high-contrast commercial accents.",
      "color": "Black",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "black", "durable"]
    },
    {
      "id": "rt-012",
      "name": "Kashmir Cream",
      "image": "/assets/regular-tiles/kashmir-cream.jpg",
      "thumbnailImages": ["/assets/regular-tiles/kashmir-cream.jpg"],
      "collection": "Regular Tiles",
      "description": "A soothing, sandy-cream granite interspersed with rich hazelnut specs and delicate undertones.",
      "longDescription": "Kashmir Cream granite presents a warm, soft aesthetic. Its baseline consists of light warm beige and cream, enriched by deep brown-gold accents and sparse garnet freckling.\n\nThis material is perfect for creating welcoming atmospheres in commercial hotel receptions, high-traffic home kitchens, and comforting bath spaces.",
      "color": "Cream",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "cream", "durable"]
    },
    {
      "id": "rt-013",
      "name": "Multi Color",
      "image": "/assets/regular-tiles/multi-color.png",
      "thumbnailImages": ["/assets/regular-tiles/multi-color.png"],
      "collection": "Regular Tiles",
      "description": "A striking granite featuring a dark bold blend of red, black, and dark grey veins swirling together.",
      "longDescription": "Multi Color granite showcases a brilliant, dynamic mix of dark brick-red tones running alongside grey and deep black veins. This vibrant stone adds instant architectural intrigue to any layout.\n\nIts rich color palette masks dust and wear exceptionally well, making it perfect for main entry walkways, external cladding projects, and public pathways.",
      "color": "Multicolor",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "multicolor", "durable"]
    },
    {
      "id": "rt-014",
      "name": "Paradiso Bash",
      "image": "/assets/regular-tiles/paradiso-bash.jpg",
      "thumbnailImages": ["/assets/regular-tiles/paradiso-bash.jpg"],
      "collection": "Regular Tiles",
      "description": "A sophisticated fusion of violet, grey, and brown waves that form a striking contemporary design.",
      "longDescription": "Paradiso Bash granite displays an alluring mix of purplish-violet waves, dark charcoal, and muddy-brown minerals. The shifting structure creates an outstanding focal point in any modern design setting.\n\nIt offers extreme structural density and weather resistance, functioning beautifully for indoor accents and exterior architectural facades.",
      "color": "Multicolor",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "violet", "durable"]
    },
    {
      "id": "rt-015",
      "name": "Paradiso Classic",
      "image": "/assets/regular-tiles/paradiso-classic1.jpg",
      "thumbnailImages": ["/assets/regular-tiles/paradiso-classic1.jpg"],
      "collection": "Regular Tiles",
      "description": "A classic violet-blue cloud pattern granite filled with rich swirls of grey and silver particles.",
      "longDescription": "Paradiso Classic granite features an intricate, fine-grain cloud formation composed of soft purplish-blue and deep grey tones. Its serene yet complex design brings timeless elegance wherever it is installed.\n\nThis material is highly recommended for wide flooring layouts, ornate fireplace surrounds, and corporate office elevator walls.",
      "color": "Multicolor",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "violet", "durable"]
    },
    {
      "id": "rt-016",
      "name": "Steel Grey",
      "image": "/assets/regular-tiles/steel-grey.png",
      "thumbnailImages": ["/assets/regular-tiles/steel-grey.png"],
      "collection": "Regular Tiles",
      "description": "A sleek, industrial-grade grey granite showcasing light silver clusters set inside a dark charcoal background.",
      "longDescription": "Steel Grey is a universally preferred low-variation granite displaying a dark grey base adorned with bright, pearlescent silver mineral patterns. It effortlessly projects a modern, industrial, or minimalist tone.\n\nIts low-porosity surface makes it highly resistant to stains and acidic substances, making it a reliable choice for commercial kitchen installations and public bathroom counters.",
      "color": "Grey",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "grey", "durable"]
    },
    {
      "id": "rt-017",
      "name": "Viscount White",
      "image": "/assets/regular-tiles/viscount-white-tiles.jpg",
      "thumbnailImages": ["/assets/regular-tiles/viscount-white-tiles.jpg"],
      "collection": "Regular Tiles",
      "description": "A stunning, highly artistic white-grey granite filled with dynamic, sweeping black waves.",
      "longDescription": "Viscount White granite is widely celebrated for its bold, dramatic marble-like movement. Striking waves of dark grey and pitch black flow naturally over a light grey-and-white background.\n\nBecause of its breathtaking movement patterns, it is a premier option for waterfall island countertops, main accent backsplashes, and luxury lobby installations.",
      "color": "White",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "white", "durable"]
    },
    {
      "id": "rt-018",
      "name": "New Kashmir Cream",
      "image": "/assets/regular-tiles/new-kashmir-cream-calibrated-tiles.jpg",
      "thumbnailImages": ["/assets/regular-tiles/new-kashmir-cream-calibrated-tiles.jpg"],
      "collection": "Regular Tiles",
      "description": "An upgraded, highly uniform cream granite offering minimal color variation for clean, modern aesthetics.",
      "longDescription": "New Kashmir Cream offers a modern update to traditional cream stones, featuring a more uniform distribution of sandy tones and light speckles. It reduces erratic variations across large installations.\n\nIt is ideally designed for vast commercial properties, outdoor shopping plazas, and streamlined kitchen floor concepts.",
      "color": "Cream",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "cream", "durable"]
    },
    {
      "id": "rt-019",
      "name": "Tan Brown",
      "image": "/assets/regular-tiles/tan-brown.png",
      "thumbnailImages": ["/assets/regular-tiles/tan-brown.png"],
      "collection": "Regular Tiles",
      "description": "A popular, dark granite filled with large, distinct dark-red and tan-brown crystalline minerals.",
      "longDescription": "Tan Brown granite features a deep black background prominently embedded with sizable, rounded mineral crystals of rich chestnut brown and dark brick-red. It delivers a solid, stately look.\n\nIts incredible hardness makes it highly resistant to heavy foot traffic, outdoor freeze-thaw cycles, and heavy kitchen cooking use.",
      "color": "Brown",
      "finish": "Polished",
      "useCase": ["Flooring", "Wall Cladding", "Countertops", "Staircases"],
      "thickness": "18mm - 20mm",
      "dimensions": "Cut to Size / Random Slabs (up to 3200mm x 1800mm)",
      "origin": "South India",
      "tags": ["granite", "natural", "premium", "brown", "durable"]
    }
  ],

  //   'granite-slabs': [
  //     {
  //       id: 'gs-001',
  //       name: 'Absolute Black',
  //       image: `/assets/granite-slabs/absolute-black-3.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/absolute-black-3.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'The definitive jet-black granite slab for premium installations.',
  //       color: 'Black',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['black', 'granite', 'absolute'],

  //       longDescription: `Absolute Black is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Absolute Black offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Absolute Black delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-002',
  //       name: 'Black Pearl',
  //       image: `/assets/granite-slabs/black-pearl.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/black-pearl.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Black Pearl granite slab with iridescent mineral highlights.',
  //       color: 'Black',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['black', 'granite', 'pearl'],

  //       longDescription: `Black Pearl is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Black Pearl offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Black Pearl delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-003',
  //       name: 'Blue Pearl',
  //       image: `/assets/granite-slabs/bluepearl.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/bluepearl.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Striking Blue Pearl granite slab with labradorite shimmer.',
  //       color: 'Blue',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['blue', 'granite', 'pearl'],

  //       longDescription: `Blue Pearl is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Blue Pearl offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Blue Pearl delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-004',
  //       name: 'Coffee Brown',
  //       image: `/assets/granite-slabs/coffee-brown-granite.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/coffee-brown-granite.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Rich Coffee Brown granite slab for warm interiors.',
  //       color: 'Brown',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['brown', 'granite', 'coffee'],

  //       longDescription: `Coffee Brown is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Coffee Brown offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Coffee Brown delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-005',
  //       name: 'Ivory Brown',
  //       image: `/assets/granite-slabs/ivory-brown-1.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/ivory-brown-1.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Warm Ivory Brown granite slab with natural elegance.',
  //       color: 'Brown',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['ivory', 'brown', 'granite'],

  //       longDescription: `Ivory Brown is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Ivory Brown offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Ivory Brown delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-006',
  //       name: 'Kashmir Cream',
  //       image: `/assets/granite-slabs/kashmir-cream-1-1.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/kashmir-cream-1-1.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Kerala\'s finest Kashmir Cream granite slab.',
  //       color: 'Cream',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['cream', 'granite', 'kashmir'],

  //       longDescription: `Kashmir Cream is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Kashmir Cream offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Kashmir Cream delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-007',
  //       name: 'Kuppam Green',
  //       image: `/assets/granite-slabs/kappam-green-1.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/kappam-green-1.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Vibrant Kuppam Green granite slab with distinctive hue.',
  //       color: 'Green',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['green', 'granite', 'kuppam'],

  //       longDescription: `Kuppam Green is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Kuppam Green offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Kuppam Green delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-008',
  //       name: 'Multi Colour',
  //       image: `/assets/granite-slabs/multi-color-1.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/multi-color-1.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Bold multi-colour granite slab for expressive design.',
  //       color: 'Multi',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['multicolour', 'granite', 'vibrant'],

  //       longDescription: `Multi Colour is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Multi Colour offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Multi Colour delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-009',
  //       name: 'New Kashmir Cream',
  //       image: `/assets/granite-slabs/new-kashmir-cream-1.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/new-kashmir-cream-1.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Updated Kashmir Cream granite slab with enhanced finish.',
  //       color: 'Cream',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring'],
  //       tags: ['cream', 'granite', 'kashmir'],

  //       longDescription: `New Kashmir Cream is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, New Kashmir Cream offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, New Kashmir Cream delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-010',
  //       name: 'New Kashmir White',
  //       image: `/assets/granite-slabs/new-kashmir-white.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/new-kashmir-white.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'New Kashmir White granite slab with pure bright finish.',
  //       color: 'White',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['white', 'granite', 'kashmir'],

  //       longDescription: `New Kashmir White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, New Kashmir White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, New Kashmir White delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-011',
  //       name: 'New Meera White (Close Up)',
  //       image: `/assets/granite-slabs/meera-white-1.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/meera-white-1.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Close-up view of New Meera White granite slab.',
  //       color: 'White',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring'],
  //       tags: ['white', 'granite', 'meera'],

  //       longDescription: `New Meera White (Close Up) is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, New Meera White (Close Up) offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, New Meera White (Close Up) delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-012',
  //       name: 'New Meera White',
  //       image: `${BASE_URL}/Granite-Slabs/NEW%20MEERA%20WHITE%20104%2C3CM%2C30.webp`,
  //       thumbnailImages: [`${BASE_URL}/Granite-Slabs/NEW%20MEERA%20WHITE%20104%2C3CM%2C30.webp`],
  //       collection: 'Granite Slabs',
  //       description: 'Full slab view of New Meera White granite.',
  //       color: 'White',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring'],
  //       tags: ['white', 'granite', 'meera'],

  //       longDescription: `New Meera White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, New Meera White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, New Meera White delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-013',
  //       name: 'New Meera White 91',
  //       image: `${BASE_URL}/Granite-Slabs/NEW MEERA WHITE 91,3CM,10 CLOSE UP.webp`,
  //       thumbnailImages: [`${BASE_URL}/Granite-Slabs/NEW MEERA WHITE 91,3CM,10 CLOSE UP.webp`],
  //       collection: 'Granite Slabs',
  //       description: 'New Meera White granite slab, variety 91.',
  //       color: 'White',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring'],
  //       tags: ['white', 'granite', 'meera'],

  //       longDescription: `New Meera White 91 is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, New Meera White 91 offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, New Meera White 91 delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-014',
  //       name: 'Paradiso Bash',
  //       image: `/assets/granite-slabs/paradiso-bash-1.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/paradiso-bash-1.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Paradiso Bash granite slab with rich purple undertones.',
  //       color: 'Purple',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['purple', 'granite', 'paradiso'],

  //       longDescription: `Paradiso Bash is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Paradiso Bash offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Paradiso Bash delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-015',
  //       name: 'Paradiso Classic',
  //       image: `/assets/granite-slabs/Paradiso-Classic-1.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/Paradiso-Classic-1.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Paradiso Classic granite slab with signature veining.',
  //       color: 'Purple',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['purple', 'granite', 'classic'],

  //       longDescription: `Paradiso Classic is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Paradiso Classic offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Paradiso Classic delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-016',
  //       name: 'Sapphire Blue',
  //       image: `/assets/granite-slabs/bluepearl.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/bluepearl.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Deep Sapphire Blue granite slab for elegant installations.',
  //       color: 'Blue',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['blue', 'granite', 'sapphire'],

  //       longDescription: `Sapphire Blue is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Sapphire Blue offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Sapphire Blue delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-017',
  //       name: 'Silver Waves',
  //       image: `${BASE_URL}/Granite-Slabs/SILVER WAVES 112,3CM,25 CLOSE UP.webp`,
  //       thumbnailImages: [`${BASE_URL}/Granite-Slabs/SILVER WAVES 112,3CM,25 CLOSE UP.webp`],
  //       collection: 'Granite Slabs',
  //       description: 'Silver Waves granite slab with shimmering wave patterns.',
  //       color: 'Grey',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['silver', 'grey', 'granite'],

  //       longDescription: `Silver Waves is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Silver Waves offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Silver Waves delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-018',
  //       name: 'Steel Grey',
  //       image: `/assets/granite-slabs/steel-grey-1.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/steel-grey-1.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Sleek Steel Grey granite slab for contemporary spaces.',
  //       color: 'Grey',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['grey', 'granite', 'steel'],

  //       longDescription: `Steel Grey is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Steel Grey offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Steel Grey delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-019',
  //       name: 'Tan Brown',
  //       image: `/assets/granite-slabs/tan-brown-1.jpeg`,
  //       thumbnailImages: [`/assets/granite-slabs/tan-brown-1.jpeg`],
  //       collection: 'Granite Slabs',
  //       description: 'Warm Tan Brown granite slab with natural earthy tones.',
  //       color: 'Brown',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['brown', 'granite', 'tan'],

  //       longDescription: `Tan Brown is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Tan Brown offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Tan Brown delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //     {
  //       id: 'gs-020',
  //       name: 'Viscount White',
  //       image: `${BASE_URL}/Granite-Slabs/VISCOUNT WHITE 1024,2CM,55 CLOSE UP.webp`,
  //       thumbnailImages: [`${BASE_URL}/Granite-Slabs/VISCOUNT WHITE 1024,2CM,55 CLOSE UP.webp`],
  //       collection: 'Granite Slabs',
  //       description: 'Viscount White granite slab with flowing crystalline patterns.',
  //       color: 'White',
  //       finish: 'Polished',
  //       useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //       tags: ['white', 'grey', 'granite'],

  //       longDescription: `Viscount White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Viscount White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Viscount White delivers both aesthetic appeal and long-lasting performance.`,

  //       thickness: '18mm - 20mm',
  //       dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //       origin: 'Rajasthan, India'
  //     },
  //   ],

  "granite-slabs": [
    {
      "id": "gs-001",
      "name": "Absolute Black",
      "image": `/assets/granite-slabs/absolute-black-3.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/absolute-black-3.jpeg`],
      "collection": "Granite Slabs",
      "description": " Absolute Black Granite represents the peak of luxury and beauty. Its famously rich solid black hue and satin smooth finish, makes this stone a favorite of modern architecture and design. This stone is also strong and durable. This stone is mined in southern India.",
      "color": "Black",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["black", "granite", "absolute"],
      "longDescription": "Absolute Black is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment. Mined and processed with state-of-the-art technology, Absolute Black offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects. Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Absolute Black delivers both aesthetic appeal and long-lasting performance.",
      "thickness": "2 CM - 20 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-002",
      "name": "Amba White",
      "image": `/assets/granite-slabs/amba-white.png`,
      "thumbnailImages": [`/assets/granite-slabs/amba-white.png`],
      "collection": "Granite Slabs",
      "description": " Amba White Granite is a premium natural stone that is loved for its elegant white background, soft grey veining, and slight brown speckles. This natural stone elaborates the residential and commercial interior space, thereby making it an architectural preference for luxury projects. Amba White Granite from India has been identified to demonstrate a durability factor, timelessness, and has been used in various modern environments. At Madhav Marbles & Granites Ltd., Amba White Granite has been processed with precise quality to meet international quality standards, while providing exceptional visual appeal and long- lasting performance.",
      "color": "White",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "amba"],
      "longDescription": " Mined from the Southern part of the country, Amba White is a versatile granite stone that has brown speckles and grey veins splattered all over the white-colored background stone. Its elegant look along with its high powering characteristics like durability and resistance to wear is what makes it a perfect choice for commercial and residential projects. Amba white granite stone can be integrated into interior and exterior spaces like flooring, countertops, wall claddings, vanity tops, basins, stairs, and more. Madhav Marbles and Granite Ltd is a leading exporter and supplier of natural stones in the market and provides you with a wide range of natural stones. Our stones are available in tiles, blocks, slabs and can be customized into dimensions according to the customer's requirements. Buy Amba White Granite from Madhav Marbles and Granite Ltd.",
      "thickness": "2 CM - 20 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "Rajasthan, India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-003",
      "name": "Matrix - Leather",
      "image": `/assets/granite-slabs/Matrix-Leathe.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/Matrix-Leathe.jpeg`],
      "collection": "Granite Slabs",
      "description": "Matrix Leather Granite is a natural stone of high quality, liked for its rich dark looks, its textured surface and its matte looks that are not shiny but give the stone a stylish look. Intricately designed black and grey flowing wave patterns are set against a leather finish delivering depth, texture, and elegance for modern interiors and architectural environments. ",
      "color": "Black",
      "finish": "Leathered",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["black", "granite", "matrix", "leather"],
      "longDescription": " Matrix Leather Granite is a dark grey background with lighter gray veins that give it dimension and flow. It is a granite with a leather finish natural volcanic lava look, thus used in kitchens and restrooms due to its durability. This tough granite is also ideal for flooring, fire surround, cladding walls, riser steps and many more. Its leathered texture suits both contemporary and traditional designs. Due to its extreme durability and temperature resistance, Matrix Leather Granite is excellent for outdoor applications such as monuments, sculptures, landscaping, wall cladding, and fountains. Its versatility makes it a top choice for architects, builders, and designers. For the best quality leather finish granite in various colors, sizes, and thicknesses, contact Madhav Marble & Granite Ltd.",
      "thickness": "2 CM - 20 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-004",
      "name": "Amadeus Blue",
      "image": `/assets/granite-slabs/amadeus-blue.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/amadeus-blue.jpeg`],
      "collection": "Granite Slabs",
      "description": " Amadeus Blue represents structural artistry, blending shimmering blue crystals with deep charcoal bands. It acts as an incredible centerpiece stone for islands and statement architectural walls. ",
      "color": "Blue",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["blue", "granite", "amadeus"],
      "longDescription": "Quarried from India, Amadeus blue granite stone is a versatile stone that has heavy black swirls and irregular beautiful purple flowery pattern all over it. The beautiful color pattern of the Amadeus blue granite can bring a modern aesthetic appeal to any interior or exterior place it's incorporated. Whether it's a commercial project or a residential one, this highly durable Amadeus blue granite can go for all the applications like flooring, countertops, stone pathways, backsplashes, vanity tops, fireplaces, etc. At Madhav Marbles and Granite Ltd, we provide a great range of granite stone in slabs, tiles, blocks cut to sizes, and many different finishes like polished, unpolished, honed, matte, flamed, etc. Get your natural stone requirements fulfilled with the best natural stone exporters and suppliers.",
      "thickness": "2 CM - 20 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-005",
      "name": "Astoria",
      "image": `/assets/granite-slabs/astoria-300x227.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/astoria-300x227.jpeg`],
      "collection": "Granite Slabs",
      "description": " Astoria granite features classic luxury styling with its earthy, golden foundation and delicate, warm brown banding. It pairs seamlessly with traditional woodwork and rich room settings.",
      "color": "Gold",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["gold", "granite", "astoria"],
      "longDescription": "Astoria granite is an Indian granite with darker veins of chocolate and gray color spread over a beautiful deep cream background. This granite is in high demand in the global and domestic markets for its stunning irregular and wavy pattern. The stone provides a perfect base to create soothing and stylish indoor and outdoor spaces. Owing to its extreme durability, builders, and designers, prefer to use this for both residential and commercial applications. Astoria granite is best when paired with neutral-colored walls and can also be used as kitchen countertops, kitchen islands, backsplashes, flooring, and more. This Granite is available in slabs and tiles of multiple ranges of thicknesses, sizes, and finishes only at one of the best manufacturers and exporters of granite, Madhav Marbles And Granites Ltd. at the most competitive prices. Contact us today to learn more about the granite price for your project needs.",
      "thickness": "2 CM - 20 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-006",
      "name": "Bross Blue",
      "image": `/assets/granite-slabs/bross-blue.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/bross-blue.jpeg`],
      "collection": "Granite Slabs",
      "description": " Bross Blue granite exhibits a deep blue tone highlighting natural mineral reflections. Perfect for elite commercial reception projects and luxury bathroom counters.",
      "color": "Blue",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["blue", "granite", "bross"],
      "longDescription": " Bros blue is a one of a kind granite stone that can surely take your interiors and exterior spaces to a new class. The stone has an exquisite dark blue color along with light bluish veins spread over it. Extracted from the Andhra Pradesh region of India, this stone is a preferable choice among architects. This stone can be used for many commercial and residential applications like countertops, mosaics, fireplaces, stone pathways, vanity tops, basins, floorings, restroom vanities, etc. Madhav Marbles and Granites Ltd., one of the best granite stone exporters and suppliers, provides you with a wide range of granite stone in slabs and tiles of multiple ranges of thicknesses, sizes, and finishes.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-007",
      "name": "Black Galaxy",
      "image": `/assets/granite-slabs/blackgalaxy-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/blackgalaxy-1.jpeg`],
      "collection": "Granite Slabs",
      "description": " Black Galaxy stands as an industry benchmark. Its intense monochrome backdrop contains reflective metallic golden flecks, shimmering radiantly under modern indoor spotlighting setups.",
      "color": "Black",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["black", "granite", "galaxy"],
      "longDescription": " Black galaxy granite is an Indian natural stone renowned for its black color with small gold or white flecks, making it a popular choice for both indoor and outdoor decoration. Its uniformity and ability to reflect light improve several areas, including worktops, sinks, vanity tops, kitchen counters, table tops, countertops, backsplashes, floors, structures. Black Galaxy Granite with its rich appearance and high resistance to abrasion is popular in many countries of the world such as Germany, Austria, Slovakia, Slovenia, USA etc. It is made in slabs or tiles of several sizes since it is a very sturdy material that does not need much care and can be used in refined projects for its interiors. Madhav Marbles & Granite Ltd. offers premium Black Galaxy Granite at the most competitive prices.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-008",
      "name": "Blue Oceano",
      "image": `/assets/granite-slabs/blue-ocean.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/blue-ocean.jpeg`],
      "collection": "Granite Slabs",
      "description": " Blue Oceano channels the movement of the open sea. Sweeping layers of marine blues, misty grays, and white quartz seams establish immediate organic flair inside high-profile corporate environments.",
      "color": "Blue",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["blue", "granite", "oceano"],
      "longDescription": " An exquisite Indian granite, Blue Oceano has a cream background with blue and dark grey color speckles spread in a wave pattern, making it resemble the ocean. It consists of red dots that give this granite a pop of color, enhancing its functionality and hence making it a highlighting element of any place. Due to this color scheme, it could be used for both interior and exterior applications, especially for flooring, wall cladding, vanity tops, countertops, backsplashes, staircases,s and many more. Granite has the quality of being moisture-resistant and stain-resistant, which makes it appropriate for places like the kitchen and restrooms. It can withstand extreme weather conditions, so it is an apt stone for outdoor application. You can avail of this premium quality stone in the form of blocks, slabs, and tiles from Madhav Marble & Granite Ltd. We are among the top granite suppliers and exporters of natural stones from India.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-009",
      "name": "Blue Pearl",
      "image": `/assets/granite-slabs/bluepearl.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/bluepearl.jpeg`],
      "collection": "Granite Slabs",
      "description": " Blue Pearl is recognized for its unique reflective, pearlescent stone crystals. It presents a highly luxurious appearance that coordinates elegantly with metallic accents and neutral design layouts.",
      "color": "Blue",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["blue", "granite", "pearl"],
      "longDescription": " Blue pearl granite is one kind of natural stone that has an irregular scattering of black and white patches over a shiny blue surface. What makes this stone a prominent choice for building materials is its dazzling appearance that gives any space a brand-new refreshing look. The stone naturally comes with ample benefits i.e. low porosity level, extreme durability, high compressive strength, stain resistance, frost-free, and more. Blue pearl granite is highly recommended for flooring, wall cladding, kitchen countertops, backsplashes, Islands, Vanity tops, step risers, and window/door sills. Due to its extreme robustness, It can also be installed in external hard landscaping areas. At Madhav Marble & Granite Ltd., blue pearl granite is available in blocks, slabs, tiles, and cut-to-sizes. We are the best granite supplier and exporter in India, providing you with stones in a wide range of colors, designs, dimensions, and thicknesses. We serve customers in the US, Germany, Austria, Slovenia, and Slovakia. Contact us today and get premium quality material at the most reasonable prices. Blue Pearl Granite is a premium natural stone admired for its stunning blue - grey background, shimmering silver crystals, and elegant appearance. The unique reflective pattern of this granite creates a luxurious look that enhances both modern and traditional architectural spaces. Known for its durability, strength, and timeless beauty, Blue Pearl Granite is a preferred choice among architects, designers, builders, and homeowners worldwide. Whether you are designing a luxurious kitchen, elegant flooring, commercial interiors, or premium architectural projects, Blue Pearl Granite offers the perfect combination of style and performance. Its attractive crystal texture and long - lasting durability make it an excellent choice for residential and commercial applications. Blue Pearl Granite is widely used for granite countertops, flooring, wall cladding, staircases, and decorative surfaces. With its beautiful blue tones and natural shine, this premium granite stone adds sophistication and value to any space.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-010",
      "name": "Bianco Antico",
      "image": `/assets/granite-slabs/bainco-antico.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/bainco-antico.jpeg`],
      "collection": "Granite Slabs",
      "description": " Bianco Antico presents a bold, decorative surface balance. The bright white field contains deep chocolate clusters and sparkling quartz veins, generating a high-end, multidimensional finish.",
      "color": "White",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "bianco", "antico"],
      "longDescription": " Bianco Antico Granite is a white and gray granite with touches of lighter grey, white and brown speckles. It also has crystal-like structures scattered throughout the stone, giving the surface an overall shine and luxurious appearance. This pattern gives it a beautiful and elegant look. In addition to applying in interior spaces such as accent walls, countertops, kitchen islands, fireplaces, backsplashes, and floors, Bianco Artico can be used in exterior properties as well. It is great for usage in exteriors as landscaping and wall cladding. This natural stone comes with various benefits like low porosity level, weather resistance, high compressive strength, stain resistance, and more. At Madhav Marble & Granite Ltd., this granite stone can be availed in various finishes like polished, leather, honed, flamed, etc. depending on the application requirements. We are a well-known natural stone exporter and supplier in India, with stones available in the form of slabs and tiles of various colors, patterns, sizes, and thicknesses at the best competitive price range. Contact us today for premium quality materials.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-011",
      "name": "Black Pearl",
      "image": `/assets/granite-slabs/black-pearl.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/black-pearl.jpeg`],
      "collection": "Granite Slabs",
      "description": " Black Pearl delivers a subtle yet sophisticated design option. Its consistent dark charcoal profile features metallic silver specs, making it easy to clean and highly scratch-resistant over long-term use.",
      "color": "Black",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["black", "granite", "pearl"],
      "longDescription": " Black pearl is one of the popular black granites, known for its elegant looks and perfect finish. The stone has a unique pattern of silver metallic flakes spread over its black backdrop. Due to its beautiful design palette, it can be paired with light-colored interiors to give a perfect contrast in looks. Characteristics like low water absorption, extreme hardness, and high compressive strength make it an ideal choice for indoor and outdoor applications hence, it can be used for designing modern granite floor tiles, wall cladding, kitchen countertops, and vanities. Depending on the usage, black pearl granite can take multiple finishes like polished, flamed, bush hammered, leather, etc. We at Madhav Marble & Granite Ltd., are a leading manufacturer and supplier of the Black Pearl Granite in granite tile, and slabs. When it comes to granite products, we have tiles and slabs and they come in different colors, sizes, and finishes. Our export destinations include Germany, the United States, Austria, Slovakia, and Slovenia. Get in touch with us now to experience high-quality stone at a reasonable price!",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-012",
      "name": "Bengal White",
      "image": `/assets/granite-slabs/bangal-white-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/bangal-white-1.jpeg`],
      "collection": "Granite Slabs",
      "description": " Quarried from India, Bengal White granite is the most popular type of white granite. It has an extremely beautiful looking natural design with a myriad combination of brown, purple colored tiny patches over a shiny white background. The stone is highly functional and promising and adds a soothing aura to your space. Due to the stunning appearance along with high stain and water resistance properties, Bengal White stone is highly recommended for flooring, wall cladding, kitchen counters, backsplashes, table tops, stairs, fountains, and other decorative purposes. Incorporate this granite stone into your residential as well as commercial spaces and make a new style statement. Get this White Granite Stone in different sizes, thicknesses, and finishes from the top Natural Stone Exporter in India. Get in touch with us today for more information.",
      "color": "White",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "bengal"],
      "longDescription": " Bengal White Granite is one of the most timeless natural stones with a tranquil white background and faint waves of grey. The soothing base color of Bengal White Granite is highly preferred across the spectrum of defined design styles and decor schemes, from modern to classic. Bengal White White Granite is premium grade and most sought after for its ability to lighten the look of a room. It is not overpowering to the eye and achieves an overall balance and a refined appearance. The Bengal White Granite, or simply, White Granite, is incredibly durable. Bengal White Granite is often used for countertops in kitchens as it combines timeless elegance with strength needed for everyday use. The stone is completely stain resistant, withstands heat, and keeps its polished shine for years. This stone, with its refined subtle character, embodies sophistication, and is a perfect choice for all countertops including kitchens, living spaces, and highly used commercial areas. Bengal White Granite is crafted to calm the chaos of everyday use. More than a surface, it is an investment piece to capture beauty.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-013",
      "name": "Colonial Cream",
      "image": `/assets/granite-slabs/colonial-cream.png`,
      "thumbnailImages": [`/assets/granite-slabs/colonial-cream.png`],
      "collection": "Granite Slabs",
      "description": " Colonial Cream offers a soft, inviting finish. Combining gold, tan, and rich almond veins with small crimson dots, it brings a welcoming warmth to upscale modern interior designs.",
      "color": "Cream",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["cream", "granite", "colonial"],
      "longDescription": " An elegant creamy base with flecks of gold, brown and rust, is a defining characteristic of one of our exotic stones, Colonial Cream Granite. Extracted from the southern part of India, the stone comes in a range of colors like white, gold, and cream. The distinctive design palette with creamish background and versatility in shades produce a unique appearance that makes it perfect for all types of building applications. The stone is ideal for flooring, tabletops, wall cladding and kitchen countertops, kitchen islands, backsplashes and vanity tops, and etc. Colonial Cream granite tile has become one of the preferred choices for most builders and landscape contractors for designing interiors and exterior spaces. This granite has a low porosity level and does not require much maintenance. Madhav Marble & Granite Ltd. is one of the pioneer suppliers of Colonial Cream Granite around the globe, exporting high-quality materials in slabs, tiles, and cut-to-sizes. Enquire now to get the best quality materials from an esteemed Granite exporter in India, serving locations including Germany, the US, Austria, Slovakia, and Slovenia.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-014",
      "name": "Coffee Brown Granite",
      "image": `/assets/granite-slabs/coffee-brown-granite.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/coffee-brown-granite.jpeg`],
      "collection": "Granite Slabs",
      "description": " Coffee Brown provides timeless durability and a stable dark look. The dark chocolate background features micro-structures of charcoal, blending naturally with dark woodwork and modern styles.",
      "color": "Brown",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["brown", "granite", "coffee"],
      "longDescription": " Coffee Brown Granite stone features a beautiful brown background with crystal-like coffee and chocolate hues throughout. Its durability, scratch resistance, and timeless appeal make it ideal for both commercial and residential projects. Architects use it for countertops, flooring, wall cladding, and stairs due to its versatile design. As a leading natural stone exporter and supplier, Madhav Marbles And Granites Ltd offers a wide range of granite and other natural stones in various finishes, available as tiles, blocks, and cut-to-size. Get in touch today to explore our collection!",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-015",
      "name": "Copper Red",
      "image": `/assets/granite-slabs/copper-red.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/copper-red.jpeg`],
      "collection": "Granite Slabs",
      "description": " Copper Red creates a striking visual impact. Its bold red minerals provide a robust tone, making it ideal for exterior pathways, landmark steps, and high-traffic entryways.",
      "color": "Red",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["red", "granite", "copper"],
      "longDescription": " Copper Red is an Indian Granite with a combination of red, grey and brown color speckles. The amalgamation of all these shades gives it a copper-like look. It is suitable for both indoor and outdoor usage. This stone comes to another level when applied outdoors as it creates a balanced look along with enhancing the overall appearance of the space. Granite is a durable natural stone, resistant to weather and moisture, so it is an apt stone for landscaping, wall cladding, flooring, sculptures, staircases, etc. Copper Red Granite is a preferable choice for builders and designers when they want to create a modern rustic look. This stone is available in multiple finishes like polished, leather, honed, flamed, piano, etc., according to application and building requirements. Madhav Marble & Granite Ltd. provides granite stone in the form of slabs, blocks, and tiles and has an extensive range with ample of colors, patterns, and sizes. Madhav Marble & Granite Ltd., the top granite supplier in India, offers slabs, blocks, and tiles in various colors and sizes. Contact us now for bulk exports. Serving Germany, the US, Austria, Slovakia, and Slovenia.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-016",
      "name": "Colonial White",
      "image": `/assets/granite-slabs/colonial-white.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/colonial-white.jpeg`],
      "collection": "Granite Slabs",
      "description": " Colonial White pairs beautiful bright stone with smoky silver veining and tiny burgundy flecks, working perfectly in wide layouts to create an elegant sense of spaciousness.",
      "color": "White",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "colonial"],
      "longDescription": " Amongst the wide collection of white granites, Colonial White granite has its own relevance which symbolizes purity and peace. The stone makes a big difference when it comes to updating your interior aesthetics. Ideal for both business and residential use, this Colonial White Granite looks best when combined with dark-toned kitchen cabinets. Whether used as kitchen countertops, backsplashes, white granite flooring, or for another purpose, colonial white makes a remarkable choice amongst other white granite stones. This stone is mined in India and is one of the most beautiful types of stone to be used on the walls and floors as well as on the exterior. Available in different sizes and finishes, get the Colonial White granite only at Madhav Marble & Granite Ltd., a leading natural stone supplier that deals in supplying a wide variety of granite tiles and slabs. Enquire to get the quote today! ",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-017",
      "name": "Imperial Cream",
      "image": `/assets/granite-slabs/imperial-cream.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/imperial-cream.jpeg`],
      "collection": "Granite Slabs",
      "description": " Imperial Cream offers structural consistency and soft warmth. It beautifully integrates with high-end furniture configurations and residential stone flooring.",
      "color": "Cream",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["cream", "granite", "imperial"],
      "longDescription": " Imperial Cream Granite from Madhav Marble & Granite Ltd. is a stunning natural stone, featuring a captivating blend of grey and brown veins against a deep cream background. Ideal for enhancing dark-colored interiors and exteriors, this granite creates a tranquil atmosphere. Offering unparalleled elegance and durability, Imperial Cream Granite is non-porous and highly resistant to dirt, stains, and scratches. It is versatile in its ability to take on multiple finishes, with its polished surface adding a touch of sophistication to floors and walls. As a leading natural stone manufacturer in India, Madhav Marble & Granite Ltd. offers Imperial Cream Granite in custom-sized tiles and slabs of various thicknesses and dimensions. Perfect for applications such as cladding, kitchen backdrops, countertops, kitchen islands, table tops, vanity tops, and stairs, this Indian granite is renowned for its quality and aesthetic appeal. Reach out to us for more information. We proudly serve clients in Germany, US, Austria, Slovakia, and Slovenia, providing our premium natural stone products at competitive prices.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-018",
      "name": "Imperial Gold",
      "image": `/assets/granite-slabs/imperial-gold.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/imperial-gold.jpeg`],
      "collection": "Granite Slabs",
      "description": " Imperial Gold showcases exceptional color variance and luxury. Swirling streams of bright amber, honey, and rust add a dramatic statement to kitchen designs and fireplaces.",
      "color": "Gold",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["gold", "granite", "imperial"],
      "longDescription": " Imperial Gold Granite is simple yet elegant looking Indian granite. The stone features a shade of gold and yellow background with a glorious pattern of grey and pink veins and small flecks of golden color. Imperial Gold easily blends under both contemporary and modern interiors due to its magnificent look and beautiful texture. The stone has a low water absorption rate and is highly resistant to scratches, and extreme climate conditions. Imperial gold granite is suitable for both high-end residential and commercial applications that range from customizing kitchen countertops, granite floor tiles, wall cladding, and fountains, to other decorative possibilities. Given a fine finish, this gold granite can give your space a class-apart look. Imperial gold granite is now available at the most prominent supplier of granite, Madhav Marble & Granites Ltd. We process granite into slabs and tiles of different sizes, thicknesses, and finishes and keep a heavy stock. Reach out to us and get the best quotations for your requirements. Buy Imperial Gold Granite today from the leading natural stone supplier in India, Madhav Marble & Granites Ltd.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-019",
      "name": "Kashmir Gold",
      "image": `/assets/granite-slabs/kashmir-gold.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/kashmir-gold.jpeg`],
      "collection": "Granite Slabs",
      "description": " Kashmir Gold introduces a welcoming feel. Combining sandy gold fields with delicate orange-red highlights, it complements natural oak, walnut, and warm metal elements.",
      "color": "Gold",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["gold", "granite", "kashmir"],
      "longDescription": " Kashmir Gold Granite is one of the hardest granite mined from India that contains a creamy grey background with a unique pattern of brown and grey flecks and veining. The high strength, excellent finish, and stunning design make it an ideal choice for indoor and outdoor applications. Kashmir Gold Granite can add elegance to any space if installed as flooring, counters for kitchen and restroom areas, and wall cladding applications. For many homeowners Kashmir Gold has become the most popular choice for kitchen countertops, backsplashes, and kitchen islands, because of its elegant design and long-lastingness. We can process this granite into slabs and tiles of various finishes, dimensions & thickness. At Madhav Marble & Granite Ltd., we deal in tailor-made products to fulfill the client's requirements. Being a leading supplier of granites, we process quality granite stones using advanced production techniques. Our stones are available in blocks, slabs, tiles, and cut-to sizes. Enquire us today for any bulk requirements.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-020",
      "name": "Kashmir White",
      "image": `/assets/granite-slabs/kashmir-white..jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/kashmir-white..jpeg`],
      "collection": "Granite Slabs",
      "description": " Kashmir White provides exceptional clarity and historical reliability. Its refined silver-grey background features small garnet crystals, making it ideal for large-scale flooring projects.",
      "color": "White",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "kashmir"],
      "longDescription": " Kashmir White Granite has a fusion of grey and light-colored golden veins with an irregular scattering of purple speckles over a bright white background. The exquisite pattern of Kashmir White can impart a sense of calmness to any interiors and exteriors. This white granite stone easily blends with contemporary and traditional spaces. The granite is durable, robust, stain and weather-resistant, hence it can be used as wall cladding, flooring, countertops, vanity tops, stairs, monuments, etc. Madhav Marble & Granite Ltd., one of the reputed stone suppliers, deals in supplying premium-quality white granite at affordable prices. Our stones are available in blocks, slabs, and tiles.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-021",
      "name": "Bianco Tiffone",
      "image": `/assets/granite-slabs/bicon-tiffine.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/bicon-tiffine.jpeg`],
      "collection": "Granite Slabs",
      "description": " Bianco Tiffone Granite has a strong Black base and is scattered with striking white veins and a diversified contrast. This gives its surfaces a great veining which creates a dynamics to any space. This granite is widely used for bianco tiffone granite countertops, flooring, wall cladding, and exterior applications. Due to its high compressive strength and weather resistance, Bianco Tiffone Granite performs exceptionally well in both indoor and outdoor environments. Its dramatic appearance makes it ideal for projects that demand a bold and elegant stone finish.",
      "color": "Black",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "tiffone"],
      "longDescription": " Found in India, Bianco Tiffone is a one-of-a-kind granite stone that adds luxury and sophistication to any space. The exquisite black granite with heavy white patches exudes richness wherever it's incorporated. Highly demanded for outdoor and indoor applications such as countertops, flooring, stairs, fireplace walls, stone pathways, wall claddings, and window sills, this versatile stone is perfect for both commercial and residential projects. Discover a wide range of top-quality granite and other natural stones from Madhav Marbles And Granites Ltd., one of the most prominent natural stone exporters and suppliers. We offer granites in slabs, blocks, and tiles in various colors, finishes, and dimensions. Contact us today to transform your space with the elegance of Bianco Tiffone. The striking Bianco Tiffone granite with Black and White contrasts is also complemented with multiple and bold white veining. The combos of Bianco Tiffone granite with other stone and surfaces or within a space creates a sense of bold luxury and a strong interior within any premium architectural installation. The varying boldness of the patters within the Bianco Tiffone granite shows the diversity within the linear patters which adds charm and elegance to any contour or linear forms. Bianco Tiffone granite is widely known for its strength and durability. This granite does not only look good, it is functional, and reliable, and a space with it won't require an upgrade or replacement for an extended period of time. Bianco Tiffone granite is also very low maintenance which leads to long term investment for any space.",
      "thickness": "2 CM - 20 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-022",
      "name": "Mist Black",
      "image": `/assets/granite-slabs/mist-black.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/mist-black.jpeg`],
      "collection": "Granite Slabs",
      "description": " Mist Black breaks up solid black schemes with light gray waves, making it a highly durable, sophisticated choice for modern spaces.",
      "color": "Black",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["black", "granite", "mist"],
      "longDescription": " Mist black is that one granite stone for those who like to add the touch of the black color in their stying. This is a prominent granite stone which is primarily black in color but has got a few patches and speckle of green tint over the black. This granite is very popular because of its color and it can be installed both on rooms with light or dark shades. This can act as kitchen or restroom countertops, vanity tops, interior or exterior flooring, backsplash, fountains, windowsills, stone pathways, stairs, fireplaces, etc. When it comes to the finishing of this stone, some of the finishing that are offered by Madhav Marbles And Granites Ltd. include polished, leather, honed, Giano, flamed, flamed and brushed. We work with different types of granites and other natural stones. Our granite products include tiles, slabs and blocks of granite stones.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-023",
      "name": "Multi Color",
      "image": `/assets/granite-slabs/multi-color-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/multi-color-1.jpeg`],
      "collection": "Granite Slabs",
      "description": " Multi Color granite blends red and dark grey waves, making it a robust choice that hides dust and wear well in outdoor applications.",
      "color": "Multicolor",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["multicolor", "granite", "red"],
      "longDescription": " Quarried in India, multicolor red granite is considered to be one of the most popular granites in the red color category. The stone has a stunning red background along with a beautiful amalgamation of tiny black dots and grey swirls spread on the surface. The high durability, robustness and astounding beauty of this granite make it a preferred choice for all wall cladding applications, facades, flooring and designing kitchen counters, vanity tops, etc. Due to its ability to take multiple surface finishes multicolor red is highly used as granite floor tiles. This stone adds a glamorous look when paired with light colored interiors and exteriors. Being one of the top manufacturers and suppliers of granite, we are at Madhav Marble and Granite Ltd. offers you multicolor red granite in the form of slabs, cut to sizes, and tiles of multiple dimensions. Our stones are available in polished and unpolished forms. Enquire us today and get the best quotations.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-024",
      "name": "Ivory Brown",
      "image": `/assets/granite-slabs/ivory-brown-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/ivory-brown-1.jpeg`],
      "collection": "Granite Slabs",
      "description": " Ivory Brown brings balance with its sandy beige foundation and soft walnut layers, offering a practical, elegant choice for expansive layouts.",
      "color": "Cream",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["cream", "granite", "brown"],
      "longDescription": " With the idea to create a contemporary, exclusive and luxurious space, Ivory brown granite is the most preferred stone by architects and interior designers over other brown granite. Ivory Brown has a beige base with reddish-brown streaks over it. This stone is especially preferred to use as kitchen countertops, interior walls, and floor applications, etc. Quarried from the mines located in India, this stone is durable in nature and known for its utmost qualities. Madhav marble and granite Ltd is the leading manufacturer, supplier, and exporter of Ivory Brown Granite in India and around the world. We export quality products in different finishes and sizes. Get Ivory Brown granite tiles and slabs today!",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-025",
      "name": "Parana Bordeaux",
      "image": `/assets/granite-slabs/parana.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/parana.jpeg`],
      "collection": "Granite Slabs",
      "description": " Parana Bordeaux brings rich, warm tones to luxury settings, working perfectly as an island countertop or stunning feature element.",
      "color": "Red",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["red", "granite", "bordeaux", "exotic"],
      "longDescription": " Parana Bordeaux is a scintillating granite with a creamish golden background and a perfect blend of deep red and maroon swirly waves with a tint of grey. It has a variation of dark grey and brown flakes that provides this stone with a noticeable look. With a variety of uses, this granite is best for indoor application, both for commercial and residential purposes. Perfect for kitchen countertops, fireplace surrounds, staircases, table tops, office lobbies or even great hall flooring. It is recommended for both interior and exterior projects including landscaping, flooring, outdoor countertops, wall cladding, sculptures and much more. In addition to installation versatility, it is a natural stone with various qualities such as stain and moisture resistance, the ability to withstand tough weather conditions, and is a long-lasting material. Avail Parana Bordeaux granite in premium quality from Madhav Marble & Granite Ltd., well known natural stone manufacturers and suppliers in the global market. We provide stones in form of slabs, tiles, blocks, and varied cut sizes, dimensions and finishes.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-026",
      "name": "Pebble White",
      "image": `/assets/granite-slabs/pebble-white.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/pebble-white.jpeg`],
      "collection": "Granite Slabs",
      "description": " Pebble White granite provides a clean look with uniform, stone-like patterns, brightening up modern, minimalist commercial or residential spaces.",
      "color": "White",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "pebble"],
      "longDescription": " Pebble White granite has a white colour background with streaks of black and grey. This pattern is present all over the stone surface. Despite its busy design the white undertone highlights well and gives this stone a smooth and shiny appearance. With its fine and distinctive look, this stone has a personality of its own that enhances the overall ambience of the space where applied. It uplifts the visual of any space especially when incorporated with white and lighter tones, creating a clean, minimalistic, and brighter look.  It serves multiple purposes such as countertops, tabletops, restroom areas, staircases, bath vanities, shower surrounds and many more. Whereas when used outdoors, this stone acts as a decorative element and perfect stone for landscaping. We at Madhav Marble & Granite Ltd. manufacture and supply the finest quality Pebble White granite which is available in the form of blocks, slabs and tiles. We also have stones in varied sizes, dimensions, thicknesses and finishes",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-027",
      "name": "Imperial White",
      "image": `/assets/granite-slabs/imperial-white.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/imperial-white.jpeg`],
      "collection": "Granite Slabs",
      "description": "An elite white granite with light grey patterns and small pink flecks.",
      "color": "White",
      "finish": "Imperial White granite is heavily used in premium residential kitchens and commercial building floors, offering great strength and a bright appearance.",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "imperial"],
      "longDescription": " Imperial white granite is a white stone that has partly light patches of pink and grey that enhances its attractiveness for construction activities. This is due to the physical and chemical characteristics it possess which has deemed it worthy to be used for both residential and commercial purposes. This granite comes in different sizes and sealers and is one of the most popular shades of white called imperial white that can be used in many interior design like in kitchen for countertops , walls, stairs, and floorings to give the room an appealing look. Madhav Marbles & Granite Ltd, a leading manufacturer in India, supplies both Imperial White Granite and Colonial White Granite for export. We exclusively cater as the distributor and supplier of White granite for many countries over plus forty countries worldwide and offer Slabs, Tiles, as well as other cut sizes of Imperial White Granite wholesale. Enquire now!",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-028",
      "name": "New Imperial Red",
      "image": `/assets/granite-slabs/new-imperial-red.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/new-imperial-red.jpeg`],
      "collection": "Granite Slabs",
      "description": " New Imperial Red brings intense color energy to any project, serving as a durable choice for corporate entryways and dramatic residential accents.",
      "color": "Red",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["red", "granite", "imperial"],
      "longDescription": " New Imperial Red granite is a beautiful natural stone consisting of deep red, brown and black granules. It has a brown colour base with large red and peach color speckles that defines and elevates this stone's physical appearance. This stone adds variety and perfection to your residential and commercial design projects. After installation, its simplicity and elegance are the reason behind its popularity in the market among builders, designer,s and architects. A material with extreme durability, and perfect to use as countertops, kitchen islands, backsplashes, flooring, accent walls, table tops, staircase, step risers, fireplace surrounds, sculptures, designer terraces and much more. Madhav Marble & Granite Ltd. has the best collection of premium quality granite and other natural stones and New Imperial Red is available in the form of slabs, blocks, and tiles. We also provide various dimensions and finishes like polished, leather, honed, flamed, giano, as per the building and customer requirements.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-029",
      "name": "New Kashmir White",
      "image": `/assets/granite-slabs/new-kashmir-white.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/new-kashmir-white.jpeg`],
      "collection": "Granite Slabs",
      "description": " New Kashmir White offers clean design consistency by reducing wide color changes across large floor spaces.",
      "color": "White",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "kashmir"],
      "longDescription": " Among the wide variety of granite stones, the new Kashmir white granite marks endless possibilities in creating demanding decors, for both indoors and outdoors. Heavily employed in residential and commercial applications, the New Kashmir White Granite is used as kitchen countertops, vanity tops, paving stones, backsplashes, and more. This White Granite stone is a fine to medium-grained, dark white to light grey stone that merely provides an even smoother surface finish when installed in any space. Madhav marble and granite being the top granite suppliers in India aim at providing this high-quality stone in a finished and polished state of granite tiles, or slabs in abundant variety. Enquire now to get into its details.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-030",
      "name": "Royal Ivory",
      "image": `/assets/granite-slabs/royal-ivory..jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/royal-ivory..jpeg`],
      "collection": "Granite Slabs",
      "description": " Royal Ivory provides an elegant alternative to solid whites, bringing soft, classic warmth to modern luxury interiors.",
      "color": "Cream",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["cream", "granite", "royal"],
      "longDescription": " An absolute Indian Granite, Royal Ivory has a white background with cream colour waves stretched across the stone. It consists of tiny brown and white sugar like particles providing the stone with a unique shimmer. Along with this, it also features deep brown deposits that add contrast to its overall appearance. With this minimal design and white hue, it makes any space appear bigger and brighter. Royal Ivory is an appropriate stone for a variety of applications especially interiors such as kitchen island, backsplashes, tabletops, windowsills, staircases, flooring, bath vanities, etc. Granite unlike other natural stones is comparatively high in strength, durability, is stain and weather-resistant, has a low porosity level, hence is a suitable stone for outdoors too. For example as pillars, fountains, landscaping, sculptures, monuments, carved structures, etc. This granite is available in the form of blocks, slabs and tiles of various thicknesses, dimensions, and finishes. Madhav Marble & Granite Ltd. is a leading supplier and processor of Indian granites and provides products at competitive prices.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-031",
      "name": "River White New",
      "image": `/assets/granite-slabs/river-white-original.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/river-white-original.jpeg`],
      "collection": "Granite Slabs",
      "description": " River White New features smooth, fluid gray lines that mirror a flowing river, making it a top pick for modern kitchen island designs.",
      "color": "White",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "river"],
      "longDescription": " Let enrich your interiors with the sparkle of white granite by creating a welcoming aura. Construct with gray veining with small deep burgundy flecks over it, the River white granite is a durable stone that amplifies the overall look when installed in both interiors or exteriors of any space. Available in form of both white granite tiles and slabs it can be used as granite kitchen countertops, backsplashes, flooring, paving stone, and more. Madhav marble and granite Ltd is one of the foremost exporters of granite in India, exports quality granite tiles and slabs across 40+ countries. Being in the industry for over 31 years, our product promises desired quality that lasts for years.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-032",
      "name": "New Kashmir Cream",
      "image": `/assets/granite-slabs/new-kashmir-cream-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/new-kashmir-cream-1.jpeg`],
      "collection": "Granite Slabs",
      "description": " New Kashmir Cream is designed to give large interior spaces a clean, balanced, and premium finish.",
      "color": "Cream",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["cream", "granite", "kashmir"],
      "longDescription": " A durable granite stone recommended for kitchen countertops or restroom vanity tops. The new Kashmir Cream granite is a cream-colored stone with grey and light pink lines over it. This remarkable granite stands out in front of other granite stones and is stain-resistant, easy-to-maintain, and durable in nature. This all makes it a perfect choice for kitchen countertops, wall cladding, flooring and so on. Madhav Marble & Granite Ltd is a leading granite supplier, offers the New Kashmir Cream Granite in custom slabs and tiles. Available in both raw and finished state, get this stone today at great prices from the top exporters of granite in India.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-033",
      "name": "Tan Brown",
      "image": `/assets/granite-slabs/tan-brown-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/tan-brown-1.jpeg`],
      "collection": "Granite Slabs",
      "description": "A durable black granite filled with large tan-brown crystals.",
      "color": "Brown",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["brown", "granite", "tan"],
      "longDescription": "Tan Brown features a stable black background paired with large chestnut crystals, providing a solid, hard-wearing choice for busy spaces.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-034",
      "name": "Thunder Cloud",
      "image": `/assets/granite-slabs/thunder-cloud.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/thunder-cloud.jpeg`],
      "collection": "Granite Slabs",
      "description": " Thunder Cloud displays strong mineral movement that adds organic energy and style to modern walls and entryways.",
      "color": "Grey",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["grey", "granite", "thunder"],
      "longDescription": " Thunder Cloud is a unique and mesmerizing granite stone with a grey undertone. Its surface consists of dark grey and white wave-like patterns with tiny black granules. This stone has a striking and astounding appearance that makes it a perfect addition for the place it is installed hence could be used as bath vanity tops, kitchen countertops, tabletops, fireplaces, staircase, wall cladding, pavements, monuments, and more. For achieving a high-end and stylish look, pair it with darker colour elements such as black kitchen cabinets or to create an elegant and soft look add some lighter shades like white and cream. Thunder Cloud Granite has many properties like stain resistance, low porosity level, could withstand tough weather conditions and long-lasting material. At Madhav Marble & Granite Ltd. we deal in high-quality products manufactured and processed with advanced technology. You can get granite stone in the form of blocks, slabs and tiles, also in various sizes and finishes.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-035",
      "name": "New Multi Colour",
      "image": `/assets/granite-slabs/new-multi-color.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/new-multi-color.jpeg`],
      "collection": "Granite Slabs",
      "description": " New Multi Colour updates a classic color blend with more defined, eye-catching mineral swirls.",
      "color": "Multicolor",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["multicolor", "granite", "red"],
      "longDescription": " New Multi Color granite is a magnificent granite product featuring the mixture of red, dark brown, black and tones of grey. This beautiful color combination is adorned in a curly wave pattern providing the stone movement and depth. The astonishing appearance and mesmerizing texture of this granite adds to its functionality, hence making it suitable for a number of applications such as kitchen islands, countertops, flooring, bath vanity tops, fireplace surrounds, bar counters, shelves, staircases, landscaping, fountains, and a lot more. Being a natural stone with utmost durability and strength, New Multi Color granite is a preferable choice of builders, designers and architects for both commercial and residential construction projects. Here at Madhav Marble & Granite Ltd., this granite stone is available in the form of slabs, tiles, blocks and various finishes like polished, leather, honed, flamed, etc. in order to match individual needs. We provide bulk exports across the globe. Contact us for further information and enquiries.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-036",
      "name": "Colonial Dream",
      "image": `/assets/granite-slabs/colonial-dream-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/colonial-dream-1.jpeg`],
      "collection": "Granite Slabs",
      "description": " Colonial Dream brings a unique, luxury style that adds warmth and distinction to customized kitchen spaces.",
      "color": "Gold",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["gold", "granite", "colonial"],
      "longDescription": " Colonial Dream is a popular granite from India. It consists of a yellowish cream background along with dark brown deposits and tiny light brown speckles spread all over the stone surface. With this alluring look, it adds character to any space wherever installed. Beyond the beauty this stone has, it is also a very durable material and has other properties of a granite stone such as being stain resistant, resistant to moisture and extreme weather conditions, and has high compressive strength. With all these factors, it stands up well against all the daily wear and tears. This granite is perfect for interior spaces and could be installed as countertops, tabletops, accent walls, staircases, window sills, flooring, bathroom vanities, or outdoors as landscaping, wall cladding, designer terraces, etc. To get the finest quality Colonial Dream granite contact Madhav Marble & Granite Ltd. who are among the top suppliers and manufacturers of granite and other natural stones from India.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-037",
      "name": "Aviva White",
      "image": `/assets/granite-slabs/Aviva-White.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/Aviva-White.jpeg`],
      "collection": "Granite Slabs",
      "description": " Aviva White Granite showcases a stunning white background enhanced with subtle grey patterns and natural textures that create a sophisticated and elegant appearance. Its clean look and timeless appeal make it a preferred choice among architects, interior designers, and homeowners looking for a premium granite solution for modern spaces.",
      "color": "White",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "aviva"],
      "longDescription": " A natural stone with a subtle look, Aviva White has a white color background with grey and black color spots spread all over the stone. It consists of beige color splashes that add a different hue to this monochromatic tone. With this minimal design pattern and white shade, it makes any space appear bigger and brighter. This color palette makes Aviva White an appropriate stone for multiple usage especially indoors as a kitchen island, backsplashes, tabletop, windowsills, staircases, flooring, bath vanities, etc. Due to its high durability, stain and weather resistance, low water absorption level and high compressive strength, it is a suitable stone for outdoors too. For example as sculptures, monuments, pillars, fountains, and could be used to create beautiful designs and carved structures. This granite is available in the form of blocks, slabs and tiles of various thicknesses, dimensions, and finishes. Madhav Marble & Granite Ltd. is a leading supplier and processor of Indian granites and provides products at competitive prices.",
      "thickness": "20mm, 30mm",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-038",
      "name": "Regal Black Impala",
      "image": `/assets/granite-slabs/Regal-Black-Impala.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/Regal-Black-Impala.jpeg`],
      "collection": "Granite Slabs",
      "description": " Regal Black Impala offers structural consistency and density, making it a practical option for clean commercial designs.",
      "color": "Black",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["black", "granite", "impala"],
      "longDescription": " Regal Black Impala is a granite stone found in the southern part of India. This Indian granite comes in a deep black colour background with some little flecks spread all over the stone. This stone is highly demanded for its rich black colour and its high powering characteristics like high strength and durability, frost resistance, stain resistance and many other features. With Regal Black Impala granite stone you can definitely bring a feel of elegance and luxury to your interior and exterior spaces. Use this stone as flooring, wall claddings, kitchen countertops, stone pavements, monuments, fireplaces etc. Get Regal Black Impala granite and many other top-quality natural stones from the leading exporters of natural stone, Madhav Marbles And Granites Ltd. Our natural stone range includes marble stones, granites, sandstones and quartzites. Our granite is available in tiles, slabs, block, and cut to sizes.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-039",
      "name": "Steel Grey",
      "image": `/assets/granite-slabs/steel-grey-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/steel-grey-1.jpeg`],
      "collection": "Granite Slabs",
      "description": "Steel Grey Granite originates from India, and is considered to be one of the highest quality granites available. This stone is considered one of the best granites and is known for its consistency and beauty. The background of Steel Grey is uniform and steel grey in color. This granite also has a uniform distribution of silver color flecks all over the stone. Steel Grey is perfectly suited for wall cladding, flooring, or countertops as it captures and conveys a high level of class and beauty and it is also extremely durable in the long term. It is the perfect granite for commercial locations, as well as modern contemporary and high end interiors.",
      "color": "Grey",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["grey", "granite", "steel"],
      "longDescription": "Steel Grey Granite features a beautiful mixture of dark and grey shades, which contributes to upscaling the look of any space they are placed in. This Grey Granite is highly durable in nature and contains good composite strength which makes it highly popular to use as kitchen countertops, vanity tops, flooring, and more. The stone requires low maintenance and each of its aspects makes your establishment reflect pure luxury and coziness. Madhav marble and granite ltd is the leading manufacturer, supplier, and exporter of Steel Grey Granite and exports Steel Grey Granite tiles, slabs all over the world. Whether it is interiors or exteriors, the granite tiles shine with their own light and enlighten the whole space.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-040",
      "name": "Sapphire Blue",
      "image": `/assets/granite-slabs/sapphire-blue.png`,
      "thumbnailImages": [`/assets/granite-slabs/sapphire-blue.png`],
      "collection": "Granite Slabs",
      "description": "Rich visual appeal is derived from the various combinations of blue, grey and black throughout the stone. Beyond the beauty, it is a premium natural stone recognized for its strength and durability, and takes millions of years to form naturally. The sapphire blue granite's distinct geological formations mean no two slabs are the same, which is what makes it ideal for many applications. High performance and elegance are just a couple of reasons for the stone's widespread use in contemporary luxury designs. The stone's performance and durability also allows it to withstand the major demands of any remodeling project.",
      "color": "Blue",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding", "Staircases", "Tabletops & Islands"],
      "tags": ["blue", "granite", "sapphire"],
      "longDescription": "Sapphire Blue granite has a dark blue colour with brown and black flakes. It consists of an intricate pattern and flakes of milky grey and white colour, giving this stone an attractive and unique visual. To increase its variety of usage, pair it with darker elements like black in space or add some contrast with lighter shades such as cream and beige. It's a gorgeous natural stone with an exquisite shine and fits well in its surrounding, wherever applied. It will work well as kitchen countertops, bath vanities, shower surrounds, tabletop, fountains, pavements, etc. Sapphire Blue granite is a natural stone with ample qualities like low water absorption, stain resistance, ability to resist extreme environments, and long lastingness. You can purchase this granite stone in top-notch quality from Madhav Marble & Granite Ltd., available in the form of blocks, slabs and tiles. We are among the top granite suppliers and exporters of natural stones from India.",
      "thickness": "15mm, 18mm, 20mm",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-041",
      "name": "New Meera White",
      "image": `/assets/granite-slabs/meera-white-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/meera-white-1.jpeg`],
      "collection": "Granite Slabs",
      "description": " New Meera White updates a classic pattern, reducing wide variations to ensure a clean look across large projects.",
      "color": "White",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "meera"],
      "longDescription": " Embossed with black dots, grey flecks, and lines on the white surface, the New Meera White Granite is perfect to use as kitchen countertops, exterior – interior wall and floor applications, fountains, pool, and wall capping, stairs, window sills, and other design projects. Suitable for both interior and exterior applications, the New Meera White granite is durable, dense, hard, and creates an aesthetic appeal to any space, when installed. Acclaimed as architectural rock, this stone is widely popular amongst homeowners and architects. Madhav Marble and Granite Ltd is a rich exporter and supplier of new Meera white granite tiles and slabs in India. Explore its range of white granite tiles and slabs today! ",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-042",
      "name": "Meera White",
      "image": `/assets/granite-slabs/meera-white-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/meera-white-1.jpeg`],
      "collection": "Granite Slabs",
      "description": "Meera White is an Indian Granite, This Granite mined in south india quarries. This Granite comes with white background with black and grey dots on the surface. Its designs looks very good while using on countertops, tabletops, flooring, wall cladding etc.",
      "color": "White",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "meera"],
      "longDescription": "Madhav Marbles is the leading supplier and Processor of this granite, We can supply you any quantity of this material, this material is available with us in ready stock. We can offer you this material at best competitive price. We request you to please visit our Factory for any of your requirement of this granite , you can also get in touch with us by filling the form at our contact us page. We look forward to receive your valuable inquiry regarding any of your projects for this granite.",
      "thickness": "2cm – 20cm",
      "dimensions": "305 x 305 x 10 mm, 610 x 305 x 10 mm, 600 x 400 x 10 mm, 400 x 400 x 10 mm, 457 x 457 x 12 mm, 600 x 600 x 12 mm, 305 x FL x 15 mm, 400 x FL x 15 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-043",
      "name": "Kuppam Green",
      "image": `/assets/granite-slabs/kappam-green-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/kappam-green-1.jpeg`],
      "collection": "Granite Slabs",
      "description": "Kuppam Green Granite is a distinguished variety of granite from India characterized by its deep green base as well as unique and striking patterns created by naturally occurring minerals. This particular granite from Kuppam is widely used in both commercial and residential construction as a result of its longevity, as well as its captivating appearance. Kuppam green granite is highly sought after as a result of its appealing aesthetic and natural resilience. The granite possesses a rich green hue complemented by a subtle arrangement of mineral patterns, which, together, contribute a refined feel to any space and are thus suitable for both contemporary and classic décors.",
      "color": "Green",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["green", "granite", "kuppam"],
      "longDescription": "A green-colored stone that comprises white swirls and lining patterns gives a striking look to your design space when installed. Kuppam Green Granite is one of the well-known building materials that are available in both raw and well-finished states. The stone makes a perfect blend when put in a combination of light-coloured stone and is extensively demanded to be used as kitchen countertops, backsplashes, and flooring.  Kuppam Green granite stone is durable and its scratch-resistant properties make it an appropriate selection for domestic purposes also. Get the Kuppam green stone from the prime suppliers of granite in India – Madhav Marble & Granite Ltd at a highly competitive price range. Being the leading distributors of granite in India, we believe in supplying quality products worldwide.",
      "thickness": "15mm, 18mm, 20mm",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-044",
      "name": "Kashmir Cream",
      "image": `/assets/granite-slabs/kashmir-cream-1-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/kashmir-cream-1-1.jpeg`],
      "collection": "Granite Slabs",
      "description": " Kashmir Cream brings a soft, welcoming feel to home countertops and upscale hotel spaces.",
      "color": "Cream",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["cream", "granite", "kashmir"],
      "longDescription": " Kashmir Cream is a popular granite stone from India. It has a cream background with peach colour waves. A variation of dark grey granules is also present that are spread all over the stone. The amalgamation of varied shades gives this stone a soft sand look and beautiful movement. Kashmir Cream granite is a stone that has natural strength and a tough surface that could withstand extreme temperatures, hence a suitable stone for both indoor and outdoor usage. Whether apply it as countertops, backsplashes, shower surrounds, staircases, accent walls in your space interiors, or use it as landscaping, fountains, sculptures for outdoors. This granite has an impactful but soft and subtle look and blends perfectly with other elements and colours, maximizing the ambience of the entire space. Purchase fine grade of Kashmir Cream granite from Madhav Marble & Granite Ltd. We are among the top natural stone suppliers from India having an extensive range of granite stones in various colours, patterns, sizes and finishes provided as per requirements.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-045",
      "name": "Prada Gold",
      "image": `/assets/granite-slabs/parada-gold.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/parada-gold.jpeg`],
      "collection": "Granite Slabs",
      "description": " Prada Gold offers standout design movement, serving as an excellent focal point for custom islands and accent walls.",
      "color": "Gold",
      "finish": " Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["gold", "granite", "prada"],
      "longDescription": " Prada Gold is an alluring granite quarried in South India. It is a beautiful stone with a combination of golden and peach background along with grey veins that gives this stone a pleasant flow. On having a closer look one can see black colour spots spread in an uneven pattern over the stone. This granite has a luxurious appearance and is perfect for residential and commercial places like hotels, restaurants, showrooms, where it will definitely lay a splendid impression. In addition to its beauty, Prada Gold is a durable, weather-resistant, stain-resistant and long-lasting natural stone. It is a fabulous granite stone for kitchen countertops, backsplashes, bath vanities, accent walls, fireplace surrounds, flooring, landscaping, stone benches and much more. We provide this stone in the form of slabs, blocks and tiles and in different cut sizes, dimensions and thicknesses. If you are looking for a granite product that is best in quality and colour, contact Madhav Marble & Granite Ltd., who are leading manufacturers and exporters of granite from India.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-046",
      "name": "Emerald Pearl HQ",
      "image": `/assets/granite-slabs/Emerald-Pearl-HQ-300x227.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/Emerald-Pearl-HQ-300x227.jpeg`],
      "collection": "Granite Slabs",
      "description": " Emerald Pearl HQ adds high-end luxury to commercial projects, reflecting light with standout green mineral depths.",
      "color": "Green",
      "finish": " Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["green", "granite", "emerald"],
      "longDescription": " Emerald Pearl HQ is one of the most common and known choices of granite colours in the market. It has a striking dark green color background with light green, silver and white chip-like speckles. With its unique and distinctive look, this stone has a personality of its own that enhances the overall ambience of the space where applied. It uplifts the appearance of any space, especially when used as countertops, tabletops, restroom areas, staircases, and many more. Whereas when used outdoors, this stone acts as a decorative element and adds a touch of glamour to the area. Apart from its beauty, Emerald Pearl HQ Granite has many qualities like stain resistance, low water absorption level, resistance to extreme weather conditions and long lasting material. All these properties make it a popular choice of builders, designers and architects. At Madhav Marble & Granite Ltd. we deal in premium quality products manufactured and processed with advanced technology. Our stones are available in blocks, slabs and tiles form, also in various sizes and thicknesses.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-047",
      "name": "Thunder White",
      "image": `/assets/granite-slabs/thunder-white.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/thunder-white.jpeg`],
      "collection": "Granite Slabs",
      "description": "A bright white slab crossed by striking gray lines and dark garnets.",
      "color": "White",
      "finish": " Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "thunder"],
      "longDescription": "Thunder White brings bold marble-like movement with the superior durability of natural granite.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-048",
      "name": "Vizag Blue",
      "image": `/assets/granite-slabs/vigaj-blue.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/vigaj-blue.jpeg`],
      "collection": "Granite Slabs",
      "description": " Vizag Blue coordinates seamlessly with modern metallic accents, adding a professional finish to corporate layouts.",
      "color": "Blue",
      "finish": " Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["blue", "granite", "vizag"],
      "longDescription": " Vizag Blue consists of infinite blue shades that give this granite an enticing appearance and a crystalline beauty. Its colour is somewhere between blue and violet with a gentle wave pattern that adds flow and movement to this stone. This stone's high resistance power makes it suitable for busy areas like kitchens, restrooms, living rooms, etc. Its excellent strength and durability make it the perfect material for applying in both indoor and outdoor areas. When paired with lighter tones like cream and white, Vizag Blue creates an elegant and sophisticated look. In more bold combinations with colours like black and charcoal, the result is graceful and stylish with great aesthetic power. The stone could be availed in the form of tiles, slabs and blocks. Here at Madhav Marble & Granite Ltd., we have a wide collection of granites available in many colours, sizes, thicknesses and finishes. We are among the prime suppliers and manufacturers in the natural stone industry. Enquire for more details and information.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-049",
      "name": "Viscount Waves",
      "image": `/assets/granite-slabs/viscount-waves.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/viscount-waves.jpeg`],
      "collection": "Granite Slabs",
      "description": " Viscount Waves stands out for its bold, flowing stone design, serving as a top option for luxury waterfall countertops.",
      "color": "White",
      "finish": " Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "viscount", "waves"],
      "longDescription": " The white-coloured granite tiles embossed with grey waves add an adequate look to any space when installed. Also known as Madanapalli White India and Viscount White Granite, the stone creates an exotic look while used on flooring, on kitchen countertops, tabletops, granite wall cladding, and more. This white granite tile is extremely popular and is mostly preferred to be used by homeowners and builders. Suitable for both interior and exterior purposes, this is the most durable stone that does not require much maintenance. Madhav marble and granite Ltd. being one of the leading manufacturers, suppliers of Viscount Waves Granite tile, exports White Granite to over 40 countries across the world. To get the slabs, tiles and other cut sizes of Granite, enquire us today. Viscount Waves Granite is top - quality white granite with striking natural grey wave - like patterns against a soft white background.This natural flow of the stone produces a sophisticated, contemporary appearance, making it suitable for modern interiors and architecture. Madanapalli White Granite, also known as Viscount White Granite, is a much - desired, long - lasting stone that can be used for many projects, including flooring, kitchen countertops, wall coverings, and tabletops.Whatever your project may be, the use of this stone will enhance the decor of that project with its elegant and clean look. Because of its incredible durability and low maintenance, this stone has numerous applications for residential use and / or commercial use and can be utilised in both interior and exterior applications.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-050",
      "name": "Spice Black",
      "image": `/assets/granite-slabs/spice-black-300x227.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/spice-black-300x227.jpeg`],
      "collection": "Granite Slabs",
      "description": "Spice Black Granite is India's premium natural black granite known for its deep black surfaces, combined with elegant natural textured patterns. Most of India's granite quarries are Spice Black Granite's natural stone, making it a great choice for use in modern architecture and interior design.Spice Black Granite is strong and has natural, timeless beauty, which is complemented by its fine texture.It works well with both residential and commercial interiors.Spice Black Granite has been around for many years in the market.It is mainly quarried from a different region of India, where the black material is used to make this stone derived.The granite occurs in a greyish - black background with dark stripes over it.It is known for its durability and is available in large quantities for use in constructing many large buildings and monuments around the world.",
      "color": "Black",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Kitchen", "Bathroom", "Wall Cladding"],
      "tags": ["black", "granite", "spice"],
      "longDescription": "Spice Black Granite is fine to medium-grained stone, with an undertone of dark grey, visible fine black veins, and lighter inclusions. It also consists of tiny white crystals spread unevenly over the surface that gives it a glimpse of shine. This Indian granite is popular in the international market for its stunning visual. For people who want to give their spaces a high-end and luxurious look, Spice Black granite is the best choice. When incorporated with lighter and white tones, this black granite provides a sense of versatility and could be added in variant styles like modern, contemporary, traditional and rustic both for interiors or exteriors. Madhav Marble & Granite Ltd. is the Granite Supplier and manufacturer of the best quality stones in India. Our stones are durable, long-lasting, and are available in different sizes, dimensions, thicknesses, and finishes such as polished, flamed, honed, leather, giano, and brushed. To purchase the product or for more information and details, contact us. ",
      "thickness": "Standard slab sizes are available",
      "dimensions": "15mm, 18mm, 20mm, 30mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-051",
      "name": "Paradiso Bash",
      "image": `/assets/granite-slabs/paradiso-bash-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/paradiso-bash-1.jpeg`],
      "collection": "Granite Slabs",
      "description": "This premium granite slab features a rich blend of deep brown, black, and copper tones enhanced by dramatic swirling patterns that create a luxurious and dynamic appearance. Its striking natural texture and exceptional durability make it an ideal choice for countertops, flooring, wall cladding, staircases, and decorative applications in both residential and commercial spaces. ",
      "color": "Multicolor",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["multicolor", "granite", "violet"],
      "longDescription": "This magnificent natural granite showcases an eye-catching combination of dark brown, black, and copper hues flowing together in intricate swirling patterns. The stone's unique movement and rich color variations create a bold, sophisticated look that instantly elevates the aesthetic appeal of any interior or exterior space. Each slab possesses its own distinct character, making every installation truly one of a kind. Renowned for its superior strength and durability, this granite is highly resistant to scratches, heat, moisture, and daily wear, making it suitable for a wide range of applications.It is widely used for kitchen countertops, island tops, vanity tops, flooring, wall cladding, staircases, fireplace surrounds, tabletops, and architectural accents.Its robust composition also makes it an excellent choice for exterior facades, landscaping features, and other outdoor installations. The stone's dramatic swirling texture adds depth and elegance to contemporary, modern, and traditional design schemes alike. Easy to maintain and built to withstand the test of time, this granite offers the perfect combination of beauty, functionality, and long-term value. Whether incorporated into luxury homes, hotels, offices, or commercial projects, it delivers a timeless and impressive natural stone finish.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-052",
      "name": "Indian Juparana",
      "image": `/assets/granite-slabs/indian-juprana.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/indian-juprana.jpeg`],
      "collection": "Granite Slabs",
      "description": "Indian Juparana Granite is a stunning natural stone known for its beautiful blend of pink, grey, and darker mineral patterns flowing in elegant swirls. Quarried in South India, this durable and versatile granite is ideal for countertops, flooring, wall cladding, staircases, backsplashes, and outdoor applications. Its low porosity, excellent strength, and timeless appearance make it a popular choice for both residential and commercial projects.",
      "color": "Pink",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["pink", "granite", "juparana"],
      "longDescription": "Indian Juparana is a pink color granite and a popular one for its alluring design. It has a multi-colour shade that mainly consists of pink and grey hues and darker grey color particles spread in a beautiful swirling pattern. Quarried in the southern region of India, this gorgeous granite is on-demand in the global market. Its bewitching and elegant appearance provides a base for building other elements in a space and a preferable choice for commercial and residential usage. The granite stone features multiple applications and could be used as kitchen countertops, working stations, backsplashes, staircases, bath vanities and tiles, flooring, and many more. In comparison to other natural stones, it has a low porosity level and could withstand harsh temperatures, hence apt for outdoors. We at Madhav Marble & Granite Ltd. manufacture and export the finest quality Indian Juparana granite which is available in the form of blocks, tiles and slabs. We also have stones in varied sizes, dimensions and finishes. ",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-053",
      "name": "Colombo Juparana",
      "image": `/assets/granite-slabs/colmbo-juprana.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/colmbo-juprana.jpeg`],
      "collection": "Granite Slabs",
      "description": "This elegant granite slab features a stunning blend of earthy brown, grey, and black tones highlighted by flowing wave-like patterns. Its natural movement and rich texture create a sophisticated look, making it an excellent choice for flooring, wall cladding, countertops, staircases, and decorative applications. Durable, low-maintenance, and weather-resistant, this granite enhances both indoor and outdoor spaces with timeless beauty.",
      "color": "Pink",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["pink", "granite", "juparana"],
      "longDescription": "This exquisite natural granite showcases a captivating combination of brown, grey, and charcoal hues intertwined with graceful flowing veins and wave-like patterns. The unique movement across the surface creates a dynamic visual appeal, giving every slab a distinctive character and luxurious finish. Its earthy color palette complements a wide variety of architectural and interior design styles, from contemporary to traditional. Renowned for its exceptional strength and durability, this granite is suitable for both residential and commercial projects.It is widely used for flooring, wall cladding, kitchen countertops, vanity tops, staircases, facades, tabletops, and outdoor landscaping applications.The stone's resistance to scratches, heat, moisture, and weathering ensures long-lasting performance even in high-traffic areas. The natural texture and rich patterning make it a preferred choice for creating elegant interiors and striking exterior spaces.Whether installed in living rooms, kitchens, bathrooms, office buildings, hotels, or outdoor patios, this granite delivers a perfect balance of beauty, functionality, and durability.Its low maintenance requirements and timeless appearance make it a valuable investment for any construction or renovation project.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-054",
      "name": "Colonial Gold",
      "image": `/assets/granite-slabs/colonial-gold.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/colonial-gold.jpeg`],
      "collection": "Granite Slabs",
      "description": " Colonial gold granite is hard granite mined from India which contains a creamy gray background with brown and gray flecks and veining. It is used in indoor as well as outdoor locations for flooring, countertops and walls. ",
      "color": "Gold",
      "finish": "Polished, Leather, Random Slabs, Tiles",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["gold", "granite", "colonial"],
      "longDescription": " Colonial Gold Granite is a premium natural stone quarried in India, renowned for its elegant appearance and outstanding durability. Featuring a beautiful creamy gray background enriched with subtle brown and gray flecks, intricate veining, and natural patterns, this granite adds warmth and sophistication to any residential or commercial space. Its timeless color palette makes it a versatile choice for a wide range of architectural and interior design applications.Colonial Gold Granite is extensively used for flooring, kitchen countertops, vanity tops, wall cladding, backsplashes, staircases, and decorative features.Thanks to its exceptional strength, weather resistance, and low maintenance requirements, it is equally suitable for outdoor installations such as patios, facades, pathways, and landscaping projects. The natural beauty of Colonial Gold Granite complements both traditional and contemporary design styles, creating a luxurious and welcoming atmosphere.Its hard - wearing surface resists scratches, stains, and daily wear, ensuring long - lasting performance and aesthetic appeal.Whether used indoors or outdoors, Colonial Gold Granite delivers a perfect combination of elegance, functionality, and enduring value.",
      "thickness": " 2, 3,4,5…..20 cm ",
      "dimensions": "305 x 305 x 10 mm, 610 x 305 x 10 mm, 600 x 400 x 10 mm, 400 x 400 x 10 mm, 457 x 457 x 12 mm, 600 x 600 x 12 mm, 305 x FL x 15 mm, 400 x FL x 15 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-055",
      "name": "Hassan Green",
      "image": `/assets/granite-slabs/hassan-green.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/hassan-green.jpeg`],
      "collection": "Granite Slabs",
      "description": " Hassan Green Granite is a premium natural stone featuring a striking greenish-black background accented with fine green and black specks. Its rich color, elegant texture, and exceptional durability make it ideal for flooring, wall cladding, kitchen countertops, vanity tops, and outdoor applications. Resistant to dirt and built to last, Hassan Green Granite adds timeless beauty and sophistication to any space.",
      "color": "Green",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["green", "granite", "hassan"],
      "longDescription": " One of the most unique green granite stones, Hassan green granite has a stunning greenish-black background with a myriad combination of tiny green and black specks over it. The stone provides a mesmerizing look to the interiors if installed as a flooring and wall cladding application. The richness of color and elegant texture make Hassan Green Granite a perfect pick for customizing kitchen countertops, vanity tops, and stone crafts. Due to its extreme durability, long-lastingness, and dirt-resistant features, it is also preferred for outdoor spaces. Being a pioneer distributor of Indian Granites, we at Madhav Marble & Granite Ltd offer you the stone in multiple ranges of dimensions, colors, and finishes. ",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-056",
      "name": "Himalayan Blue",
      "image": `/assets/granite-slabs/himalayan-blue-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/himalayan-blue-1.jpeg`],
      "collection": "Granite Slabs",
      "description": " Himalayan Blue Granite is a premium granite stone sought after for its amazing blend of blue, grey, and dark minerals. This type of natural blue granite is quarried from southern India and is popular for use in contemporary architecture and design. The blue stone granite with its diverse, organically formed, wavy and mineral textures is a special piece of stone.The granite offers a delightful sight to all surroundings, hence, is perfect for luxury spaces.",
      "color": "Blue",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["blue", "granite", "himalayan"],
      "longDescription": " Himalayan Blue is a granite stone extracted from the Southern part of India. With the background of light blue color, this stone has a beautiful surface with orange swirls and streaks. These waves provide certain motion and depth to the stone, hence enhancing its visuality. Install this stone in your commercial and residential properties to create a luxurious and appealing look. Whether used in indoor spaces as kitchen countertops, restroom vanities, tabletops, staircases, fireplace, or outdoor areas as wall cladding, fountains, sculptures, landscaping, etc. Along with its stunning appearance, Himalayan Blue is a granite stone with ample features like stain resistance, weatherproof, low porosity level, and extreme durability. Bring this granite stone to create architectural masterpieces. Madhav Marble & Granite Ltd. has the best collection of premium quality natural stones and this granite stone is available in the form of slabs, blocks, and tiles. We also provide various dimensions and finishes as per the design and customer requirements.",
      "thickness": " 15mm, 18mm, 20mm, 30mm ",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-057",
      "name": "Indian Aurora",
      "image": `/assets/granite-slabs/indian-auraro.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/indian-auraro.jpeg`],
      "collection": "Granite Slabs",
      "description": "A striking contrast of sweeping reddish-pink and black swirls.",
      "color": "Multicolor",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["multicolor", "granite", "aurora"],
      "longDescription": "Quarried in the southern part of India, Indian Aurora granite stone is one of the most unique stones that has a reddish-brown base and over that it has some dark coloured waves and swirls of red and brown colours. This south Indian granite is highly demanded all around the globe. It has many indoor and outdoor applications like countertops, floorings, mosaics, monuments, fountains, exterior-interior wall claddings, pools, fireplaces etc. This granite stone is available with multiple finishing options like Polished, leather, honed, Giano, Flamed, flamed and brushed at one of the most trusted natural stone exporters and suppliers in the market, Madhav Marbles And Granites Ltd. Our granites are also available in slabs, blocks and tiles.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-058",
      "name": "Black Forest",
      "image": `/assets/granite-slabs/black-forest-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/black-forest-1.jpeg`],
      "collection": "Granite Slabs",
      "description": "A dramatic black granite crossed by striking white veins.",
      "color": "Black",
      "finish": " Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["black", "granite", "forest"],
      "longDescription": " Black Forest is a granite stone that features an irregular veining of white and creamish colored spread over its stunning black surface. It has a unique sparkling reflection that makes it appear three-dimensional. With a striking appearance, this granite stone is an ideal choice and a stylish complement for modern and contemporary interiors. Despite its intricate design and pattern, Black Forest merges well with the surroundings without overpowering other elements. Owing to its uniqueness and extreme durability, builders and designers prefer to use this for both residential and commercial applications like kitchen countertops, tabletops, bathroom vanities, flooring, fireplace surrounds, staircases, designer terraces, fountains, etc. Here at Madhav Marble & Granite Ltd., this granite stone is available in various finishes like polished, leather, honed, flamed, and giano. We are well-known manufacturers and suppliers of granite and have stones available in various colors, patterns, sizes, and thicknesses at the best competitive price range. ",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-059",
      "name": "Bengal Black",
      "image": `/assets/granite-slabs/bengal-black-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/bengal-black-1.jpeg`],
      "collection": "Granite Slabs",
      "description": "Bengal Black granite is quarried in India. With features like pure deep black stone color with fine white specking add on to the Bengal Black Granite's timeless and versatile appeal. The surface retains a natural look without appearing artificial or flat. Granite's inherent strength ensures it can withstand heat, pressure, and daily wear, making it a reliable option for high-traffic areas and long-term use. ",
      "color": "Black",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Hotels and resorts, Office lobbies, Restaurants, Bar counters, Outdoor paving, Wall cladding, Building facades, Living room flooring, Kitchen countertops, Bathroom vanity tops, Staircases"],
      "tags": ["black", "granite", "bengal"],
      "longDescription": " Bengal Black Granite is a high-quality Asian black granite with a lot of character because of its deep black color with airy white specking that captures your eye. With the right character, this granite is the best option for any design and brings high-end modern, contemporary, and traditional design. Durability, low maintenance, and versatility of Bengal Black Granite make this stone a preferred choice for flooring, wall cladding, countertops, and exterior applications in any residential and commercial projects.The beautiful appearance and glossy finish of this stone make it the most preferred choice amongst homeowners and architects. Madhav Marble & Granite Ltd is a prominent supplier of natural stones in India. Its collection of black granite tiles and slabs are available in a variety of finishes that give each material a very personal aspect. ",
      "thickness": " 610 × 305 × 10 mm, 600 × 400 × 15 mm, 400 × 400 × 15 mm, 600 × 300 × 20 mm, 600 × 600 × 20 mm, 610 × 610 × 15 mm, 305 × 305 × 10 mm",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India"
    },
    {
      "id": "gs-060",
      "name": "Andromeda White",
      "image": `/assets/granite-slabs/Andromeda-White-1-300x227.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/Andromeda-White-1-300x227.jpeg`],
      "collection": "Granite Slabs",
      "description": "Andromeda White Granite is a premium natural stone characterized by a blend of fine elegance and top-notch durability. Its bright white background is adorned with beautiful black, golden, and brown bits of stone. These features give the granite a calming look and a hardiness to stand the extreme weathering. Andromeda White Granite is the ultimate stone for a luxurious look combined with practicality, both for indoor and outdoor purposes on walls, floors, and pathways, as well as countertops, and backsplashes.",
      "color": "White",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "andromeda"],
      "longDescription": "The Andromeda White granite available at Madhav Marble features an impressive surface that boasts a mixture of black, beige, brown, and golden specks on a shining white background. Another amazing aspect of this type of granite is its ability to provide a serene or peaceful feel. If used as outdoor wall construction and for flooring and pathways, it gives your space a welcoming feel. However, it has a sleek appearance, coupled with high strength characteristics and resistance to severe fluctuations in the climate, most construction companies recommend it for use in commercial and residential structures formations. Depending on the usages, this granite takes multiple finishes. Polished Andromeda white granite works well on kitchen countertops, vanity tops, backsplashes, kitchen island, and more. Extracted and processed in India this stone is available in the form of blocks, slabs, and tiles at Madhav Marble & Granite Ltd., the best granite manufacturer, and supplier. We provide premium quality granites in multiple dimensions, thicknesses, and finishes, contact Madhav Marble & Granite Ltd.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-061",
      "name": "Moon White",
      "image": `/assets/granite-slabs/moon-white.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/moon-white.jpeg`],
      "collection": "Granite Slabs",
      "description": "A clean, cool white field patterned with silver-grey and crimson dots.",
      "color": "White",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["white", "granite", "moon"],
      "longDescription": "The exquisite moon white granite stone is there to strike the interest of every architect who loves using white granite stones. The granite has heavy veins of grey with some wine coloured fleckings over the creamy base of the stone. This white granite is extremely durable, hard and resistant to heat and moisture which makes it suitable for both interior and exterior uses. Incorporate this south Indian granite stone as countertops, vanity tops, indoor or outdoor wall claddings, basins, step risers, window sills, mosaics etc. Madhav Marbles And Granites Ltd. is a prominent Marble Granite Company. We provide different granite and marbles finishes such as Polished, leather, honed, Giano, Flamed, flamed and brushed. For any bulk requirements, contact us and get assured of the best quality product at the most competitive price.",
      "thickness": "2 CM - 12 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "India"
    },
    {
      "id": "gs-062",
      "name": "Paradiso Classic",
      "image": `/assets/granite-slabs/Paradiso-Classic-1.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/Paradiso-Classic-1.jpeg`],
      "collection": "Granite Slabs",
      "description": "Paradiso Classic Granite is a high-end natural stone with flowing patterns, giving it a sophisticated, rich look. The combination of grey with purple and black is unique and distinctive, and it creates a nice elegant touch. It is an excellent option for both residential and commercial use.Its installation in a large commercial project or a modern home, Paradiso Classic Granite provides both beauty and durability.",
      "color": "Multicolor",
      "finish": "Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish",
      "useCase": ["Countertops", "Flooring", "Wall Cladding", "Restroom Vanities", "Staircases & Tabletops"],
      "tags": ["multicolor", "granite", "violet"],
      "longDescription": "A stone with a smooth texture and elegant finish, Paradiso classic is a dark color granite widely praised for uniformity and optimum compressive strength. Suitable to use for interior or exterior applications this granite stone is available in shades of brown and gray colors with wavy patterns of white, black, and gold colors over the dark base. This granite is generally used in kitchen areas, as vanity tops, and flooring, perfect to use for commercial and domestic purposes. Madhav Marble and Granite Ltd, is a leading granite exporter, who deals in supplying natural stone in its raw and finished state. Explore our range of Paradiso Classic granite tiles and slabs today!",
      "thickness": "15mm, 18mm, 20mm, Other custom thicknesses upon request",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm ",
      "origin": "South India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    },
    {
      "id": "gs-063",
      "name": "Black Titanium",
      "image": `/assets/granite-slabs/Black-Titanium-Granite--300x227.jpeg`,
      "thumbnailImages": [`/assets/granite-slabs/Black-Titanium-Granite--300x227.jpeg`],
      "collection": "Granite Slabs",
      "description": "An intense black slab highlighted by bold, sweeping gold and ivory rivers.",
      "color": "Black",
      "finish": " Polished, Flame Finished, Honed Finish, Flamed + Brush Finish, Giano Finish, Leather Finish ",
      "useCase": ["Countertops", "Flooring", "Wall Cladding"],
      "tags": ["black", "granite", "titanium", "exotic"],
      "longDescription": "Black titanium granite is a luxurious natural stone that features a beautiful black background with white swirls running all over it. Its stunning movement is eye-catching and adds a touch of luxury and elegance to any space it is used in. Titanium granite is available in slabs and tiles and can be used for kitchen countertops, bathrooms, flooring, backsplashes, interior and exterior walls, fountains, and many more. This versatile natural stone complements any space used, whether commercial or personal. With a wide selection of products available on the market, it can be tough to decide which is best for your needs. If you're looking for high-quality titanium granite, then you've come to the right place! At Madhav Marbles and Granites, Our team of experts is here to help you make the best decision for your needs. Get in touch with us today and we'll get you started on finding your perfect match.",
      "thickness": "2, 3, 4 CM",
      "dimensions": "610 x 305 x 10 mm, 600 x 400 x 15 mm, 400 x 400 x 15 mm, 600 x 300 x 20 mm, 600 x 600 x 20 mm, 610 x 610 x 15 mm, 305 x 305 x 10 mm",
      "origin": "India",
      "packaging": "To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching."
    }
  ],

  // 'exotics-exclusive':
  // [
  //   {
  //     id: 'ee-001',
  //     name: 'Blue Deep',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/BLUE%20DEEP%20BL%2028847A%20BDL%20109429.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/BLUE%20DEEP%20BL%2028847A%20BDL%20109429.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Blue Deep exotic surface.',
  //     color: 'Blue',
  //     finish: 'Polished',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['blue', 'exotic'],

  //     longDescription: `Blue Deep is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Blue Deep offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Blue Deep delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  //   {
  //     id: 'ee-002',
  //     name: 'Brilliant Grey Honed',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/BRILLIANT%20GREY%20Honed%20BL%2081-21%20BDL%209429.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/BRILLIANT%20GREY%20Honed%20BL%2081-21%20BDL%209429.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Brilliant Grey Honed exotic surface.',
  //     color: 'Grey',
  //     finish: 'Honed',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['grey', 'exotic'],

  //     longDescription: `Brilliant Grey Honed is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Brilliant Grey Honed offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Brilliant Grey Honed delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  //   {
  //     id: 'ee-003',
  //     name: 'Calacata Matarazzo Honed',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CALACATA%20MATARAZZO%20Honed%20BL%2009-22%20BDL%2010423.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CALACATA%20MATARAZZO%20Honed%20BL%2009-22%20BDL%2010423.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Calacata Matarazzo Honed exotic surface.',
  //     color: 'White',
  //     finish: 'Honed',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['white', 'exotic'],

  //     longDescription: `Calacata Matarazzo Honed is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Calacata Matarazzo Honed offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Calacata Matarazzo Honed delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  //   {
  //     id: 'ee-004',
  //     name: 'Cristal Cartier',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CRISTAL%20CARTIER%20BL%20122%20BDL%209576.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CRISTAL%20CARTIER%20BL%20122%20BDL%209576.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Cristal Cartier exotic surface.',
  //     color: 'Grey',
  //     finish: 'Polished',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['grey', 'exotic'],

  //     longDescription: `Cristal Cartier is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Cristal Cartier offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Cristal Cartier delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  //   {
  //     id: 'ee-005',
  //     name: 'Crystal Soulages',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CRYSTAL%20SOULAGES%20BL%2028932%20BDL%20112364.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CRYSTAL%20SOULAGES%20BL%2028932%20BDL%20112364.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Crystal Soulages exotic surface.',
  //     color: 'Mixed',
  //     finish: 'Polished',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['mixed', 'exotic'],

  //     longDescription: `Crystal Soulages is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Crystal Soulages offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Crystal Soulages delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  //   {
  //     id: 'ee-006',
  //     name: 'Crystalita Blue',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CRYSTALITA%20BLUE%20BL%2022640%20%20SL%2051-61.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CRYSTALITA%20BLUE%20BL%2022640%20%20SL%2051-61.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Crystalita Blue exotic surface.',
  //     color: 'Blue',
  //     finish: 'Polished',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['blue', 'exotic'],

  //     longDescription: `Crystalita Blue is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Crystalita Blue offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Crystalita Blue delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  //   {
  //     id: 'ee-007',
  //     name: 'Fusion',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/FUSION%20BL%2027715%20BDL%20114171.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/FUSION%20BL%2027715%20BDL%20114171.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Fusion exotic surface.',
  //     color: 'Mixed',
  //     finish: 'Polished',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['mixed', 'exotic'],

  //     longDescription: `Fusion is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Fusion offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Fusion delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  //   {
  //     id: 'ee-008',
  //     name: 'Hypnose',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/HYPNOSE%20%20BL%2027992%20BDL%20106874.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/HYPNOSE%20%20BL%2027992%20BDL%20106874.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Hypnose exotic surface.',
  //     color: 'Mixed',
  //     finish: 'Polished',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['mixed', 'exotic'],

  //     longDescription: `Hypnose is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Hypnose offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Hypnose delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  //   {
  //     id: 'ee-009',
  //     name: 'Laguna Crystal',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/LAGUNA%20CRYSTAL%20BL%2001-23%20BDL%2011090.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/LAGUNA%20CRYSTAL%20BL%2001-23%20BDL%2011090.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Laguna Crystal exotic surface.',
  //     color: 'Grey',
  //     finish: 'Polished',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['grey', 'exotic'],

  //     longDescription: `Laguna Crystal is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Laguna Crystal offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Laguna Crystal delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  //   {
  //     id: 'ee-010',
  //     name: 'Magma',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/MAGMA%20BL%203459%20SL%2029-39.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/MAGMA%20BL%203459%20SL%2029-39.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Magma exotic surface.',
  //     color: 'Mixed',
  //     finish: 'Polished',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['mixed', 'exotic'],

  //     longDescription: `Magma is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Magma offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Magma delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  //   {
  //     id: 'ee-011',
  //     name: 'Maori',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/MAORI%20BL%2021694%20BDL%201564334.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/MAORI%20BL%2021694%20BDL%201564334.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Maori exotic surface.',
  //     color: 'Mixed',
  //     finish: 'Polished',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['mixed', 'exotic'],

  //     longDescription: `Maori is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Maori offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Maori delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  //   {
  //     id: 'ee-012',
  //     name: 'Mirage Crystal Leather',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/MIRAGE%20CRYSTAL%20Leather%20BL%20467%20BDL%209414.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/MIRAGE%20CRYSTAL%20Leather%20BL%20467%20BDL%209414.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Mirage Crystal Leather exotic surface.',
  //     color: 'Mixed',
  //     finish: 'Leather',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['mixed', 'exotic'],

  //     longDescription: `Mirage Crystal Leather is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Mirage Crystal Leather offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Mirage Crystal Leather delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  //   {
  //     id: 'ee-013',
  //     name: 'Volupia Maestro',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/VOLUPIA%20MAESTRO%20BL%2028153%20BDL%20114404.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/VOLUPIA%20MAESTRO%20BL%2028153%20BDL%20114404.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Volupia Maestro exotic surface.',
  //     color: 'Mixed',
  //     finish: 'Polished',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['mixed', 'exotic'],

  //     longDescription: `Volupia Maestro is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Volupia Maestro offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Volupia Maestro delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  //   {
  //     id: 'ee-014',
  //     name: 'Vulkon',
  //     image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/VULKON%20BL%2029619%20BDL%20113977.webp',
  //     thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/VULKON%20BL%2029619%20BDL%20113977.webp'],
  //     collection: 'Exotics & Exclusives',
  //     description: 'Vulkon exotic surface.',
  //     color: 'Mixed',
  //     finish: 'Polished',
  //     useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
  //     tags: ['mixed', 'exotic'],

  //     longDescription: `Vulkon is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

  // Mined and processed with state-of-the-art technology, Vulkon offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

  // Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Vulkon delivers both aesthetic appeal and long-lasting performance.`,

  //     thickness: '18mm - 20mm',
  //     dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
  //     origin: 'Rajasthan, India'
  //   },
  // ],

  'exotics-exclusive':
    [
      {
        id: 'ee-001',
        name: 'Blue Deep',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/BLUE%20DEEP%20BL%2028847A%20BDL%20109429.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/BLUE%20DEEP%20BL%2028847A%20BDL%20109429.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Blue Deep exotic surface.',
        color: 'Blue',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['blue', 'exotic'],

        longDescription: `Blue Deep is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.
Mined and processed with state-of-the-art technology, Blue Deep offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects. Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Blue Deep delivers both aesthetic appeal and long-lasting performance.`,
        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-002',
        name: 'Brilliant Grey Honed',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/BRILLIANT%20GREY%20Honed%20BL%2081-21%20BDL%209429.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/BRILLIANT%20GREY%20Honed%20BL%2081-21%20BDL%209429.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Brilliant Grey Honed exotic surface.',
        color: 'Grey',
        finish: 'Honed',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['grey', 'exotic'],

        longDescription: `Brilliant Grey Honed is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Brilliant Grey Honed offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Brilliant Grey Honed delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-003',
        name: 'Calacata Matarazzo Honed',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CALACATA%20MATARAZZO%20Honed%20BL%2009-22%20BDL%2010423.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CALACATA%20MATARAZZO%20Honed%20BL%2009-22%20BDL%2010423.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Calacata Matarazzo Honed exotic surface.',
        color: 'White',
        finish: 'Honed',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['white', 'exotic'],

        longDescription: `Calacata Matarazzo Honed is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Calacata Matarazzo Honed offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Calacata Matarazzo Honed delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-004',
        name: 'Cristal Cartier',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CRISTAL%20CARTIER%20BL%20122%20BDL%209576.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CRISTAL%20CARTIER%20BL%20122%20BDL%209576.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Cristal Cartier exotic surface.',
        color: 'Grey',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['grey', 'exotic'],

        longDescription: `Cristal Cartier is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Cristal Cartier offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Cristal Cartier delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-005',
        name: 'Crystal Soulages',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CRYSTAL%20SOULAGES%20BL%2028932%20BDL%20112364.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CRYSTAL%20SOULAGES%20BL%2028932%20BDL%20112364.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Crystal Soulages exotic surface.',
        color: 'Mixed',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['mixed', 'exotic'],

        longDescription: `Crystal Soulages is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Crystal Soulages offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Crystal Soulages delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-006',
        name: 'Crystalita Blue',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CRYSTALITA%20BLUE%20BL%2022640%20%20SL%2051-61.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/CRYSTALITA%20BLUE%20BL%2022640%20%20SL%2051-61.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Crystalita Blue exotic surface.',
        color: 'Blue',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['blue', 'exotic'],

        longDescription: `Crystalita Blue is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Crystalita Blue offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Crystalita Blue delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-007',
        name: 'Fusion',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/FUSION%20BL%2027715%20BDL%20114171.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/FUSION%20BL%2027715%20BDL%20114171.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Fusion exotic surface.',
        color: 'Mixed',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['mixed', 'exotic'],

        longDescription: `Fusion is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Fusion offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Fusion delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-008',
        name: 'Hypnose',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/HYPNOSE%20%20BL%2027992%20BDL%20106874.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/HYPNOSE%20%20BL%2027992%20BDL%20106874.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Hypnose exotic surface.',
        color: 'Mixed',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['mixed', 'exotic'],

        longDescription: `Hypnose is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Hypnose offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Hypnose delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-009',
        name: 'Laguna Crystal',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/LAGUNA%20CRYSTAL%20BL%2001-23%20BDL%2011090.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/LAGUNA%20CRYSTAL%20BL%2001-23%20BDL%2011090.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Laguna Crystal exotic surface.',
        color: 'Grey',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['grey', 'exotic'],

        longDescription: `Laguna Crystal is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Laguna Crystal offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Laguna Crystal delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-010',
        name: 'Magma',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/MAGMA%20BL%203459%20SL%2029-39.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/MAGMA%20BL%203459%20SL%2029-39.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Magma exotic surface.',
        color: 'Mixed',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['mixed', 'exotic'],

        longDescription: `Magma is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Magma offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Magma delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-011',
        name: 'Maori',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/MAORI%20BL%2021694%20BDL%201564334.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/MAORI%20BL%2021694%20BDL%201564334.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Maori exotic surface.',
        color: 'Mixed',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['mixed', 'exotic'],

        longDescription: `Maori is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Maori offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Maori delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-012',
        name: 'Mirage Crystal Leather',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/MIRAGE%20CRYSTAL%20Leather%20BL%20467%20BDL%209414.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/MIRAGE%20CRYSTAL%20Leather%20BL%20467%20BDL%209414.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Mirage Crystal Leather exotic surface.',
        color: 'Mixed',
        finish: 'Leather',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['mixed', 'exotic'],

        longDescription: `Mirage Crystal Leather is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Mirage Crystal Leather offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Mirage Crystal Leather delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-013',
        name: 'Volupia Maestro',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/VOLUPIA%20MAESTRO%20BL%2028153%20BDL%20114404.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/VOLUPIA%20MAESTRO%20BL%2028153%20BDL%20114404.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Volupia Maestro exotic surface.',
        color: 'Mixed',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['mixed', 'exotic'],

        longDescription: `Volupia Maestro is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Volupia Maestro offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Volupia Maestro delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-014',
        name: 'Vulkon',
        image: 'https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/VULKON%20BL%2029619%20BDL%20113977.webp',
        thumbnailImages: ['https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master/Exotics-Exclusives/VULKON%20BL%2029619%20BDL%20113977.webp'],
        collection: 'Exotics & Exclusives',
        description: 'Vulkon exotic surface.',
        color: 'Mixed',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['mixed', 'exotic'],
        longDescription: `Vulkon is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.
Mined and processed with state-of-the-art technology, Vulkon offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Vulkon delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-015',
        name: 'Black Dahlia',
        image: '/assets/exotic/black-dahlia.jpeg',
        thumbnailImages: ['/assets/exotic/black-dahlia.jpeg'],
        collection: 'Exotics & Exclusives',
        description: 'Black Dahlia Exotic Stone is also called Exotic Stone to indicate that it is unique compared to other black natural stones. The process it takes to create the black stone naturally, takes several million years. Exotic Stones differ from other natural stones due to their extremely rare formations and consistently unique, visually enticing patterns. Black Dahlia stone is known for its high-contrast veining and stone movement. Because of this, it is a sought after stone for design projects involving high-end hospitality designs, luxury apartments and villas, and high-end commercial architecture. Whether used as Black Dahlia stone countertops, feature walls, or expansive flooring, this exotic black stone for countertops offers both aesthetic excellence and long-term performance. Its ability to complement modern, contemporary, and even classic design themes makes it highly versatile.',
        color: 'Mixed',
        finish: 'Polished, Honed, Leather, Flamed (If Applicable)',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding', 'Residential'],
        tags: ['mixed', 'exotic'],
        longDescription: `Black Dahlia is an elegant Indian natural stone that features a stunning design over a  consistent white colour. The serene white background with a distinctive pattern of purple waves on the top imparts a touch of tranquillity and a sophisticated look into the surroundings. This Indian marble has excellent resistance to heat, stains, scratches and high durability. Black Dahlia when incorporated with dark colour interiors or installed as flooring and kitchen countertops gives a magnificent look to your living space or interiors. Due to its exquisite design, durability and optimum compressive strength, it can also be used for outdoor flooring and cladding applications. This marble is available in the form of slabs of multiple sizes and thicknesses of 2cm and 3cm. We at Madhav Marble and Granite Ltd. process Indian marbles and granites as per the requisite dimensions and finishes. We are the top exporter of Indian natural stones. Enquire for any bulk requirements. We keep heavy stock of this material.
The beautiful Black Dahlia Exotic Stone features a lovely natural design consisting of free-flowing veining and a deep black background. As a natural black stone, Black Dahlia has artistic patterns and bold movements that will elevate the design of any space. The natural stones’ depth and intense contrast present a powerful visual impact and great stone contrast; it is a material of choice for high-end exterior and interior applications.
The beautiful free-flowing veins and black background of the gorgeous natural Black Dahlia stone have a pattern that is different for each stone. This means that for every stone, each design is unique and will ensure that the project has an exclusive design. The stone’s natural movement will also come to life when used with linear designs, when used in combination with deviations, and also with large design surfaces. This stone will add a balancing touch of elegance and sophistication to any high-end luxury commercial or residential environment.`,
        thickness: '20mm – 30mm, Custom',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'ee-016',
        name: 'Forest White',
        image: '/assets/exotic/forest-white.jpeg',
        thumbnailImages: ['/assets/exotic/forest-white.jpeg'],
        collection: 'Exotics & Exclusives',
        description: 'Forest White is a durable, premium marble featuring a creamy white background with wavy, greyish-brown streaks and dark grey spots. Renowned for its elegant appearance and high pressure resistance, this long-lasting stone is an architect favorite for high-end countertops, flooring, staircases, and accent walls. Madhav Marble & Granite Ltd. manufactures and supplies this beautiful material in slabs, tiles, and blocks. Contact us for premium quality natural stones.',
        color: 'Mixed',
        finish: 'Polished, Honed, Leather, Flamed (If Applicable), Giano Finish',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding', 'Residential'],
        tags: ['mixed', 'exotic'],
        longDescription: `Forest White is a marble stone with astonishing beauty. It consists of a creamy white background with greyish brown streaks and veins spread in more of a wavy fashion and also has dark grey spots along with these waves. This pattern gives the stone an exclusive and outstanding look and elevates the appearance of any place where installed. Owing to its graceful pattern and characteristics this marble is a popular choice among architects and designers for building stylish and high-end projects. Along with its visual appeal, this natural stone is highly durable, long-lasting and could resist immense pressure. All these properties make Forest White marble perfect material for use as countertops, staircases, flooring, accent walls, fireplaces, sculptures, fountains, decoratives, and many more applications. You can avail of this marble in premium quality from Madhav Marble & Granite Ltd. We are one of the leading manufacturers and suppliers of natural stones and process stones in the form of slabs, tiles and blocks.`,
        thickness: '2cm – 3cm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India',
        packaging: 'To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching. '
      },
      {
        id: 'ee-017',
        name: 'Jaisalmer',
        image: '/assets/exotic/jaisalmer.jpeg',
        thumbnailImages: ['/assets/exotic/jaisalmer.jpeg'],
        collection: 'Exotics & Exclusives',
        description: 'Jaisalmer is a durable, earthy marble with a creamish-peach base, walnut-apricot veins, and subtle grey patches. Highly versatile and pressure-resistant, it is perfect for indoor and outdoor flooring, countertops, and cladding. Madhav Marble & Granite Ltd. supplies this premium stone in custom slabs, tiles, and blocks. Contact us for bulk orders.',
        color: 'Mixed',
        finish: 'Polished, Honed, Leather, Flamed (If Applicable), Giano Finish',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding', 'Residential'],
        tags: ['mixed', 'exotic'],
        longDescription: `Jaisalmer is an adorable marble stone with a creamish peach colour base. It features an amalgamation of walnut and apricot shade veins with irregularly distributed mild grey patches spread all over the surface. These beautiful tones and composite pattern gives this stone a natural and earthy look which makes this stone applicable for both indoors and outdoors. Owing to its versatility this stone can be used to adorn kitchen islands, fireplaces, flooring, tabletops, vanity tops, shower surrounds, staircases, stone pillars, and for many other applications. Along with its astonishing appearance, this natural stone is extremely durable and could resist high compression. At Madhav Marble & Granite Ltd., we provide you with the best quality Jaisalmer marble in the form of slabs, tiles and blocks in various cut sizes, thicknesses, dimensions and finishes. We are among renowned suppliers and exporters of natural stones. Contact for enquiries and bulk requirements.`,
        thickness: '2cm – 3cm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India',
        packaging: 'To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching. '
      },
      {
        id: 'ee-018',
        name: 'Nero Oceano',
        image: '/assets/exotic/nero-oceano.jpeg',
        thumbnailImages: ['/assets/exotic/nero-oceano.jpeg'],
        collection: 'Exotics & Exclusives',
        description: 'Nero Oceano is an exclusive black marble featuring parallel, edgy white and grey veins that create a dynamic, high-end look. A favorite among interior designers and architects for luxury commercial and residential projects, it delivers a stunning visual impact when paired with both light tones or sleek, dark elements. Perfect for countertops, backsplashes, vanities, and fireplaces, Madhav Marble & Granite Ltd. provides this premium, durable stone in custom slabs, tiles, and blocks. Contact us for bulk orders.',
        color: 'Mixed',
        finish: 'Polished, Honed, Leather, Flamed (If Applicable), Giano Finish',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding', 'Residential'],
        tags: ['mixed', 'exotic'],
        longDescription: `Nero Oceano is an exclusive black colour marble featuring a beautiful pattern. It consists of a deep black base with edgy white and grey veins arranged parallelly, this stone a dynamic flow. This natural stone is known for its high-end look and uplifts the ambience of any place where installed. When combined with light and white hues, it creates an elegant and clean look and when used in all-black theme or with shiny and dark elements, provides a luxurious impact. It is a popular choice of black stone among interior designers, builders and architects for both commercial and residential projects. You can use it as backsplashes, vanity tops, kitchen countertops, bathtub surrounds, fireplaces, sculptures, stone pillars, decorative pieces, and a lot more. Avail Nero Oceano marble in premium quality from Madhav Marble & Granite Ltd. We provide stones in the form of slabs, tiles and blocks in various sizes, finishes and thicknesses. Explore more varieties and contact for bulk requirements.`,
        thickness: '2cm – 3cm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India',
        packaging: 'To ensure a protective packaging for our slabs, thin plastic sheets are placed between every slab so as to protect them from scratches and other damages. Gangsaw and cutter slabs are packed in well fumigated wooden trays before dispatching. '
      },
    ],

  'granite-cutter-slabs-supplier':
    [
      {
        id: 'gcss-001',
        name: 'Bengal White',
        image: '/assets/granite-cutter-slabs-supplier/BENGAL-WHITE-1.png',
        thumbnailImages: ['/assets/granite-cutter-slabs-supplier/BENGAL-WHITE-1.png'],
        collection: 'Granite Cutter Slabs',
        description: 'Bengal White granite cutter slab.',
        color: 'White',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['white', 'granite'],

        longDescription: `Bengal White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Bengal White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Bengal White delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'gcss-002',
        name: 'Black Mariance',
        image: '/assets/granite-cutter-slabs-supplier/BLACK-MARIANCE-1.png',
        thumbnailImages: ['/assets/granite-cutter-slabs-supplier/BLACK-MARIANCE-1.png'],
        collection: 'Granite Cutter Slabs',
        description: 'Black Mariance granite cutter slab.',
        color: 'Black',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['black', 'granite'],

        longDescription: `Black Mariance is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Black Mariance offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Black Mariance delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'gcss-003',
        name: 'Coffee Brown',
        image: '/assets/granite-cutter-slabs-supplier/COFFEE-BROWN-1.png',
        thumbnailImages: ['/assets/granite-cutter-slabs-supplier/COFFEE-BROWN-1.png'],
        collection: 'Granite Cutter Slabs',
        description: 'Coffee Brown granite cutter slab.',
        color: 'Brown',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['brown', 'granite'],

        longDescription: `Coffee Brown is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Coffee Brown offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Coffee Brown delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'gcss-004',
        name: 'Colonial White',
        image: '/assets/granite-cutter-slabs-supplier/COLONIAL-WHITE-1.png',
        thumbnailImages: ['/assets/granite-cutter-slabs-supplier/COLONIAL-WHITE-1.png'],
        collection: 'Granite Cutter Slabs',
        description: 'Colonial White granite cutter slab.',
        color: 'White',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['white', 'granite'],

        longDescription: `Colonial White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Colonial White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Colonial White delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'gcss-005',
        name: 'Imperial Gold',
        image: '/assets/granite-cutter-slabs-supplier/IMPERIAL-GOLD-1.png',
        thumbnailImages: ['/assets/granite-cutter-slabs-supplier/IMPERIAL-GOLD-1.png'],
        collection: 'Granite Cutter Slabs',
        description: 'Imperial Gold granite cutter slab.',
        color: 'Gold',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['gold', 'granite'],

        longDescription: `Imperial Gold is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Imperial Gold offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Imperial Gold delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'gcss-006',
        name: 'Kingfisher Blue',
        image: '/assets/granite-cutter-slabs-supplier/KINGFISHER-BLUE-1.png',
        thumbnailImages: ['/assets/granite-cutter-slabs-supplier/KINGFISHER-BLUE-1.png'],
        collection: 'Granite Cutter Slabs',
        description: 'Kingfisher Blue granite cutter slab.',
        color: 'Blue',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['blue', 'granite'],

        longDescription: `Kingfisher Blue is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Kingfisher Blue offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Kingfisher Blue delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'gcss-007',
        name: 'Nova Black',
        image: '/assets/granite-cutter-slabs-supplier/NOVA-BLACK-50003CM120-1.png',
        thumbnailImages: ['/assets/granite-cutter-slabs-supplier/NOVA-BLACK-50003CM120-1.png'],
        collection: 'Granite Cutter Slabs',
        description: 'Nova Black granite cutter slab.',
        color: 'Black',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['black', 'granite'],

        longDescription: `Nova Black is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Nova Black offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Nova Black delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'gcss-008',
        name: 'Romantic Red',
        image: '/assets/granite-cutter-slabs-supplier/ROMANTIC-RED-01-1.png',
        thumbnailImages: ['/assets/granite-cutter-slabs-supplier/ROMANTIC-RED-01-1.png'],
        collection: 'Granite Cutter Slabs',
        description: 'Romantic Red granite cutter slab.',
        color: 'Red',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['red', 'granite'],

        longDescription: `Romantic Red is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Romantic Red offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Romantic Red delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'gcss-009',
        name: 'Spice Black',
        image: '/assets/granite-cutter-slabs-supplier/SPICE-BLACK-01-1.png',
        thumbnailImages: ['/assets/granite-cutter-slabs-supplier/SPICE-BLACK-01-1.png'],
        collection: 'Granite Cutter Slabs',
        description: 'Spice Black granite cutter slab.',
        color: 'Black',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['black', 'granite'],

        longDescription: `Spice Black is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Spice Black offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Spice Black delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'gcss-010',
        name: 'Thunder White',
        image: '/assets/granite-cutter-slabs-supplier/THUNDER-WHITE-1.png',
        thumbnailImages: ['/assets/granite-cutter-slabs-supplier/THUNDER-WHITE-1.png'],
        collection: 'Granite Cutter Slabs',
        description: 'Thunder White granite cutter slab.',
        color: 'White',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['white', 'granite'],

        longDescription: `Thunder White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Thunder White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Thunder White delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'gcss-011',
        name: 'Titanium',
        image: '/assets/granite-cutter-slabs-supplier/TITANIUM-1.png',
        thumbnailImages: ['/assets/granite-cutter-slabs-supplier/TITANIUM-1.png'],
        collection: 'Granite Cutter Slabs',
        description: 'Titanium granite cutter slab.',
        color: 'Grey',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['grey', 'granite'],

        longDescription: `Titanium is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Titanium offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Titanium delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
      {
        id: 'gcss-012',
        name: 'Viscount White',
        image: '/assets/granite-cutter-slabs-supplier/VISCOUNT-WHITE-01-1.png',
        thumbnailImages: ['/assets/granite-cutter-slabs-supplier/VISCOUNT-WHITE-01-1.png'],
        collection: 'Granite Cutter Slabs',
        description: 'Viscount White granite cutter slab.',
        color: 'White',
        finish: 'Polished',
        useCase: ['Countertops', 'Flooring', 'Wall Cladding'],
        tags: ['white', 'granite'],

        longDescription: `Viscount White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Viscount White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Viscount White delivers both aesthetic appeal and long-lasting performance.`,

        thickness: '18mm - 20mm',
        dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
        origin: 'Rajasthan, India'
      },
    ],

  'quartzites': [
    {
      id: 'qz-001',
      name: 'Crystallo Classico',
      image: '/assets/QUARTZITES/CRYSTALLO CLASSICO .webp',
      thumbnailImages: ['/assets/QUARTZITES/CRYSTALLO CLASSICO .webp'],
      collection: 'Quartzites',
      description: 'Crystallo Classico quartzite with elegant crystalline patterns.',
      tags: ['quartzite', 'natural', 'premium'],

      longDescription: `Crystallo Classico is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Crystallo Classico offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Crystallo Classico delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'qz-002',
      name: 'Crystallo Oro',
      image: '/assets/QUARTZITES/CRYSTALLO ORO.webp',
      thumbnailImages: ['/assets/QUARTZITES/CRYSTALLO ORO.webp'],
      collection: 'Quartzites',
      description: 'Crystallo Oro quartzite with golden shimmer.',
      tags: ['quartzite', 'gold', 'premium'],

      longDescription: `Crystallo Oro is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Crystallo Oro offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Crystallo Oro delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'qz-003',
      name: 'Crystallo Verde',
      image: '/assets/QUARTZITES/CRYSTALLO VERDE .webp',
      thumbnailImages: ['/assets/QUARTZITES/CRYSTALLO VERDE .webp'],
      collection: 'Quartzites',
      description: 'Crystallo Verde quartzite with lush green tones.',
      tags: ['quartzite', 'green', 'premium'],

      longDescription: `Crystallo Verde is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Crystallo Verde offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Crystallo Verde delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'qz-004',
      name: 'Crystallo White',
      image: '/assets/QUARTZITES/CRYSTALLO WHITE .webp',
      thumbnailImages: ['/assets/QUARTZITES/CRYSTALLO WHITE .webp'],
      collection: 'Quartzites',
      description: 'Crystallo White quartzite with pristine white surface.',
      tags: ['quartzite', 'white', 'premium'],

      longDescription: `Crystallo White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Crystallo White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Crystallo White delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'qz-005',
      name: 'Fusion',
      image: '/assets/QUARTZITES/FUSION.webp',
      thumbnailImages: ['/assets/QUARTZITES/FUSION.webp'],
      collection: 'Quartzites',
      description: 'Fusion quartzite with dynamic mixed patterns.',
      tags: ['quartzite', 'mixed', 'premium'],

      longDescription: `Fusion is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Fusion offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Fusion delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'qz-006',
      name: 'Glacier Blue',
      image: '/assets/QUARTZITES/GLACIER BLUE.webp',
      thumbnailImages: ['/assets/QUARTZITES/GLACIER BLUE.webp'],
      collection: 'Quartzites',
      description: 'Glacier Blue quartzite with icy blue tones.',
      tags: ['quartzite', 'blue', 'premium'],

      longDescription: `Glacier Blue is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Glacier Blue offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Glacier Blue delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'qz-007',
      name: 'Grey Father',
      image: '/assets/QUARTZITES/GREY FATHER.webp',
      thumbnailImages: ['/assets/QUARTZITES/GREY FATHER.webp'],
      collection: 'Quartzites',
      description: 'Grey Father quartzite with deep grey character.',
      tags: ['quartzite', 'grey', 'premium'],

      longDescription: `Grey Father is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Grey Father offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Grey Father delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'qz-008',
      name: 'Lava Oro',
      image: '/assets/QUARTZITES/LAVA ORO.webp',
      thumbnailImages: ['/assets/QUARTZITES/LAVA ORO.webp'],
      collection: 'Quartzites',
      description: 'Lava Oro quartzite with warm volcanic gold tones.',
      tags: ['quartzite', 'gold', 'premium'],

      longDescription: `Lava Oro is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Lava Oro offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Lava Oro delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'qz-009',
      name: 'Majestic Grey',
      image: '/assets/QUARTZITES/MAJESTIC GREY.webp',
      thumbnailImages: ['/assets/QUARTZITES/MAJESTIC GREY.webp'],
      collection: 'Quartzites',
      description: 'Majestic Grey quartzite with regal grey finish.',
      tags: ['quartzite', 'grey', 'premium'],

      longDescription: `Majestic Grey is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Majestic Grey offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Majestic Grey delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'qz-010',
      name: 'Mango Fusion',
      image: '/assets/QUARTZITES/MANGO FUSION.webp',
      thumbnailImages: ['/assets/QUARTZITES/MANGO FUSION.webp'],
      collection: 'Quartzites',
      description: 'Mango Fusion quartzite with warm tropical hues.',
      tags: ['quartzite', 'mixed', 'premium'],

      longDescription: `Mango Fusion is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Mango Fusion offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Mango Fusion delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'qz-011',
      name: 'Metallic Blue',
      image: '/assets/QUARTZITES/METALLIC BLUE.webp',
      thumbnailImages: ['/assets/QUARTZITES/METALLIC BLUE.webp'],
      collection: 'Quartzites',
      description: 'Metallic Blue quartzite with shimmering blue metallic finish.',
      tags: ['quartzite', 'blue', 'premium'],

      longDescription: `Metallic Blue is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Metallic Blue offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Metallic Blue delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'qz-012',
      name: 'Pandora White',
      image: '/assets/QUARTZITES/PANDORA WHITE.webp',
      thumbnailImages: ['/assets/QUARTZITES/PANDORA WHITE.webp'],
      collection: 'Quartzites',
      description: 'Pandora White quartzite with elegant white surface.',
      tags: ['quartzite', 'white', 'premium'],

      longDescription: `Pandora White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Pandora White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Pandora White delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'qz-013',
      name: 'Patagonia Pink',
      image: '/assets/QUARTZITES/PATAGONIA PINK .webp',
      thumbnailImages: ['/assets/QUARTZITES/PATAGONIA PINK .webp'],
      collection: 'Quartzites',
      description: 'Patagonia Pink quartzite with subtle pink tones.',
      tags: ['quartzite', 'pink', 'premium'],

      longDescription: `Patagonia Pink is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Patagonia Pink offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Patagonia Pink delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
  ],

  'granite': [
    {
      id: 'gr-001',
      name: 'Alaska Yellow',
      image: '/assets/GRANITE/ALASKA YELLOW.webp',
      thumbnailImages: ['/assets/GRANITE/ALASKA YELLOW.webp'],
      collection: 'Granite',
      description: 'Alaska Yellow granite with warm golden tones.',
      tags: ['granite', 'yellow', 'premium'],

      longDescription: `Alaska Yellow is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Alaska Yellow offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Alaska Yellow delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-002',
      name: 'Alpinus White',
      image: '/assets/GRANITE/ALPINUS WHITE.webp',
      thumbnailImages: ['/assets/GRANITE/ALPINUS WHITE.webp'],
      collection: 'Granite',
      description: 'Alpinus White granite with alpine white purity.',
      tags: ['granite', 'white', 'premium'],

      longDescription: `Alpinus White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Alpinus White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Alpinus White delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-003',
      name: 'Amazon White',
      image: '/assets/GRANITE/AMAZON WHITE.webp',
      thumbnailImages: ['/assets/GRANITE/AMAZON WHITE.webp'],
      collection: 'Granite',
      description: 'Amazon White granite with exotic white patterns.',
      tags: ['granite', 'white', 'premium'],

      longDescription: `Amazon White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Amazon White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Amazon White delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-004',
      name: 'Arctic Blue',
      image: '/assets/GRANITE/ARCTIC BLUE.webp',
      thumbnailImages: ['/assets/GRANITE/ARCTIC BLUE.webp'],
      collection: 'Granite',
      description: 'Arctic Blue granite with cool blue tones.',
      tags: ['granite', 'blue', 'premium'],

      longDescription: `Arctic Blue is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Arctic Blue offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Arctic Blue delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-005',
      name: 'Aspen White',
      image: '/assets/GRANITE/ASPEN WHITE.webp',
      thumbnailImages: ['/assets/GRANITE/ASPEN WHITE.webp'],
      collection: 'Granite',
      description: 'Aspen White granite with crisp white finish.',
      tags: ['granite', 'white', 'premium'],

      longDescription: `Aspen White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Aspen White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Aspen White delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-006',
      name: 'Azul Nuevo',
      image: '/assets/GRANITE/AZUL NUEVO.webp',
      thumbnailImages: ['/assets/GRANITE/AZUL NUEVO.webp'],
      collection: 'Granite',
      description: 'Azul Nuevo granite with striking blue character.',
      tags: ['granite', 'blue', 'premium'],

      longDescription: `Azul Nuevo is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Azul Nuevo offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Azul Nuevo delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-007',
      name: 'Blue Dunes Gold',
      image: '/assets/GRANITE/BLUE DUNES GOLD (2).webp',
      thumbnailImages: ['/assets/GRANITE/BLUE DUNES GOLD (2).webp'],
      collection: 'Granite',
      description: 'Blue Dunes Gold granite with golden blue veining.',
      tags: ['granite', 'blue', 'gold'],

      longDescription: `Blue Dunes Gold is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Blue Dunes Gold offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Blue Dunes Gold delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-008',
      name: 'Blue Dunes',
      image: '/assets/GRANITE/BLUE DUNES.webp',
      thumbnailImages: ['/assets/GRANITE/BLUE DUNES.webp'],
      collection: 'Granite',
      description: 'Blue Dunes granite with oceanic blue patterns.',
      tags: ['granite', 'blue', 'premium'],

      longDescription: `Blue Dunes is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Blue Dunes offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Blue Dunes delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-009',
      name: 'Blue Flower',
      image: '/assets/GRANITE/BLUE FLOWER.webp',
      thumbnailImages: ['/assets/GRANITE/BLUE FLOWER.webp'],
      collection: 'Granite',
      description: 'Blue Flower granite with floral blue accents.',
      tags: ['granite', 'blue', 'premium'],

      longDescription: `Blue Flower is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Blue Flower offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Blue Flower delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-010',
      name: 'Cafe Moca',
      image: '/assets/GRANITE/CAFE MOCA.webp',
      thumbnailImages: ['/assets/GRANITE/CAFE MOCA.webp'],
      collection: 'Granite',
      description: 'Cafe Moca granite with rich coffee-brown tones.',
      tags: ['granite', 'brown', 'premium'],

      longDescription: `Cafe Moca is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Cafe Moca offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Cafe Moca delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-011',
      name: 'Calacatta D Oro',
      image: '/assets/GRANITE/Calacatta D Oro - Marble .webp',
      thumbnailImages: ['/assets/GRANITE/Calacatta D Oro - Marble .webp'],
      collection: 'Granite',
      description: 'Calacatta D Oro with luxurious golden veining.',
      tags: ['granite', 'white', 'gold'],

      longDescription: `Calacatta D Oro is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Calacatta D Oro offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Calacatta D Oro delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-012',
      name: 'Champagne Rio',
      image: '/assets/GRANITE/Champagne Rio.webp',
      thumbnailImages: ['/assets/GRANITE/Champagne Rio.webp'],
      collection: 'Granite',
      description: 'Champagne Rio granite with sparkling champagne tones.',
      tags: ['granite', 'gold', 'premium'],

      longDescription: `Champagne Rio is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Champagne Rio offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Champagne Rio delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-013',
      name: 'Desert Storm',
      image: '/assets/GRANITE/DESERT STORM.webp',
      thumbnailImages: ['/assets/GRANITE/DESERT STORM.webp'],
      collection: 'Granite',
      description: 'Desert Storm granite with warm sandy tones.',
      tags: ['granite', 'beige', 'premium'],

      longDescription: `Desert Storm is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Desert Storm offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Desert Storm delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-014',
      name: 'Equinox',
      image: '/assets/GRANITE/EQUINOX.webp',
      thumbnailImages: ['/assets/GRANITE/EQUINOX.webp'],
      collection: 'Granite',
      description: 'Equinox granite with balanced light and dark patterns.',
      tags: ['granite', 'mixed', 'premium'],

      longDescription: `Equinox is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Equinox offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Equinox delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-015',
      name: 'Forrester',
      image: '/assets/GRANITE/FORRESTER.webp',
      thumbnailImages: ['/assets/GRANITE/FORRESTER.webp'],
      collection: 'Granite',
      description: 'Forrester granite with natural forest-inspired tones.',
      tags: ['granite', 'green', 'premium'],

      longDescription: `Forrester is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Forrester offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Forrester delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-016',
      name: 'Galapagos',
      image: '/assets/GRANITE/GALAPAGOS.webp',
      thumbnailImages: ['/assets/GRANITE/GALAPAGOS.webp'],
      collection: 'Granite',
      description: 'Galapagos granite with exotic island-inspired patterns.',
      tags: ['granite', 'mixed', 'premium'],

      longDescription: `Galapagos is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Galapagos offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Galapagos delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-017',
      name: 'Havana Blue',
      image: '/assets/GRANITE/HAVANA BLUE.webp',
      thumbnailImages: ['/assets/GRANITE/HAVANA BLUE.webp'],
      collection: 'Granite',
      description: 'Havana Blue granite with deep tropical blue.',
      tags: ['granite', 'blue', 'premium'],

      longDescription: `Havana Blue is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Havana Blue offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Havana Blue delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-018',
      name: 'Ice Cream',
      image: '/assets/GRANITE/ICE CREAM.webp',
      thumbnailImages: ['/assets/GRANITE/ICE CREAM.webp'],
      collection: 'Granite',
      description: 'Ice Cream granite with soft creamy tones.',
      tags: ['granite', 'cream', 'premium'],

      longDescription: `Ice Cream is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Ice Cream offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Ice Cream delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-019',
      name: 'Jasper Blue',
      image: '/assets/GRANITE/JASPER BLUE.webp',
      thumbnailImages: ['/assets/GRANITE/JASPER BLUE.webp'],
      collection: 'Granite',
      description: 'Jasper Blue granite with vibrant blue character.',
      tags: ['granite', 'blue', 'premium'],

      longDescription: `Jasper Blue is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Jasper Blue offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Jasper Blue delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-020',
      name: 'Jasper Gold',
      image: '/assets/GRANITE/JASPER GOLD.webp',
      thumbnailImages: ['/assets/GRANITE/JASPER GOLD.webp'],
      collection: 'Granite',
      description: 'Jasper Gold granite with rich golden hues.',
      tags: ['granite', 'gold', 'premium'],

      longDescription: `Jasper Gold is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Jasper Gold offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Jasper Gold delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-021',
      name: 'Libre',
      image: '/assets/GRANITE/LIBRE.webp',
      thumbnailImages: ['/assets/GRANITE/LIBRE.webp'],
      collection: 'Granite',
      description: 'Libre granite with free-flowing natural patterns.',
      tags: ['granite', 'mixed', 'premium'],

      longDescription: `Libre is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Libre offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Libre delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-022',
      name: 'Marine Black',
      image: '/assets/GRANITE/MARINE BLACK.webp',
      thumbnailImages: ['/assets/GRANITE/MARINE BLACK.webp'],
      collection: 'Granite',
      description: 'Marine Black granite with deep oceanic black.',
      tags: ['granite', 'black', 'premium'],

      longDescription: `Marine Black is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Marine Black offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Marine Black delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-023',
      name: 'Meridien',
      image: '/assets/GRANITE/MERIDIEN.webp',
      thumbnailImages: ['/assets/GRANITE/MERIDIEN.webp'],
      collection: 'Granite',
      description: 'Meridien granite with sophisticated meridian patterns.',
      tags: ['granite', 'mixed', 'premium'],

      longDescription: `Meridien is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Meridien offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Meridien delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-024',
      name: 'Monalisa',
      image: '/assets/GRANITE/MONALISA.webp',
      thumbnailImages: ['/assets/GRANITE/MONALISA.webp'],
      collection: 'Granite',
      description: 'Monalisa granite with artistic natural beauty.',
      tags: ['granite', 'mixed', 'premium'],

      longDescription: `Monalisa is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Monalisa offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Monalisa delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-025',
      name: 'Sea Pearl',
      image: '/assets/GRANITE/SEA PEARL.webp',
      thumbnailImages: ['/assets/GRANITE/SEA PEARL.webp'],
      collection: 'Granite',
      description: 'Sea Pearl granite with lustrous pearl-like finish.',
      tags: ['granite', 'white', 'premium'],

      longDescription: `Sea Pearl is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Sea Pearl offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Sea Pearl delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-026',
      name: 'Silver Ash',
      image: '/assets/GRANITE/SILVER ASH.webp',
      thumbnailImages: ['/assets/GRANITE/SILVER ASH.webp'],
      collection: 'Granite',
      description: 'Silver Ash granite with elegant silver-grey tones.',
      tags: ['granite', 'grey', 'premium'],

      longDescription: `Silver Ash is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Silver Ash offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Silver Ash delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-027',
      name: 'Snow Ridge',
      image: '/assets/GRANITE/SNOW RIDGE(1).webp',
      thumbnailImages: ['/assets/GRANITE/SNOW RIDGE(1).webp'],
      collection: 'Granite',
      description: 'Snow Ridge granite with crisp snow-white ridges.',
      tags: ['granite', 'white', 'premium'],

      longDescription: `Snow Ridge is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Snow Ridge offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Snow Ridge delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'gr-028',
      name: 'Spartacos',
      image: '/assets/GRANITE/SPARTACOS.webp',
      thumbnailImages: ['/assets/GRANITE/SPARTACOS.webp'],
      collection: 'Granite',
      description: 'Spartacos granite with bold warrior-like character.',
      tags: ['granite', 'mixed', 'premium'],

      longDescription: `Spartacos is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Spartacos offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Spartacos delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
  ],

  'marbles': [
    {
      id: 'mb-001',
      name: 'Balcan Grey',
      image: '/assets/Marbles/BALCAN GREY.webp',
      thumbnailImages: ['/assets/Marbles/BALCAN GREY.webp'],
      collection: 'Marbles',
      description: 'Balcan Grey marble with soft grey elegance.',
      tags: ['marble', 'grey', 'premium'],

      longDescription: `Balcan Grey is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Balcan Grey offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Balcan Grey delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-002',
      name: 'Bardiglio',
      image: '/assets/Marbles/BARDIGLIO.webp',
      thumbnailImages: ['/assets/Marbles/BARDIGLIO.webp'],
      collection: 'Marbles',
      description: 'Bardiglio marble with Italian-inspired dark grey veining.',
      tags: ['marble', 'grey', 'premium'],

      longDescription: `Bardiglio is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Bardiglio offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Bardiglio delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-003',
      name: 'Belgia White',
      image: '/assets/Marbles/BELGIA WHITE.webp',
      thumbnailImages: ['/assets/Marbles/BELGIA WHITE.webp'],
      collection: 'Marbles',
      description: 'Belgia White marble with pure white beauty.',
      tags: ['marble', 'white', 'premium'],

      longDescription: `Belgia White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Belgia White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Belgia White delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-004',
      name: 'Bianco Sula',
      image: '/assets/Marbles/BIANCO SULA .webp',
      thumbnailImages: ['/assets/Marbles/BIANCO SULA .webp'],
      collection: 'Marbles',
      description: 'Bianco Sula marble with pristine white finish.',
      tags: ['marble', 'white', 'premium'],

      longDescription: `Bianco Sula is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Bianco Sula offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Bianco Sula delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-005',
      name: 'Botticino Classico',
      image: '/assets/Marbles/BOTTICINO CLASSICO.webp',
      thumbnailImages: ['/assets/Marbles/BOTTICINO CLASSICO.webp'],
      collection: 'Marbles',
      description: 'Botticino Classico marble with classic beige warmth.',
      tags: ['marble', 'beige', 'premium'],

      longDescription: `Botticino Classico is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Botticino Classico offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Botticino Classico delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-006',
      name: 'Breccia Aurora',
      image: '/assets/Marbles/BRECCIA AUR0RA.webp',
      thumbnailImages: ['/assets/Marbles/BRECCIA AUR0RA.webp'],
      collection: 'Marbles',
      description: 'Breccia Aurora marble with warm aurora-inspired tones.',
      tags: ['marble', 'mixed', 'premium'],

      longDescription: `Breccia Aurora is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Breccia Aurora offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Breccia Aurora delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-007',
      name: 'Breccia Damascata',
      image: '/assets/Marbles/BRECCIA DAMASCATA.webp',
      thumbnailImages: ['/assets/Marbles/BRECCIA DAMASCATA.webp'],
      collection: 'Marbles',
      description: 'Breccia Damascata marble with exotic damascus patterns.',
      tags: ['marble', 'mixed', 'premium'],

      longDescription: `Breccia Damascata is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Breccia Damascata offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Breccia Damascata delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-008',
      name: 'Breccia Grey',
      image: '/assets/Marbles/BRECCIA GREY.webp',
      thumbnailImages: ['/assets/Marbles/BRECCIA GREY.webp'],
      collection: 'Marbles',
      description: 'Breccia Grey marble with distinguished grey patterns.',
      tags: ['marble', 'grey', 'premium'],

      longDescription: `Breccia Grey is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Breccia Grey offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Breccia Grey delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-009',
      name: 'Brown Fantasy',
      image: '/assets/Marbles/BROWN FANTASY.webp',
      thumbnailImages: ['/assets/Marbles/BROWN FANTASY.webp'],
      collection: 'Marbles',
      description: 'Brown Fantasy marble with rich brown fantasy swirls.',
      tags: ['marble', 'brown', 'premium'],

      longDescription: `Brown Fantasy is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Brown Fantasy offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Brown Fantasy delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-010',
      name: 'Coastal Blue',
      image: '/assets/Marbles/COASTAL BLUE.webp',
      thumbnailImages: ['/assets/Marbles/COASTAL BLUE.webp'],
      collection: 'Marbles',
      description: 'Coastal Blue marble with serene coastal blue tones.',
      tags: ['marble', 'blue', 'premium'],

      longDescription: `Coastal Blue is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Coastal Blue offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Coastal Blue delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-011',
      name: 'Fantasy White',
      image: '/assets/Marbles/FANTASY WHITE.webp',
      thumbnailImages: ['/assets/Marbles/FANTASY WHITE.webp'],
      collection: 'Marbles',
      description: 'Fantasy White marble with dreamy white patterns.',
      tags: ['marble', 'white', 'premium'],

      longDescription: `Fantasy White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Fantasy White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Fantasy White delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-012',
      name: 'Greenland',
      image: '/assets/Marbles/GREENLAND.webp',
      thumbnailImages: ['/assets/Marbles/GREENLAND.webp'],
      collection: 'Marbles',
      description: 'Greenland marble with lush green natural beauty.',
      tags: ['marble', 'green', 'premium'],

      longDescription: `Greenland is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Greenland offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Greenland delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-013',
      name: 'Honey Onyx',
      image: '/assets/Marbles/HONEY ONYX.webp',
      thumbnailImages: ['/assets/Marbles/HONEY ONYX.webp'],
      collection: 'Marbles',
      description: 'Honey Onyx marble with translucent golden warmth.',
      tags: ['marble', 'gold', 'premium'],

      longDescription: `Honey Onyx is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Honey Onyx offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Honey Onyx delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-014',
      name: 'Indian Carrara White',
      image: '/assets/Marbles/INDIAN CARRARA WHITE.webp',
      thumbnailImages: ['/assets/Marbles/INDIAN CARRARA WHITE.webp'],
      collection: 'Marbles',
      description: 'Indian Carrara White marble with classic Carrara-inspired veining.',
      tags: ['marble', 'white', 'premium'],

      longDescription: `Indian Carrara White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Indian Carrara White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Indian Carrara White delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-015',
      name: 'Indian Statuario',
      image: '/assets/Marbles/INDIAN STATUARIO.webp',
      thumbnailImages: ['/assets/Marbles/INDIAN STATUARIO.webp'],
      collection: 'Marbles',
      description: 'Indian Statuario marble with premium Statuario character.',
      tags: ['marble', 'white', 'premium'],

      longDescription: `Indian Statuario is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Indian Statuario offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Indian Statuario delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-016',
      name: 'Milano',
      image: '/assets/Marbles/MILANO.webp',
      thumbnailImages: ['/assets/Marbles/MILANO.webp'],
      collection: 'Marbles',
      description: 'Milano marble with sophisticated Italian design.',
      tags: ['marble', 'mixed', 'premium'],

      longDescription: `Milano is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Milano offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Milano delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-017',
      name: 'Monalisa Classic',
      image: '/assets/Marbles/MONALISA CLASSIC .webp',
      thumbnailImages: ['/assets/Marbles/MONALISA CLASSIC .webp'],
      collection: 'Marbles',
      description: 'Monalisa Classic marble with timeless artistic beauty.',
      tags: ['marble', 'mixed', 'premium'],

      longDescription: `Monalisa Classic is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Monalisa Classic offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Monalisa Classic delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-018',
      name: 'Monalisa',
      image: '/assets/Marbles/MONALISA.1.webp',
      thumbnailImages: ['/assets/Marbles/MONALISA.1.webp'],
      collection: 'Marbles',
      description: 'Monalisa marble with artistic natural patterns.',
      tags: ['marble', 'mixed', 'premium'],

      longDescription: `Monalisa is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Monalisa offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Monalisa delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-019',
      name: 'Panda White',
      image: '/assets/Marbles/PANDA WHITE.webp',
      thumbnailImages: ['/assets/Marbles/PANDA WHITE.webp'],
      collection: 'Marbles',
      description: 'Panda White marble with striking black and white contrast.',
      tags: ['marble', 'white', 'premium'],

      longDescription: `Panda White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Panda White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Panda White delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-020',
      name: 'River Blue',
      image: '/assets/Marbles/RIVER BLUE.webp',
      thumbnailImages: ['/assets/Marbles/RIVER BLUE.webp'],
      collection: 'Marbles',
      description: 'River Blue marble with flowing blue river patterns.',
      tags: ['marble', 'blue', 'premium'],

      longDescription: `River Blue is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, River Blue offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, River Blue delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-021',
      name: 'Savanna Grey',
      image: '/assets/Marbles/SAVANNA GREY.webp',
      thumbnailImages: ['/assets/Marbles/SAVANNA GREY.webp'],
      collection: 'Marbles',
      description: 'Savanna Grey marble with warm African grey tones.',
      tags: ['marble', 'grey', 'premium'],

      longDescription: `Savanna Grey is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Savanna Grey offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Savanna Grey delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-022',
      name: 'Spider Grey',
      image: '/assets/Marbles/SPIDER GREY.webp',
      thumbnailImages: ['/assets/Marbles/SPIDER GREY.webp'],
      collection: 'Marbles',
      description: 'Spider Grey marble with web-like grey veining patterns.',
      tags: ['marble', 'grey', 'premium'],

      longDescription: `Spider Grey is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Spider Grey offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Spider Grey delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-023',
      name: 'Statuario',
      image: '/assets/Marbles/STATUARIO (2).webp',
      thumbnailImages: ['/assets/Marbles/STATUARIO (2).webp'],
      collection: 'Marbles',
      description: 'Statuario marble with iconic Italian veining.',
      tags: ['marble', 'white', 'premium'],

      longDescription: `Statuario is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Statuario offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Statuario delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-024',
      name: 'Statuario Extra',
      image: '/assets/Marbles/STATUARIO EXTRA.webp',
      thumbnailImages: ['/assets/Marbles/STATUARIO EXTRA.webp'],
      collection: 'Marbles',
      description: 'Statuario Extra marble with enhanced premium veining.',
      tags: ['marble', 'white', 'premium'],

      longDescription: `Statuario Extra is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Statuario Extra offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Statuario Extra delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-025',
      name: 'Volacas White',
      image: '/assets/Marbles/VOLACAS WHITE (2).webp',
      thumbnailImages: ['/assets/Marbles/VOLACAS WHITE (2).webp'],
      collection: 'Marbles',
      description: 'Volacas White marble with Greek-inspired white beauty.',
      tags: ['marble', 'white', 'premium'],

      longDescription: `Volacas White is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Volacas White offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Volacas White delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
    {
      id: 'mb-026',
      name: 'Volacas White Classic',
      image: '/assets/Marbles/VOLACAS WHITE.webp',
      thumbnailImages: ['/assets/Marbles/VOLACAS WHITE.webp'],
      collection: 'Marbles',
      description: 'Volacas White Classic marble with timeless elegance.',
      tags: ['marble', 'white', 'premium'],

      longDescription: `Volacas White Classic is an elegant premium quality natural stone renowned for its aesthetic appeal. This exquisite natural stone brings a sense of light and spaciousness to any environment.

Mined and processed with state-of-the-art technology, Volacas White Classic offers exceptional durability and resistance to wear, making it an ideal choice for high-traffic areas. Its neutral palette allows it to seamlessly integrate with both traditional and contemporary design schemes, providing a timeless canvas for your interior or exterior projects.

Whether you are looking to install stunning kitchen countertops, durable flooring, or elegant wall cladding, Volacas White Classic delivers both aesthetic appeal and long-lasting performance.`,

      color: 'Various',
      finish: 'Polished',
      useCase: ['Flooring', 'Wall Cladding', 'Countertops', 'Staircases'],
      thickness: '18mm - 20mm',
      dimensions: 'Cut to Size / Random Slabs (up to 3200mm x 1800mm)',
      origin: 'Rajasthan, India'
    },
  ],
};

// Helper function to get tiles for a specific collection
export const getTilesForCollection = (collectionName) => {
  const normalizedName = collectionName.toLowerCase().replace(/\s+/g, '-');
  return collectionTiles[normalizedName] || collectionTiles[collectionName.toLowerCase().replace(/\s+/g, '')] || [];
};

// Helper function to get product data for collection tiles
// For these new collections, each tile IS the product, so we return them directly
export const getCollectionTileProducts = (products, collectionName) => {
  const normalizedName = collectionName.toLowerCase().replace(/\s+/g, '-');
  const directTiles = collectionTiles[normalizedName];
  if (directTiles) return directTiles;

  // Fallback: look up by id in provided products array (legacy behaviour)
  const tiles = getTilesForCollection(collectionName);
  if (tiles.length > 0 && tiles[0].id && typeof tiles[0].id === 'number') {
    return products.filter(product =>
      tiles.some(tile => tile.id === product.id)
    );
  }
  return directTiles || [];
};
