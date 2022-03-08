import { createSlice } from '@reduxjs/toolkit'

export const HeaderReducer = createSlice({
    name: 'logo',
    initialState: {
        value: 'left',
        width: 100,
        image: "https://www.psd2html5.co/img/logo-light.svg"
    },
    reducers: {
        alignment: (state, action) => {
            state.value = action.payload
        },
        logoWidth: (state, action)=>{
            state.width = action.payload
        },
        logoImage: (state, action)=>{
            state.image = action.payload
        }
    },
})

export const { alignment, logoWidth, logoImage } = HeaderReducer.actions

export default HeaderReducer.reducer
