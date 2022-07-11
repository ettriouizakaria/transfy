import React from "react";
import Service from "../../Service";
import "./services.css";

export default function Services() {
    return (
        <div className="services partial-width">
            <h1>Nos services</h1>
            <Service  icon="home" title="Réservez sans vous deplacer" content="Tout ce dont vous avez besoin est votre appareil, réservez depuis chez vous et gagnez du temps!" />

            <Service  icon="turn_right" title="Avoir l’itinéraire complet" content="TransFy vous fournit l'itinéraire complet de votre voyage, du point de départ jusqu'au point d'arrivée. " />

            <Service  icon="tune" title="Filtrer vos choix" content="Le système de filtrage du TransFy vous permez de filtrer les itinéraires en fonction de vos critères " />

            <Service  icon="checklist" title="Choisissir le bon itinéraire" content="Transfy vous donne la possibilité de choisr, parmi plusieurs itinéraires, celui qui vous convient le mieux. " />

            <Service  icon="map" title="Voir l’itinéraire sur une carte" content="Visualisez l'itinéraire complet de votre voyage sur une carte interactive." />

            <Service  icon="local_atm" title="Aucun frais supplémentaire" content="Profitez de tous les services offerts par TransFy sans frais supplémentaires." />

        </div>
    );
}