'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

// Video data - replace with your actual video URLs
const videoData = [
    {
        id: 1,
        title: "The Caesarstone ICON™ 2025 Collection",
        subtitle: "Look deeper into 2025 Collection",
        description: "Make an iconic choice for the future.",
        videoUrl: "https://videos.pexels.com/video-files/6328481/6328481-uhd_2732_1440_25fps.mp4",
        buttonText: "Look Deeper"
    },
    {
        id: 2,
        title: "Caesarstone ICON™",
        subtitle: "Make an iconic choice for the future",
        description: "Discover our premium quartz surfaces.",
        videoUrl: "https://videos.pexels.com/video-files/3015535/3015535-hd_1920_1080_24fps.mp4",
        buttonText: "Explore Collection"
    },
    {
        id: 3,
        title: "Caesarstone Studio",
        subtitle: "The digital companion for professionals",
        description: "Professional tools for design excellence.",
        videoUrl: "https://videos.pexels.com/video-files/7669842/7669842-hd_1920_1080_25fps.mp4",
        buttonText: "Learn More"
    },
    {
        id: 4,
        title: "Caesarstone Cares",
        subtitle: "About health & safety",
        description: "Committed to your wellbeing and safety.",
        videoUrl: "https://videos.pexels.com/video-files/29466011/12684178_1920_1080_60fps.mp4",
        buttonText: "Discover More"
    }
]

export default function HeroSection() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [videoRef, setVideoRef] = useState(null)

    // Auto-rotate videos every 8 seconds
    useEffect(() => {
        if (!isPlaying) return

        const interval = setInterval(() => {
            setCurrentVideoIndex((prev) => (prev + 1) % videoData.length)
        }, 8000)

        return () => clearInterval(interval)
    }, [isPlaying])

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
            <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white lg:p-12">
                {/* Top Navigation Dots */}
                {/* <div className="flex justify-center pt-20">
                    <div className="flex space-x-2">
                        {videoData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentVideoIndex(index)}
                                className={cn(
                                    "h-2 w-8 rounded-full transition-all duration-300",
                                    index === currentVideoIndex
                                        ? "bg-white"
                                        : "bg-white/40 hover:bg-white/60"
                                )}
                                aria-label={`Go to video ${index + 1}`}
                            />
                        ))}
                    </div>
                </div> */}

                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="max-w-4xl text-center">
                        <h1 className="mb-4 text-5xl font-light leading-tight tracking-wide lg:text-7xl">
                            {currentVideo.title}
                        </h1>
                        <p className="mb-8 text-xl font-light opacity-90 lg:text-2xl">
                            {currentVideo.description}
                        </p>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white bg-transparent text-white hover:bg-white hover:text-black"
                        >
                            {currentVideo.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

            </div>

            {/* Video Timeline Cards - Full Width Bottom */}
            {/* <div className="absolute bottom-0 left-0 right-0 z-30">
                <div className="backdrop-blur-md bg-black/10 border-t border-white/10 relative">
                    Progress Bar
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/20">
                        <div 
                            className="h-full bg-white transition-all duration-300 ease-linear"
                            style={{
                                width: `${((currentVideoIndex + 1) / videoData.length) * 100}%`,
                                transition: isPlaying ? 'width 8s linear' : 'width 0.3s ease'
                            }}
                        />
                    </div>
                    <div className="flex w-full">
                        {videoData.map((video, index) => (
                            <div
                                key={video.id}
                                onClick={() => setCurrentVideoIndex(index)}
                                className={cn(
                                    "group relative cursor-pointer overflow-hidden transition-all duration-300 flex-1",
                                    "hover:bg-white/10",
                                    "h-20 lg:h-24",
                                    currentVideoIndex === index
                                        ? "bg-white/20 border-t-2 border-white"
                                        : "border-t-2 border-transparent"
                                    index !== videoData.length - 1 && "border-r border-white/10",
                                    currentVideoIndex === index && "bg-white/10"
                                )}
                            >
                                Card Video Preview
                                <video
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                                    muted
                                    loop
                                    playsInline
                                    onMouseEnter={(e) => e.target.play()}
                                    onMouseLeave={(e) => e.target.pause()}
                                >
                                    <source src={video.videoUrl} type="video/mp4" />
                                </video>
                                
                                Card Overlay
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                
                                Card Content
                                <div className="flex flex-col justify-center items-center h-full p-12">
                                    <h4 className="text-white text-xs lg:text-sm font-medium mb-1 line-clamp-1">
                                        {video.title}
                                    </h4>
                                    <p className="text-white/80 text-xs line-clamp-1 hidden lg:block">
                                        {video.subtitle}
                                    </p>
                                </div>
                                
                                Play Indicator
                                {currentVideoIndex === index && (
                                    <div className="absolute top-2 right-2">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                    </div>
                                )}
                                
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
            <div className="absolute bottom-0 left-0 right-0 z-30">
                <div className="backdrop-blur-md bg-black/10 border-t border-white/20 relative">
                    {/* Progress Bar */}
                    {/* <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20">
                        <div 
                            className="h-full bg-white transition-all duration-300 ease-linear"
                            style={{
                                width: `${((currentVideoIndex + 1) / videoData.length) * 100}%`,
                                transition: isPlaying ? 'width 8s linear' : 'width 0.3s ease'
                            }}
                        />
                    </div> */}
                    <div className="relative w-full h-1 bg-transparent overflow-hidden">
                        <div className="absolute top-0 left-0 h-full w-full bg-white animate-progress" />
                    </div>
                    <div className="flex w-full">
                        {videoData.map((video, index) => (
                            <div
                                key={video.id}
                                onClick={() => setCurrentVideoIndex(index)}
                                className={cn(
                                    "group relative cursor-pointer overflow-hidden transition-all duration-300 flex-1",
                                    "hover:bg-white/10",
                                    // "h-20 lg:h-24",
                                    // currentVideoIndex === index
                                    //     ? "bg-white/20 border-t-2 border-white"
                                    //     : "border-t-2 border-transparent",
                                    index !== videoData.length - 1 && "border-r border-white/10",
                                    currentVideoIndex === index && "bg-white/10"
                                )}
                            >
                                {/* Card Video Preview */}
                                {/* <video
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                                    muted
                                    loop
                                    playsInline
                                    onMouseEnter={(e) => e.target.play()}
                                    onMouseLeave={(e) => e.target.pause()}
                                >
                                    <source src={video.videoUrl} type="video/mp4" />
                                </video> */}

                                {/* Card Overlay */}
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}

                                {/* Card Content */}
                                <div className="flex flex-col justify-center items-center h-full p-12">
                                    <h4 className="text-white text-xs lg:text-sm font-medium mb-1 line-clamp-1">
                                        {video.title}
                                    </h4>
                                    <p className="text-white/80 text-xs line-clamp-1 hidden lg:block">
                                        {video.subtitle}
                                    </p>
                                </div>
                                {currentVideoIndex === index && (
                                    <div className="absolute top-2 right-2">
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                    </div>
                                )}

                            </div>
                        ))}
                    </div>
                </div>
            </div>





        </main>
    )
}
