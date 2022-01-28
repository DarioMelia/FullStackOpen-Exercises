import React, { useState } from 'react'

// %%% COMPONENTS %%%
import Form from "./components/Form";
import NumbersDis from "./components/NumberDis";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  
  const onChange = e => e.target.type === "text"?setNewName(e.target.value):setNewNum(e.target.value);
    
  
  const onSubmit = e =>{
    e.preventDefault();
    nameExists()
      ?alert(`${newName} is already added to the phone book`)
      :setPersons(persons.concat({name:newName,number:newNum}));
  }
  const nameExists = ()=> persons.find(el => el.name === newName);
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Form onSubmit={onSubmit} onChange={onChange} newName={newName} newNum={newNum}/>
      <NumbersDis persons={persons}/>
    </div>
  )
}

export default App