import React from "react";
import "./IngredientList.css";

const IngredientList = ({ ingredients, deleteHandler }) => {
  return (
    <div>
      {ingredients.length > 0 && (
        <section className="ingredient-list">
          <h2>Loaded Ingredients</h2>
          <ul>
            {ingredients.map((ig) => (
              <li key={ig.id} onClick={() => deleteHandler(ig.id)}>
                <span>{ig.title}</span>
                <span>{ig.amount}x</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default IngredientList;
