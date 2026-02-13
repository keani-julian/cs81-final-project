// Form for inputting budget information (e.g. expenses, income, etc.)

import React, { useState } from 'react';
import styles from './BudgetForm.module.css';

function BudgetForm({ addItem }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense'); // expense or income

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) {
      alert('Please fill out all fields.');
      return;
    }
    addItem({ description, amount: parseFloat(amount), type });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.inputField}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className={styles.inputField}
      />
      <select value={type} onChange={(e) => setType(e.target.value)} className={styles.inputField}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button type="submit" className={styles.addButton}>Add</button>
    </form>
  );
}

export default BudgetForm;