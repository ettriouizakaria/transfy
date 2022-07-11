import React from "react";
import Footer from "../components/home/footer/Footer";
import HowItWorks from "../components/home/how-it-works-section/HowItWorks";
import Newsletter from "../components/home/newsletter-section/Newsletter";
import Services from "../components/home/services/Services";
import SplashScreen from "../components/home/splash-screen/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Services />
      <HowItWorks></HowItWorks>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

