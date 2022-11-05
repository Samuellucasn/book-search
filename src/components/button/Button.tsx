import React from 'react'
import './style.css'

interface props {
    children?: React.ReactNode
    onClick: () => void
}

const Button : React.FC<props> = ({children, onClick}) => {
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default Button