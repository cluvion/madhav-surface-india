"use client";
import React, { useState, useEffect } from "react";
import { MenuBar, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
// import { HoveredLink, MenuBar, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { HoverButton } from "@/components/ui/hoverbutton";
import { cn } from "@/lib/utils";
import { Phone, Menu, X, ChevronDown, ChevronRight, MapPin, FileText, BookOpen, PenTool } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const HeroHeader = ({
    className,
    forceScrolled = false
}) => {
    const [active, setActive] = useState(null);
    const [isScrolled, setIsScrolled] = useState(forceScrolled);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBottomMenuOpen, setIsBottomMenuOpen] = useState(false);
    const [expandedSubmenu, setExpandedSubmenu] = useState(null);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setIsScrolled(forceScrolled || window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Set initial state

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleSubmenu = (menu) => {
        setExpandedSubmenu(expandedSubmenu === menu ? null : menu);
    };

    return (
        <div className={cn(
            "fixed w-full z-40 top-0 left-0 transition-all duration-700 ease-out",
            className
        )} {...(isScrolled ? { 'data-light-bg': true } : {})}>
            {/* Background overlay with slide-down animation - Fixed mobile issue */}
            <div className={cn(
                "absolute top-0 left-0 right-0 h-0 transition-all duration-500 ease-out overflow-hidden",
                isScrolled
                    ? "h-full bg-white shadow-lg opacity-100 "
                    : "h-0 bg-transparent opacity-0"
            )} />

            {/* Content container */}
            <div className="relative z-10">
                <div className="w-full px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
                        {/* Logo Section */}
                        <div className="flex items-center justify-start flex-shrink-0">
                            <Link href="/">
                                <Image
                                    src={isScrolled ? "/assets/logo1.png" : "/assets/logo2.png"}
                                    width={100}
                                    height={60}
                                    alt="Madhav Surfaces"
                                    className={cn(
                                        "transition-all duration-300 ease-in-out",
                                        "h-12 w-auto sm:h-14 md:h-16 lg:h-18"
                                    )}
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Center Menu - Desktop Only */}
                        <div className="hidden lg:flex justify-center flex-1">
                            <MenuBar setActive={setActive} isScrolled={isScrolled}>
                                <MenuItem setActive={setActive} active={active} item="Collections" isScrolled={isScrolled} hasDropdown={true} DropdownIcon={ChevronDown}>
                                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                                        <ProductItem
                                            title="Bedrock"
                                            href="/collection/bedrock"
                                            src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=400&h=200&fit=crop"
                                            description="Luxury natural stone surfaces for premium projects." />
                                        <ProductItem
                                            title="Pinnacle"
                                            href="/collection/pinnacle"
                                            src="https://res.cloudinary.com/dljiyumfx/image/upload/v1757604521/Midnight_Mist_Render_zbmfrd.jpg"
                                            description="Elegant marble surfaces with timeless beauty." />
                                        <ProductItem
                                            title="Opulence"
                                            href="/collection/opulence"
                                            src="https://res.cloudinary.com/dljiyumfx/image/upload/c_crop,w_1080,h_560/v1757604522/Masseto_Render_wj376t.png"
                                            description="Durable granite surfaces for modern spaces." />
                                        <ProductItem
                                            title="Serenity"
                                            href="/collection/serenity"
                                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=200&fit=crop"
                                            description="Engineered quartz with superior performance." />
                                        <ProductItem
                                            title="Silicalite"
                                            href="/collection/silicalite"
                                            src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=200&fit=crop"
                                            description="Engineered quartz with superior performance." />
                                    </div>
                                </MenuItem>
                                {/* <MenuItem setActive={setActive} active={active} item="Applications" isScrolled={isScrolled} hasDropdown={true} DropdownIcon={ChevronDown}>
                                    <div className="text-sm grid grid-cols-2 gap-10 p-4">
                                        <ProductItem
                                            title="Kitchen Countertops"
                                            href="/applications/kitchen"
                                            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=200&fit=crop"
                                            description="Beautiful and durable kitchen surface solutions." />
                                        <ProductItem
                                            title="Bathroom Vanities"
                                            href="/applications/bathroom"
                                            src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=200&fit=crop"
                                            description="Elegant bathroom countertop installations." />
                                        <ProductItem
                                            title="Commercial Spaces"
                                            href="/applications/commercial"
                                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=200&fit=crop"
                                            description="Professional grade surfaces for businesses." />
                                        <ProductItem
                                            title="Flooring Solutions"
                                            href="/applications/flooring"
                                            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=200&fit=crop"
                                            description="Premium stone flooring for all spaces." />
                                    </div>
                                </MenuItem> */}
                                {/* <MenuItem setActive={setActive} active={active} item="Projects" isScrolled={isScrolled} hasDropdown={true} DropdownIcon={ChevronDown}>
                                    <div className="flex flex-col space-y-4 text-sm">
                                        <HoveredLink href="/projects/residential">Residential Projects</HoveredLink>
                                        <HoveredLink href="/projects/commercial">Commercial Projects</HoveredLink>
                                        <HoveredLink href="/projects/gallery">Project Gallery</HoveredLink>
                                        <HoveredLink href="/projects/testimonials">Client Testimonials</HoveredLink>
                                    </div>
                                </MenuItem> */}

                                <Link href="/about-us" className={`px-2 sm:px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300 font-medium text-sm sm:text-base ${isScrolled ? "text-black" : "text-white"}`}>
                                    About
                                </Link>
                                <Link href="/contact-us" className={`px-2 sm:px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300 font-medium text-sm sm:text-base ${isScrolled ? "text-black" : "text-white"}`}>
                                    Contact
                                </Link>
                                <Link href="/blog" className={`px-2 sm:px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300 font-medium text-sm sm:text-base ${isScrolled ? "text-black" : "text-white"}`}>
                                    Blog
                                </Link>
                            </MenuBar>
                        </div>

                        {/* Right Section - CTAs + Icons */}
                        <div className="flex items-center justify-end space-x-5 md:space-x-6 flex-shrink-0">
                            {/* Phone Number */}
                            <a
                                href="tel:+96894866789"
                                className={cn(
                                    "flex items-center rounded-lg transition-all duration-300 hover:scale-110",
                                    isScrolled ? "text-black" : "text-white"
                                )}
                            >
                                <Phone className="w-6 h-6 md:w-7 md:h-7" />
                            </a>

                            {/* Location / Where to Buy */}
                            <a
                                href="https://maps.app.goo.gl/8ie5mXgK7WGLnWef9"
                                target="_blank"
                                className={cn(
                                    "flex items-center rounded-lg transition-all duration-300 hover:scale-110",
                                    isScrolled ? "text-black" : "text-white"
                                )}
                            >
                                <MapPin className="w-6 h-6 md:w-7 md:h-7" />
                            </a>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/+96896456778"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "flex items-center rounded-lg transition-all duration-300 hover:scale-110",
                                    isScrolled ? "text-black" : "text-white"
                                )}
                                aria-label="Contact on WhatsApp"
                            >
                                <Image
                                    src="/assets/WhatsappHeader.svg"
                                    alt="WhatsApp"
                                    width={64}
                                    height={64}
                                    className="w-7 h-7 md:w-8 md:h-8"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Bottom Navigation - Only visible on small devices */}
                <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-foreground/50 shadow-lg lg:hidden">
                    <div className="grid grid-cols-4 h-16 place-items-center">
                        {/* Collections with Submenu */}
                        <button
                            onClick={() => toggleSubmenu('collections')}
                            className={cn(
                                "flex flex-col items-center justify-center p-2 text-xs transition-colors duration-200",
                                expandedSubmenu === 'collections'
                                    ? "bg-black text-white"
                                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                            )}
                        >
                            <BookOpen className="w-4 h-4 mb-1" />
                            <span className="leading-none text-[10px]">Collections</span>
                        </button>

                        {/* Applications with Submenu */}
                        {/* <button
                            onClick={() => toggleSubmenu('applications')}
                            className={cn(
                                "flex flex-col items-center justify-center p-2 text-xs transition-colors duration-200",
                                expandedSubmenu === 'applications'
                                    ? "bg-black text-white"
                                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                            )}
                        >
                            <FileText className="w-4 h-4 mb-1" />
                            <span className="leading-none text-[10px]">Applications</span>
                        </button> */}

                        {/* Projects with Submenu */}
                        {/* <button
                            onClick={() => toggleSubmenu('projects')}
                            className={cn(
                                "flex flex-col items-center justify-center p-2 text-xs transition-colors duration-200",
                                expandedSubmenu === 'projects'
                                    ? "bg-black text-white"
                                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                            )}
                        >
                            <Menu className="w-4 h-4 mb-1" />
                            <span className="leading-none text-[10px]">Projects</span>
                        </button> */}

                        {/* About */}
                        <Link
                            href="/about-us"
                            className="flex flex-col items-center justify-center p-2 text-xs text-gray-600 hover:text-black hover:bg-gray-50 transition-colors duration-200"
                        >
                            <FileText className="w-4 h-4 mb-1" />
                            <span className="leading-none text-[10px]">About</span>
                        </Link>

                        {/* Contact */}
                        <Link
                            href="/contact-us"
                            className="flex flex-col items-center justify-center p-2 text-xs text-gray-600 hover:text-black hover:bg-gray-50 transition-colors duration-200"
                        >
                            <MapPin className="w-4 h-4 mb-1" />
                            <span className="leading-none text-[10px]">Contact</span>
                        </Link>

                        {/* Blog */}
                        <Link
                            href="/blog"
                            className="flex flex-col items-center justify-center p-2 text-xs text-gray-600 hover:text-black hover:bg-gray-50 transition-colors duration-200"
                        >
                            <PenTool className="w-4 h-4 mb-1" />
                            <span className="leading-none text-[10px]">Blog</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Submenu Overlays */}
                {expandedSubmenu && (
                    <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setExpandedSubmenu(null)}>
                        <div
                            className="fixed bottom-16 left-0 right-0 bg-white rounded-t-2xl shadow-xl max-h-96 overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Collections Submenu */}
                            {expandedSubmenu === 'collections' && (
                                <>
                                    <div className="p-6 border-b border-gray-100">
                                        <h3 className="font-semibold text-lg text-black">Collections</h3>
                                        <p className="text-sm text-gray-500">Our Premium Stone Collections</p>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <Link
                                            href="/collection/bedrock"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200"
                                            onClick={() => setExpandedSubmenu(null)}
                                        >
                                            <div className="font-medium">Bedrock</div>
                                            <div className="text-sm text-gray-500">Luxury natural stone surfaces</div>
                                        </Link>
                                        <Link
                                            href="/collection/pinnacle"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200"
                                            onClick={() => setExpandedSubmenu(null)}
                                        >
                                            <div className="font-medium">Pinnacle</div>
                                            <div className="text-sm text-gray-500">Elegant marble surfaces</div>
                                        </Link>
                                        <Link
                                            href="/collection/opulence"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200"
                                            onClick={() => setExpandedSubmenu(null)}
                                        >
                                            <div className="font-medium">Opulence</div>
                                            <div className="text-sm text-gray-500">Durable granite surfaces</div>
                                        </Link>
                                        <Link
                                            href="/collection/serenity"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200"
                                            onClick={() => setExpandedSubmenu(null)}
                                        >
                                            <div className="font-medium">Serenity</div>
                                            <div className="text-sm text-gray-500">Engineered quartz</div>
                                        </Link>
                                        <Link
                                            href="/collection/silicalite"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200"
                                            onClick={() => setExpandedSubmenu(null)}
                                        >
                                            <div className="font-medium">SilicaLite</div>
                                            <div className="text-sm text-gray-500">Superior performance quartz</div>
                                        </Link>
                                    </div>
                                </>
                            )}

                            {/* Applications Submenu */}
                            {expandedSubmenu === 'applications' && (
                                <>
                                    <div className="p-6 border-b border-gray-100">
                                        <h3 className="font-semibold text-lg text-black">Applications</h3>
                                        <p className="text-sm text-gray-500">Where Our Surfaces Excel</p>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <Link
                                            href="/applications/kitchen"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200"
                                            onClick={() => setExpandedSubmenu(null)}
                                        >
                                            <div className="font-medium">Kitchen Countertops</div>
                                            <div className="text-sm text-gray-500">Beautiful kitchen solutions</div>
                                        </Link>
                                        <Link
                                            href="/applications/bathroom"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200"
                                            onClick={() => setExpandedSubmenu(null)}
                                        >
                                            <div className="font-medium">Bathroom Vanities</div>
                                            <div className="text-sm text-gray-500">Elegant bathroom installations</div>
                                        </Link>
                                        <Link
                                            href="/applications/commercial"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200"
                                            onClick={() => setExpandedSubmenu(null)}
                                        >
                                            <div className="font-medium">Commercial Spaces</div>
                                            <div className="text-sm text-gray-500">Professional grade surfaces</div>
                                        </Link>
                                        <Link
                                            href="/applications/flooring"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200"
                                            onClick={() => setExpandedSubmenu(null)}
                                        >
                                            <div className="font-medium">Flooring Solutions</div>
                                            <div className="text-sm text-gray-500">Premium stone flooring</div>
                                        </Link>
                                    </div>
                                </>
                            )}

                            {/* Projects Submenu */}
                            {expandedSubmenu === 'projects' && (
                                <>
                                    <div className="p-6 border-b border-gray-100">
                                        <h3 className="font-semibold text-lg text-black">Projects</h3>
                                        <p className="text-sm text-gray-500">Our Work & Portfolio</p>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        <Link
                                            href="/projects/residential"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200"
                                            onClick={() => setExpandedSubmenu(null)}
                                        >
                                            <div className="font-medium">Residential Projects</div>
                                            <div className="text-sm text-gray-500">Home installations</div>
                                        </Link>
                                        <Link
                                            href="/projects/commercial"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200"
                                            onClick={() => setExpandedSubmenu(null)}
                                        >
                                            <div className="font-medium">Commercial Projects</div>
                                            <div className="text-sm text-gray-500">Business installations</div>
                                        </Link>
                                        <Link
                                            href="/projects/gallery"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200"
                                            onClick={() => setExpandedSubmenu(null)}
                                        >
                                            <div className="font-medium">Project Gallery</div>
                                            <div className="text-sm text-gray-500">Visual showcase</div>
                                        </Link>
                                        <Link
                                            href="/projects/testimonials"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black rounded-lg transition-colors duration-200"
                                            onClick={() => setExpandedSubmenu(null)}
                                        >
                                            <div className="font-medium">Client Testimonials</div>
                                            <div className="text-sm text-gray-500">Customer reviews</div>
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};