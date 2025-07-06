import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

export default function MonthlyBarChart({ transactions }) {
  const monthlyTotals = Array(12).fill(0);
  //console.log("MonthlyBarChart mounted");
  //console.log("transactions:", transactions);


  transactions.forEach(txn => {
    const month = new Date(txn.date).getMonth(); 
    monthlyTotals[month] += txn.amount;
  });

  const data = monthlyTotals.map((amt, i) => ({
    name: new Date(0, i).toLocaleString('default', { month: 'short' }),
    total: amt,
  }));

  return (
    <div className="bar-chart-container">
      <span className="bar-header">Monthly Expenses</span>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#f5e0e8" />
          <YAxis stroke="#f5e0e8" />
          <Tooltip />
          <Bar dataKey="total" fill="#df9ec4" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
