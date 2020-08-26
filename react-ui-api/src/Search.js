import React from 'react'
import './Search.css';

const Search = () => {
    return (
        <div class="filterContainer">
            <div class="filter">
                <form>
                    <input type="text" class="input" placeholder="YYYY-MM-DD" />
                    <button class="searchButton">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search;