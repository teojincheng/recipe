import counterReducer from "./counter";
import arrayReducer from "./array";
import inputReducer from "./input";
import recipesReducer from "./recipes";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  array: arrayReducer,
  inputValue: inputReducer,
  recipes: recipesReducer,
});

export default allReducers;
