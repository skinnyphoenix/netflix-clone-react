import { useState } from "react";
import "./App.css";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import CardList from "./Components/CardList";
import SingleCard from "./Components/SingleCard";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="wrapperCardList">
        <CardList />
      </div>
    </>
  );
}

export default App;
