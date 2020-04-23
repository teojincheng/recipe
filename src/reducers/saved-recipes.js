const savedRecipesReducer = (state = [], action) => {
  let savedRecipeObj = {};
  switch (action.type) {
    case "SAVE-RECIPE":
      savedRecipeObj.recipeId = action.payload;
      return state.concat(savedRecipeObj);

    case "SET-SAVED-RECIPES":
      return (state = action.payload);
    default:
      return state;
  }
};

export default savedRecipesReducer;
