import React from 'react'
import './search-box.css'

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <div className="search-box">
            <input 
                type="search"
                placeholder="Search Monster"
                onChange={handleChange}
            />
        </div>
    )
}
