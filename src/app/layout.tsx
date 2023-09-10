import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Justin's Homepage",
    description: 'This is my homepage',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <body className="{inter.className} w-[85%] mx-auto">
                {children}
            </body>
        </html>
    )
}
