// Table for displaying budget entry information (e.g. expenses, income, totals etc.)

import React from 'react';
import styles from './BudgetTable.module.css';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

function BudgetTable({ items, deleteItem }) {
  const expenses = items.filter(item => item.type === 'expense');
  const incomes = items.filter(item => item.type === 'income');

  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const totalIncome = incomes.reduce((sum, item) => sum + item.amount, 0);

  const expenseRatio = totalIncome > 0 ? (totalExpenses / totalIncome) * 100 : 0;

  // helper to render a table
  const renderTable = (title, data) => (
    <div className={styles.tableWrapper}>
      <h2>{title}</h2>
      <table className={styles.tableContainer}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>Description</th>
            <th>Amount ($)</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={styles.tableRow}>
              <td>{item.description}</td>
              <td>{currencyFormatter.format(item.amount)}</td>
              <td>
                <button
                  className={styles.deleteButton}
                  onClick={() => deleteItem(items.indexOf(item))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr className={styles.totalRow}>
            <td>Total</td>
            <td>{currencyFormatter.format(
            data.reduce((sum, item) => sum + item.amount, 0)
            )}
</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.tablesRow}>
        {renderTable('Expenses', expenses)}
        {renderTable('Income', incomes)}
      </div>
      <div className={styles.ratioContainer}>
        <h3>Expense-to-Income Ratio:</h3>
        <p>{expenseRatio.toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default BudgetTable;