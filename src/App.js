
import React,{useState} from 'react';
import InputExpense from './components/InputExpenses/InputExpenses';
import Expenses from './components/Expenses/Expenses';

const initalexpenses = [
  {
    id: 'e1',
    title: 'Shoes',
    amount: 2300,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'Myntra', 
    amount: 1650, 
    date: new Date(2021, 2, 25) 
  },
  {
    id: 'e3',
    title: 'Amazon',
    amount: 294.67,
    date: new Date(2022, 3, 28),
  },
  {
    id: 'e4',
    title: 'Lunch',
    amount: 1563,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'hotel booking',
    amount: 2700,
    date: new Date(2020, 12, 9),
  }
];

const App = () => {
 
  const[expenses,setExpenses]=useState(initalexpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <h1 className='HEADER'>EXPENSE TRACKER</h1>
      <InputExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;