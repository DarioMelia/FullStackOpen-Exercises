import React from "react";
// Components
import Country from "./Country";
const Countries = ({countries}) =>{
    const grtCountries = () =>{
        return countries.map(country => <h4 key={country.alpha3Code}>{country.name}</h4>)
    }

    if(countries.length > 10) return <h4>Too many matches, please be more specific</h4>
    if(countries.length===1) return <Country country={countries[0]}/>;
    return <>{grtCountries()}</> 
       
}
export default Countries;