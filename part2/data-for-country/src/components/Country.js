import React from "react";
// Components
import Langs from "./Langs";
import Weather from "./Weather";
import Stat from "./Stat";
const Country = ({country})=>{
    const{name,capital,population,languages,flags} = country;
    
    return(<>
        <h1>{name}</h1>
        <Stat label="capital" text={capital}/>
        <br/>
        <Stat label="population" text={population}/>
        <Langs languages={languages}/>
        <br></br>
        <Flag src={flags.png} name={name}/>
        <Weather city={capital}/>

        </>)
}

const Flag = ({src,name}) => <img src={src} alt={`${name} flag`}/>;
export default Country;