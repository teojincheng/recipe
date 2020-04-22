import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import AxiosInstance from "./AxiosInstance";

function RecipeList() {
  const [recipesObj, setRecipesObj] = useState({
    recipesData: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [resultFromDB, setResult] = useState({ results: [] });
  const [queryURL, setQueryURL] = useState("/recipes");
  useEffect(() => {
    AxiosInstance.get(queryURL).then((response) => {
      setRecipesObj({
        ...recipesObj,
        recipesData: response.data,
      });
    });
  }, [queryURL]);

  const arrOfElements = recipesObj.recipesData.map((recipe) => (
    <div key={recipe._id}>
      <NavLink key={recipe._id} to={`/${recipe._id}`}>
        {recipe.name}
      </NavLink>
    </div>
  ));
  return (
    <div>
      <h2>Recipes</h2>
      <input
        name="search"
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button onClick={() => setQueryURL(`/recipes?searchTerm=${searchQuery}`)}>
        Search
      </button>
      {arrOfElements}
    </div>
  );
}

export default RecipeList;
