const express = require("express");
const app = express();

const apiRoutes = require("./api/routes.js");

app.use(express.json())





app.get("/", (req,res) => {
    res.send("<h1>Hello World</h1>")
})


app.use("/api", apiRoutes); 

const PORT = "3001";
app.listen(PORT)
console.log(`Server running on port ${PORT}`);

