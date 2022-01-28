import React from "react";
const Langs = ({languages})=>{
    const grtList = () =>
        languages.map(lang => <li key={lang.iso639_2}>{lang.name}</li>)
    
    return(<>
        <h2>Spoken languages</h2>
        {grtList()}
    </>)
}
export default Langs;
