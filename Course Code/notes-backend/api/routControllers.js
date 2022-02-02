let notes = require("./notes.json");

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
    res.json(note);
}


const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
    return maxId + 1
}