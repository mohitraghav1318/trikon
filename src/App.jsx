import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import About from "./components/sections/About";
import Problems from "./components/sections/Problems";
import Timeline from "./components/sections/Timeline";
import Prize from "./components/sections/Prize";
import Jury from "./components/sections/Jury";
import Mentors from "./components/sections/Mentors";
import Sponsors from "./components/sections/Sponsors";
import FAQ from "./components/sections/FAQ";
import PastEvents from "./components/sections/PastEvents";
import Team from "./components/sections/Team";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="bg-[#14141b] text-lighttext overflow-x-hidden">
      <Navbar />
      <Hero />

      <About />
      <Problems />
      <Timeline />
      <Prize />
      <Jury />
      <Mentors />
      <Sponsors />
      <FAQ />
      <PastEvents />
      <Team />
      <Footer />

    </div>
  );
}

export default App;