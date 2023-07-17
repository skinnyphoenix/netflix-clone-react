import "./SingleCard.css";
import { useState } from "react";

const SingleCard = (title, img) => {
  const getPosterURL = (posterpath) => {
    return `https://image.tmdb.org/t/p/original/${posterpath}`;
  };

  return (
    <div className="wrapperCard">
      <div className="Card--Single">
        <img src={getPosterURL(img.backdrop_path)} alt="Film Poster" />
        <h5>{title}</h5>
      </div>
    </div>
  );
};

export default SingleCard;
