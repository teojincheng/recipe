import React, { useState, useEffect } from "react";
import AxiosInstance from "./AxiosInstance";
import { useSelector } from "react-redux";

function RecipeItem(props) {
  const recipeId = props.match.params.recipeId;

  const [recipeObj, setRecipeObj] = useState({
    recipe: {},
  });

  useEffect(() => {
    AxiosInstance.get(`/recipes/${recipeId}`).then((response) => {
      setRecipeObj({
        ...recipeObj,
        recipe: response.data,
      });
    });
  });

  return (
    <div className="wrapper">
      <h2>{recipeObj.recipe.name}</h2>

      <div>{recipeObj.recipe.description}</div>

      <div>{recipeObj.recipe.cookingTime}</div>

      <div>{recipeObj.recipe.ingredients}</div>

      <div>{recipeObj.recipe.cookingMethod}</div>

      <button>Save to favourites</button>
    </div>
  );
}

export default RecipeItem;
