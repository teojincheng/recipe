import React, { useState } from "react";
import "./RecipeForm.css";
import { useSelector, useDispatch } from "react-redux";

function RecipeForm() {
  const [recipeObj, setRecipeObj] = useState({
    name: "",
    description: "",
    cookingTime: "",
    ingredients: "",
    cookingMethod: "",
  });

  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <div>
        <label>Recipe name:</label>
      </div>
      <div>
        <input
          type="text"
          name="name"
          onChange={(event) =>
            setRecipeObj({
              ...recipeObj,
              [event.target.name]: event.target.value,
            })
          }
          value={recipeObj.name}
        />
      </div>

      <div>
        <label>Recipe description:</label>
      </div>
      <div>
        <textarea
          rows="5"
          cols="30"
          name="description"
          onChange={(event) =>
            setRecipeObj({
              ...recipeObj,
              [event.target.name]: event.target.value,
            })
          }
        ></textarea>
      </div>

      <div>
        <label>Cooking time:</label>
      </div>
      <div>
        <input
          type="text"
          name="cookingTime"
          onChange={(event) =>
            setRecipeObj({
              ...recipeObj,
              [event.target.name]: event.target.value,
            })
          }
          value={recipeObj.cookingTime}
        />
      </div>

      <div>
        <label>Ingredients:</label>
      </div>
      <div>
        <textarea
          rows="5"
          cols="30"
          name="ingredients"
          onChange={(event) =>
            setRecipeObj({
              ...recipeObj,
              [event.target.name]: event.target.value,
            })
          }
        ></textarea>
      </div>

      <div>
        <label>Cooking method:</label>
      </div>
      <div>
        <input
          type="text"
          name="cookingMethod"
          onChange={(event) =>
            setRecipeObj({
              ...recipeObj,
              [event.target.name]: event.target.value,
            })
          }
          value={recipeObj.cookingMethod}
        />
      </div>
      <button
        onClick={() => dispatch({ type: "UPLOAD-RECIPE", payload: recipeObj })}
      >
        Upload
      </button>
    </div>
  );
}

export default RecipeForm;
