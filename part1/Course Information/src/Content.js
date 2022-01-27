import Part from "./Part.js";

const Content = (prompts) => {
  const [p1, p2, p3] = prompts.parts;
  return (
    <>
      <Part part={p1.name} exercises={p1.exercises} />
      <Part part={p2.name} exercises={p2.exercises} />
      <Part part={p3.name} exercises={p3.exercises} />
    </>
  );
};

export default Content;
