import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Photos from './photos';
import { api_access_key, api_main } from '../utils/constants';
import Header from './header';

const SearchPage = () => {
    const params = useParams();
    // useFetchFromQuery(params.query)
    const [searchedPhotos, setSearchedPhotos] = useState([])

    const noOfColumns = useSelector((store) => store.settingSlice.noOfColumns)

    const FetchFromQuery = async () => {
        // to refrfesh
        setSearchedPhotos([])

        var lol = []
        for (var i = 0; i < noOfColumns; i++) {
            const res = await fetch(api_main + "/search/photos?" + api_access_key + "&query=" + params.query + "&page=" + (i + 1));
            const json = await res.json()
            // console.log(json)
            lol[i] = (json.results)
        }
        setSearchedPhotos(lol)
        console.log(searchedPhotos)
    }

    // on change of url it will execute fetch fuction
    // url will change if user searches from input box in header
    useEffect(() => { FetchFromQuery() }, [params])

    return (
        <div className=''>
            <Header />
            {
                searchedPhotos
                    ?
                    <Photos data={searchedPhotos} />
                    :
                    <h1 className='mt-10 pr-32 text-center text-3xl font-thin '>No Photos found</h1>
            }
        </div>
    )
}

export default SearchPage