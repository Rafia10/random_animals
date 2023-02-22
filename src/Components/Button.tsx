import { useState } from "react";
import { Animal } from "./Animal";
import "../Components/Button.css";
export const Button = () => {
  const [animal, setAnimal] = useState([]);
  function handleAnimals() {
    const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
    return animals[Math.floor(Math.random() * animals.length)];
  }
  function handleClick() {
    //@ts-ignore
    setAnimal([...animal, handleAnimals()]);
  }
  return (
    <div className="app">
      <button type="button" className="button" onClick={handleClick}>
        Add Animal
      </button>
      <div className="animal-list">
        {animal.map((animal, i) => {
          return <Animal type={animal} key={i} />;
        })}
      </div>
    </div>
  );
};
