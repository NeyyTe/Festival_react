import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Fonction de connexion pour un utilisateur admin
  const loginAsAdmin = () => {
    setIsLoggedIn(true);
    setIsAdmin(true);
  };

  // Fonction de déconnexion
  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, loginAsAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
