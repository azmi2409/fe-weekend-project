import React from "react";
import endBg from "../../assets/end-bg.svg";

const End = () => {
  return (
    <section className="bg-black px-8 md:px-52 box-sizing relative h-80 py-5 flex justify-center mt-32">
      <div className="text-center relative z-20">
        <h2 className="text-3xl font-bold">You're all set</h2>
        <p className="mt-7 text-lg mx-36">
          The wise man therefore always holds in these matters to this principle
          of selection.
        </p>
      </div>
      <img
        src={endBg}
        alt="end-bg"
        className="absolute top-0 bottom-0 left-0"
      />
    </section>
  );
};

export default End;
