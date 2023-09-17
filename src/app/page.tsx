import Article from '@/components/Article'
import Section from '@/components/Section'
import Header from '@/components/Header'
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
            <div className="w-fit">
                <Section>Work</Section>
                <Paragraph>
                    This is the paragraph where I talk about myself, work experience, and projects. there is alot that needs to be added. 
                    this is for filler so that I can check how the window resizing effects this element. Once this is done, i dont need to work on this any more.
                </Paragraph>
                <Button>Portfolio</Button>
            </div>
            <div className="w-fit">
                <Section>Bio</Section>
                <Bio year="1997">Born in Boston, Massachusetts</Bio>
                <Bio year="2020">Graduated from University of Massachusetts, Amherst
                    with a Bachelor's degree in Mathematics</Bio>
                <Bio year="2021 to present">Working at Harbor Compliance</Bio>
            </div>
            <div className="w-fit">
                <Section>Interest</Section>
                <Paragraph>
                    Gaming, Music, Playing Guitar, Tinkering
                </Paragraph>
            </div>
        </Article>
    )
}
