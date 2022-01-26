const Content = (prompts) => (
  <>
    <p>
      {prompts.parts[0]} {prompts.exercises[0]}
    </p>
    <p>
    {prompts.parts[1]} {prompts.exercises[1]}
    </p>
    <p>
    {prompts.parts[2]} {prompts.exercises[2]}
    </p>
  </>
);

export default Content;
