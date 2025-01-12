import { useContext } from "react";
import { GlobalContext } from "../components/context";
import HeroSections from "../components/hero-section";
import NavBar from "../components/nav-bar";
import Header from "../components/header";
// import data from "./data";

export default function Home() {
  const { recipe } = useContext(GlobalContext);

  // console.log(recipe)
  // if(!Array.isArray(recipe)){
  //   return <div>Loading...</div>
  // }
  return (
    <div className="container">
      <NavBar />
      <Header />
      <HeroSections
        title="Recipe Ideas"
        recipe={recipe.slice(0, 15)}
      />
      {/* <HeroSections
        title="Recommended only for you"
        recipe={recipe.slice(0, 3)}
      />
      <HeroSections title="Most popular recipes" recipe={recipe.slice(0, 3)} /> */}
    </div>
  );
}
