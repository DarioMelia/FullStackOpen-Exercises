import Part from "./Part.js";

const Content = (prompts) => (
  <>
    <Part part={prompts.parts[0]} exercises={prompts.exercises[0]} />
    <Part part={prompts.parts[1]} exercises={prompts.exercises[1]} />
    <Part part={prompts.parts[2]} exercises={prompts.exercises[2]} />
  </>
);

export default Content;
