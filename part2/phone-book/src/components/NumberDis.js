import React from "react";
const NumbersDis = ({ persons }) => {
  const gnrtNums = () =>
    persons.map((person) => <NumberItm key={person.name} name={person.name} />);
  return (
    <>
      <h2>Numbers</h2>
      {gnrtNums()}
    </>
  );
};
const NumberItm = ({ name }) => <p>{name}</p>;

export default NumbersDis;
