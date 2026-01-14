import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export function HoverButton({
    text = "Button",
    variant = "white", // "white", "black", or "transparent"
    className,
    width,
    href, // URL to navigate to
    target, // Optional target for external links
    onClick, // Optional click handler
}) {
    const variants = {
        white: {
            base: "bg-white text-foreground  text-foreground border-white",
            hoverText: "text-white",
            expandBg: "bg-foreground",
            dotBg: "bg-foreground"
        },
        black: {
            base: "bg-foreground text-white  text-foreground border-black",
            hoverText: "text-foreground",
            expandBg: "bg-white",
            dotBg: "bg-white"
        },
        transparent: {
            base: "bg-transparent text-white text-foreground border-white ",
            hoverText: "text-foreground",
            expandBg: "bg-white",
            dotBg: "bg-transparent"
        },
        transparentBlack: {
            base: "bg-transparent text-foreground text-foreground border-black ",
            hoverText: "text-white",
            expandBg: "bg-foreground",
            dotBg: "bg-foreground"
        }
    };

    const currentVariant = variants[variant] || variants.white;


    const buttonContent = (
        <div
            onClick={onClick}
            className={`group relative ${width || 'w-44'} cursor-pointer overflow-hidden rounded-lg border-2 p-2 text-center transition-all duration-700 ${currentVariant.base} ${className}`}
        >
            <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                {text}
            </span>
            <div className={`absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 ${currentVariant.hoverText}`}>
                <span>{text}</span>
                <ArrowRight />
            </div>
            <div className={`absolute -left-2  h-full w-full rounded-full -translate-x-full  transition-all duration-500 group-hover:h-full group-hover:w-full group-hover:scale-[4] ${currentVariant.expandBg}`}></div>
            {/* <div className={`absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] ${currentVariant.dotBg} group-hover:${currentVariant.expandBg}`} ></div> */}
        </div>
    );

    // If href is provided, wrap with Link component
    if (href) {
        // Check if it's an external link
        const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

        // Determine wrapper class based on width prop
        const wrapperClass = width === 'w-full' ? 'block w-full' : 'inline-block';

        if (isExternal) {
            return (
                <a
                    href={href}
                    target={target || '_blank'}
                    rel={target !== '_self' ? 'noopener noreferrer' : undefined}
                    className={wrapperClass}
                >
                    {buttonContent}
                </a>
            );
        } else {
            return (
                <Link href={href} className={wrapperClass}>
                    {buttonContent}
                </Link>
            );
        }
    }

    // If no href, return button as is
    return buttonContent;
}
