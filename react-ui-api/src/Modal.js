import React, { useState, useEffect } from 'react'
import './Modal.css';
import ModalItem from './ModalItem'
import ModalViewItem from './ModalViewItem'

const Modal = () => {
    const [nasaList, setNasaList] = useState([])
    const [modal, setModal] =useState('')

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
    
    const changeModalDate = (newModalDate) => {
        setModal(newModalDate)
    }

    return (
        <div>
            <div className="modalContainer">
                {nasaList.map((element, i) => {
                    return (
                        <div key={i} onClick={ () => changeModalDate(element.date)}>
                            <ModalItem background={element.url} date={element.date}/>
                        </div>
                    )
                })}
            </div>
            <div className="picWords">
                <ModalViewItem date={modal} />
            </div>
        </div>
    )
}

export default Modal;