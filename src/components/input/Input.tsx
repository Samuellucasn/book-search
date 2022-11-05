import React from 'react'
import './style.css'

interface props {
    type: string
    placeholder: string
    onChange: (e: any) => void
    onKeyDown: (e: any) => void
}

const Input : React.FC<props> = ({type, placeholder, onChange, onKeyDown }) => {
    return (
        <input type={type} placeholder={placeholder} onChange={onChange} onKeyDown={(e) => onKeyDown(e)}/>
    )
}
export default Input