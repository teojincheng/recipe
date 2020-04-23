import React, { useState, useEffect } from "react";
import AxiosInstance from "./AxiosInstance";
import { useSelector, useDispatch } from "react-redux";

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

  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <h2>{recipeObj.recipe.name}</h2>
      <br />
      <div>Description:</div>
      <div>{recipeObj.recipe.description}</div>
      <br />
      <div>Cooking Time:</div>
      <div>{recipeObj.recipe.cookingTime}</div>
      <br />
      <div>Ingredients:</div>
      <div>{recipeObj.recipe.ingredients}</div>
      <br />
      <div>Cooking Method:</div>
      <div>{recipeObj.recipe.cookingMethod}</div>

      <button
        onClick={() =>
          AxiosInstance.post("/saved-recipes", {
            recipeId: recipeObj.recipe._id,
          }).then(function () {
            dispatch({ type: "SAVE-RECIPE", payload: recipeObj.recipe._id });
          })
        }
      >
        Save to favourites
      </button>
    </div>
  );
}

export default RecipeItem;
