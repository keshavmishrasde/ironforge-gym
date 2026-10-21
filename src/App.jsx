import React from "react";
import Navbar from "./components/First/Navbar";
import Hero from "./components/First/hero";
import Stats from "./components/First/Stats";
import Programs from "./components/second/Programs";
import Trainer from "./components/second/Trainers";
import Pricing from "./components/second/Pricing";

const App = () => {
  return (
    <div className="bg-[#0B0B0D] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <Trainer />
      <Pricing />
    </div>
  );
};

export default App;
