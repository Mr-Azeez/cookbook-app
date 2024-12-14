import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [recipe, setRecipeList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParameter, setSearchParameter] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const apiKey = "4d7c682e693448de9a7b5a9092177bff";
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchParameter}&addRecipeInformation=true&apiKey=${apiKey}&number=20`
      );
      const data = await response.json();
      setRecipeList(data.results);
    } catch (e) {
      console.error(e);
    }
  }

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
        handleSubmit,
        searchParameter,
        setSearchParameter,
        recipeIngredients,
        setRecipeIngredients
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
