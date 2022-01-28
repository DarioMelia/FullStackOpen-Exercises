import React from "react";
const NumbersDis = ({ persons, filter, onFilterChange }) => {
  const gnrtNums = () =>
    persons.map((person) => <NumberItm key={person.name} person={person} />);
  return (
    <>
      <h2>Numbers</h2>
      filter by name: <input value={filter} onChange={onFilterChange}/>
      {gnrtNums()}
    </>
  );
};
const NumberItm = ({ person }) => <p>{person.name} {person.number}</p>;

export default NumbersDis;
