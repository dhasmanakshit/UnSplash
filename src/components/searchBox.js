import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedPhotos } from '../utils/photosSlice'

const SearchBox = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function searchQuery(e) {
        // if the key pressed is ENTER key
        if (e.keyCode === 13)
            if (e.target.value.trim() !== '') {
                console.log('reseting searches')
                // dispatch(setSearchedPhotos([]))
                navigate('/search/' + e.target.value)
            }
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