import React from "react";
import side from "../../assets/side-robot.svg";
import Article from "./Article";

const Quotes = () => {
  return (
    <section className="bg-pink relative text-black flex justify-center py-40 lg:px-80 px-8">
      <Article />
      <img
        src={side}
        alt="side robot"
        className="absolute right-0 top-0 transition-all duration-500 hover:translate-x-32 cursor-pointer"
      />
    </section>
  );
};

export default Quotes;
