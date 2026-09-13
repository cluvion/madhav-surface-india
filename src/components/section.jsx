import { cn } from "@/lib/utils"

function Section({ children, className, ...props }) {
    return (
        <section className={cn('py-8 md:py-12 lg:py-14 container mx-auto px-4 md:px-6 overflow-hidden scroll-mt-24', className)} {...props}>
            {children}
        </section>
    )
}

export default Section