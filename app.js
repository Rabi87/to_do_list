const express = require('express')
const mongoose =require('mongoose')
const tasksRoutes = require('./routes/taskRoutes')

const app= express()
const port =3000

//Middleware
app.use(express.json())

//DB connection
mongoose.connect('mongodb://admin:admin@localhost:27017/todo?authSource=admin')

const db = mongoose.connection
db.on('error',()=>{
console.log("connection Error")

})

db.once('open',()=>{
    console.log("connected !!")

})
app.use(tasksRoutes)
app.listen('port',()=>{

    console.log("server started port 3000")
})