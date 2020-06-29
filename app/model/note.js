const mongoose = require('mongoose')

const Schema = mongoose.Schema
const notesSchema = new Schema({
    title : {
        type : String,
        required : true 
    },
    body : { 
        type : String,
        required : true 
    },
    category : {
        type : Schema.Types.ObjectId,
        ref : 'catgoery'
    },
    user : {
        type : Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    }
})

notesSchema.pre('save',function(next){
    console.log('function called before saving a record')
    next()
})

const Note = mongoose.model('Note', notesSchema)

module.exports = Note
