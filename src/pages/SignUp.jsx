import React, { useState, useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { loggedInUserContext } from "../components/App";
import PrimaryButton from "../components/primary-button/PrimaryButton";
import "react-toastify/dist/ReactToastify.min.css";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [CIN, setCIN] = useState("");
  const [loggedInUser, setLoggedInUser] = useContext(loggedInUserContext);

  const signedUpUsers = [
    {
      firstName: "Salman",
      lastName: "Hamdouchi",
      email: "salman@gmail.com",
      password: "transfy22",
      CIN: "SA11111",
    },
  ];

  localStorage.setItem("signedUpUsers", JSON.stringify(signedUpUsers));

  const submit = (e) => {
    e.preventDefault();

    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      CIN: CIN,
    };

    signedUpUsers.push(user);
    localStorage.setItem("signedUpUsers", JSON.stringify(signedUpUsers));

    // toast.success("Votre compte a été créé avec succes!", {
    //   autoClose: 2000,
    // });

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setLoggedInUser(user);
  };

  return (
    <div className='form'>
      <form onSubmit={(e) => submit(e)}>
        <h1>Créer un compte</h1>
        <div className='input-group'>
          <input
            value={lastName}
            type='text'
            placeholder='Nom'
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className='input-group'>
          <input
            value={firstName}
            type='text'
            placeholder='Prénom'
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className='input-group'>
          <input
            value={CIN}
            type='text'
            placeholder='Numéro CIN'
            onChange={(e) => setCIN(e.target.value)}
          />
        </div>

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
          <p className='input-info'>
            Au moins 8 caractères, y compris des chiffres et des lettres{" "}
          </p>
        </div>
        <PrimaryButton label="S'inscrire" marginTop='15'></PrimaryButton>
      </form>
      <p>
        Avez-vous dèja un compte? <Link to='/login'>Se connecter</Link>{" "}
      </p>
    </div>
  );
}

export default SignUp;
