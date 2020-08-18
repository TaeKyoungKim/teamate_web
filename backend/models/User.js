var mongoose = require('mongoose')
var bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    username:String,

    create_at:{
        type:Date,
        default:Date.now
    }
})

UserSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        const document = this
        bcrypt.hash(this.password , 10 , function(err , hashedPassword){
            if(err) {
                next(err)
            } else {
                document.password = hashedPassword
                next()
            }
        } )
    } else {
        next()
    }
})


UserSchema.methods.isCorrectPassword = function(password, cb) {
    bcrypt.compare(password, this.password , function(err ,same){
        if(err) {
            cb(err)
        } else {
            console.log(same)
            cb(err , same)
        }
    })
}

module.exports = mongoose.model('User' , UserSchema)