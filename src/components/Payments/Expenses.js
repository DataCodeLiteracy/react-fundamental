import React from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          name={item.name}
          price={item.price}
          date={item.date}
          phone={item.phone}
        />
      ))}
    </Card>
  )
}

export default Expenses
