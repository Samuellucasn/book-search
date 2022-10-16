import React from 'react'
import './style.css'

interface props {
    type: string
    placeholder: string
    value?: string
}

const Input : React.FC<props> = ({type, placeholder, value }) => {
    return (
        <input type={type} placeholder={placeholder} value={value}/>
    )
}
export default Input