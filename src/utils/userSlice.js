import { createSlice } from "@reduxjs/toolkit";

const userSLice = createSlice(
    {
        name: "userStore",
        initialState: {
            'user': null
        },
        reducers: {
            setUser: (state, action) => {
                state.user = action.payload
            },
            resetUser: (state, action) => {
                state.user = null
            }
        }
    }

)

export const { setUser, resetUser } = userSLice.actions;
export default userSLice.reducer