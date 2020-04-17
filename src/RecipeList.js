import React from "react";
import { useSelector, useDispatch } from "react-redux";

function RecipeList() {
  let arrOfRecipes = useSelector((state) => state.recipe);

  return <div>{arrOfRecipes}</div>;
}

export default RecipeList;
