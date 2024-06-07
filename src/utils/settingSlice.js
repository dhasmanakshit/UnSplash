import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice(
    {
        name: "settingStore",
        initialState: {
            'noOfColumns': 5
        },
        reducers: {
            setNoOfColumns: (state, action) => {
                state.noOfColumns = action.payload
            }
        }
    }
)

export const { setNoOfColumns } = settingSlice.actions
export default settingSlice.reducer