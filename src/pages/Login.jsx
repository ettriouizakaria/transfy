import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
    return (
        <div className="form">
            <form >
                <h1>Transfy</h1>
                <div className="input">
                    <label>E-mail</label>
                    <input type="text" placeholder="Entrer votre e-mail" />
                </div>
                <div className="input">
                    <label>Mot de passe</label>
                    <input type="password" placeholder="Entrer votre mot de passe" />
                </div>
                <button type="submit">Se connecter</button>
            </form>
            <p>Vous n'avez pas un compte? <Link to="/signin">S'inscrire</Link> </p>
        </div>
    );
}

export default Login;