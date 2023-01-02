import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ addExpense }) => {
  const [openForm, setOpenForm] = useState(false);

  const formHandler = () => {
    setOpenForm(true);
  };

  const closeHandler = () => {
    setOpenForm(false);
  };

  const saveFormData = (data) => {
    const formData = {
      ...data,
      id: Math.random().toString(),
    };
    console.log(formData);
  };

  return (
    <div>
      <div className="new-expense">
        <button onClick={formHandler}>Add new expense</button>
      </div>
      {openForm === true && (
        <div className="new-expense">
          <ExpenseForm
            saveFormData={saveFormData}
            addExpense={addExpense}
            closeHandler={closeHandler}
          ></ExpenseForm>
        </div>
      )}
    </div>
  );
};

export default NewExpense;
