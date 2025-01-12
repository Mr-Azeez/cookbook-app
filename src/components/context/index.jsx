import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [recipe, setRecipeList] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [searchParameter, setSearchParameter] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [nutritionData, setNutritionData] = useState([]);
  const [detailedSteps, setDetailedSteps] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const [checkFavorite, setCheckFavorite] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  async function fetchRandomRecipe() {
    try {
      const apiKey = "4d7c682e693448de9a7b5a9092177bff";
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=20&apiKey=${apiKey}`
      );
      const data = await response.json();
      setRecipeList(data.recipes);
      // console.log(data.recipes)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchRandomRecipe();
  }, []);


  return (
    <GlobalContext.Provider
      value={{
        recipe,
        searchParameter,
        setSearchParameter,
        recipeIngredients,
        setRecipeIngredients,
        nutritionData,
        setNutritionData,
        detailedSteps,
        setDetailedSteps,
        searchResult,
        setSearchResult,
        favoriteList,
        setFavoriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
