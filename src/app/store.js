import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import characterReducer from '../features/field/box/characterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    character: characterReducer,
  },
})
