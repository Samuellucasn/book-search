import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './style.css'

import { FaRegTimesCircle } from "react-icons/fa";

import Button from '../../../button/Button'
import Card from './card/Card'

interface props {
    searchValue: string
}

const Books : React.FC<props> = ({searchValue}) => {
    const [card, setCard] = useState<any>([])

    useEffect(() => {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+ searchValue +'&key=AIzaSyCdFlyBE6_svB7UDH7wPnO_3flNUq_mW0U')

        .then(res => {
            setCard(res.data.items)
            console.log(res.data.items)
        })
        .catch(erro => console.log(erro))
    }, [searchValue])


    return (
        <div className='books_div'>
            <p>{searchValue}</p>
            <div className='top_book_div'>
                <img src="/src/assets/Book-Cat.jfif" />
                <Button><FaRegTimesCircle></FaRegTimesCircle></Button>
            </div>
            {
                card.map((value: any) => {
                    const image = value.volumeInfo.imageLinks.smallThumbnail
                    const title = value.volumeInfo.title

                    return (
                        <Card image={image} title={title}></Card>
                    )
                })
            }
        </div>
    )
}

export default Books