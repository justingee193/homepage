import { FC } from 'react'

interface ButtonProps {}

const Button: FC<ButtonProps> = ({ name }) => {
    return <button>
           {name} 
        </button>
}

export default Button
