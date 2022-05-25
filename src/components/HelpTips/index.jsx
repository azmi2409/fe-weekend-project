import React from "react";
import bgHelp from "../../assets/bg-help.svg";
import { SiteContext } from "../../context";

const HelpTips = () => {
  const { tips } = React.useContext(SiteContext);
  return (
    <section
      style={{ backgroundImage: `url(${bgHelp})` }}
      className="bg-black px-8 lg:px-52 bg-no-repeat bg-right-top box-sizing relative min-h-max py-5 bg-origin-content"
    >
      <h1 className="text-justify lg:text-center text-3xl font-bold pt-8">
        Help & Tips
      </h1>
      <div className="flex gap-2 justify-center items-center left-8 max-w-full lg:left-80 lg:right-80 overflow-auto flex-col lg:flex-row mt-8">
        {tips?.map((v) => (
          <Card key={v.id} title={v.title} bg={v.image} body="test" />
        ))}
      </div>
    </section>
  );
};

function Card({ title, body, bg = "" }) {
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
        alt="bg"
        className="absolute inset-0 w-full h-full object-contain object-center"
      />
      <div className="absolute bottom-0 left-0 right-0 p-5 mix-blend-normal bg-black bg-opacity-50 h-20">
        <div className="text-md font-bold text-left">{title}</div>
      </div>
    </div>
  );
}

export default HelpTips;
