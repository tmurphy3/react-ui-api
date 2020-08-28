import React, { useState, useEffect } from 'react'
import './ModalViewItem.css'

const ModalViewItem = ({ date }) => {
    const [title, setTitle] = useState('')
    const [explanation, setExplanation] = useState('')
    const [background, setBackground] = useState('')

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=oKwdbMT2N85wHNYQKRlSpik1Ek8aSgQHfwv8IY0J&date=${date}`)
        .then(res => res.json())
        .then(res => {
            setTitle(res.title)
            setExplanation(res.explanation)
            setBackground(res.url)
        })
    }, [date])

    return (
        <div className="modalViewItemContainer">
            <div className="modalViewItem" style={{
                background: `url(${background})`
            }}>
            </div>
            <div>
                <div className="title">{title}</div>
                <div>{date}</div>
                <div className="explanation">{explanation}</div>
            </div>
        </div>
    )
}

export default ModalViewItem;