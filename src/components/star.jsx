import { Star1 } from "iconsax-react";

export default function Star({ noOfStars = 5 }) {
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <Star1 className="star-icon" key={index} size="16" color="#EA5781" variant="Bold" />
        );
      })}
    </div>
  );
}
