import { configureStore } from '@reduxjs/toolkit'
import photosSlice from './photosSlice'
import userSlice from './userSlice'
import settingSlice from './settingSlice'

const appStore = configureStore({
    reducer: {
        photosSlice: photosSlice,
        settingSlice: settingSlice,
        userSlice: userSlice
    }
})

export default appStore