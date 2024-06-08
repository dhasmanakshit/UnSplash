import { createSlice } from "@reduxjs/toolkit";

const PhotosSlice = createSlice(
    {
        name: "photosStore",
        initialState: {
            "allPhotos": [],
            "clickedPhoto": {},
            "searchedPhotos": [],
        },
        reducers: {
            setAllPhotos: (state, action) => {
                state.allPhotos = action.payload
            },
            appendAllPhotos: (state, action) => {
                var index = 0;
                var lol = []
                var arr = Array.from(action.payload)
                // console.log(typeof (arr), arr)
                state.allPhotos.map((e) => {
                    // console.log(arr[index])
                    e = [...Array.from(e), ...arr[index]]
                    console.log(e)
                    lol[index++] = e
                })
                state.allPhotos = lol
                console.log('updated json', state.allPhotos)
            },
            setClickedPhoto: (state, action) => {
                state.clickedPhoto = action.payload
            },
            setSearchedPhotos: (state, action) => {
                state.searchedPhotos = action.payload
            },
            appendSearchedPhotos: (state, action) => {
                // state.searchedPhotos = action.payload
                var index = 0;
                var lol = []
                var arr = Array.from(action.payload)
                console.log(typeof (arr), arr)
                state.searchedPhotos.map((e) => {
                    // console.log(arr[index])
                    e = [...Array.from(e), ...arr[index]]
                    console.log(e)
                    lol[index++] = e
                })
                console.log(lol)
                state.searchedPhotos = lol
                console.log('updated json', state.searchedPhotos)
            },
        }
    }
)

export const { setAllPhotos, appendAllPhotos, setClickedPhoto, setSearchedPhotos, appendSearchedPhotos } = PhotosSlice.actions;
export default PhotosSlice.reducer;