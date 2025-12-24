"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
    Menu, 
    FileText, 
    BookOpen, 
    Scale, 
    Eye, 
    MapPin,
    X 
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const MobileBottomNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {
            id: "menu",
            label: "Menu",
            icon: Menu,
            action: () => setIsMenuOpen(!isMenuOpen)
        },
        {
            id: "collections",
            label: "Collections",
            icon: BookOpen,
            href: "/collections"
        },
        {
            id: "about",
            label: "About",
            icon: FileText,
            href: "/about"
        },
        {
            id: "contact",
            label: "Contact",
            icon: MapPin,
            href: "/contact"
        }
    ];

    const menuLinks = [
        { label: "Collections", href: "/collections" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Projects", href: "/projects" },
        { label: "Applications", href: "/applications" },
        { label: "Support", href: "/support" }
    ];

    return (
        <>
            {/* Mobile Bottom Navigation - Only visible on small devices */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg sm:hidden">
                <div className="grid grid-cols-4 h-16">
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        
                        if (item.action) {
                            return (
                                <button
                                    key={item.id}
                                    onClick={item.action}
                                    className={cn(
                                        "flex flex-col items-center justify-center p-2 text-xs transition-colors duration-200",
                                        isMenuOpen && item.id === "menu"
                                            ? "bg-black text-white"
                                            : "text-gray-600 hover:text-black hover:bg-gray-50"
                                    )}
                                >
                                    {isMenuOpen && item.id === "menu" ? (
                                        <X className="w-5 h-5 mb-1" />
                                    ) : (
                                        <IconComponent className="w-5 h-5 mb-1" />
                                    )}
                                    <span className="leading-none">{item.label}</span>
                                </button>
                            );
                        }

                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                className="flex flex-col items-center justify-center p-2 text-xs text-gray-600 hover:text-black hover:bg-gray-50 transition-colors duration-200"
                            >
                                <IconComponent className="w-5 h-5 mb-1" />
                                <span className="leading-none">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 sm:hidden" onClick={() => setIsMenuOpen(false)}>
                    <div 
                        className="fixed bottom-16 left-0 right-0 bg-white rounded-t-2xl shadow-xl max-h-96 overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Logo and Header */}
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex items-center space-x-3">
                                <Image
                                    src="/assets/logo1.png"
                                    width={40}
                                    height={40}
                                    alt="Madhav Surfaces"
                                    className="h-10 w-auto"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg text-black">Madhav Surfaces</h3>
                                    <p className="text-sm text-gray-500">Premium Stone Solutions</p>
                                </div>
                            </div>
                        </div>

                        {/* Menu Links */}
                        <div className="p-4 space-y-2">
                            {menuLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200 font-medium"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        {/* Contact Info */}
                        <div className="p-4 border-t border-gray-100 bg-gray-50">
                            <a
                                href="tel:+1234567890"
                                className="flex items-center justify-center space-x-2 px-4 py-3 bg-black text-white rounded-lg font-medium"
                            >
                                <span>Call Us Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom padding for content to avoid overlap with bottom nav */}
            <div className="h-16 sm:hidden" />
        </>
    );
};

export default MobileBottomNav;
