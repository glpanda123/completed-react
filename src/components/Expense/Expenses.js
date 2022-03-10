import { useState } from 'react/cjs/react.development';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [year, setYear] = useState('2021');

  const selectYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  const filteredExpense = props.expenses.filter((element) => element.date.getFullYear() === +year);
  let expensesContent = filteredExpense.length === 0 ? <p>No expenses found.</p> : <ExpensesList filteredExpense={filteredExpense}></ExpensesList>;

  return (
    <div>
      <ExpenseFilter onSelectYear={selectYearHandler} year={year}></ExpenseFilter>
      <Card className='expenses'>{expensesContent}</Card>
    </div>
  );
}

export default Expenses;
