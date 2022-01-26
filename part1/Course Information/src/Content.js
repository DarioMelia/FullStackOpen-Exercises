import Part from "./Part.js";

const Content = (prompts) => (
  <>
    <Part part={prompts.part1.name} exercises={prompts.part1.exercises} />
    <Part part={prompts.part2.name} exercises={prompts.part2.exercises} />
    <Part part={prompts.part3.name} exercises={prompts.part3.exercises} />
  </>
);

export default Content;
