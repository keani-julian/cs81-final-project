import React, { useState, useEffect } from 'react';
import BudgetForm from './components/BudgetForm';
import BudgetTable from './components/BudgetTable';

function App() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('budgetItems');
    return saved ? JSON.parse(saved) : [];
  });

  // NTS: Load from localStorage on first render & Save to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('budgetItems', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => {
    setItems(prev => [...prev, item]);
  };

  const deleteItem = (indexToDelete) => {
    setItems(prev =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Personal Budget Tracker</h1>
      <BudgetForm addItem={addItem} />
      <BudgetTable items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;