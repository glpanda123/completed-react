import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const onSaveExpenseData = (expenseData) => {
    const updatedExpenseData = {
      id: Math.random().toString(),
      ...expenseData,
    };
    props.addExpenseData(updatedExpenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm saveExpenseData={onSaveExpenseData}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
