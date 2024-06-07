import React from 'react'
import { useNavigate } from 'react-router-dom'

const IconUser = () => {
    const navigate = useNavigate()
    const visitUserPage = () => {
        navigate('/user')
    }
    return (
        <img className="w-12" src='../usericon.png' onClick={visitUserPage} alt='user' />
    )
}

export default IconUser