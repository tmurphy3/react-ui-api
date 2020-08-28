import React from 'react'
import './ModalItem.css'

const ModalItem = ({ background }) => {
    return (
        <div>
            <div className="modalItem" style={{
                background: `url(${background})`,
                backgroundSize: 'cover'
            }}>
            </div>
        </div>
    )
}

export default ModalItem