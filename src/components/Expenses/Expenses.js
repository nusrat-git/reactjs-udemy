import React, { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "../ExpneseList/ExpenseList";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState("2020");

  const filteredExpenses = expenses.filter(
    (filtered) => filtered.date.getFullYear().toString() === filterYear
  );

  return (
    <div className="expenses">
      <ExpenseFilter
        setFilterYear={setFilterYear}
        filterYear={filterYear}
      ></ExpenseFilter>
      <ExpenseList filteredExpenses={filteredExpenses}></ExpenseList>
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem> */}
    </div>
  );
};

export default Expenses;
