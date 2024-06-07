import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { api_access_key, api_main } from '../utils/constants';
import ShareBtn from './shareBtn';
import Header from './header';

const DetailImage = () => {
    const [isLiked, setIsLiked] = useState(false)
    const params = useParams();
    const navigate = useNavigate()

    const [clickedPhoto, setClickedPhoto] = useState()

    // const clickedPhoto = useSelector((store) => store.photosSlice.clickedPhoto)
    const fetchDetails = async () => {
        const res = await fetch(api_main + "/photos/" + params.id + "?" + api_access_key);
        const json = await res.json()
        setClickedPhoto(json)
        console.log(json)
    }
    useEffect(() => { fetchDetails() }, [])

    const flipLiked = () => {
        setIsLiked(!isLiked)
    }


    const tagClicked = (e) => {
        console.log(e.target.innerHTML)
        navigate('/search/' + e.target.innerHTML)
    }
    return (
        <div className=''>
            <Header />

            <div className='flex px-10'>
                <img className="w-1/2 rounded-lg" src={clickedPhoto?.urls.regular} />

                <div className='right_text px-5'>

                    <h1 className='text-2xl'>{clickedPhoto?.alt_description}</h1>

                    <div className='button_row my-10 flex gap-2 justify-end relative items-center'>
                        <h1 className='text-red-500 font-semibold'>{isLiked ? clickedPhoto?.likes + 1 : clickedPhoto?.likes}</h1>
                        <button onClick={flipLiked}
                            className={isLiked === true ? 'bg-red-600 text-white border py-1 px-2 rounded-lg' : 'border py-1 px-2 rounded-lg '}
                        >Like</button>
                        <ShareBtn />
                    </div>

                    <div className='mt-40'>
                        <h1 className='text-xl font-bold mb-2'>Tags</h1>
                        {
                            clickedPhoto?.tags.map((e) => {
                                return (
                                    e.type === 'search' ?
                                        <span className='mr-2 cursor-pointer bg-black bg-opacity-40 px-2 py-1 rounded-md text-white hover:bg-opacity-80' onClick={tagClicked} >
                                            {e.title}
                                        </span>
                                        : ''
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DetailImage