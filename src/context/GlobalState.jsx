import React, { createContext, useReducer} from 'react'
import { AppReducer } from './AppReducer'

const InitialState = {
    transactions: [
        {id:1, text: "Продукты", amount: -250},
        {id:2, text: "Бензин", amount: -1000},
        {id:3, text: "Зарплата", amount: 30000},
        {id:4, text: "Доп.доход", amount: 17000},
    ]
}


export const GlobalContext = createContext(InitialState)

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, InitialState)

    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        })
    }
    const AddTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        })
    }

    return (
        <GlobalContext.Provider value={{transactions: state.transactions,deleteTransaction,AddTransaction}}>
           {children}
        </GlobalContext.Provider>
    )
}