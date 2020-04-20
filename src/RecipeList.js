import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

function RecipeList() {
  let arrOfRecipes = useSelector((state) => state.recipes);
  const arrOfElements = arrOfRecipes.map((recipe) => (
    <div key={recipe._id}>
      <NavLink key={recipe._id} to={`/${recipe._id}`}>
        {recipe.name}
      </NavLink>
    </div>
  ));
  return (
    <div>
      <h2>Recipes</h2>
      {arrOfElements}
    </div>
  );
}

export default RecipeList;
