import Navbar1 from "../components/Navbar/Navbar";
import ServiceOne from "../components/Projects/ServiceOne";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

export default function Challenges() {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Navbar1 />
      <ServiceOne selected={selected} setSelected={setSelected} />
      <Footer />
    </>
  );
}
