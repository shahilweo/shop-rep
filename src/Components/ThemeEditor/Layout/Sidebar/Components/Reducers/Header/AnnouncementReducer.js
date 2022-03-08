import { createSlice } from '@reduxjs/toolkit'
import schema from '../../../../../../../Container/schema'

// const headerData = schema.components.header.settings.announcement

export const AnnouncementReducer = createSlice({
    name: 'announcement',
    initialState: {
        // show: headerData.show,
        // text: headerData.text,
        // link: headerData.link,
        // bar_color: headerData.bar_color,
        // text_color: headerData.text_color
    },
    reducers: {
        announcement: (state, action) => {
            return { ...state, ...action.payload }
        }
    },
})
export const { announcement } = AnnouncementReducer.actions
export default AnnouncementReducer.reducer
