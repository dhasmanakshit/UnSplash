import React from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
    const navigate = useNavigate()
    function searchQuery(e) {
        // if the key pressed is ENTER key
        if (e.keyCode === 13)
            if (e.target.value.trim() !== '')
                navigate('/search/' + e.target.value)
    }
    return (
        <div>
            <input type='text' className='w-10/12 border rounded-3xl px-4 py-1 h-10'
                onKeyDown={searchQuery} placeholder='Search..' autoComplete='on'
            />
        </div>
    )
}

export default SearchBox