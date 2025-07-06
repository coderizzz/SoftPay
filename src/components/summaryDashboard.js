import React from 'react';

export default function SummaryDashboard({ transactions }) {
  const total = transactions.reduce((sum, txn) => sum + txn.amount, 0);

  const categoryTotals = {};
  transactions.forEach((txn) => {
    if (!txn.category) return;
    if (!categoryTotals[txn.category]) categoryTotals[txn.category] = 0;
    categoryTotals[txn.category] += txn.amount;
  });

  const topCategory = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])[0]?.[0] || "N/A";

  const latestTxn = transactions[transactions.length - 1];

  return (
    <div className="summary-dashboard">
      <div className="summary-card">
        <p className="summary-label">Total Expenses</p>
        <p className="summary-value">₹{total.toLocaleString()}</p>
      </div>

      <div className="summary-card">
        <p className="summary-label">Top Category</p>
        <p className="summary-value">{topCategory}</p>
      </div>

      <div className="summary-card">
        <p className="summary-label">Latest Transaction</p>
        <p className="summary-value">{latestTxn ? latestTxn.description : "N/A"}</p>
      </div>
    </div>
  );
}
