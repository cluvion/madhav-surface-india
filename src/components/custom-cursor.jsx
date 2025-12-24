'use client';

import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
    const mousePosition = useRef({ x: 0, y: 0 });
    const dotPosition = useRef({ x: 0, y: 0 });
    const borderDotPosition = useRef({ x: 0, y: 0 });
    const [renderPos, setRenderPos] = useState({
        dot: { x: 0, y: 0 },
        border: { x: 0, y: 0 },
    });
    const [isHovering, setIsHovering] = useState(false);
    const [isDarkBackground, setIsDarkBackground] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    const DOT_SMOOTHNESS = 0.2;
    const BORDER_DOT_SMOOTHNESS = 0.1;

    // Handle mounting to prevent hydration mismatch
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };

            // Use data attributes for cursor color control
            const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
            if (elementUnderCursor) {
                let shouldBeDark = true;
                let currentElement = elementUnderCursor;

                // Check for data attributes or specific classes that indicate light backgrounds
                while (currentElement && currentElement !== document.documentElement) {
                    const computedBg = getComputedStyle(currentElement).backgroundColor;

                    // Check for white/light backgrounds
                    if (computedBg === 'rgb(255, 255, 255)' ||
                        computedBg === 'rgba(255, 255, 255, 1)' ||
                        computedBg === 'white' ||
                        currentElement.classList.contains('bg-white') ||
                        currentElement.classList.contains('bg-background') ||
                        currentElement.hasAttribute('data-light-bg')) {
                        shouldBeDark = false;
                        break;
                    }

                    // Check for dark backgrounds
                    if (computedBg === 'rgb(0, 0, 0)' ||
                        computedBg === 'rgba(0, 0, 0, 1)' ||
                        computedBg === 'black' ||
                        currentElement.classList.contains('bg-black') ||
                        currentElement.classList.contains('bg-dark') ||
                        currentElement.hasAttribute('data-dark-bg')) {
                        shouldBeDark = true;
                        break;
                    }

                    currentElement = currentElement.parentElement;
                }

                setIsDarkBackground(shouldBeDark);
            }
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', handleMouseMove);

        const interactiveElements = document.querySelectorAll(
            'a, button, img, input, textarea, select, [role="button"]'
        );

        interactiveElements.forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        const animate = () => {
            const lerp = (start, end, factor) => {
                return start + (end - start) * factor;
            };

            dotPosition.current.x = lerp(
                dotPosition.current.x,
                mousePosition.current.x,
                DOT_SMOOTHNESS
            );
            dotPosition.current.y = lerp(
                dotPosition.current.y,
                mousePosition.current.y,
                DOT_SMOOTHNESS
            );

            borderDotPosition.current.x = lerp(
                borderDotPosition.current.x,
                mousePosition.current.x,
                BORDER_DOT_SMOOTHNESS
            );
            borderDotPosition.current.y = lerp(
                borderDotPosition.current.y,
                mousePosition.current.y,
                BORDER_DOT_SMOOTHNESS
            );

            setRenderPos({
                dot: { x: dotPosition.current.x, y: dotPosition.current.y },
                border: {
                    x: borderDotPosition.current.x,
                    y: borderDotPosition.current.y,
                },
            });

            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            interactiveElements.forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
            cancelAnimationFrame(animationId);
        };
    }, []);

    // Don't render anything until mounted (prevents hydration mismatch)
    if (!isMounted) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-90 hidden lg:block">
            {/* Main dot */}
            <div
                className="absolute rounded-full"
                style={{
                    width: '8px',
                    height: '8px',
                    transform: 'translate(-50%, -50%)',
                    left: `${renderPos.dot.x}px`,
                    top: `${renderPos.dot.y}px`,
                    backgroundColor: isDarkBackground ? 'white' : 'black',
                    transition: 'background-color 0.2s ease',
                }}
            />

            {/* Border circle */}
            <div
                className="absolute rounded-full border"
                style={{
                    width: isHovering ? '44px' : '28px',
                    height: isHovering ? '44px' : '28px',
                    transform: 'translate(-50%, -50%)',
                    left: `${renderPos.border.x}px`,
                    top: `${renderPos.border.y}px`,
                    borderColor: isDarkBackground ? 'white' : 'black',
                    transition: 'width 0.3s, height 0.3s, border-color 0.2s ease',
                }}
            />
        </div>
    );
}
