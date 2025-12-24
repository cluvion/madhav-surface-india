
function Section({ children, className }) {
    return (
        <section className={`${className || 'py-6 md:py-10'} overflow-hidden`}>
            {children}
        </section>
    )
}

export default Section