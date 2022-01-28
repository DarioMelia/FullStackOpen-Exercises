import React, { useState } from 'react'

// %%% COMPONENTS %%%
import Form from "./components/Form";
import NumbersDis from "./components/NumberDis";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  
  const onChange = e => setNewName(e.target.value);
  const onSubmit = e =>{
    e.preventDefault();
    setPersons(persons.concat({name:newName}));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Form onSubmit={onSubmit} onChange={onChange} newName={newName}/>
      <NumbersDis persons={persons}/>
      
    </div>
  )
}

export default App