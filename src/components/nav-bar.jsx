import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowDown2,
  MessageText1,
  Notification,
  HambergerMenu,
  SearchNormal1,
} from "iconsax-react";
import "../index.css";
import { GlobalContext } from "./context";

export default function NavBar() {
  const { searchParameter, setSearchParameter, setSearchResult } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const apiKey = "4d7c682e693448de9a7b5a9092177bff";
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchParameter}&addRecipeInformation=true&apiKey=${apiKey}&number=20`
      );
      const data = await response.json();
      setSearchResult(data.results);
      navigate(`/search-result?s=${encodeURIComponent(searchParameter)}`);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    setSearchParameter("");
  }, [setSearchParameter]);

  return (
    <nav className="navbar-container">
      <div className="searchbar-container">
        <Link to={`/search-result/${searchParameter}`} onClick={handleSubmit}>
          <SearchNormal1 size="25" color="#808080" className="search-icon" />
        </Link>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Search recipe here..."
            value={searchParameter}
            onChange={(event) => setSearchParameter(event.target.value)}
          />
        </form>
      </div>
      <div className="navbar-secondpart">
        <div className="hamburger-menu" id="hamburger-menu">
          <HambergerMenu size="32" color="#222" />
        </div>
        <div className="icon-container" id="icon-container">
          <MessageText1 className="icon" size="32" color="#222" />
        </div>
        <div className="icon-container" id="icon-container">
          <Notification className="icon" size="32" color="#222" />
        </div>
        <div className="profile-container" id="icon-container">
          <Link to={"/profile"}>
            <span className="profile-img">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="Users Profile Pic"
              />
            </span>
            <span className="users-name">Abolurin Azeez</span>
            <span>
              <ArrowDown2 className="arrow-icon" size="18" color="#222" />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
