const mongoose = require('mongoose')
if (process.env.NODE_ENV === 'development') require('colors')

console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

var conexion = mongoose.connection

conexion.on('error', console.error.bind(console, 'error de conexion'))

conexion.once('open', () => {
	if (process.env.NODE_ENV === 'development') console.log('Conectado a MONGODB'.red)
	else console.log('Conectado a MONGODB')
})
