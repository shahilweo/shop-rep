import { createSlice } from '@reduxjs/toolkit'
import schema from '../../../../../../../Container/schema'

const componentSchema = schema.components

export const CommonReducer = createSlice({
    name: 'data',
    initialState: {
        ...componentSchema
    },
    reducers: {
        dataValue: (state, action) => {
            return { ...state, ...action.payload }
        }
    },
})
export const { dataValue } = CommonReducer.actions
export default CommonReducer.reducer
