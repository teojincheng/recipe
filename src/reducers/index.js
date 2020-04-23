import savedRecipesReducer from "./saved-recipes";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  savedRecipes: savedRecipesReducer,
});

export default allReducers;
