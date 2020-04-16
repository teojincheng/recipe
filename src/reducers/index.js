import counterReducer from "./counter";
import arrayReducer from "./array";
import inputReducer from "./input";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  array: arrayReducer,
  inputValue: inputReducer,
});

export default allReducers;
