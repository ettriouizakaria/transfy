import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Signin() {
    return (
        <div className="form">
            <form >
                <h1>Transfy</h1>
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
                <button type="submit">S'inscrire</button>
            </form>
            <p>Avez-vous dèja un compte? <Link to="/">Se connecter</Link> </p>
        </div>
    );
}

export default Signin;