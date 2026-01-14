import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const posts = [
    {
        tags: ["KITCHEN", "MARBLE"],
        date: "September 15, 2025",
        comments: "0 comments",
        title: "Using Marble in Kitchen Design: Elegant and...",
        image: "/assets/Step6.png"
    },
    {
        tags: ["BATHROOM", "TILES"],
        date: "September 15, 2025",
        comments: "0 comments",
        title: "Top 5 Bathroom Tile Options for a Stylish...",
        image: "/assets/Step5.png"
    },
    {
        tags: ["MARBLE", "TILES"],
        date: "September 15, 2025",
        comments: "0 comments",
        title: "Mixing Marble and Mosaic Tiles: The Perfect...",
        image: "/assets/Step7.png"
    }
];

export default function BlogSection() {
    return (
        <section className="pt-8 md:pt-12 lg:pt-14 pb-16 md:pb-24 lg:pb-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
                    <div className="text-center md:text-left max-w-3xl">
                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest mb-4">
                            <span className="mr-2 text-lg text-primary">¬</span> RECENT BLOG
                        </span>
                        <h2 className="heading font-thin text-[1.6rem] md:text-[4rem] leading-[1.1] text-foreground">
                            Stay Informed With Latest News And Insights
                            {/* <span className="text-primary "> News And Insights</span> */}
                        </h2>
                    </div>
                    <div className="mt-6 md:mt-0 mb-0 md:mb-2 flex justify-center lg:justify-start">
                        <Button>
                            BROWSE ALL
                        </Button>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {posts.map((post, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="mb-6 overflow-hidden">
                                <div className="relative aspect-[4/3] w-full overflow-hidden">
                                    {/* Note: In a real Next.js app, use Image component. Using div for placeholder match if Image not configured */}
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                            <div className="mb-4 flex flex-wrap gap-2">
                                {post.tags.map((tag, i) => (
                                    <span key={i} className="bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="mb-3 text-2xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                                {post.title}
                            </h3>
                            <div className="flex items-center space-x-2 text-xs text-neutral-400">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.comments}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
