import React from 'react'
import { useParams } from 'react-router-dom'
import SearchBox from './searchBox'
import ButtonBack from './buttonBack'
import ButtonHome from './buttonHome'
import IconUser from './iconUser'
import IconLogo from './iconLogo'

const Header = () => {
    const params = useParams()
    const param_len = Object.keys(params).length

    return (
        <div className='h-[100px] flex items-center justify-between mx-10'>
            <div className='left w-2/12'>
                {
                    // if home page or not (checking from url)
                    param_len === 0
                        ? <IconLogo />
                        : <div className='flex items-center'>
                            <ButtonBack />
                            <ButtonHome />
                        </div>
                }
            </div>

            <div className='mid w-6/12 mx-auto'>
                <SearchBox />
            </div>

            <div className='right flex flex-row-reverse w-1/12 cursor-pointer relative' >
                <IconUser />
            </div>
        </div>
    )
}

export default Header