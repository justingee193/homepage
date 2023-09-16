"use client";

import { useWindowSize } from "@/hooks/useWindowResize"

export default function Article({ children }) {
    const [height, width] = useWindowSize();

    return (
        <article>
            <div className="max-w-prose mx-auto">
                {children}
            </div>
        </article>
    )
}
