import React, { useState } from "react";

import Search from "../../components/Search/search.component";
import Countries from "../../components/Countries/countries.component";
import { DROPDOWN_OPTIONS } from "../../components/Search/search.component";

const Home = ({ countries }) => {
  const [selectedRegion, setSelectedRegion] = useState(DROPDOWN_OPTIONS[0]);
  const [searchInput, setSearchInput] = useState("");
  return (
    <React.Fragment>
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSelectedRegion={setSelectedRegion}
      />

      <Countries
        countriesArray={countries}
        searchInput={searchInput}
        selectedRegion={selectedRegion}
      />
    </React.Fragment>
  );
};

export default Home;
