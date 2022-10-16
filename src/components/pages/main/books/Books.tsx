import React from 'react'
import './style.css'

import { FaRegTimesCircle } from "react-icons/fa";

import Button from '../../../button/Button'
import Card from './card/Card'

const Books : React.FC = () => {
    return (
        <div className='books_div'>
            <div className='top_book_div'>
                <img src="/src/assets/Book-Cat.jfif" />
                <Button><FaRegTimesCircle></FaRegTimesCircle></Button>
            </div>
            <Card></Card>
        </div>
    )
}

export default Books