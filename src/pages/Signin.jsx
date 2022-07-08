import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PrimaryButton from "../components/primary-button/PrimaryButton";

function Signin() {
    return (
        <div className="form">
            <form >
                <h1>Créer un compte</h1>
                <div className="input">
                    <input type="text" placeholder="Nom" />
                </div>

                <div className="input">
                    <input type="text" placeholder="Prénom" />
                </div>

                <div className="input">
                    <input type="text" placeholder="Numéro CIN" />
                </div>

                <div className="input">
                    <input type="text" placeholder="E-mail" />
                </div>

                <div className="input">
                    <input type="password" placeholder="Mot de passe" />
                </div>
                <PrimaryButton label="S'inscrire" marginTop="15"></PrimaryButton>
            </form>
            <p>Avez-vous dèja un compte? <Link to="/login">Se connecter</Link> </p>
        </div>
    );
}

export default Signin;