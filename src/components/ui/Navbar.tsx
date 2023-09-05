import { FC } from 'react'
import nav from '@/styles/navbar.module.css'

export default function Navbar() {     
    return (
            <div className={nav.navbar}>
                <div>
                    Justin Gee
                </div>
                <a>
                    Works
                </a>
                <a>
                    Source
                </a>
            </div>
    )
}
          
