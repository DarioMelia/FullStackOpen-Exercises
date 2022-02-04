const express = require("express");
const app = express();

const apiRoutes = require("./api/routes.js");

app.use(express.json())


app.get("/", (req,res) => {
    res.send("<h1>Hello World</h1>")
})


app.use("/api", apiRoutes); 

// MidleWare que al ser llamada despues de las rutas, sol oactuará para las rutas no definidas mandando 404
const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)

const PORT = "3001";
app.listen(PORT)
console.log(`Server running on port ${PORT}`);

