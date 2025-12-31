"use client";
import React from "react";
import Section from "../section";
import {
    Menu,
    ChefHat,
    Columns,
    Table,
    Coffee,
    LibraryBig // Using alternatives as direct matches might not be exact, adjust imports as needed
} from "lucide-react";

// Map string names to Lucide icons
const iconMap = {
    steps: Menu, // Placeholder for steps
    kitchen: ChefHat, // Placeholder for kitchen
    window: Columns, // Placeholder for window
    table: Table,
    coffee: Coffee,
    shelves: LibraryBig,
};

export default function ApplicationsGridSection({ title, items }) {
    return (
        <section className="mt-8 md:mt-16">
            <div className="text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                    {title}
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
                    {items.map((item, index) => {
                        const IconComponent = iconMap[item.iconName] || Table;

                        return (
                            <div key={index} className="flex flex-col items-center gap-4 group text-center">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 group-hover:shadow-md transition-all duration-300 w-24 h-24 flex items-center justify-center">
                                    <IconComponent
                                        strokeWidth={1.5}
                                        className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="text-xl font-medium text-black max-w-[150px] leading-tight">
                                    {item.label}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
