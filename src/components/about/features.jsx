'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ChartBarIncreasingIcon, ChevronUp, Database, Fingerprint, IdCard } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function Features() {
    const [activeItem, setActiveItem] = useState('infrastructure')

    console.log('Current activeItem:', activeItem)

    const handleAccordionChange = (value) => {
        console.log('Accordion changed to:', value)
        setActiveItem(value || 'infrastructure')
    }

    const images = {
        'infrastructure': {
            image: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1757239810/madhav_surface_about2_grmyrt.jpg',
            alt: 'Vast infrastructural setup',
        },
        'quality-check': {
            image: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1757239810/madhav_surface_about3_fpwdqo.jpg',
            alt: 'Quality check measures',
        },
        'affordability': {
            image: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1757239812/madhav_surface_about4_yocndr.png',
            alt: 'Affordable pricing',
        },
        'design-options': {
            image: 'https://res.cloudinary.com/dljiyumfx/image/upload/v1757610688/DSC_5209_xkirzv.avif',
            alt: 'Design and finishing options',
        },
    }

    const data = [
        { id: 'infrastructure', key: 'infrastructure', title: 'Vast Infrastructural Set Up', content: 'Our state-of-the-art infrastructural setup has been spread over a vast area, which includes the technologically upgraded machinery and equipment required for quarrying, processing, and finishing.' },
        { id: 'quality-check', key: 'quality-check', title: 'Adherence to Quality Check Concerns', content: 'We, as a leading exporter and supplier of quartz surfaces in the global markets, sincerely adhere to stringent quality check measures and regular inspections. With this, we make sure that every product undergoes this process to ensure that the product delivered to the customers is crafted of prime quality.' },
        { id: 'affordability', key: 'affordability', title: 'Affordability', content: 'Owing to our innovative technology and economies of scale, we can serve our products and services with affordable, highly competitive, pocket-friendly price tags without compromising on quality.' },
        { id: 'design-options', key: 'design-options', title: 'Varied Options in Design and Finishing', content: 'Our quartz surfaces come in varied color palettes and texture choices, along with this it can be complemented well with any sort of interior designing of spaces. We also provide multiple finishes for our products.' }
    ]

    return (
        <div className="max-w-7xl mx-auto space-y-8 px-6 md:space-y-16 lg:space-y-20">
            <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                <Accordion
                    expandedValue={activeItem}
                    onValueChange={handleAccordionChange}
                    className='flex w-full flex-col divide-y divide-gray-400'
                >
                    {data.map((item) => (
                        <AccordionItem key={item.key} value={item.id} className='py-2'>
                            <AccordionTrigger className='w-full text-left text-gray-900 p-4'>
                                <div className='flex items-center justify-between'>
                                    <div className='font-medium'>{item.title}</div>
                                    <ChevronUp className={`h-4 w-4  transition-transform duration-200 group-data-[expanded]:rotate-180 text-gray-900`} />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className='font-light text-gray-600 px-4 pb-4'>
                                    {item.content}
                                </p>
                            </AccordionContent>

                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="relative w-full h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeItem && images[activeItem] && (
                            <motion.div
                                key={`${activeItem}-id`}
                                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 w-full h-full overflow-hidden rounded-3xl shadow-md">
                                <Image
                                    src={images[activeItem].image}
                                    className="w-full h-full object-cover"
                                    alt={images[activeItem].alt}
                                    width={1207}
                                    height={929}
                                    priority
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}