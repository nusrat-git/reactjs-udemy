import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  const saveFormData = (data) => {
    const formData = {
      ...data,
      id: Math.random().toString(),
    };
    console.log(formData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm saveFormData={saveFormData}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
