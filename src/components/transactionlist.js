import React from 'react';

export default function TransactionList({ transactions, onDelete, onEdit }) {
  if (transactions.length === 0) {
    return (
      <div className="transaction-list empty">
        <p className="empty-text">No transactions yet.</p>
      </div>
    );
  }

  return (
    <div className="transaction-list">
        <header className="list-header">Transactions Made :-(</header> 
      {transactions.map((txn) => (
        <div key={txn.id} className="transaction-item">
          <div className="txn-left">
            <p className="txn-desc">{txn.description}</p>
            <p className="txn-date">{txn.date}</p>
          </div>
          <p className="txn-amount">₹{txn.amount}</p>
          <div className="txn-right">
            <button
              className="delete-btn"
              onClick={() => onDelete(txn.id)}
              title="Delete Transaction"
            >
              ✕
            </button>
            <button className="edit-btn" onClick={() => onEdit(txn)}>✎</button>

          </div>
        </div>
      ))}
    </div>
  );
}
