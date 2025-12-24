'use client';

import Link from 'next/link';
import parse from 'html-react-parser';
import { useState, useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowLeft, Share2, Copy, Check, Twitter, Facebook, Linkedin } from 'lucide-react';
import { formatDate, calculateReadingTime } from '@/lib/wordpress-graphql';
import { Button } from '@/components/ui/button';
import { HoverButton } from '../ui/hoverbutton';
import WordPressImage from '@/components/ui/WordPressImage';


export default function BlogPost({ post }) {
  const readingTime = calculateReadingTime(post.content);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const shareMenuRef = useRef(null);

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target)) {
        setShowShareMenu(false);
      }
    };

    if (showShareMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showShareMenu]);

  // Get current URL for sharing
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;
  const shareText = `Check out this article: ${shareTitle}`;

  // Share functions
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleTwitterShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
    window.open(facebookUrl, '_blank', 'width=550,height=420');
  };

  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(linkedinUrl, '_blank', 'width=550,height=420');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrl,
        });
      } catch (err) {
        console.error('Error sharing:', err);
        setShowShareMenu(true);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  // Enhanced content processing for Visual Composer and shortcodes
  const processContent = (content) => {
    if (!content) return content;

    // Step 1: Process Visual Composer layouts selectively
    let processedContent = content;

    // Only convert rows to grids if they contain comparison content (VS, Compare, etc.)
    processedContent = processedContent.replace(/\[vc_row([^\]]*)\](.*?)\[\/vc_row\]/gs, (match, attributes, rowContent) => {
      const columnCount = (rowContent.match(/\[vc_column/g) || []).length;

      // Check if this row contains comparison content
      const isComparisonRow = /\b(VS\.|VERSUS|COMPARE|COMPARISON|QUARTZ VS|VS MARBLE|VS GRANITE|VS SOLID)\b/i.test(rowContent);
      const hasMultipleColumns = columnCount >= 2;

      if (isComparisonRow && hasMultipleColumns) {
        // Convert to grid layout for comparison sections
        const gridContent = rowContent.replace(/\[vc_column([^\]]*)\](.*?)\[\/vc_column\]/gs, (colMatch, colAttrs, colContent) => {
          return `<div class="vc-grid-item">${colContent}</div>`;
        });
        return `<div class="vc-grid-row" data-columns="${columnCount}">${gridContent}</div>`;
      } else {
        // For regular rows, just clean up the shortcodes but keep normal flow
        return rowContent
          .replace(/\[vc_column[^\]]*\]/g, '')
          .replace(/\[\/vc_column\]/g, '');
      }
    });

    // Clean up VC text containers but keep content
    processedContent = processedContent.replace(/\[vc_column_text[^\]]*\](.*?)\[\/vc_column_text\]/gs, '$1');

    // Remove empty space shortcodes
    processedContent = processedContent
      .replace(/\[vc_empty_space[^\]]*\]/g, '')
      .replace(/\[\/vc_empty_space\]/g, '');

    // Step 2: Process vc_raw_html shortcodes with base64 content
    processedContent = processedContent.replace(/\[vc_raw_html\]([^[]+)\[\/vc_raw_html\]/g, (match, base64Content) => {
      try {
        // Decode base64
        const decodedBase64 = atob(base64Content);
        // Decode URL encoding
        const decodedHTML = decodeURIComponent(decodedBase64);
        return decodedHTML;
      } catch (error) {
        console.warn('Failed to decode vc_raw_html content:', error);
        return ''; // Remove the shortcode if decoding fails
      }
    });

    // Step 3: Remove any remaining shortcodes
    processedContent = processedContent
      .replace(/\[[^\]]*\]/g, '') // Remove any remaining shortcodes
      .replace(/\s+/g, ' ') // Clean up extra whitespace
      .trim();

    return processedContent;
  };

  // Parse HTML content and clean it up
  const parseOptions = {
    replace: (domNode) => {
      // Additional cleanup if needed
      if (domNode.type === 'text' && domNode.data) {
        const cleanText = domNode.data.trim();
        if (cleanText !== domNode.data) {
          return cleanText;
        }
      }
    }
  };

  return (
    <article className="min-h-screen mt-20 md:mt-16 overflow-hidden">
      {/* Article Header */}
      <header className="mb-8 space-y-6">
        {/* Title */}
        <h2 className={`heading text-3xl sm:text-4xl lg:text-5xl text-balance text-center font-thin text-gray-900`}>{post.title}</h2>

        {/* Meta Information */}
        <div className='flex items-center justify-between'>
          <div className="flex items-center gap-4 text-sm text-foreground/50">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readingTime} min read
            </div>
            <div>By {post.author}</div>
          </div>

          <div className='flex items-center gap-4'>
            {/* Categories */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category.id}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md font-medium"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            )}

            {/* Share Button */}
            <div className="flex items-center gap-4 relative" ref={shareMenuRef}>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleNativeShare}
                className="relative"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>

              {/* Share Menu Dropdown */}
              {showShareMenu && (
                <div className="absolute top-full right-0 mt-2 bg-background border border-border rounded-lg shadow-lg p-2 z-50 min-w-[200px]">
                  <div className="space-y-1">
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                      {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                    <button
                      onClick={handleTwitterShare}
                      className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      Share on Twitter
                    </button>
                    <button
                      onClick={handleFacebookShare}
                      className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                      Share on Facebook
                    </button>
                    <button
                      onClick={handleLinkedInShare}
                      className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      Share on LinkedIn
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {post.featuredImage && (
        <div className="relative aspect-[16/9] mb-8 rounded-lg overflow-hidden">
          <WordPressImage
            src={post.featuredImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            quality={85}
          />
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-none">
        <div className="blog-content wordpress-content">
          {parse(processContent(post.content), parseOptions)}
        </div>
      </div>

      {/* Article Footer */}
      <footer className="mt-12 pt-8 border-t border-border">
        <div className="flex items-center justify-between">
          <div className="text-sm text-foreground/50">
            Last updated: {formatDate(post.modified)}
          </div>

          <div className="relative">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleNativeShare}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>

            {/* Share Menu Dropdown for Footer */}
            {showShareMenu && (
              <div className="absolute bottom-full right-0 mb-2 bg-background border border-border rounded-lg shadow-lg p-2 z-50 min-w-[200px]">
                <div className="space-y-1">
                  <button
                    onClick={handleCopyLink}
                    className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy Link'}
                  </button>
                  <button
                    onClick={handleTwitterShare}
                    className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    Share on Twitter
                  </button>
                  <button
                    onClick={handleFacebookShare}
                    className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                    Share on Facebook
                  </button>
                  <button
                    onClick={handleLinkedInShare}
                    className="flex items-center gap-3 w-full px-3 py-2 text-sm hover:bg-muted rounded-md transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    Share on LinkedIn
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-6">
            <h4 className="text-sm font-medium text-foreground mb-2">Tags:</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-2 py-1 bg-muted text-foreground/50 text-xs rounded-md hover:bg-muted/80 transition-colors"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Back to Blog */}
        <div className="mt-8 text-center">
          <HoverButton text="Back to All Posts" href="/blog" variant="black" />
        </div>
      </footer>

      <style jsx global>{`
        .wordpress-content {
          line-height: 1.8;
          font-size: 16px;
          color: #333;
        }
        
        /* WordPress default heading styles */
        .wordpress-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 2rem 0 1rem 0;
          color: #333;
          line-height: 1.2;
        }
        
        .wordpress-content h2 {
          font-size: 2rem;
          font-weight: 600;
          margin: 2rem 0 1rem 0;
          color: #333;
          line-height: 1.3;
        }
        
        .wordpress-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem 0;
          color: #333;
          line-height: 1.4;
        }
        
        .wordpress-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin: 1.25rem 0 0.75rem 0;
          color: #333;
        }
        
        .wordpress-content h5 {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 1rem 0 0.5rem 0;
          color: #333;
        }
        
        .wordpress-content h6 {
          font-size: 1rem;
          font-weight: 600;
          margin: 1rem 0 0.5rem 0;
          color: #333;
        }
        
        /* WordPress paragraph styles */
        .wordpress-content p {
          margin: 1rem 0;
          color: #333;
          line-height: 1.8;
          font-size: 16px;
        }
        
        /* WordPress list styles */
        .wordpress-content ul, 
        .wordpress-content ol {
          margin: 1rem 0;
          padding-left: 2rem;
        }
        
        .wordpress-content ul {
          list-style-type: disc;
        }
        
        .wordpress-content ol {
          list-style-type: decimal;
        }
        
        .wordpress-content li {
          margin: 0.5rem 0;
          color: #333;
          line-height: 1.8;
        }
        
        .wordpress-content ul ul,
        .wordpress-content ol ol {
          margin: 0.5rem 0;
        }
        
        /* WordPress link styles */
        .wordpress-content a {
          color: #0073aa;
          text-decoration: underline;
          transition: color 0.2s ease;
        }
        
        .wordpress-content a:hover {
          color: #005177;
        }
        
        /* WordPress image styles */
        .wordpress-content img {
          max-width: 100%;
          height: auto;
          margin: 1.5rem 0;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .wordpress-content .wp-caption {
          max-width: 100%;
          margin: 1.5rem 0;
        }
        
        .wordpress-content .wp-caption-text {
          font-size: 14px;
          color: #666;
          text-align: center;
          margin-top: 0.5rem;
          font-style: italic;
        }
        
        /* WordPress blockquote styles */
        .wordpress-content blockquote {
          border-left: 4px solid #0073aa;
          padding: 1rem 1.5rem;
          margin: 2rem 0;
          background: #f9f9f9;
          font-style: italic;
          color: #555;
          position: relative;
        }
        
        .wordpress-content blockquote p {
          margin: 0.5rem 0;
        }
        
        .wordpress-content blockquote cite {
          display: block;
          margin-top: 1rem;
          font-size: 14px;
          color: #666;
          font-style: normal;
        }
        
        /* WordPress table styles */
        .wordpress-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          background: white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .wordpress-content th,
        .wordpress-content td {
          border: 1px solid #ddd;
          padding: 12px 15px;
          text-align: left;
        }
        
        .wordpress-content th {
          background-color: #f8f9fa;
          font-weight: 600;
          color: #333;
        }
        
        .wordpress-content tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        
        /* WordPress code styles */
        .wordpress-content code {
          background: #f4f4f4;
          padding: 2px 6px;
          border-radius: 3px;
          font-family: 'Courier New', monospace;
          font-size: 14px;
          color: #d63384;
        }
        
        .wordpress-content pre {
          background: #f8f9fa;
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
          margin: 1.5rem 0;
          border-left: 4px solid #0073aa;
        }
        
        .wordpress-content pre code {
          background: none;
          padding: 0;
          color: #333;
        }
        
        /* WordPress alignment classes */
        .wordpress-content .alignleft {
          float: left;
          margin: 0 1rem 1rem 0;
        }
        
        .wordpress-content .alignright {
          float: right;
          margin: 0 0 1rem 1rem;
        }
        
        .wordpress-content .aligncenter {
          display: block;
          margin: 1.5rem auto;
          text-align: center;
        }
        
        /* WordPress gallery styles */
        .wordpress-content .wp-block-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin: 2rem 0;
        }
        
        /* WordPress button styles */
        .wordpress-content .wp-block-button {
          margin: 1rem 0;
        }
        
        .wordpress-content .wp-block-button__link {
          background: #0073aa;
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 4px;
          display: inline-block;
          font-weight: 600;
          transition: background 0.2s ease;
        }
        
        .wordpress-content .wp-block-button__link:hover {
          background: #005177;
          color: white;
        }
        
        /* WordPress separator styles */
        .wordpress-content hr {
          border: none;
          border-top: 2px solid #eee;
          margin: 2rem 0;
        }
        
        /* Visual Composer Grid Layouts */
        .wordpress-content .vc-grid-row {
          display: grid;
          gap: 2rem;
          margin: 2rem 0;
          align-items: start;
        }
        
/* Clean WooCommerce content display */
        .wordpress-content .woocommerce {
          margin: 2rem 0;
        }
        
        .wordpress-content .products {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin: 1rem 0;
        }
        
        .wordpress-content .product {
          flex: 1;
          min-width: 200px;
          max-width: 250px;
          text-align: center;
          padding: 1rem;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .wordpress-content .product img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }
        
        .wordpress-content .product h5 {
          font-size: 0.9rem;
          font-weight: 600;
          color: #333;
          margin: 0.5rem 0;
        }
        
        .wordpress-content .product a {
          text-decoration: none;
          color: inherit;
        }
        
        .wordpress-content .vc-grid-row[data-columns="3"] {
          grid-template-columns: repeat(3, 1fr);
        }
         
        .wordpress-content .vc-grid-item h3,
        .wordpress-content .vc-grid-item h4 {
          color: #333;
          font-size: 1.25rem;
          font-weight: 600;
          margin: 1rem 0 0.75rem 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .wordpress-content .vc-grid-item p {
          color: #555;
          line-height: 1.6;
          margin: 0.75rem 0;
          text-align: justify;
        }
        
        .wordpress-content .vc-grid-item img {
          max-width: 60px;
          height: auto;
          margin: 0 auto 1rem auto;
          display: block;
        }
        
        /* Special styling for comparison sections */
        .wordpress-content .vc-grid-row .vc-grid-item:has(h3:contains("VS")),
        .wordpress-content .vc-grid-row .vc-grid-item:has(h4:contains("VS")) {
          border-top: 4px solid #e74c3c;
          background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
        }
        
        .wordpress-content .vc-grid-row .vc-grid-item:has(h3:contains("QUARTZ")),
        .wordpress-content .vc-grid-row .vc-grid-item:has(h4:contains("QUARTZ")) {
          border-top: 4px solid #0073aa;
          background: linear-gradient(135deg, #fff 0%, #f0f8ff 100%);
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .wordpress-content {
            font-size: 15px;
          }
          
          .wordpress-content h1 {
            font-size: 2rem;
          }
          
          .wordpress-content h2 {
            font-size: 1.75rem;
          }
          
          .wordpress-content h3 {
            font-size: 1.5rem;
          }
          
          .wordpress-content .alignleft,
          .wordpress-content .alignright {
            float: none;
            margin: 1rem 0;
            text-align: center;
          }
          
          .wordpress-content table {
            font-size: 14px;
          }
          
          .wordpress-content th,
          .wordpress-content td {
            padding: 8px 10px;
          }
          
          /* Mobile grid adjustments */
          .wordpress-content .vc-grid-row[data-columns="2"],
          .wordpress-content .vc-grid-row[data-columns="3"],
          .wordpress-content .vc-grid-row[data-columns="4"] {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .wordpress-content .vc-grid-item {
            padding: 1rem;
          }
          
          .wordpress-content .vc-grid-item h3,
          .wordpress-content .vc-grid-item h4 {
            font-size: 1.1rem;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .wordpress-content .vc-grid-row[data-columns="3"],
          .wordpress-content .vc-grid-row[data-columns="4"] {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </article>
  );
}
