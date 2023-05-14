import "./signup.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [ConfirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

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
      const response = await axios.post(
        "http://localhost:5000/backend/authentification/register",
        {
          fname,
          email,
          lname,
          password,
        }
      );

      // if (response.ok) {
      //   window.location.replace("/"); // Remplacez /login par l'URL de redirection souhaitée après l'inscription réussie
      // }
      if (response.ok) {
        navigate("/") // Remplacez /login par l'URL de redirection souhaitée après l'inscription réussie
      }
    } catch (error) {
      console.error(error);
      setError(true);
      setErrorMessage("Une erreur s'est produite lors de l'inscription.");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Inscrivez-vous</h3>

          <div className="input_wrapper">
            <label>Prénom</label>
            <input
              type="text"
              placeholder="Entrez votre prénom.."
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="input_wrapper">
            <label>Nom</label>
            <input
              type="text"
              placeholder="Entrez votre nom.."
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="input_wrapper">
            <label>Adresse E-mail</label>
            <input
              type="email"
              placeholder="Entrez votre e-mail.."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_wrapper">
            <label>Confirmer l'adresse mail</label>
            <input
              value={ConfirmEmail}
              type="email"
              placeholder="Entrez votre e-mail.."
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
          </div>

          <div className="input_wrapper">
            <label>Mot de passe</label>
            <input
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
          <p className="forgot-password">
            Déjà inscrit ? <Link to="/login">Se connecter </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
