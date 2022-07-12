import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Order from "./order/Order";
import "./orders.css";

export default function Orders() {
  return (
    <div className='orders-container partial-width'>
      <div className='header'>
        <h2 className='title'>Commandes</h2>
        <div className='input-group'>
          <FontAwesomeIcon className='icon' icon='search' />
          <input type='text' placeholder='Chercher une commande' />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Fournisseur</th>
            <th>Prix</th>
            <th>Date de départ</th>
            <th>Point de départ</th>
            <th>Point d'arrivé</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Order
            supplier='ONCF'
            departureDate='12-03-2022'
            price='113'
            startingPoint='Fès'
            arrivalPoint='Agdal, Rabat'
            itinerary={[
              {
                meanOfTransport: "Petit taxi",
                location: "Rte Ain Chkef, Fès",
              },
              {
                meanOfTransport: "Train",
                location: "Gare ONCF, Fès",
              },
              {
                meanOfTransport: "Petit taxi",
                location: "Gare ONCF, Agdal, Rabat",
              },
              {
                location: "Hay Ryad, Rabat",
              },
            ]}
          />
        </tbody>
      </table>
    </div>
  );
}
