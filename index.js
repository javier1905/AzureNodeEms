const express = require('express')
const cors = require('cors')
require('dotenv').config()
var morgan

if (process.env.NODE_ENV === 'development') {
	require('colors')
	morgan = require('morgan')
}
// console.log(process.env.NODE_ENV)

const servidor = express()
servidor.use(cors())

// middelware

servidor.use(express.json())
servidor.use(express.urlencoded({ extended: true }))
servidor.use(require('./rutasApi/authAccesos/authAllRouter'))

if (process.env.NODE_ENV === 'development') {
	servidor.use(morgan('dev'))
}

servidor.use(
	'/api/authRouterReact/admin',
	require('./rutasApi/authAccesosReact/authAdminRouterReact')
)
servidor.use(
	'/api/authRouterReact/nivel1',
	require('./rutasApi/authAccesosReact/authNivel1RouterReact')
)
servidor.use(
	'/api/authRouterReact/nivel2',
	require('./rutasApi/authAccesosReact/authNivel2RouterReact')
)
servidor.use(
	'/api/authRouterReact/nivel3',
	require('./rutasApi/authAccesosReact/authNivel3RouterReact')
)
servidor.use(
	'/api/authRouterReact/nivel4',
	require('./rutasApi/authAccesosReact/authNivel4RouterReact')
)
servidor.use(
	'/api/authRouterReact/nivel5',
	require('./rutasApi/authAccesosReact/authNivel5RouterReact')
)
servidor.use('/api/maquinas', require('./rutasApi/maquinas'))
servidor.use(
	'/api/usuarios',
	require('./rutasApi/authAccesos/authAdminRouter'),
	require('./rutasApi/usuarios')
)
// servidor.use('/api/usuarios',require('./rutasApi/usuarios'))
servidor.use('/api/logueo', require('./rutasApi/Logueo'))
servidor.use('/api/autentificasion', require('./rutasApi/Autentificasion'))
servidor.use('/api/piezas', require('./rutasApi/piezas'))
servidor.use('/api/moldes', require('./rutasApi/moldes'))
servidor.use('/api/defectos', require('./rutasApi/defectos'))
servidor.use('/api/operaciones', require('./rutasApi/operaciones'))
servidor.use('/api/procesos', require('./rutasApi/procesos'))
servidor.use('/api/turnos', require('./rutasApi/turnos'))
servidor.use('/api/paradasMaquina', require('./rutasApi/paradasMaquina'))
servidor.use('/api/trabajadores', require('./rutasApi/trabajadores'))
servidor.use('/api/planillasProduccion', require('./rutasApi/planillasProduccion'))
servidor.use('/api/tiposProceso', require('./rutasApi/tiposProceso'))
servidor.use('/api/clientes', require('./rutasApi/clientes'))
servidor.use('/api/tiposMaterial', require('./rutasApi/tiposMaterial'))
servidor.use('/api/areas', require('./rutasApi/areas'))
servidor.use('/api/tiposMaquina', require('./rutasApi/tiposMaquina'))
servidor.use('/api/plantas', require('./rutasApi/plantas'))
servidor.use('/api/puestos', require('./rutasApi/puestos'))
servidor.use('/api/oee', require('./rutasApi/oee'))
servidor.use('/api/reportes', require('./rutasApi/reportes'))

//Settings
servidor.set('port', process.env.PORT || 5000)

servidor.listen(servidor.get('port'), (m, e) => {
	if (e) {
		console.log(e)
	} else {
		if (process.env.NODE_ENV === 'development') {
			console.log('Servidor corriendo en el PUERTO'.yellow, servidor.get('port'))
		} else {
			console.log('Servidor corriendo en el PUERTO', servidor.get('port'))
		}
	}
})
