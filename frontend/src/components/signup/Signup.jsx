import "./signup.css";
import React, { useState } from "react";
import {Helmet} from 'react-helmet'

export default function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [ConfirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setErrorMessage("");

    if (email !== ConfirmEmail) {
      setError(true);
      setErrorMessage("L'email n'est pas identique");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/backend/authentification/register",
        {
      method : 'POST',
      headers :{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        fname,
        lname,
        email,
        password,
      }),
      });



      if (response.ok) {
        window.location.href = "/login"; // Remplacez /login par l'URL de redirection souhaitée après inscription réussie
      }

    } catch (error) {
      console.error(error);
      setError(true);
      setErrorMessage("Une erreur s'est produite lors de l'inscription.");
    }
  };

  return (<>
       <Helmet>
        <title>LNS - S'inscrire</title>
        <meta name="description" content="Inscrivez-vous et créer un compte 'Les Nuits Secrètes' " />
    </Helmet>
    
    <main>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Inscrivez-vous</h3>
            <div className="input_wrapper">
              <label className="label">Prénom</label>
              <input className="input"
                type="text"
                placeholder="Entrez votre prénom.."
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="input_wrapper">
              <label className="label">Nom</label>
              <input className="input"
                type="text"
                placeholder="Entrez votre nom.."
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div className="input_wrapper">
              <label className="label">Adresse E-mail</label>
              <input className="input"
                type="email"
                placeholder="Entrez votre e-mail.."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_wrapper">
              <label className="label">Confirmer l'adresse mail</label>
              <input className="input"
                value={ConfirmEmail}
                type="email"
                placeholder="Entrez votre e-mail.."
                onChange={(e) => setConfirmEmail(e.target.value)}
              />
            </div>
            <div className="input_wrapper">
              <label className="label">Mot de passe</label>
              <input className="input"
                type="password"
                placeholder="Entrez votre mot de passe.."
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="submit_wrapper">
              <button type="submit" className="btn">
                S'inscrire
              </button>
              {error && (
                <span style={{ color: "red", marginTop: "10px" }}>
                  {errorMessage}
                </span>
              )}
            </div>
      
          </form>
        </div>
      </div>
    </main>
    </>
  );
}
