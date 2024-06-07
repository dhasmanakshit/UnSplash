import React from 'react'
import { useNavigate } from 'react-router-dom';

const PhotoCard = ({ data }) => {
    const navigate = useNavigate();

    const boxClicked = async (e) => {
        const ph_id = e.target.getAttribute('photo_id')
        navigate('/image/' + ph_id)
    }

    return (
        <div className='box mb-6 relative rounded-lg group cursor-pointer overflow-hidden'
            onClick={boxClicked} >

            <div className='box_overlay absolute t-0 p-5 bg-black opacity-60 h-full w-full invisible group-hover:visible'
                photo_id={data.id}>
                <h1 className=' text-white' photo_id={data.id}> {data.alt_description}</h1>
            </div>

            <img src={data.urls.small_s3} className='w-full'></img>
        </div>
    )
}

export default PhotoCard