import React from "react";
import oval from "../../assets/oval.svg";
import { SiteContext } from "../../context";
import Icon from "../../assets/icon.svg";

const Testimonial = () => {
  const { testimonials } = React.useContext(SiteContext);
  const testiRef = React.createRef();

  const scrollTo = (direction) => {
    if (direction === "left") {
      testiRef.current.scrollLeft -= 200;
    } else {
      testiRef.current.scrollLeft += 240;
    }
  };

  return (
    <section
      style={{ backgroundImage: `url(${oval})` }}
      className="bg-pink px-8 lg:px-80 bg-no-repeat bg-left-top bg-origin-content box-sizing relative py-8 h-52"
    >
      <h1 className="lg:text-center text-4xl font-bold pt-8">Testimonial</h1>
      <div className="absolute -bottom-20 left-0 right-0 max-w-full lg:left-64 lg:right-64 flex gap-10">
        <div className="hidden lg:flex justify-center items-center">
          <button
            onClick={() => scrollTo("left")}
            className="w-8 h-8 bg-white rounded-full text-specialBlue flex justify-center items-center"
          >
            <img src={Icon} alt="icon" className="rotate-180" />
          </button>
        </div>
        <div
          ref={testiRef}
          className="flex gap-2 no-scrollbar overflow-x-scroll lg:overflow-hidden px-8"
        >
          {testimonials?.map(({ id, by, testimony }) => (
            <Card key={id} title={by} body={testimony} />
          ))}
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <button
            onClick={() => scrollTo("right")}
            className="w-8 h-8 bg-white rounded-full text-specialBlue flex justify-center items-center"
          >
            <img src={Icon} alt="icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

function Card({ title, body }) {
  return (
    <div
      style={{ height: "140px", width: "247px", minWidth: "247px" }}
      className="bg-white text-black text-left p-5"
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <p style={{ fontSize: 12, lineHeight: "14px" }} className="mt-2">
        {body}
      </p>
    </div>
  );
}

export default Testimonial;
