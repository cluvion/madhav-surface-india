import React from "react";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

export default function NewFooter() {
    return (
        <footer className="bg-black pt-20 pb-10 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 grid gap-12 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <h3 className="mb-6 text-2xl font-bold tracking-tight">Madhav Surfaces</h3>
                        <p className="mb-8 text-neutral-400">
                            Premium natural stone supplier for luxury residential and commercial projects worldwide.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-neutral-400 hover:text-white"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-neutral-400 hover:text-white"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="text-neutral-400 hover:text-white"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-neutral-400 hover:text-white"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">Quick Links</h4>
                        <ul className="space-y-4 text-neutral-400">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Collections</a></li>
                            <li><a href="#" className="hover:text-white">Projects</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">Services</h4>
                        <ul className="space-y-4 text-neutral-400">
                            <li><a href="#" className="hover:text-white">Stone Supply</a></li>
                            <li><a href="#" className="hover:text-white">Custom Cutting</a></li>
                            <li><a href="#" className="hover:text-white">Installation Support</a></li>
                            <li><a href="#" className="hover:text-white">Design Consultation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-primary">Contact</h4>
                        <ul className="space-y-4 text-neutral-400">
                            <li>123 Stone Avenue, Marble City,</li>
                            <li>India, 313001</li>
                            <li>+91 123 456 7890</li>
                            <li>info@madhavsurfaces.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
                    <p>&copy; {new Date().getFullYear()} Madhav Surfaces. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
