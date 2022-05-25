import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex justify-between items-center flex-col w-screen max-w-full">
      {children}
    </div>
  );
};

export default Container;
