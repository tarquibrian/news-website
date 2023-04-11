import React from "react";
import logo from "../../images/logo.png";
import Image from "next/image";
import ToggleIcon from "../icons/toggle";

const Header = () => {
  return (
    <header className="header__section">
      <nav className="nav__container">
        <div className="nav__container-logo">
          <Image src={logo} alt="image logo" className=""></Image>
          <span className="">News Website</span>
        </div>
        <div className="nav__container-options">
          <span className="contact">Contact Now</span>
          <span className="icon">
            <ToggleIcon />
          </span>
          <span className="menu">Circle</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
