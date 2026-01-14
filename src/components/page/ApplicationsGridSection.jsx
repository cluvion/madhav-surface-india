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
                <h2 className="heading font-thin text-2xl md:text-4xl mb-8">
                    {title}
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 md:gap-12">
                    {items.map((item, index) => {
                        const IconComponent = iconMap[item.iconName] || Table;
                        return (
                        <div
                            key={index}
                            className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                        >
                            <div className="flex justify-center mb-3 sm:mb-4">
                                {/* <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
                                    {React.cloneElement(item.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 " + item.icon.props.className })}
                                </div> */}
                                <IconComponent
                                    strokeWidth={1.5}
                                    className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="font-medium text-foreground mb-2 text-sm sm:text-base">
                                {item.label}
                            </h3>
                        </div>
                    )})}
                </div>
            </div>
        </section>
    );
}
