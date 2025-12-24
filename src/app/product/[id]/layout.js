import { products } from '@/constants/index';
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const productId = parseInt(id);
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return generateSEOMetadata({
      title: "Product Not Found",
      description: "The requested product could not be found.",
      noIndex: true
    });
  }
  
  return generateSEOMetadata({
    title: `${product.name} - ${product.collection} Quartz Countertop`,
    description: `${product.description || `Discover ${product.name} from the ${product.collection} collection. Premium ${product.color.toLowerCase()} quartz countertop with ${product.finish.toLowerCase()} finish.`}`,
    keywords: [product.name, product.collection, `${product.color} quartz`, `${product.finish} finish`, "quartz countertop"],
    url: `/product/${id}`,
    type: "website",
    image: product.image
  });
}

export default function ProductLayout({ children }) {
  return children;
}
