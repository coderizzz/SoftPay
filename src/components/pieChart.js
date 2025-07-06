import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#e7b8d0', '#d88cb1', '#a85b7c', '#72344c', '#f5e0e8'];

export default function CategoryPieChart({ transactions }) {
  const categoryData = {};

  transactions.forEach(txn => {
    if (!txn.category) return;
    if (!categoryData[txn.category]) {
      categoryData[txn.category] = {
        value: 0,
        latestDate: txn.date,
      };
    }
    categoryData[txn.category].value += txn.amount;

    if (new Date(txn.date) > new Date(categoryData[txn.category].latestDate)) {
      categoryData[txn.category].latestDate = txn.date;
    }
  });

  const data = Object.entries(categoryData).map(([name, info]) => ({
    name,
    value: info.value,
    latestDate: info.latestDate,
  }));

  return (
    <div className="card category-card">
      <h3 className="card-title">Spending by category</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={40}
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
