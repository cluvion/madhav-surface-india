
function Section({ children, className }) {
    return (
        <section className={`${className || 'py-8 md:py-12 lg:py-14  container mx-auto px-4 md:px-6'} overflow-hidden`}>
            {children}
        </section>
    )
}

export default Section