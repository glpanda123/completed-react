import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList(props) {
  const expenseList = props.filteredExpense.map((expense) => <ExpenseItem className='App-link' key={expense.id} expenseItem={expense}></ExpenseItem>);
  if (expenseList.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>;
  }
  return <ul className='expenses-list'>{expenseList}</ul>;
}

export default ExpensesList;
