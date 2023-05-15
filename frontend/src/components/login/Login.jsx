import "./login.css";
import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          }),
        }
      );

      if (response.ok) {
        const { user, token } = await response.json();
        localStorage.setItem("token", token);
        localStorage.setItem("userId", user._id);
        window.location.replace("/"); // Remplacez /login par l'URL de redirection souhaitée après l'inscription réussie
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Votre adresse e-mail ou votre mot de passe sont incorrects."
      );
    }
  };

  return (
    <div className="container_wrapper">
      <div class="container_login">
        <form onSubmit={handleSubmit}>
          {errorMessage && <p>{errorMessage}</p>}
          <div class="brand-logo"></div>
          <div class="brand-title">Les Nuits Secrètes</div>
          <div class="inputs">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="email@exemple.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Mot de passe</label>
            <input
              type="password"
              placeholder="Minimum de 6 lettres"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button class="button_login" type="submit">
              SE CONNECTER
            </button>
            <p className="forgot-password">
              Pas encore inscrit ? <Link to="/signup">Créer un compte </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
