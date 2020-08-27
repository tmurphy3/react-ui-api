import React, { useState, useEffect } from 'react'
import './Modal.css';
import ModalItem from './ModalItem'
import ModalViewItem from './ModalViewItem'

const Modal = () => {
    const [nasaList, setNasaList] = useState([])

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
                    let newNasaListItem = res
                    setNasaList(oldNasaList => [...oldNasaList, newNasaListItem])
                })
            }
        }
    }, [])
    
    const showModal = () => {
        console.log("hi")
    }

    const hideModal = () => {
        console.log("bye")
    }

    return (
        <div>
            <div className="modalContainer">
                {nasaList.map((element, i) => {
                    return (
                        <div onClick={showModal}>
                            <ModalItem key={i} background={element.url} date={element.date}/>
                        </div>
                    )
                })}
            </div>
            <div className="pic and words">
                {nasaList.map((element, i) => {
                    return (
                        <div onClick={hideModal}>
                            <ModalViewItem key={i} date={element.date}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Modal;


/*
import React, { useState, useEffect } from 'react'
import './Modal.css';
import ModalItem from './ModalItem'

const Modal = () => {
    const [state, setState] = useState([])

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
                    let newValue = res.title
                    setState(oldArray => [...oldArray, newValue])

                })
            }
        }
    }, [])
    return (
        <div class="modalContainer">
            <div>{console.log(state)}</div>
            <ModalItem name={res.title}/>
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
*/