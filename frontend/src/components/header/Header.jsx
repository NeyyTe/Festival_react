import React, { useEffect } from "react";
import "./header.css";
import "../media_query/MediaQuery.css";
import { NavLink, Link } from "react-router-dom";
// Icone Account
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// Menu Hamburger icons
import FormatAlignRightTwoToneIcon from "@mui/icons-material/FormatAlignRightTwoTone";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
//Menu icons navbar pour responsive
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone"; //Accueil
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone"; //Artistes
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone"; //Infos
import DiscountTwoToneIcon from "@mui/icons-material/DiscountTwoTone"; // Tickets

function Header() {

  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.replace("/");
  };

  useEffect(() => {
    const container = document.querySelector(".header");

    if (container) {
      const menu = document.querySelector(".menu");
      const items = document.querySelectorAll(".nav_links ul li");

      const handleClick = () => {
        Array.from(menu.children).forEach((icon) =>
          icon.classList.toggle("active")
        );
        items.forEach((item) => item.classList.toggle("active"));
      };

      menu.addEventListener("click", handleClick);

      return () => {
        menu.removeEventListener("click", handleClick);
      };
    }
  }, []);
  return (
    <>
      <header className="header">
        <nav className="nav_links">
          <ul>
            <li>
              <NavLink to="/" aria-current="page">
                <span className="span_links">Accueil</span>{" "}
                <span className="icons">
                  <HomeTwoToneIcon fontSize="large" />
                </span>
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/artistes">
                <span className="span_links">Artistes</span>{" "}
                <span className="icons">
                  <PeopleAltTwoToneIcon fontSize="large" />
                </span>
              </NavLink>
            </li>
            
            <li>
              <NavLink to="/faq">
                <span className="span_links">FAQ</span>{" "}
                <span className="icons">
                  <InfoTwoToneIcon fontSize="large" />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/tickets">
                <span className="span_links">Tickets</span>
                <span className="icons">
                  <DiscountTwoToneIcon fontSize="large" />
                </span>
              </NavLink>
            </li>

            {isLoggedIn && (
              <li>
                <Link onClick={handleLogout}>Deconnexion</Link>
              </li>
            )}

            {!isLoggedIn && (
              <li>
                <NavLink to="/login">
                  <span className="span_links">Mon compte</span>
                  <span className="icons">
                    <AccountCircleIcon fontSize="large" />
                  </span>
                </NavLink>
              </li>
            )}
          </ul>

          <div className="menu">
            <span className="hamburger active">
              <FormatAlignRightTwoToneIcon fontSize="large" />
            </span>
            <span className="close">
              <CancelTwoToneIcon fontSize="large" />
            </span>
          </div>
        </nav>
     
      </header>
    </>
  );
}

export default Header;
