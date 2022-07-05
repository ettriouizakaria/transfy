import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Signin() {
    return (
        <div className="form">
            <form >
                <h1>Transfy</h1>
                <div className="input">
                    <label>Nom</label>
                    <input type="text" placeholder="Entrer votre nom" />
                </div>

                <div className="input">
                    <label>Prénom</label>
                    <input type="text" placeholder="Entrer votre prénom" />
                </div>

                <div className="input">
                    <label>E-mail</label>
                    <input type="text" placeholder="Entrer votre e-mail" />
                </div>

                <div className="input">
                    <label>CIN</label>
                    <input type="text" placeholder="Entrer votre CIN" />
                </div>

                <div className="input">
                    <label>Mot de passe</label>
                    <input type="password" placeholder="Entrer votre mot de passe" />
                </div>
                <button type="submit">S'inscrire</button>
            </form>
            <p>Avez-vous dèja un compte? <Link to="/">Se connecter</Link> </p>
        </div>
    );
}

export default Signin;