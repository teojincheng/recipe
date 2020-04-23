import React, { useState, useEffect } from "react";
import AxiosInstance from "./AxiosInstance";
import { useDispatch } from "react-redux";
import "./RecipeItem.css";

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
    <section className="wrapper">
      <h2>{recipeObj.recipe.name}</h2>
      <br />
      <div>Description:</div>
      <div>
        <p className="body-text">{recipeObj.recipe.description}</p>
      </div>
      <br />
      <div>Cooking Time:</div>
      <div>{recipeObj.recipe.cookingTime}</div>
      <br />
      <div>Ingredients:</div>
      <div>
        <p className="body-text">{recipeObj.recipe.ingredients}</p>
      </div>
      <br />
      <div>Cooking Method:</div>
      <div>
        <p className="body-text">{recipeObj.recipe.cookingMethod}</p>
      </div>

      <button
        onClick={() =>
          AxiosInstance.post("/saved-recipes", {
            recipeId: recipeObj.recipe._id,
          }).then(function () {
            dispatch({ type: "SAVE-RECIPE", payload: recipeObj.recipe._id });
            alert("Saved to favourites");
          })
        }
      >
        Save to favourites
      </button>
    </section>
  );
}

export default RecipeItem;
