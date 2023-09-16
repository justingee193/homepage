import Section from './Section'
import Paragraph from './Paragraph'

export default function Footer() {
    return (
        <footer className="max-w-prose mx-auto">
            <Section>
                Contact
            </Section>
            <Paragraph>LinkedIn</Paragraph>
            <Paragraph>Github</Paragraph>
            <Paragraph>Email</Paragraph>
            <div className="flex justify-center text-gray-600">
                Copyright @ 2023 Justin Gee
            </div>
        </footer>
    )
}
