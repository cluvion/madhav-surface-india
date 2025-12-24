import HoverExpand from "@/components/ui/hover-expand"
import Heading from "@/components/heading"
import Section from '@/components/section'

const images = [
  {
    url: "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857164/Bianco_Tiffone_Close_up_sfp68d.jpg",
    title: "Bianco Tiffone",
    description: "Elegant white marble with subtle veining and sophisticated texture"
  },
  {
    url: "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857275/Zermatt_Close_up_j6x7ci.jpg",
    title: "Zermatt",
    description: "Premium natural stone with distinctive alpine-inspired patterns"
  },
  {
    url: "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857266/Tiara_Brown_Close_up_izue54.jpg",
    title: "Tiara Brown",
    description: "Rich brown stone with luxurious grain and warm undertones"
  },
  {
    url: "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857258/Black_Caspian_White_Close_up_ivnnwo.jpg",
    title: "Black Caspian White",
    description: "Striking contrast stone with bold black and white patterns"
  },
  {
    url: "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857181/Calacatta_Denali_Close_up_rdw6kt.jpg",
    title: "Calacatta Denali",
    description: "Classic Italian marble with dramatic veining and pristine finish"
  },
  {
    url: "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857185/Calacatta_Irvine_Close_up_tur1v3.jpg",
    title: "Calacatta Irvine",
    description: "Premium Calacatta marble with unique veining patterns and elegance"
  },
  {
    url: "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857214/Chatham_Close_up_mdayqi.jpg",
    title: "Chatham",
    description: "Contemporary stone surface with modern appeal and versatile design"
  },
  {
    url: "https://res.cloudinary.com/dljiyumfx/image/upload/v1753857232/Masseto_Close_up_2_tudvmm.jpg",
    title: "Masseto",
    description: "Sophisticated stone with refined texture and timeless character"
  }
]


export default function BestDesigns() {
  return (
    <Section>
      <Heading title="Designs That Define Luxury" />
      {/* <Heading title="Best Designs" text="Discover the perfect blend of natural beauty and modern design"/> */}
      <HoverExpand
        images={images}
        initialSelectedIndex={0}
        thumbnailHeight={600}
        modalImageSize={800}
        maxThumbnails={11}
      />
    </Section>

  )
}
