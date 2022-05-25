import React from "react";
import axios from "axios";

export const SiteContext = React.createContext({});

const getTestimonials = async () => {
  const url = "https://wknd-take-home-challenge-api.herokuapp.com/testimonial";
  const response = await axios.get(url);
  return response.data;
};

const getTips = async () => {
  const url = "https://wknd-take-home-challenge-api.herokuapp.com/help-tips";
  const response = await axios.get(url);
  return response.data;
};

const SiteProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [testimonials, setTestimonials] = React.useState([]);
  const [tips, setTips] = React.useState([]);

  React.useEffect(() => {
    const fetchData = Promise.all([getTestimonials(), getTips()]);
    fetchData
      .then(([testimonials, tips]) => {
        setTestimonials(testimonials);
        setTips(tips);
      })
      .finally(() => setTimeout(() => setIsLoading(false), 1000));
  }, []);

  return (
    <SiteContext.Provider value={{ isLoading, testimonials, tips }}>
      {children}
    </SiteContext.Provider>
  );
};

export default SiteProvider;
