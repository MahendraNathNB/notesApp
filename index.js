const express = require ('express') 
const app = express() 
const port = 3040 
const router = require('./config/routes')
const setupDB = require('./config/database')

app.use(express.json()) 
app.use('/', router) 

//db config 

setupDB() 

app.listen(port, ()=> {
    console.log('listen on port' , port) 
})
