const mssql = require('mssql')
if (process.env.NODE_ENV === 'development') {
	require('colors')
}

const URI = {
	user: process.env.USERSQL,
	password: process.env.PASSWORDSQL,
	database: process.env.DATABASESQL,
	server: process.env.SERVERSQL,
	options: {
		enableArithAbort: true,
		encrypt: false,
	},
}

var ConexionSQL = {
	abrirConexion: undefined,
	cerrarConexion: undefined,
	abrirConexionPOOL: undefined,
	cerrarConexionPOOL: undefined,
}
var conexion
ConexionSQL.abrirConexion = async function () {
	await mssql.connect(URI).then(pool => {
		if (pool._connected) {
			if (process.env.NODE_ENV === 'development') {
				console.log('Conecion SQL SERVER'.blue, ' ABIERTA'.green)
				conexion = pool
			}
		} else {
			console.log('Error de Conexion', pool._connected)
		}
	})
}
ConexionSQL.cerrarConexion = async function () {
	await conexion.close()
	if (process.env.NODE_ENV === 'development') {
		console.log('Conecion SQL SERVER'.blue, ' CERRADA'.green)
	}
}

const conexiones = {}

ConexionSQL.abrirConexionPOOL = async name => {
	if (!Object.prototype.hasOwnProperty.call(conexiones, name)) {
		const newConexion = new mssql.ConnectionPool(URI)
		const close = newConexion.close.bind(newConexion)
		newConexion.close = (...args) => {
			delete conexiones[name]
			return close(...args)
		}
		await newConexion.connect()
		conexiones[name] = newConexion
		return conexiones[name]
	}
}

ConexionSQL.cerrarConexionPOOL = () => {
	return Promise.all(
		Object.values(conexiones).map(pool => {
			return pool.close()
		})
	)
}
module.exports = ConexionSQL
