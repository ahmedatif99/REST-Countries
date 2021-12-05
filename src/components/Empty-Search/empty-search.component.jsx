import React from "react";

import WorldMap from "./world-map.png";

const EmptySearch = ({ isLoading }) => {
  return (
    <div className="Countries__emptyData">
      <img className="Countries__emptyImage" src={WorldMap} alt="world map" />
      {!isLoading ? (
        <p className="Countries__emptyText">No Results Found!</p>
      ) : (
        <p className="Countries__emptyText">Loading...</p>
      )}
    </div>
  );
};

export default EmptySearch;
