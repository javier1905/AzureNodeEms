const mssql = require('mssql');
if(process.env.NODE_ENV === 'development'){ require('colors') }

var URI

if(process.env.NODE_ENV === 'development'){
    // URI = {
    //     user: 'DBjav', /* DBjav emsDB  */
    //     password: 'belgrano455',
    //     database: 'EMS_DB_SQL',
    //     port:1433,
    //     server:'DESKTOP-G1I097C', /* DESKTOP-G1I097C  PC2360 */
    //     options:{
    //         appName:'ems-node-api',
    //         enableArithAbort:true,
    //         encrypt:false
    //     }
    //     ,
    //     connectionTimeOut:150000,
    //     driver:'tedious',
    //     stream:false,
    //     pool:{
    //         max:20,
    //         min:0,
    //         idleTimeoutMillis:30000,
    //     }
    // }
    URI = {
        user: 'javier_85_SQLLogin_1', /* DBjav emsDB  */
        password: 'lglpiq7v7o',
        database: 'EMSDBSQL',
        server:'EMSDBSQL.mssql.somee.com', /* DESKTOP-G1I097C  PC2360 */
        options:{
            appName:'ems-node-api',
            enableArithAbort:true,
            encrypt:false
        }
        ,
        connectionTimeOut:150000,
        driver:'tedious',
        stream:false,
        pool:{
            max:20,
            min:0,
            idleTimeoutMillis:30000,
        }
    }
}
else{
    URI = {
        user: process.env.USERSQL,
        password: process.env.PASSWORDSQL,
        database: process.env.DATABASESQL,
        server:process.env.SERVERSQL,
        options:{
            enableArithAbort:true,
            encrypt:false
        },
    }
}

var ConexionSQL = { abrirConexion:undefined, cerrarConexion:undefined, abrirConexionPOOL:undefined, cerrarConexionPOOL:undefined }
var conexion
ConexionSQL.abrirConexion = async function (){
    await mssql.connect(URI)
    .then(pool=>{
        if(pool._connected){
            if(process.env.NODE_ENV === 'development'){
                console.log('Conecion SQL SERVER'.blue,' ABIERTA'.green)
                conexion = pool
            }
        }
        else{
            console.log('Error de Conexion',pool._connected)
        }
    })
}
ConexionSQL.cerrarConexion = async function (){
    await conexion.close()
    if(process.env.NODE_ENV === 'development'){
        console.log('Conecion SQL SERVER'.blue,' CERRADA'.green)
    }
}

const conexiones = {}

ConexionSQL.abrirConexionPOOL = async name =>{
    if(!Object.prototype.hasOwnProperty.call(conexiones,name)){
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

ConexionSQL.cerrarConexionPOOL = () =>{
    return Promise.all(Object.values(conexiones).map((pool)=>{
        return pool.close()
    }))
}
module.exports = ConexionSQL