import React from "react";
import RecipeForm from "./RecipeForm";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe(RecipeForm, () => {
  let store = mockStore({});
  it("The title 'Post a recipe' should be visible when <RecipeForm> is rendered", () => {
    const { getByText } = render(
      <Provider store={store}>
        <RecipeForm />
      </Provider>
    );
    const recipeFormComponent = getByText("Post a recipe");
    expect(recipeFormComponent).toBeInTheDocument();
  });
});
