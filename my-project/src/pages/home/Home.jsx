import React from "react";
import Hero from "../../components/hero/Hero";
import Categories from "../../components/categories/Categories";
import About from "../../components/about-us/About";
import Testimonial from "../../components/testimonial/Testimonial";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <About />
      <Testimonial />
    </>
  );
}

export default Home;
