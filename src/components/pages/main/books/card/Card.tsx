import React from 'react'
import './style.css'

interface props {
    image: any
    title: string
}

const Card: React.FC<props> = ({image, title}) => {

    return (
        <div className='card_div'>
            <img src={image} />
            <h1>{title}</h1>
        </div>
    )
}

export default Card