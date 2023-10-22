import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'
import { useRef } from 'react'

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()
  const nameRef = useRef(null)

  const addUserHandler = (event) => {
    event.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: '유효하지 않은 입력값',
        message: '유효한 나이와 이름을 입력하세요 (비어 있지 않은 값).'
      })
      return
    }
    if (+enteredAge < 1) {
      setError({
        title: '유효하지 않은 나이',
        message: '유효한 나이 값을 입력하세요 (> 0).'
      })
      return
    }
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')

    nameRef.current.focus()
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {/* {error &&
        createPortal(
          <ErrorModal
            title={error ? error.title : ''} // error가 존재하면 title을 사용, 아니면 빈 문자열
            message={error ? error.message : ''}
            onConfirm={errorHandler}
          />,
          document.getElementById('error-modal-root')
        )} */}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">사용자명</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
            ref={nameRef}
          />
          <label htmlFor="age">나이</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">사용자 추가</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser
