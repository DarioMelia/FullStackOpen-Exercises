import React, {useState, useEffect} from "react";
import axios from "axios";
// Components
import Countries from "./components/Countries";
function App() {
  const[filter, setFilter] = useState("");
  const[countries, setCountries] = useState([]);

  var cntrToShow = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  useEffect(getCountries,[]);
  // ---- EVENT HANDLERS ----
  const onChange = e => setFilter(e.target.value); 
  const showCountryInfo = e => {
    const country = cntrToShow.find(country => country.alpha2Code === e.target.getAttribute("data-id"));
    setFilter(country.name);
  }

  // API
  function getCountries(){
    axios.get("https://restcountries.com/v2/all")
         .then(res=>setCountries(res.data))
  }
  return (
    <>
      <Filter onChange={onChange} value={filter}></Filter>
      <Countries countries={cntrToShow} showCountryInfo={showCountryInfo}/>
    </>
  );
}

const Filter = ({onChange, value}) => <>find countries<input onChange={onChange} value={value} /></>

export default App;
