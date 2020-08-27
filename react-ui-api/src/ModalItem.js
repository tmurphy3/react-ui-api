import React from 'react'
import './ModalItem.css'

const ModalItem = ({name}) => {
    return (
        <div>
            <div class="modalItem">{name}</div>
        </div>
    )
}

export default ModalItem