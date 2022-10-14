import React from 'react'
import './style.css'

import Input from '../../input/Input'
import Button from '../../button/Button'
import Books from './books/Books'

function Main() {
    return (
        <main>
            <div>
            <div className='title_div'>
                <h1>Book Search</h1>
                <p>Search for the next book you want to read in our extensive library</p>
            </div>
            <div className="search_div">
                <Input type={"text"} placeholder={""} value={""}></Input>
                <Button></Button>
            </div>
            </div>
            <Books></Books>
        </main>
    )
}

export default Main