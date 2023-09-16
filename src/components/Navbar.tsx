export default function Navbar() {
    return (
        <nav className="max-w-2xl mx-auto p-4">
            <div className="flex justify-between">
                <div className="hover:underline underline-offset-4">
                    Justin Gee
                </div>
                <div>
                    <ul className="flex text-left gap-8">
                        <li>
                            <a className="hover:underline underline-offset-4" href="#">Works</a>
                        </li>
                        <li>
                            <a className="hover:underline underline-offset-4" href="#">Source</a>
                        </li>
                        <li>
                            <a className="hover:underline underline-offset-4" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="flex text-right">
                    darkmode
                </div>
            </div>
        </nav>
    )
}

