import Navbar1 from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Message from "../components/MsgDay/MessageDay";
import AboutUs from "../components/About/AboutUs";
import Projects from "../components/Services/Projects";
export default function Home() {
  return (
    <>
      <Navbar1 />
      <Message />
      <AboutUs />
      <Projects />
      <Footer />
    </>
  );
}
