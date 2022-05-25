import React from "react";

const Article = () => {
  return (
    <article
      style={{ lineHeight: "32px", fontSize: "21px" }}
      className="h-40 text-right max-w-2xl"
    >
      <span className="text-blue-700 font-bold">Deffinition;</span> a practice
      or exercise to test or improve one's fitness for athletic competition,
      ability, or performance to exhaust (something, such as a mine) by working
      to devise, arrange, or achieve by resolving difficulties.
      Merriam-Webster.com Dictionary.
      <h2 className="text-white text-xl italic mt-7">-weekend team</h2>
    </article>
  );
};

export default Article;
