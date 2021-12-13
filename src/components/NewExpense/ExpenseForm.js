import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [title, setTitle] = useState('new expense');
  const [amount, setAmount] = useState('1000');
  const [date, setDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });
  function titleChangeHandler(event) {
    // setUserInput((preState)=>{return {
    //   ...preState,
    //   title: event.target.value
    // }})
    setTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
    setAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
    setDate(event.target.value);
  }

  function submitHandler(event) {
    // prevent the event sent form value to server when click submit
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };
    props.saveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='1000' step='1000' value={amount} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='Date' min='2021-11-09' max='2051-12-31' value={date} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
