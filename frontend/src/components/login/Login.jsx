import "./login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet'


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminCode, setAdminCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/backend/authentification/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            isAdmin,
            adminCode,
            secretKey: process.env.SECRET_KEY,
          }),
        }
      );

      if (response.ok) {
        const { user, token } = await response.json();
        console.log("E-mail récupéré :", token);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", user._id);

        if (isAdmin) {
          if (adminCode === "admin") {
            window.location.replace("/admin");
          } else {
            setErrorMessage("Le code d'accès administrateur est incorrect.");
          }
        } else {
          window.location.replace("/");
        }
      } else {
        setErrorMessage(
          "Votre adresse e-mail, votre mot de passe ou votre statut d'administrateur sont incorrects."
        );
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Une erreur s'est produite lors de la tentative de connexion."
      );
    }
  };

  return (
    <main>
      <div className="container_wrapper">
         <Helmet>
          <title>LNS - Se connecter</title>
          <meta name="description" content="Connecter-vous à votre compte du festival 'Les Nuits Secrètes'" />
      </Helmet>
        <div className="container_login">
          <form onSubmit={handleSubmit}>
            {errorMessage && <p>{errorMessage}</p>}
            <div className="brand-logo"></div>
            <div className="brand-title">Les Nuits Secrètes</div>
            <div className="inputs">
              <label className="label">E-mail</label>
              <input
                className="input"
                type="email"
                placeholder="email@exemple.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="label">Mot de passe</label>
              <input
                className="input"
                type="password"
                placeholder="Minimum de 6 lettres"
                // minLength="6"
                required
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="inputs">
                <label className="label">Administrateur</label>
                <input
                  id="admin"
                  type="checkbox"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                />
              </div>
              {isAdmin && (
                <div>
                  <label className="label">Code d'accès administrateur</label>
                  <input
                    className="input"
                    type="password"
                    placeholder="Code d'accès"
                    minLength="4"
                    required={isAdmin}
                    onChange={(e) => setAdminCode(e.target.value)}
                  />
                </div>
              )}
              <button className="button_login" type="submit">
                SE CONNECTER
              </button>
              <p className="forgot-password">
                Pas encore inscrit ? <Link to="/signup">Créer un compte</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

