import Paragraph from '@/components/Paragraph'
import Bio from '@/components/Bio'

export default function Home() {
    return (
        <div className="w-[75%] mx-auto">
            <div>
                <h3>Works</h3>
                <Paragraph>
                    This is a thing.
                </Paragraph>
            </div>
            <div>
                <h3 className="pb-4">Bio</h3>
                <Bio year="1997">Born in Boston, Massachusetts</Bio>
                <Bio year="2020">Graduated from University of Massachusetts, Amherst
                    with a Bachelor's degree in Mathematics (concentration in Statistics)</Bio>
                <Bio year="2021">Worked at Harbor Compliance</Bio>
            </div>
        </div>
    )
}
