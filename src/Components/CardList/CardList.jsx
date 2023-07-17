import "./CardList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleCard from "../SingleCard";

const CardList = () => {
  const [cardData, setCardData] = useState([]);

  const getPosterURL = (posterpath) => {
    return `https://image.tmdb.org/t/p/original/${posterpath}`;
  };

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/trending/all/week?api_key=6507ea6ce371a2747fc5aed22c8980fc")
      .then((res) => setCardData(res.data.results))
      .catch((err) => err);
  }, []);

  return (
    <>
      {cardData.map((card) => (
        <>
          <div className="wrapperListCards">
            <img src={getPosterURL(card.poster_path)} alt="Poster movie" />
            <h3>{card.title}</h3>
          </div>
        </>
      ))}
    </>
  );
};

export default CardList;
