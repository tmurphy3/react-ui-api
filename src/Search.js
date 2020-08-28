import React, { useState } from 'react'
import './Search.css';
import ModalViewItem from './ModalViewItem'

const Search = () => {
    const [value, setValue] = React.useState('');
    const [picDate, setPicDate] = useState('2020-02-02')
    const [hidden, setHidden] = useState('hidden')

    const handleSubmit = (e) => {
        if (value) {
            setPicDate(value);
        }
        e.preventDefault();
        setTimeout( () => {setHidden('visible')}, 200)
      };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const turnOffModal = () => {
        setHidden('hidden')
    }

    return (
        <>
        <div className="filter">
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" className="input" value={value} placeholder="YYYY-MM-DD" onChange={handleChange} />
                <button className="searchButton">Search</button>
            </form>
            <div id={hidden} className="picWords" onClick={ () => turnOffModal()}>
                <div className="picWordsHolder">
                    <ModalViewItem date={picDate} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Search;