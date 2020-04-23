import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./RecipeList.css";
import AxiosInstance from "./AxiosInstance";

function RecipeList() {
  const [recipesObj, setRecipesObj] = useState({
    recipesData: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [queryURL, setQueryURL] = useState("/recipes");
  const changeQueryUrl = (sortOption) => {
    setQueryURL(`/recipes?sortType=${sortOption}`);
  };
  useEffect(() => {
    setIsLoading(true);
    AxiosInstance.get(queryURL).then((response) => {
      setRecipesObj({
        ...recipesObj,
        recipesData: response.data,
      });
      setIsLoading(false);
    });
  }, [queryURL]);

  const arrOfElements = recipesObj.recipesData.map((recipe) => (
    <div key={recipe._id}>
      <NavLink key={recipe._id} to={`/${recipe._id}`}>
        <p className="body-text">{recipe.name}</p>
      </NavLink>
    </div>
  ));
  return (
    <div>
      <h2>Recipes</h2>
      {isLoading ? <p className="middle-of-page">Loading recipes...</p> : ""}
      <input
        name="search"
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button onClick={() => setQueryURL(`/recipes?searchTerm=${searchQuery}`)}>
        Search
      </button>

      <select
        id="sort-option"
        onChange={(event) => changeQueryUrl(event.target.value)}
      >
        <option value="recent">Most recent</option>
        <option value="oldest">Oldest</option>
        <option value="name-descend">Name descending</option>
        <option value="name-ascend">Name ascending</option>
      </select>
      {arrOfElements}
    </div>
  );
}

export default RecipeList;
