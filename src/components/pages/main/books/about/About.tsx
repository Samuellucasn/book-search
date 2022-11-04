import React from 'react'
import './style.css'

interface props {
    item: any
}

const About: React.FC<props> = ({item}) => {
    const title = item.volumeInfo.title
    const image = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
    const subtitle = item.volumeInfo.subtitle
    const publishedDate = item.volumeInfo.publishedDate
    const description = item.volumeInfo.description

    return (
        <div className='about_div'>
            <div className='header_about_div'>
                <img src={image.replace('zoom=1', 'zoom=3').replace('http', 'https')}/>
                <div className='container'>
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <p>{publishedDate}</p>
                </div>
            </div>
            <div className='description_div'>
                <p>{description}</p>
            </div>
        </div>
    )
} 

export default About