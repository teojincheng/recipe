import AxiosInstance from "../AxiosInstance";
const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case "UPLOAD-RECIPE":
      AxiosInstance.post("/recipes", action.payload);
      return state.concat(action.payload);
    case "SET-RECIPES":
      return (state = action.payload);
    default:
      return state;
  }
};

export default recipesReducer;
