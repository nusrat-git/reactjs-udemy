import React, { useState } from "react";
import "./IngredientForm.css";

const IngredientForm = ({ addIngredientHandler }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addIngredientHandler({ title: enteredTitle, amount: enteredAmount });
  };

  return (
    <div>
      <section className="ingredient-form">
        <form onSubmit={submitHandler}>
          <div className="ingredient-form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={(e) => setEnteredTitle(e.target.value)}
            />
          </div>
          <div className="ingredient-form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={(e) => setEnteredAmount(e.target.value)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default IngredientForm;
