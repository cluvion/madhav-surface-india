import { generateMetadata as generateSEOMetadata, collectionMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { collection } = await params;
  const collectionName = collection.charAt(0).toUpperCase() + collection.slice(1);
  const metadata = collectionMetadata[collectionName] || collectionMetadata["Opulence"];
  
  return generateSEOMetadata({
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    url: `/collection/${collection}`,
    type: "website"
  });
}

export default function CollectionLayout({ children }) {
  return children;
}
