import React from "react";
import { Link } from "react-router-dom";

import { formatNumber } from "../../pages/Country-Page/country-page.component";

import "./cards.styles.scss";

const Cards = ({ name, population, region, capital, flag }) => {
  return (
    <div className="Card">
      <Link to={`/countries/${name}`} className="Card__link">
        <div className="Card__top">
          <img className="Card__image" src={flag} alt={name} loading="lazy" />
        </div>
        <div className="Card__bottom">
          <p className="Card__name">{name}</p>
          <p className="Card__population">
            <span className="Card__label">Population:</span>{" "}
            {formatNumber(population) || "Unknown"}
          </p>
          <p className="Card__region">
            <span className="Card__label">Region:</span> {region}
          </p>
          <p className="Card__capital">
            <span className="Card__label">Capital:</span> {capital || "Unknown"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
