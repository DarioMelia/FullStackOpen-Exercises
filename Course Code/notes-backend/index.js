const express = require("express");
const cors = require("cors");
const app = express();


const apiRoutes = require("./api/routes.js");

app.use(express.json())
app.use(cors())


app.get("/", (req,res) => {
    res.send("<h1>Hello World</h1>")
})


app.use("/api", apiRoutes); 

// MidleWare que al ser llamada despues de las rutas, sol oactuará para las rutas no definidas mandando 404
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT;
app.listen(PORT)
console.log(`Server running on port ${PORT}`);

