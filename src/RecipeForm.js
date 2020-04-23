import React, { useState } from "react";
import "./RecipeForm.css";
import AxiosInstance from "./AxiosInstance";
import { useSelector, useDispatch } from "react-redux";

function RecipeForm() {
  const [recipeObj, setRecipeObj] = useState({
    name: "",
    description: "",
    cookingTime: "",
    ingredients: "",
    cookingMethod: "",
    timeUnit: "",
  });

  const isRecipeObjEmpty = (obj) => {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] != "") return false;
    }
    return true;
  };
  const handleButtonOnClick = () => {
    let recipeObjectIsEmpty = isRecipeObjEmpty(recipeObj);

    if (recipeObjectIsEmpty) {
      alert("Please fill in all fields");
      return;
    } else {
      AxiosInstance.post("/recipes", recipeObj).then(function () {
        alert("Recipe created");
      });
    }
  };
  return (
    <div className="wrapper">
      <h2>Post a recipe</h2>
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
          className="small-width"
          type="number"
          name="cookingTime"
          onChange={(event) =>
            setRecipeObj({
              ...recipeObj,
              [event.target.name]: event.target.value,
            })
          }
          value={recipeObj.cookingTime}
        />

        <input
          name="timeUnit"
          onChange={(event) =>
            setRecipeObj({
              ...recipeObj,
              [event.target.name]: event.target.value,
            })
          }
          className="small-width"
          list="cooking-time-units"
        />
        <datalist id="cooking-time-units">
          <option value="mins" />
          <option value="hrs" />
        </datalist>
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
        <textarea
          rows="5"
          cols="30"
          name="cookingMethod"
          onChange={(event) =>
            setRecipeObj({
              ...recipeObj,
              [event.target.name]: event.target.value,
            })
          }
        ></textarea>
      </div>
      <button onClick={() => handleButtonOnClick()}>Upload</button>
    </div>
  );
}

export default RecipeForm;
