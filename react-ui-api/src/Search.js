import React from 'react'

const Search = () => {
    return (
        <div>
            <div class="filter">
                <form>
                    <input type="text" class="input" placeholder="YYYY-MM-DD" />
                    <button class="searchButton">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Search