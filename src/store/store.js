import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    amountIncrement(state, action) {
      state.counter = state.counter + action.payload
    },
    amountDecrement(state, action) {
      state.counter = state.counter - action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
})

const counterStore = configureStore({
  reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions

export default counterStore
