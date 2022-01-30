import React from "react";
const Form = ({onSubmit, onChange, newNote}) =>{

  
  return(
      <form onSubmit={onSubmit}>
          <input onChange={onChange} value={newNote}></input>
          <button>Add</button>
      </form>
  )
}

export default Form;