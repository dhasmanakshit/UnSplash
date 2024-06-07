import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFetchAllPhotos from '../hooks/useFetchAllPhotos'
import { useNavigate } from 'react-router-dom'
import PhotoCard from './photoCard'

const Photos = ({ data }) => {


    return (
        <div className='flex gap-6 px-10'>
            {
                // no of vertical cols
                data?.map((e) =>
                    <div className='col flex-1'>
                        {
                            // cards in each vertical cols
                            e?.map((ee) => <PhotoCard data={ee} />)
                        }
                    </div>
                )
            }

        </div >
    )
}

export default Photos