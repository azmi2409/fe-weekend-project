import React from "react";
import Pov from "./Pov";
import Resource from "./Resource";

const PovResource = () => {
  return (
    <section className="bg-black min-h-screen pt-48 text-justify lg:text-center flex flex-col items-center gap-16 pb-5">
      <Pov />
      <Resource />
    </section>
  );
};

export default PovResource;
