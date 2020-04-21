import AxiosInstance from "../AxiosInstance";
const recipesReducer = (state = [], action) => {
  let recipeObj = {};
  switch (action.type) {
    case "UPLOAD-RECIPE":
      recipeObj.name = action.payload.name;
      recipeObj.description = action.payload.description;
      recipeObj.ingredients = action.payload.ingredients;
      recipeObj.cookingMethod = action.payload.cookingMethod;
      recipeObj.cookingTime =
        action.payload.cookingTime + action.payload.timeUnit;
      AxiosInstance.post("/recipes", recipeObj);
      return state;
    case "SET-RECIPES":
      return (state = action.payload);
    default:
      return state;
  }
};

export default recipesReducer;
