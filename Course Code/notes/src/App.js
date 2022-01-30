import React, { useState, useEffect } from "react";
import noteService from './services/notes';
import "./index.css";

// %% COMPONENTS %%
import Note from "./components/Note";
import Form from "./components/Form";
import ErrorNot from "./components/ErrorNot";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("This is a note");
  const [showAll, setShowAll] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  useEffect(()=>noteService.getAll().then(initalNotes =>setNotes(initalNotes)), []);
  
  const notesToShow = showAll ? notes : notes.filter(note => note.important);
  
  // %% EVENT HANDLERS %%
  const toggleImportanceOf = id =>{
    const note = notes.find(n => n.id === id);
    const changedNote = {...note, important: !note.important};

    noteService.update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(err => {
        console.log(err);
        setErrMsg(`The note "${note.content}" was already deleted from the server`);
        setTimeout(() => {
          setErrMsg(null)
        }, 5000)
        setNotes(notes.filter(n => n.id !== id));
      })
  }
  const onChange = (e) => setNewNote(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    noteService.create(newNoteObj()).then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote("")
    })};

  // %% HELPER FUNCS %%
  function generateNotes(){
  return notesToShow.map((note) => 
  <Note note={note} toggleImportance={() => toggleImportanceOf(note.id)} key={note.id} />
  )};
  
  function newNoteObj() {
    return {
      content: newNote,
      date: new Date().toISOString(),
      important: false,
    };
  }


  return (
    <div>
      <h1>Notes</h1>
      <ErrorNot msg={errMsg}/>
      <div>
        <button onClick={() => setShowAll(!showAll)}>show {showAll?"important":"all"}</button>
      </div>
      <ul>{generateNotes()}</ul>
      <Form onChange={onChange} onSubmit={onSubmit} newNote={newNote} />
      <Footer/>
    </div>
  );
};

// COMPONENTS
const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2021</em>
    </div>
  )
}
export default App;
