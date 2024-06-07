import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SearchBox from './searchBox'

const Header = () => {
    const navigate = useNavigate()
    const params = useParams()
    const param_len = Object.keys(params).length

    const visitUserPage = () => {
        navigate('/user')
    }
    const gotoHomePage = () => {
        navigate('/')
    }
    const gotoPrevPage = () => {
        window.history.back();
    }

    return (
        <div className='h-[100px] flex items-center justify-between mx-10'>
            <div className='left w-2/12'>
                {
                    param_len === 0
                        ?
                        <div className='icon flex items-center hover:cursor-pointer'
                            onClick={gotoHomePage} >
                            <img className="w-12 mr-5" src='./logo.png' />
                            <h1 className='font-bold text-2xl'>SnapSphere</h1>
                        </div>
                        :
                        <button onClick={gotoPrevPage} className='my-10'>◀ Back</button>
                }
            </div>

            <div className='mid w-6/12 mx-auto'>
                <SearchBox />
            </div>

            <div className='right flex flex-row-reverse w-1/12 cursor-pointer relative' >
                <img className="w-12" src='../usericon.png' onClick={visitUserPage} />
            </div>
        </div>
    )
}

export default Header