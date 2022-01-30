import React, { useState, useEffect, useLayoutEffect } from "react";
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
  console.log(persons);
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
  const delEntryOf = id =>{
    const objToDel = persons.find(p => p.id === id);
    if(window.confirm(`Delete ${objToDel.name}?`)){
      perServ.deleteEntry(id).then(res => 
                setPersons(persons.filter(p => p.id !== id)))
             .catch(err => console.log(err))
    }  
  }

  // %% HELPER FUNCS %%
  function getPeople(){
    perServ.getAll().then(initialPersons => setPersons(initialPersons))
           .catch(err => console.log(err));
  }
  function createNewPerson(){
    const newObj ={ name: newName, number: newNum };
    perServ.create(newObj)
           .then(returnedObj => {
             setPersons(persons.concat(returnedObj));
             setNewName("");
             setNewNum("");
            })
            .catch(err => console.log(err))
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
        delEntryOf={delEntryOf}
      />
    </div>
  );
};

export default App;
