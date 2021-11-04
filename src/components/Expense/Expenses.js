import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className='expenses'>
      <ExpenseItem className='App-link' expenseItem={props.expenses[0]}></ExpenseItem>
      <ExpenseItem className='App-link' expenseItem={props.expenses[1]}></ExpenseItem>
      <ExpenseItem className='App-link' expenseItem={props.expenses[2]}></ExpenseItem>
      <ExpenseItem className='App-link' expenseItem={props.expenses[3]}></ExpenseItem>
    </Card>
  );
}

export default Expenses;
