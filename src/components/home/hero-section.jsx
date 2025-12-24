'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HoverButton } from '@/components/ui/hoverbutton'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export const textVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(12px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
}

// Video data - replace with your actual video URLs
const videoData =
    [
        {
            id: 1,
            title: "The Core of Endurance",
            shortTitle: "Bedrock",
            subtitle: "Strength forged by nature",
            description: "Bold. Grounded. Timeless. Discover the foundation of modern stone design.",
            videoUrl: "https://videos.pexels.com/video-files/6328481/6328481-uhd_2732_1440_25fps.mp4",
            buttonText: "Explore Bedrock",
            buttonLink: "/collection/bedrock"
        },
        {
            id: 2,
            title: "Elevated Stone Aesthetics",
            shortTitle: "Pinnacle",
            subtitle: "Elevated by the elements",
            description: "Inspired by ancient cliffs and alpine terrain — a collection that rises above.",
            videoUrl: "https://videos.pexels.com/video-files/3015535/3015535-hd_1920_1080_24fps.mp4",
            buttonText: "View Pinnacle",
            buttonLink: "/collection/pinnacle"
        },
        {
            id: 3,
            title: "Luxury Without Limits",
            shortTitle: "Opulence",
            subtitle: "Design without restraint",
            description: "Lustrous finishes and rich textures for statement-making interiors.",
            videoUrl: "https://res.cloudinary.com/dljiyumfx/video/upload/v1756882469/Opulence_Collection_Madhav_Surface_foi5mg.mp4",
            buttonText: "See Opulence",
            buttonLink: "/collection/opulence"
        },
        {
            id: 4,
            title: "Calm Controlled and Classic",
            shortTitle: "Serenity",
            subtitle: "Minimalism meets warmth",
            description: "Soft hues and calming patterns that turn spaces into sanctuaries.",
            videoUrl: "https://videos.pexels.com/video-files/6586286/6586286-uhd_2560_1440_30fps.mp4",
            buttonText: "Discover Serenity",
            buttonLink: "/collection/serenity"
        },
        {
            id: 5,
            title: "Lightness with Power",
            shortTitle: "Silicalite",
            subtitle: "Performance redefined",
            description: "Engineered for strength, sustainability, and sleek aesthetics — all in one surface.",
            videoUrl: "https://res.cloudinary.com/dljiyumfx/video/upload/v1756882607/Silicalite_Collection_Madhav_Surface_nvgug7.mp4",
            buttonText: "Explore Silicalite",
            buttonLink: "/collection/silicalite"
        }
    ]

