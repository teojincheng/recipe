import React, { useEffect } from "react";
import "./App.css";
import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import RecipeItem from "./RecipeItem";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Routes from "./constants/routes";
import AxiosInstance from "./AxiosInstance";
import FavoriteRecipes from "./FavoriteRecipes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    AxiosInstance.get("/saved-recipes").then((response) => {
      dispatch({ type: "SET-SAVED-RECIPES", payload: response.data });
    });
  });
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to={Routes.list}>Recipes List</NavLink>
          <NavLink to={Routes.form}>Upload Recipe</NavLink>
          <NavLink to={Routes.favorites}>My favourite recipes</NavLink>
        </header>
        <Switch>
          <Route path={Routes.list} component={RecipeList} />
          <Route path={Routes.form} component={RecipeForm} />
          <Route path={Routes.favorites} component={FavoriteRecipes} />
          <Route path={Routes.recipeId} component={RecipeItem} />
          <Route exact from="/" component={RecipeForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
