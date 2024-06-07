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
            setClickedPhoto: (state, action) => {
                state.clickedPhoto = action.payload
            },
            setSearchedPhotos: (state, action) => {
                state.searchedPhotos = action.payload
            },
        }
    }
)

export const { setAllPhotos, setClickedPhoto, setSearchedPhotos } = PhotosSlice.actions;
export default PhotosSlice.reducer;