import React from "react";
import robot from "../../assets/robot.png";

const Robot = () => {
  return (
    <div className="flex justify-center pt-16">
      <div className="relative px-4 py-8">
        <img className="h-80 w-48" src={robot} alt="robot" />
        <button className="absolute text-black z-10 bg-white rounded-full py-5 px-20 bottom-20 left-0 right-0 transition-all duration-200 hover:scale-110">
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default Robot;
