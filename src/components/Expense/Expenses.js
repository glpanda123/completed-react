import { useState } from 'react/cjs/react.development';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const [year, setYear] = useState('2021');

  const selectYearHandler = (selectedYear) => setYear(selectedYear);
  return (
    <div>
      <ExpenseFilter onSelectYear={selectYearHandler} year={year}></ExpenseFilter>
      <Card className='expenses'>
        <ExpenseItem className='App-link' expenseItem={props.expenses[0]}></ExpenseItem>
        <ExpenseItem className='App-link' expenseItem={props.expenses[1]}></ExpenseItem>
        <ExpenseItem className='App-link' expenseItem={props.expenses[2]}></ExpenseItem>
        <ExpenseItem className='App-link' expenseItem={props.expenses[3]}></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
