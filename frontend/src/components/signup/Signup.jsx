// import "./signup.css";
// import React, { useState } from "react";

// export default function Signup() {
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [userType, setUserType] = useState("");
//   const [secretKey, setSecretKey] = useState("");

//   const handleSubmit = async (e) =>  {
//     if (userType === "Admin" && secretKey !== "max") {
//       e.preventDefault();
//       alert("Admin incorrect, vous êtes un imposteur !");
//     } else {
//       e.preventDefault();

//       // console.log(fname, lname, email, password);
//       try {
//         const res = await fetch("http://localhost:5000/register", {
//           method: "POST",
//           crossDomain: true,
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//             // "Access-Control-Allow-Origin": "*",
//           },
//           body: JSON.stringify({
//             fname,
//             email,
//             lname,
//             password,
//             userType,
//           }),
//         });
//         console.log(res)
//         const data = await res.json();
//         console.log(data, "userRegister");

//         if (data.status === "ok") {
//           alert("Inscription réussie");
//         } else {
//           alert("Quelque chose s'est mal passé");
//         }

//       } catch (error) {
//         console.error("Erreur lors de l'inscription :", error);
//         alert("Une erreur s'est produite lors de l'inscription.");
//       }
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form onSubmit={handleSubmit}>
//           <h3>Inscrivez-vous</h3>
//           <div>
//             S'enregister comme
//             <input
//               type="radio"
//               name="UserType"
//               value="User"
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             Utilisateur
//             <input
//               type="radio"
//               name="UserType"
//               value="Admin"
//               onChange={(e) => setUserType(e.target.value)}
//             />
//             Admin
//           </div>
//           {userType === "Admin" ? (
//             <div className="input_wrapper">
//               <label>Secret Key</label>
//               <input
//                 type="text"
//                 placeholder="Secret Key"
//                 onChange={(e) => setSecretKey(e.target.value)}
//               />
//             </div>
//           ) : null}

//           <div className="input_wrapper">
//             <label>Prénom</label>
//             <input
//               type="text"
//               placeholder="Entrez votre prénom.."
//               onChange={(e) => setFname(e.target.value)}
//             />
//           </div>

//           <div className="input_wrapper">
//             <label>Nom</label>
//             <input
//               type="text"
//               placeholder="Entrez votre nom.."
//               onChange={(e) => setLname(e.target.value)}
//             />
//           </div>

//           <div className="input_wrapper">
//             <label>Adresse E-mail</label>
//             <input
//               type="email"
//               placeholder="Entrez votre e-mail.."
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="input_wrapper">
//             <label>Mot de passe</label>
//             <input
//               type="password"
//               placeholder="Entrez votre mot de passe.."
//               onChange={(e) => setPassword(e.target.value)} />
//               </div>

//               <div className="submit_wrapper">
//                 <button type="submit" className="btn">
//                   S'inscrire
//                 </button>
//               </div>
//               <p className="forgot-password">
//                 Déjà inscrit ? <a href="/sign-in">Se connecter</a>
//               </p>
//             </form>
//           </div>
//         </div>
//       );
//     }

import "./signup.css";
import React, { useState } from "react";

export default function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [ConfirmEmail,setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setErrorMessage("");

if(email!==ConfirmEmail){
  setError(true);
  setErrorMessage("L'email n'est pas identique");
  return
}
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
        }),
      });

      if (response.ok) {
        window.location.replace("/"); // Remplacez /login par l'URL de redirection souhaitée après l'inscription réussie
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
            Déjà inscrit ? <a href="/sign-in">Se connecter</a>
          </p>
        </form>
      </div>
    </div>
  );
}
