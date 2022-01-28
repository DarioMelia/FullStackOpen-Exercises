import React from "react";

import Part from "./Part";

const Content = ({ parts }) => {
  const gnrtParts = () => {
   return parts.map((part) => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ));
  };
  return <div>{gnrtParts()}</div>;
};

export default Content;
