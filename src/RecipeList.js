import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import AxiosInstance from "./AxiosInstance";

function RecipeList() {
  const [recipesObj, setRecipesObj] = useState({
    recipesData: [],
  });
  useEffect(() => {
    AxiosInstance.get("/recipes").then((response) => {
      setRecipesObj({
        ...recipesObj,
        recipesData: response.data,
      });
    });
  });

  const arrOfElements = recipesObj.recipesData.map((recipe) => (
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
