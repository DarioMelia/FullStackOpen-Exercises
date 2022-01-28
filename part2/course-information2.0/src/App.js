import React from "react";

// %%%%% COMPONENTS %%%%%
import Course from "./components/Course";
import Title from "./components/Title";
const App = ({ courses }) => {
  return (
    <>
      <Title text="Web Development Curriculum" />
      {courses.map((course) => {
        return <Course course={course} key={course.id} />;
      })}
    </>
  );
};

export default App;
