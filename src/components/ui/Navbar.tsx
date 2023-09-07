import { FC } from 'react'
import Button from './Button'

export default function Navbar() {
    return (
        <nav className="flex justify-between item-center">
            <div>
                image
            </div>
            <div className="">
                <ul className="flex items-center gap-[4vw]">
                    <li>
                        <a className="hover:text-gray-500" href="#">Works</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Source</a>
                    </li>
                </ul>
            </div>
        <Button />
        </nav>
    )
}

