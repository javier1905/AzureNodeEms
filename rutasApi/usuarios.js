const {Router} = require('express')
const bcryp = require('bcrypt')
require('../conexiones/mongoDb')
const Usuario = require('../esquemasMongo/esquemaUsuarios')
const Perfil = require('../esquemasMongo/esquemaRolesUsuarios')

const router = Router();

// router.get('/',async (req,res)=>{
//     await Usuario.find((e,dato)=>{
//         e ? res.status(403).send('Error en el request') :
//         res.status(200).send(dato)
//     })
// })
// ! listado de usuarios
router.get('/',async (req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL} = require ('../conexiones/sqlServer')
    try{
        const conexion = await abrirConexionPOOL( 'liastaUsuario')
        const mssql = require('mssql')
        const myRequest = new mssql.Request(conexion)
        const result = await myRequest.execute('pa_listaUsuarios')
        if(result){
            cerrarConexionPOOL()
            res.json(result.recordset)
        }
        else{
            cerrarConexionPOOL()
            res.status(404).json({status: 403,mensaje:e.message})
        }
    }
    catch(e){
        cerrarConexionPOOL()
        res.status(404).json({status: 403,mensaje:e.message})
    }
})

// router.get('/perfiles',async (req,res)=>{
//     try{
//         const listaPerfiles = await Perfil.find()
//         res.status(200).json(listaPerfiles)
//     }
//     catch(e){
//         res.status(404).json({mensaje:e.message})
//     }
// })
//! lista de perfiles
router.get('/perfiles',async (req,res)=>{
    const { abrirConexionPOOL , cerrarConexionPOOL} = require ('../conexiones/sqlServer')
    try{
        const conexion = await abrirConexionPOOL( 'listaPerfiles')
        const mssql = require('mssql')
        const myRequest = new mssql.Request(conexion)
        const result = await myRequest.execute('pa_listaPerfiles')
        if(result){
            cerrarConexionPOOL()
            res.json(result.recordset)
        }
        else{
            cerrarConexionPOOL()
            res.status(404).json({status: 403,mensaje:e.message})
        }
    }
    catch(e){
        cerrarConexionPOOL()
        res.status(404).json({status: 403,mensaje:e.message})
    }
})
//! inser perfiles MONGO
// router.post('/perfiles',async (req,res)=>{
//     try{
//         const {perfil} = req.body
//         const newPerfil = new Perfil({perfil})
//         await newPerfil.save()
//         res.status(200).json({mensaje:'Guardado Exitosamente !'})
//     }
//     catch(e){
//         res.status(403).json({mensaje:e.message})
//     }
// })

// router.get('/:id',async (req,res)=>{
//     try{
//         const user = await Usuario.findById ( { _id:req.params.id } )
//         res.status(200).json(user)
//     }
//     catch(e){
//         res.status(403).json({mensaje:e.message})
//     }
// })
//! consulta usuario por id
router.get('/:id',async (req,res)=>{
    const id = req.params.id
    const { abrirConexionPOOL , cerrarConexionPOOL} = require ('../conexiones/sqlServer')
    try{
        const conexion = await abrirConexionPOOL( 'getUsexId')
        const mssql = require('mssql')
        const myRequest = new mssql.Request(conexion)
        myRequest.input('idUsuario' , mssql.Int , id)
        const query = `select
        u.id as idUsuario ,
        u.userName as userName ,
        u.email as email ,
        u.nombre as nombreUsuario ,
        u.apellido as apellidoUsuario ,
        p.id as idPerfil ,
        p.nombre as nombrePerfil
        from usuarios u
        join perfiles p on p.id = u.id_perfil
        where u.id = @idUsuario`
        const result = await myRequest.query(query)
        if(result){
            cerrarConexionPOOL()
            res.json(result.recordset)
        }
        else{
            cerrarConexionPOOL()
            res.status(404).json({status: 403,mensaje:e.message})
        }
    }
    catch(e){
        cerrarConexionPOOL()
        res.status(404).json({status: 403,mensaje:e.message})
    }
})

//!guarda usuario
router.post('/',async (req,res)=>{
    const {abrirConexionPOOL , cerrarConexionPOOL} = require('../conexiones/sqlServer')
    const  {userName,password,email,nombre,apellido,idPerfil} = req.body
    try{
        const conexion = await abrirConexionPOOL('saveUser')
        const mssql = require ('mssql')
        const myRequest = new mssql.Request(conexion)
        const pw = bcryp.hashSync(password,10)
        console.log(pw)
        myRequest.input('userName' , mssql.VarChar , userName)
        myRequest.input('password' , mssql.VarChar , pw)
        myRequest.input('email' , mssql.VarChar , email)
        myRequest.input('nombre' , mssql.VarChar , nombre)
        myRequest.input('apellido' , mssql.VarChar , apellido)
        myRequest.input('idPerfil' , mssql.Int , idPerfil)
        const result = await myRequest.execute('pa_insertUsuarios')
        if(result){
            cerrarConexionPOOL()
            console.log(result)
            res.status(200).json({ mensaje: 'usuario insertado correctamente !' })
        }
    }
    catch(err){
        cerrarConexionPOOL()
        res.status(403).json({error:err.message})
    }
})
// router.post('/',async (req,res)=>{
//     const {abrirConexionPOOL , cerrarConexionPOOL} = require('../conexiones/sqlServer')
//     const  {userName,password,email,nombre,apellido,idPerfil} = req.body
//     try{
//         const conexion = await abrirConexionPOOL('saveUser')
//         password = bcryp.hashSync(password)
        
//         const newUser= new Usuario({userName,password,email,nombre,apellido,perfil})
//         const dato = await newUser.save()
//         if(dato){ res.status(200).json({mensaje:'Usuario guardado exitosamente !'}) }
//     }
//     catch(err){
//         res.status(403).json({error:err.message})
//     }
// })

// router.put('/:id',(req,res)=>{
//     const {id} = req.params
//     const body = req.body
//     if(body.password){body.password = bcryp.hashSync(body.password) }
//     Usuario.findByIdAndUpdate({_id:id},body,(e,d)=>{
//         e? res.status(403).json({error:e.message}) :
//         res.status(200).json({mensaje:'Modificado correctamente !'})
//     })
// })
router.put('/', async (req,res)=>{
    const {abrirConexionPOOL , cerrarConexionPOOL} = require('../conexiones/sqlServer')
    const  {userName,password,email,nombre,apellido,idPerfil , idUsuario} = req.body
    try{
        const conexion = await abrirConexionPOOL('updateUser')
        const mssql = require ('mssql')
        const myRequest = new mssql.Request(conexion)
        myRequest.input('userName' , mssql.VarChar , userName)
        myRequest.input('password' , mssql.VarChar , bcryp.hashSync(password))
        myRequest.input('email' , mssql.VarChar , email)
        myRequest.input('nombre' , mssql.VarChar , nombre)
        myRequest.input('apellido' , mssql.VarChar , apellido)
        myRequest.input('idPerfil' , mssql.Int , idPerfil)
        myRequest.input('idUsuario' , mssql.Int , idUsuario)
        const result = await myRequest.execute('pa_updateUsuarios')
        if(result){
            cerrarConexionPOOL()
            console.log(result)
            res.status(200).json({ mensaje: 'usuario insertado correctamente !' })
        }
    }
    catch(e){
        cerrarConexionPOOL()
        res.status(403).json({error:err.message})
    }
})

module.exports = router;