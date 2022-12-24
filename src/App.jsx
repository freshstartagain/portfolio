import React from "react";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Tools from "./components/Tools";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-inter text-stone-900 dark:bg-[#261C2C] dark:text-stone-300">
      <div className="sticky top-0 z-50 md:mx-auto md:w-11/12 md:max-w-5xl ">
        <Navigation />
      </div>
      <div className="mx-auto w-11/12 max-w-5xl">
        <Intro />
        <Timeline />
        <Tools />
        <Footer />
      </div>
    </div>
  );
}

export default App;
