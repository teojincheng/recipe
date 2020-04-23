# Recipe Front end   
Webpage hosted on https://unruffled-poitras-de1462.netlify.app/

## Use cases:

* Upload a new recipe: User keys in the details of recipe: name, description, cooking time....
* Search recipes: Users keys in a keyword and search.List of recipes is displayed. If a recipe name or ingredients in a recipe matches the keyword, the recipe will be inside the list.   
* Sort the list of recipes: Sort recipes by the date created. Sort recipes by their name. 
* View the details of one recipe: Click on one recipe in the list and a new page with the details is displayed. 
* [Incomplete] Add recipe to favourites: Each user can save a recipe into their favourites

## Packages used:

```
axios: version 0.19.2,  
react-redux: version 7.2.0,  
react-router-dom: version 5.1.2
```

## How to use: 

`git clone`  
`npm install`  

`npm start`  
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. PORT number may vary depending on if there are other processes running on other ports

## How to run test: 

`npm test`  
Launches the test runner in the interactive watch mode.

## Future work: 
* The favourite recipes should be listed out by name
* List of recipes can use pagination and infinite scroll

### Back end repo  
https://github.com/teojincheng/recipe-backend
