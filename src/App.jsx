import "./App.css";
import Home from "./pages/home";
import RecipeDetailsPage from "./pages/recipe-details-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<RecipeDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
