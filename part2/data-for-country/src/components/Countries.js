import React from "react";
// Components
import Country from "./Country";
import SearchRes from "./SearchRes";
const Countries = ({ countries, showCountryInfo }) => {
  const grtCountries = () => {
    return countries.map((country) => (
      <SearchRes key={country.alpha3Code} onClick={showCountryInfo} country={country}/>
    ));
  };

  if (countries.length > 10)
    return <h4>Too many matches, please be more specific</h4>;
  if (countries.length === 1) return <Country country={countries[0]} />;
  return <>{grtCountries()}</>;
};
export default Countries;
