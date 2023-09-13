import Article from '@/components/Article'
import Header from '@/components/Header'
import Section from '@/components/Section'
import Paragraph from '@/components/Paragraph'
import Button from '@/components/Button'
import Bio from '@/components/Bio'

export default function Home() {
    return (
        <Article>
            <div className="flex justify-center">
                hero image
            </div>
            <Header />
            <div>
                <Section>Work</Section>
                <Paragraph>
                    This is the paragraph where I talk about myself, work experience, and projects. textfillertextfillertextfillertextfillertextfillertextfillertextfillertextfiller
                </Paragraph>
                <Button>Portfolio</Button>
            </div>
            <div>
                <Section>Bio</Section>
                <Bio year="1997">Born in Boston, Massachusetts</Bio>
                <Bio year="2020">Graduated from University of Massachusetts, Amherst
                    with a Bachelor's degree in Mathematics (concentration in Statistics)</Bio>
                <Bio year="2021 to present">Working at Harbor Compliance</Bio>
            </div>
            <div>
                <Section>Interest</Section>
                <Paragraph>
                    Gaming, Music, Playing Guitar, Tinkering
                </Paragraph>
            </div>
        </Article>
    )
}
