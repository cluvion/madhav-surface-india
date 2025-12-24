import React from 'react'
import { CardCarousel } from '@/components/ui/card-carousel'
import Section from '@/components/section'

const ColorShowcase = () => {

  // Map images to their corresponding products with navigation data
  const showcaseProducts = [
    {
      id: 113,
      name: "Dolce Vita",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857217/Dolce_Vita_Close_up_1_w7ye1z.jpg',
      alt: "Dolce Vita - White Quartz Surface"
    },
    {
      id: 123,
      name: "Zermatt",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857275/Zermatt_Close_up_j6x7ci.jpg',
      alt: "Zermatt - Gray Quartz Surface"
    },
    {
      id: 114,
      name: "Bianco Tiffone",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857164/Bianco_Tiffone_Close_up_sfp68d.jpg',
      alt: "Bianco Tiffone - White Quartz Surface"
    },
    {
      id: 115,
      name: "Isabella",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857222/Isabella_Close_up_ihml9a.jpg',
      alt: "Isabella - Beige Quartz Surface"
    },
    {
      id: 106,
      name: "Kilimanjaro",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857140/Kilimanjaro_Close_up_shatv0.jpg',
      alt: "Kilimanjaro - Gray Quartz Surface"
    },
    {
      id: 108,
      name: "Sahara Eclipse",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857147/Sahara_Eclipse_Close_up_1_qfmugw.jpg',
      alt: "Sahara Eclipse - White Quartz Surface"
    },
    {
      id: 116,
      name: "Santorini",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857246/Santorini_Close_up_ftaec9.jpg',
      alt: "Santorini - White Quartz Surface"
    },
    {
      id: 109,
      name: "Savannah Silk",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857151/Savannah_Silk_Close_up_2_yz021b.jpg',
      alt: "Savannah Silk - Cream Quartz Surface"
    },
    {
      id: 107,
      name: "Udaipur Dusk",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857152/Udaipur_Dusk_Close_up_2_neoudl.jpg',
      alt: "Udaipur Dusk - Brown Quartz Surface"
    },
    {
      id: 111,
      name: "Verde Breccia",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857157/Verde_Breccia_Close_up_1_r0uj5x.jpg',
      alt: "Verde Breccia - Green Quartz Surface"
    },
    {
      id: 112,
      name: "Basalt Ridge",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857124/Basalt_Ridge_Close_Up_cayqoz.jpg',
      alt: "Basalt Ridge - Gray Quartz Surface"
    },
    {
      id: 110,
      name: "Midnight Mist",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857141/Midnight_Mist_Close_up_hmvyvz.jpg',
      alt: "Midnight Mist - Black Quartz Surface"
    },
    {
      id: 420,
      name: "Viola",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/c_crop,w_2000,h_2000,ar_1:1/v1753857161/Viola_ar6nhe.jpg',
      alt: "Viola - Gray Quartz Surface"
    },
    {
      id: 129,
      name: "Hallcreast",
      src: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1755591015/Hall_Creast_close_up_gbdjmd.avif',
      alt: "Hallcreast - Gray Quartz Surface"
    },
  ]

  return (
    <Section>
      {/* <Heading title="Color Showcase" text="Discover the perfect blend of natural beauty and modern design" /> */}
      <div
        className="mx-auto mb-3 lg:mb-10 flex-col text-center"
      >
        <h2 className="heading text-3xl sm:text-4xl lg:text-5xl font-thin text-gray-900">Designs That Define Luxury</h2>

        {/* <p className={`text-xl text-gray-600 max-w-3xl mx-auto`}></p> */}
      </div>
      <CardCarousel products={showcaseProducts} showPagination={false} showNavigation={false} />
    </Section>
  )
}

export default ColorShowcase