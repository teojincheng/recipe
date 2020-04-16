import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { inputText } from "./actions";

function RecipeForm() {
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
          name="recipe-name"
          onChange={(event) =>
            dispatch({ type: "INPUT-TEXT", payload: event.target.value })
          }
          value={inputValue}
          id="recipe-name"
        />
      </div>

      <div>
        <label>Recipe description:</label>
      </div>
      <div>
        <textarea></textarea>
      </div>

      <div>
        <label>Cooking time:</label>
      </div>
      <div>
        <input type="text" name="cooking-time" />
      </div>

      <div>
        <label>Ingredients:</label>
      </div>
      <div>
        <textarea></textarea>
      </div>

      <div>
        <label>Cooking method:</label>
      </div>
      <div>
        <input type="text" name="method" />
      </div>
      <button>Upload</button>
    </div>
  );
}

export default RecipeForm;
