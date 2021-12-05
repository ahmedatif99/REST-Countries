import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import "./country-page.styles.scss";

export const formatNumber = (number) => {
  return new Intl.NumberFormat().format(number);
};

const Country = ({ countries }) => {
  const [country, setCountry] = useState([]);
  const history = useHistory();
  const { name } = useParams();

  const fetchCountryData = async () => {
    const res = await fetch(`https://restcountries.com/v2/name/${name}`);
    const country = await res.json();
    setCountry(country[0]);
    console.log(country[0]);
  };

  useEffect(() => {
    fetchCountryData();
  }, [countries]);

  const goBack = () => history.push("/");

  return (
    <div className="Country">
      <div className="Country__content">
        <div className="Country__backButton" onClick={goBack}>
          <BiArrowBack size={30} color={"var(--color-text)"} />
          <p className="Country__backButtonLabel">Back</p>
        </div>
        <div className="Country__detailsContent">
          <div className="Country__img">
            <img src={country.flag} alt={country.name} />
          </div>
          <div className="Country__details">
            <p className="Country__name">{country.name}</p>
            <div className="Country__moreDetails">
              <div>
                <p>
                  Native Name:
                  <span className="Country__detailsValue">
                    {country.nativeName}
                  </span>
                </p>
                <p>
                  Population:
                  <span className="Country__detailsValue">
                    {formatNumber(country.population)}
                  </span>
                </p>
                <p>
                  Region:
                  <span className="Country__detailsValue">
                    {country.region}
                  </span>
                </p>
                <p>
                  Sub Region:
                  <span className="Country__detailsValue">
                    {country.subregion}
                  </span>
                </p>
                <p>
                  Capital:
                  <span className="Country__detailsValue">
                    {country.name === "Palestine, State of"
                      ? (country.capital = "Jerusalem")
                      : country.capital}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Top Level Domain:
                  <span className="Country__detailsValue">
                    {country.topLevelDomain}
                  </span>
                </p>
                <p>
                  Currencies:
                  <span className="Country__detailsValue">
                    {country.currencies ? country.currencies[0].code : " "}
                    <span style={{ fontSize: "22px", fontWeight: "bold" }}>
                      ,{" "}
                      {country.currencies ? country.currencies[0].symbol : " "}
                    </span>
                  </span>
                </p>
                <p>
                  Languages:
                  <span className="Country__detailsValue">
                    {country.languages
                      ? country.languages.map((item, index) => (
                          <span key={index}>,{item.name}</span>
                        ))
                      : " "}
                  </span>
                </p>
              </div>
            </div>
            {country.borders ? (
              <div className="Country__bordersContent">
                <p className="Country__borderLabel">Border Countries:</p>
                <div className="Country__bordersBackGround">
                  <div className="Country__borders">
                    {country.borders.map((item, index) => (
                      <span className="Country__borderValue" key={index}>
                        {item === "ISR" ? (item = "Fuck") : item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              "Not Borders Available"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
