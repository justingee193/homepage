export default function Article({ children }) {
    return (
        <article>
            <div className="max-w-prose mx-auto">
                {children}
            </div>
        </article>
    )
}
