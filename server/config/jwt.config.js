const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET_KEY

module.exports.authenticate = (req, res, next) => {
    jwt.verify(req.cookies.userToken, SECRET, (err, payload) => {
        console.log(req.cookies.userToken);
        if(err) {
            res.status(401).json({verified: false});
        } 
        else{
            // console.log('Authenticated')
            // console.log('PAYLOAD', payload);
            next()
        }
    })
}