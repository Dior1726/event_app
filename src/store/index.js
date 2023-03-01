import { configureStore } from '@reduxjs/toolkit'
import eventReducer from './reducers/events'

export const store = configureStore({
  reducer: {
    events: eventReducer,
  },
})