export default function HeroSection() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [videoRef, setVideoRef] = useState(null)
    const [progress, setProgress] = useState(0)

    // Auto-rotate videos every 8 seconds
    useEffect(() => {
        if (!isPlaying) return

        let startTime = Date.now()
        const duration = 8000 // 8 seconds per video
        let animationFrame

        const updateProgress = () => {
            const elapsed = Date.now() - startTime
            const segmentProgress = Math.min((elapsed / duration) * 100, 100)

            // Calculate overall progress across all videos
            const baseProgress = (currentVideoIndex / videoData.length) * 100
            const currentSegmentProgress = (segmentProgress / videoData.length)
            const totalProgress = baseProgress + currentSegmentProgress

            setProgress(totalProgress)

            if (segmentProgress >= 100) {
                const nextIndex = (currentVideoIndex + 1) % videoData.length
                setCurrentVideoIndex(nextIndex)

                // Reset progress when cycling back to first video
                if (nextIndex === 0) {
                    setProgress(0)
                } else {
                    setProgress((nextIndex / videoData.length) * 100)
                }
                startTime = Date.now()
            } else {
                animationFrame = requestAnimationFrame(updateProgress)
            }
        }

        animationFrame = requestAnimationFrame(updateProgress)

        return () => cancelAnimationFrame(animationFrame)
    }, [isPlaying, currentVideoIndex])

    const handleManualSwitch = (index) => {
        setCurrentVideoIndex(index)
        setProgress((index / videoData.length) * 100)
    }


    // Handle video ref and autoplay
    useEffect(() => {
        if (videoRef) {
            if (isPlaying) {
                videoRef.play().catch(console.error)
            } else {
                videoRef.pause()
            }
        }
    }, [videoRef, isPlaying, currentVideoIndex])

    const currentVideo = videoData[currentVideoIndex]

    const handlePrevious = () => {
        setCurrentVideoIndex((prev) =>
            prev === 0 ? videoData.length - 1 : prev - 1
        )
    }

    const handleNext = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videoData.length)
    }

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <main className="relative h-screen overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={setVideoRef}
                    key={currentVideo.id}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={currentVideo.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-6 text-white lg:p-12">

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center">
                    <AnimatedGroup
                        variants={{
                            container: {
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.75,
                                    },
                                },
                            },
                            ...transitionVariants,
                        }}
                        as="div"
                        className="max-w-3xl text-center px-4 sm:px-6"
                    >
                        <motion.h1
                            key={`title-${currentVideo.id}`}
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                            className="heading font-thin mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-none"
                        >
                            {currentVideo.title}
                        </motion.h1>
                        {/* <motion.p
                            key={`description-${currentVideo.id}`}
                            initial="hidden"
                            animate="visible"
                            variants={{
                                ...textVariants,
                                visible: {
                                    ...textVariants.visible,
                                    transition: {
                                        ...textVariants.visible.transition,
                                        delay: 0.2,
                                    },
                                },
                            }}
                            className="mb-8 text-lg font-extralight opacity-90 lg:text-xl"
                        >
                            {currentVideo.description}
                        </motion.p> */}
                        {/* <Button
                            size="lg"
                            variant="outline"
                            className="border-white bg-transparent text-white hover:bg-white hover:text-black"
                        >
                            {currentVideo.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button> */}
                        <div className="flex justify-center">
                            <HoverButton
                                text={currentVideo.buttonText}
                                variant="transparent"
                                // className="backdrop-blur-sm "
                                width="w-48"
                                href={currentVideo.buttonLink}
                            />
                        </div>
                    </AnimatedGroup>
                </div>

            </div>

            {/* {Card Section} */}

            <div className="absolute bottom-0 left-0 right-0 z-10">
                {/* Card Overlay */}
                <AnimatedGroup
                    preset="slide"
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    delayChildren: 1,
                                },
                            },
                        },
                    }}
                >
                    <div className="absolute inset-0 bg-black/10 backdrop-blur" />
                </AnimatedGroup>
                <AnimatedGroup
                    variants={{
                        container: {
                            visible: {
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.75,
                                },
                            },
                        },
                        ...transitionVariants,
                    }}
                >
                    <div className="backdrop-blur-sm bg-black/10 border-t border-white/20 relative">
                        {/* Progress Bar */}
                        <div className="relative w-full h-0.5 bg-white/20 overflow-hidden">
                            <div
                                className="absolute top-0 left-0 h-full bg-white "
                                style={{ width: `${progress}%` }}
                            />
                        </div>


                        <div className='flex w-full overflow-x-auto sm:overflow-x-visible'>
                            {videoData.map((video, index) => (
                                <div
                                    key={video.id}
                                    onClick={() => handleManualSwitch(index)}
                                    className={cn(
                                        "group relative cursor-pointer overflow-hidden transition-all duration-300 flex-1 min-w-0",
                                        "hover:bg-white/20 ",
                                        index !== videoData.length - 1 && "border-r border-white/20 ",
                                        currentVideoIndex === index && "bg-white/20"
                                    )}
                                >
                                    {/* Card Content */}
                                    <div className="flex flex-col justify-center items-center sm:items-left h-full p-2 sm:p-4 md:p-6 lg:p-8 xl:p-12 min-h-[80px] sm:min-h-[100px]">
                                        <h4 className="heading text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light mb-1 text-center sm:text-left line-clamp-2">
                                            <span className="block sm:hidden italic ">{video.shortTitle}</span>
                                            <span className="hidden sm:block"><p className="font-semibold text-center italic ">{video.shortTitle}</p>{video.title}</span>
                                        </h4>
                                        {/* <p className="text-white/60 text-xs hidden md:block text-center sm:text-left line-clamp-1">
                                            {video.subtitle}
                                        </p> */}
                                    </div>

                                    {/* Active Indicator */}
                                    {currentVideoIndex === index && (
                                        <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </AnimatedGroup>
            </div>





        </main>
    )
}
