import { createSlice } from '@reduxjs/toolkit'
import schema from '../../../../../../../Container/schema'

const headerData = schema.components.header.settings

export const HeaderReducer = createSlice({
    name: 'logo',
    initialState: {
        // value: headerData.logo.logo_alignment,
        // width: headerData.logo.logo_width,
        // image: headerData.logo.logo_image,
    },
    reducers: {
        logo: (state, action) => {
            return { ...state, ...action.payload }
        }
    },
})
export const { logo } = HeaderReducer.actions
export default HeaderReducer.reducer
