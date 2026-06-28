import React from 'react';
import Section from '@/components/section';

const ProductDescription = ({ product }) => {
    // Generate some junk text for long description if not available
    const briefDescription = product.description || "A premium natural stone surface that brings elegance and durability to any space.";
    const longDescription = product.longDescription || `Experience the unparalleled beauty and strength of ${product.name}. Carefully sourced and expertly crafted, this surface offers a perfect blend of aesthetic appeal and functional performance. 

Ideal for both residential and commercial applications, it provides a timeless look that elevates any design scheme. The unique natural variations ensure that every installation is one-of-a-kind, while its robust characteristics guarantee longevity with minimal maintenance.

Whether you're looking to upgrade your kitchen countertops, design a luxurious bathroom vanity, or create a stunning feature wall, ${product.name} delivers exceptional results that will stand the test of time.`;

    return (
        <Section className="bg-gray-50/50">
            <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">
                <div className="text-center mb-10">
                    <h2 className="heading font-bold text-2xl md:text-4xl text-gray-900 mb-4">
                        About {product.name}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                        {briefDescription}
                    </p>
                </div>
                
                <div className="prose prose-lg prose-gray mx-auto text-gray-600 text-justify">
                    {longDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ProductDescription;
