// All products - flat list combining regular-tiles and granite-slabs collections
// Source images from CDN: https://cdn.jsdelivr.net/gh/VipulSoniwork/madhav-surface-india-assets@master

import { collectionTiles } from './collectionTiles';

export const products = [
  ...collectionTiles['regular-tiles'],
  ...collectionTiles['granite-slabs'],
  ...collectionTiles['exotics-exclusive'],
  ...collectionTiles['granite-cutter-slabs-supplier'],
  ...collectionTiles['quartzites'],
  ...collectionTiles['granite'],
  ...collectionTiles['marbles'],
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
    id: 'getting-started',
    question: 'How do I request a sample or get a quote?',
    answer:
      'To request a sample or receive a quote, visit any product or collection page and click on the “Order Sample” or “Request Quote” buttons. Simply fill out the form and our team will contact you within 24–48 hours.',
  },

  {
    id: 'activities-offered',
    question: 'What types of surfaces do you offer?',
    answer:
      'We specialize in high-performance Quartz, Porcelain, and Fusion surfaces — designed for a wide range of interior and exterior applications. Each surface is engineered for durability, aesthetics, and low maintenance.',
  },

  {
    id: 'party-packages',
    question: 'Do you offer custom solutions or large volume pricing?',
    answer:
      'Yes. For large-scale projects or custom surface requirements, we offer tailored solutions and pricing. Reach out via our Contact or Quote Request forms, and our sales team will assist you with project-specific options.',
  },

  {
    id: 'community-engagement',
    question: 'How can I stay updated on new collections or products?',
    answer:
      'Subscribe to our newsletter or follow us on LinkedIn and Instagram for the latest product releases, lookbooks, and design inspiration. Be the first to know when new collections launch or exclusive drops go live.',
  }
];