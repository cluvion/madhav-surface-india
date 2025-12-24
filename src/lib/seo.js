// SEO utility functions and constants for Madhav Quartz website

export const siteConfig = {
    name: "Madhav Quartz",
    title: "Madhav Quartz - Premium Engineered Stone & Quartz Countertops",
    description: "Discover premium engineered stone and quartz countertops from Madhav Quartz. Luxury collections including Calacatta, marble-look designs for kitchens, bathrooms, and commercial spaces.",
    url: "https://www.madhavquartz.com",
    ogImage: "https://www.madhavquartz.com/assets/logo2.png",
    keywords: [
        "quartz countertops",
        "engineered stone",
        "kitchen countertops",
        "bathroom countertops",
        "Calacatta quartz",
        "marble-look quartz",
        "premium countertops",
        "stone fabrication",
        "quartz slabs",
        "luxury surfaces"
    ],
    social: {
        instagram: "https://www.instagram.com/madhavquartz/",
        facebook: "https://www.facebook.com/madhav.quartz/",
        linkedin: "https://www.linkedin.com/company/madhav-quartz/"
    },
    business: {
        name: "Madhav Quartz",
        type: "Stone Fabricator",
        description: "Premium engineered stone and quartz countertop manufacturer specializing in luxury surfaces for residential and commercial applications.",
        foundingDate: "2010",
        address: {
            streetAddress: "",
            addressLocality: "",
            addressRegion: "",
            postalCode: "",
            addressCountry: "IN"
        },
        contactPoint: {
            telephone: "",
            contactType: "customer service",
            availableLanguage: ["English", "Hindi"]
        }
    }
};

// Generate page metadata
// Valid OpenGraph types: "website", "article", "book", "profile", "music.song", "music.album", "music.playlist", "music.radio_station", "video.movie", "video.episode", "video.tv_show", "video.other"
export function generateMetadata({
    title,
    description,
    keywords = [],
    image,
    url,
    type = "website",
    noIndex = false
}) {
    const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
    const fullDescription = description || siteConfig.description;
    const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
    const fullImage = image || siteConfig.ogImage;
    const allKeywords = [...siteConfig.keywords, ...keywords].join(", ");

    return {
        title: fullTitle,
        description: fullDescription,
        keywords: allKeywords,
        robots: noIndex ? "noindex,nofollow" : "index,follow",
        canonical: fullUrl,
        openGraph: {
            title: fullTitle,
            description: fullDescription,
            url: fullUrl,
            siteName: siteConfig.name,
            images: [
                {
                    url: fullImage,
                    width: 1200,
                    height: 630,
                    alt: fullTitle
                },
                {
                    url: `${siteConfig.url}/assets/logo1.png`,
                    width: 800,
                    height: 600,
                    alt: `${siteConfig.name} Logo`
                }
            ],
            locale: "en_US",
            type: type
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description: fullDescription,
            images: [fullImage],
            creator: "@madhavquartz"
        },
        alternates: {
            canonical: fullUrl
        }
    };
}

// Generate structured data for Organization
export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteConfig.business.name,
        "description": siteConfig.business.description,
        "url": siteConfig.url,
        "logo": `${siteConfig.url}/assets/logo1.png`,
        "foundingDate": siteConfig.business.foundingDate,
        "sameAs": [
            siteConfig.social.instagram,
            siteConfig.social.facebook,
            siteConfig.social.linkedin
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": siteConfig.business.contactPoint.telephone,
            "contactType": siteConfig.business.contactPoint.contactType,
            "availableLanguage": siteConfig.business.contactPoint.availableLanguage
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.business.address.streetAddress,
            "addressLocality": siteConfig.business.address.addressLocality,
            "addressRegion": siteConfig.business.address.addressRegion,
            "postalCode": siteConfig.business.address.postalCode,
            "addressCountry": siteConfig.business.address.addressCountry
        }
    };
}

