import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getBlogPostsGraphQL, formatDate } from "@/lib/wordpress-graphql";
import WordPressImage from "@/components/ui/WordPressImage";

export default async function BlogSection() {
    let posts = [];
    try {
        const data = await getBlogPostsGraphQL(3, null, null, false);
        posts = data?.posts || [];
    } catch (error) {
        console.error("Error fetching blog posts:", error);
    }

    // Fallback posts if API fails
    if (posts.length === 0) {
        posts = [
            {
                tags: [{ name: "KITCHEN" }, { name: "MARBLE" }],
                date: "2025-09-15T00:00:00.000Z",
                title: "Using Marble in Kitchen Design: Elegant and...",
                featuredImage: "/assets/Step6.png",
                slug: "#"
            },
            {
                tags: [{ name: "BATHROOM" }, { name: "TILES" }],
                date: "2025-09-15T00:00:00.000Z",
                title: "Top 5 Bathroom Tile Options for a Stylish...",
                featuredImage: "/assets/Step5.png",
                slug: "#"
            },
            {
                tags: [{ name: "MARBLE" }, { name: "TILES" }],
                date: "2025-09-15T00:00:00.000Z",
                title: "Mixing Marble and Mosaic Tiles: The Perfect...",
                featuredImage: "/assets/Step7.png",
                slug: "#"
            }
        ];
    }

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
                        </h2>
                    </div>
                    <div className="mt-6 md:mt-0 mb-0 md:mb-2 flex justify-center lg:justify-start">
                        <Link href="/blog">
                            <Button>
                                BROWSE ALL
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {posts.map((post, index) => (
                        <Link key={index} href={post.slug === "#" ? "#" : `/blog/${post.slug}`}>
                            <div className="group cursor-pointer">
                                <div className="mb-6 overflow-hidden">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                                        {post.featuredImage ? (
                                            post.featuredImage.startsWith("/") ? (
                                                <Image
                                                    src={post.featuredImage}
                                                    alt={post.title || "Blog post"}
                                                    fill
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            ) : (
                                                <WordPressImage
                                                    src={post.featuredImage}
                                                    alt={post.title || "Blog post"}
                                                    fill
                                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                            )
                                        ) : (
                                            <div className="w-full h-full bg-muted flex items-center justify-center">
                                                <div className="text-foreground/50 text-sm">No Image</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {post.tags?.slice(0, 2).map((tag, i) => (
                                        <span key={i} className="bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                                            {tag.name}
                                        </span>
                                    ))}
                                    {(!post.tags || post.tags.length === 0) && post.categories?.slice(0, 2).map((category, i) => (
                                        <span key={i} className="bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                                            {category.name}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="mb-3 text-2xl font-bold leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </h3>
                                <div className="flex items-center space-x-2 text-xs text-neutral-400">
                                    <span>{post.date ? (post.slug === "#" ? "September 15, 2025" : formatDate(post.date)) : ""}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
