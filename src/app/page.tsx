import Navbar from '@/components/Navbar'
import Paragraph from '@/components/Paragraph'
import Bio from '@/components/Bio'

export default function Home() {
    return (
        <>
            <header className="bg-gray-100">
                <Navbar />
                <h3>Works</h3>
                <Paragraph>
                    This is the work section
                </Paragraph>
                <h3>Bio</h3>
                <Bio>this is the buio</Bio>
           </header>
        </>
    )
}
