import React from 'react'
import './Search.css';

const Search = () => {
    return (
        <div className="filterContainer">
            <div className="filter">
                <form>
                    <input type="text" className="input" placeholder="YYYY-MM-DD" />
                    <button className="searchButton">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search;