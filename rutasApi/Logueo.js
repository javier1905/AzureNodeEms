const { Router } = require('express')
const bcrypt = require('bcrypt')
// const Usuario = require('../esquemasMongo/esquemaUsuarios')
const { secret } = require('../CONFIG')
const jwt = require('jsonwebtoken')
const router = Router()

router.post('/', async (req, res, next) => {
	const { abrirConexionPOOL, cerrarConexionPOOL } = require('../conexiones/sqlServer')
	const { userName, password } = req.body
	try {
		const conexion = await abrirConexionPOOL('consultaUsuario')
		const { Request, VarChar } = require('mssql')
		const myRequest = new Request(conexion)
		myRequest.input('userName', VarChar, userName)
		const usuario = await myRequest.execute('pa_getUsuarioXnombreUsuario')
		const pw = String(usuario.recordset[0].password).trim()
		console.log(pw)
		if (usuario.recordset.length > 0) {
			cerrarConexionPOOL()
			if (!bcrypt.compareSync(password, pw)) {
				res.status(403).json({ mensaje: 'Password Incorrecta' })
			} else {
				const miUsuario = {
					userName: usuario.recordset[0].userName,
					email: usuario.recordset[0].email,
					nombre: usuario.recordset[0].nombreUsuario,
					apellido: usuario.recordset[0].apellidoUsuario,
					perfil: usuario.recordset[0].nombrePerfil,
				}
				jwt.sign(miUsuario, secret, { expiresIn: 14400 }, (e, token) => {
					if (e) {
						res.status(404).json({ mensaje: 'Error al generar el token' })
					} else {
						res.json({ token })
					}
				})
			}
		} else {
			cerrarConexionPOOL()
			res.status(403).json({ mensaje: 'Usuario Inexistente !' })
		}
	} catch (e) {
		cerrarConexionPOOL()
		res.status(404).json({ mensaje: e.message })
	}
})

module.exports = router
