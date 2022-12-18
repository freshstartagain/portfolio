import { useState } from "react";
import Intro from "./components/Intro";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-5xl w-11/12 mx-auto">
      <Nav></Nav>
      <Intro />
    </div>
  );
}

export default App;
