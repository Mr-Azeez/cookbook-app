import RecipeCard from "../components/recipe-card";
import { Link } from "react-router-dom";

export default function Favorites({ recipe, favoriteList }) {
  const favoriteItems = recipe.filter((recipeItem) =>
    favoriteList.includes(recipeItem.id)
  );
  console.log(favoriteItems);
  return (
    <div className="container favorite-container">
      <h2>Favorites</h2>
      <div className="recipe-card-container">
        {favoriteItems && favoriteItems.length > 0 ? (
          favoriteItems.map((recipeItem) => (
            <RecipeCard
              key={recipeItem.id}
              isFavorite={true}
              recipeItem={recipeItem}
              addToFavorite={() => {}}
            />
          ))
        ) : (
          <div>
            <p>Nothing have been added to favorites</p>
          </div>
        )}
      </div>
      <Link to="/home">
        <button className="homepage-btn">Back to Home page</button>
      </Link>
    </div>
  );
}
