import React, { useContext } from "react";
import { StarRatingContext } from "../Watchlist";
const starHolder = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "2rem",

  padding: "4px 6px",
};

const RatingUpdater = {
  marginLeft: "1.4rem",
  marginRight: "auto",
  fontSize: "1.4rem",
  textAlign: "center",
};
const svgSvgStyles = {
  cursor: "pointer",
};

export default function StarRating({ heightAndwidth = 36, maxLength = 1 }) {
  const { rating, setRating, tempRating, setTempRating } =
    useContext(StarRatingContext);
  return (
    <>
      <StarRatingHolder
        rating={rating}
        setRating={setRating}
        tempRating={tempRating}
        setTempRating={setTempRating}
        maxLength={maxLength}
        heightAndwidth={heightAndwidth}
      />
    </>
  );
}

function StarRatingHolder({
  maxLength,
  heightAndwidth,
  rating,
  setRating,
  tempRating,
  setTempRating,
}) {
  const RatingsUpdater = (index) => {
    setRating(index);
  };

  const onMouseEnter = (key) => {
    setTempRating(key);
  };
  const onMouseLeave = () => {
    setTempRating(0);
  };
  // trueRa variable checks if tempRating exists(it will compare tempRating with index-1),if it doesn't exist it will do the same with rating
  //  {It returns true or false}
  return (
    <div style={starHolder}>
      {Array.from({ length: maxLength }, (_, i) => i + 1).map((i) => (
        <Star
          trueRa={tempRating ? tempRating >= i : rating ? rating >= i : 0}
          RatingUpdaterFunc={RatingsUpdater}
          func={onMouseEnter}
          func2={onMouseLeave}
          key={i}
          index={i}
          heightAndwidth={heightAndwidth}
        />
      ))}

      <span style={RatingUpdater}>{tempRating || rating}</span>
    </div>
  );
}

function Star({
  trueRa,
  func,
  func2,
  index,
  RatingUpdaterFunc,
  heightAndwidth,
}) {
  return (
    <span
      onClick={() => RatingUpdaterFunc(index)}
      onMouseEnter={() => func(index)}
      onMouseLeave={() => func2()}
    >
      {trueRa ? (
        <svg
          style={svgSvgStyles}
          xmlns="http://www.w3.org/2000/svg"
          height={`${heightAndwidth}px`}
          viewBox="0 -960 960 960"
          width={`${heightAndwidth}px`}
          fill="#fca311"
        >
          <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
        </svg>
      ) : (
        <svg
          style={svgSvgStyles}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          fill="#ee9b00"
          width={`${heightAndwidth}px`}
          height={`${heightAndwidth}px`}
        >
          <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
        </svg>
      )}
    </span>
  );
}
