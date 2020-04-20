import React, { useState } from "react";

import { useSelector } from "react-redux";

function RecipeItem(props) {
  const recipeId = props.match.params.recipeId;
  let arrOfRecipes = useSelector((state) => state.recipes);
  const correctRecipe = arrOfRecipes.find((recipe) => recipe._id === recipeId);
  return (
    <div className="wrapper">
      <h2>{correctRecipe.name}</h2>

      <div>{correctRecipe.description}</div>

      <div>{correctRecipe.cookingTime}</div>

      <div>{correctRecipe.ingredients}</div>

      <div>{correctRecipe.cookingMethod}</div>

      <button>Save to favourites</button>
    </div>
  );
}

export default RecipeItem;
