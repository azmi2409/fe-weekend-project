import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Quotes from "./components/Quotes";
import Testimonial from "./components/Testimonial";
import HelpTips from "./components/HelpTips";
import PovResource from "./components/PovResource";
import End from "./components/End";
import Container from "./components/Container";
import ContentContainer from "./components/Container/ContentContainer";
import Loading from "./components/Loading";

const App = () => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <Hero />
        <Quotes />
        <Testimonial />
        <PovResource />
        <HelpTips />
        <End />
      </ContentContainer>
      <Footer />
      <Loading />
    </Container>
  );
};

export default App;
