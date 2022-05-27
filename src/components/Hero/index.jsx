import React from "react";
import Robot from "./Robot";
import hero from "../../assets/hero-bg.png";

const Hero = () => {
  return (
    <section
      className={`bg-pink min-h-screen h-screen lg:h-auto flex flex-col bg-no-repeat bg-cover bg-center py-24 bg-hero`}
    >
      <div className="text-center flex flex-col gap-5 my-1">
        <h1 className="lg:text-6xl uppercase font-bold text-5xl">
          Weekend From Home
        </h1>
        <h3 className="lg:text-xl italic">
          Stay active with a little workout.
        </h3>
        <Robot />
      </div>
    </section>
  );
};

export default Hero;
