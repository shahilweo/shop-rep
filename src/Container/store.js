import { configureStore } from '@reduxjs/toolkit'
import alignmentreducer from "../Components/ThemeEditor/Layout/Sidebar/Components/Reducers/HeaderReducer";

export default configureStore({
  reducer: {
    alignment: alignmentreducer,
  },
})