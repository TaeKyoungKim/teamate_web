const jwt  = require('jsonwebtoken')
const secret = 'mysecrethhhh'

const WithAuth = (req , res , next)=>{
    const token = req.body.token ||
                    req.query.token ||
                    req.headers['x-access-token'] ||
                    req.cookies.token;
    if(!token) {
        res.status(401).send('Unauthorized: No token provided')
    } else {
        jwt.verify(token, secret, (err , decoded)=>{
            if(err) {
                res.status(401).send("Unauthorized:Invalid Token")
            } else {
                req.email = decoded.email
                next()
            }
        })
    }
}

module.exports = WithAuth;
