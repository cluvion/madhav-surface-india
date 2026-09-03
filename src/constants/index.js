// All products - flat list combining regular-tiles and granite-slabs collections
// Source images from CDN: https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master

import { collectionTiles } from './collectionTiles';

export const products = [
  ...(collectionTiles['quartzites'] || []),
  ...(collectionTiles['regular-tiles'] || []),
  ...(collectionTiles['granite-slabs'] || []),
  ...(collectionTiles['exotics-exclusive'] || []),
  ...(collectionTiles['granite-cutter-slabs-supplier'] || []),
  ...(collectionTiles['granite'] || []),
  ...(collectionTiles['marbles'] || []),
  ...(collectionTiles['granite-xl-tiles'] || []),
];


export const reviews = [
  {
    "id": 1,
    "name": "Daniel Mehra",
    "designation": "Senior Architect",
    "company": "Axis Form Architects",
    "review": "The Pinnacle slabs performed flawlessly in our commercial tower project. Great service and technical quality from Madhav Surface.",
    "image": "https://images.pexels.com/photos/7675075/pexels-photo-7675075.jpeg"
  },
  {
    "id": 2,
    "name": "Kunal Desai",
    "designation": "Lead Interior Designer",
    "company": "Desai + Partners",
    "review": "Working with the Opulence range gave us depth, contrast, and elegance without compromising on durability. Clients love the look. We love the reliability.",
    "image": "https://images.pexels.com/photos/5876513/pexels-photo-5876513.jpeg"
  },
  {
    "id": 3,
    "name": "Sarah Thomas",
    "designation": "Project Manager",
    "company": "Global Build Inc.",
    "review": "The logistics support and technical assistance from Madhav Surface made our timeline feasible. Silicalite was perfect for the modern workspace aesthetics we aimed for.",
    "image": "https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg"
  },
  {
    "id": 4,
    "name": "Ar. Rajeev Kapoor",
    "designation": "Founder Architect",
    "company": "Kapoor & Co.",
    "review": "Their materials feel like a bridge between raw nature and refined design. Serenity has become our go-to for minimalist environments.",
    "image": "https://images.pexels.com/photos/14596539/pexels-photo-14596539.jpeg"
  },
  {
    "id": 5,
    "name": "Emily Hart",
    "designation": "Creative Director",
    "company": "Interspace Designs",
    "review": "We used the Pinnacle collection across multiple boutique hotel interiors — every slab had personality. It gave the brand its own texture, literally.",
    "image": "https://images.pexels.com/photos/5257495/pexels-photo-5257495.jpeg"
  }
]


export const faqData = [
  {
    id: 'types-of-stone',
    question: 'What types of natural stone does Madhav Marbles & Granites supply?',
    answer:
      'We offer an extensive range of premium natural stones, including granite, marble, quartzite, granite slabs, calibrated granite tiles, and large-format granite tiles, available in a variety of colors, patterns, sizes, and finishes.',
  },
  {
    id: 'large-projects',
    question: 'Do you supply natural stone for large commercial and customized projects?',
    answer:
      'Yes. We cater to residential, commercial, architectural, and large-scale development projects, offering customized sizes, finishes, and quantities based on specific project requirements. Our processing facilities and supply capabilities support both specialized orders and larger-volume requirements.',
  },
  {
    id: 'international-export',
    question: 'Does Madhav Marbles export granite and marble internationally?',
    answer:
      'Yes. Madhav Marbles & Granites has an established international presence, supplying natural stone to customers across North America, South America, Canada, Europe, Australia, South Africa, Russia, and the Far East, with exports reaching 40+ countries.',
  },
  {
    id: 'request-quotation',
    question: 'How can I request a quotation or discuss my stone requirement?',
    answer:
      'Simply contact our team through the Contact Us form and share your requirements, including your company details, location, preferred material, quantity, size, and application. Our team will assist you with suitable stone options and further enquiry details. You can also reach us at madhav@madhavmarbles.com',
  }
];