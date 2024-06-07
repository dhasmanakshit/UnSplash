import React from 'react'
import { useDispatch } from 'react-redux'
import { setNoOfColumns } from '../utils/settingSlice'
import { useNavigate } from 'react-router-dom'


const UIsettings = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const changeNoOfColsInRedux = () => {
        console.log(document.getElementById('noOfCols').value)
        dispatch(setNoOfColumns(document.getElementById('noOfCols').value))

        navigate("/");
    }
    return (
        <div className='absolute bg-black bg-opacity-70 z-10 p-5 rounded-lg right-0'>
            <input type='text' id='noOfCols' className='w-100 h-10 border' />
            <button className='bg-red-600 text-white' onClick={changeNoOfColsInRedux}>Change</button>
        </div>
    )
}

export default UIsettings