import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expenseItem.title);
  function clickHandler() {
    setTitle('Updated');
  }
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.expenseItem.date}></ExpenseDate>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{props.expenseItem.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
