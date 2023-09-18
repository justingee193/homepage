import Section from './Section'
import Paragraph from './Paragraph'

export default function Footer() {
    return (
        <footer className="max-w-prose mx-auto">
            <div>
                <Section>
                    Contact
                </Section>
                <ul>
                    <li className="p-2">
                        <a href="https://github.com/justingee193" target="_blank">
                            <button className="hover:bg-blue-500 rounded-md duration-150 px-4 py-2">
                                @ Github
                            </button>
                        </a>
                    </li>
                    <li className="p-2">
                        <a href="https://www.linkedin.com/in/justin-gee/" target="_blank">
                            <button className="hover:bg-blue-500 rounded-md duration-150 px-4 py-2">
                                @ Justin Gee
                            </button>
                        </a>
                    </li>
                    <li className="p-2">
                        <a href="" target="_blank">
                            <button className="hover:bg-blue-500 rounded-md duration-150 px-4 py-2">
                                @ justing33193@gmail.com
                            </button>
                        </a>
                    </li>
                </ul>
                <div className="flex justify-center text-gray-600">
                    Copyright @ 2023 Justin Gee
                </div>
            </div>
        </footer>
    )
}
