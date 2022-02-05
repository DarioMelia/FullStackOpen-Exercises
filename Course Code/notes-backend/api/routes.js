const express = require("express");
const controllers = require("./routControllers.js");

const router = express.Router();

router.get("/notes", controllers.getNotes);
router.get("/notes/:id", controllers.getNote);
router.delete("/notes/:id",controllers.deleteNote);
router.post("/notes", controllers.addNote);
router.put("/notes/:id",controllers.updateNote);

module.exports = router;