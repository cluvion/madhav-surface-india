"use client"
import React from "react";

export default function TableSection({
    title = "Granite specifications",
    colors = "black, brown, green, white, and more",
    forms = "Slabs, Tiles, calibrated in Regular and XL tiles",
    finishes = "polished, flamed, honed, flamed+brushed, giano, leathe",
    slabThickness = "(2-12 cm), (2,3,4 cm)",
    tiles = [
        "610 x 305 x 10 mm",
        "600 x 400 x 15 mm",
        "400 x 400 x 15 mm",
        "600 x 300 x 20 mm",
        "600 x 600 x 20 mm",
        "610 x 610 x 15 mm",
        "305 x 305 x 10 mm"
    ],
    xlTiles = "600 x 1200mm",
    applications = "flooring, wall cladding, backsplashes, vanity tops, countertops",
    footerTitle,
    footerDescription
}) {
    return (
        <section className="mt-8 md:mt-16">
            <h2 className="heading font-thin text-xl md:text-4xl mb-6 text-center md:text-left">
                {title}
            </h2>

            <div className="border border-neutral-200">
                <table className="w-full text-left border-collapse block md:table">
                    <tbody className="divide-y divide-neutral-200 block md:table-row-group">
                        <tr className="block md:table-row border-b  border-neutral-200 bg-white">
                            <th className="block md:table-cell p-4 font-bold text-neutral-800 bg-neutral-50 md:w-1/3 md:border-r border-neutral-200">Stones available in colors</th>
                            <td className="block md:table-cell p-4 text-neutral-600">{colors}</td>
                        </tr>
                        <tr className="block md:table-row border-b  border-neutral-200 bg-white">
                            <th className="block md:table-cell p-4 font-bold text-neutral-800 bg-neutral-50 md:border-r border-neutral-200">Stone available as</th>
                            <td className="block md:table-cell p-4 text-neutral-600">{forms}</td>
                        </tr>
                        <tr className="block md:table-row border-b  border-neutral-200 bg-white">
                            <th className="block md:table-cell p-4 font-bold text-neutral-800 bg-neutral-50 md:border-r border-neutral-200">Finishes available</th>
                            <td className="block md:table-cell p-4 text-neutral-600">{finishes}</td>
                        </tr>
                        {/* Dimensions available header */}
                        <tr className="block md:table-row border-b  border-neutral-200 bg-white">
                            <th colSpan="2" className="block md:table-cell p-3 text-center font-bold text-foreground bg-neutral-100 uppercase text-sm tracking-wider">
                                Dimensions available
                            </th>
                        </tr>
                        <tr className="block md:table-row border-b  border-neutral-200 bg-white">
                            <th className="block md:table-cell p-4 font-bold text-neutral-800 bg-neutral-50 md:border-r border-neutral-200">Slab Thicknesses</th>
                            <td className="block md:table-cell p-4 text-neutral-600">{slabThickness}</td>
                        </tr>
                        {tiles && tiles.length > 0 && tiles.map((tile, index) => (
                            <tr key={index} className="block md:table-row border-b  border-neutral-200 bg-white">
                                {index === 0 && (
                                    <th rowSpan={tiles.length} className="block md:table-cell p-4 font-bold text-primary bg-neutral-50 md:border-r border-neutral-200 md:align-top">Tiles</th>
                                )}
                                <td className="block md:table-cell p-4 text-neutral-600 border-b md:border-b-0 border-neutral-100 last:border-0">{tile}</td>
                            </tr>
                        ))}
                        <tr className="block md:table-row border-b  border-neutral-200 bg-white">
                            <th className="block md:table-cell p-4 font-bold text-primary bg-neutral-50 md:border-r border-neutral-200">XL tiles</th>
                            <td className="block md:table-cell p-4 text-neutral-600">{xlTiles}</td>
                        </tr>
                        <tr className="block md:table-row border-b  border-neutral-200 bg-white">
                            <th className="block md:table-cell p-4 font-bold text-neutral-800 bg-neutral-50 md:border-r border-neutral-200">Areas of application</th>
                            <td className="block md:table-cell p-4 text-neutral-600">{applications}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {(footerTitle || footerDescription) && (
                <div className="mt-16 text-center md:text-left">
                    {footerTitle && (
                        <h3 className="heading font-thin text-2xl md:text-4xl mb-6">
                            {footerTitle}
                        </h3>
                    )}
                    {footerDescription && (
                        <div className="space-y-4 text-justify text-neutral-600 text-sm md:text-base leading-relaxed">
                            {footerDescription}
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}
