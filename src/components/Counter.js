import { useDispatch, useSelector } from 'react-redux'
import classes from './Counter.module.css'

const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const showCounter = useSelector((state) => state.showCounter)
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' })
  }

  const handleCounterUp = () => {
    dispatch({ type: 'INCREMENT' })
  }

  const handleCounterDown = () => {
    dispatch({ type: 'DECREMENT' })
  }

  const handle10CounterUp = () => {
    dispatch({ type: 'AMOUNT_INCREMENT', amount: 10 })
  }

  const handle10CounterDown = () => {
    dispatch({ type: 'AMOUNT_DECREMENT', amount: 10 })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={toggleCounterHandler}>토글 카운터</button>
      <button onClick={handleCounterUp}>숫자 증가</button>
      <button onClick={handle10CounterUp}>숫자 10 증가</button>
      <button onClick={handleCounterDown}>숫자 감소</button>
      <button onClick={handle10CounterDown}>숫자 10 감소</button>
    </main>
  )
}

export default Counter
