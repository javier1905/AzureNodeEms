const jwt = require('jsonwebtoken')
const {secret} = require('../../CONFIG')

module.exports = function (req , res ,next) {
    if (req.path !== '/api/logueo') {
        if( !req.headers.authorization) {
            res.status(403).json({mensaje : 'No envio el tojen en el headers'})
        }
        else{
            const token = req.headers.authorization.split(' ')[1]
            jwt.verify(token ,secret , ( e , datos )=> {
                if ( e ) {
                    res.status(403).json({mensaje : e.message , otro : 'error  en la commprovacion token'})
                }
                else {
                    return next()
                }
            } )
        }
    }
    else {
        return next()
    }
}