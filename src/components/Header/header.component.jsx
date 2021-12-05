import React from "react";
import { Link } from "react-router-dom";

import { BiMoon } from "react-icons/bi";
import { BsMoon } from "react-icons/bs";

import "./header.styles.scss";

const Header = ({ isDark, setIsDark }) => {
  return (
    <header className="header">
      <div className="header__content">
        <Link to={"/"} className="header__title">
          Where in the world ?
        </Link>
        <div
          className="header__darckModeIcon"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? (
            <BiMoon fontSize="24px" color="var(--color-text)" />
          ) : (
            <BsMoon fontSize="24px" color="var(--color-text)" />
          )}
          <p className="header__darkMoodTitle">{`${
            isDark ? "Light Mode" : "Dark Mode"
          }`}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
