import React, { useRef } from "react";
import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Tools from "./components/Tools";
import Footer from "./components/Footer";

function App() {
  const introRef = useRef();
  const timelineRef = useRef();
  const toolsRef = useRef();

  return (
    <div className="min-h-screen bg-white font-inter text-stone-900 dark:bg-[#261C2C] dark:text-stone-300">
      <div className="sticky top-0 z-50 md:mx-auto md:w-11/12 md:max-w-5xl ">
        <Navigation
          introRef={introRef}
          timelineRef={timelineRef}
          toolsRef={toolsRef}
        />
      </div>
      <div className="mx-auto w-11/12 max-w-5xl">
        <Intro ref={introRef} />
        <Timeline ref={timelineRef} />
        <Tools ref={toolsRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
