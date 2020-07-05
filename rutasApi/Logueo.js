const {Router} = require('express')
const bcrypt =require('bcrypt-nodejs')
const Usuario = require('../esquemasMongo/esquemaUsuarios')
const {secret} = require('../CONFIG')
const jwt = require('jsonwebtoken')

const router = Router();

router.post('/',async (req,res,next)=>{

    try{
        const user = await Usuario.find({userName:req.body.userName})
        if(!user[0]){
            res.status(403).json({mensaje:'Usuario Inexistente !'})
        }
        else{
            const verificaPass = await bcrypt.compareSync(req.body.password,user[0].password)
            if(!verificaPass){
                res.status(403).json({mensaje:'Password Incorrecta'})
            }
            else{
                const miUsuario = {
                    userName:user[0].userName,
                    email:user[0].email,
                    nombre:user[0].nombre,
                    apellido:user[0].apellido,
                    perfil:user[0].perfil
                }
                jwt.sign(miUsuario,secret,{expiresIn:14400},(e,token)=>{
                    e? res.status(404).json({mensaje:'Error al generar el token'}):
                    res.status(200).json({token})
                })
            }
        }
    }
    catch(e){
        res.status(404).json({e});
    }
})
 
module.exports = router