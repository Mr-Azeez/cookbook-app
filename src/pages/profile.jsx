import { useContext } from "react";
import Favorites from "./favorites";
import { GlobalContext } from "../components/context";

export default function Profile(){
    const {favoriteList, recipe} = useContext(GlobalContext)
    return (
      <div>
        <div className="container">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Users Profile Pic"
          />
          <div className="profile-info">
            <h1>Abolurin Azeez</h1>
            <p>Food enthusiast, recipe creator, and cookbook lover.</p>
            <p>London UK</p>
            <button className="edit-profile-btn">Edit Profile</button>
          </div>
        </div>
        <div className="favorite-list">
          <Favorites recipe={recipe} favoriteList={favoriteList} />
        </div>
      </div>
    );
    
}