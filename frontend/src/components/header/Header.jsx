import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// Menu Hamburger icons
import FormatAlignRightTwoToneIcon from '@mui/icons-material/FormatAlignRightTwoTone';
import CancelTwoToneIcon from '@mui/icons-material/CancelTwoTone';
//Menu icons navbar pour responsive 
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone'; //Accueil
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone'; //Artistes
import BrowseGalleryTwoToneIcon from '@mui/icons-material/BrowseGalleryTwoTone'; //Programmation
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone'; //Infos
import DiscountTwoToneIcon from '@mui/icons-material/DiscountTwoTone';// Tickets


function Header() {
  return (
  <>
  <header className="header">


<nav className="nav_links">
    <ul>
        <li><NavLink to ="/" aria-current="page"><span className="span_links">Accueil</span> <span className="icons" ><HomeTwoToneIcon fontSize="large"/></span></NavLink> </li>
        <li><NavLink to ="/artistes"><span className="span_links">Artistes</span> <span className="icons"><PeopleAltTwoToneIcon fontSize="large"/></span></NavLink></li>
        <li><NavLink to ="/programmation"><span className="span_links">Programmation </span><span className="icons"><BrowseGalleryTwoToneIcon fontSize="large"/></span></NavLink> </li>
        <li><NavLink to ="/infos"><span className="span_links">Infos</span>  <span className="icons"><InfoTwoToneIcon fontSize="large"/></span></NavLink ></li>
        <li><NavLink to ="/tickets"><span className="span_links">Tickets</span><span className="icons">
          <DiscountTwoToneIcon fontSize="large"/>
        </span></NavLink></li>
        <li><NavLink to ="/signup"><AccountCircleIcon fontSize="large"/></NavLink></li>
     </ul>

     <div className="menu">
  <span className="hamburger active"><FormatAlignRightTwoToneIcon fontSize="large"/></span>
  <span className="close"><CancelTwoToneIcon fontSize="large"/></span>
  </div>


</nav>
{/* <!-- <a href="#" class="cta_tickets">Tickets</a> --> */}
</header>

  
  </>
  )
}

export default Header