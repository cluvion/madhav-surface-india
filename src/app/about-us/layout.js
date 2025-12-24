import { generateMetadata as generateSEOMetadata, pageMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  keywords: pageMetadata.about.keywords,
  url: "/about-us",
  type: "website"
});

export default function AboutLayout({ children }) {
  return children;
}
