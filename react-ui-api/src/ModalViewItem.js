import React from 'react'
import './ModalViewItem.css'

const ModalViewItem = ({title, explanation, date, background}) => {
    return (
        <div>
            <div className="modalViewItem" style={{
                background: `url(${background})`,
                backgroundSize: 'cover'
            }}>
                <div>
                    <div>{title}</div>
                    <div>{date}</div>
                    <div>{explanation}</div>
                </div>
            </div>
        </div>
    )
}

export default ModalViewItem;