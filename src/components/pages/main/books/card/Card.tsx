import React from 'react'
import './style.css'

interface props {
    image: any
    title: string
    onClick: () => void
}

const Card: React.FC<props> = ({image, title, onClick}) => {
    title = title.charAt(0) + title.substring(1).toLowerCase()

    return (
        <div className='card_div' onClick={onClick}>
            <img src={image} alt="capa do livro"/>
            <h1>{title}</h1>
        </div>
    )
}

export default Card