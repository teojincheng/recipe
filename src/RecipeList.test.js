import React from "react";
import RecipeList from "./RecipeList";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const mockStore = configureStore([]);

describe(RecipeList, () => {
  let store = mockStore({ recipes: [] });
  it("The title 'Recipes' should be visible when <RecipeList> is rendered", () => {
    const { getByText } = render(
      <Provider store={store}>
        <RecipeList />
      </Provider>
    );
    const recipeListComponent = getByText("Recipes");
    expect(recipeListComponent).toBeInTheDocument();
  });
});
