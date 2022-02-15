import { useState } from 'react/cjs/react.development';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const [year, setYear] = useState('2021');

  const selectYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter((element) => element.date.getFullYear() === +year);
  return (
    <div>
      <ExpenseFilter onSelectYear={selectYearHandler} year={year}></ExpenseFilter>
      <Card className='expenses'>
        {filteredExpense.map((expense) => (
          <ExpenseItem className='App-link' key={expense.id} expenseItem={expense}></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
