import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  events: [
    {
      name: 'fff',
      desc: 'eee',
    },
  ],
}

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    createEvent(state, action) {},
  },
})

export const { createEvent } = eventSlice.actions
export default eventSlice.reducer
