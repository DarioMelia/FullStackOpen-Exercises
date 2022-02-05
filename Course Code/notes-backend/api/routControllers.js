const {getNotesDb,getNoteDb,addNoteDb,deleteNoteDb,updateNoteDb} = require("../mongo/dbHandlers");
let notes;


exports.getNotes = (req, res) =>{
    getNotesDb().then(result =>{
        notes = [...result]
        res.send(JSON.stringify(result))
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
    
}

exports.getNote = (req, res,next) =>{
    const id = req.params.id;
    getNoteDb(id).then(note =>{
        if(!note)res.status(404).end()
        res.send(JSON.stringify(note))
    }).catch(err=>next(err))
}

exports.deleteNote = (req,res,next) =>{
    const id = req.params.id;
    deleteNoteDb(id).then(delNote =>{
        notes = notes.filter(note => note.id !== id)
        res.status(204).end()
    }).catch(err => next(err)) 
}

exports.addNote = (req,res) =>{
    const {content} = req.body;
    if(!content){
        return res.status(404).json({
            error: "content missing"
        })
    }
    const note = {content}
    addNoteDb(note).then(note=>{
        if(!note)res.status(404).json({
            error:"note missing"
        })
        notes = notes.concat(note);
        res.status(201).json(note)
    }).catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
}

exports.updateNote = (req,res,next) =>{
    const id = req.params.id;
    const {content,important} = req.body;
    const updatedNote = {content,important};
    updateNoteDb(id, updatedNote).then(note =>{
        res.status(200).json(note)
    }).catch(err=>next(err))



}



