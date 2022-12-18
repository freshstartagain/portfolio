import { useState } from "react";
import Nav from "./components/Navigation";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Tools from "./components/Tools";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-5xl w-11/12 mx-auto">
      <Nav />
      <Intro />
      <Timeline />
      <Tools />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
