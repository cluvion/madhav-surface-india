'use client';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef, forwardRef, useState } from 'react';
import Image from 'next/image';
import { HoverButton } from './hoverbutton';
import SampleOrderForm from "@/components/ui/sample-order-form";
import { getCollectionTileProducts } from '@/constants/collectionTiles';
import Link from 'next/link';
import { Button } from './button';

const Card = ({
    i,
    title,
    description,
    url,
    color,
    progress,
    range,
    targetScale,
    projects,
    id,
    onOpenSample,
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });
    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className='h-screen flex items-center justify-center sticky top-18 md:top-24'
            style={{
                backgroundImage: `url(${color})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Background overlay for better text readability */}
            <div className="absolute inset-0 bg-foreground/20" />

            {/* Counter - top right on mobile, bottom center on desktop */}
            <div className='absolute top-4 right-4 md:bottom-32 md:left-1/2 md:transform md:-translate-x-1/2 md:top-auto md:right-auto z-10'>
                <p className='text-xs sm:text-sm text-white font-light'>
                    {String(i + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
                </p>
            </div>

            <motion.div
                style={{
                    // scale,
                    top: `calc(-5vh + ${i}px)`,
                }}
                className='flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-16 relative z-10 py-8 md:py-0'
            >
                {/* Title - above image on mobile, left side on desktop */}
                <div className='w-full md:absolute md:left-16 md:top-1/2 md:-translate-y-1/2 md:w-1/3 md:pr-16 text-center md:text-left  md:mb-0 order-1 md:order-none z-20'>
                    <div className='mb-4 md:mb-8 max-w-sm mx-auto md:mx-0'>
                        <h3 className='heading text-3xl md:text-4xl lg:text-5xl font-thin text-white leading-tight'>
                            {title}
                        </h3>
                    </div>

                    {/* Button only shows on desktop */}
                    <div className='hidden md:flex flex-col space-y-2 '>
                        <Button
                            asChild
                            variant='secondary'
                            className="w-full max-w-56"
                        >
                            <Link href={`/product/${id}`}>More Details</Link>
                        </Button>
                        <Button
                            variant="primary"
                            onClick={onOpenSample}
                            className="w-full max-w-56"
                        >
                            Order Sample
                        </Button>
                    </div>
                </div>

                {/* Portrait Image - centered */}
                <div className='w-full flex justify-center order-2 md:order-none mb-6 md:mb-0'>
                    <div className='w-56 h-80 md:w-80 md:h-[32rem] relative'>
                        <motion.div
                            className='rounded-lg overflow-hidden w-full h-full'
                        // style={{ scale: imageScale }}
                        >
                            <Image
                                src={url}
                                alt={title}
                                fill
                                className='object-cover rounded-lg drop-shadow-2xl drop-shadow-black/55 '
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-foreground/5" />
                        </motion.div>
                    </div>
                </div>

                {/* Button - below image on mobile */}
                <div className='flex-col space-y-2 items-center text-center justify-center md:hidden order-3'>
                    <HoverButton
                        href={`/product/${id}`}
                        text='More Details'
                        variant='transparent'
                    />
                    <HoverButton
                        variant="black"
                        text="Order Sample"
                        onClick={onOpenSample}
                    />
                </div>
            </motion.div>
        </div>
    );
};

const ScrollStack = forwardRef(({ products, collection }, ref) => {
    const container = useRef(null);
    const [isSampleOpen, setIsSampleOpen] = useState(false);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    // Use collection tiles instead of all products
    const displayProducts = collection?.name
        ? getCollectionTileProducts(products || [], collection.name.toLowerCase().replace(/introducing the |\s+/g, '').replace(/collection/, '').trim())
        : products?.slice(0, 4) || [];

    return (
        <>
            <main ref={container}>
                <section className='w-full'>
                    {displayProducts.map((product, i) => {
                        const targetScale = 1 - (displayProducts.length - i) * 0.05;
                        return (
                            <Card
                                key={`p_${i}`}
                                i={i}
                                url={product.thumbnailImages[0]}
                                title={product.name}
                                color={product.image}
                                description={product.description}
                                progress={scrollYProgress}
                                range={[i * 0.25, 1]}
                                targetScale={targetScale}
                                projects={displayProducts}
                                id={product.id}
                                onOpenSample={() => setIsSampleOpen(true)}
                            />
                        );
                    })}
                </section>
            </main>
            <SampleOrderForm isOpen={isSampleOpen} onClose={() => setIsSampleOpen(false)} />
        </>
    );
});

ScrollStack.displayName = 'ScrollStack';

export default ScrollStack;