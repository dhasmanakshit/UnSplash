import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedPhotos } from "../utils/photosSlice";
import { api_access_key, api_main } from "../utils/constants";

const useFetchFromQuery = ({ query }) => {
    const noOfColumns = useSelector((store) => store.settingSlice.noOfColumns)
    const dispatch = useDispatch();

    const FetchFromQuery = async () => {
        var lol = [];

        for (var i = 0; i < noOfColumns; i++) {
            const res = await fetch(api_main + "/search/photos?" + api_access_key + "&query=" + query + "&page=" + (i + 1));
            const json = await res.json()
            // console.log(json)
            lol[i] = (json.results)
        }

        dispatch(setSearchedPhotos(lol))
        console.log(lol)
    }
    useEffect(() => {
        FetchFromQuery();
    }, [query]);
}

export default useFetchFromQuery