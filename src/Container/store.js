import { configureStore } from '@reduxjs/toolkit'
import commonReducer from "../Components/ThemeEditor/Layout/Sidebar/Components/Reducers/Header/CommonReducer";
// import alignmentreducer from "../Components/ThemeEditor/Layout/Sidebar/Components/Reducers/Header/LogoReducer";
// import announcementreducer from "../Components/ThemeEditor/Layout/Sidebar/Components/Reducers/Header/AnnouncementReducer";

export default configureStore({
  reducer: {
    dataValue: commonReducer,
    // announcement: announcementreducer,
  },
})