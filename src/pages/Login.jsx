import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { loggedInUserContext } from "../components/App";
import PrimaryButton from "../components/primary-button/PrimaryButton";
import "react-toastify/dist/ReactToastify.min.css";

function Login() {
  const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();

    let signedUpUsers = JSON.parse(localStorage.getItem("signedUpUsers"));
    for (let i = 0; i < signedUpUsers.length; i++) {
      if (
        signedUpUsers[i].email === email &&
        signedUpUsers[i].password === password
      ) {
        localStorage.setItem("loggedInUser", JSON.stringify(signedUpUsers[i]));
        setLoggedInUser(signedUpUsers[i]);
        toast.success("Vous êtes connecté!", {
          autoClose: 1200,
          onClose: () => history.push("/"),
        });
        break;
      }
    }
  };

  return (
    <div className='form'>
      <form onSubmit={(e) => submit(e)}>
        <h1>Se connecter</h1>
        <div className='input-group'>
          <input
            value={email}
            type='email'
            placeholder='E-mail'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input-group'>
          <input
            value={password}
            type='password'
            placeholder='Mot de passe'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <PrimaryButton label="S'authentifier" marginTop='15'></PrimaryButton>
      </form>
      <p>
        Vous n'avez pas un compte? <Link to='/signup'>S'inscrire</Link>
      </p>
    </div>
  );
}

export default Login;
