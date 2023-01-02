import React, { useState } from "react";
import IngredientForm from "../IngredientForm/IngredientForm";
import IngredientList from "../IngredientList/IngredientList";
import Search from "../Search/Search";

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const addIngredientHandler = (ingredient) => {
    setIngredients([
      { id: Math.random().toString(), ...ingredient },
      ...ingredients,
    ]);
  };

  const deleteHandler = (id) => {
    setIngredients(ingredients.filter((filtered) => filtered.id !== id));
  };

  return (
    <div>
      <IngredientForm
        addIngredientHandler={addIngredientHandler}
      ></IngredientForm>
      <section>
        <Search></Search>
        <IngredientList
          ingredients={ingredients}
          deleteHandler={deleteHandler}
        ></IngredientList>
      </section>
    </div>
  );
};

export default Ingredients;
