import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = props => {
  const [year, setYear] = useState('2020');

  const yearFilterHandler = selectedYear => {
    setYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    expense => expense.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearFilter={yearFilterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
