import React, { useRef, useState } from 'react'

import './PaymentForm.css'

const PaymentForm = (props) => {
  const [objectState, setObjectState] = useState({
    id: 0,
    name: '',
    price: 0,
    date: new Date().toISOString().split('T')[0],
    phone: ''
  })

  const [isSubmit, setIsSubmit] = useState(true)

  const nameRef = useRef(null)

  const inputHandler = (e) => {
    const { name, value } = e.target
    setIsSubmit(true)
    setObjectState((prevState) => ({ ...prevState, [name]: value }))
  }

  const buttonSubmitHandler = (event) => {
    event.preventDefault()

    props.getPaymentFormData(objectState)

    setObjectState({
      id: Math.random(),
      name: objectState.name,
      price: objectState.price,
      date: objectState.date,
      phone: objectState.phone
    })

    setIsSubmit(false)

    nameRef.current.focus()
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
              value={isSubmit ? objectState.name : ''}
              name="name"
              ref={nameRef}
            />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputHandler}
              value={isSubmit ? objectState.price : 0}
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
              value={
                isSubmit
                  ? objectState.date
                  : new Date().toISOString().split('T')[0]
              }
              name="date"
            />
          </div>
          <div className="new-payment__control">
            <label>전화번호</label>
            <input
              type="tel"
              onChange={inputHandler}
              value={isSubmit ? objectState.phone : ''}
              name="phone"
              placeholder="00*-000*-0000"
              pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}"
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
