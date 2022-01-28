import React from "react";
const NumbersDis = ({ persons }) => {
  const gnrtNums = () =>
    persons.map((person) => <NumberItm key={person.name} person={person} />);
  return (
    <>
      <h2>Numbers</h2>
      {gnrtNums()}
    </>
  );
};
const NumberItm = ({ person }) => <p>{person.name} {person.number}</p>;

export default NumbersDis;
