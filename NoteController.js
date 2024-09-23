const NoteController = require('./NoteController');
const NoteModel = require('./NoteModel');
//GET
module.exports.getNote = async (req, res) => {
    const myNotes = await NoteModel.find();
    res.send(myNotes);
}
//POST
module.exports.saveNotes = async (req, res) => {
    const {title}= req.body;
    NoteModel.create({title})
    .then((data)=>{console.log('Note added')
        res.send(data);
    })
}
//DELETE
module.exports.deleteNote = async (req, res) => {
    const {_id} = req.body;
    NoteModel.findByIdAndDelete(_id)
    .then(()=>{console.log('Note deleted')
    res.send('Note deleted')
})
}
//EDIT or PUT
module.exports.editNote = async (req, res) => {
    const {_id, title} = req.body;
    NoteModel.findByIdAndUpdate(_id, {title})
    .then(()=>res.send('Note updated'))
}
