import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const posts = [
    {
        category: "Design",
        date: "Dec 12, 2024",
        title: "How to Choose the Right Stone Tile For...",
        image: "/images/blog-1.jpg"
    },
    {
        category: "Architecture",
        date: "Nov 28, 2024",
        title: "Adding Majestic to Interiors With Elegant...",
        image: "/images/blog-2.jpg"
    },
    {
        category: "Trends",
        date: "Oct 15, 2024",
        title: "The Timeless Use Of Marble Art In Modern...",
        image: "/images/blog-3.jpg"
    }
];

export default function BlogSection() {
    return (
        <section className="bg-white py-20 text-black md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
                    <div>
                        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-neutral-500">
                            News
                        </span>
                        <h2 className="heading text-4xl leading-tight md:text-5xl">
                            Stay Informed With Latest <br />
                            News And Insights
                        </h2>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <Button variant="outline" className="rounded-none border-black text-black hover:bg-black hover:text-white">
                            View All News
                        </Button>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {posts.map((post, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className="mb-6 overflow-hidden bg-neutral-100">
                                <div className="aspect-[3/2] w-full bg-neutral-200 transition-transform duration-700 group-hover:scale-110" />
                            </div>
                            <div className="mb-3 flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-primary">
                                <span>{post.category}</span>
                                <span className="text-neutral-300">|</span>
                                <span className="text-neutral-400">{post.date}</span>
                            </div>
                            <h3 className="mb-4 text-xl font-medium leading-snug group-hover:text-primary">
                                {post.title}
                            </h3>
                            <span className="flex items-center text-sm font-bold uppercase tracking-wider underline decoration-neutral-300 underline-offset-4 transition-colors group-hover:text-primary group-hover:decoration-[#D4AF37]">
                                Read More <ArrowUpRight className="ml-1 h-3 w-3" />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
