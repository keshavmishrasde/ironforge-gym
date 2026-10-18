import React from "react";
import Navbar from "./components/First/Navbar";
import Hero from "./components/First/hero";
import Stats from "./components/First/Stats";

const App = () => {
  return (
    <div className="bg-[#0B0B0D] text-white">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  );
};

export default App;
