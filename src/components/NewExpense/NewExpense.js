import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(params) {
  return (
    <div className='new-expense'>
      <ExpenseForm></ExpenseForm>
    </div>
  );
}

export default NewExpense;
