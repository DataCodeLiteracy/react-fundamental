import React, { useState } from 'react'

import './PaymentForm.css'

const PaymentForm = (props) => {
  const [objectState, setObjectState] = useState({
    name: '',
    price: 0,
    today: new Date().toISOString().split('T')[0]
  })

  const inputHandler = (e) => {
    const { name, value } = e.target
    setObjectState((prevState) => ({ ...prevState, [name]: value }))
  }

  const buttonSubmitHandler = (event) => {
    event.preventDefault()

    props.getPaymentFormData(objectState)

    setObjectState({
      name: objectState.name,
      price: objectState.price,
      today: objectState.today
    })
  }

  return (
    <div className="new-payment">
      <form onSubmit={buttonSubmitHandler}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            <label>이름</label>
            <input
              type="text"
              onChange={inputHandler}
              value={objectState.name}
              name="name"
            />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputHandler}
              value={objectState.price}
              name="price"
            />
          </div>
          <div className="new-payment__control">
            <label>날짜</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={inputHandler}
              value={objectState.today}
              name="today"
            />
          </div>
        </div>
        <div className="new-payment__actions">
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  )
}

export default PaymentForm
