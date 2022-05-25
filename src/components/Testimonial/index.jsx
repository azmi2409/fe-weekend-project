import React from "react";
import oval from "../../assets/oval.svg";
import { SiteContext } from "../../context";

const Testimonial = () => {
  const { testimonials } = React.useContext(SiteContext);
  return (
    <section
      style={{ backgroundImage: `url(${oval})` }}
      className="bg-pink px-8 md:px-80 bg-no-repeat bg-left-top bg-origin-content box-sizing relative py-8 h-52"
    >
      <h1 className="md:text-center text-4xl font-bold pt-8">Testimonial</h1>
      <div className="flex gap-2 justify-center items-center absolute -bottom-20 overflow-x-auto left-8 max-w-full lg:left-80 lg:right-80">
        {testimonials?.map(({ id, by, testimony }) => (
          <Card key={id} title={by} body={testimony} />
        ))}
      </div>
    </section>
  );
};

function Card({ title, body }) {
  return (
    <div
      style={{ height: "140px", width: "247px", minWidth: "247px" }}
      className="bg-white text-black text-justify p-5"
    >
      <h1 className="text-3xl font-bold">{title}</h1>
      <p style={{ fontSize: 12, lineHeight: "14px" }} className="mt-5">
        {body}
      </p>
    </div>
  );
}

export default Testimonial;
