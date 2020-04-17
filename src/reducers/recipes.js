const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case "UPLOAD-RECIPE":
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default recipesReducer;
