import React from 'react'
import './search.style.css'

export const Search = ({placeholder , handleChange}) => {
    return (
        <div className = 'search'>
            <input type='search' placeholder={placeholder} onChange={handleChange} />
        </div>
    )

}
