import Article from '@/components/Article'
import Paragraph from '@/components/Paragraph'
import Bio from '@/components/Bio'

export default function Home() {
    return (
        <Article>
            <div className="flex justify-center">
                hero image
            </div>
            <div>
                <h2 className="text-2xl font-semibold underline decoration-4 underline-offset-4 underline-4 py-4">Works</h2>
                <Paragraph>
                    This is the paragraph where I talk about myself, work experience, and projects. textfillertextfillertextfillertextfillertextfillertextfillertextfillertextfiller
                </Paragraph>
            </div>
            <div>
                <h2 className="text-2xl font-semibold underline decoration-4 underline-offset-4 py-4">Bio</h2>
                <Bio year="1997">Born in Boston, Massachusetts</Bio>
                <Bio year="2020">Graduated from University of Massachusetts, Amherst
                    with a Bachelor's degree in Mathematics (concentration in Statistics)</Bio>
                <Bio year="2021">Worked at Harbor Compliance</Bio>
            </div>
        </Article>
    )
}
