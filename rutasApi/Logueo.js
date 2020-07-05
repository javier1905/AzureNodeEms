const {Router} = require('express')
const bcrypt =require('bcrypt-nodejs')
// const Usuario = require('../esquemasMongo/esquemaUsuarios')
const {secret} = require('../CONFIG')
const jwt = require('jsonwebtoken')
// const CONFIG = require('../CONFIG')

const router = Router();

router.post('/',async (req,res,next)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL} = require('../conexiones/sqlServer')
    const {userName , password } = req.body
    try{
        const conexion = await abrirConexionPOOL('consultaUsuario')
        const {Request , VarChar} = require('mssql')
        const myRequest = new Request(conexion)
        myRequest.input('userName' , VarChar , userName)
        const usuario = await myRequest.execute('pa_getUsuarioXnombreUsuario')
        if(usuario.recordset.userName){
            cerrarConexionPOOL()
            if( !bcrypt.compareSync(password , usuario.recordset.password )) {
                res.status(403).json({mensaje:'Password Incorrecta'})
            }
            else {
                const miUsuario = {
                    userName:usuario.recordset.userName ,
                    email:usuario.recordset.email ,
                    nombre:usuario.recordset.nombreUsuario ,
                    apellido:usuario.recordset.apellidoUsuario ,
                    perfil:usuario.recordset.nombrePerfil
                }
                jwt.sign(miUsuario , secret, {expiresIn:14400} ,  (e , token) => {
                    if (e) { res.status(404).json({mensaje:'Error al generar el token'})  }
                    else{  res.json ({token}) }
                })
            }
        }
        else{
            cerrarConexionPOOL()
            res.status(403).json({mensaje:'Usuario Inexistente !'})
        }
    }
    catch(e){
        cerrarConexionPOOL()
        res.status(404).json({e});
    }
})

module.exports = router