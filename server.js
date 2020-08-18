var express  = require('express')

var app = express()

app.get('/data' , function(req, res , next){
    res.json({
        message:"Hello",
        name:"KIM"
    })
})

app.listen(3001, function(){
    console.log('Sever is Starting')
})
