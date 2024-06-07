import React, { useState } from 'react'

const ShareBtn = () => {
    const [showShareMenu, setShowShareMenu] = useState(false)

    const shareBtnCliked = () => {
        setShowShareMenu(!showShareMenu)
    }
    return (
        <div>
            <button className='border py-1 px-2 rounded-lg hover:bg-gray-300 '
                onClick={shareBtnCliked}>Share</button>
            <ul className={showShareMenu ? "block absolute top-10  text-white rounded-lg overflow-hidden cursor-pointer" : 'hidden'} >
                <li className='py-1 px-2 bg-black bg-opacity-40 hover:bg-opacity-80'>whatsapp</li>
                <li className='py-1 px-2 bg-black bg-opacity-40 hover:bg-opacity-80'>facebook</li>
                <li className='py-1 px-2 bg-black bg-opacity-40 hover:bg-opacity-80'>gmail</li>
            </ul>
        </div>
    )
}

export default ShareBtn