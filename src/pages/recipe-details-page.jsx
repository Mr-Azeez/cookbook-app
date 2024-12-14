import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../components/context";

export default function RecipeDetailsPage() {
  const { id, title } = useParams();
  const { recipeIngredients, setRecipeIngredients } = useContext(GlobalContext);

  const apiKey = "4d7c682e693448de9a7b5a9092177bff";
  async function getRecipeDetails() {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
    setRecipeIngredients(data.ingredients);
  }
  useEffect(() => {
    getRecipeDetails();
  }, []);
  return (
    <div className="ingredients-page">
      <h1>Ingredients for {title}</h1>
      <div>
        <img
          src={`https://img.spoonacular.com/recipes/${id}-556x370.jpg`}
          alt=""
        />
      </div>
      {recipeIngredients.map((recipeIngredient, index) => (
        <ul>
          <img
            src={`https://img.spoonacular.com/ingredients_100x100/${recipeIngredient.image}`}
          />
          <li key={index}>
            <span>{recipeIngredient.name}</span>
            {/* <span>{recipeIngredient}</span> */}
          </li>
        </ul>
      ))}
      <button>Add to favorite</button>
    </div>
  );
}
