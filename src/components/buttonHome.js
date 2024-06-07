import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonHome = () => {
    const navigate = useNavigate()
    const gotoHomePage = () => {
        navigate('/')
    }
    return (
        <img src='../home_icon.png' onClick={gotoHomePage}
            className='w-8 h-8 mr-5 hover:cursor-pointer' alt='Home' />
    )
}

export default ButtonHome