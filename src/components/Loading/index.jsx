import React from "react";
import { SiteContext } from "../../context";
import robot from "../../assets/robot.png";

const Loader = () => (
  <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur flex flex-col justify-center items-center text-white z-50">
    <img src={robot} alt="robot" className="h-32 animate-spin" />
    <div className="text-center text-xl font-bold mt-8">Loading...</div>
  </div>
);

const Loading = () => {
  const { isLoading } = React.useContext(SiteContext);
  return <>{isLoading && <Loader />}</>;
};

export default Loading;
