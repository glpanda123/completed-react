import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [initView, setInitView] = useState(true);

  const onSaveExpenseData = (expenseData) => {
    const updatedExpenseData = {
      id: Math.random().toString(),
      ...expenseData,
    };
    props.addExpenseData(updatedExpenseData);
  };

  const onOpenForm = () => {
    setInitView(false);
  };
  const onCloseForm = (value) => {
    console.log(value);
    setInitView(value);
  };
  if (initView) {
    return (
      <div className='new-expense'>
        <button onClick={onOpenForm}>Add New Expenses</button>
      </div>
    );
  }

  return (
    <div className='new-expense'>
      <ExpenseForm saveExpenseData={onSaveExpenseData} closeForm={onCloseForm}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
