import { createSlice } from '@reduxjs/toolkit'

export const HeaderReducer = createSlice({
    name: 'alignment',
    initialState: {
        value: 'left',
    },
    reducers: {
        handleRadioChange: (state, action) => {
            console.log("state: ", state, "---action: ",action)
        },
    },
})

export const { handleRadioChange } = HeaderReducer.actions

export default HeaderReducer.reducer


