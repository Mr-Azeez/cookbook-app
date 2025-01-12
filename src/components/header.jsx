import { ArrowCircleRight2 } from "iconsax-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header1">
      <h2>
        Taste the world: Discover diverse cuisines worldwide at your home!
      </h2>
      <Link to={"/favorite"}>
        <button className="explore-btn">
          <p>Go to Favorite</p>
          <ArrowCircleRight2 size="45" color="#fff" variant="Bold" className="arrow-circle-icon" />
        </button>
      </Link>
    </div>
  );
}
