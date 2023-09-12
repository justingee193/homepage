export default function Navbar() {
    return (
        <nav className="grid grid-flow-col justify-stretch p-8 text-lg">
            <div className="hover:underline underline-offset-4">
                Justin Gee 
            </div>
            <div className="">
                <ul className="flex justify-start gap-8"> 
                    <li>
                        <a className="hover:underline underline-offset-4" href="#">Works</a>
                    </li>
                    <li>
                        <a className="hover:underline underline-offset-4" href="#">Github</a>
                    </li>
                    <li>
                        <a className="hover:underline underline-offset-4" href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-end">
                darkmode
            </div>
        </nav>
    )
}

