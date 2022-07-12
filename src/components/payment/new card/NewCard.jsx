import React from "react";
import "./new-card.css";
import cvv from "../../../images/cvv.png";

export default function NewCard() {
    return (
        <div className="new-card">
            <h4>Ajouter une nouvelle carte</h4>
            <div>
                <label>Nom du titulaire </label>
                <input type="text" name="holder-name" />
            </div>
            <div>
                <label>Numéro de la carte</label>
                <input type="text" name="card-number" />
            </div>
            <div>
                <div className="row">
                    <label>Date d'expiration</label>
                    <div className="expirary-date">
                        <input type="text" name="expirary-date" placeholder="mois" className="month" />
                        <input type="text" name="expirary-date" placeholder="année" className="year" />
                    </div>
                </div>
                <div className="row">
                    <label>CVV</label>
                    <div className="expirary-date">
                        <input type="text" name="expirary-date" />
                    </div>
                </div>
            </div>
            <div className="save-info">
                <input type="checkbox" id="save" />
                <label for="save"> Enregistrer les infos de cette carte</label>
            </div>
        </div>
    );
}