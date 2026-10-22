import React from "react";
import Navbar from "./components/First/Navbar";
import Hero from "./components/First/hero";
import Stats from "./components/First/Stats";
import Programs from "./components/second/Programs";
import Trainer from "./components/second/Trainers";
import Pricing from "./components/second/Pricing";
import Contact from "./components/second/Contact";

const App = () => {
  return (
    <div className="bg-[#0B0B0D] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <Trainer />
      <Pricing />
      <Contact />
    </div>
  );
};

export default App;
