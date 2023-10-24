import { useDispatch, useSelector } from 'react-redux'
import classes from './Counter.module.css'
import { counterActions } from '../store/store'

const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const showCounter = useSelector((state) => state.showCounter)
  const dispatch = useDispatch()

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  const handleCounterUp = () => {
    dispatch(counterActions.increment())
  }

  const handleCounterDown = () => {
    dispatch(counterActions.decrement())
  }

  const handle10CounterUp = () => {
    dispatch(counterActions.amountIncrement(10))
  }

  const handle10CounterDown = () => {
    dispatch(counterActions.amountDecrement(10))
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
