import React from "react";
const NumbersDis = ({ persons, filter, onFilterChange }) => {
  const gnrtNums = () =>
    persons.map((person) => <NumberItm key={person.name} person={person} />);
    
  return (
    <>
      <h2>Numbers</h2>
      <Filter type={"name"} filter={filter} onFilterChange={onFilterChange}></Filter>
      {gnrtNums()}
    </>
  );
};
const NumberItm = ({ person }) => <p>{person.name} {person.number}</p>;
const Filter = ({type, filter, onFilterChange}) => <>filter by {type}: <input value={filter} onChange={onFilterChange}/></>

export default NumbersDis;
