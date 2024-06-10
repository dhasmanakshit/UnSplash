import React from 'react'
import PhotoCard from './photoCard'

const Photos = ({ data }) => {
    return (
        data[0]?.length === 0
            ? <h1 className='mt-10 text-2xl font-thin text-center'>No image match</h1>
            : <div className='flex gap-6 px-10'>
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