import { useContext, useEffect } from "react";
import RecipeCard from "./recipe-card";
import { GlobalContext } from "./context";

export default function HeroSections({ title, recipe }) {
  const { favoriteList, setFavoriteList } = useContext(GlobalContext);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteList(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteList));
  }, [favoriteList]);
  
  return (
    <section className="hero-section">
      <h1>{title}</h1>
      <div className="recipe-card-container">
        {recipe.map((recipeItem) => (
          <RecipeCard
            key={recipeItem.id}
            recipeItem={recipeItem}
            isFavorite={favoriteList.includes(recipeItem.id)}
            addToFavorite={(id) => {
              setFavoriteList((prev) =>
                prev.includes(id)
                  ? prev.filter((favId) => favId !== id)
                  : [...prev, id]
              );
            }}
          />
        ))}
      </div>
    </section>
  );
}
