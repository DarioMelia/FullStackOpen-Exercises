import React from "react";

import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => {
  const gnrtParts = () => {
   return parts.map((part) => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ));
  };
  const allEx =parts.map((part)=>part.exercises).reduce((sum,cur) => sum + cur);
  return (
  <>
  <div>{gnrtParts()}</div>
  <Total allEx={allEx}/>
  </>
  );
};

export default Content;
