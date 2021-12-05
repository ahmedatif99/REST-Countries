import React, { useState, useEffect } from "react";

import Cards from "../Cards/cards.component";
import EmptySearch from "../Empty-Search/empty-search.component";
import { filterByRegion } from "../Search/search.component";
import { filterByName } from "../Search/search.component";
import { DROPDOWN_OPTIONS } from "../Search/search.component";

import "./countries.styles.scss";

const Countries = ({ countriesArray, searchInput, selectedRegion }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const fetchCountriesData = async () => {
    const res = await fetch(`https://restcountries.com/v2/all`);
    const countries = await res.json();

    setCountries(countries);
    setFilteredCountries(countries);
    setFilteredCountries(filterByName(searchInput, countries));

    if (selectedRegion.value !== DROPDOWN_OPTIONS[0].value) {
      setFilteredCountries(filterByRegion(selectedRegion, countries));
      setCountries(filterByRegion(selectedRegion, countries));
    }

    console.log(filteredCountries);
  };

  //Fetchin all countries data
  useEffect(() => {
    fetchCountriesData();
  }, [])

  //Fetchin countries data whene select region
  useEffect(() => {
    fetchCountriesData();
  }, [selectedRegion])

  //Fetchin countries data whene fill Search input
  useEffect(() => {
    setFilteredCountries(filterByName(searchInput, countries));
  }, [searchInput, selectedRegion]);

  return (
    <div>
      <div className="Countries">
        {filteredCountries.length ? (
          <div className="Countries__content">
            {filteredCountries.map((country) => {
              const { name, population, region, capital, flag, numericCode } =
                country;
              return (
                <Cards
                  key={numericCode}
                  name={name}
                  population={population}
                  region={region}
                  capital={capital === "Ramallah" ? "Jerusalem" : capital}
                  flag={flag}
                />
              );
            })}
          </div>
        ) : (
          <EmptySearch />
        )}
      </div>
    </div>
  );
};

export default Countries;
