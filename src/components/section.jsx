
function Section({ children, className }) {
    return (
        <section className={`${className || 'py-5 md:py-8 lg:py-10 container mx-auto px-4 md:px-6'} overflow-hidden`}>
            {children}
        </section>
    )
}

export default Section