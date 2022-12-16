import { useState } from "react";
import Intro from "./components/Intro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Intro />
    </div>
  );
}

export default App;
