'use client';

import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

const PopupImage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        // Check if popup has been shown before (persists across sessions)
        const hasShownPopup = localStorage.getItem('popupShown');

        if (!hasShownPopup) {
            // Show popup after a short delay for better UX
            const timer = setTimeout(() => {
                setIsVisible(true);
                // Prevent background scroll when popup is open
                document.body.style.overflow = 'hidden';
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = useCallback(() => {
        setIsClosing(true);
        // Wait for exit animation to finish
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
            document.body.style.overflow = '';
            // Mark popup as shown permanently
            localStorage.setItem('popupShown', 'true');
        }, 300);
    }, []);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isVisible) {
                closePopup();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isVisible, closePopup]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 transition-opacity duration-300 ${
                isClosing ? 'opacity-0' : 'opacity-100'
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Welcome popup"
        >
            {/* Backdrop overlay */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
                    isClosing ? 'opacity-0' : 'opacity-100'
                }`}
                onClick={closePopup}
            />

            {/* Popup content */}
            <div
                className={`relative w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[700px] lg:max-w-[800px] transition-all duration-300 ${
                    isClosing
                        ? 'opacity-0 scale-95'
                        : 'opacity-100 scale-100 animate-in fade-in zoom-in-95'
                }`}
            >
                {/* Close button */}
                <button
                    onClick={closePopup}
                    className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-10 p-1.5 sm:p-2 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all duration-200 hover:scale-110 hover:rotate-90 cursor-pointer group"
                    aria-label="Close popup"
                >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover:text-gray-900" />
                </button>

                {/* Popup image */}
                <Image
                    src="/pop-up.png"
                    alt="Madhav Surfaces - Marmo+Mac 2026, Verona Italy, 22-25 Sept 2026, Hall No. 10, Booth No. i4"
                    width={1456}
                    height={816}
                    className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl"
                    priority
                />
            </div>
        </div>
    );
};

export default PopupImage;
