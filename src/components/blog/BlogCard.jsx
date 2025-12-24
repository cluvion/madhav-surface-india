'use client';

import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { formatDate, calculateReadingTime, cleanExcerpt } from '@/lib/wordpress-graphql';
import { Button } from '@/components/ui/button';
import { HoverButton } from '../ui/hoverbutton';
import WordPressImage from '@/components/ui/WordPressImage';

export default function BlogCard({ post }) {
  // const readingTime = calculateReadingTime(post.content);
  // const excerpt = cleanExcerpt(post.excerpt, 120);

  return (
    <article className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Featured Image */}
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-[16/10] overflow-hidden">
          {post.featuredImage ? (
            <WordPressImage
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={80}
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <div className="text-foreground/50 text-sm">No Image</div>
            </div>
          )}

          {/* Reading Time Badge */}
          {/* <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {readingTime} min read
          </div> */}
        </div>
      </Link>
      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-foreground/50 mb-3">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formatDate(post.date)}
          </div>
          <div className="text-xs">By {post.author}</div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2 transition-colors">

          {post.title}
        </h3>

        {/* Excerpt */}
        {/* <p className="text-foreground/50 mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p> */}

        {/* Categories */}
        {post.categories && post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.slice(0, 2).map((category) => (
              <span
                key={category.id}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium"
              >
                {category.name}
              </span>
            ))}
          </div>
        )}

        {/* Read More Button */}
        <HoverButton variant="black" text='Read More' href={`/blog/${post.slug}`} width="w-full" />
      </div>
    </article>
  );
}
