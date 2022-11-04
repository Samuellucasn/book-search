import React from 'react'
import './style.css'

interface props {
    children?: React.ReactNode
    onClick: (e: any) => void
}

const Button : React.FC<props> = ({children, onClick}) => {
    return (
        <button onClick={(e) => onClick(e)}>{children}</button>
    )
}

export default Button