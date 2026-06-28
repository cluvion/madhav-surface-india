import React from 'react';
import Section from '@/components/section';

const ProductDetails = ({ product }) => {
    return (
        <Section>
            <div className="max-w-5xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 border-b pb-4">
                    Product Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {/* Collection */}
                    <div className="flex flex-col border-b border-gray-100 pb-3">
                        <span className="text-sm text-gray-500 mb-1">Collection</span>
                        <span className="font-medium text-gray-900">{product.collection || "Premium Collection"}</span>
                    </div>
                    
                    {/* Material/Type */}
                    <div className="flex flex-col border-b border-gray-100 pb-3">
                        <span className="text-sm text-gray-500 mb-1">Material Type</span>
                        <span className="font-medium text-gray-900">
                            {product.tags?.includes('granite') ? 'Granite' : 
                             product.tags?.includes('marble') ? 'Marble' : 
                             product.tags?.includes('quartzite') ? 'Quartzite' : 
                             'Natural Stone'}
                        </span>
                    </div>
                    
                    {/* Color */}
                    <div className="flex flex-col border-b border-gray-100 pb-3">
                        <span className="text-sm text-gray-500 mb-1">Primary Color</span>
                        <span className="font-medium text-gray-900 capitalize">{product.color || "Various / Multicolor"}</span>
                    </div>
                    
                    {/* Finish */}
                    <div className="flex flex-col border-b border-gray-100 pb-3">
                        <span className="text-sm text-gray-500 mb-1">Surface Finish</span>
                        <span className="font-medium text-gray-900 capitalize">{product.finish || "Polished, Honed, Leathered"}</span>
                    </div>
                    
                    {/* Applications/Use Case */}
                    <div className="flex flex-col border-b border-gray-100 pb-3">
                        <span className="text-sm text-gray-500 mb-1">Recommended Applications</span>
                        <span className="font-medium text-gray-900">
                            {product.useCase ? product.useCase.join(', ') : "Flooring, Wall Cladding, Countertops, Exteriors"}
                        </span>
                    </div>
                    
                    {/* Thickness */}
                    <div className="flex flex-col border-b border-gray-100 pb-3">
                        <span className="text-sm text-gray-500 mb-1">Thickness</span>
                        <span className="font-medium text-gray-900">{product.thickness || "18mm, 20mm, 30mm (Customizable)"}</span>
                    </div>

                    {/* Dimensions */}
                    <div className="flex flex-col border-b border-gray-100 pb-3">
                        <span className="text-sm text-gray-500 mb-1">Standard Dimensions</span>
                        <span className="font-medium text-gray-900">{product.dimensions || "3000mm x 1500mm / Cut to Size"}</span>
                    </div>

                    {/* Origin */}
                    <div className="flex flex-col border-b border-gray-100 pb-3">
                        <span className="text-sm text-gray-500 mb-1">Origin</span>
                        <span className="font-medium text-gray-900">{product.origin || "India"}</span>
                    </div>
                </div>
                
                {/* Tags */}
                <div className="mt-8 pt-2">
                    <span className="text-sm text-gray-500 mb-3 block">Tags & Characteristics</span>
                    <div className="flex flex-wrap gap-2">
                        {product.tags && product.tags.length > 0 ? product.tags.map(tag => (
                            <span key={tag} className="px-4 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm capitalize">
                                {tag}
                            </span>
                        )) : (
                            <>
                                <span className="px-4 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm">Durable</span>
                                <span className="px-4 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm">Stain Resistant</span>
                                <span className="px-4 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 rounded-full text-sm">Heat Resistant</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ProductDetails;
