const arrayReducer = (state = [], action) => {
  switch (action.type) {
    case "INCREMENT":
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default arrayReducer;
