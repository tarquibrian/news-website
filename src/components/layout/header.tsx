import React from "react";
import logo from "../../images/logo.png";
import Image from "next/image";
import ToggleIcon from "../icons/toggle";
import MenuIcon from "../icons/menu";
import { useAppContext } from "@/context/app.context";
import { useTheme } from "next-themes";

const Header = () => {
  const { state, toggleTheme } = useAppContext();
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log({ theme, systemTheme });

  return (
    <header
      className={`${state.theme === "dark" ? "theme-dark" : "theme-dark"}`}
    >
      <nav className="nav__container">
        <div className="nav__container-logo">
          <Image src={logo} alt="image logo" className=""></Image>
          <span className="">News Website</span>
        </div>
        <div className="nav__container-options">
          <span className="contact">Contact Now</span>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="icon"
          >
            <ToggleIcon />
          </button>
          <span className="menu">
            <MenuIcon />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
