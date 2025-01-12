import { Clock, Category, HuobiToken, Heart } from "iconsax-react";
import { Link } from "react-router-dom";
import Star from "./star";

export default function RecipeCard({ recipeItem, isFavorite, addToFavorite }) {
  return (
    <div className="recipe-card">
      <div className="image-container">
        <img className="recipe-image" src={recipeItem.image} alt="" />
      </div>
      <div
        className="heart-icon-container"
        onClick={() => addToFavorite(recipeItem.id)}
        style={{
          backgroundColor: isFavorite ? "#e9083f" : "#fff",
        }}
      >
        <Heart
          className="heart-icon"
          size="26"
          color={isFavorite ? "#fff" : "#222"}
        />
      </div>
      <p className="author">{recipeItem.sourceName}</p>
      <h3>{recipeItem.title}</h3>
      <div className="star-icon-container">
        <Star />
        <span>(4.5)</span>
      </div>
      <div className="recipe-details">
        <div>
          <Clock className="small-icon" size="16" color="#EA5781" />
          <p>{recipeItem.readyInMinutes + " min"}</p>
        </div>
        <div>
          <HuobiToken className="small-icon" size="16" color="#EA5781" />
          <p>{recipeItem.noOfIngredients}</p>
        </div>
        <div>
          <Category className="small-icon" size="16" color="#EA5781" />
          <p>{recipeItem.dishTypes[0]}</p>
        </div>
      </div>
      <Link
        to={`/details/${recipeItem.title}/${recipeItem.id}`}
        className="view-details-btn"
      >
        View Recipe
      </Link>
    </div>
  );
}
