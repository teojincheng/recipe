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
  const inputValue = useSelector((state) => state.inputValue);
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
          onChange={() => setRecipeObj(recipeObj.description)}
        ></textarea>
      </div>

      <div>
        <label>Cooking time:</label>
      </div>
      <div>
        <input
          type="text"
          name="cooking-time"
          onChange={() => setRecipeObj(recipeObj.cookingTime)}
        />
      </div>

      <div>
        <label>Ingredients:</label>
      </div>
      <div>
        <textarea
          onChange={() => setRecipeObj(recipeObj.ingredients)}
        ></textarea>
      </div>

      <div>
        <label>Cooking method:</label>
      </div>
      <div>
        <input
          type="text"
          name="method"
          onChange={() => setRecipeObj(recipeObj.cookingMethod)}
        />
      </div>
      <button>Upload</button>
    </div>
  );
}

export default RecipeForm;
