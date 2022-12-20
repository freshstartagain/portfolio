import Navigation from "./components/Navigation";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Tools from "./components/Tools";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
      <div className="max-w-5xl w-11/12 mx-auto dark:bg-stone-900">
        <Navigation />
        <Intro />
        <Timeline />
        <Tools />
        <Footer />
      </div>
    </div>
  );
}

export default App;
