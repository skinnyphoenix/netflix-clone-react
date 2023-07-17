import "./Hero.css";
import axios from "axios";

import { useState } from "react";
import { useEffect } from "react";

const Hero = (data) => {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/tv/latest?api_key=6507ea6ce371a2747fc5aed22c8980fc")
      .then((res) => setHeroData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="wrapperHero">
        <img src="https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg" alt="" />
        <div className="textHero">
          <img src="../src/Assets/guardianiLogo.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magnam fugit laboriosam esse, sapiente doloribus quos cum inventore quae,
            quibusdam iure corrupti, enim quisquam recusandae vero accusamus officiis minima aut!
          </p>
          <button> Watch </button>
          <button> Open Details</button>
        </div>
      </div>

      <div className="text">
        <h2>Now Popular</h2>
      </div>
    </>
  );
};

export default Hero;
