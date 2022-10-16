import React from 'react'
import './style.css'

interface props {
    children?: React.ReactNode
}

const Button : React.FC<props> = ({children}) => {
    return (
        <button>{children}</button>
    )
}

export default Button