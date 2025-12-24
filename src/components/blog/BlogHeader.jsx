'use client';

import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Heading from '@/components/heading'

export default function BlogHeader() {
  return (
    <div className="bg-background border-b border-border">
      <div data-light-bg>
        <div className="container max-w-7xl mx-auto px-6 relative z-2 pt-12 md:pt-20">
          {/* Search Bar */}
          {/* <div className="max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search blog posts..."
                className="pl-10 pr-4 py-3 w-full bg-background border-border focus-visible:border-primary focus-visible:ring-ring/20"
              />
            </div>
            <Button
              className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-2 h-auto"
              size="sm"
            >
              Search
            </Button>
          </div> */}
          <Heading
            text="Discover the latest insights, trends, and expert advice about quartz surfaces,
            kitchen design, and home improvement."
          />
        </div>
      </div>
    </div>
  );
}
