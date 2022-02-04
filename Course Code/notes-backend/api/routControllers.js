const fs = require('fs');
const fileName = './notes.json';
let notes = require(fileName);

exports.getNotes = (req, res) =>{
    res.send(notes)
}

exports.getNote = (req, res) =>{
    const id = Number(req.params.id);
    const note = notes.find(note => note.id === id);
    if(note)res.send(JSON.stringify(note))
    res.status(404).end()
    
}

exports.deleteNote = (req,res) =>{
    const id = Number(req.params.id);
    notes = notes.filter(note => note.id !== id);
    updateJSON(notes);
    res.status(204).end()
}

exports.addNote = (req,res) =>{
    const {content, important} = req.body;
    if(!content){
        return res.status(404).json({
            error: "content missing"
        })
    }
    const note = {
        id: generateId(),
        content: content,
        date: new Date(),
        important:important
    }

    notes = notes.concat(note);
    updateJSON(notes);
    res.json(note);
}

// %%%%%% HELPER FUNCS %%%%%%%%
const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
    return maxId + 1
}

const updateJSON = (newNotes) =>{
    fs.writeFile("./api/notes.json", JSON.stringify(newNotes), function writeJSON(err) {
        if (err) return console.log(err);
        // console.log(JSON.stringify(newNotes));
        // console.log('writing to ' + fileName);
      });
}