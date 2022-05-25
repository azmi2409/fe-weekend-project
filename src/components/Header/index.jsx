import React from "react";
import Avatar from "./Avatar";
import Title from "./Title";

const Header = () => {
  return (
    <header className="w-full h-16 flex items-center py-4 px-6 box-border gap-3 md:px-52 bg-white">
      <Avatar />
      <Title />
    </header>
  );
};

export default Header;
