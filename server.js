const express = require('express')
const mongoose = require('mongoose')
const app = express()
console.log('hello yashar')

//Database 
mongoose.connect('mongodb://127.0.0.1:27017/user-manager', {useNewUrlParser: true})
.then(()=>{
    console.log('Connected to database')
})
.catch(err=> console.error(err))

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// Controllers
const UserControl = require('./Controller/UserControl')
//Routers
app.post('/api/user/create', UserControl.create)
app.post('/api/user/update', UserControl.update)
app.get('/api/user', UserControl.getAll)

//Start Server
app.listen(3000,()=> console.log('server has started on port 3000..')) 