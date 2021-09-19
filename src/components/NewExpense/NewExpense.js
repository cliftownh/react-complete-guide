import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const [clicked, setClicked] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const clickHandler = () => {
    setClicked(prevClicked => !prevClicked);
  };

  return (
    <div className="new-expense">
      {clicked ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          isClicked={clickHandler}
        />
      ) : (
        <button onClick={clickHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
