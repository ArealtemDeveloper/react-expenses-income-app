import React from 'react';
import './App.css';
import { Balance } from './components/Balance';
import { TransactionList } from './components/TransactionList';
import { Header } from './components/Header';
import { IncomeExpense } from './components/IncomeExpense';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
        <Header/>
        <div className="container">
          <Balance/>
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction/>
        </div>
    </GlobalProvider>
  );
}

export default App;
