import React from 'react'
import './style.css'

interface props {
    type: string
    placeholder: string
    onKeyDown: (e: any) => void
}

const Input : React.FC<props> = ({type, placeholder, onKeyDown }) => {
    return (
        <input type={type} placeholder={placeholder} onKeyDown={(e) => onKeyDown(e)}/>
    )
}
export default Input