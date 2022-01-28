import React from "react";
// Components
import Langs from "./Langs";
const Country = ({country})=>{
    console.log('country', country)
    const{name,capital,population,languages,flags} = country;
    
    return(<>
        <h1>{name}</h1>
        <p><strong>capital</strong> {capital}</p>
        <p><strong>population</strong> {population}</p>
        <Langs languages={languages}/>
        <br></br>
        <Flag src={flags.png} name={name}/>

        </>)
}

const Flag = ({src,name}) => <img src={src} alt={`${name} flag`}/>;
export default Country;