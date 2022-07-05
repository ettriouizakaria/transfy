import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
    return (
        <div className="form">
            <form >
                <h1>Se connecter</h1>
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Mot de passe" />
                <button type="submit">Se connecter</button>
            </form>
            <p>Vous n'avez pas un compte? <Link to="/signin">S'inscrire</Link> </p>
        </div>
    );
}

export default Login;