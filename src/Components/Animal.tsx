import { useState } from "react";
import bird from "../svg/bird.svg";
import cat from "../svg/cat.svg";
import cow from "../svg/cow.svg";
import dog from "../svg/dog.svg";
import gator from "../svg/gator.svg";
import heart from "../svg/heart.svg";
import horse from "../svg/horse.svg";
import "../Components/Animal.css";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  heart,
  horse,
};
//@ts-ignore
export const Animal = ({ type }) => {
  const [clicks, setClicks] = useState(0);
  function handleClick() {
    setClicks(clicks + 1);
  }
  return (
    <div onClick={handleClick} className="animal-show">
      {/* @ts-ignore */}
      <img src={svgMap[type]} alt="" className="animal" />
      <img
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * clicks }}
        className="heart"
      />
    </div>
  );
};
