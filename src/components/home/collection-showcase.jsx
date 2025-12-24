import FlowingMenu from '@/components/ui/flowing-menu'
import Heading from '@/components/heading';
import Section from '@/components/section'

const demoItems = [
  { link: 'collection/bedrock', text: 'Bedrock', image: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857096/Black_Opal_Close_up_nmor9u.jpg' },
  { link: 'collection/pinnacle', text: 'Pinnacle', image: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857147/Sahara_Eclipse_Close_up_1_qfmugw.jpg' },
  { link: 'collection/opulence', text: 'Opulence', image: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857231/Masseto_Close_up_1_usqg2t.jpg' },
  { link: 'collection/serenity', text: 'Serenity', image: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857266/Tiara_Brown_Close_up_izue54.jpg' },
  { link: 'collection/silicalite', text: 'Silicalite', image: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1753857272/Silver_Cascade_Close_up_1_w9ozrw.jpg' },
];

function CollectionShowcase() {
  return (
    <Section className="py-10 md:py-10 my-6 md:my-10 bg-muted-foreground">
      <Heading title="Explore Our Collections" />
      {/* <Heading title="Collections" text="Discover the perfect blend of natural beauty and modern design" /> */}
      <div style={{ height: '600px', position: 'relative' }}>
        <FlowingMenu items={demoItems} />
      </div>
    </Section>
  );
}

export default CollectionShowcase;