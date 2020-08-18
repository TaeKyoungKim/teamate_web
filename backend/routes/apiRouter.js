var express = require('express')
var router = express.Router()
var User = require('../models/User')

router.get('/api/home', function(req , res, next){
    res.json({
        message:"Hello",
        name:"KIM"
    })
})

var mockData = {
    carNum:1004,
    brand:'BMW',
    model:'BMW i8',
    owner:'김태경',
    img:'https://s.aolcdn.com/commerce/autodata/images/USC90BMC681A021001.jpg'
}
router.get('/api/items' ,function(req, res , next){
    res.json(mockData)
})


router.post('/api/register' , function(req, res , next){
    const {email, password , username} = req.body
    // console.log(email)
    const user =new User({email , password , username})
    user.save(function(err){
        if(err) {
            console.log(err)
            res.status(500).send("Error registering new user pls try again")
        } else {
            res.status(200).send("Registering is Success")
        }
    })
})

module.exports = router;