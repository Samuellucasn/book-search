import React, {useState} from 'react'
import './style.css'

import { FaSistrix } from 'react-icons/fa';

import Input from '../../input/Input'
import Button from '../../button/Button'
import Books from './books/Books'

function Main() {
    const [inputValue, setInputValue] = useState<string>()

    return (
        <main>
            <div>
            <div className='title_div'>
                <h1>Book Search</h1>
                <p>Search for the next book you want to read in our extensive library</p>
            </div>
            <div className="search_div">
                <Input type={"text"} placeholder={"search here"}></Input>
                <Button><FaSistrix></FaSistrix></Button>
            </div>
            </div>
            <Books></Books>
        </main>
    )
}

export default Main