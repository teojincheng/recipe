import React from "react";
import { useSelector, useDispatch } from "react-redux";

function RecipeList() {
  let arrOfRecipes = useSelector((state) => state.recipes);
  const arrOfElements = arrOfRecipes.map((recipe) => (
    <p key={recipe._id}>{recipe.name}</p>
  ));
  return (
    <div>
      <h2>Recipes</h2>
      {arrOfElements}
    </div>
  );
}

export default RecipeList;
