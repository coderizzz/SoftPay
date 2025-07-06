import React, { useState,useEffect } from 'react';

export default function TransactionForm({ addTransaction,editTxn, setEditTxn, updateTransaction }) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editTxn) {
      setAmount(editTxn.amount);
      setDate(editTxn.date);
      setDescription(editTxn.description);
    }
  }, [editTxn]);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!amount || !date || !description) return;

  const txnData = {
    id: editTxn ? editTxn.id : Date.now(),
    amount: parseFloat(amount),
    date,
    description,
    category,
  };

  if (editTxn) {
    updateTransaction(txnData);
  } else {
    addTransaction(txnData);
  }

  setAmount('');
  setDate('');
  setDescription('');
};


  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <header className="transaction-Head">Transactions</header>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select
        className="form-input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="Groceries">Groceries</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Bills">Bills</option>
      </select>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="form-button">{editTxn ? 'Update' : 'Add'}</button>

    </form>
  );
}
