import React, { useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    const {AddTransaction} = useContext(GlobalContext)
    const Sumbit = (e) => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            amount: +amount,
            text,
        }

        AddTransaction(newTransaction)
        setText("")
        setAmount("")
    }

    

  return (
    <div>
        <h3>Добавить новую транзакцию</h3>
      <form onSubmit={Sumbit}>
        <div className="form-control">
          <label htmlFor="text">Текст</label>
          <input type="text" placeholder="Впишите текст..." value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Сумма <br />
            (отрицательное - расходы, позитивное - доходы)</label
          >
          <input type="number" placeholder="Введите сумму..." value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="btn">Добавить транзакцию</button>
      </form>
    </div>
  )
}
