const Note = require("./models/Note");

exports.getNotesDb = () =>{
    return Note.find({}).then(result => result);
}

exports.getNoteDb = id =>{
    return Note.findById(id).then(note => note);
}

exports.addNoteDb = ({content}) =>{
   const newNote = new Note({
       content,
       date: new Date(),
       important: false
   })
   return newNote.save().then(note=>note)
}

exports.deleteNoteDb = id =>{
    return Note.findByIdAndDelete(id).then(delNote => delNote)
}

exports.updateNoteDb = (id,updatedNote) =>{
    return Note.findByIdAndUpdate(id, updatedNote, { new: true }).then(updatedNote =>updatedNote )
    
}