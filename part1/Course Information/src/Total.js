const Total = (prompts) => {
    const [p1,p2,p3] = prompts.parts;
    const allEx = p1.exercises + p2.exercises + p3.exercises;
    return(
        <p>Number of exercises {allEx}</p>
    )
}

export default Total;
   
