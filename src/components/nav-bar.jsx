import React, { useContext } from "react";
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
  const { handleSubmit, searchParameter, setSearchParameter } =
    useContext(GlobalContext);

  return (
    <nav className="navbar-container">
      <div className="searchbar-container">
        <SearchNormal1 size="25" color="#808080" className="search-icon" />
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
          <span className="profile-img">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Users Profile Pic"
            />
          </span>
          <span className="users-name">Dieko Fashlanso</span>
          <span>
            <ArrowDown2 className="arrow-icon" size="18" color="#222" />
          </span>
        </div>
      </div>
    </nav>
  );
}
