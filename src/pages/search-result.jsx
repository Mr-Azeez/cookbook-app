import { useContext } from "react";
import { GlobalContext } from "../components/context";
import NavBar from "../components/nav-bar";
import HeroSections from "../components/hero-section";
import { Link, useLocation } from "react-router-dom";

export default function SearchResult() {
  const { searchResult } = useContext(GlobalContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const searchTerm = queryParams.get('s')
  return (
    <div className="container">
      <NavBar />
      <HeroSections
        title={`Search Results for: "${searchTerm}"`}
        recipe={searchResult.slice(0, 10)}
      />
      <Link to={"/home"}>
        <button className="homepage-btn">Back to Home page</button>
      </Link>
    </div>
  );
}
