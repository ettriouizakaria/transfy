import React from "react";
import Footer from "../components/home/footer/Footer";
import HowItWorks from "../components/home/how-it-works-section/HowItWorks";
import Newsletter from "../components/home/newsletter-section/Newsletter";

export default function Home() {
  return (
    <>
      <HowItWorks></HowItWorks>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}
