import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import SimpleFormInput from "./FormComponent/SimpleFormInput/SimpleFormInput";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpense = (newExpense) => {
    setExpenses([newExpense, ...expenses]);
  };

  return (
    <div>
      <NewExpense addExpense={addExpense}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
      <div className="app">
        <SimpleFormInput></SimpleFormInput>
      </div>
    </div>
  );
}

export default App;
