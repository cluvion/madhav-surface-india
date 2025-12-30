import Link from "next/link";
export function AnimatedLink({ href, children, className = "" }) {
    return (
        <Link
            href={href}
            className={`relative block transition-colors w-full lg:w-fit group  text-center md:text-left ${className}`}
        >
            <span>{children}</span>
            <span
                className="block w-full h-0.5 bg-white transform origin-left rounded-full scale-x-0 transition-transform duration-300 lg:group-hover:scale-x-100"
                aria-hidden="true"
            />
        </Link>
    );
}
