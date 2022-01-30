import React, { useState, useEffect } from "react";
import axios from "axios";

// %%% API %%%
import perServ from "./services/persons";

// %%% COMPONENTS %%%
import Form from "./components/Form";
import NumbersDis from "./components/NumberDis";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(getPeople,[])
  
  let numsToShow = persons.filter((num) =>num.name.toLowerCase().includes(filter.toLowerCase()));

  // %% EVENT HANDLERS %%
  const onChange = (e) =>
    e.target.type === "text"
      ? setNewName(e.target.value)
      : setNewNum(e.target.value);
  const onFilterChange = (e) => setFilter(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    nameExists()
      ? alert(`${newName} is already added to the phone book`)
      : createNewPerson();
  };

  // %% HELPER FUNCS %%
  function getPeople(){
    perServ.getAll().then(initialPersons => setPersons(initialPersons));
  }
  function createNewPerson(){
    const newObj ={ name: newName, number: newNum };
    perServ.create(newObj)
           .then(returnedObj => {
             setPersons(persons.concat(returnedObj))});
             setNewName("");
             setNewNum("");
  }
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
