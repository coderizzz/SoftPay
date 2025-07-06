//import logo from './logo.svg';
import React from 'react'
import { useState } from 'react';
import './App.css';
import Header from './components/header.js'
import TransactionForm from './components/transactionform.js';
import TransactionList from './components/transactionlist.js';
import MonthlyBarChart from './components/MonthlyBarChart.js';
import CategoryPieChart from './components/pieChart.js';
import SummaryDashboard from './components/summaryDashboard.js';
export default function App(){
  const [transactions, setTransactions] = useState([
 /* SAMPLE DATA otherwise, its just an empty list to take transactions value..
  { id: 1, amount: 3000, date: '2025-01-10', description: 'Spotify', category: 'Entertainment' },
  { id: 2, amount: 1500, date: '2025-02-14', description: 'Netflix', category: 'Entertainment' },
  { id: 3, amount: 4000, date: '2025-01-21', description: 'Zomato', category: 'Food'},*/
  ]);
  const total = transactions.reduce((sum, txn) => sum + txn.amount, 0);


  const addTransaction = (txn) => {
  setTransactions([...transactions, txn]);
};
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((txn) => txn.id !== id));
};
  const [editTxn, setEditTxn] = useState(null);
  const updateTransaction = (updatedTxn) => {
  setTransactions(prevData =>
    prevData.map(txn => (txn.id === updatedTxn.id ? updatedTxn : txn))
  );
  setEditTxn(null); 
};


  return (
    <div className="App">
      <Header />
      <main className="dashboard">
        <div className="left-column">
          <section className="card total-expense-card">
           <p className="card-title">Total Expenses</p>
           <p className="card-amount">${total}</p>
          </section>
          <TransactionForm 
            addTransaction={addTransaction} 
            editTxn={editTxn}
            setEditTxn={setEditTxn}
            updateTransaction={updateTransaction}
          />
          <TransactionList 
            transactions={transactions}
            onDelete={deleteTransaction} 
            onEdit={setEditTxn}
          />
        </div>
        <div className="right-column">
          <section className="bar-chart-card">
            <MonthlyBarChart transactions={transactions} />
            <CategoryPieChart transactions={transactions} />
            <SummaryDashboard transactions={transactions} />
          </section>
        </div>
      </main>
    </div>
  )
}
