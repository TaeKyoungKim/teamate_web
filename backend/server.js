var express  = require('express')
var bodyParser = require('body-parser')
var cookieParser=  require('cookie-parser')
var cors = require('cors')
var app = express()
var path = require('path')
var mongoose = require('mongoose')
require('dotenv').config()

var apiRouter = require('./routes/apiRouter')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser())

var mongo_uri='mongodb+srv://root:1234@cluster0-tecvg.mongodb.net/teamate_3?retryWrites=true&w=majority'
mongoose.connect(mongo_uri , { useNewUrlParser: true ,useUnifiedTopology: true } , function(err){
    if(err) {
        console.log(err)
    } else {
        console.log('DB Connected')
    }
})
app.use(cors())

app.use('/', apiRouter)
app.get('/data' , function(req, res , next){
    res.json({
        message:"Hello",
        name:"KIM"
    })
})

app.listen(3001, function(){
    console.log('Sever is Starting')
})
