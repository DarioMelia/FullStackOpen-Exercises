import React from "react";
const Form = ({onSubmit,onChange, newName})=>(
    <form onSubmit={onSubmit}>
    <div>
      name: <input onChange={onChange} value={newName}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);
export default Form;