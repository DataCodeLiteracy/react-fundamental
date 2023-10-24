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

const initialAuthState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true
    },
    logout(state) {
      state.isAuthenticated = false
    }
  }
})

const counterStore = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default counterStore
