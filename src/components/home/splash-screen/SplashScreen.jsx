import React from "react";
import "./splash-screen.css";
import FamilyVacation from "../../../images/Family vacation.png";
import PrimaryButton from "../../primary-button/PrimaryButton";


export default function SplashScreen() {
    return (
        <div className="splashScreen">
            <div className="info">
                <h1>Voyager en tout confort</h1>
                <p>profitez pleinement de votre voyage  et laissez-nous nous occuper de votre transport</p>
                <PrimaryButton label="Reservez" />
            </div>
            <div className="familyImg">
                <img src={FamilyVacation} alt="family travel" />
            </div>
        </div>);
}