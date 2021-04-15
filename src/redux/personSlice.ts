import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
    name: 'person',
    initialState: {
        user: {
            name: 'xiaomo',
            age: 18
        }
    },
    reducers: {
        changeUser(state, action) {

        },

    }
})
export default personSlice.reducer;
export const {changeUser} = personSlice.actions;
