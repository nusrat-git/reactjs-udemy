import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const titleHandler = () => {
    setTitle("Title Updated");
  };
  return (
    <li>
      <div className="expense-item">
        <div>
          <ExpenseDate date={props.date}></ExpenseDate>
        </div>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <h4 className="expense-item__price">${props.amount}</h4>
        </div>
        <button onClick={titleHandler}>Change Title</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
