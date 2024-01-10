import "./App.css";
import Navbar from "./components/Navbar";

import { Link, Element } from "react-scroll";
import Home from "./pages/Home";
import About from "./pages/About";
import Story from "./pages/Story";
import AboutUs from "./pages/AboutUs";
import StoryCard from "./pages/StoryCard";
import TimeLine from "./pages/TimeLine";
import Gallery from "./pages/Gallery";
import Bride_Groom from "./pages/BMGM";
import RSVP_Form from "./pages/RSVP_Form";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <AboutUs />
      <Element name="story">
        <Story />
        <StoryCard />
      </Element>
      <Element name="timeLine">
        <TimeLine />
      </Element>
      <Element name="gallery">
        <Gallery />
      </Element>
      <Bride_Groom />
      <Element name="rsvp">
        <RSVP_Form />
      </Element>

      <Footer />
      <Link to="home" smooth={true} duration={3000}>
        <i className="fa fa-arrow-up   p-3 scroll-to-top-button btnBookAttendance"></i>
      </Link>
    </>
  );
}

export default App;
