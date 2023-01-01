import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [updatedInfo, setUpdatedInfo] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const updateTitle = (e) => {
    setUpdatedInfo({
      ...updatedInfo,
      title: e.target.value,
    });
  };
  const updateAmount = (e) => {
    setUpdatedInfo({
      ...updatedInfo,
      amount: e.target.value,
    });
  };
  const updateDate = (e) => {
    setUpdatedInfo({
      ...updatedInfo,
      date: e.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.saveFormData(updatedInfo);
  };

  return (
    <div>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={(e) => updateTitle(e)} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={(e) => updateAmount(e)}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              step="2022-12-31"
              onChange={(e) => updateDate(e)}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={submitHandler}>Add expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
