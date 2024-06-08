import { useDispatch, useSelector } from "react-redux";
import { api_access_key, api_main } from "../utils/constants";
import { useEffect } from "react";

import { setAllPhotos } from "../utils/photosSlice";

const useFetchAllPhotos = () => {
    const noOfColumns = useSelector((store) => store.settingSlice.noOfColumns)
    const dispatch = useDispatch();

    const fetchAllPhotos = async () => {
        var lol = [];

        for (var i = 0; i < noOfColumns; i++) {
            const res = await fetch(api_main + "/photos?" + api_access_key + "&page=" + (i + 1));
            const json = await res.json()
            // console.log(typeof (json), json)
            lol[i] = (json)
        }

        dispatch(setAllPhotos(lol))
        // console.log(lol)
    }
    useEffect(() => {
        fetchAllPhotos();
    }, []);
}
export default useFetchAllPhotos;