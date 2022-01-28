import React, {useState, useEffect} from "react";
import axios from "axios";
// Components
import Countries from "./components/Countries";
function App() {
  const[filter, setFilter] = useState("");
  const[countries, setCountries] = useState([]);

  let cntrToShow = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  useEffect(getCountries,[]);
  // ---- EVENT HANDLERS ----
  const onChange = e => setFilter(e.target.value); 
  // API
  function getCountries(){
    axios.get("https://restcountries.com/v2/all")
         .then(res=>setCountries(res.data))
  }
  return (
    <>
      <Filter onChange={onChange} value={filter}></Filter>
      <Countries countries={cntrToShow} filter={filter}/>
    </>
  );
}

const Filter = ({onChange, value}) => <>find countries<input onChange={onChange} value={value} /></>

export default App;
