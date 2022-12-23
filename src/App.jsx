import React from "react";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Tools from "./components/Tools";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-inter text-stone-900 dark:bg-stone-900 dark:text-stone-300">
      <Navigation />
      <div className="mx-auto w-11/12 max-w-5xl dark:bg-stone-900">
        <Intro />
        <Timeline />
        <Tools />
        <Footer />
      </div>
    </div>
  );
}

export default App;
