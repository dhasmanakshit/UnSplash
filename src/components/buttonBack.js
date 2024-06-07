import React from 'react'

const ButtonBack = () => {
    const gotoPrevPage = () => {
        window.history.back();
    }
    return (
        <img src='../back_icon.png' onClick={gotoPrevPage}
            className='w-10 mr-5 hover:cursor-pointer' alt='back' />
    )
}

export default ButtonBack