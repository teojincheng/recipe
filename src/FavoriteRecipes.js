import React from "react";
import { useSelector } from "react-redux";

function FavoriteRecipes() {
  let arrOfFaves = useSelector((state) => state.savedRecipes);
  const arrOfElements = arrOfFaves.map((recipe) => (
    <div key={recipe.recipeId}>{recipe.recipeId}</div>
  ));
  return <div>{arrOfElements}</div>;
}

export default FavoriteRecipes;
