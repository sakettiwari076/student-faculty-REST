const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const studentRoute = require('./routes/student');
const facultyRoute = require('./routes/faculty');
const mongoose=require('mongoose')
const Student=require('./model/student')

mongoose.connect('mongodb+srv://saket:KshG6Vgp2C7y88rV@cluster0.2oecrmv.mongodb.net/?retryWrites=true&w=majority')

mongoose.connection.on('error' , err=> {
    console.log('failed')
})


mongoose.connection.on('connected' , connected=> {
    console.log('connected')
})

app.use(bodyParser.urlencoded({
    extended:false
}))


app.use(bodyParser.json());
app.use('/student' ,studentRoute)



app.use('/faculty' ,facultyRoute)


app.use((req , res, next)=> {
    res.status(404).json({
        error:'bad request'
    })
})


module.exports = app;