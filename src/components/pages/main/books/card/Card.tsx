import React from 'react'

interface props {
    image?: string,
    title?: string
}

const Card: React.FC<props> = ({image, title}) => {
    return (
        <div className='card_div'>
            <img src="" alt="" />
            <h1>title</h1>
        </div>
    )
}

export default Card