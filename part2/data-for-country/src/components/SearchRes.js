import React from "react";
const SearchRes = ({onClick, country}) =>(<>
     <br/>
     <span>{country.name}</span>
     <button data-id={country.alpha2Code} onClick={onClick}>show</button>
</>)
export default SearchRes;