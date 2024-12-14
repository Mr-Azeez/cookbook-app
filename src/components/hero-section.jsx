import RecipeCard from "./recipe-card";



export default function HeroSections({title, recipe}) {
  return (
    <section className="hero-section">
      <h1>{title}</h1>
      <div className="recipe-card-container">
        {recipe.map((recipeItem) => (
          <RecipeCard key={recipeItem.id} recipeItem={recipeItem} />
        ))}
      </div>
    </section>
  );
}
