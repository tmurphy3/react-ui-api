import React from 'react'
import './ModalItem.css'

const ModalItem = ({title, explanation, background}) => {
    return (
        <div>
            <div class="modalItem" style={{
                background: `url(${background})`
            }}>
                <div class="title">{title}</div>
                <div class="explanation">{explanation}</div>
            </div>
        </div>
    )
}

export default ModalItem