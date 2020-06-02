const mongoose = require('mongoose')
if(process.env.NODE_ENV === 'development'){
require('colors')
}

var URI;
if(process.env.NODE_ENV === 'development'){
     URI = 'mongodb://localhost:5000:27017/usuariosEMS'
}
else{
     URI = process.env.MONGODB_URI     
}

mongoose.connect(URI,{useNewUrlParser:true,useUnifiedTopology: true});

var conexion = mongoose.connection;

conexion.on('error',console.error.bind(console,'error de conexion'));

conexion.once('open',()=>{
     if(process.env.NODE_ENV === 'development'){
          console.log('Conectado a MONGODB'.red)
     } 
     else{
          console.log('Conectado a MONGODB')
     }
})
