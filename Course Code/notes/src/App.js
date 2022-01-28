import React, { useState, useEffect } from "react";
import axios from 'axios';

import Note from "./components/Note";
import Form from "./components/Form";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("This is a note");
  const [showAll, setShowAll] = useState(true);

  useEffect(getNotes, []);
  
  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  const generateNotes = () =>
    notesToShow.map((note) => <Note text={note.content} key={note.id} />);
  const onChange = (e) => setNewNote(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    setNotes(notes.concat(newNoteObj()));
  };

  function newNoteObj() {
    return {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
    };
  }

  function getNotes(){
    axios
      .get('http://localhost:3001/notes')
      .then(res =>setNotes(res.data));
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>show {showAll?"important":"all"}</button>
      </div>
      <ul>{generateNotes()}</ul>
      <Form onChange={onChange} onSubmit={onSubmit} newNote={newNote} />
    </div>
  );
};

// COMPONENTS

export default App;
