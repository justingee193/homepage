import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
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
        <html lang="en">
            <body className="{inter.className}">
                <main>
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    )
}
