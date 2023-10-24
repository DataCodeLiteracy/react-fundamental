import { createStore } from 'redux'

const initialState = { counter: 0, showCounter: true }

const counterReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }

  if (action.type === 'DECREMENT') {
    return {
      ...state,
      counter: state.counter - 1
    }
  }

  if (action.type === 'AMOUNT_INCREMENT') {
    return {
      ...state,
      counter: state.counter + action.amount
    }
  }

  if (action.type === 'AMOUNT_DECREMENT') {
    return {
      ...state,
      counter: state.counter - action.amount
    }
  }

  if (action.type === 'TOGGLE') {
    return {
      ...state,
      showCounter: !state.showCounter
    }
  }

  return state
}

const counterStore = createStore(counterReducer)

export default counterStore
