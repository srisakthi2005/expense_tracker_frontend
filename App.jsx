import { useState,useEffect } from "react";
import './App.css';
import AddTransaction from './components/AddTransaction';
import ExpenseHistory  from'./components/ExpenseHistory';
import IncomeAndExpense from "./components/IncomeAndExpense";
import Balance from "./components/Balence"; 

const initial_value = [
  { id: 1, title: 'Cash', amount: 500 },
  { id: 2, title: 'Book', amount: -50 },
  { id: 3, title: 'Camera', amount: -150 },
];

function App() {
  const [list, setList] = useState(initial_value);
  useEffect(()=>{
    fetch("http://localhost:3000/api/expenses")
    .then(response => response.json())
    .then(data => setList(data));
  },[]);

  const onAdd = (transaction) => {
    const updatedList = [...list, transaction];
    setList(updatedList);
  };
  
  const onDelete=(id)=>{
    const updatedList= list.filter((eachTransaction) => eachTransaction.id !== id);
    setList(updatedList);
  }
  return (
    <div>
      <h1 className="heading">Expense Tracker</h1>
      <Balance list={list}/>
      <IncomeAndExpense list={list}/>
      <ExpenseHistory list={list} onDelete={onDelete}/>
      <AddTransaction onAdd={onAdd} />
    </div>
  );
}

export default App;

