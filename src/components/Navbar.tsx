export default function Navbar() {
    return (
        <nav className="grid grid-flow-col justify-stretch p-4">
            <div>
                Justin Gee
            </div>
            <div className="">
                <ul className="flex justify-start gap-4"> 
                    <li>
                        <a className="hover:text-gray-500" href="#">Works</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Source</a>
                    </li>

                </ul>
            </div>
            <div className="flex justify-end">
                darkmode
            </div>
        </nav>
    )
}

