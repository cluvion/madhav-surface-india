"use client";
import React, { useState, useEffect } from "react";
import { MenuBar, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
// import { HoveredLink, MenuBar, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { HoverButton } from "@/components/ui/hoverbutton";
import { cn } from "@/lib/utils";
import { Phone, Menu, X, ChevronDown, ChevronRight, MapPin, FileText, BookOpen, PenTool, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export const HeroHeader = ({
    className,
    forceScrolled = false
}) => {
    const [active, setActive] = useState(null);
    const [isScrolled, setIsScrolled] = useState(forceScrolled);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBottomMenuOpen, setIsBottomMenuOpen] = useState(false);
    const [expandedSubmenu, setExpandedSubmenu] = useState(null);
    const [activeMobileSection, setActiveMobileSection] = useState(null);

    const toggleMobileSection = (section) => {
        setActiveMobileSection(activeMobileSection === section ? null : section);
    };

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
                    ? "h-full bg-white shadow-lg opacity-100"
                    : "h-0 bg-transparent opacity-0"
            )} />

            {/* Content container */}
            <div className="relative z-10">
                <div className="w-full px-8 sm:px-12 py-3 sm:py-4">
                    <div className="flex items-center justify-between w-full">
                        {/* Logo Section */}
                        <div className="flex items-center justify-start flex-shrink-0">
                            <Link href="/">
                                <Image
                                    src={"/assets/logo.png"}
                                    width={800}
                                    height={800}
                                    alt="Madhav Surfaces"
                                    className={cn(
                                        "transition-all duration-300 ease-in-out",
                                        "h-10 w-auto sm:h-12 md:h-16"
                                    )}
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Center Menu - Desktop Only */}
                        <div className="hidden lg:flex justify-center flex-1">
                            <MenuBar setActive={setActive} isScrolled={isScrolled}>
                                <NavigationMenu viewport={false} className={`${isScrolled ? "text-foreground" : "text-white"}`}>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>Know Us</NavigationMenuTrigger>
                                            <NavigationMenuContent className="top-2">
                                                <ul className="grid w-[200px] gap-4">
                                                    <li>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/profile">Profile</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/technology">Technology</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/corporate-film">Corporate Film</Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                                <NavigationMenu viewport={false} className={`${isScrolled ? "text-foreground" : "text-white"}`}>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>Stone Slabs</NavigationMenuTrigger>
                                            <NavigationMenuContent className="top-2">
                                                <ul className="grid w-[200px] gap-4">
                                                    <li>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/manufacturer-of-granite-india">Granite Slabs</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/granite-cutter-slabs-supplier">Granite Cutter Slabs</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/marble-sandstone-quartzite-exporter-supplier">Marble | Sandstone | Quartzite</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/marbles-and-granite-suppliers-in-india">Exotics & Exclusives</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link target="_blank" href="https://www.madhavquartz.com">Quartz</Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                                <NavigationMenu viewport={false} className={`${isScrolled ? "text-foreground" : "text-white"}`}>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>Stone Tiles</NavigationMenuTrigger>
                                            <NavigationMenuContent className="top-2">
                                                <ul className="grid w-[200px] gap-4">
                                                    <li>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/granite-calibrated-tiles-in-india">Regular Tiles</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/granite-xl-tiles">XL Tiles</Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>

                                <NavigationMenu viewport={false} className={`${isScrolled ? "text-foreground" : "text-white"}`}>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger>Investors</NavigationMenuTrigger>
                                            <NavigationMenuContent className="top-2">
                                                <ul className="grid w-[200px] gap-4">
                                                    <li>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/annual-report">Annual Report</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/shareholders-information">Shareholders Information</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/financial-results">Financial Results</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/unpaid-dividend">Unpaid Dividend</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/corporate-governance-report">Corporate Governance Report</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/corporate-announcements-board-meeting">Corporate Announcements - Board Meeting</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/corporate-announcements-eogm">Corporate Announcements - EOGM</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/corporate-announcements-notice-of-general-meetings">Corporate Announcements - Notice of General Meetings</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/corporate-announcements-outcome-of-agm">Corporate Announcements - Outcome Of AGM</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/corporate-announcements-postal-ballot">Corporate Announcements - Postal Ballot</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/code-of-conduct-and-policies">Code of Conduct and Policies</Link>
                                                        </NavigationMenuLink>
                                                        <NavigationMenuLink asChild>
                                                            <Link href="/regulation-46-62-2">Regulation 46 & 62</Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                                <Link href="/coverings-2023-event" className={`px-2 sm:px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300 font-medium text-sm sm:text-base ${isScrolled ? "text-foreground" : "text-white"}`}>
                                    News & Events
                                </Link>
                                {/* <Link href="/about-us" className={`px-2 sm:px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300 font-medium text-sm sm:text-base ${isScrolled ? "text-foreground" : "text-white"}`}>
                                    About
                                </Link> */}
                                <Link href="/blog" className={`px-2 sm:px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300 font-medium text-sm sm:text-base ${isScrolled ? "text-foreground" : "text-white"}`}>
                                    Blogs
                                </Link>
                                <Link href="/contact-us" className={`px-2 sm:px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-300 font-medium text-sm sm:text-base ${isScrolled ? "text-foreground" : "text-white"}`}>
                                    Contact
                                </Link>
                            </MenuBar>
                        </div>

                        {/* Right Section - CTAs + Icons */}
                        <div className="flex items-center justify-end space-x-5 md:space-x-6 flex-shrink-0">
                            {/* Phone Number */}
                            <a
                                href="tel:+918875023456"
                                className={cn(
                                    "flex items-center rounded-lg transition-all duration-300 hover:scale-110",
                                    isScrolled ? "text-foreground" : "text-white"
                                )}
                            >
                                <Phone className="w-6 h-6 md:w-7 md:h-7" />
                            </a>

                            {/* Location / Where to Buy */}
                            <a
                                href="https://maps.app.goo.gl/HeiSwFk5y6CwE4dD9"
                                target="_blank"
                                className={cn(
                                    "flex items-center rounded-lg transition-all duration-300 hover:scale-110",
                                    isScrolled ? "text-foreground" : "text-white"
                                )}
                            >
                                <MapPin className="w-6 h-6 md:w-7 md:h-7" />
                            </a>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/+918875023456"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "flex items-center rounded-lg transition-all duration-300 hover:scale-110",
                                    isScrolled ? "text-foreground" : "text-white"
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
                            onClick={() => toggleSubmenu('menu')}
                            className={cn(
                                "flex flex-col items-center justify-center p-2 text-xs transition-colors duration-200",
                                expandedSubmenu === 'collections'
                                    ? "bg-foreground text-white"
                                    : "text-gray-600 hover:text-foreground hover:bg-gray-50"
                            )}
                        >
                            <Menu className="w-4 h-4 mb-1" />
                            <span className="leading-none text-[10px]">Menu</span>
                        </button>

                        {/* Applications with Submenu */}
                        {/* <button
                            onClick={() => toggleSubmenu('applications')}
                            className={cn(
                                "flex flex-col items-center justify-center p-2 text-xs transition-colors duration-200",
                                expandedSubmenu === 'applications'
                                    ? "bg-foreground text-white"
                                    : "text-gray-600 hover:text-foreground hover:bg-gray-50"
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
                                    ? "bg-foreground text-white"
                                    : "text-gray-600 hover:text-foreground hover:bg-gray-50"
                            )}
                        >
                            <Menu className="w-4 h-4 mb-1" />
                            <span className="leading-none text-[10px]">Projects</span>
                        </button> */}

                        {/* About */}
                        {/* <Link
                            href="/about-us"
                            className="flex flex-col items-center justify-center p-2 text-xs text-gray-600 hover:text-foreground hover:bg-gray-50 transition-colors duration-200"
                        >
                            <FileText className="w-4 h-4 mb-1" />
                            <span className="leading-none text-[10px]">About</span>
                        </Link> */}

                        {/* News & Events */}
                        <Link
                            href="/coverings-2023-event"
                            className="flex flex-col items-center justify-center p-2 text-xs text-gray-600 hover:text-foreground hover:bg-gray-50 transition-colors duration-200"
                        >
                            <Newspaper className="w-4 h-4 mb-1" />
                            <span className="leading-none text-[10px]">News & Events</span>
                        </Link>

                        {/* Contact */}
                        <Link
                            href="/contact-us"
                            className="flex flex-col items-center justify-center p-2 text-xs text-gray-600 hover:text-foreground hover:bg-gray-50 transition-colors duration-200"
                        >
                            <MapPin className="w-4 h-4 mb-1" />
                            <span className="leading-none text-[10px]">Contact</span>
                        </Link>

                        {/* Blog */}
                        <Link
                            href="/blog"
                            className="flex flex-col items-center justify-center p-2 text-xs text-gray-600 hover:text-foreground hover:bg-gray-50 transition-colors duration-200"
                        >
                            <PenTool className="w-4 h-4 mb-1" />
                            <span className="leading-none text-[10px]">Blog</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Submenu Overlays */}
                {expandedSubmenu && (
                    <div className="fixed inset-0 z-40 bg-foreground/50 lg:hidden" onClick={() => setExpandedSubmenu(null)}>
                        <div
                            className="fixed bottom-16 left-0 right-0 bg-white rounded-t-2xl shadow-xl max-h-96 overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Menu */}
                            {expandedSubmenu === 'menu' && (
                                <>
                                    <div className="p-6 border-b border-gray-100">
                                        <h3 className="font-semibold text-lg text-foreground">Menu</h3>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        {/* Know Us */}
                                        <div className="border-b border-gray-100 last:border-0">
                                            <button
                                                onClick={() => toggleMobileSection('know-us')}
                                                className="flex items-center justify-between w-full px-4 py-3 text-foreground font-semibold text-sm uppercase tracking-wider hover:bg-gray-50 rounded-lg transition-colors"
                                            >
                                                <span>Know Us</span>
                                                {activeMobileSection === 'know-us' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                            </button>

                                            {activeMobileSection === 'know-us' && (
                                                <div className="space-y-1 pb-2">
                                                    <Link href="/profile" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Profile</Link>
                                                    <Link href="/technology" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Technology</Link>
                                                    <Link href="/corporate-film" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Corporate Film</Link>
                                                </div>
                                            )}
                                        </div>

                                        {/* Stone Slabs */}
                                        <div className="border-b border-gray-100 last:border-0">
                                            <button
                                                onClick={() => toggleMobileSection('stone-slabs')}
                                                className="flex items-center justify-between w-full px-4 py-3 text-foreground font-semibold text-sm uppercase tracking-wider hover:bg-gray-50 rounded-lg transition-colors"
                                            >
                                                <span>Stone Slabs</span>
                                                {activeMobileSection === 'stone-slabs' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                            </button>

                                            {activeMobileSection === 'stone-slabs' && (
                                                <div className="space-y-1 pb-2">
                                                    <Link href="/manufacturer-of-granite-india" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Granite Slabs</Link>
                                                    <Link href="/granite-cutter-slabs-supplier" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Granite Cutter Slabs</Link>
                                                    <Link href="/marble-sandstone-quartzite-exporter-supplier" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Marble | Sandstone | Quartzite</Link>
                                                    <Link href="/marbles-and-granite-suppliers-in-india" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Exotics & Exclusives</Link>
                                                    <Link href="https://www.madhavquartz.com" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Quartz</Link>
                                                </div>
                                            )}
                                        </div>

                                        {/* Stone Tiles */}
                                        <div className="border-b border-gray-100 last:border-0">
                                            <button
                                                onClick={() => toggleMobileSection('stone-tiles')}
                                                className="flex items-center justify-between w-full px-4 py-3 text-foreground font-semibold text-sm uppercase tracking-wider hover:bg-gray-50 rounded-lg transition-colors"
                                            >
                                                <span>Stone Tiles</span>
                                                {activeMobileSection === 'stone-tiles' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                            </button>

                                            {activeMobileSection === 'stone-tiles' && (
                                                <div className="space-y-1 pb-2">
                                                    <Link href="/granite-calibrated-tiles-in-india" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Regular Tiles</Link>
                                                    <Link href="/granite-xl-tiles" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">XL Tiles</Link>
                                                </div>
                                            )}
                                        </div>


                                        {/* Investors */}
                                        <div className="border-b border-gray-100 last:border-0">
                                            <button
                                                onClick={() => toggleMobileSection('investors')}
                                                className="flex items-center justify-between w-full px-4 py-3 text-foreground font-semibold text-sm uppercase tracking-wider hover:bg-gray-50 rounded-lg transition-colors"
                                            >
                                                <span>Investors</span>
                                                {activeMobileSection === 'investors' ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                            </button>

                                            {activeMobileSection === 'investors' && (
                                                <div className="space-y-1 pb-2">
                                                    <Link href="/annual-report" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Annual Report</Link>
                                                    <Link href="/shareholders-information" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Shareholders Information</Link>
                                                    <Link href="/financial-results" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Financial Results</Link>
                                                    <Link href="/unpaid-dividend" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Unpaid Dividend</Link>
                                                    <Link href="/corporate-governance-report" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Corporate Governance Report</Link>

                                                    {/* Corporate Announcements Nested Section */}
                                                    <div className="px-4 py-1">
                                                        <div className="font-semibold text-sm text-gray-500 uppercase px-4 py-1">Corporate Announcements</div>
                                                        <div className="space-y-1">
                                                            <Link href="/corporate-announcements-board-meeting" onClick={() => setExpandedSubmenu(null)} className="block px-4 py-1 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Board Meeting</Link>
                                                            <Link href="/corporate-announcements-eogm" onClick={() => setExpandedSubmenu(null)} className="block px-4 py-1 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">EOGM</Link>
                                                            <Link href="/corporate-announcements-notice-of-general-meetings" onClick={() => setExpandedSubmenu(null)} className="block px-4 py-1 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Notice of General Meetings</Link>
                                                            <Link href="/corporate-announcements-outcome-of-agm" onClick={() => setExpandedSubmenu(null)} className="block px-4 py-1 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Outcome Of AGM</Link>
                                                            <Link href="/corporate-announcements-postal-ballot" onClick={() => setExpandedSubmenu(null)} className="block px-4 py-1 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Postal Ballot</Link>
                                                        </div>
                                                    </div>

                                                    <Link href="/code-of-conduct-and-policies" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Code of Conduct and Policies</Link>
                                                    <Link href="/regulation-46-62-2" onClick={() => setExpandedSubmenu(null)} className="block px-8 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 rounded-lg transition-colors">Regulation 46 & 62</Link>
                                                </div>
                                            )}
                                        </div>
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