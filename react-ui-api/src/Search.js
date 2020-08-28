import React, { useState } from 'react'
import './Search.css';
import ModalViewItem from './ModalViewItem'
import ReactDOM from 'react-dom';

const Search = () => {
    const [value, setValue] = React.useState('');
    const [picDate, setPicDate] = useState('2020-02-02')

    const handleSubmit = (e) => {
        if (value) {
            setPicDate(value);
        }
        e.preventDefault();
      };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className="filterContainer">
            <div className="filter">
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input" value={value} placeholder="YYYY-MM-DD" onChange={handleChange} />
                    <button className="searchButton">Search</button>
                </form>
                <div className="searchedPic">
                    <ModalViewItem date={picDate} />
                </div>
            </div>
        </div>
    )

    ReactDOM.render(<ModalViewItem date={picDate} />, document.getElementById('root'))
}

export default Search;