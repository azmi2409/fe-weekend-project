import React from "react";
import bgHelp from "../../assets/bg-help.svg";
import { SiteContext } from "../../context";
import icon from "../../assets/icon.svg";

const HelpTips = () => {
  const { tips } = React.useContext(SiteContext);
  return (
    <section
      style={{ backgroundImage: `url(${bgHelp})` }}
      className="bg-black px-8 lg:px-48 bg-no-repeat bg-right-top box-sizing relative min-h-max py-5 bg-origin-content"
    >
      <h1 className="text-justify lg:text-center text-3xl font-bold pt-8">
        Help & Tips
      </h1>
      <div className="flex gap-2 justify-center items-center left-8 max-w-full lg:left-80 lg:right-80 overflow-auto flex-col lg:flex-row mt-8">
        {tips?.map((v) => (
          <Card key={v.id} title={v.title} bg={v.image} />
        ))}
      </div>
    </section>
  );
};

function Card({ title, bg = "" }) {
  return (
    <div
      style={{
        height: "176px",
        width: "311px",
        minWidth: "311px",
        background: `url(${bg})`,
      }}
      className="text-white text-justify p-5 relative"
    >
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-contain object-center"
      />
      <div className="absolute bottom-0 left-0 right-0 py-4 mix-blend-normal bg-black bg-opacity-50 h-20 flex max-w-full">
        <div className="font-bold text-left pl-5 w-3/4">{title}</div>
        <div className="w-1/4 flex items-center justify-end p-4">
          <button className="bg-white text-specialBlue rounded-full h-8 w-8 flex justify-center items-center">
            <img src={icon} alt="icon" className="h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpTips;
