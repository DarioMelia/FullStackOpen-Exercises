const Total = (prompts) => {
    const totalEx = prompts.exercises.reduce((a,b) => a + b);
    return(
        <p>Number of exercises {totalEx}</p>
    )
}

export default Total;
   
