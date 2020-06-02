const {Router} = require('express')
const bcryp = require('bcrypt-nodejs')
require('../conexiones/mongoDb')
const Usuario = require('../esquemasMongo/esquemaUsuarios')
const Perfil = require('../esquemasMongo/esquemaRolesUsuarios')

const router = Router();

router.get('/',async (req,res)=>{
    await Usuario.find((e,dato)=>{
        e ? res.status(403).send('Error en el request') :
        res.status(200).send(dato)
    })
})

router.get('/perfiles',async (req,res)=>{
    try{
        const listaPerfiles = await Perfil.find()
        res.status(200).json(listaPerfiles)
    }
    catch(e){
        res.status(404).json({mensaje:e.message})
    }
})

router.post('/perfiles',async (req,res)=>{
    try{
        const {perfil} = req.body
        const newPerfil = new Perfil({perfil})
        await newPerfil.save()
        res.status(200).json({mensaje:'Guardado Exitosamente !'})
    }
    catch(e){
        res.status(403).json({mensaje:e.message})
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const user = await Usuario.findById({_id:req.params.id})
        res.status(200).json(user)
    }
    catch(e){
        res.status(403).json({mensaje:e.message})
    }
})

router.post('/',async (req,res)=>{
    try{
        var {userName,password,email,nombre,apellido,perfil} = req.body
        password = await bcryp.hashSync(password)
        const newUser= new Usuario({userName,password,email,nombre,apellido,perfil})
        const dato = await newUser.save()
        if(dato){ res.status(200).json({mensaje:'Usuario guardado exitosamente !'}) }
    }
    catch(err){
        res.status(403).json({error:err.message})
    }
})

router.put('/:id',(req,res)=>{
    const {id} = req.params
    const body = req.body
    if(body.password){body.password = bcryp.hashSync(body.password) }
    Usuario.findByIdAndUpdate({_id:id},body,(e,d)=>{
        e? res.status(403).json({error:e.message}) :
        res.status(200).json({mensaje:'Modificado correctamente !'})
    })
})

module.exports = router;