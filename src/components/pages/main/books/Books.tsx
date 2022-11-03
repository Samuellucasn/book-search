import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './style.css'

import { FaRegTimesCircle } from "react-icons/fa";

import Button from '../../../button/Button'
import Card from './card/Card'
import About from './about/About'

interface props {
    searchValue: string
}

const Books : React.FC<props> = ({searchValue}) => {
    const [card, setCard] = useState<any>([])
    const [renderAbout, setRenderAbout] = useState(false)
    const [item, setItem] = useState({})
    
    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+ searchValue +'&key=' + process.env.REACT_APP_BOOK_GOOGLE_API + '&maxResults=40')

        .then(res => {
            setCard(res.data.items)
            console.log(res.data.items)
        })
        .catch(erro => console.log(erro))
    }, [searchValue])


    return (
        <div className='books_div'>
            <div className='top_book_div'>
                <img src="/src/assets/library-image.jpg" alt='library'/>
                <Button><FaRegTimesCircle></FaRegTimesCircle></Button>
            </div>
            { !renderAbout &&
                card.map((value: any) => {
                    const image = value.volumeInfo.imageLinks && value.volumeInfo.imageLinks.thumbnail
                    const title = value.volumeInfo.title

                    return (
                        <Card image={image} title={title}
                        key={value.id} onClick={() => {setItem(value); setRenderAbout(true)}} ></Card>
                    )
                })
            }
            { renderAbout &&
            <About item={item} ></About>}
        </div>
    )
}

export default Books