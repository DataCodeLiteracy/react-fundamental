import './App.css'
import PaymentForm from './components/PaymentForm/PaymentForm'
import Expenses from './components/Payments/Expenses'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: '수건',
      amount: 12.33,
      date: new Date(2025, 8, 14)
    }
  ]

  const getPaymentFormData = (data) => {
    console.log(data)
  }

  return (
    <>
      <PaymentForm getPaymentFormData={getPaymentFormData} />
      <Expenses items={expenses} />
    </>
  )
}

export default App
