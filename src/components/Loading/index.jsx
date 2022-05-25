import React from "react";
import { SiteContext } from "../../context";

const Loader = () => (
  <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur flex justify-center items-center text-white z-50">
    Loading
  </div>
);

const Loading = () => {
  const { isLoading } = React.useContext(SiteContext);
  return <>{isLoading && <Loader />}</>;
};

export default Loading;
