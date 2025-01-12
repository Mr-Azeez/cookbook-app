import "./App.css";
import Favorites from "./pages/favorites";
import Home from "./pages/home";
import RecipeDetailsPage from "./pages/recipe-details-page";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import SearchResult from "./pages/search-result";
import { useContext } from "react";
import { GlobalContext } from "./components/context";
import Profile from "./pages/profile";

function App() {
  const { favoriteList, recipe } = useContext(GlobalContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:title/:id" element={<RecipeDetailsPage />} />
          <Route
            path="/favorite"
            element={
              <Favorites recipe={recipe} favoriteList={favoriteList} />
            }
          />
          <Route path="/search-result" element={<SearchResult />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
