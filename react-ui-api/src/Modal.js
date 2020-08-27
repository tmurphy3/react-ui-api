import React, { useState, useEffect } from 'react'
import './Modal.css';
import ModalItem from './ModalItem'

const Modal = () => {
    const [state, setState] = useState([])

    let arrayOfElements = []

    useEffect(() => {
        for (let j = 11; j < 13; j++) {
            let month = j.toString()
            if (month.length === 1) {
                month = "0" + month
                console.log(month)
            }
            for (let i = 25; i < 30; i++) {
                let day = i.toString()
                if (day.length === 1) {
                    day = "0" + day
                }
                //interpolate days and months into url
                let choiceURL = `https://api.nasa.gov/planetary/apod?api_key=oKwdbMT2N85wHNYQKRlSpik1Ek8aSgQHfwv8IY0J&date=2019-${month}-${day}`
                fetch(choiceURL)
                .then(res => res.json())
                .then(res => {
                    console.log(res.title)
                    arrayOfElements.push(res)
                })
            }
        }
    })
    return (
        <div class="modalContainer">
            {arrayOfElements.map(element => {
                return (
                    <div>
                        <div>{element.title}</div>
                    </div>
                )
            })}
            <ModalItem />
            <ModalItem />
            <ModalItem />
            <ModalItem />
            <ModalItem />
            <ModalItem />
            <ModalItem />
            <ModalItem />
            <ModalItem />
            <ModalItem />
        </div>
    )
}

export default Modal;