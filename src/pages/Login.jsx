import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import PrimaryButton from "../components/primary-button/PrimaryButton";

function Login() {
  return (
    <div className='form'>
      <form>
        <h1>Se connecter</h1>
        <input type='text' placeholder='E-mail' />
        <input type='password' placeholder='Mot de passe' />
        <PrimaryButton label="S'authentifier" marginTop='15'></PrimaryButton>
      </form>
      <p>
        Vous n'avez pas un compte? <Link to='/signup'>S'inscrire</Link>
      </p>
    </div>
  );
}

export default Login;
