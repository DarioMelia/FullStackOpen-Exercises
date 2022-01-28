import React from "react";
const Form = ({onSubmit,onChange, newName, newNum})=>(
    <form onSubmit={onSubmit}>
    <div>
      name: <input type="text" onChange={onChange} value={newName}/>
      number: <input type="number" onChange={onChange} value={newNum}/>
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);
export default Form;