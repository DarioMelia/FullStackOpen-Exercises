import React, { useState } from "react";

// %%% COMPONENTS %%%
import Form from "./components/Form";
import NumbersDis from "./components/NumberDis";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filter, setFilter] = useState("");

  let numsToShow = persons.filter((num) =>
    num.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onChange = (e) =>
    e.target.type === "text"
      ? setNewName(e.target.value)
      : setNewNum(e.target.value);
  const onFilterChange = (e) => setFilter(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    nameExists()
      ? alert(`${newName} is already added to the phone book`)
      : setPersons(persons.concat({ name: newName, number: newNum }));
  };
  const nameExists = () => persons.find((el) => el.name === newName);

  return (
    <div>
      <h2>Phonebook</h2>
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        newName={newName}
        newNum={newNum}
      />
      <NumbersDis
        persons={numsToShow}
        filter={filter}
        onFilterChange={onFilterChange}
      />
    </div>
  );
};

export default App;
