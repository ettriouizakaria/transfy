import React from "react";
import HowItWorks from '../components/home/how-it-works-section/HowItWorks';
import Newsletter from '../components/home/newsletter-section/Newsletter';
import SplashScreen from "../components/home/splash-screen/SplashScreen";
import Services from "../components/home/Services/Services";

export default function Home() {
    return (
        <div className="home">
            <SplashScreen />
            <Services />
            <><HowItWorks></HowItWorks><Newsletter></Newsletter></>
        </div>

    );
}

