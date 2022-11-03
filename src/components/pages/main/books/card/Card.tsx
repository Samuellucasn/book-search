import React from 'react'
import './style.css'

interface props {
    image: any
    title: string
    onClick: () => void
}

const Card: React.FC<props> = ({image, title, onClick}) => {

    return (
        <div className='card_div' onClick={onClick}>
            <img src={image} />
            <h1>{title}</h1>
        </div>
    )
}

export default Card