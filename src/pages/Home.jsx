import React from "react";
import PrimaryButton from "../components/primary-button/PrimaryButton";
import Service from "../components/Service";
import FamilyVacation from "../images/Family vacation.png";
import style from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className="home">
            <div className={style.splashScreen}>

                <div className={style.info}>
                    <h1>Voyager en tout confort</h1>
                    <p>profitez pleinement de votre voyage  et laissez-nous nous occuper de votre transport</p>
                    <PrimaryButton label="Reservez" />
                </div>
                <div className={style.familyImg}>
                    <img src={FamilyVacation} alt="family travel" />
                </div>
            </div>
            <div className={style.services}>
                <h1>Nos services</h1>
                <Service style={style.service} icon="home" title="Réservez sans vous deplacer" content="Tout ce dont vous avez besoin est votre appareil, réservez depuis chez vous et gagnez du temps!" />

                <Service style={style.service} icon="turn_right" title="Avoir l’itinéraire complet" content="TransFy vous fournit l'itinéraire complet de votre voyage, du point de départ jusqu'au point d'arrivée. " />

                <Service style={style.service} icon="tune" title="Filtrer vos choix" content="Le système de filtrage du TransFy vous permez de filtrer les itinéraires en fonction de vos critères " />

                <Service style={style.service} icon="checklist" title="Choisissir le bon itinéraire" content="Transfy vous donne la possibilité de choisr, parmi plusieurs itinéraires, celui qui vous convient le mieux. " />

                <Service style={style.service} icon="map" title="Voir l’itinéraire sur une carte" content="Visualisez l'itinéraire complet de votre voyage sur une carte interactive." />

                <Service style={style.service} icon="local_atm" title="Aucun frais supplémentaire" content="Profitez de tous les services offerts par TransFy sans frais supplémentaires." />

            </div>
        </div>

    );
}