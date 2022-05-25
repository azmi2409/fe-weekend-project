import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-16 flex items-center py-6 px-6 gap-3 lg:px-52 bg-specialBlue text-white justify-between">
      <div>
        <h2>
          <span className="font-bold">wknd@</span>2020
        </h2>
      </div>
      <div className="border-2 rounded-3xl py-1 px-3 text-sm box-border">
        <h2 className="font-light">alpha version 0.1</h2>
      </div>
    </footer>
  );
};

export default Footer;
