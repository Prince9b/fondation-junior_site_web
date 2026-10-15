import React from "react";
import Navbar from "../composents/Navbar";
import Section1 from "../composents/Accueil/Section1";
import Footer from "../composents/Footer";
import Section2 from "../composents/Accueil/Section2";
import Section3 from "../composents/Accueil/Section3";
import Section4 from "../composents/Accueil/Section4";

export default function Accueil() {
  return (
    <div>
      <div>
        <Navbar />
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Footer/>
      </div>
    </div>
  );
}
