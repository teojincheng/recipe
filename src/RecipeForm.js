import React, { useState } from "react";
import "./RecipeForm.css";
import AxiosInstance from "./AxiosInstance";

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

  const makeElementEmpty = (id) => {
    document.getElementById(id).value = "";
  };
  const handleButtonOnClick = () => {
    let recipeObjectIsEmpty = isRecipeObjEmpty(recipeObj);

    if (recipeObjectIsEmpty) {
      alert("Please fill in all fields");
      return;
    } else {
      recipeObj.cookingTime += ` ${recipeObj.timeUnit}`;
      AxiosInstance.post("/recipes", recipeObj).then(function () {
        alert("Recipe created");
        setRecipeObj({
          name: "",
          description: "",
          cookingTime: "",
          ingredients: "",
          cookingMethod: "",
          timeUnit: "",
        });
        makeElementEmpty("descr-textarea");
        makeElementEmpty("ingredient-textarea");
        makeElementEmpty("method-textarea");
        makeElementEmpty("time-unit-input");
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
          id="descr-textarea"
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
          id="time-unit-input"
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
          id="ingredient-textarea"
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
          id="method-textarea"
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
      <button aria-label="upload-button" onClick={() => handleButtonOnClick()}>
        Upload
      </button>
    </div>
  );
}

export default RecipeForm;
