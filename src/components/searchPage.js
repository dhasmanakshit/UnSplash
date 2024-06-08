import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Photos from './photos';
import { api_access_key, api_main } from '../utils/constants';
import Header from './header';
import LoadingGif from './loadingGif';
import { appendSearchedPhotos, setSearchedPhotos } from '../utils/photosSlice';

const SearchPage = () => {
    const params = useParams();
    const dispatch = useDispatch()
    const [showLoading, setShowLoading] = useState(false)
    const [atPage, setAtPage] = useState(1)
    const searchedPhotos = useSelector((store) => store.photosSlice.searchedPhotos)   // subscribing to redux - AllPhotos
    // useFetchFromQuery(params.query)

    const noOfColumns = useSelector((store) => store.settingSlice.noOfColumns)

    const FetchFromQuery = async () => {
        // to refresh
        dispatch(setSearchedPhotos([]))
        setAtPage(1)

        var lol = []
        for (var i = 0; i < noOfColumns; i++) {
            const res = await fetch(api_main + "/search/photos?" + api_access_key + "&query=" + params.query + "&page=" + (((atPage - 1) * noOfColumns + 1) + i));
            const json = await res.json()
            lol[i] = (json.results)
        }
        // console.log(lol)
        dispatch(setSearchedPhotos(lol))

        console.log(searchedPhotos)
    }
    const FetchMoreFromQuery = async () => {
        setShowLoading(true)
        // to refresh
        // setSearchedPhotos([])

        var lol = []
        for (var i = 0; i < noOfColumns; i++) {
            const res = await fetch(api_main + "/search/photos?" + api_access_key + "&query=" + params.query + "&page=" + (((atPage - 1) * noOfColumns + 1) + i));
            const json = await res.json()
            lol[i] = (json.results)
        }
        // console.log(lol)
        dispatch(appendSearchedPhotos(lol))

        console.log(searchedPhotos)
        setShowLoading(false)
    }

    // on change of url it will execute fetch fuction
    // url will change if user searches from input box in header
    useEffect(() => { FetchFromQuery() }, [params])
    useEffect(() => { FetchMoreFromQuery() }, [atPage])

    // infinite scroll increment 'atpage'
    const [totalPosts, setTotalPosts] = useState(50);
    const [visible, setVisible] = useState(0);
    const handleOnScroll = () => {
        if (
            window.scrollY + window.innerHeight >=
            document.documentElement.scrollHeight
        ) {
            // if (atpage < 10)
            console.log("end of search page")
            setAtPage((prev) => prev + 1)
        }
    };
    useEffect(() => {
        visible < totalPosts && totalPosts > 0
            ? window.addEventListener("scroll", handleOnScroll)
            : window.removeEventListener("scroll", handleOnScroll);
        return () => {
            window.removeEventListener("scroll", handleOnScroll);
        };
    }, [visible]);
    // infinite scroll code ends

    return (
        <div className='search_page'>
            <Header />
            <Photos data={searchedPhotos} />
            {
                showLoading === true ? <LoadingGif /> : ''
            }
        </div>
    )
}

export default SearchPage