// Generate structured data for Product
export function generateProductSchema(product) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": product.image,
        "brand": {
            "@type": "Brand",
            "name": siteConfig.business.name
        },
        "manufacturer": {
            "@type": "Organization",
            "name": siteConfig.business.name
        },
        "category": "Quartz Countertops",
        "material": "Engineered Stone",
        "color": product.color,
        "offers": {
            "@type": "Offer",
            "price": product.priceDetail?.pricePerSqFt || "0",
            "priceCurrency": product.priceDetail?.currency || "USD",
            "availability": product.availability === "in-stock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            "seller": {
                "@type": "Organization",
                "name": siteConfig.business.name
            }
        },
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "name": "Finish",
                "value": product.finish
            },
            {
                "@type": "PropertyValue",
                "name": "Collection",
                "value": product.collection
            },
            {
                "@type": "PropertyValue",
                "name": "Thickness",
                "value": product.specifications?.thickness?.join(", ") || "20mm, 30mm"
            },
            {
                "@type": "PropertyValue",
                "name": "Size",
                "value": product.specifications?.sizes?.join(", ") || "138 x 79 inches"
            }
        ]
    };
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbs) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": crumb.name,
            "item": `${siteConfig.url}${crumb.url}`
        }))
    };
}

// Generate FAQ schema
export function generateFAQSchema(faqs) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

// Collection-specific metadata
export const collectionMetadata = {
    "Bedrock": {
        title: "Bedrock Collection - Foundation of Strength & Style | Madhav Surfaces",
        description: "The Bedrock Collection delivers enduring durability with bold, grounded elegance. Inspired by natural stone resilience, perfect for modern living spaces.",
        keywords: ["Bedrock collection", "durable quartz", "natural stone", "modern countertops", "strength and style", "grounded elegance"]
    },
    "Pinnacle": {
        title: "Pinnacle Collection - Nature's Grandeur | Madhav Surfaces",
        description: "The Pinnacle Collection captures raw beauty of towering peaks and timeless landscapes. Each surface brings texture, depth, and elevated presence to any space.",
        keywords: ["Pinnacle collection", "nature inspired", "textured surfaces", "landscape design", "natural grandeur", "elevated surfaces"]
    },
    "Opulence": {
        title: "Opulence Collection - The Pinnacle of Luxury | Madhav Surfaces",
        description: "The Opulence Collection redefines indulgence with striking patterns and rich finishes. Crafted for statement interiors with sophistication and exclusivity.",
        keywords: ["Opulence collection", "luxury quartz", "striking patterns", "rich finishes", "statement interiors", "sophisticated surfaces"]
    },
    "Silicalite": {
        title: "Silicalite Collection - Contemporary Elegance | Madhav Surfaces",
        description: "The Silicalite Collection brings sleek minimalism into focus. Refined textures and subtle tones for contemporary designs that value clarity and simplicity.",
        keywords: ["Silicalite collection", "contemporary design", "minimalist surfaces", "refined textures", "subtle tones", "sleek elegance"]
    },
    "Serenity": {
        title: "Serenity Collection - Luxury Without Limits | Madhav Surfaces",
        description: "The Serenity Collection transforms environments into sanctuaries of balance. Soft hues and graceful patterns create understated luxury and calm inspiration.",
        keywords: ["Serenity collection", "calming surfaces", "soft hues", "graceful patterns", "balanced design", "understated luxury"]
    }
};

// Page-specific metadata
export const pageMetadata = {
    home: {
        title: "Madhav Surfaces - Premium Quartz Countertops & Engineered Stone",
        description: "Discover premium quartz countertops and engineered stone surfaces from Madhav Quartz. Luxury collections for kitchens, bathrooms, and commercial spaces.",
        keywords: ["quartz countertops", "engineered stone", "premium surfaces", "kitchen countertops", "bathroom countertops"]
    },
    about: {
        title: "About Madhav Surfaces - Premium Stone Fabricator",
        description: "Learn about Madhav Surfaces, a leading manufacturer of premium engineered stone and quartz countertops. Quality craftsmanship since 2010.",
        keywords: ["stone fabricator", "quartz manufacturer", "engineered stone company", "premium surfaces"]
    },
    contact: {
        title: "Contact Madhav Surfaces - Get Quote for Quartz Countertops",
        description: "Contact Madhav Surfaces for premium quartz countertops. Get quotes, samples, and expert consultation for your stone surface needs.",
        keywords: ["quartz quote", "stone consultation", "countertop installation", "contact stone fabricator"]
    },
    collection: {
        title: "Madhav Surfaces - Premium Engineered Stone Surfaces",
        description: "Browse our complete collection of premium quartz and engineered stone surfaces. Find the perfect countertop for your project.",
        keywords: ["quartz collections", "stone collections", "countertop options", "engineered stone varieties"]
    }
};
