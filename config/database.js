const mongoose = require('mongoose') 

const setupDB = () => {
    mongoose.connect('mongodb://localhost:27017/notes-app')
    .then(()=> {
        console.log('connected to DB')
    }) 
    .catch((err)=>{
        console.log(err)
    })
} 

module.exports = setupDB 
