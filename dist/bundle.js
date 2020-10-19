/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./CONFIG.js":
/*!*******************!*\
  !*** ./CONFIG.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  secret: 'javier1905'
};

/***/ }),

/***/ "./conexiones/mongoDb.js":
/*!*******************************!*\
  !*** ./conexiones/mongoDb.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

if (true) __webpack_require__(/*! colors */ "colors");
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var conexion = mongoose.connection;
conexion.on('error', console.error.bind(console, 'error de conexion'));
conexion.once('open', () => {
  if (true) console.log('Conectado a MONGODB'.red);else {}
});

/***/ }),

/***/ "./conexiones/sqlServer.js":
/*!*********************************!*\
  !*** ./conexiones/sqlServer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mssql = __webpack_require__(/*! mssql */ "mssql");

if (true) {
  __webpack_require__(/*! colors */ "colors");
}

const URI = {
  user: process.env.USERSQL,
  password: process.env.PASSWORDSQL,
  database: process.env.DATABASESQL,
  server: process.env.SERVERSQL,
  options: {
    enableArithAbort: true,
    encrypt: false
  }
};
var ConexionSQL = {
  abrirConexion: undefined,
  cerrarConexion: undefined,
  abrirConexionPOOL: undefined,
  cerrarConexionPOOL: undefined
};
var conexion;

ConexionSQL.abrirConexion = async function () {
  await mssql.connect(URI).then(pool => {
    if (pool._connected) {
      if (true) {
        console.log('Conecion SQL SERVER'.blue, ' ABIERTA'.green);
        conexion = pool;
      }
    } else {
      console.log('Error de Conexion', pool._connected);
    }
  });
};

ConexionSQL.cerrarConexion = async function () {
  await conexion.close();

  if (true) {
    console.log('Conecion SQL SERVER'.blue, ' CERRADA'.green);
  }
};

const conexiones = {};

ConexionSQL.abrirConexionPOOL = async name => {
  if (!Object.prototype.hasOwnProperty.call(conexiones, name)) {
    const newConexion = new mssql.ConnectionPool(URI);
    const close = newConexion.close.bind(newConexion);

    newConexion.close = (...args) => {
      delete conexiones[name];
      return close(...args);
    };

    await newConexion.connect();
    conexiones[name] = newConexion;
    return conexiones[name];
  }
};

ConexionSQL.cerrarConexionPOOL = () => {
  return Promise.all(Object.values(conexiones).map(pool => {
    return pool.close();
  }));
};

module.exports = ConexionSQL;

/***/ }),

/***/ "./esquemasMongo/esquemaRolesUsuarios.js":
/*!***********************************************!*\
  !*** ./esquemasMongo/esquemaRolesUsuarios.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const perfil = new mongoose.Schema({
  perfil: {
    type: String,
    require: true,
    unique: true,
    enum: ['Admin', 'nivel-1', 'nivel-2', 'nivel-3', 'nivel-4', 'nivel-5']
  }
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('perfil', perfil);

/***/ }),

/***/ "./esquemasMongo/esquemaUsuarios.js":
/*!******************************************!*\
  !*** ./esquemasMongo/esquemaUsuarios.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const usuario = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  perfil: {
    type: String,
    required: true,
    enum: ['Admin', 'nivel-1', 'nivel-2', 'nivel-3', 'nivel-4', 'nivel-5']
  }
});
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
module.exports = mongoose.model('usuario', usuario);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");

const cors = __webpack_require__(/*! cors */ "cors");

__webpack_require__(/*! dotenv */ "dotenv").config();

var morgan;

if (true) {
  __webpack_require__(/*! colors */ "colors");

  morgan = __webpack_require__(/*! morgan */ "morgan");
} // console.log(process.env.NODE_ENV)


const servidor = express();
servidor.use(cors()); // middelware

servidor.use(express.json());
servidor.use(express.urlencoded({
  extended: true
}));
servidor.use(__webpack_require__(/*! ./rutasApi/authAccesos/authAllRouter */ "./rutasApi/authAccesos/authAllRouter.js"));

if (true) {
  servidor.use(morgan('dev'));
}

servidor.use('/api/authRouterReact/admin', __webpack_require__(/*! ./rutasApi/authAccesosReact/authAdminRouterReact */ "./rutasApi/authAccesosReact/authAdminRouterReact.js"));
servidor.use('/api/authRouterReact/nivel1', __webpack_require__(/*! ./rutasApi/authAccesosReact/authNivel1RouterReact */ "./rutasApi/authAccesosReact/authNivel1RouterReact.js"));
servidor.use('/api/authRouterReact/nivel2', __webpack_require__(/*! ./rutasApi/authAccesosReact/authNivel2RouterReact */ "./rutasApi/authAccesosReact/authNivel2RouterReact.js"));
servidor.use('/api/authRouterReact/nivel3', __webpack_require__(/*! ./rutasApi/authAccesosReact/authNivel3RouterReact */ "./rutasApi/authAccesosReact/authNivel3RouterReact.js"));
servidor.use('/api/authRouterReact/nivel4', __webpack_require__(/*! ./rutasApi/authAccesosReact/authNivel4RouterReact */ "./rutasApi/authAccesosReact/authNivel4RouterReact.js"));
servidor.use('/api/authRouterReact/nivel5', __webpack_require__(/*! ./rutasApi/authAccesosReact/authNivel5RouterReact */ "./rutasApi/authAccesosReact/authNivel5RouterReact.js"));
servidor.use('/api/maquinas', __webpack_require__(/*! ./rutasApi/maquinas */ "./rutasApi/maquinas.js"));
servidor.use('/api/usuarios', __webpack_require__(/*! ./rutasApi/authAccesos/authAdminRouter */ "./rutasApi/authAccesos/authAdminRouter.js"), __webpack_require__(/*! ./rutasApi/usuarios */ "./rutasApi/usuarios.js")); // servidor.use('/api/usuarios',require('./rutasApi/usuarios'))

servidor.use('/api/logueo', __webpack_require__(/*! ./rutasApi/Logueo */ "./rutasApi/Logueo.js"));
servidor.use('/api/autentificasion', __webpack_require__(/*! ./rutasApi/Autentificasion */ "./rutasApi/Autentificasion.js"));
servidor.use('/api/piezas', __webpack_require__(/*! ./rutasApi/piezas */ "./rutasApi/piezas.js"));
servidor.use('/api/moldes', __webpack_require__(/*! ./rutasApi/moldes */ "./rutasApi/moldes.js"));
servidor.use('/api/defectos', __webpack_require__(/*! ./rutasApi/defectos */ "./rutasApi/defectos.js"));
servidor.use('/api/operaciones', __webpack_require__(/*! ./rutasApi/operaciones */ "./rutasApi/operaciones.js"));
servidor.use('/api/procesos', __webpack_require__(/*! ./rutasApi/procesos */ "./rutasApi/procesos.js"));
servidor.use('/api/turnos', __webpack_require__(/*! ./rutasApi/turnos */ "./rutasApi/turnos.js"));
servidor.use('/api/paradasMaquina', __webpack_require__(/*! ./rutasApi/paradasMaquina */ "./rutasApi/paradasMaquina.js"));
servidor.use('/api/trabajadores', __webpack_require__(/*! ./rutasApi/trabajadores */ "./rutasApi/trabajadores.js"));
servidor.use('/api/planillasProduccion', __webpack_require__(/*! ./rutasApi/planillasProduccion */ "./rutasApi/planillasProduccion.js"));
servidor.use('/api/tiposProceso', __webpack_require__(/*! ./rutasApi/tiposProceso */ "./rutasApi/tiposProceso.js"));
servidor.use('/api/clientes', __webpack_require__(/*! ./rutasApi/clientes */ "./rutasApi/clientes.js"));
servidor.use('/api/tiposMaterial', __webpack_require__(/*! ./rutasApi/tiposMaterial */ "./rutasApi/tiposMaterial.js"));
servidor.use('/api/areas', __webpack_require__(/*! ./rutasApi/areas */ "./rutasApi/areas.js"));
servidor.use('/api/tiposMaquina', __webpack_require__(/*! ./rutasApi/tiposMaquina */ "./rutasApi/tiposMaquina.js"));
servidor.use('/api/plantas', __webpack_require__(/*! ./rutasApi/plantas */ "./rutasApi/plantas.js"));
servidor.use('/api/puestos', __webpack_require__(/*! ./rutasApi/puestos */ "./rutasApi/puestos.js"));
servidor.use('/api/oee', __webpack_require__(/*! ./rutasApi/oee */ "./rutasApi/oee.js"));
servidor.use('/api/reportes', __webpack_require__(/*! ./rutasApi/reportes */ "./rutasApi/reportes.js")); //Settings

servidor.set('port', process.env.PORT || 5000);
servidor.listen(servidor.get('port'), (m, e) => {
  if (e) {
    console.log(e);
  } else {
    if (true) {
      console.log('Servidor corriendo en el PUERTO'.yellow, servidor.get('port'));
    } else {}
  }
});

/***/ }),

/***/ "./rutasApi/Autentificasion.js":
/*!*************************************!*\
  !*** ./rutasApi/Autentificasion.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Router = __webpack_require__(/*! express */ "express");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const CONFIG = __webpack_require__(/*! ../CONFIG */ "./CONFIG.js");

const router = Router();
router.get('/', (req, res) => {
  if (!req.headers.authorization) {
    res.status(403).json({
      mensaje: 'No envio el Token en el headers'
    });
  } else {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, CONFIG.secret, (e, d) => {
      if (e) {
        res.status(403).json({
          mensaje: e.name
        });
      } else {
        res.status(200).json(d);
      }
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/Logueo.js":
/*!****************************!*\
  !*** ./rutasApi/Logueo.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const bcrypt = __webpack_require__(/*! bcrypt */ "bcrypt"); // const Usuario = require('../esquemasMongo/esquemaUsuarios')


const {
  secret
} = __webpack_require__(/*! ../CONFIG */ "./CONFIG.js");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const router = Router();
router.post('/', async (req, res, next) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    userName,
    password
  } = req.body;

  try {
    const conexion = await abrirConexionPOOL('consultaUsuario');

    const {
      Request,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('userName', VarChar, userName);
    const usuario = await myRequest.execute('pa_getUsuarioXnombreUsuario');
    const pw = String(usuario.recordset[0].password).trim();
    console.log(pw);

    if (usuario.recordset.length > 0) {
      cerrarConexionPOOL();

      if (!bcrypt.compareSync(password, pw)) {
        res.status(403).json({
          mensaje: 'Password Incorrecta'
        });
      } else {
        const miUsuario = {
          userName: usuario.recordset[0].userName,
          email: usuario.recordset[0].email,
          nombre: usuario.recordset[0].nombreUsuario,
          apellido: usuario.recordset[0].apellidoUsuario,
          perfil: usuario.recordset[0].nombrePerfil
        };
        jwt.sign(miUsuario, secret, {
          expiresIn: 14400
        }, (e, token) => {
          if (e) {
            res.status(404).json({
              mensaje: 'Error al generar el token'
            });
          } else {
            res.json({
              token
            });
          }
        });
      }
    } else {
      cerrarConexionPOOL();
      res.status(403).json({
        mensaje: 'Usuario Inexistente !'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(404).json({
      mensaje: e.message
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/areas.js":
/*!***************************!*\
  !*** ./rutasApi/areas.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('listaAreas');
    const {
      Request
    } = new __webpack_require__(/*! mssql */ "mssql");
    const myRequires = new Request(conexion);
    const result = await myRequires.query(`select id as idArea , nombre as nombreArea
            from areas
            where estado = 1`);

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.post('/insert', async (req, res) => {
  const {
    nombreArea
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('insertArea');
    const myRequest = new Request(conexion);
    myRequest.input('nombreArea', VarChar, nombreArea);
    const query = `insert into areas ( nombre , estado )
        values
        ( @nombreArea , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Area Insertado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idArea,
    nombreArea
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('updateArea');
    const myRequest = new Request(conexion);
    myRequest.input('nombreArea', VarChar, nombreArea);
    myRequest.input('idArea', Int, idArea);
    const query = `update areas
        set
        nombre = @nombreArea
        where id = @idArea`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Area actualizada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idArea
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('deleteArea');
    const myRequest = new Request(conexion);
    myRequest.input('idArea', Int, idArea);
    const query = `update areas
        set
        estado = 0
        where id = @idArea`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Area eliminada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/authAccesos/authAdminRouter.js":
/*!*************************************************!*\
  !*** ./rutasApi/authAccesos/authAdminRouter.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const {
  secret
} = __webpack_require__(/*! ../../CONFIG */ "./CONFIG.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, secret, (e, datosUser) => {
    if (e) {
      return res.status(403).json({
        mensaje: e.message
      });
    } else {
      if (datosUser.perfil !== 'Admin') {
        return res.status(403).json({
          mensaje: 'Acceso denegado por no ser admin'
        });
      } else {
        return next();
      }
    }
  });
};

/***/ }),

/***/ "./rutasApi/authAccesos/authAllRouter.js":
/*!***********************************************!*\
  !*** ./rutasApi/authAccesos/authAllRouter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const {
  secret
} = __webpack_require__(/*! ../../CONFIG */ "./CONFIG.js");

module.exports = function (req, res, next) {
  if (req.path !== '/api/logueo') {
    if (!req.headers.authorization) {
      res.status(403).json({
        mensaje: 'No envio el tojen en el headers'
      });
    } else {
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, secret, (e, datos) => {
        if (e) {
          res.status(403).json({
            mensaje: e.message,
            otro: 'error  en la commprovacion token'
          });
        } else {
          return next();
        }
      });
    }
  } else {
    return next();
  }
};

/***/ }),

/***/ "./rutasApi/authAccesosReact/authAdminRouterReact.js":
/*!***********************************************************!*\
  !*** ./rutasApi/authAccesosReact/authAdminRouterReact.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const {
  secret
} = __webpack_require__(/*! ../../CONFIG */ "./CONFIG.js");

const router = Router();
router.get('/', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, secret, (e, datosUser) => {
    if (e) {
      return res.status(403).json({
        mensaje: e.message
      });
    } else {
      if (datosUser.perfil === 'admin') {
        res.status(200).json({
          permiso: true
        });
      } else {
        return res.status(403).json({
          mensaje: 'usted no es admin'
        });
      }
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/authAccesosReact/authNivel1RouterReact.js":
/*!************************************************************!*\
  !*** ./rutasApi/authAccesosReact/authNivel1RouterReact.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const {
  secret
} = __webpack_require__(/*! ../../CONFIG */ "./CONFIG.js");

const router = Router();
router.get('/', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, secret, (e, datosUser) => {
    if (e) {
      return res.status(403).json({
        mensaje: e.message
      });
    } else {
      if (datosUser.perfil === 'nivel-1') {
        res.status(200).json({
          permiso: true
        });
      } else {
        return res.status(403).json({
          mensaje: 'usted no es nivel 1'
        });
      }
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/authAccesosReact/authNivel2RouterReact.js":
/*!************************************************************!*\
  !*** ./rutasApi/authAccesosReact/authNivel2RouterReact.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const {
  secret
} = __webpack_require__(/*! ../../CONFIG */ "./CONFIG.js");

const router = Router();
router.get('/', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, secret, (e, datosUser) => {
    if (e) {
      return res.status(403).json({
        mensaje: e.message
      });
    } else {
      if (datosUser.perfil === 'nivel-2') {
        res.status(200).json({
          permiso: true
        });
      } else {
        return res.status(403).json({
          mensaje: 'usted no es nivel 2'
        });
      }
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/authAccesosReact/authNivel3RouterReact.js":
/*!************************************************************!*\
  !*** ./rutasApi/authAccesosReact/authNivel3RouterReact.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const {
  secret
} = __webpack_require__(/*! ../../CONFIG */ "./CONFIG.js");

const router = Router();
router.get('/', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, secret, (e, datosUser) => {
    if (e) {
      return res.status(403).json({
        mensaje: e.message
      });
    } else {
      if (datosUser.perfil === 'nivel-3') {
        res.status(200).json({
          permiso: true
        });
      } else {
        return res.status(403).json({
          mensaje: 'usted no es nivel 3'
        });
      }
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/authAccesosReact/authNivel4RouterReact.js":
/*!************************************************************!*\
  !*** ./rutasApi/authAccesosReact/authNivel4RouterReact.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const {
  secret
} = __webpack_require__(/*! ../../CONFIG */ "./CONFIG.js");

const router = Router();
router.get('/', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, secret, (e, datosUser) => {
    if (e) {
      return res.status(403).json({
        mensaje: e.message
      });
    } else {
      if (datosUser.perfil === 'nivel-4') {
        res.status(200).json({
          permiso: true
        });
      } else {
        return res.status(403).json({
          mensaje: 'usted no es nivel 4'
        });
      }
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/authAccesosReact/authNivel5RouterReact.js":
/*!************************************************************!*\
  !*** ./rutasApi/authAccesosReact/authNivel5RouterReact.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const {
  secret
} = __webpack_require__(/*! ../../CONFIG */ "./CONFIG.js");

const router = Router();
router.get('/', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, secret, (e, datosUser) => {
    if (e) {
      return res.status(403).json({
        mensaje: e.message
      });
    } else {
      if (datosUser.perfil === 'nivel-5') {
        res.status(200).json({
          permiso: true
        });
      } else {
        return res.status(403).json({
          mensaje: 'usted no es nivel 5'
        });
      }
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/clientes.js":
/*!******************************!*\
  !*** ./rutasApi/clientes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/list', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexion = await abrirConexionPOOL('consultaClientes');

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const myRequest = new Request(conexion);
  const query = ` select c.id as idCliente , c.nombre as nombreCliente , c.razon_social as razonSocialCliente
    from clientes c
    where c.estado = 1`;

  try {
    const result = await myRequest.query(query);
    cerrarConexionPOOL();
    res.json(result.recordset);
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexion2 = await abrirConexionPOOL('deleteCliente');

  const {
    Request,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  const myRequest2 = new Request(conexion2);
  myRequest2.input('idCliente', Int, parseInt(req.body.idCliente));
  const query = `update clientes set estado = 0 where id = @idCliente`;

  try {
    const result = await myRequest2.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Cliente Eliminado Correctamente'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    nombreCliente,
    razonSocialCliente,
    idCliente
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexion = await abrirConexionPOOL('updateCliente');

  const {
    Request,
    Int,
    VarChar
  } = __webpack_require__(/*! mssql */ "mssql");

  const myRequest = new Request(conexion);
  myRequest.input('nombreCliente', VarChar, nombreCliente);
  myRequest.input('razonSocialCliente', VarChar, razonSocialCliente);
  myRequest.input('idCliente', Int, idCliente);
  const query = ` update clientes
    set
    nombre = @nombreCliente ,
    razon_social = @razonSocialCliente
    where id = @idCliente`;

  try {
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Cliente Actualizado Correctamente '
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.post('/insert', async (req, res) => {
  const {
    nombreCliente,
    razonSocialCliente
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar
  } = __webpack_require__(/*! mssql */ "mssql");

  const conexion = await abrirConexionPOOL('insertCliente');
  const myRequest = new Request(conexion);
  myRequest.input('nombreCliente', VarChar, nombreCliente);
  myRequest.input('razonSocialCliente', VarChar, razonSocialCliente);
  const query = `insert into clientes ( nombre , razon_social , estado  ) values  ( @nombreCliente , @razonSocialCliente , 1 )`;

  try {
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Cliente Insertado correctamente'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/defectos.js":
/*!******************************!*\
  !*** ./rutasApi/defectos.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query('select d.id as idDefecto, d.nombre as nombreDefecto, d.id_operacion as idOperacion,o.nombre as nombreOperacion from defectos d join operaciones o on d.id_operacion=o.id where d.estado = 1', (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.post('/insert', async (req, res) => {
  const {
    nombreDefecto,
    idOperacion
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('insertDefecto');
    const myRequest = new Request(conexion);
    myRequest.input('nombreDefecto', VarChar, nombreDefecto);
    myRequest.input('idOperacion', Int, idOperacion);
    const query = `insert into defectos ( nombre , id_operacion , estado )
        values
        ( @nombreDefecto , @idOperacion , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Defecto Insertado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idDefecto,
    nombreDefecto,
    idOperacion
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('updateDefecto');
    const myRequest = new Request(conexion);
    myRequest.input('nombreDefecto', VarChar, nombreDefecto);
    myRequest.input('idOperacion', Int, idOperacion);
    myRequest.input('idDefecto', Int, idDefecto);
    const query = `update defectos
        set
        nombre = @nombreDefecto ,
        id_operacion = @idOperacion
        where id = @idDefecto`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Defecto actualizado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idDefecto
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('deleteDefecto');
    const myRequest = new Request(conexion);
    myRequest.input('idDefecto', Int, idDefecto);
    const query = `update defectos
        set
        estado = 0
        where id = @idDefecto`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Defecto eliminado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/maquinas.js":
/*!******************************!*\
  !*** ./rutasApi/maquinas.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request();
  consulta.query(`select m.id as idMaquina , m.nombre as nombreMaquina , m.descripcion as descripcionMaquina ,
    m.id_tipos_maquina as idTipoMaquina , tm.nombre as nombreTipoMaquina , m.id_planta as idPlanta , p.nombre as nombrePlanta
    from maquinas m
    join tipos_maquina tm on m.id_tipos_maquina = tm.id
    join plantas p on m.id_planta = p.id
    where m.estado = 1`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.get('/xoperacion/:idOperacion', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    idOperacion
  } = req.params;
  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request();
  consulta.query(`select m.id as idMaquina, m.nombre as nombreMaquina
    from maquinas m
    join tipos_maquina tm on m.id_tipos_maquina = tm.id
    where m.estado = 1 and tm.id_operacion = ${idOperacion}`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.post('/insert', async (req, res) => {
  const {
    nombreMaquina,
    descripcionMaquina,
    idTipoMaquina,
    idPlanta
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('insertMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('nombreMaquina', VarChar, nombreMaquina);
    myRequest.input('descripcionMaquina', VarChar, descripcionMaquina);
    myRequest.input('idTipoMaquina', Int, idTipoMaquina);
    myRequest.input('idPlanta', Int, idPlanta);
    const query = `insert into maquinas ( nombre , descripcion , id_tipos_maquina , id_planta , estado )
    values
    ( @nombreMaquina , @descripcionMaquina , @idTipoMaquina , @idPlanta , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Maquina Insertada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idMaquina,
    nombreMaquina,
    descripcionMaquina,
    idTipoMaquina,
    idPlanta
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('updateMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('nombreMaquina', VarChar, nombreMaquina);
    myRequest.input('descripcionMaquina', VarChar, descripcionMaquina);
    myRequest.input('idTipoMaquina', Int, idTipoMaquina);
    myRequest.input('idPlanta', Int, idPlanta);
    myRequest.input('idMaquina', Int, idMaquina);
    const query = `update maquinas
    set
    nombre = @nombreMaquina ,
    descripcion = @descripcionMaquina ,
    id_tipos_maquina = @idTipoMaquina ,
    id_planta = @idPlanta
    where id = @idMaquina`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Maquina actualizada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idMaquina
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('deleteMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('idMaquina', Int, idMaquina);
    const query = `update maquinas
    set
    estado = 0
    where id = @idMaquina`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Maquina eliminada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/moldes.js":
/*!****************************!*\
  !*** ./rutasApi/moldes.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request();
  const query = `select m.id as idMolde , m.nombre as nombreMolde , m.id_pieza as idPieza , p.nombre as nombrePieza
    from moldes m
    join piezas p on m.id_pieza = p.id
    where m.estado = 1`;
  consulta.query(query, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.get('/xpieza/:idPieza', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();
  const {
    idPieza
  } = req.params;

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request();
  consulta.query('select id as idMolde, nombre as nombreMolde from moldes where estado = 1 and id_pieza = ' + idPieza, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.post('/insert', async (req, res) => {
  const {
    nombreMolde,
    idPieza
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('insertMolde');
    const myRequest = new Request(conexion);
    myRequest.input('nombreMolde', VarChar, nombreMolde);
    myRequest.input('idPieza', Int, idPieza);
    const query = `insert into moldes ( nombre , id_pieza , estado )
        values
        ( @nombreMolde , @idPieza , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Molde Insertado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idMolde,
    nombreMolde,
    idPieza
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('updateMolde');
    const myRequest = new Request(conexion);
    myRequest.input('nombreMolde', VarChar, nombreMolde);
    myRequest.input('idPieza', Int, idPieza);
    myRequest.input('idMolde', Int, idMolde);
    const query = `update moldes
        set
        nombre = @nombreMolde ,
        id_pieza = @idPieza
        where id = @idMolde`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Molde actualizado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idMolde
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('deleteMolde');
    const myRequest = new Request(conexion);
    myRequest.input('idMolde', Int, idMolde);
    const query = `update moldes
        set
        estado = 0
        where id = @idMolde`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Molde eliminado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/oee.js":
/*!*************************!*\
  !*** ./rutasApi/oee.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.post('/fundicion', async (req, res) => {
  const {
    idMaquina,
    idPieza,
    idMolde,
    fechaFundicionDesde,
    fechaFundicionHasta
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const mssql = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('listaOEEfundicion');
    const myReques = new mssql.Request(conexion);
    myReques.input('idMaquina', mssql.Int, idMaquina);
    myReques.input('idPieza', mssql.Int, idPieza);
    myReques.input('idMolde', mssql.Int, idMolde);
    myReques.input('fechaFundicionDesde', mssql.Date, fechaFundicionDesde);
    myReques.input('fechaFundicionHasta', mssql.Date, fechaFundicionHasta);
    const result = await myReques.execute('pa_datosOEEfun');

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.post('/granallado', async (req, res) => {
  const {
    idMaquina,
    idPieza,
    idMolde,
    fechaProduccionDesde,
    fechaProduccionHasta
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const mssql = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('listaOEEgranallado');
    const myReques = new mssql.Request(conexion);
    myReques.input('idMaquina', mssql.Int, idMaquina);
    myReques.input('idPieza', mssql.Int, idPieza);
    myReques.input('idMolde', mssql.Int, idMolde);
    myReques.input('fechaProduccionDesde', mssql.Date, fechaProduccionDesde);
    myReques.input('fechaProduccionHasta', mssql.Date, fechaProduccionHasta);
    const result = await myReques.execute('pa_datosOEEgra');

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.post('/mecanizado', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    idMaquina,
    idPieza,
    idMolde,
    fechaProduccionDesde,
    fechaProduccionHasta
  } = req.body;

  try {
    const conexion = await abrirConexionPOOL('listaOEEmecanizado');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myReques = new mssql.Request(conexion);
    myReques.input('idMaquina', mssql.Int, idMaquina);
    myReques.input('idPieza', mssql.Int, idPieza);
    myReques.input('idMolde', mssql.Int, idMolde);
    myReques.input('fechaProduccionDesde', mssql.Date, fechaProduccionDesde);
    myReques.input('fechaProduccionHasta', mssql.Date, fechaProduccionHasta);
    const result = await myReques.execute('pa_datosOEEmec');

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/operaciones.js":
/*!*********************************!*\
  !*** ./rutasApi/operaciones.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  var {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query(`select id as idOperacion, nombre as nombreOperacion
        from operaciones where estado = 1`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.post('/insert', async (req, res) => {
  const {
    nombreOperacion
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('insertOperacion');

    const {
      Request,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreOperacion', VarChar, nombreOperacion);
    const query = `insert into operaciones ( nombre , estado )
        values
        ( @nombreOperacion , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Operacion insertada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    nombreOperacion,
    idOperacion
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('updateOperacion');
    const myRequest = new Request(conexion);
    myRequest.input('nombreOperacion', VarChar, nombreOperacion);
    myRequest.input('idOperacion', Int, idOperacion);
    const query = `update operaciones
        set
        nombre = @nombreOperacion
        where id = @idOperacion`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Operacion actualizada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idOperacion
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('deleteOperacion');
    const myRequest = new Request(conexion);
    myRequest.input('idOperacion', Int, idOperacion);
    const query = `update operaciones
        set
        estado = 0
        where id = @idOperacion`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Operacion eliminada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/paradasMaquina.js":
/*!************************************!*\
  !*** ./rutasApi/paradasMaquina.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  var {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  var {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query(`select pm.id as idParadaMaquina, pm.nombre as nombreParadaMaquina, pm.tipo as tipoParadaMaquina , pm.setup as setupParadaMaquina , pm.id_area as idArea, a.nombre as nombreArea
        from paradas_maquina pm
		join areas a on pm.id_area=a.id
        where pm.estado = 1`, (e, dato) => {
    if (!e) {
      cerrarConexion();
      res.json(dato.recordset);
    } else {
      cerrarConexion();
      res.json({
        mensaje: e.message
      });
    }
  });
});
router.post('/insert', async (req, res) => {
  const {
    nombreParadaMaquina,
    tipoParadaMaquina,
    setupParadaMaquina,
    idArea
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int,
    Bit
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('insertParadaMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('nombreParadaMaquina', VarChar, nombreParadaMaquina);
    myRequest.input('tipoParadaMaquina', Bit, tipoParadaMaquina);
    myRequest.input('idArea', Int, idArea);
    myRequest.input('setupParadaMaquina', Int, setupParadaMaquina);
    const query = `insert into paradas_maquina ( nombre , tipo , setup , id_area , estado )
        values
        ( @nombreParadaMaquina , @tipoParadaMaquina , @setupParadaMaquina , @idArea , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Parada de Maquina Insertado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idParadaMaquina,
    nombreParadaMaquina,
    setupParadaMaquina,
    tipoParadaMaquina,
    idArea
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int,
    Bit
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('updateParadaMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('nombreParadaMaquina', VarChar, nombreParadaMaquina);
    myRequest.input('tipoParadaMaquina', Bit, tipoParadaMaquina);
    myRequest.input('idArea', Int, idArea);
    myRequest.input('idParadaMaquina', Int, idParadaMaquina);
    myRequest.input('setupParadaMaquina', Int, setupParadaMaquina);
    const query = `update paradas_maquina
        set
        nombre = @nombreParadaMaquina ,
        tipo = @tipoParadaMaquina ,
        setup = @setupParadaMaquina ,
        id_area = @idArea
        where id = @idParadaMaquina`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Parada de maquina actualizada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idParadaMaquina
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('deleteParadaMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('idParadaMaquina', Int, idParadaMaquina);
    const query = `update paradas_maquina
        set
        estado = 0
        where id = @idParadaMaquina`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Paradas de Maquina eliminada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/piezas.js":
/*!****************************!*\
  !*** ./rutasApi/piezas.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");

const router = express.Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();
  const {
    Request
  } = new __webpack_require__(/*! mssql */ "mssql");
  const consulta = new Request();
  consulta.query(`select p.id as idPieza, p.nombre as nombrePieza , p.id_cliente as idCliente , c.nombre as nombreCliente ,
        p.id_tipos_material as idTipoMaterial , tm.nombre as nombreTipoMaterial
        from piezas p
        join clientes c on p.id_cliente = c.id
        join tipos_material tm on p.id_tipos_material = tm.id
        where p.estado = 1`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.get('/xmaquina/:idMaquina', async (req, res) => {
  // ! LISTADO DE PIEZAS SEGUN MAQUINA
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();
  const {
    idMaquina
  } = req.params;

  var {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query(`select p.id as idPieza, p.nombre as nombrePieza
        from piezas p
        join procesos pro
        on pro.id_pieza = p.id
        where p.estado = 1 and pro.id_maquina = ${idMaquina}`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.post('/insert', async (req, res) => {
  const {
    nombrePieza,
    idCliente,
    idTipoMaterial
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('insertPieza');

    const {
      Request,
      Int,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombrePieza', VarChar, nombrePieza);
    myRequest.input('idCliente', Int, idCliente);
    myRequest.input('idTipoMaterial', Int, idTipoMaterial);
    const query = `insert into piezas ( nombre , id_cliente , id_tipos_material , estado )
        values ( @nombrePieza , @idCliente , @idTipoMaterial , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Pieza insertada correctamente'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idPieza,
    nombrePieza,
    idCliente,
    idTipoMaterial
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('updatePieza');

    const {
      Request,
      Int,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('idPieza', Int, idPieza);
    myRequest.input('nombrePieza', VarChar, nombrePieza);
    myRequest.input('idCliente', Int, idCliente);
    myRequest.input('idTipoMaterial', Int, idTipoMaterial);
    const query = `update piezas
        set
        nombre = @nombrePieza ,
        id_cliente = @idCliente ,
        id_tipos_material = @idTipoMaterial
        where id = @idPieza`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Pieza actualizada correctamente'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idPieza
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('deletePieza');

    const {
      Request,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('idPieza', Int, idPieza);
    const query = `update piezas
        set
        estado = 0
        where id = @idPieza`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Pieza eliminada correctamente'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/planillasProduccion.js":
/*!*****************************************!*\
  !*** ./rutasApi/planillasProduccion.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const Moment = __webpack_require__(/*! moment */ "moment");

const router = Router();

const convierteHora = hora => {
  var HorInicionO = new Date(`2020-02-15T${hora}:00`);
  HorInicionO.setHours(HorInicionO.getHours() - 3);
  return HorInicionO;
};

router.post('/delete', async (req, res) => {
  const {
    idPlanilla
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexionAbierta = await abrirConexionPOOL('eliminaPlanilla');

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request(conexionAbierta);

  try {
    const result = await consulta.query(`update planillas_produccion
        set
        estado = 0
        where id = ${parseInt(idPlanilla)}`);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Eliminacion exitosa !'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.post('/listar', async (req, res) => {
  const {
    fechaDesdeProduccion,
    fechaHastaProduccion,
    fechaDesdeFundicion,
    fechaHastaFundicon,
    idMaquina,
    idPieza,
    idMolde,
    idTipoProceso,
    idOperacion
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexionAbierta = await abrirConexionPOOL();

  const {
    Transaction,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  const transaccion = new Transaction(conexionAbierta);

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const mssql = __webpack_require__(/*! mssql */ "mssql");

  transaccion.begin(async e => {
    if (e) {
      res.json({
        mensaje: e.message
      });
    }

    const sqlConsulta = `
        select pl.id as idPlanilla, pl.fe_carga as fechaCarga, pl.fe_produccion as fechaProduccion, pl.fe_fundicion as fechaFundicion,
        pl.hora_inicio as horaInicio , pl.hora_fin as horaFin, tm.id_operacion as idOperacion, maq.id as idMaquina ,maq.nombre as nombreMaquina , pie.id as idPieza,
        pie.nombre as nombrePieza , mol.id as idMolde,  mol.nombre as nombreMolde , tp.id as idTipoProceso, tp.nombre as tipoProceso
        , pl.id_proceso as idProceso
        from planillas_produccion pl
        join moldes mol on pl.id_molde = mol.id
        join procesos p on pl.id_proceso = p.id
        join piezas pie on p.id_pieza = pie.id
        join maquinas maq on p.id_maquina = maq.id
        join tipos_proceso tp on p.id_tipos_proceso = tp.id
        join tipos_maquina tm on maq.id_tipos_maquina = tm.id
        where pl.estado = 1
        and  pl.fe_fundicion between @fechaDesdeFundicion and  @fechaHastaFundicon
        and  pl.fe_produccion between  @fechaDesdeProduccion and  @fechaHastaProduccion
        and (  @idMaquina  is null  or p.id_maquina =  @idMaquina  )
        and (  @idPieza  is null  or p.id_pieza =  @idPieza  )
        and (  @idMolde  is null  or pl.id_molde =  @idMolde  )
        and (  @idTipoProceso  is null  or p.id_tipos_proceso =  @idTipoProceso  )
        and (  @idOperacion  is null  or tm.id_operacion =   @idOperacion  ) `;
    const consultaPlanilla = new Request(transaccion);
    consultaPlanilla.input('fechaDesdeFundicion', mssql.Date, fechaDesdeFundicion);
    consultaPlanilla.input('fechaHastaFundicon', mssql.Date, fechaHastaFundicon);
    consultaPlanilla.input('fechaDesdeProduccion', mssql.Date, fechaDesdeProduccion);
    consultaPlanilla.input('fechaHastaProduccion', mssql.Date, fechaHastaProduccion);
    consultaPlanilla.input('idMaquina', Int, idMaquina === '' ? null : parseInt(idMaquina));
    consultaPlanilla.input('idPieza', Int, idPieza === '' ? null : parseInt(idPieza));
    consultaPlanilla.input('idMolde', Int, idMolde === '' ? null : parseInt(idMolde));
    consultaPlanilla.input('idTipoProceso', Int, idTipoProceso === '' ? null : parseInt(idTipoProceso));
    consultaPlanilla.input('idOperacion', Int, idOperacion === '' ? null : parseInt(idOperacion));
    const consultaOperariosXplanilla = new Request(transaccion);
    const consultaRechazos = new Request(transaccion);
    const consultaZonas = new Request(transaccion);
    const consultaPM = new Request(transaccion);
    var vecPlanillaProduccion = [];
    var vecTrabajadores;
    var vecRechazos;
    var vecZonas;
    var vecPM;

    try {
      var resultPlanillaProduccion = await consultaPlanilla.query(sqlConsulta);

      if (Array.isArray(resultPlanillaProduccion.recordset)) {
        resultPlanillaProduccion.recordset.forEach(pla => {
          var planilla = {
            idPlanilla: pla.idPlanilla,
            fechaCarga: pla.fechaCarga,
            fechaProduccion: pla.fechaProduccion,
            fechaFundicion: pla.fechaFundicion,
            horaInicio: new Moment(pla.horaInicio).format("HH:mm"),
            horaFin: new Moment(pla.horaFin).format("HH:mm"),
            idOperacion: pla.idOperacion,
            idMaquina: pla.idMaquina,
            nombreMaquina: pla.nombreMaquina,
            idPieza: pla.idPieza,
            nombrePieza: pla.nombrePieza,
            idMolde: pla.idMolde,
            nombreMolde: pla.nombreMolde,
            idTipoProceso: pla.idTipoProceso,
            tipoProceso: pla.tipoProceso,
            idProceso: pla.idProceso
          };
          vecPlanillaProduccion.push(planilla);
        });
        var listaIdPlanillasProduc = '';
        vecPlanillaProduccion.forEach((pla, indexPlanilla) => {
          if (indexPlanilla === resultPlanillaProduccion.recordset.length - 1) {
            listaIdPlanillasProduc += `${parseInt(pla.idPlanilla)} `;
          } else {
            listaIdPlanillasProduc += `${parseInt(pla.idPlanilla)} ,`;
          }
        });

        if (listaIdPlanillasProduc === '') {
          listaIdPlanillasProduc = null;
        }

        var sqlConsultaOperariosXplanilla = `select txp.id as idTrabajadorXplanilla , t.nombre as nombreTrabajador, t.apellido as apellidoTrabajador, tur.descripcion  as turnoTrabajador ,
                txp.hora_inicio as horaInicio , txp.hora_fin as horaFin,  txp.pza_producidas as piezasProducidas ,
                txp.calorias as calorias , txp.id_planilla as idPlanilla , txp.id_trabajador as idTrabajador , txp.id_turno as idTurno
                from trabajador_x_planilla txp
                join trabajadores t on txp.id_trabajador = t.id
                join turnos tur on txp.id_turno = tur.id
                where txp.estado = 1
                and txp.id_planilla in ( ${listaIdPlanillasProduc} )  ; `;
        var sqlConsultaPM = ` select pmxp.id as idParadaMaquinaXplanilla , pm.id as idParadaMaquina , pm.nombre as nombreParadaMaquina ,
                pmxp.hora_incio as horaInicioParadaMaquina , pmxp.hora_fin as horaFinParadaMaquina , pmxp.id_planilla as idPlanilla , pm.tipo as tipoParadaMaquina
                from paradas_maquinas_x_planilla pmxp
                join paradas_maquina pm on pmxp.id_paradas_maquina = pm.id
                where pmxp.estado = 1
                and pmxp.id_planilla in ( ${listaIdPlanillasProduc} ) ; `;
        const trabajadoresXplanilla = await consultaOperariosXplanilla.query(sqlConsultaOperariosXplanilla + sqlConsultaPM);

        if (trabajadoresXplanilla.recordsets[0] && trabajadoresXplanilla.recordsets[1]) {
          vecTrabajadores = trabajadoresXplanilla.recordsets[0];
          vecPM = trabajadoresXplanilla.recordsets[1];
          var listaIdTrabajadores = '';
          vecTrabajadores.forEach((t, i) => {
            if (i === vecTrabajadores.length - 1) {
              listaIdTrabajadores += `${parseInt(t.idTrabajadorXplanilla)} `;
            } else {
              listaIdTrabajadores += `${parseInt(t.idTrabajadorXplanilla)} ,`;
            }
          });

          if (listaIdTrabajadores === '') {
            listaIdTrabajadores = null;
          }

          var sqlConsultaRechazos = ` select rxtyp.id as idRechazoXtrabajadorYplanilla , d.nombre as nombreRechazo ,
                    rxtyp.tipo as tipoRechazo , rxtyp.cantidad as cantidadRechazos , rxtyp.id_trabajador_x_planilla as idTrabajadorXplanilla , rxtyp.id_defecto as idDefecto
                    from rechazos_x_trabajador_y_planilla rxtyp
                    join defectos d on rxtyp.id_defecto = d.id
                    where rxtyp.estado = 1
                    and rxtyp.id_trabajador_x_planilla in ( ${listaIdTrabajadores} ) ; `;
          const rechazos = await consultaRechazos.query(sqlConsultaRechazos);

          if (rechazos.recordset) {
            vecRechazos = rechazos.recordset;
            var listaIdRechazos = '';
            vecRechazos.forEach((re, indexRechazo) => {
              if (indexRechazo === vecRechazos.length - 1) {
                listaIdRechazos += `${parseInt(re.idRechazoXtrabajadorYplanilla)} `;
              } else {
                listaIdRechazos += `${parseInt(re.idRechazoXtrabajadorYplanilla)} ,`;
              }
            });

            if (listaIdRechazos === '') {
              listaIdRechazos = null;
            }

            const sqlConsultaZonas = ` select zxryp.id as idZona , zxryp.letra as letraZona ,
                        zxryp.numero as numeroZona , zxryp.cantidad as cantidadZona ,
                        zxryp.id_rechazos_x_trabajador_y_planilla as idRechazosXtrabajadorYplanilla
                        from zonas_x_rechazo_x_planilla zxryp
                        where zxryp.estado = 1
                        and zxryp.id_rechazos_x_trabajador_y_planilla in ( ${listaIdRechazos} ) ; `;

            var direrenciaEnMinutos = (horaInicio, horaFin) => {
              const h_inicio = new Moment(horaInicio).format("HH:mm");
              var h_fin = new Moment(horaFin).format("HH:mm");
              var hDesde = new Date(`1995-12-17T03:${h_inicio}`);
              var hHasta = new Date(`1995-12-17T03:${h_fin}`);

              if (h_inicio === '06:00' && h_fin === '06:00') {
                return 24 * 60;
              } else if ((hHasta - hDesde) / 1000 < 0) {
                return (hHasta - hDesde) / 1000 + 1440;
              } else {
                return (hHasta - hDesde) / 1000;
              }
            };

            var listaZonas = await consultaZonas.query(sqlConsultaZonas);

            if (listaZonas.recordset) {
              vecZonas = listaZonas.recordset;
              vecPlanillaProduccion.forEach((pl, indexPlanilla) => {
                pl.vecOperarios = [];
                pl.vecParadasMaquinaSeleccionada = [];
                vecPM.forEach(pm => {
                  if (parseInt(pm.idPlanilla) === parseInt(pl.idPlanilla)) {
                    var paradaMaq = {
                      idParadaMaquinaXplanilla: pm.idParadaMaquinaXplanilla,
                      idParadaMaquina: pm.idParadaMaquina,
                      nombreParadaMaquina: pm.nombreParadaMaquina,
                      desdeParadaMaquina: new Moment(pm.horaInicioParadaMaquina).format("HH:mm"),
                      hastaParadaMaquina: new Moment(pm.horaFinParadaMaquina).format("HH:mm"),
                      duracionParadaMaquina: direrenciaEnMinutos(pm.horaInicioParadaMaquina, pm.horaFinParadaMaquina),
                      tipoParadaMaquina: pm.tipoParadaMaquina
                    };
                    pl.vecParadasMaquinaSeleccionada.push(paradaMaq);
                  }
                });
                vecTrabajadores.forEach((tr, indexTrabajador) => {
                  if (parseInt(pl.idPlanilla) === parseInt(tr.idPlanilla)) {
                    var traXpla = {
                      idTrabajadorXplanilla: tr.idTrabajadorXplanilla,
                      idOperario: tr.idTrabajador,
                      idTurno: tr.idTurno,
                      nombreTrabajador: tr.nombreTrabajador,
                      nombre: tr.idTrabajador,
                      apellidoTrabajador: tr.apellidoTrabajador,
                      turnoTrabajador: tr.turnoTrabajador,
                      horaInicio: new Moment(tr.horaInicio).format("HH:mm"),
                      horaFin: new Moment(tr.horaFin).format("HH:mm"),
                      produccion: tr.piezasProducidas,
                      calorias: tr.calorias,
                      vecRechazo: []
                    };
                    vecRechazos.forEach(re => {
                      if (parseInt(traXpla.idTrabajadorXplanilla) === parseInt(re.idTrabajadorXplanilla)) {
                        var rech = {
                          idRechazoXtrabajadorYplanilla: re.idRechazoXtrabajadorYplanilla,
                          idRechazo: re.idDefecto,
                          nombreRechazo: re.nombreRechazo,
                          tipo: re.tipoRechazo,
                          cantidadRechazo: re.cantidadRechazos,
                          vecZonas: []
                        };
                        vecZonas.forEach(zon => {
                          if (parseInt(zon.idRechazosXtrabajadorYplanilla) === parseInt(rech.idRechazoXtrabajadorYplanilla)) {
                            var zonaXrecha = {
                              idZona: zon.idZona,
                              letra: zon.letraZona,
                              numero: zon.numeroZona,
                              cantidad: zon.cantidadZona
                            };
                            rech.vecZonas.push(zonaXrecha);
                          }
                        });
                        traXpla.vecRechazo.push(rech);
                      }
                    });
                    pl.vecOperarios.push(traXpla);
                  }
                });
              }); // hola mundo 

              transaccion.commit();
              cerrarConexionPOOL();
              res.json(vecPlanillaProduccion);
            }
          }
        }
      }
    } catch (e) {
      transaccion.rollback();
      cerrarConexionPOOL();
      res.json({
        mensaje: e.message
      });
    }
  });
});
router.post('/update', async (req, res) => {
  var {
    fechaProduccion,
    fechaFundicion,
    idTurno,
    HoraInicioProduccion,
    HoraFinProduccion,
    idOperacion,
    idMaquina,
    idPieza,
    idMolde,
    idTipoProceso,
    vecOperarios,
    vecParadasMaquinaSeleccionada,
    idPlanilla
  } = req.body;
  console.log(idPlanilla);

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexionAbierta = await abrirConexionPOOL('updatePlanilla');

  const {
    Transaction
  } = __webpack_require__(/*! mssql */ "mssql");

  const mssql = __webpack_require__(/*! mssql */ "mssql");

  const {
    Request,
    PreparedStatement
  } = __webpack_require__(/*! mssql */ "mssql");

  const transaccion = await new Transaction(conexionAbierta);
  const ps_insercionPlanillaProduccion = await new PreparedStatement(transaccion);
  const deleteZonasRechazosOperariosPm = await new Request(transaccion);

  const asincrono = __webpack_require__(/*! async */ "async");

  transaccion.begin(async function (err) {
    if (!err) {
      const metodoTransaccion = async () => {
        try {
          const resultDelete = await deleteZonasRechazosOperariosPm.query(`
                        delete zonas_x_rechazo_x_planilla
                        where id_rechazos_x_trabajador_y_planilla in ( (select r.id
                        from rechazos_x_trabajador_y_planilla r
                        where r.id_trabajador_x_planilla in ( ( select t.id from trabajador_x_planilla t where t.id_planilla = ${idPlanilla} ) ) ) ) ;
                        delete rechazos_x_trabajador_y_planilla
                        where id_trabajador_x_planilla in ( ( select t.id from trabajador_x_planilla t where t.id_planilla = ${idPlanilla} ) ) ;
                        delete trabajador_x_planilla where id_planilla = ${idPlanilla} ;
                        delete paradas_maquinas_x_planilla where id_planilla = ${idPlanilla} ;
                    `);

          if (resultDelete) {
            ps_insercionPlanillaProduccion.input('fe_produccion', mssql.Date);
            ps_insercionPlanillaProduccion.input('fe_fundicion', mssql.Date);
            ps_insercionPlanillaProduccion.input('hora_inicio', mssql.Time);
            ps_insercionPlanillaProduccion.input('hora_fin', mssql.Time);
            ps_insercionPlanillaProduccion.input('id_molde', mssql.Int);
            ps_insercionPlanillaProduccion.input('idPlanilla', mssql.Int);
            await ps_insercionPlanillaProduccion.prepare(`set dateformat dmy ;
                            declare @idProce int ;
                            set @idProce = (select top 1 id from procesos p  where p.id_maquina = ${idMaquina} and p.id_pieza = ${idPieza} and id_tipos_proceso = ${idTipoProceso} ) ;
                            update planillas_produccion
                            set
                            fe_produccion = @fe_produccion ,
                            fe_fundicion = @fe_fundicion ,
                            hora_inicio = @hora_inicio ,
                            hora_fin = @hora_fin ,
                            id_proceso = @idProce ,
                            id_molde = @id_molde
                            where id = @idPlanilla`);
            const datosPlanillaProduccion = {
              fe_produccion: fechaProduccion,
              fe_fundicion: fechaFundicion,
              hora_inicio:  true ? convierteHora(HoraInicioProduccion) : undefined,
              hora_fin:  true ? convierteHora(HoraFinProduccion) : undefined,
              id_turno: parseInt(idTurno),
              id_molde: parseInt(idMolde),
              idPlanilla: parseInt(idPlanilla)
            };
            var resultC1;
            resultC1 = await ps_insercionPlanillaProduccion.execute(datosPlanillaProduccion);
            const unprepared = await ps_insercionPlanillaProduccion.unprepare();

            if (unprepared) {
              transaccion.rollback();
              cerrarConexionPOOL();
              res.json({
                mensaje: 'Error InsercionPlanilla'
              }).status(403);
            }

            if (resultC1) {
              var vecOperariosXplanilla = [];
              vecOperarios.forEach(operario => {
                var op = {
                  calorias: parseInt(operario.calorias),
                  pza_producidas: parseInt(operario.produccion),
                  hora_inicio:  true ? convierteHora(operario.horaInicio) : undefined,
                  hora_fin:  true ? convierteHora(operario.horaFin) : undefined,
                  id_trabajador: parseInt(operario.idOperario),
                  id_planilla: parseInt(idPlanilla),
                  id_turno: parseInt(operario.idTurno),
                  vecRechazos: operario.vecRechazo
                };
                vecOperariosXplanilla.push(op);
              });
              asincrono.eachSeries(vecOperariosXplanilla, (trabajador, callback) => {
                const ps_insercionTrabajadoresXPlanilla = new Request(transaccion);
                ps_insercionTrabajadoresXPlanilla.input('calorias', mssql.Int, trabajador.calorias);
                ps_insercionTrabajadoresXPlanilla.input('pza_producidas', mssql.Int, trabajador.pza_producidas);
                ps_insercionTrabajadoresXPlanilla.input('id_turno', mssql.Int, trabajador.id_turno);
                ps_insercionTrabajadoresXPlanilla.input('hora_inicio', mssql.Time, trabajador.hora_inicio);
                ps_insercionTrabajadoresXPlanilla.input('hora_fin', mssql.Time, trabajador.hora_fin);
                ps_insercionTrabajadoresXPlanilla.input('id_trabajador', mssql.Int, trabajador.id_trabajador);
                ps_insercionTrabajadoresXPlanilla.input('id_planilla', mssql.Int, trabajador.id_planilla);
                var vecRechazosTrabajadorXplanilla = [];
                trabajador.vecRechazos.forEach(re => {
                  var rechazoZ = {
                    cantidad: parseInt(re.cantidadRechazo),
                    tipo: re.tipo ? 1 : 0,
                    id_defecto: parseInt(re.idRechazo),
                    vecZonas: re.vecZonas
                  };
                  vecRechazosTrabajadorXplanilla.push(rechazoZ);
                });
                var consulta = `insert into trabajador_x_planilla
                                (calorias , pza_producidas, id_turno , hora_inicio , hora_fin , id_trabajador , id_planilla , estado)
                                values
                                (@calorias , @pza_producidas , @id_turno , @hora_inicio , @hora_fin , @id_trabajador , @id_planilla , 1) ;
                                declare @id_trabajador_x_planilla int ;
                                declare @id_rechazos_x_trabajador_y_planilla int ;
                                set @id_trabajador_x_planilla = ( select max( id ) as idTrabajadorXplanilla from trabajador_x_planilla ) ; `;
                vecRechazosTrabajadorXplanilla.forEach(rechazo => {
                  consulta += `insert into rechazos_x_trabajador_y_planilla
                                    (cantidad , tipo , id_defecto , id_trabajador_x_planilla , estado)
                                    values
                                    ( ${rechazo.cantidad}, ${rechazo.tipo} , ${rechazo.id_defecto} , @id_trabajador_x_planilla ,1) ;
                                    set @id_rechazos_x_trabajador_y_planilla = (select max(id) from rechazos_x_trabajador_y_planilla) ; `;
                  var vecZonasXrechazo = [];
                  rechazo.vecZonas.forEach(zona => {
                    var zoo = {
                      cantidad: parseInt(zona.cantidad),
                      letra: zona.letra,
                      numero: parseInt(zona.numero)
                    };
                    vecZonasXrechazo.push(zoo);
                  });
                  vecZonasXrechazo.forEach(zona => {
                    consulta += ` insert into zonas_x_rechazo_x_planilla
                                        (cantidad , letra , numero , id_rechazos_x_trabajador_y_planilla , estado )
                                        values
                                        ( ${zona.cantidad} , '${zona.letra}' , ${zona.numero} , @id_rechazos_x_trabajador_y_planilla , 1 ) ; `;
                  });
                });
                ps_insercionTrabajadoresXPlanilla.query(consulta, (err, result) => {
                  if (err) {
                    callback(err);
                  } else {
                    callback();
                  }
                });
              }, err => {
                if (err) {
                  transaccion.rollback();
                  cerrarConexionPOOL();
                  res.json({
                    mensaje: err.message
                  }).status(403);
                } else {
                  var vecParadasDeMaquina = [];
                  vecParadasMaquinaSeleccionada.forEach(pm => {
                    var paraMAC = {
                      hora_inicio:  true ? convierteHora(pm.desdeParadaMaquina) : undefined,
                      hora_fin:  true ? convierteHora(pm.hastaParadaMaquina) : undefined,
                      id_paradas_maquina: parseInt(pm.idParadaMaquina),
                      id_planilla: idPlanilla
                    };
                    vecParadasDeMaquina.push(paraMAC);
                  });
                  asincrono.eachSeries(vecParadasDeMaquina, (PM, callbackPM) => {
                    const consultaInsercionParadasDeMaquina = new Request(transaccion);
                    consultaInsercionParadasDeMaquina.input('hora_incio', mssql.Time, PM.hora_inicio);
                    consultaInsercionParadasDeMaquina.input('hora_fin', mssql.Time, PM.hora_fin);
                    consultaInsercionParadasDeMaquina.input('id_paradas_maquina', mssql.Int, PM.id_paradas_maquina);
                    consultaInsercionParadasDeMaquina.input('id_planilla', mssql.Int, PM.id_planilla);
                    consultaInsercionParadasDeMaquina.query(`insert into paradas_maquinas_x_planilla
                                            ( hora_incio , hora_fin , id_paradas_maquina , id_planilla , estado )
                                            values
                                            ( @hora_incio , @hora_fin , @id_paradas_maquina , @id_planilla , 1 )`, (ER, resultPM) => {
                      if (ER) {
                        callbackPM(ER);
                      } else {
                        callbackPM();
                      }
                    });
                  }, erroR => {
                    if (erroR) {
                      transaccion.rollback();
                      cerrarConexionPOOL();
                      res.json({
                        mensaje: erroR.message
                      }).status(403);
                    } else {
                      transaccion.commit();
                      cerrarConexionPOOL();
                      res.setHeader('Content-Type', 'text/event-stream');
                      res.status(200).json({
                        mensaje: 'Actualizacion exitosa'
                      });
                    }
                  });
                }
              });
            }
          }
        } catch (e) {
          transaccion.rollback();
          cerrarConexionPOOL();
          res.json({
            mensaje: e.message,
            mensaje2: 'Error catch FINAL'
          });
        }
      };

      metodoTransaccion();
    } else {
      console.log('err commit');
    }
  });
});
router.post('/insert', async (req, res) => {
  var {
    fechaProduccion,
    fechaFundicion,
    idTurno,
    HoraInicioProduccion,
    HoraFinProduccion,
    idOperacion,
    idMaquina,
    idPieza,
    idMolde,
    idTipoProceso,
    vecOperarios,
    vecParadasMaquinaSeleccionada
  } = req.body;
  var idPlanillaProduccion;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexionAbierta = await abrirConexionPOOL('consultasa');

  const {
    Transaction
  } = __webpack_require__(/*! mssql */ "mssql");

  const mssql = __webpack_require__(/*! mssql */ "mssql");

  const {
    Request,
    PreparedStatement
  } = __webpack_require__(/*! mssql */ "mssql");

  const transaccion = await new Transaction(conexionAbierta);
  const ps_insercionPlanillaProduccion = await new PreparedStatement(transaccion);
  const consultaIDplanillaProduccion = await new Request(transaccion);

  const asincrono = __webpack_require__(/*! async */ "async");

  transaccion.begin(async function (err) {
    if (!err) {
      const metodoTransaccion = async () => {
        try {
          ps_insercionPlanillaProduccion.input('fe_produccion', mssql.Date);
          ps_insercionPlanillaProduccion.input('fe_fundicion', mssql.Date);
          ps_insercionPlanillaProduccion.input('hora_inicio', mssql.Time);
          ps_insercionPlanillaProduccion.input('hora_fin', mssql.Time);
          ps_insercionPlanillaProduccion.input('id_molde', mssql.Int);
          await ps_insercionPlanillaProduccion.prepare(`set dateformat dmy ;
                        declare @idProce int ;
                        set @idProce = (select top 1 id from procesos p  where p.id_maquina = ${idMaquina} and p.id_pieza = ${idPieza} and id_tipos_proceso = ${idTipoProceso} and estado = 1 ) ;
                        insert into planillas_produccion
                        ( fe_carga , fe_produccion , fe_fundicion , hora_inicio , hora_fin , id_proceso , id_molde  , estado )
                        values
                        ( GETDATE() , @fe_produccion , @fe_fundicion , @hora_inicio , @hora_fin , @idProce , @id_molde , 1 )`);
          const datosPlanillaProduccion = {
            fe_produccion: fechaProduccion,
            fe_fundicion: fechaFundicion,
            hora_inicio:  true ? convierteHora(HoraInicioProduccion) : undefined,
            hora_fin:  true ? convierteHora(HoraFinProduccion) : undefined,
            id_turno: parseInt(idTurno),
            id_molde: parseInt(idMolde)
          };
          var resultC1;
          resultC1 = await ps_insercionPlanillaProduccion.execute(datosPlanillaProduccion);
          const unprepared = await ps_insercionPlanillaProduccion.unprepare();

          if (unprepared) {
            transaccion.rollback();
            cerrarConexionPOOL();
            res.json({
              mensaje: 'Error InsercionPlanilla'.yellow
            });
          }

          if (resultC1) {
            idPlanillaProduccion = await consultaIDplanillaProduccion.query(`select max( id ) as idPlanilla from planillas_produccion`);
          }

          if (idPlanillaProduccion.recordset[0].idPlanilla && !isNaN(idPlanillaProduccion.recordset[0].idPlanilla)) {
            var vecOperariosXplanilla = [];
            vecOperarios.forEach(operario => {
              var op = {
                calorias: parseInt(operario.calorias),
                pza_producidas: parseInt(operario.produccion),
                hora_inicio:  true ? convierteHora(operario.horaInicio) : undefined,
                hora_fin:  true ? convierteHora(operario.horaFin) : undefined,
                id_trabajador: parseInt(operario.idOperario),
                id_planilla: parseInt(idPlanillaProduccion.recordset[0].idPlanilla),
                id_turno: parseInt(operario.idTurno),
                vecRechazos: operario.vecRechazo
              };
              vecOperariosXplanilla.push(op);
            });
            asincrono.eachSeries(vecOperariosXplanilla, (trabajador, callback) => {
              const ps_insercionTrabajadoresXPlanilla = new Request(transaccion);
              ps_insercionTrabajadoresXPlanilla.input('calorias', mssql.Int, trabajador.calorias);
              ps_insercionTrabajadoresXPlanilla.input('pza_producidas', mssql.Int, trabajador.pza_producidas);
              ps_insercionTrabajadoresXPlanilla.input('id_turno', mssql.Int, trabajador.id_turno);
              ps_insercionTrabajadoresXPlanilla.input('hora_inicio', mssql.Time, trabajador.hora_inicio);
              ps_insercionTrabajadoresXPlanilla.input('hora_fin', mssql.Time, trabajador.hora_fin);
              ps_insercionTrabajadoresXPlanilla.input('id_trabajador', mssql.Int, trabajador.id_trabajador);
              ps_insercionTrabajadoresXPlanilla.input('id_planilla', mssql.Int, trabajador.id_planilla);
              var vecRechazosTrabajadorXplanilla = [];
              trabajador.vecRechazos.forEach(re => {
                var rechazoZ = {
                  cantidad: parseInt(re.cantidadRechazo),
                  tipo: re.tipo ? 1 : 0,
                  id_defecto: parseInt(re.idRechazo),
                  vecZonas: re.vecZonas
                };
                vecRechazosTrabajadorXplanilla.push(rechazoZ);
              });
              var consulta = `insert into trabajador_x_planilla
                            (calorias , pza_producidas, id_turno , hora_inicio , hora_fin , id_trabajador , id_planilla , estado)
                            values
                            (@calorias , @pza_producidas , @id_turno , @hora_inicio , @hora_fin , @id_trabajador , @id_planilla , 1) ;
                            declare @id_trabajador_x_planilla int ;
                            declare @id_rechazos_x_trabajador_y_planilla int ;
                            set @id_trabajador_x_planilla = ( select max( id ) as idTrabajadorXplanilla from trabajador_x_planilla ) ; `;
              vecRechazosTrabajadorXplanilla.forEach(rechazo => {
                consulta += `insert into rechazos_x_trabajador_y_planilla
                                (cantidad , tipo , id_defecto , id_trabajador_x_planilla , estado)
                                values
                                ( ${rechazo.cantidad}, ${rechazo.tipo} , ${rechazo.id_defecto} , @id_trabajador_x_planilla ,1) ;
                                set @id_rechazos_x_trabajador_y_planilla = (select max(id) from rechazos_x_trabajador_y_planilla) ; `;
                var vecZonasXrechazo = [];
                rechazo.vecZonas.forEach(zona => {
                  var zoo = {
                    cantidad: parseInt(zona.cantidad),
                    letra: zona.letra,
                    numero: parseInt(zona.numero)
                  };
                  vecZonasXrechazo.push(zoo);
                });
                vecZonasXrechazo.forEach(zona => {
                  consulta += ` insert into zonas_x_rechazo_x_planilla
                                    (cantidad , letra , numero , id_rechazos_x_trabajador_y_planilla , estado )
                                    values
                                    ( ${zona.cantidad} , '${zona.letra}' , ${zona.numero} , @id_rechazos_x_trabajador_y_planilla , 1 ) ; `;
                });
              });
              ps_insercionTrabajadoresXPlanilla.query(consulta, (err, result) => {
                if (err) {
                  callback(err);
                } else {
                  callback();
                }
              });
            }, err => {
              if (err) {
                transaccion.rollback();
                cerrarConexionPOOL();
                res.json({
                  mensaje: err.message
                });
              } else {
                var vecParadasDeMaquina = [];
                vecParadasMaquinaSeleccionada.forEach(pm => {
                  var paraMAC = {
                    hora_inicio:  true ? convierteHora(pm.desdeParadaMaquina) : undefined,
                    hora_fin:  true ? convierteHora(pm.hastaParadaMaquina) : undefined,
                    id_paradas_maquina: parseInt(pm.idParadaMaquina),
                    id_planilla: idPlanillaProduccion.recordset[0].idPlanilla
                  };
                  vecParadasDeMaquina.push(paraMAC);
                });
                asincrono.eachSeries(vecParadasDeMaquina, (PM, callbackPM) => {
                  const consultaInsercionParadasDeMaquina = new Request(transaccion);
                  consultaInsercionParadasDeMaquina.input('hora_incio', mssql.Time, PM.hora_inicio);
                  consultaInsercionParadasDeMaquina.input('hora_fin', mssql.Time, PM.hora_fin);
                  consultaInsercionParadasDeMaquina.input('id_paradas_maquina', mssql.Int, PM.id_paradas_maquina);
                  consultaInsercionParadasDeMaquina.input('id_planilla', mssql.Int, PM.id_planilla);
                  consultaInsercionParadasDeMaquina.query(`insert into paradas_maquinas_x_planilla
                                        ( hora_incio , hora_fin , id_paradas_maquina , id_planilla , estado )
                                        values
                                        ( @hora_incio , @hora_fin , @id_paradas_maquina , @id_planilla , 1 )`, (ER, resultPM) => {
                    if (ER) {
                      callbackPM(ER);
                    } else {
                      callbackPM();
                    }
                  });
                }, erroR => {
                  if (erroR) {
                    transaccion.rollback();
                    cerrarConexionPOOL();
                    res.json({
                      mensaje: erroR.message
                    });
                  } else {
                    transaccion.commit();
                    cerrarConexionPOOL();
                    res.setHeader('Content-Type', 'text/event-stream');
                    res.json({
                      mensaje: 'Insercion exitora'
                    });
                  }
                });
              }
            }); // ! FIN FOR EACH
          } //! FIN  IIF

        } //! FIN DEL TRY
        catch (e) {
          transaccion.rollback();
          cerrarConexionPOOL();
          res.json({
            mensaje: e.message,
            mensaje2: 'Error catch FINAL'
          });
        }
      };

      metodoTransaccion();
    } else {
      console.log('err commit');
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/plantas.js":
/*!*****************************!*\
  !*** ./rutasApi/plantas.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/list', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('listaPlantas');

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    const query = `select p.id as idPlanta , p.nombre as nombrePlanta , p.barrio as barrioPlanta ,
        p.cp as codigoPostalPlanta , p.calle as callePlanta , p.altura_calle as alturaCallePlanta
        from plantas p
        where p.estado = 1`;
    const response = await myRequest.query(query);

    if (response) {
      cerrarConexionPOOL();
      res.json(response.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.post('/insert', async (req, res) => {
  const {
    nombrePlanta,
    barrioPlanta,
    codigoPostalPlanta,
    callePlanta,
    alturaCallePlanta
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('insertPlanta');
    const myRequest = new Request(conexion);
    myRequest.input('nombrePlanta', VarChar, nombrePlanta);
    myRequest.input('barrioPlanta', VarChar, barrioPlanta);
    myRequest.input('codigoPostalPlanta', Int, codigoPostalPlanta);
    myRequest.input('callePlanta', VarChar, callePlanta);
    myRequest.input('alturaCallePlanta', Int, alturaCallePlanta);
    const query = `insert into plantas ( nombre , barrio , cp , calle , altura_calle , estado )
        values
        ( @nombrePlanta , @barrioPlanta , @codigoPostalPlanta , @callePlanta , @alturaCallePlanta , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Planta Insertada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idPlanta,
    nombrePlanta,
    barrioPlanta,
    codigoPostalPlanta,
    callePlanta,
    alturaCallePlanta
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('updatePlanta');
    const myRequest = new Request(conexion);
    myRequest.input('nombrePlanta', VarChar, nombrePlanta);
    myRequest.input('barrioPlanta', VarChar, barrioPlanta);
    myRequest.input('codigoPostalPlanta', Int, codigoPostalPlanta);
    myRequest.input('callePlanta', VarChar, callePlanta);
    myRequest.input('alturaCallePlanta', Int, alturaCallePlanta);
    myRequest.input('idPlanta', Int, idPlanta);
    const query = `update plantas
        set
        nombre = @nombrePlanta ,
        barrio = @barrioPlanta ,
        cp = @codigoPostalPlanta ,
        calle = @callePlanta ,
        altura_calle = @alturaCallePlanta
        where id = @idPlanta`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Planta actualizada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idPlanta
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('deletePlanta');
    const myRequest = new Request(conexion);
    myRequest.input('idPlanta', Int, idPlanta);
    const query = `update plantas
        set
        estado = 0
        where id = @idPlanta`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Planta eliminada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/procesos.js":
/*!******************************!*\
  !*** ./rutasApi/procesos.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query(`select id as idTipoProceso, nombre as nombreTipoProceso
        from tipos_proceso
        where estado = 1`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.post('/xmaquinapiezatipo', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();
  const {
    idMaquina,
    idPieza,
    idTipoProceso
  } = req.body;

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query(`select pro.id as idProceso, pro.descripcion as descripcionProceso
        from procesos pro
        where pro.estado = 1
        and pro.id_pieza = ${idPieza}
        and pro.id_maquina = ${idMaquina}
        and pro.id_tipos_proceso = ${idTipoProceso}`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.get('/list', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const conexion = await abrirConexionPOOL('selectProcesos');

  const {
    Transaction,
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const myTransaction = new Transaction(conexion);
  myTransaction.begin(async errorTransac => {
    if (errorTransac) {
      myTransaction.rollback();
      cerrarConexionPOOL();
      res.json({
        mensaje: errorTransac.message
      });
    }

    try {
      var vecProcesos = [];
      const myRequest = new Request(myTransaction);
      const myRequestPiezaXhs = new Request(myTransaction);
      const query = `select p.id as idProceso , p.descripcion as descipcionProceso , p.id_pieza as idPieza ,
            pie.nombre as nombrePieza , p.id_maquina as idMaquina , maq.nombre as nombreMaquina ,
            p.id_tipos_proceso as idTipoProceso , tp.nombre as nombreTipoProceso
            from procesos p
            join piezas pie on p.id_pieza = pie.id
            join maquinas maq on p.id_maquina = maq.id
            join tipos_proceso tp on p.id_tipos_proceso = tp.id
            where p.estado = 1`;
      const response = await myRequest.query(query);

      if (response) {
        vecProcesos = response.recordset;
        var idProcesos = '';

        if (Array.isArray(vecProcesos)) {
          vecProcesos.forEach((p, i) => {
            idProcesos += ` ${p.idProceso} ,`;
          });
        }

        if (idProcesos === '') {
          idProcesos = null;
        } else {
          idProcesos = idProcesos.trim().substring(0, idProcesos.length - 2);
        }

        console.log(idProcesos);
        const queryPiezaXhs = `select pxh.id as idPiezasXhs , pxh.cantidad as cantidadPiezasXhs , pxh.fe_desde as desdePiezasXhs ,
                pxh.fe_hasta as hastaPiezasXhs , pxh.id_proceso as idProceso
                from piezas_x_hora pxh
                where pxh.id_proceso in (${idProcesos})`;
        const resulrpzXhs = await myRequestPiezaXhs.query(queryPiezaXhs);
        var vecPiezasXhora = [];

        if (resulrpzXhs) {
          console.log(vecPiezasXhora);
          vecPiezasXhora = resulrpzXhs.recordset;
          console.log(resulrpzXhs.recordset);
          vecProcesos.forEach((p, i) => {
            p.vecPiezasXhora = [];
            vecPiezasXhora.forEach((pzXhs, index) => {
              if (parseInt(p.idProceso) === parseInt(pzXhs.idProceso)) {
                p.vecPiezasXhora.push(pzXhs);
              }
            });
          });
          myTransaction.commit();
          cerrarConexionPOOL();
          res.json(vecProcesos);
        }
      }
    } catch (e) {
      myTransaction.rollback();
      cerrarConexionPOOL();
      res.json({
        mensaje: e.message
      });
    }
  });
});
router.post('/insert', async (req, res) => {
  const {
    descripcionProceso,
    idPieza,
    idMaquina,
    idTiposProceso,
    vecPiezasXhora
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('insertProceso');

    const {
      Transaction,
      Request,
      Date,
      Int,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myTransaction = new Transaction(conexion);
    const myRequestProceso = new Request(myTransaction);

    const asincrono = __webpack_require__(/*! async */ "async");

    myTransaction.begin(async errorTrasactions => {
      if (errorTrasactions) {
        myTransaction.rollback();
        cerrarConexionPOOL();
        res.json({
          mensaje: errorTrasactions.message
        });
      }

      myRequestProceso.input('descripcionProceso', VarChar, descripcionProceso);
      myRequestProceso.input('idPieza', Int, idPieza);
      myRequestProceso.input('idMaquina', Int, idMaquina);
      myRequestProceso.input('idTiposProceso', Int, idTiposProceso);
      const queryProcesos = `insert into procesos ( descripcion , id_pieza , id_maquina , id_tipos_proceso , estado )
            values
            ( @descripcionProceso , @idPieza , @idMaquina , @idTiposProceso , 1 ) ;
            declare @idProceso int
            set @idProceso = ( select top 1 max ( id ) from procesos )
            select @idProceso as idProceso`;
      const responseProcesos = await myRequestProceso.query(queryProcesos);
      var idProceso;

      if (responseProcesos) {
        idProceso = responseProcesos.recordsets[0][0].idProceso;

        if (Array.isArray(vecPiezasXhora) && vecPiezasXhora.length > 0) {
          asincrono.eachSeries(vecPiezasXhora, (piezaXhs, callback) => {
            const myRequestPieXhs = new Request(myTransaction);
            myRequestPieXhs.input('cantidadPiezasXhs', Int, piezaXhs.cantidadPiezasXhs);
            myRequestPieXhs.input('desdePiezasXhs', Date, piezaXhs.desdePiezasXhs);
            myRequestPieXhs.input('hastaPiezasXhs', Date, piezaXhs.hastaPiezasXhs);
            myRequestPieXhs.input('idProceso', Int, parseInt(idProceso));
            const queryPiexhs = `insert into piezas_x_hora ( cantidad , fe_desde , fe_hasta , id_proceso , estado )
                        values ( @cantidadPiezasXhs , @desdePiezasXhs , @hastaPiezasXhs , @idProceso , 1 )`;
            myRequestPieXhs.query(queryPiexhs, (error, result) => {
              if (error) {
                callback(error);
              } else {
                callback();
              }
            });
          }, errorCalback => {
            if (errorCalback) {
              myTransaction.rollback();
              cerrarConexionPOOL();
              res.json({
                mensaje: errorCalback.message
              });
            } else {
              myTransaction.commit();
              cerrarConexionPOOL();
              res.json({
                mensaje: 'Proceso insertado correctamente'
              });
            }
          });
        }
      }
    });
  } catch (e) {
    myTransaction.rollback();
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idProceso,
    descripcionProceso,
    idPieza,
    idMaquina,
    idTiposProceso,
    vecPiezasXhora
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('insertProceso');

    const {
      Transaction,
      Request,
      Date,
      Int,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myTransaction = new Transaction(conexion);
    const myRequestProceso = new Request(myTransaction);

    const asincrono = __webpack_require__(/*! async */ "async");

    myTransaction.begin(async errorTrasactions => {
      if (errorTrasactions) {
        myTransaction.rollback();
        cerrarConexionPOOL();
        res.json({
          mensaje: errorTrasactions.message
        });
      }

      myRequestProceso.input('descripcionProceso', VarChar, descripcionProceso);
      myRequestProceso.input('idPieza', Int, idPieza);
      myRequestProceso.input('idMaquina', Int, idMaquina);
      myRequestProceso.input('idTiposProceso', Int, idTiposProceso);
      myRequestProceso.input('idProceso', Int, idProceso);
      const queryProcesos = `update procesos
            set
            descripcion = @descripcionProceso ,
            id_pieza = @idPieza ,
            id_maquina = @idMaquina ,
            id_tipos_proceso = @idTiposProceso
            where id = @idProceso ; delete piezas_x_hora where id_proceso = @idProceso`;
      const responseProcesos = await myRequestProceso.query(queryProcesos);

      if (responseProcesos) {
        if (Array.isArray(vecPiezasXhora) && vecPiezasXhora.length > 0) {
          asincrono.eachSeries(vecPiezasXhora, (piezaXhs, callback) => {
            const myRequestPieXhs = new Request(myTransaction);
            myRequestPieXhs.input('cantidadPiezasXhs', Int, piezaXhs.cantidadPiezasXhs);
            myRequestPieXhs.input('desdePiezasXhs', Date, piezaXhs.desdePiezasXhs);
            myRequestPieXhs.input('hastaPiezasXhs', Date, piezaXhs.hastaPiezasXhs);
            myRequestPieXhs.input('idProceso', Int, parseInt(idProceso));
            const queryPiexhs = `insert into piezas_x_hora ( cantidad , fe_desde , fe_hasta , id_proceso , estado )
                        values ( @cantidadPiezasXhs , @desdePiezasXhs , @hastaPiezasXhs , @idProceso , 1 )`;
            myRequestPieXhs.query(queryPiexhs, (error, result) => {
              if (error) {
                callback(error);
              } else {
                callback();
              }
            });
          }, errorCalback => {
            if (errorCalback) {
              myTransaction.rollback();
              cerrarConexionPOOL();
              res.json({
                mensaje: errorCalback.message
              });
            } else {
              myTransaction.commit();
              cerrarConexionPOOL();
              res.json({
                mensaje: 'Proceso actualizado correctamente'
              });
            }
          });
        }
      }
    });
  } catch (e) {
    myTransaction.rollback();
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idProceso
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('deleteProceso');

    const {
      Request,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequestProceso = new Request(conexion);
    myRequestProceso.input('idProceso', Int, idProceso);
    const queryProcesos = `update procesos
        set
        estado = 0
        where id = @idProceso `;
    const responseProcesos = await myRequestProceso.query(queryProcesos);

    if (responseProcesos) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Procesos eliminado correctamente'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/puestos.js":
/*!*****************************!*\
  !*** ./rutasApi/puestos.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/list', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('listarPuestos');

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    const query = `select id as idPuesto , nombre as nombrePuesto from puestos where estado = 1`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.post('/insert', async (req, res) => {
  const {
    nombrePuesto
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('insertPuesto');

    const {
      Request,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombrePuesto', VarChar, nombrePuesto);
    const query = `insert into puestos ( nombre , estado )
        values
        ( @nombrePuesto , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Puesto insertado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idPuesto,
    nombrePuesto
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('updatePuesto');

    const {
      Request,
      Int,
      Date,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombrePuesto', VarChar, nombrePuesto);
    myRequest.input('idPuesto', Int, idPuesto);
    const query = `update puestos
                                    set
                                    nombre = @nombrePuesto
                                    where id = @idPuesto`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Puesto actualizado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idPuesto
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('deletePuesto');

    const {
      Request,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('idPuesto', Int, idPuesto);
    const query = `update puestos
                                    set
                                    estado = 0
                                    where id = @idPuesto`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Puesto eliminado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/reportes.js":
/*!******************************!*\
  !*** ./rutasApi/reportes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.post('/rechazosPrimeraVuelta', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    fechaFundicionDesde,
    fechaFundicionHasta,
    idMaquina,
    idPieza,
    idMolde
  } = req.body;

  try {
    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('consultaReporteRechazos');
    const myRequest = new mssql.Request(conexion);
    myRequest.input('fechaFundicionDesde', mssql.Date, fechaFundicionDesde);
    myRequest.input('fechaFundicionHasta', mssql.Date, fechaFundicionHasta);
    myRequest.input('idMaquina', mssql.Int, idMaquina);
    myRequest.input('idPieza', mssql.Int, idPieza);
    myRequest.input('idMolde', mssql.Int, idMolde);
    const result = await myRequest.execute('pa_rechazosTotales');

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      status: 403,
      mensaje: e.message
    });
  }
});
router.post('/paradasMaquina', async (req, res) => {
  const {
    idArea,
    fechaFundicionDesde,
    fechaFundicionHasta
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('reporteParadasMaquina');
    const myRequest = new mssql.Request(conexion);
    myRequest.input('idArea', mssql.Int, idArea);
    myRequest.input('fechaFundicionDesde', mssql.Date, fechaFundicionDesde);
    myRequest.input('fechaFundicionHasta', mssql.Date, fechaFundicionHasta);
    const result = await myRequest.execute('pa_reporteParadasMaquina');

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.post('/detalleParaMaquinaXmaquina', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    fechaDesdeFundicion,
    fechaHastaFundicion,
    nombreMaquina,
    idArea
  } = req.body;

  try {
    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('consultaDetallePardaMaquina');
    const myRequest = new mssql.Request(conexion);
    myRequest.input('fechaDesdeFundicion', mssql.Date, fechaDesdeFundicion);
    myRequest.input('fechaHastaFundicion', mssql.Date, fechaHastaFundicion);
    myRequest.input('nombreMaquina', mssql.VarChar, nombreMaquina);
    myRequest.input('idArea', mssql.Int, idArea);
    const result = await myRequest.execute('pa_detalleParadaMaquina');

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      status: 403,
      mensaje: e.message
    });
  }
});
router.post('/paradasMaquinaXpm', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    fechaDesdeFundicion,
    fechaHastaFundicion
  } = req.body;

  try {
    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('consultaPardaMaquinaXpm');
    const myRequest = new mssql.Request(conexion);
    myRequest.input('fechaDesdeFundicion', mssql.Date, fechaDesdeFundicion);
    myRequest.input('fechaHastaFundicion', mssql.Date, fechaHastaFundicion);
    const result = await myRequest.execute('pa_reportePM');

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      status: 403,
      mensaje: e.message
    });
  }
});
router.post('/detalleParaMaquinaXpm', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    fechaDesdeFundicion,
    fechaHastaFundicion,
    nombreParadaMaquina
  } = req.body;

  try {
    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const conexion = await abrirConexionPOOL('consultaDetallePardaMaquinaXpm2');
    const myRequest = new mssql.Request(conexion);
    myRequest.input('fechaDesdeFundicion', mssql.Date, fechaDesdeFundicion);
    myRequest.input('fechaHastaFundicion', mssql.Date, fechaHastaFundicion);
    myRequest.input('nombreParadaMaquina', mssql.VarChar, nombreParadaMaquina);
    const result = await myRequest.execute('pa_detalleParadaMaquina2');

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      status: 403,
      mensaje: e.message
    });
  }
});
router.post('/rechazosXpieza', async (req, res) => {
  const {
    fechaFundicionDesde,
    fechaFundicionHasta,
    idMaquina,
    idPieza,
    idMolde
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const mssql = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('consultaRechazosXmaquina');
    const myRequest = new mssql.Request(conexion);
    myRequest.input('fechaFundicionDesde', mssql.Date, fechaFundicionDesde);
    myRequest.input('fechaFundicionHasta', mssql.Date, fechaFundicionHasta);
    myRequest.input('idMaquina', mssql.Int, idMaquina);
    myRequest.input('idPieza', mssql.Int, idPieza);
    myRequest.input('idMolde', mssql.Int, idMolde);
    const result = await myRequest.execute('pa_rechazosXpiezas');

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      status: 403,
      mensaje: e.message
    });
  }
});
router.post('/calorias', async (req, res) => {
  const {
    fechaProduccionDesde,
    fechaProduccionHasta
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('reporteCalorias');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('fechaProduccionDesde', mssql.Date, fechaProduccionDesde);
    myRequest.input('fechaProduccionHasta', mssql.Date, fechaProduccionHasta);
    const result = await myRequest.execute('pa_caloriasXtrabajador');

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      status: 403,
      mensaje: e.message
    });
  }
});
router.post('/detalleCalorias', async (req, res) => {
  const {
    fechaProduccionDesde,
    fechaProduccionHasta,
    idTrabajador
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('reporteDetalleCalorias');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('fechaProduccionDesde', mssql.Date, fechaProduccionDesde);
    myRequest.input('fechaProduccionHasta', mssql.Date, fechaProduccionHasta);
    myRequest.input('idTrabajador', mssql.Int, idTrabajador);
    const result = await myRequest.execute('pa_detalleCaloriasTrabajadore');

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      status: 403,
      mensaje: e.message
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/tiposMaquina.js":
/*!**********************************!*\
  !*** ./rutasApi/tiposMaquina.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/list', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('listaTiposMaquina');

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    const query = `select tm.id as idTipoMaquina , tm.nombre as nombreTipoMaquina , tm.id_operacion as idOperacion ,
        o.nombre as nombreOperacion
        from tipos_maquina tm
        join operaciones o on tm.id_operacion = o.id
        where tm.estado = 1`;
    const response = await myRequest.query(query);

    if (response) {
      cerrarConexionPOOL();
      res.json(response.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.post('/insert', async (req, res) => {
  const {
    nombreTipoMaquina,
    idOperacion
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('insertTipoMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('nombreTipoMaquina', VarChar, nombreTipoMaquina);
    myRequest.input('idOperacion', Int, idOperacion);
    const query = `insert into tipos_maquina ( nombre , id_operacion , estado )
        values
        ( @nombreTipoMaquina , @idOperacion , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Tipo de maquina Insertada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idTipoMaquina,
    nombreTipoMaquina,
    idOperacion
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    VarChar,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('updateTipoMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('nombreTipoMaquina', VarChar, nombreTipoMaquina);
    myRequest.input('idOperacion', Int, idOperacion);
    myRequest.input('idTipoMaquina', Int, idTipoMaquina);
    const query = `update tipos_maquina
        set
        nombre = @nombreTipoMaquina ,
        id_operacion = @idOperacion
        where id = @idTipoMaquina`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Tipo de maquina actualizada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idTipoMaquina
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request,
    Int
  } = __webpack_require__(/*! mssql */ "mssql");

  try {
    const conexion = await abrirConexionPOOL('deleteTipoMaquina');
    const myRequest = new Request(conexion);
    myRequest.input('idTipoMaquina', Int, idTipoMaquina);
    const query = `update tipos_maquina
        set
        estado = 0
        where id = @idTipoMaquina`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Tipo de maquina eliminada correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/tiposMaterial.js":
/*!***********************************!*\
  !*** ./rutasApi/tiposMaterial.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/list', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('consultaListaClientes');

    const {
      Request
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    const query = `select id as idTipoMaterial , nombre as nombreTipoMaterial
        from tipos_material
        where estado = 1`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.post('/insert', async (req, res) => {
  const {
    nombreMaterial
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('insertTipoMatrial');

    const {
      Request,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreMaterial', VarChar, nombreMaterial);
    const query = `insert into tipos_material ( nombre , estado )
        values ( @nombreMaterial , 1 )  `;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Tipo de Material insertado correctamente '
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idTipoMaterial,
    nombreTipoMaterial
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('updateTipoMaterial');

    const {
      Request,
      VarChar,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreTipoMaterial', VarChar, nombreTipoMaterial);
    myRequest.input('idTipoMaterial', Int, idTipoMaterial);
    const query = `update tipos_material
        set
        nombre = @nombreTipoMaterial
        where id = @idTipoMaterial`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Tipo de Material actualizado correctamente '
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idTipoMaterial
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('deletTipoMaterial');

    const {
      Request,
      VarChar,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('idTipoMaterial', Int, idTipoMaterial);
    const query = `update tipos_material
        set
        estado = 0
        where id = @idTipoMaterial`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Tipo de Material eliminado  correctamente '
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/tiposProceso.js":
/*!**********************************!*\
  !*** ./rutasApi/tiposProceso.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request();
  consulta.query('select id as idTipoProceso, nombre as nombreTipoProceso from tipos_proceso where estado = 1 ', (e, result) => {
    if (e) {
      cerrarConexion();
      res.json({
        mensaje: e.message
      });
    } else {
      cerrarConexion();
      res.json(result.recordset);
    }
  });
});
router.post('/', async (req, res) => {
  const {
    idPieza,
    idMaquina
  } = req.body;

  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  const consulta = new Request();
  consulta.query(`select tp.id as idTipoProceso, tp.nombre as nombreTipoProceso from tipos_proceso tp
    join procesos p on tp.id = p.id_tipos_proceso where p.id_maquina = ${idMaquina} and p.id_pieza = ${idPieza} and tp.estado = 1`, (e, result) => {
    if (e) {
      cerrarConexion();
      res.json({
        mensaje: e.message
      });
    } else {
      cerrarConexion();
      res.json(result.recordset);
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/trabajadores.js":
/*!**********************************!*\
  !*** ./rutasApi/trabajadores.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  await abrirConexion();
  var consulta = new Request();
  consulta.query(`select t.id as idTrabajador, t.nombre as nombreTrabajador, t.apellido as apellidoTrabajador,
        t.f_nacimiento as nacimientoTrabajador, t.f_ingreso as ingresoTrabajador,
        t.id_puesto as idPuesto, p.nombre as nombrePuesto
        from trabajadores t
        join puestos p on t.id_puesto=p.id
        where t.estado = 1`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
router.post('/insert', async (req, res) => {
  const {
    nombreTrabajador,
    apellidoTrabajador,
    nacimientoTrabajador,
    ingresoTrabajador,
    idPuesto
  } = req.body;

  const Moment = __webpack_require__(/*! moment */ "moment");

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('insertTrabajador');

    const {
      Request,
      Int,
      Date,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreTrabajador', VarChar, nombreTrabajador);
    myRequest.input('apellidoTrabajador', VarChar, apellidoTrabajador);
    myRequest.input('nacimientoTrabajador', Date, nacimientoTrabajador);
    myRequest.input('ingresoTrabajador', Date, ingresoTrabajador);
    myRequest.input('idPuesto', Int, idPuesto);
    const query = `set dateformat dmy ; insert into trabajadores ( nombre , apellido , f_nacimiento , f_ingreso , id_puesto , estado )
        values
        ( @nombreTrabajador , @apellidoTrabajador , @nacimientoTrabajador , @ingresoTrabajador , @idPuesto , 1 )`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Trabajador insertado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/update', async (req, res) => {
  const {
    idTrabajador,
    nombreTrabajador,
    apellidoTrabajador,
    nacimientoTrabajador,
    ingresoTrabajador,
    idPuesto
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('updateTrabajador');

    const {
      Request,
      Int,
      Date,
      VarChar
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('nombreTrabajador', VarChar, nombreTrabajador);
    myRequest.input('apellidoTrabajador', VarChar, apellidoTrabajador);
    myRequest.input('nacimientoTrabajador', Date, nacimientoTrabajador);
    myRequest.input('ingresoTrabajador', Date, ingresoTrabajador);
    myRequest.input('idPuesto', Int, idPuesto);
    myRequest.input('idTrabajador', Int, idTrabajador);
    const query = `update trabajadores
                                    set
                                    nombre = @nombreTrabajador ,
                                    apellido = @apellidoTrabajador ,
                                    f_nacimiento = @nacimientoTrabajador ,
                                    f_ingreso = @ingresoTrabajador ,
                                    id_puesto = @idPuesto
                                    where id = @idTrabajador`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Trabajador actualizado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
router.put('/delete', async (req, res) => {
  const {
    idTrabajador
  } = req.body;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('deleteTrabajador');

    const {
      Request,
      Int
    } = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new Request(conexion);
    myRequest.input('idTrabajador', Int, idTrabajador);
    const query = `update trabajadores
                                    set
                                    estado = 0
                                    where id = @idTrabajador`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json({
        mensaje: 'Trabajador eliminado correctamente',
        status: 200
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.json({
      mensaje: e.message,
      status: 403
    });
  }
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/turnos.js":
/*!****************************!*\
  !*** ./rutasApi/turnos.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const router = Router();
router.get('/', async (req, res) => {
  const {
    abrirConexion,
    cerrarConexion
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  await abrirConexion();

  var {
    Request
  } = __webpack_require__(/*! mssql */ "mssql");

  var consulta = new Request();
  consulta.query(`select t.id as idTurno, t.descripcion as descripcionTurno,t.hs_inicio as hsInicioTurno ,t.hs_fin as hsFinTurno  
        from turnos t
        where estado = 1`, (err, dato) => {
    if (!err) {
      res.json(dato.recordset);
      cerrarConexion();
    } else {
      res.json({
        mensaje: err.message
      });
      cerrarConexion();
    }
  });
});
module.exports = router;

/***/ }),

/***/ "./rutasApi/usuarios.js":
/*!******************************!*\
  !*** ./rutasApi/usuarios.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  Router
} = __webpack_require__(/*! express */ "express");

const bcryp = __webpack_require__(/*! bcrypt */ "bcrypt");

__webpack_require__(/*! ../conexiones/mongoDb */ "./conexiones/mongoDb.js");

const Usuario = __webpack_require__(/*! ../esquemasMongo/esquemaUsuarios */ "./esquemasMongo/esquemaUsuarios.js");

const Perfil = __webpack_require__(/*! ../esquemasMongo/esquemaRolesUsuarios */ "./esquemasMongo/esquemaRolesUsuarios.js");

const router = Router(); // router.get('/',async (req,res)=>{
//     await Usuario.find((e,dato)=>{
//         e ? res.status(403).send('Error en el request') :
//         res.status(200).send(dato)
//     })
// })
// ! listado de usuarios

router.get('/', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('liastaUsuario');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    const result = await myRequest.execute('pa_listaUsuarios');

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    } else {
      cerrarConexionPOOL();
      res.status(404).json({
        status: 403,
        mensaje: e.message
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(404).json({
      status: 403,
      mensaje: e.message
    });
  }
}); // router.get('/perfiles',async (req,res)=>{
//     try{
//         const listaPerfiles = await Perfil.find()
//         res.status(200).json(listaPerfiles)
//     }
//     catch(e){
//         res.status(404).json({mensaje:e.message})
//     }
// })
//! lista de perfiles

router.get('/perfiles', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('listaPerfiles');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    const result = await myRequest.execute('pa_listaPerfiles');

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    } else {
      cerrarConexionPOOL();
      res.status(404).json({
        status: 403,
        mensaje: e.message
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(404).json({
      status: 403,
      mensaje: e.message
    });
  }
}); //! inser perfiles MONGO
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

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  try {
    const conexion = await abrirConexionPOOL('getUsexId');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('idUsuario', mssql.Int, id);
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
        where u.id = @idUsuario`;
    const result = await myRequest.query(query);

    if (result) {
      cerrarConexionPOOL();
      res.json(result.recordset);
    } else {
      cerrarConexionPOOL();
      res.status(404).json({
        status: 403,
        mensaje: e.message
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(404).json({
      status: 403,
      mensaje: e.message
    });
  }
}); //!guarda usuario

router.post('/', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    userName,
    password,
    email,
    nombre,
    apellido,
    idPerfil
  } = req.body;

  try {
    const conexion = await abrirConexionPOOL('saveUser');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    const pw = bcryp.hashSync(password, 10);
    console.log(pw);
    myRequest.input('userName', mssql.VarChar, userName);
    myRequest.input('password', mssql.VarChar, pw);
    myRequest.input('email', mssql.VarChar, email);
    myRequest.input('nombre', mssql.VarChar, nombre);
    myRequest.input('apellido', mssql.VarChar, apellido);
    myRequest.input('idPerfil', mssql.Int, idPerfil);
    const result = await myRequest.execute('pa_insertUsuarios');

    if (result) {
      cerrarConexionPOOL();
      console.log(result);
      res.status(200).json({
        mensaje: 'usuario insertado correctamente !'
      });
    }
  } catch (err) {
    cerrarConexionPOOL();
    res.status(403).json({
      error: err.message
    });
  }
}); // router.post('/',async (req,res)=>{
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

router.put('/', async (req, res) => {
  const {
    abrirConexionPOOL,
    cerrarConexionPOOL
  } = __webpack_require__(/*! ../conexiones/sqlServer */ "./conexiones/sqlServer.js");

  const {
    userName,
    password,
    email,
    nombre,
    apellido,
    idPerfil,
    idUsuario
  } = req.body;

  try {
    const conexion = await abrirConexionPOOL('updateUser');

    const mssql = __webpack_require__(/*! mssql */ "mssql");

    const myRequest = new mssql.Request(conexion);
    myRequest.input('userName', mssql.VarChar, userName);
    myRequest.input('password', mssql.VarChar, bcryp.hashSync(password));
    myRequest.input('email', mssql.VarChar, email);
    myRequest.input('nombre', mssql.VarChar, nombre);
    myRequest.input('apellido', mssql.VarChar, apellido);
    myRequest.input('idPerfil', mssql.Int, idPerfil);
    myRequest.input('idUsuario', mssql.Int, idUsuario);
    const result = await myRequest.execute('pa_updateUsuarios');

    if (result) {
      cerrarConexionPOOL();
      console.log(result);
      res.status(200).json({
        mensaje: 'usuario insertado correctamente !'
      });
    }
  } catch (e) {
    cerrarConexionPOOL();
    res.status(403).json({
      error: err.message
    });
  }
});
module.exports = router;

/***/ }),

/***/ "async":
/*!************************!*\
  !*** external "async" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("colors");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "mssql":
/*!************************!*\
  !*** external "mssql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mssql");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvbW9uZ29EYi5qcyIsIndlYnBhY2s6Ly8vLi9jb25leGlvbmVzL3NxbFNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvYXJlYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3MvYXV0aEFkbWluUm91dGVyLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL2F1dGhBY2Nlc29zL2F1dGhBbGxSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoQWRtaW5Sb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDFSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDJSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDNSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDRSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDVSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9jbGllbnRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9kZWZlY3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9tYXF1aW5hcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9tb2xkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvb2VlLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL29wZXJhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BpZXphcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BsYW50YXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvcHJvY2Vzb3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvcHVlc3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9yZXBvcnRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc01hcXVpbmEuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdGlwb3NNYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc1Byb2Nlc28uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdHJhYmFqYWRvcmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3R1cm5vcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS91c3Vhcmlvcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3luY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb3JnYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtc3NxbFwiIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzZWNyZXQiLCJtb25nb29zZSIsInJlcXVpcmUiLCJwcm9jZXNzIiwiY29uc29sZSIsImxvZyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbmV4aW9uIiwiY29ubmVjdGlvbiIsIm9uIiwiZXJyb3IiLCJiaW5kIiwib25jZSIsInJlZCIsIm1zc3FsIiwiVVJJIiwidXNlciIsIlVTRVJTUUwiLCJwYXNzd29yZCIsIlBBU1NXT1JEU1FMIiwiZGF0YWJhc2UiLCJEQVRBQkFTRVNRTCIsInNlcnZlciIsIlNFUlZFUlNRTCIsIm9wdGlvbnMiLCJlbmFibGVBcml0aEFib3J0IiwiZW5jcnlwdCIsIkNvbmV4aW9uU1FMIiwiYWJyaXJDb25leGlvbiIsInVuZGVmaW5lZCIsImNlcnJhckNvbmV4aW9uIiwiYWJyaXJDb25leGlvblBPT0wiLCJjZXJyYXJDb25leGlvblBPT0wiLCJ0aGVuIiwicG9vbCIsIl9jb25uZWN0ZWQiLCJibHVlIiwiZ3JlZW4iLCJjbG9zZSIsImNvbmV4aW9uZXMiLCJuYW1lIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibmV3Q29uZXhpb24iLCJDb25uZWN0aW9uUG9vbCIsImFyZ3MiLCJQcm9taXNlIiwiYWxsIiwidmFsdWVzIiwibWFwIiwicGVyZmlsIiwiU2NoZW1hIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsImVudW0iLCJzZXQiLCJtb2RlbCIsInVzdWFyaW8iLCJ1c2VyTmFtZSIsInJlcXVpcmVkIiwiZW1haWwiLCJub21icmUiLCJhcGVsbGlkbyIsImV4cHJlc3MiLCJjb3JzIiwiY29uZmlnIiwibW9yZ2FuIiwic2Vydmlkb3IiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiUE9SVCIsImxpc3RlbiIsImdldCIsIm0iLCJlIiwieWVsbG93IiwiUm91dGVyIiwiand0IiwiQ09ORklHIiwicm91dGVyIiwicmVxIiwicmVzIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJtZW5zYWplIiwidG9rZW4iLCJzcGxpdCIsInZlcmlmeSIsImQiLCJiY3J5cHQiLCJwb3N0IiwibmV4dCIsImJvZHkiLCJSZXF1ZXN0IiwiVmFyQ2hhciIsIm15UmVxdWVzdCIsImlucHV0IiwiZXhlY3V0ZSIsInB3IiwicmVjb3Jkc2V0IiwidHJpbSIsImxlbmd0aCIsImNvbXBhcmVTeW5jIiwibWlVc3VhcmlvIiwibm9tYnJlVXN1YXJpbyIsImFwZWxsaWRvVXN1YXJpbyIsIm5vbWJyZVBlcmZpbCIsInNpZ24iLCJleHBpcmVzSW4iLCJtZXNzYWdlIiwibXlSZXF1aXJlcyIsInJlc3VsdCIsInF1ZXJ5Iiwibm9tYnJlQXJlYSIsInB1dCIsImlkQXJlYSIsIkludCIsImRhdG9zVXNlciIsInBhdGgiLCJkYXRvcyIsIm90cm8iLCJwZXJtaXNvIiwiY29uZXhpb24yIiwibXlSZXF1ZXN0MiIsInBhcnNlSW50IiwiaWRDbGllbnRlIiwibm9tYnJlQ2xpZW50ZSIsInJhem9uU29jaWFsQ2xpZW50ZSIsImNvbnN1bHRhIiwiZXJyIiwiZGF0byIsIm5vbWJyZURlZmVjdG8iLCJpZE9wZXJhY2lvbiIsImlkRGVmZWN0byIsInBhcmFtcyIsIm5vbWJyZU1hcXVpbmEiLCJkZXNjcmlwY2lvbk1hcXVpbmEiLCJpZFRpcG9NYXF1aW5hIiwiaWRQbGFudGEiLCJpZE1hcXVpbmEiLCJpZFBpZXphIiwibm9tYnJlTW9sZGUiLCJpZE1vbGRlIiwiZmVjaGFGdW5kaWNpb25EZXNkZSIsImZlY2hhRnVuZGljaW9uSGFzdGEiLCJteVJlcXVlcyIsIkRhdGUiLCJmZWNoYVByb2R1Y2Npb25EZXNkZSIsImZlY2hhUHJvZHVjY2lvbkhhc3RhIiwibm9tYnJlT3BlcmFjaW9uIiwibm9tYnJlUGFyYWRhTWFxdWluYSIsInRpcG9QYXJhZGFNYXF1aW5hIiwic2V0dXBQYXJhZGFNYXF1aW5hIiwiQml0IiwiaWRQYXJhZGFNYXF1aW5hIiwibm9tYnJlUGllemEiLCJpZFRpcG9NYXRlcmlhbCIsIk1vbWVudCIsImNvbnZpZXJ0ZUhvcmEiLCJob3JhIiwiSG9ySW5pY2lvbk8iLCJzZXRIb3VycyIsImdldEhvdXJzIiwiaWRQbGFuaWxsYSIsImNvbmV4aW9uQWJpZXJ0YSIsImZlY2hhRGVzZGVQcm9kdWNjaW9uIiwiZmVjaGFIYXN0YVByb2R1Y2Npb24iLCJmZWNoYURlc2RlRnVuZGljaW9uIiwiZmVjaGFIYXN0YUZ1bmRpY29uIiwiaWRUaXBvUHJvY2VzbyIsIlRyYW5zYWN0aW9uIiwidHJhbnNhY2Npb24iLCJiZWdpbiIsInNxbENvbnN1bHRhIiwiY29uc3VsdGFQbGFuaWxsYSIsImNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhIiwiY29uc3VsdGFSZWNoYXpvcyIsImNvbnN1bHRhWm9uYXMiLCJjb25zdWx0YVBNIiwidmVjUGxhbmlsbGFQcm9kdWNjaW9uIiwidmVjVHJhYmFqYWRvcmVzIiwidmVjUmVjaGF6b3MiLCJ2ZWNab25hcyIsInZlY1BNIiwicmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsInBsYSIsInBsYW5pbGxhIiwiZmVjaGFDYXJnYSIsImZlY2hhUHJvZHVjY2lvbiIsImZlY2hhRnVuZGljaW9uIiwiaG9yYUluaWNpbyIsImZvcm1hdCIsImhvcmFGaW4iLCJ0aXBvUHJvY2VzbyIsImlkUHJvY2VzbyIsInB1c2giLCJsaXN0YUlkUGxhbmlsbGFzUHJvZHVjIiwiaW5kZXhQbGFuaWxsYSIsInNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhIiwic3FsQ29uc3VsdGFQTSIsInRyYWJhamFkb3Jlc1hwbGFuaWxsYSIsInJlY29yZHNldHMiLCJsaXN0YUlkVHJhYmFqYWRvcmVzIiwidCIsImkiLCJpZFRyYWJhamFkb3JYcGxhbmlsbGEiLCJzcWxDb25zdWx0YVJlY2hhem9zIiwicmVjaGF6b3MiLCJsaXN0YUlkUmVjaGF6b3MiLCJyZSIsImluZGV4UmVjaGF6byIsImlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhIiwic3FsQ29uc3VsdGFab25hcyIsImRpcmVyZW5jaWFFbk1pbnV0b3MiLCJoX2luaWNpbyIsImhfZmluIiwiaERlc2RlIiwiaEhhc3RhIiwibGlzdGFab25hcyIsInBsIiwidmVjT3BlcmFyaW9zIiwidmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEiLCJwbSIsInBhcmFkYU1hcSIsImlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSIsImRlc2RlUGFyYWRhTWFxdWluYSIsImhvcmFJbmljaW9QYXJhZGFNYXF1aW5hIiwiaGFzdGFQYXJhZGFNYXF1aW5hIiwiaG9yYUZpblBhcmFkYU1hcXVpbmEiLCJkdXJhY2lvblBhcmFkYU1hcXVpbmEiLCJ0ciIsImluZGV4VHJhYmFqYWRvciIsInRyYVhwbGEiLCJpZE9wZXJhcmlvIiwiaWRUcmFiYWphZG9yIiwiaWRUdXJubyIsIm5vbWJyZVRyYWJhamFkb3IiLCJhcGVsbGlkb1RyYWJhamFkb3IiLCJ0dXJub1RyYWJhamFkb3IiLCJwcm9kdWNjaW9uIiwicGllemFzUHJvZHVjaWRhcyIsImNhbG9yaWFzIiwidmVjUmVjaGF6byIsInJlY2giLCJpZFJlY2hhem8iLCJub21icmVSZWNoYXpvIiwidGlwbyIsInRpcG9SZWNoYXpvIiwiY2FudGlkYWRSZWNoYXpvIiwiY2FudGlkYWRSZWNoYXpvcyIsInpvbiIsImlkUmVjaGF6b3NYdHJhYmFqYWRvcllwbGFuaWxsYSIsInpvbmFYcmVjaGEiLCJpZFpvbmEiLCJsZXRyYSIsImxldHJhWm9uYSIsIm51bWVybyIsIm51bWVyb1pvbmEiLCJjYW50aWRhZCIsImNhbnRpZGFkWm9uYSIsImNvbW1pdCIsInJvbGxiYWNrIiwiSG9yYUluaWNpb1Byb2R1Y2Npb24iLCJIb3JhRmluUHJvZHVjY2lvbiIsIlByZXBhcmVkU3RhdGVtZW50IiwicHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uIiwiZGVsZXRlWm9uYXNSZWNoYXpvc09wZXJhcmlvc1BtIiwiYXNpbmNyb25vIiwibWV0b2RvVHJhbnNhY2Npb24iLCJyZXN1bHREZWxldGUiLCJUaW1lIiwicHJlcGFyZSIsImRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIiwiZmVfcHJvZHVjY2lvbiIsImZlX2Z1bmRpY2lvbiIsImhvcmFfaW5pY2lvIiwiaG9yYV9maW4iLCJpZF90dXJubyIsImlkX21vbGRlIiwicmVzdWx0QzEiLCJ1bnByZXBhcmVkIiwidW5wcmVwYXJlIiwidmVjT3BlcmFyaW9zWHBsYW5pbGxhIiwib3BlcmFyaW8iLCJvcCIsInB6YV9wcm9kdWNpZGFzIiwiaWRfdHJhYmFqYWRvciIsImlkX3BsYW5pbGxhIiwiZWFjaFNlcmllcyIsInRyYWJhamFkb3IiLCJjYWxsYmFjayIsInBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYSIsInZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYSIsInJlY2hhem9aIiwiaWRfZGVmZWN0byIsInJlY2hhem8iLCJ2ZWNab25hc1hyZWNoYXpvIiwiem9uYSIsInpvbyIsInZlY1BhcmFkYXNEZU1hcXVpbmEiLCJwYXJhTUFDIiwiaWRfcGFyYWRhc19tYXF1aW5hIiwiUE0iLCJjYWxsYmFja1BNIiwiY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hIiwiRVIiLCJyZXN1bHRQTSIsImVycm9SIiwic2V0SGVhZGVyIiwibWVuc2FqZTIiLCJpZFBsYW5pbGxhUHJvZHVjY2lvbiIsImNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24iLCJpc05hTiIsInJlc3BvbnNlIiwibm9tYnJlUGxhbnRhIiwiYmFycmlvUGxhbnRhIiwiY29kaWdvUG9zdGFsUGxhbnRhIiwiY2FsbGVQbGFudGEiLCJhbHR1cmFDYWxsZVBsYW50YSIsIm15VHJhbnNhY3Rpb24iLCJlcnJvclRyYW5zYWMiLCJ2ZWNQcm9jZXNvcyIsIm15UmVxdWVzdFBpZXphWGhzIiwiaWRQcm9jZXNvcyIsInAiLCJzdWJzdHJpbmciLCJxdWVyeVBpZXphWGhzIiwicmVzdWxycHpYaHMiLCJ2ZWNQaWV6YXNYaG9yYSIsInB6WGhzIiwiaW5kZXgiLCJkZXNjcmlwY2lvblByb2Nlc28iLCJpZFRpcG9zUHJvY2VzbyIsIm15UmVxdWVzdFByb2Nlc28iLCJlcnJvclRyYXNhY3Rpb25zIiwicXVlcnlQcm9jZXNvcyIsInJlc3BvbnNlUHJvY2Vzb3MiLCJwaWV6YVhocyIsIm15UmVxdWVzdFBpZVhocyIsImNhbnRpZGFkUGllemFzWGhzIiwiZGVzZGVQaWV6YXNYaHMiLCJoYXN0YVBpZXphc1hocyIsInF1ZXJ5UGlleGhzIiwiZXJyb3JDYWxiYWNrIiwibm9tYnJlUHVlc3RvIiwiaWRQdWVzdG8iLCJmZWNoYUhhc3RhRnVuZGljaW9uIiwibm9tYnJlVGlwb01hcXVpbmEiLCJub21icmVNYXRlcmlhbCIsIm5vbWJyZVRpcG9NYXRlcmlhbCIsIm5hY2ltaWVudG9UcmFiYWphZG9yIiwiaW5ncmVzb1RyYWJhamFkb3IiLCJiY3J5cCIsIlVzdWFyaW8iLCJQZXJmaWwiLCJpZCIsImlkUGVyZmlsIiwiaGFzaFN5bmMiLCJpZFVzdWFyaW8iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtR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T0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQmpCLElBQWhCLENBQXFCO0FBQUM5RCxXQUFLLEVBQUM2SCxHQUFHLENBQUNwQjtBQUFYLEtBQXJCO0FBQ0g7QUFDSixDQXpCRDtBQTJCQXpILE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnlGLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDOU1BLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNlY3JldDonamF2aWVyMTkwNSdcclxufSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHJlcXVpcmUoJ2NvbG9ycycpXHJcblxyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5NT05HT0RCX1VSSSlcclxubW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9KVxyXG5cclxudmFyIGNvbmV4aW9uID0gbW9uZ29vc2UuY29ubmVjdGlvblxyXG5cclxuY29uZXhpb24ub24oJ2Vycm9yJywgY29uc29sZS5lcnJvci5iaW5kKGNvbnNvbGUsICdlcnJvciBkZSBjb25leGlvbicpKVxyXG5cclxuY29uZXhpb24ub25jZSgnb3BlbicsICgpID0+IHtcclxuXHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIGNvbnNvbGUubG9nKCdDb25lY3RhZG8gYSBNT05HT0RCJy5yZWQpXHJcblx0ZWxzZSBjb25zb2xlLmxvZygnQ29uZWN0YWRvIGEgTU9OR09EQicpXHJcbn0pXHJcbiIsImNvbnN0IG1zc3FsID0gcmVxdWlyZSgnbXNzcWwnKVxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuXHRyZXF1aXJlKCdjb2xvcnMnKVxyXG59XHJcblxyXG5jb25zdCBVUkkgPSB7XHJcblx0dXNlcjogcHJvY2Vzcy5lbnYuVVNFUlNRTCxcclxuXHRwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFTU1dPUkRTUUwsXHJcblx0ZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFU1FMLFxyXG5cdHNlcnZlcjogcHJvY2Vzcy5lbnYuU0VSVkVSU1FMLFxyXG5cdG9wdGlvbnM6IHtcclxuXHRcdGVuYWJsZUFyaXRoQWJvcnQ6IHRydWUsXHJcblx0XHRlbmNyeXB0OiBmYWxzZSxcclxuXHR9LFxyXG59XHJcblxyXG52YXIgQ29uZXhpb25TUUwgPSB7XHJcblx0YWJyaXJDb25leGlvbjogdW5kZWZpbmVkLFxyXG5cdGNlcnJhckNvbmV4aW9uOiB1bmRlZmluZWQsXHJcblx0YWJyaXJDb25leGlvblBPT0w6IHVuZGVmaW5lZCxcclxuXHRjZXJyYXJDb25leGlvblBPT0w6IHVuZGVmaW5lZCxcclxufVxyXG52YXIgY29uZXhpb25cclxuQ29uZXhpb25TUUwuYWJyaXJDb25leGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHRhd2FpdCBtc3NxbC5jb25uZWN0KFVSSSkudGhlbihwb29sID0+IHtcclxuXHRcdGlmIChwb29sLl9jb25uZWN0ZWQpIHtcclxuXHRcdFx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsICcgQUJJRVJUQScuZ3JlZW4pXHJcblx0XHRcdFx0Y29uZXhpb24gPSBwb29sXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvciBkZSBDb25leGlvbicsIHBvb2wuX2Nvbm5lY3RlZClcclxuXHRcdH1cclxuXHR9KVxyXG59XHJcbkNvbmV4aW9uU1FMLmNlcnJhckNvbmV4aW9uID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG5cdGF3YWl0IGNvbmV4aW9uLmNsb3NlKClcclxuXHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdDb25lY2lvbiBTUUwgU0VSVkVSJy5ibHVlLCAnIENFUlJBREEnLmdyZWVuKVxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgY29uZXhpb25lcyA9IHt9XHJcblxyXG5Db25leGlvblNRTC5hYnJpckNvbmV4aW9uUE9PTCA9IGFzeW5jIG5hbWUgPT4ge1xyXG5cdGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmV4aW9uZXMsIG5hbWUpKSB7XHJcblx0XHRjb25zdCBuZXdDb25leGlvbiA9IG5ldyBtc3NxbC5Db25uZWN0aW9uUG9vbChVUkkpXHJcblx0XHRjb25zdCBjbG9zZSA9IG5ld0NvbmV4aW9uLmNsb3NlLmJpbmQobmV3Q29uZXhpb24pXHJcblx0XHRuZXdDb25leGlvbi5jbG9zZSA9ICguLi5hcmdzKSA9PiB7XHJcblx0XHRcdGRlbGV0ZSBjb25leGlvbmVzW25hbWVdXHJcblx0XHRcdHJldHVybiBjbG9zZSguLi5hcmdzKVxyXG5cdFx0fVxyXG5cdFx0YXdhaXQgbmV3Q29uZXhpb24uY29ubmVjdCgpXHJcblx0XHRjb25leGlvbmVzW25hbWVdID0gbmV3Q29uZXhpb25cclxuXHRcdHJldHVybiBjb25leGlvbmVzW25hbWVdXHJcblx0fVxyXG59XHJcblxyXG5Db25leGlvblNRTC5jZXJyYXJDb25leGlvblBPT0wgPSAoKSA9PiB7XHJcblx0cmV0dXJuIFByb21pc2UuYWxsKFxyXG5cdFx0T2JqZWN0LnZhbHVlcyhjb25leGlvbmVzKS5tYXAocG9vbCA9PiB7XHJcblx0XHRcdHJldHVybiBwb29sLmNsb3NlKClcclxuXHRcdH0pXHJcblx0KVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gQ29uZXhpb25TUUxcclxuIiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCBwZXJmaWwgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHBlcmZpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZTp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlLFxyXG4gICAgICAgIGVudW06WydBZG1pbicsJ25pdmVsLTEnLCduaXZlbC0yJywnbml2ZWwtMycsJ25pdmVsLTQnLCduaXZlbC01J11cclxuICAgIH1cclxufSlcclxuXHJcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKVxyXG5tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ3BlcmZpbCcscGVyZmlsKSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgdXN1YXJpbyA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG5cclxuICAgIHVzZXJOYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBub21icmU6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgYXBlbGxpZG86e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGVyZmlsOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIGVudW06WydBZG1pbicsJ25pdmVsLTEnLCduaXZlbC0yJywnbml2ZWwtMycsJ25pdmVsLTQnLCduaXZlbC01J11cclxuICAgIH1cclxufSlcclxubW9uZ29vc2Uuc2V0KCd1c2VDcmVhdGVJbmRleCcsIHRydWUpXHJcbm1vbmdvb3NlLnNldCgndXNlRmluZEFuZE1vZGlmeScsIGZhbHNlKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgndXN1YXJpbycsdXN1YXJpbykiLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJylcclxucmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxudmFyIG1vcmdhblxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcblx0cmVxdWlyZSgnY29sb3JzJylcclxuXHRtb3JnYW4gPSByZXF1aXJlKCdtb3JnYW4nKVxyXG59XHJcbi8vIGNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG5cclxuY29uc3Qgc2Vydmlkb3IgPSBleHByZXNzKClcclxuc2Vydmlkb3IudXNlKGNvcnMoKSlcclxuXHJcbi8vIG1pZGRlbHdhcmVcclxuXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLmpzb24oKSlcclxuc2Vydmlkb3IudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKVxyXG5zZXJ2aWRvci51c2UocmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvcy9hdXRoQWxsUm91dGVyJykpXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuXHRzZXJ2aWRvci51c2UobW9yZ2FuKCdkZXYnKSlcclxufVxyXG5cclxuc2Vydmlkb3IudXNlKFxyXG5cdCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9hZG1pbicsXHJcblx0cmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhBZG1pblJvdXRlclJlYWN0JylcclxuKVxyXG5zZXJ2aWRvci51c2UoXHJcblx0Jy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsMScsXHJcblx0cmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDFSb3V0ZXJSZWFjdCcpXHJcbilcclxuc2Vydmlkb3IudXNlKFxyXG5cdCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9uaXZlbDInLFxyXG5cdHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoTml2ZWwyUm91dGVyUmVhY3QnKVxyXG4pXHJcbnNlcnZpZG9yLnVzZShcclxuXHQnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWwzJyxcclxuXHRyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsM1JvdXRlclJlYWN0JylcclxuKVxyXG5zZXJ2aWRvci51c2UoXHJcblx0Jy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsNCcsXHJcblx0cmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDRSb3V0ZXJSZWFjdCcpXHJcbilcclxuc2Vydmlkb3IudXNlKFxyXG5cdCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9uaXZlbDUnLFxyXG5cdHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoTml2ZWw1Um91dGVyUmVhY3QnKVxyXG4pXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9tYXF1aW5hcycsIHJlcXVpcmUoJy4vcnV0YXNBcGkvbWFxdWluYXMnKSlcclxuc2Vydmlkb3IudXNlKFxyXG5cdCcvYXBpL3VzdWFyaW9zJyxcclxuXHRyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zL2F1dGhBZG1pblJvdXRlcicpLFxyXG5cdHJlcXVpcmUoJy4vcnV0YXNBcGkvdXN1YXJpb3MnKVxyXG4pXHJcbi8vIHNlcnZpZG9yLnVzZSgnL2FwaS91c3VhcmlvcycscmVxdWlyZSgnLi9ydXRhc0FwaS91c3VhcmlvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbG9ndWVvJywgcmVxdWlyZSgnLi9ydXRhc0FwaS9Mb2d1ZW8nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2F1dGVudGlmaWNhc2lvbicsIHJlcXVpcmUoJy4vcnV0YXNBcGkvQXV0ZW50aWZpY2FzaW9uJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9waWV6YXMnLCByZXF1aXJlKCcuL3J1dGFzQXBpL3BpZXphcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbW9sZGVzJywgcmVxdWlyZSgnLi9ydXRhc0FwaS9tb2xkZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2RlZmVjdG9zJywgcmVxdWlyZSgnLi9ydXRhc0FwaS9kZWZlY3RvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvb3BlcmFjaW9uZXMnLCByZXF1aXJlKCcuL3J1dGFzQXBpL29wZXJhY2lvbmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wcm9jZXNvcycsIHJlcXVpcmUoJy4vcnV0YXNBcGkvcHJvY2Vzb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3R1cm5vcycsIHJlcXVpcmUoJy4vcnV0YXNBcGkvdHVybm9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wYXJhZGFzTWFxdWluYScsIHJlcXVpcmUoJy4vcnV0YXNBcGkvcGFyYWRhc01hcXVpbmEnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RyYWJhamFkb3JlcycsIHJlcXVpcmUoJy4vcnV0YXNBcGkvdHJhYmFqYWRvcmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uJywgcmVxdWlyZSgnLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90aXBvc1Byb2Nlc28nLCByZXF1aXJlKCcuL3J1dGFzQXBpL3RpcG9zUHJvY2VzbycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvY2xpZW50ZXMnLCByZXF1aXJlKCcuL3J1dGFzQXBpL2NsaWVudGVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90aXBvc01hdGVyaWFsJywgcmVxdWlyZSgnLi9ydXRhc0FwaS90aXBvc01hdGVyaWFsJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hcmVhcycsIHJlcXVpcmUoJy4vcnV0YXNBcGkvYXJlYXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RpcG9zTWFxdWluYScsIHJlcXVpcmUoJy4vcnV0YXNBcGkvdGlwb3NNYXF1aW5hJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wbGFudGFzJywgcmVxdWlyZSgnLi9ydXRhc0FwaS9wbGFudGFzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wdWVzdG9zJywgcmVxdWlyZSgnLi9ydXRhc0FwaS9wdWVzdG9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9vZWUnLCByZXF1aXJlKCcuL3J1dGFzQXBpL29lZScpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcmVwb3J0ZXMnLCByZXF1aXJlKCcuL3J1dGFzQXBpL3JlcG9ydGVzJykpXHJcblxyXG4vL1NldHRpbmdzXHJcbnNlcnZpZG9yLnNldCgncG9ydCcsIHByb2Nlc3MuZW52LlBPUlQgfHwgNTAwMClcclxuXHJcbnNlcnZpZG9yLmxpc3RlbihzZXJ2aWRvci5nZXQoJ3BvcnQnKSwgKG0sIGUpID0+IHtcclxuXHRpZiAoZSkge1xyXG5cdFx0Y29uc29sZS5sb2coZSlcclxuXHR9IGVsc2Uge1xyXG5cdFx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdTZXJ2aWRvciBjb3JyaWVuZG8gZW4gZWwgUFVFUlRPJy55ZWxsb3csIHNlcnZpZG9yLmdldCgncG9ydCcpKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLCBzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuXHRcdH1cclxuXHR9XHJcbn0pXHJcbiIsImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCBDT05GSUcgPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyPVJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLycsKHJlcSxyZXMpPT57XHJcblxyXG4gICAgaWYoIXJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidObyBlbnZpbyBlbCBUb2tlbiBlbiBlbCBoZWFkZXJzJ30pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXTtcclxuICAgICAgICBqd3QudmVyaWZ5KHRva2VuLENPTkZJRy5zZWNyZXQsKGUsZCk9PntcclxuICAgICAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm5hbWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBiY3J5cHQgPSByZXF1aXJlKCdiY3J5cHQnKVxyXG4vLyBjb25zdCBVc3VhcmlvID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hVXN1YXJpb3MnKVxyXG5jb25zdCB7IHNlY3JldCB9ID0gcmVxdWlyZSgnLi4vQ09ORklHJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5wb3N0KCcvJywgYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcblx0Y29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcblx0Y29uc3QgeyB1c2VyTmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woJ2NvbnN1bHRhVXN1YXJpbycpXHJcblx0XHRjb25zdCB7IFJlcXVlc3QsIFZhckNoYXIgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuXHRcdGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGNvbmV4aW9uKVxyXG5cdFx0bXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScsIFZhckNoYXIsIHVzZXJOYW1lKVxyXG5cdFx0Y29uc3QgdXN1YXJpbyA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9nZXRVc3VhcmlvWG5vbWJyZVVzdWFyaW8nKVxyXG5cdFx0Y29uc3QgcHcgPSBTdHJpbmcodXN1YXJpby5yZWNvcmRzZXRbMF0ucGFzc3dvcmQpLnRyaW0oKVxyXG5cdFx0Y29uc29sZS5sb2cocHcpXHJcblx0XHRpZiAodXN1YXJpby5yZWNvcmRzZXQubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRjZXJyYXJDb25leGlvblBPT0woKVxyXG5cdFx0XHRpZiAoIWJjcnlwdC5jb21wYXJlU3luYyhwYXNzd29yZCwgcHcpKSB7XHJcblx0XHRcdFx0cmVzLnN0YXR1cyg0MDMpLmpzb24oeyBtZW5zYWplOiAnUGFzc3dvcmQgSW5jb3JyZWN0YScgfSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBtaVVzdWFyaW8gPSB7XHJcblx0XHRcdFx0XHR1c2VyTmFtZTogdXN1YXJpby5yZWNvcmRzZXRbMF0udXNlck5hbWUsXHJcblx0XHRcdFx0XHRlbWFpbDogdXN1YXJpby5yZWNvcmRzZXRbMF0uZW1haWwsXHJcblx0XHRcdFx0XHRub21icmU6IHVzdWFyaW8ucmVjb3Jkc2V0WzBdLm5vbWJyZVVzdWFyaW8sXHJcblx0XHRcdFx0XHRhcGVsbGlkbzogdXN1YXJpby5yZWNvcmRzZXRbMF0uYXBlbGxpZG9Vc3VhcmlvLFxyXG5cdFx0XHRcdFx0cGVyZmlsOiB1c3VhcmlvLnJlY29yZHNldFswXS5ub21icmVQZXJmaWwsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGp3dC5zaWduKG1pVXN1YXJpbywgc2VjcmV0LCB7IGV4cGlyZXNJbjogMTQ0MDAgfSwgKGUsIHRva2VuKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZSkge1xyXG5cdFx0XHRcdFx0XHRyZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lbnNhamU6ICdFcnJvciBhbCBnZW5lcmFyIGVsIHRva2VuJyB9KVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmVzLmpzb24oeyB0b2tlbiB9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcblx0XHRcdHJlcy5zdGF0dXMoNDAzKS5qc29uKHsgbWVuc2FqZTogJ1VzdWFyaW8gSW5leGlzdGVudGUgIScgfSlcclxuXHRcdH1cclxuXHR9IGNhdGNoIChlKSB7XHJcblx0XHRjZXJyYXJDb25leGlvblBPT0woKVxyXG5cdFx0cmVzLnN0YXR1cyg0MDQpLmpzb24oeyBtZW5zYWplOiBlLm1lc3NhZ2UgfSlcclxuXHR9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlclxyXG4iLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoICdleHByZXNzJyApXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCAgKVxyXG5cclxucm91dGVyLmdldCAoICcvJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdsaXN0YUFyZWFzJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0IH0gPSBuZXcgcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWlyZXMgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVpcmVzLnF1ZXJ5IChcclxuICAgICAgICAgICAgYHNlbGVjdCBpZCBhcyBpZEFyZWEgLCBub21icmUgYXMgbm9tYnJlQXJlYVxyXG4gICAgICAgICAgICBmcm9tIGFyZWFzXHJcbiAgICAgICAgICAgIHdoZXJlIGVzdGFkbyA9IDFgXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVBcmVhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRBcmVhJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZUFyZWEnICwgVmFyQ2hhciAsIG5vbWJyZUFyZWEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIGFyZWFzICggbm9tYnJlICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVBcmVhICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQXJlYSBJbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkQXJlYSAsIG5vbWJyZUFyZWEgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZUFyZWEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlQXJlYScgLCBWYXJDaGFyICwgbm9tYnJlQXJlYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkQXJlYScgLCBJbnQgLCBpZEFyZWEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBhcmVhc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVBcmVhXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRBcmVhYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQXJlYSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRBcmVhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlQXJlYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZEFyZWEnICwgSW50ICwgaWRBcmVhIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgYXJlYXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRBcmVhYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQXJlYSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlICgnLi4vLi4vQ09ORklHJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCByZXEgLCByZXMgLG5leHQpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdXHJcbiAgICBqd3QudmVyaWZ5KHRva2VuLCBzZWNyZXQgLCAoZSAsIGRhdG9zVXNlcikgPT4ge1xyXG4gICAgICAgIGlmKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGRhdG9zVXNlci5wZXJmaWwgIT09ICdBZG1pbicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6ICdBY2Nlc28gZGVuZWdhZG8gcG9yIG5vIHNlciBhZG1pbid9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsImNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vLi4vQ09ORklHJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlcSAsIHJlcyAsbmV4dCkge1xyXG4gICAgaWYgKHJlcS5wYXRoICE9PSAnL2FwaS9sb2d1ZW8nKSB7XHJcbiAgICAgICAgaWYoICFyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogJ05vIGVudmlvIGVsIHRvamVuIGVuIGVsIGhlYWRlcnMnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV1cclxuICAgICAgICAgICAgand0LnZlcmlmeSh0b2tlbiAsc2VjcmV0ICwgKCBlICwgZGF0b3MgKT0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggZSApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSAsIG90cm8gOiAnZXJyb3IgIGVuIGxhIGNvbW1wcm92YWNpb24gdG9rZW4nfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHQoKVxyXG4gICAgfVxyXG59IiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi8uLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLChyZXEscmVzKT0+IHtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXVxyXG4gICAgand0LnZlcmlmeSh0b2tlbixzZWNyZXQsKGUsZGF0b3NVc2VyKT0+IHtcclxuICAgICAgICBpZihlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTogZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGRhdG9zVXNlci5wZXJmaWwgPT09ICdhZG1pbicpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtwZXJtaXNvIDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ICd1c3RlZCBubyBlcyBhZG1pbid9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vLi4vQ09ORklHJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PiB7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV1cclxuICAgIGp3dC52ZXJpZnkodG9rZW4sc2VjcmV0LChlLGRhdG9zVXNlcik9PiB7XHJcbiAgICAgICAgaWYoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6IGUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihkYXRvc1VzZXIucGVyZmlsID09PSAnbml2ZWwtMScpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtwZXJtaXNvIDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ICd1c3RlZCBubyBlcyBuaXZlbCAxJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi8uLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLChyZXEscmVzKT0+IHtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXVxyXG4gICAgand0LnZlcmlmeSh0b2tlbixzZWNyZXQsKGUsZGF0b3NVc2VyKT0+IHtcclxuICAgICAgICBpZihlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTogZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGRhdG9zVXNlci5wZXJmaWwgPT09ICduaXZlbC0yJykge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Blcm1pc28gOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTogJ3VzdGVkIG5vIGVzIG5pdmVsIDInfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUoJy4uLy4uL0NPTkZJRycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsKHJlcSxyZXMpPT4ge1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdXHJcbiAgICBqd3QudmVyaWZ5KHRva2VuLHNlY3JldCwoZSxkYXRvc1VzZXIpPT4ge1xyXG4gICAgICAgIGlmKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOiBlLm1lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoZGF0b3NVc2VyLnBlcmZpbCA9PT0gJ25pdmVsLTMnKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7cGVybWlzbyA6IHRydWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOiAndXN0ZWQgbm8gZXMgbml2ZWwgMyd9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vLi4vQ09ORklHJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PiB7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV1cclxuICAgIGp3dC52ZXJpZnkodG9rZW4sc2VjcmV0LChlLGRhdG9zVXNlcik9PiB7XHJcbiAgICAgICAgaWYoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6IGUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihkYXRvc1VzZXIucGVyZmlsID09PSAnbml2ZWwtNCcpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtwZXJtaXNvIDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ICd1c3RlZCBubyBlcyBuaXZlbCA0J30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi8uLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLChyZXEscmVzKT0+IHtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXVxyXG4gICAgand0LnZlcmlmeSh0b2tlbixzZWNyZXQsKGUsZGF0b3NVc2VyKT0+IHtcclxuICAgICAgICBpZihlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTogZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGRhdG9zVXNlci5wZXJmaWwgPT09ICduaXZlbC01Jykge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Blcm1pc28gOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTogJ3VzdGVkIG5vIGVzIG5pdmVsIDUnfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoICdleHByZXNzJyApXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCAgKVxyXG5cclxucm91dGVyLmdldCAoICcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnY29uc3VsdGFDbGllbnRlcycgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYCBzZWxlY3QgYy5pZCBhcyBpZENsaWVudGUgLCBjLm5vbWJyZSBhcyBub21icmVDbGllbnRlICwgYy5yYXpvbl9zb2NpYWwgYXMgcmF6b25Tb2NpYWxDbGllbnRlXHJcbiAgICBmcm9tIGNsaWVudGVzIGNcclxuICAgIHdoZXJlIGMuZXN0YWRvID0gMWBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24yID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlQ2xpZW50ZScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdDIgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uMiAgKVxyXG4gICAgICAgIG15UmVxdWVzdDIuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIHBhcnNlSW50ICggcmVxLmJvZHkuaWRDbGllbnRlICkgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBjbGllbnRlcyBzZXQgZXN0YWRvID0gMCB3aGVyZSBpZCA9IEBpZENsaWVudGVgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0Mi5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQ2xpZW50ZSBFbGltaW5hZG8gQ29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgICAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCAgcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVDbGllbnRlICwgIHJhem9uU29jaWFsQ2xpZW50ZSAsIGlkQ2xpZW50ZSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlQ2xpZW50ZScgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlQ2xpZW50ZScgLCBWYXJDaGFyICwgIG5vbWJyZUNsaWVudGUgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ3Jhem9uU29jaWFsQ2xpZW50ZScgLCBWYXJDaGFyICwgIHJhem9uU29jaWFsQ2xpZW50ZSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsICBpZENsaWVudGUgKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgIHVwZGF0ZSBjbGllbnRlc1xyXG4gICAgc2V0XHJcbiAgICBub21icmUgPSBAbm9tYnJlQ2xpZW50ZSAsXHJcbiAgICByYXpvbl9zb2NpYWwgPSBAcmF6b25Tb2NpYWxDbGllbnRlXHJcbiAgICB3aGVyZSBpZCA9IEBpZENsaWVudGVgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQ2xpZW50ZSBBY3R1YWxpemFkbyBDb3JyZWN0YW1lbnRlICcgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVDbGllbnRlICwgIHJhem9uU29jaWFsQ2xpZW50ZSAgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydENsaWVudGUnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggIGNvbmV4aW9uIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVDbGllbnRlJyAsIFZhckNoYXIgLCBub21icmVDbGllbnRlIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdyYXpvblNvY2lhbENsaWVudGUnICwgVmFyQ2hhciAsIHJhem9uU29jaWFsQ2xpZW50ZSApXHJcbiAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBjbGllbnRlcyAoIG5vbWJyZSAsIHJhem9uX3NvY2lhbCAsIGVzdGFkbyAgKSB2YWx1ZXMgICggQG5vbWJyZUNsaWVudGUgLCBAcmF6b25Tb2NpYWxDbGllbnRlICwgMSApYFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0NsaWVudGUgSW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBkLmlkIGFzIGlkRGVmZWN0bywgZC5ub21icmUgYXMgbm9tYnJlRGVmZWN0bywgZC5pZF9vcGVyYWNpb24gYXMgaWRPcGVyYWNpb24sby5ub21icmUgYXMgbm9tYnJlT3BlcmFjaW9uIGZyb20gZGVmZWN0b3MgZCBqb2luIG9wZXJhY2lvbmVzIG8gb24gZC5pZF9vcGVyYWNpb249by5pZCB3aGVyZSBkLmVzdGFkbyA9IDEnLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVEZWZlY3RvICwgaWRPcGVyYWNpb24gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0RGVmZWN0bycgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVEZWZlY3RvJyAsIFZhckNoYXIgLCBub21icmVEZWZlY3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRPcGVyYWNpb24nICwgSW50ICwgaWRPcGVyYWNpb24gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIGRlZmVjdG9zICggbm9tYnJlICwgaWRfb3BlcmFjaW9uICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVEZWZlY3RvICwgQGlkT3BlcmFjaW9uICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRGVmZWN0byBJbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkRGVmZWN0byAsIG5vbWJyZURlZmVjdG8gLCBpZE9wZXJhY2lvbiB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVEZWZlY3RvJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZURlZmVjdG8nICwgVmFyQ2hhciAsIG5vbWJyZURlZmVjdG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE9wZXJhY2lvbicgLCBJbnQgLCBpZE9wZXJhY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkRGVmZWN0bycgLCBJbnQgLCBpZERlZmVjdG8gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBkZWZlY3Rvc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVEZWZlY3RvICxcclxuICAgICAgICBpZF9vcGVyYWNpb24gPSBAaWRPcGVyYWNpb25cclxuICAgICAgICB3aGVyZSBpZCA9IEBpZERlZmVjdG9gXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdEZWZlY3RvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZERlZmVjdG8gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVEZWZlY3RvJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkRGVmZWN0bycgLCBJbnQgLCBpZERlZmVjdG8gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBkZWZlY3Rvc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZERlZmVjdG9gXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdEZWZlY3RvIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLCBhc3luYyAocmVxLHJlcyk9PntcclxuICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgYHNlbGVjdCBtLmlkIGFzIGlkTWFxdWluYSAsIG0ubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmEgLCBtLmRlc2NyaXBjaW9uIGFzIGRlc2NyaXBjaW9uTWFxdWluYSAsXHJcbiAgICBtLmlkX3RpcG9zX21hcXVpbmEgYXMgaWRUaXBvTWFxdWluYSAsIHRtLm5vbWJyZSBhcyBub21icmVUaXBvTWFxdWluYSAsIG0uaWRfcGxhbnRhIGFzIGlkUGxhbnRhICwgcC5ub21icmUgYXMgbm9tYnJlUGxhbnRhXHJcbiAgICBmcm9tIG1hcXVpbmFzIG1cclxuICAgIGpvaW4gdGlwb3NfbWFxdWluYSB0bSBvbiBtLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgam9pbiBwbGFudGFzIHAgb24gbS5pZF9wbGFudGEgPSBwLmlkXHJcbiAgICB3aGVyZSBtLmVzdGFkbyA9IDFgLFxyXG4gICAgKGVycixkYXRvKT0+e1xyXG4gICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9XHJcbiAgKVxyXG59KVxyXG5yb3V0ZXIuZ2V0KCcveG9wZXJhY2lvbi86aWRPcGVyYWNpb24nLCBhc3luYyAocmVxLHJlcyk9PntcclxuICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgY29uc3Qge2lkT3BlcmFjaW9ufSA9IHJlcS5wYXJhbXNcclxuICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgY29uc3VsdGEucXVlcnkoXHJcbiAgICBgc2VsZWN0IG0uaWQgYXMgaWRNYXF1aW5hLCBtLm5vbWJyZSBhcyBub21icmVNYXF1aW5hXHJcbiAgICBmcm9tIG1hcXVpbmFzIG1cclxuICAgIGpvaW4gdGlwb3NfbWFxdWluYSB0bSBvbiBtLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxIGFuZCB0bS5pZF9vcGVyYWNpb24gPSAke2lkT3BlcmFjaW9ufWAsXHJcbiAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH1cclxuICApXHJcbn0gKVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgY29uc3QgeyBub21icmVNYXF1aW5hICwgZGVzY3JpcGNpb25NYXF1aW5hICwgaWRUaXBvTWFxdWluYSAsIGlkUGxhbnRhIH0gPSByZXEuYm9keVxyXG4gIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0TWFxdWluYScgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlTWFxdWluYSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnZGVzY3JpcGNpb25NYXF1aW5hJyAsIFZhckNoYXIgLCBkZXNjcmlwY2lvbk1hcXVpbmEgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hcXVpbmEnICwgSW50ICwgaWRUaXBvTWFxdWluYSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQbGFudGEnICwgSW50ICwgaWRQbGFudGEgKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gbWFxdWluYXMgKCBub21icmUgLCBkZXNjcmlwY2lvbiAsIGlkX3RpcG9zX21hcXVpbmEgLCBpZF9wbGFudGEgLCBlc3RhZG8gKVxyXG4gICAgdmFsdWVzXHJcbiAgICAoIEBub21icmVNYXF1aW5hICwgQGRlc2NyaXBjaW9uTWFxdWluYSAsIEBpZFRpcG9NYXF1aW5hICwgQGlkUGxhbnRhICwgMSApYFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01hcXVpbmEgSW5zZXJ0YWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgfVxyXG4gIH1cclxuICBjYXRjaCAoIGUgKSB7XHJcbiAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gIGNvbnN0IHsgaWRNYXF1aW5hICwgbm9tYnJlTWFxdWluYSAsIGRlc2NyaXBjaW9uTWFxdWluYSAsIGlkVGlwb01hcXVpbmEgLCBpZFBsYW50YSB9ID0gcmVxLmJvZHlcclxuICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZU1hcXVpbmEnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU1hcXVpbmEnICwgVmFyQ2hhciAsIG5vbWJyZU1hcXVpbmEgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2Rlc2NyaXBjaW9uTWFxdWluYScgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25NYXF1aW5hIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXF1aW5hJyAsIEludCAsIGlkVGlwb01hcXVpbmEgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGxhbnRhJyAsIEludCAsIGlkUGxhbnRhIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE1hcXVpbmEnICwgSW50ICwgaWRNYXF1aW5hIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBtYXF1aW5hc1xyXG4gICAgc2V0XHJcbiAgICBub21icmUgPSBAbm9tYnJlTWFxdWluYSAsXHJcbiAgICBkZXNjcmlwY2lvbiA9IEBkZXNjcmlwY2lvbk1hcXVpbmEgLFxyXG4gICAgaWRfdGlwb3NfbWFxdWluYSA9IEBpZFRpcG9NYXF1aW5hICxcclxuICAgIGlkX3BsYW50YSA9IEBpZFBsYW50YVxyXG4gICAgd2hlcmUgaWQgPSBAaWRNYXF1aW5hYFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01hcXVpbmEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhdGNoICggZSApIHtcclxuICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gIGNvbnN0IHsgaWRNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICB0cnkge1xyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVNYXF1aW5hJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE1hcXVpbmEnICwgSW50ICwgaWRNYXF1aW5hIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBtYXF1aW5hc1xyXG4gICAgc2V0XHJcbiAgICBlc3RhZG8gPSAwXHJcbiAgICB3aGVyZSBpZCA9IEBpZE1hcXVpbmFgXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnTWFxdWluYSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhdGNoICggZSApIHtcclxuICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgbS5pZCBhcyBpZE1vbGRlICwgbS5ub21icmUgYXMgbm9tYnJlTW9sZGUgLCBtLmlkX3BpZXphIGFzIGlkUGllemEgLCBwLm5vbWJyZSBhcyBub21icmVQaWV6YVxyXG4gICAgZnJvbSBtb2xkZXMgbVxyXG4gICAgam9pbiBwaWV6YXMgcCBvbiBtLmlkX3BpZXphID0gcC5pZFxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxYFxyXG4gICAgY29uc3VsdGEucXVlcnkoIHF1ZXJ5ICwoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfSlcclxufSlcclxucm91dGVyLmdldCgnL3hwaWV6YS86aWRQaWV6YScsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRQaWV6YX0gPSByZXEucGFyYW1zXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRNb2xkZSwgbm9tYnJlIGFzIG5vbWJyZU1vbGRlIGZyb20gbW9sZGVzIHdoZXJlIGVzdGFkbyA9IDEgYW5kIGlkX3BpZXphID0gJytpZFBpZXphLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlTW9sZGUgLCBpZFBpZXphIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydE1vbGRlJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU1vbGRlJyAsIFZhckNoYXIgLCBub21icmVNb2xkZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGllemEnICwgSW50ICwgaWRQaWV6YSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gbW9sZGVzICggbm9tYnJlICwgaWRfcGllemEgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZU1vbGRlICwgQGlkUGllemEgLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdNb2xkZSBJbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkTW9sZGUgLCBub21icmVNb2xkZSAsIGlkUGllemEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlTW9sZGUnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlTW9sZGUnICwgVmFyQ2hhciAsIG5vbWJyZU1vbGRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRNb2xkZScgLCBJbnQgLCBpZE1vbGRlIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgbW9sZGVzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZU1vbGRlICxcclxuICAgICAgICBpZF9waWV6YSA9IEBpZFBpZXphXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRNb2xkZWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01vbGRlIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZE1vbGRlIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlTW9sZGUnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRNb2xkZScgLCBJbnQgLCBpZE1vbGRlIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgbW9sZGVzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkTW9sZGVgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdNb2xkZSBlbGltaW5hZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyXHJcbiIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICggJ2V4cHJlc3MnIClcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5cclxucm91dGVyLnBvc3QgKCAnL2Z1bmRpY2lvbicgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRNYXF1aW5hICwgaWRQaWV6YSAsIGlkTW9sZGUgLCBmZWNoYUZ1bmRpY2lvbkRlc2RlICwgZmVjaGFGdW5kaWNpb25IYXN0YSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnbGlzdGFPRUVmdW5kaWNpb24nIClcclxuICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXMgPSBuZXcgIG1zc3FsLlJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2lkTWFxdWluYScgLCBtc3NxbC5JbnQgLCBpZE1hcXVpbmEgKVxyXG4gICAgICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdpZFBpZXphJyAsIG1zc3FsLkludCAsIGlkUGllemEgKVxyXG4gICAgICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdpZE1vbGRlJyAsIG1zc3FsLkludCAsIGlkTW9sZGUgKVxyXG4gICAgICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdmZWNoYUZ1bmRpY2lvbkRlc2RlJyAsIG1zc3FsLkRhdGUgLCBmZWNoYUZ1bmRpY2lvbkRlc2RlIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnZmVjaGFGdW5kaWNpb25IYXN0YScgLCBtc3NxbC5EYXRlICwgZmVjaGFGdW5kaWNpb25IYXN0YSApXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzLmV4ZWN1dGUgKCAncGFfZGF0b3NPRUVmdW4nIClcclxuICAgICAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgICAgIH1cclxufSAgKVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2dyYW5hbGxhZG8nICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkTWFxdWluYSAsIGlkUGllemEgLCBpZE1vbGRlICwgZmVjaGFQcm9kdWNjaW9uRGVzZGUgLCBmZWNoYVByb2R1Y2Npb25IYXN0YSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnbGlzdGFPRUVncmFuYWxsYWRvJyApXHJcbiAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzID0gbmV3ICBtc3NxbC5SZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdpZE1hcXVpbmEnICwgbXNzcWwuSW50ICwgaWRNYXF1aW5hIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnaWRQaWV6YScgLCBtc3NxbC5JbnQgLCBpZFBpZXphIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnaWRNb2xkZScgLCBtc3NxbC5JbnQgLCBpZE1vbGRlIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnZmVjaGFQcm9kdWNjaW9uRGVzZGUnICwgbXNzcWwuRGF0ZSAsIGZlY2hhUHJvZHVjY2lvbkRlc2RlIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnZmVjaGFQcm9kdWNjaW9uSGFzdGEnICwgbXNzcWwuRGF0ZSAsIGZlY2hhUHJvZHVjY2lvbkhhc3RhIClcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXMuZXhlY3V0ZSAoICdwYV9kYXRvc09FRWdyYScgKVxyXG4gICAgICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbiAoIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICAgICAgfVxyXG59ICApXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvbWVjYW5pemFkbycgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgaWRNYXF1aW5hICwgaWRQaWV6YSAsIGlkTW9sZGUgLCBmZWNoYVByb2R1Y2Npb25EZXNkZSAsIGZlY2hhUHJvZHVjY2lvbkhhc3RhIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2xpc3RhT0VFbWVjYW5pemFkbycgKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzID0gbmV3ICBtc3NxbC5SZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2lkTWFxdWluYScgLCBtc3NxbC5JbnQgLCBpZE1hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2lkUGllemEnICwgbXNzcWwuSW50ICwgaWRQaWV6YSApXHJcbiAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnaWRNb2xkZScgLCBtc3NxbC5JbnQgLCBpZE1vbGRlIClcclxuICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdmZWNoYVByb2R1Y2Npb25EZXNkZScgLCBtc3NxbC5EYXRlICwgZmVjaGFQcm9kdWNjaW9uRGVzZGUgKVxyXG4gICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2ZlY2hhUHJvZHVjY2lvbkhhc3RhJyAsIG1zc3FsLkRhdGUgLCBmZWNoYVByb2R1Y2Npb25IYXN0YSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXMuZXhlY3V0ZSAoICdwYV9kYXRvc09FRW1lYycgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQgKCAnLycsYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb24gLCBjZXJyYXJDb25leGlvbiB9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24gKCAgKVxyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUgKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCAoICApXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IGlkIGFzIGlkT3BlcmFjaW9uLCBub21icmUgYXMgbm9tYnJlT3BlcmFjaW9uXHJcbiAgICAgICAgZnJvbSBvcGVyYWNpb25lcyB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSApXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZU9wZXJhY2lvbiB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRPcGVyYWNpb24nIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU9wZXJhY2lvbicgLCBWYXJDaGFyICwgbm9tYnJlT3BlcmFjaW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBvcGVyYWNpb25lcyAoIG5vbWJyZSAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlT3BlcmFjaW9uICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnT3BlcmFjaW9uIGluc2VydGFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVPcGVyYWNpb24gLCBpZE9wZXJhY2lvbiB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVPcGVyYWNpb24nIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlT3BlcmFjaW9uJyAsIFZhckNoYXIgLCBub21icmVPcGVyYWNpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE9wZXJhY2lvbicgLCBJbnQgLCBpZE9wZXJhY2lvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIG9wZXJhY2lvbmVzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZU9wZXJhY2lvblxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkT3BlcmFjaW9uYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnT3BlcmFjaW9uIGFjdHVhbGl6YWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkT3BlcmFjaW9uIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlT3BlcmFjaW9uJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkT3BlcmFjaW9uJyAsIEludCAsIGlkT3BlcmFjaW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgb3BlcmFjaW9uZXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRPcGVyYWNpb25gXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdPcGVyYWNpb24gZWxpbWluYWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggIClcclxuXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy8nICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB2YXIgeyBhYnJpckNvbmV4aW9uICwgY2VycmFyQ29uZXhpb24gfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24gKCAgKVxyXG4gICAgdmFyIHsgUmVxdWVzdCB9ID0gcmVxdWlyZSAoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0ICggIClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5IChcclxuICAgICAgICBgc2VsZWN0IHBtLmlkIGFzIGlkUGFyYWRhTWFxdWluYSwgcG0ubm9tYnJlIGFzIG5vbWJyZVBhcmFkYU1hcXVpbmEsIHBtLnRpcG8gYXMgdGlwb1BhcmFkYU1hcXVpbmEgLCBwbS5zZXR1cCBhcyBzZXR1cFBhcmFkYU1hcXVpbmEgLCBwbS5pZF9hcmVhIGFzIGlkQXJlYSwgYS5ub21icmUgYXMgbm9tYnJlQXJlYVxyXG4gICAgICAgIGZyb20gcGFyYWRhc19tYXF1aW5hIHBtXHJcblx0XHRqb2luIGFyZWFzIGEgb24gcG0uaWRfYXJlYT1hLmlkXHJcbiAgICAgICAgd2hlcmUgcG0uZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKCBlICwgZGF0byApID0+IHtcclxuICAgICAgICAgICAgaWYgKCAhZSApe1xyXG4gICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb24gKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCBkYXRvLnJlY29yZHNldCApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7IGNlcnJhckNvbmV4aW9uICggIClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVQYXJhZGFNYXF1aW5hICwgdGlwb1BhcmFkYU1hcXVpbmEgLCBzZXR1cFBhcmFkYU1hcXVpbmEgLCBpZEFyZWEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50ICwgQml0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UGFyYWRhTWFxdWluYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVQYXJhZGFNYXF1aW5hJyAsIFZhckNoYXIgLCBub21icmVQYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAndGlwb1BhcmFkYU1hcXVpbmEnICwgQml0ICwgdGlwb1BhcmFkYU1hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZEFyZWEnICwgSW50ICwgaWRBcmVhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnc2V0dXBQYXJhZGFNYXF1aW5hJyAsIEludCAsIHNldHVwUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gcGFyYWRhc19tYXF1aW5hICggbm9tYnJlICwgdGlwbyAsIHNldHVwICwgaWRfYXJlYSAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlUGFyYWRhTWFxdWluYSAsIEB0aXBvUGFyYWRhTWFxdWluYSAsIEBzZXR1cFBhcmFkYU1hcXVpbmEgLCBAaWRBcmVhICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGFyYWRhIGRlIE1hcXVpbmEgSW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQYXJhZGFNYXF1aW5hICwgbm9tYnJlUGFyYWRhTWFxdWluYSAsIHNldHVwUGFyYWRhTWFxdWluYSAsIHRpcG9QYXJhZGFNYXF1aW5hICwgaWRBcmVhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCAsIEJpdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVBhcmFkYU1hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGFyYWRhTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ3RpcG9QYXJhZGFNYXF1aW5hJyAsIEJpdCAsIHRpcG9QYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRBcmVhJyAsIEludCAsIGlkQXJlYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGFyYWRhTWFxdWluYScgLCBJbnQgLCBpZFBhcmFkYU1hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdzZXR1cFBhcmFkYU1hcXVpbmEnICwgSW50ICwgc2V0dXBQYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGFyYWRhc19tYXF1aW5hXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZVBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgIHRpcG8gPSBAdGlwb1BhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgIHNldHVwID0gQHNldHVwUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgaWRfYXJlYSA9IEBpZEFyZWFcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBhcmFkYU1hcXVpbmFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQYXJhZGEgZGUgbWFxdWluYSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQYXJhZGFNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlUGFyYWRhTWFxdWluYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBhcmFkYU1hcXVpbmEnICwgSW50ICwgaWRQYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGFyYWRhc19tYXF1aW5hXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUGFyYWRhTWFxdWluYWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BhcmFkYXMgZGUgTWFxdWluYSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gbmV3IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBwLmlkIGFzIGlkUGllemEsIHAubm9tYnJlIGFzIG5vbWJyZVBpZXphICwgcC5pZF9jbGllbnRlIGFzIGlkQ2xpZW50ZSAsIGMubm9tYnJlIGFzIG5vbWJyZUNsaWVudGUgLFxyXG4gICAgICAgIHAuaWRfdGlwb3NfbWF0ZXJpYWwgYXMgaWRUaXBvTWF0ZXJpYWwgLCB0bS5ub21icmUgYXMgbm9tYnJlVGlwb01hdGVyaWFsXHJcbiAgICAgICAgZnJvbSBwaWV6YXMgcFxyXG4gICAgICAgIGpvaW4gY2xpZW50ZXMgYyBvbiBwLmlkX2NsaWVudGUgPSBjLmlkXHJcbiAgICAgICAgam9pbiB0aXBvc19tYXRlcmlhbCB0bSBvbiBwLmlkX3RpcG9zX21hdGVyaWFsID0gdG0uaWRcclxuICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLmdldCgnL3htYXF1aW5hLzppZE1hcXVpbmEnLCBhc3luYyAocmVxLHJlcyk9PnsgLy8gISBMSVNUQURPIERFIFBJRVpBUyBTRUdVTiBNQVFVSU5BXHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtpZE1hcXVpbmF9ID0gcmVxLnBhcmFtc1xyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcC5pZCBhcyBpZFBpZXphLCBwLm5vbWJyZSBhcyBub21icmVQaWV6YVxyXG4gICAgICAgIGZyb20gcGllemFzIHBcclxuICAgICAgICBqb2luIHByb2Nlc29zIHByb1xyXG4gICAgICAgIG9uIHByby5pZF9waWV6YSA9IHAuaWRcclxuICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDEgYW5kIHByby5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9YCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH0gXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JyAsIGFzeW5jICggcmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlUGllemEgLCBpZENsaWVudGUgLCBpZFRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGllemEnICwgVmFyQ2hhciAsIG5vbWJyZVBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIGlkQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hdGVyaWFsJyAsIEludCAsIGlkVGlwb01hdGVyaWFsIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBwaWV6YXMgKCBub21icmUgLCBpZF9jbGllbnRlICwgaWRfdGlwb3NfbWF0ZXJpYWwgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlcyAoIEBub21icmVQaWV6YSAsIEBpZENsaWVudGUgLCBAaWRUaXBvTWF0ZXJpYWwgLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQaWV6YSBpbnNlcnRhZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCByZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBpZXphICwgbm9tYnJlUGllemEgLCBpZENsaWVudGUgLCBpZFRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGllemEnICwgVmFyQ2hhciAsIG5vbWJyZVBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIGlkQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hdGVyaWFsJyAsIEludCAsIGlkVGlwb01hdGVyaWFsIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGllemFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZVBpZXphICxcclxuICAgICAgICBpZF9jbGllbnRlID0gQGlkQ2xpZW50ZSAsXHJcbiAgICAgICAgaWRfdGlwb3NfbWF0ZXJpYWwgPSBAaWRUaXBvTWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBpZXphYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGllemEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnICwgYXN5bmMgKCByZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBpZXphIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVBpZXphJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBpZXphJyAsIEludCAsIGlkUGllemEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBwaWV6YXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQaWV6YWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BpZXphIGVsaW1pbmFkYSBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IE1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcbmNvbnN0IGNvbnZpZXJ0ZUhvcmEgPSAoIGhvcmEgKSA9PiB7XHJcbiAgICB2YXIgSG9ySW5pY2lvbk8gPSBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke2hvcmF9OjAwYClcclxuICAgIEhvckluaWNpb25PLnNldEhvdXJzKCBIb3JJbmljaW9uTy5nZXRIb3VycygpIC0gMyApXHJcbiAgICByZXR1cm4gSG9ySW5pY2lvbk9cclxufVxyXG5yb3V0ZXIucG9zdCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBsYW5pbGxhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdlbGltaW5hUGxhbmlsbGEnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29uc3VsdGEucXVlcnkoIGB1cGRhdGUgcGxhbmlsbGFzX3Byb2R1Y2Npb25cclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSAkeyBwYXJzZUludCAoIGlkUGxhbmlsbGEgKSB9YFxyXG4gICAgICAgIClcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRWxpbWluYWNpb24gZXhpdG9zYSAhJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucG9zdCggJy9saXN0YXInLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIGZlY2hhRGVzZGVQcm9kdWNjaW9uICwgZmVjaGFIYXN0YVByb2R1Y2Npb24gLFxyXG4gICAgICAgICAgICAgICAgZmVjaGFEZXNkZUZ1bmRpY2lvbiAsIGZlY2hhSGFzdGFGdW5kaWNvbiAsIGlkTWFxdWluYSAsIGlkUGllemEgLCBpZE1vbGRlICxpZFRpcG9Qcm9jZXNvICwgaWRPcGVyYWNpb25cclxuICAgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggIClcclxuICAgIGNvbnN0IHsgVHJhbnNhY3Rpb24gLCBJbnQgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSBuZXcgVHJhbnNhY3Rpb24oY29uZXhpb25BYmllcnRhIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oIGFzeW5jIGUgPT57XHJcbiAgICAgICAgaWYoIGUgKSB7ICByZXMuanNvbiggeyBtZW5zYWplOiBlLm1lc3NhZ2UgfSApICB9XHJcbiAgICAgICAgY29uc3Qgc3FsQ29uc3VsdGEgPSBgXHJcbiAgICAgICAgc2VsZWN0IHBsLmlkIGFzIGlkUGxhbmlsbGEsIHBsLmZlX2NhcmdhIGFzIGZlY2hhQ2FyZ2EsIHBsLmZlX3Byb2R1Y2Npb24gYXMgZmVjaGFQcm9kdWNjaW9uLCBwbC5mZV9mdW5kaWNpb24gYXMgZmVjaGFGdW5kaWNpb24sXHJcbiAgICAgICAgcGwuaG9yYV9pbmljaW8gYXMgaG9yYUluaWNpbyAsIHBsLmhvcmFfZmluIGFzIGhvcmFGaW4sIHRtLmlkX29wZXJhY2lvbiBhcyBpZE9wZXJhY2lvbiwgbWFxLmlkIGFzIGlkTWFxdWluYSAsbWFxLm5vbWJyZSBhcyBub21icmVNYXF1aW5hICwgcGllLmlkIGFzIGlkUGllemEsXHJcbiAgICAgICAgcGllLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIG1vbC5pZCBhcyBpZE1vbGRlLCAgbW9sLm5vbWJyZSBhcyBub21icmVNb2xkZSAsIHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyB0aXBvUHJvY2Vzb1xyXG4gICAgICAgICwgcGwuaWRfcHJvY2VzbyBhcyBpZFByb2Nlc29cclxuICAgICAgICBmcm9tIHBsYW5pbGxhc19wcm9kdWNjaW9uIHBsXHJcbiAgICAgICAgam9pbiBtb2xkZXMgbW9sIG9uIHBsLmlkX21vbGRlID0gbW9sLmlkXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwIG9uIHBsLmlkX3Byb2Nlc28gPSBwLmlkXHJcbiAgICAgICAgam9pbiBwaWV6YXMgcGllIG9uIHAuaWRfcGllemEgPSBwaWUuaWRcclxuICAgICAgICBqb2luIG1hcXVpbmFzIG1hcSBvbiBwLmlkX21hcXVpbmEgPSBtYXEuaWRcclxuICAgICAgICBqb2luIHRpcG9zX3Byb2Nlc28gdHAgb24gcC5pZF90aXBvc19wcm9jZXNvID0gdHAuaWRcclxuICAgICAgICBqb2luIHRpcG9zX21hcXVpbmEgdG0gb24gbWFxLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgICAgIHdoZXJlIHBsLmVzdGFkbyA9IDFcclxuICAgICAgICBhbmQgIHBsLmZlX2Z1bmRpY2lvbiBiZXR3ZWVuIEBmZWNoYURlc2RlRnVuZGljaW9uIGFuZCAgQGZlY2hhSGFzdGFGdW5kaWNvblxyXG4gICAgICAgIGFuZCAgcGwuZmVfcHJvZHVjY2lvbiBiZXR3ZWVuICBAZmVjaGFEZXNkZVByb2R1Y2Npb24gYW5kICBAZmVjaGFIYXN0YVByb2R1Y2Npb25cclxuICAgICAgICBhbmQgKCAgQGlkTWFxdWluYSAgaXMgbnVsbCAgb3IgcC5pZF9tYXF1aW5hID0gIEBpZE1hcXVpbmEgIClcclxuICAgICAgICBhbmQgKCAgQGlkUGllemEgIGlzIG51bGwgIG9yIHAuaWRfcGllemEgPSAgQGlkUGllemEgIClcclxuICAgICAgICBhbmQgKCAgQGlkTW9sZGUgIGlzIG51bGwgIG9yIHBsLmlkX21vbGRlID0gIEBpZE1vbGRlICApXHJcbiAgICAgICAgYW5kICggIEBpZFRpcG9Qcm9jZXNvICBpcyBudWxsICBvciBwLmlkX3RpcG9zX3Byb2Nlc28gPSAgQGlkVGlwb1Byb2Nlc28gIClcclxuICAgICAgICBhbmQgKCAgQGlkT3BlcmFjaW9uICBpcyBudWxsICBvciB0bS5pZF9vcGVyYWNpb24gPSAgIEBpZE9wZXJhY2lvbiAgKSBgXHJcbiAgICAgICAgY29uc3QgY29uc3VsdGFQbGFuaWxsYSA9IG5ldyBSZXF1ZXN0KCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgY29uc3VsdGFQbGFuaWxsYS5pbnB1dCggJ2ZlY2hhRGVzZGVGdW5kaWNpb24nICwgbXNzcWwuRGF0ZSAsIGZlY2hhRGVzZGVGdW5kaWNpb24gKVxyXG4gICAgICAgIGNvbnN1bHRhUGxhbmlsbGEuaW5wdXQoICdmZWNoYUhhc3RhRnVuZGljb24nICwgbXNzcWwuRGF0ZSAsIGZlY2hhSGFzdGFGdW5kaWNvbiApXHJcbiAgICAgICAgY29uc3VsdGFQbGFuaWxsYS5pbnB1dCggJ2ZlY2hhRGVzZGVQcm9kdWNjaW9uJyAsIG1zc3FsLkRhdGUgLCBmZWNoYURlc2RlUHJvZHVjY2lvbiApXHJcbiAgICAgICAgY29uc3VsdGFQbGFuaWxsYS5pbnB1dCggJ2ZlY2hhSGFzdGFQcm9kdWNjaW9uJyAsIG1zc3FsLkRhdGUgLCBmZWNoYUhhc3RhUHJvZHVjY2lvbilcclxuICAgICAgICBjb25zdWx0YVBsYW5pbGxhLmlucHV0KCAnaWRNYXF1aW5hJyAsIEludCAsIGlkTWFxdWluYSA9PT0gJycgPyBudWxsIDogcGFyc2VJbnQgKCBpZE1hcXVpbmEgKSApXHJcbiAgICAgICAgY29uc3VsdGFQbGFuaWxsYS5pbnB1dCggJ2lkUGllemEnICwgSW50ICwgaWRQaWV6YSA9PT0gJycgPyBudWxsIDogcGFyc2VJbnQgKCBpZFBpZXphICkgKVxyXG4gICAgICAgIGNvbnN1bHRhUGxhbmlsbGEuaW5wdXQoICdpZE1vbGRlJyAsIEludCAsIGlkTW9sZGUgPT09ICcnID8gbnVsbCA6IHBhcnNlSW50ICggIGlkTW9sZGUgKSApXHJcbiAgICAgICAgY29uc3VsdGFQbGFuaWxsYS5pbnB1dCggJ2lkVGlwb1Byb2Nlc28nICwgSW50ICwgaWRUaXBvUHJvY2VzbyA9PT0gJycgPyBudWxsIDogcGFyc2VJbnQgKCBpZFRpcG9Qcm9jZXNvICkgKVxyXG4gICAgICAgIGNvbnN1bHRhUGxhbmlsbGEuaW5wdXQoICdpZE9wZXJhY2lvbicgLCBJbnQgLCBpZE9wZXJhY2lvbiA9PT0gJycgPyBudWxsIDogcGFyc2VJbnQgKCAgaWRPcGVyYWNpb24gKSApXHJcbiAgICAgICAgY29uc3QgY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUmVjaGF6b3MgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhWm9uYXMgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUE0gPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIHZhciB2ZWNQbGFuaWxsYVByb2R1Y2Npb24gPSBbICBdXHJcbiAgICAgICAgdmFyIHZlY1RyYWJhamFkb3Jlc1xyXG4gICAgICAgIHZhciB2ZWNSZWNoYXpvc1xyXG4gICAgICAgIHZhciB2ZWNab25hc1xyXG4gICAgICAgIHZhciB2ZWNQTVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IGNvbnN1bHRhUGxhbmlsbGEucXVlcnkoIHNxbENvbnN1bHRhIClcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShyZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0KSl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0LmZvckVhY2goIHBsYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsYW5pbGxhICA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRQbGFuaWxsYSA6IHBsYS5pZFBsYW5pbGxhICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVjaGFDYXJnYSA6IHBsYS5mZWNoYUNhcmdhICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVjaGFQcm9kdWNjaW9uIDogcGxhLmZlY2hhUHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlY2hhRnVuZGljaW9uIDogcGxhLmZlY2hhRnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUluaWNpbyA6IG5ldyBNb21lbnQgKCBwbGEuaG9yYUluaWNpbyApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhRmluIDogbmV3IE1vbWVudCAoICBwbGEuaG9yYUZpbiApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE9wZXJhY2lvbiA6IHBsYS5pZE9wZXJhY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkTWFxdWluYSA6IHBsYS5pZE1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVNYXF1aW5hIDogcGxhLm5vbWJyZU1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBpZXphIDogcGxhLmlkUGllemEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVQaWV6YSA6IHBsYS5ub21icmVQaWV6YSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkTW9sZGUgOiBwbGEuaWRNb2xkZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZU1vbGRlIDogcGxhLm5vbWJyZU1vbGRlICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRUaXBvUHJvY2VzbyA6IHBsYS5pZFRpcG9Qcm9jZXNvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwb1Byb2Nlc28gOiBwbGEudGlwb1Byb2Nlc28gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFByb2Nlc28gOiBwbGEuaWRQcm9jZXNvXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZlY1BsYW5pbGxhUHJvZHVjY2lvbi5wdXNoKHBsYW5pbGxhKVxyXG4gICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyA9ICcnXHJcbiAgICAgICAgICAgICAgICB2ZWNQbGFuaWxsYVByb2R1Y2Npb24uZm9yRWFjaCgocGxhLGluZGV4UGxhbmlsbGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiggaW5kZXhQbGFuaWxsYSA9PT0gKHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQubGVuZ3RoIC0gMSkpeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjICs9IGAke3BhcnNlSW50KHBsYS5pZFBsYW5pbGxhKX0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyArPSBgJHtwYXJzZUludChwbGEuaWRQbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiggbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyA9PT0gJycgKXsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhID0gYHNlbGVjdCB0eHAuaWQgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhICwgdC5ub21icmUgYXMgbm9tYnJlVHJhYmFqYWRvciwgdC5hcGVsbGlkbyBhcyBhcGVsbGlkb1RyYWJhamFkb3IsIHR1ci5kZXNjcmlwY2lvbiAgYXMgdHVybm9UcmFiYWphZG9yICxcclxuICAgICAgICAgICAgICAgIHR4cC5ob3JhX2luaWNpbyBhcyBob3JhSW5pY2lvICwgdHhwLmhvcmFfZmluIGFzIGhvcmFGaW4sICB0eHAucHphX3Byb2R1Y2lkYXMgYXMgcGllemFzUHJvZHVjaWRhcyAsXHJcbiAgICAgICAgICAgICAgICB0eHAuY2Fsb3JpYXMgYXMgY2Fsb3JpYXMgLCB0eHAuaWRfcGxhbmlsbGEgYXMgaWRQbGFuaWxsYSAsIHR4cC5pZF90cmFiYWphZG9yIGFzIGlkVHJhYmFqYWRvciAsIHR4cC5pZF90dXJubyBhcyBpZFR1cm5vXHJcbiAgICAgICAgICAgICAgICBmcm9tIHRyYWJhamFkb3JfeF9wbGFuaWxsYSB0eHBcclxuICAgICAgICAgICAgICAgIGpvaW4gdHJhYmFqYWRvcmVzIHQgb24gdHhwLmlkX3RyYWJhamFkb3IgPSB0LmlkXHJcbiAgICAgICAgICAgICAgICBqb2luIHR1cm5vcyB0dXIgb24gdHhwLmlkX3R1cm5vID0gdHVyLmlkXHJcbiAgICAgICAgICAgICAgICB3aGVyZSB0eHAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgYW5kIHR4cC5pZF9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgfSApICA7IGBcclxuICAgICAgICAgICAgICAgIHZhciBzcWxDb25zdWx0YVBNID0gYCBzZWxlY3QgcG14cC5pZCBhcyBpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgLCBwbS5pZCBhcyBpZFBhcmFkYU1hcXVpbmEgLCBwbS5ub21icmUgYXMgbm9tYnJlUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICBwbXhwLmhvcmFfaW5jaW8gYXMgaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEgLCBwbXhwLmhvcmFfZmluIGFzIGhvcmFGaW5QYXJhZGFNYXF1aW5hICwgcG14cC5pZF9wbGFuaWxsYSBhcyBpZFBsYW5pbGxhICwgcG0udGlwbyBhcyB0aXBvUGFyYWRhTWFxdWluYVxyXG4gICAgICAgICAgICAgICAgZnJvbSBwYXJhZGFzX21hcXVpbmFzX3hfcGxhbmlsbGEgcG14cFxyXG4gICAgICAgICAgICAgICAgam9pbiBwYXJhZGFzX21hcXVpbmEgcG0gb24gcG14cC5pZF9wYXJhZGFzX21hcXVpbmEgPSBwbS5pZFxyXG4gICAgICAgICAgICAgICAgd2hlcmUgcG14cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICBhbmQgcG14cC5pZF9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgfSApIDsgYFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhYmFqYWRvcmVzWHBsYW5pbGxhID0gYXdhaXQgIGNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhLnF1ZXJ5KCBzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSArIHNxbENvbnN1bHRhUE0gKVxyXG4gICAgICAgICAgICAgICAgaWYodHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMF0gJiYgdHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMV0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3JlcyA9IHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUE0gPSB0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1sxXVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsaXN0YUlkVHJhYmFqYWRvcmVzID0gJydcclxuICAgICAgICAgICAgICAgICAgICB2ZWNUcmFiYWphZG9yZXMuZm9yRWFjaCgoIHQgLCBpICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggaSA9PT0gKCB2ZWNUcmFiYWphZG9yZXMubGVuZ3RoIC0gMSkpeyBsaXN0YUlkVHJhYmFqYWRvcmVzICs9IGAke3BhcnNlSW50KHQuaWRUcmFiYWphZG9yWHBsYW5pbGxhKX0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IGxpc3RhSWRUcmFiYWphZG9yZXMgKz0gYCR7cGFyc2VJbnQodC5pZFRyYWJhamFkb3JYcGxhbmlsbGEpfSAsYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGxpc3RhSWRUcmFiYWphZG9yZXMgPT09ICcnICkgeyBsaXN0YUlkVHJhYmFqYWRvcmVzID0gbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNxbENvbnN1bHRhUmVjaGF6b3MgPSBgIHNlbGVjdCByeHR5cC5pZCBhcyBpZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSAsIGQubm9tYnJlIGFzIG5vbWJyZVJlY2hhem8gLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ4dHlwLnRpcG8gYXMgdGlwb1JlY2hhem8gLCByeHR5cC5jYW50aWRhZCBhcyBjYW50aWRhZFJlY2hhem9zICwgcnh0eXAuaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSAsIHJ4dHlwLmlkX2RlZmVjdG8gYXMgaWREZWZlY3RvXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSByeHR5cFxyXG4gICAgICAgICAgICAgICAgICAgIGpvaW4gZGVmZWN0b3MgZCBvbiByeHR5cC5pZF9kZWZlY3RvID0gZC5pZFxyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlIHJ4dHlwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgICAgICBhbmQgcnh0eXAuaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFRyYWJhamFkb3JlcyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjaGF6b3MgPSBhd2FpdCBjb25zdWx0YVJlY2hhem9zLnF1ZXJ5KCBzcWxDb25zdWx0YVJlY2hhem9zIClcclxuICAgICAgICAgICAgICAgICAgICBpZiggcmVjaGF6b3MucmVjb3Jkc2V0ICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zID0gcmVjaGF6b3MucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaXN0YUlkUmVjaGF6b3MgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvcy5mb3JFYWNoKCAoIHJlICwgIGluZGV4UmVjaGF6byApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBpbmRleFJlY2hhem8gPT09ICggdmVjUmVjaGF6b3MubGVuZ3RoIC0gMSkpeyBsaXN0YUlkUmVjaGF6b3MgKz0gYCR7cGFyc2VJbnQoIHJlLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICl9IGAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgbGlzdGFJZFJlY2hhem9zICs9IGAke3BhcnNlSW50KHJlLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhKX0gLGAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBsaXN0YUlkUmVjaGF6b3MgPT09ICcnICkgeyBsaXN0YUlkUmVjaGF6b3MgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3FsQ29uc3VsdGFab25hcyA9IGAgc2VsZWN0IHp4cnlwLmlkIGFzIGlkWm9uYSAsIHp4cnlwLmxldHJhIGFzIGxldHJhWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHp4cnlwLm51bWVybyBhcyBudW1lcm9ab25hICwgenhyeXAuY2FudGlkYWQgYXMgY2FudGlkYWRab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgenhyeXAuaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgYXMgaWRSZWNoYXpvc1h0cmFiYWphZG9yWXBsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gem9uYXNfeF9yZWNoYXpvX3hfcGxhbmlsbGEgenhyeXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgenhyeXAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgenhyeXAuaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkUmVjaGF6b3MgfSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZXJlbmNpYUVuTWludXRvcyA9IChob3JhSW5pY2lvLGhvcmFGaW4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhfaW5pY2lvID0gbmV3IE1vbWVudCAoICBob3JhSW5pY2lvICApLmZvcm1hdCAoIFwiSEg6bW1cIiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaF9maW4gPSBuZXcgTW9tZW50ICggIGhvcmFGaW4gICkuZm9ybWF0ICggXCJISDptbVwiIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoRGVzZGUgPSBuZXcgRGF0ZShgMTk5NS0xMi0xN1QwMzoke2hfaW5pY2lvfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaEhhc3RhID0gbmV3IERhdGUoYDE5OTUtMTItMTdUMDM6JHtoX2Zpbn1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaF9pbmljaW8gPT09ICcwNjowMCcgJiYgaF9maW4gPT09ICcwNjowMCcpeyAgcmV0dXJuIDI0ICogNjAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoKGhIYXN0YS1oRGVzZGUpLzEwMDAgPCAwKXsgcmV0dXJuIChoSGFzdGEtaERlc2RlKS8xMDAwICsgMTQ0MCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNleyByZXR1cm4gKGhIYXN0YS1oRGVzZGUpLzEwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaXN0YVpvbmFzID0gYXdhaXQgY29uc3VsdGFab25hcy5xdWVyeSggc3FsQ29uc3VsdGFab25hcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBsaXN0YVpvbmFzLnJlY29yZHNldCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXMgPSBsaXN0YVpvbmFzLnJlY29yZHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLmZvckVhY2goIChwbCAsIGluZGV4UGxhbmlsbGEgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjT3BlcmFyaW9zID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUE0uZm9yRWFjaCggcG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggcGFyc2VJbnQoIHBtLmlkUGxhbmlsbGEgKSA9PT0gcGFyc2VJbnQoIHBsLmlkUGxhbmlsbGEgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhZGFNYXEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQYXJhZGFNYXF1aW5hWHBsYW5pbGxhOiBwbS5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUGFyYWRhTWFxdWluYSA6IHBtLmlkUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlUGFyYWRhTWFxdWluYSA6IHBtLm5vbWJyZVBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2RlUGFyYWRhTWFxdWluYSA6IG5ldyBNb21lbnQgKCBwbS5ob3JhSW5pY2lvUGFyYWRhTWFxdWluYSApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc3RhUGFyYWRhTWFxdWluYSA6IG5ldyBNb21lbnQgKCBwbS5ob3JhRmluUGFyYWRhTWFxdWluYSApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmFjaW9uUGFyYWRhTWFxdWluYSA6IGRpcmVyZW5jaWFFbk1pbnV0b3MoIHBtLmhvcmFJbmljaW9QYXJhZGFNYXF1aW5hICwgIHBtLmhvcmFGaW5QYXJhZGFNYXF1aW5hICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG9QYXJhZGFNYXF1aW5hIDogcG0udGlwb1BhcmFkYU1hcXVpbmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLnB1c2goIHBhcmFkYU1hcSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3Jlcy5mb3JFYWNoKCAodHIgLCBpbmRleFRyYWJhamFkb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBwYXJzZUludCggcGwuaWRQbGFuaWxsYSApID09PSBwYXJzZUludCAoIHRyLmlkUGxhbmlsbGEgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFYcGxhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVHJhYmFqYWRvclhwbGFuaWxsYSA6IHRyLmlkVHJhYmFqYWRvclhwbGFuaWxsYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE9wZXJhcmlvIDogdHIuaWRUcmFiYWphZG9yICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFR1cm5vIDogdHIuaWRUdXJubyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlVHJhYmFqYWRvciA6IHRyLm5vbWJyZVRyYWJhamFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlIDogdHIuaWRUcmFiYWphZG9yICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb1RyYWJhamFkb3IgOiB0ci5hcGVsbGlkb1RyYWJhamFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVybm9UcmFiYWphZG9yIDogdHIudHVybm9UcmFiYWphZG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFJbmljaW8gOiBuZXcgTW9tZW50ICggdHIuaG9yYUluaWNpbyApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFGaW4gOiBuZXcgTW9tZW50ICggdHIuaG9yYUZpbiApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y2Npb24gOiB0ci5waWV6YXNQcm9kdWNpZGFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbG9yaWFzIDogdHIuY2Fsb3JpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6byA6IFsgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MuZm9yRWFjaCggcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwYXJzZUludCggdHJhWHBsYS5pZFRyYWJhamFkb3JYcGxhbmlsbGEgKSA9PT0gcGFyc2VJbnQgKCByZS5pZFRyYWJhamFkb3JYcGxhbmlsbGEgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlY2ggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSA6IHJlLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRSZWNoYXpvIDogcmUuaWREZWZlY3RvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVJlY2hhem8gOiByZS5ub21icmVSZWNoYXpvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG8gOiByZS50aXBvUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZFJlY2hhem8gOiByZS5jYW50aWRhZFJlY2hhem9zICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hcy5mb3JFYWNoKCB6b24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwYXJzZUludCggem9uLmlkUmVjaGF6b3NYdHJhYmFqYWRvcllwbGFuaWxsYSApID09PSBwYXJzZUludCggcmVjaC5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSAgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB6b25hWHJlY2hhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRab25hIDogem9uLmlkWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXRyYSA6IHpvbi5sZXRyYVpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvIDogem9uLm51bWVyb1pvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQgOiB6b24uY2FudGlkYWRab25hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaC52ZWNab25hcy5wdXNoKCB6b25hWHJlY2hhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFYcGxhLnZlY1JlY2hhem8ucHVzaCggcmVjaCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY09wZXJhcmlvcy5wdXNoKCB0cmFYcGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgLy8gaG9sYSBtdW5kbyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLmNvbW1pdCggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB2ZWNQbGFuaWxsYVByb2R1Y2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGUpe1xyXG4gICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayggIClcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOiBlLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdmFyIHsgZmVjaGFQcm9kdWNjaW9uLCBmZWNoYUZ1bmRpY2lvbiwgaWRUdXJubywgSG9yYUluaWNpb1Byb2R1Y2Npb24sXHJcbiAgICAgICAgSG9yYUZpblByb2R1Y2Npb24gLCAgaWRPcGVyYWNpb24gLCBpZE1hcXVpbmEgLCAgaWRQaWV6YSAsICBpZE1vbGRlICwgaWRUaXBvUHJvY2VzbyAsXHJcbiAgICAgICAgdmVjT3BlcmFyaW9zICwgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEgLCBpZFBsYW5pbGxhXHJcbiAgICB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnNvbGUubG9nICggaWRQbGFuaWxsYSApXHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQbGFuaWxsYScgKVxyXG4gICAgY29uc3QgeyBUcmFuc2FjdGlvbiB9ID0gIHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IG1zc3FsICA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCxQcmVwYXJlZFN0YXRlbWVudCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSAgYXdhaXQgbmV3IFRyYW5zYWN0aW9uICggY29uZXhpb25BYmllcnRhIClcclxuICAgIGNvbnN0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IG5ldyBQcmVwYXJlZFN0YXRlbWVudCAoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGRlbGV0ZVpvbmFzUmVjaGF6b3NPcGVyYXJpb3NQbSA9IGF3YWl0IG5ldyBSZXF1ZXN0ICggdHJhbnNhY2Npb24gKVxyXG4gICAgY29uc3QgYXNpbmNyb25vID0gcmVxdWlyZSAoICdhc3luYycgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4gKCBhc3luYyBmdW5jdGlvbiAoIGVyciApICB7XHJcbiAgICAgICAgaWYgKCAhZXJyICkge1xyXG4gICAgICAgICAgICBjb25zdCBtZXRvZG9UcmFuc2FjY2lvbiA9ICBhc3luYyAoICApID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0RGVsZXRlID0gYXdhaXQgZGVsZXRlWm9uYXNSZWNoYXpvc09wZXJhcmlvc1BtLnF1ZXJ5KGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGluICggKHNlbGVjdCByLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSByLmlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBpbiAoICggc2VsZWN0IHQuaWQgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgdCB3aGVyZSB0LmlkX3BsYW5pbGxhID0gJHtpZFBsYW5pbGxhfSApICkgKSApIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBpbiAoICggc2VsZWN0IHQuaWQgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgdCB3aGVyZSB0LmlkX3BsYW5pbGxhID0gJHtpZFBsYW5pbGxhfSApICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdHJhYmFqYWRvcl94X3BsYW5pbGxhIHdoZXJlIGlkX3BsYW5pbGxhID0gJHtpZFBsYW5pbGxhfSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJhZGFzX21hcXVpbmFzX3hfcGxhbmlsbGEgd2hlcmUgaWRfcGxhbmlsbGEgPSAke2lkUGxhbmlsbGF9IDtcclxuICAgICAgICAgICAgICAgICAgICBgKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVzdWx0RGVsZXRlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnZmVfcHJvZHVjY2lvbicgLCBtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2ZlX2Z1bmRpY2lvbicgLCBtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2hvcmFfaW5pY2lvJyAsIG1zc3FsLlRpbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnaG9yYV9maW4nICwgbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdpZF9tb2xkZScgLCBtc3NxbC5JbnQgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnaWRQbGFuaWxsYScgLCBtc3NxbC5JbnQgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24ucHJlcGFyZSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgc2V0IGRhdGVmb3JtYXQgZG15IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkUHJvY2UgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRQcm9jZSA9IChzZWxlY3QgdG9wIDEgaWQgZnJvbSBwcm9jZXNvcyBwICB3aGVyZSBwLmlkX21hcXVpbmEgPSAkeyBpZE1hcXVpbmEgfSBhbmQgcC5pZF9waWV6YSA9ICR7IGlkUGllemEgfSBhbmQgaWRfdGlwb3NfcHJvY2VzbyA9ICR7IGlkVGlwb1Byb2Nlc28gfSApIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSBwbGFuaWxsYXNfcHJvZHVjY2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9wcm9kdWNjaW9uID0gQGZlX3Byb2R1Y2Npb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVfZnVuZGljaW9uID0gQGZlX2Z1bmRpY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbyA9IEBob3JhX2luaWNpbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbiA9IEBob3JhX2ZpbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wcm9jZXNvID0gQGlkUHJvY2UgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfbW9sZGUgPSBAaWRfbW9sZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIGlkID0gQGlkUGxhbmlsbGFgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9wcm9kdWNjaW9uOiBmZWNoYVByb2R1Y2Npb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVfZnVuZGljaW9uOiBmZWNoYUZ1bmRpY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIEhvcmFJbmljaW9Qcm9kdWNjaW9uICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke0hvcmFJbmljaW9Qcm9kdWNjaW9ufTowMGApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggSG9yYUZpblByb2R1Y2Npb24gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7SG9yYUZpblByb2R1Y2Npb259OjAwYCkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBpZFR1cm5vICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfbW9sZGU6IHBhcnNlSW50KCBpZE1vbGRlICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQbGFuaWxsYSA6IHBhcnNlSW50ICggaWRQbGFuaWxsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdEMxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEMxID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmV4ZWN1dGUgKCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVucHJlcGFyZWQgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24udW5wcmVwYXJlICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB1bnByZXBhcmVkICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0Vycm9yIEluc2VyY2lvblBsYW5pbGxhJyB9ICkuc3RhdHVzICggNDAzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3VsdEMxICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY09wZXJhcmlvc1hwbGFuaWxsYSA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvcy5mb3JFYWNoICggb3BlcmFyaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXMgOiBwYXJzZUludCAoIG9wZXJhcmlvLmNhbG9yaWFzICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwemFfcHJvZHVjaWRhcyA6IHBhcnNlSW50ICggb3BlcmFyaW8ucHJvZHVjY2lvbiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhSW5pY2lvICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFJbmljaW99OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUZpbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhRmlufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90cmFiYWphZG9yOiBwYXJzZUludCAoIG9wZXJhcmlvLmlkT3BlcmFyaW8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BsYW5pbGxhOiBwYXJzZUludCAoIGlkUGxhbmlsbGEgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3R1cm5vOiBwYXJzZUludCggb3BlcmFyaW8uaWRUdXJubyApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3M6IG9wZXJhcmlvLnZlY1JlY2hhem9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zWHBsYW5pbGxhLnB1c2ggKCBvcCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEgLCAoIHRyYWJhamFkb3IgLCBjYWxsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnY2Fsb3JpYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5jYWxvcmlhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ3B6YV9wcm9kdWNpZGFzJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IucHphX3Byb2R1Y2lkYXMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90dXJubycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3R1cm5vIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9pbmljaW8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdob3JhX2ZpbicsIG1zc3FsLlRpbWUgLCB0cmFiYWphZG9yLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfdHJhYmFqYWRvcicgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3RyYWJhamFkb3IgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF9wbGFuaWxsYScgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWJhamFkb3IudmVjUmVjaGF6b3MuZm9yRWFjaCAoIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlY2hhem9aID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQgOiBwYXJzZUludCAoIHJlLmNhbnRpZGFkUmVjaGF6byApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG86IHJlLnRpcG8gPyAxIDogMCAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9kZWZlY3RvIDogcGFyc2VJbnQgKCByZS5pZFJlY2hhem8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hcyA6IHJlLnZlY1pvbmFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhLnB1c2ggKCByZWNoYXpvWiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uc3VsdGEgPSBgaW5zZXJ0IGludG8gdHJhYmFqYWRvcl94X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbG9yaWFzICwgcHphX3Byb2R1Y2lkYXMsIGlkX3R1cm5vICwgaG9yYV9pbmljaW8gLCBob3JhX2ZpbiAsIGlkX3RyYWJhamFkb3IgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQGNhbG9yaWFzICwgQHB6YV9wcm9kdWNpZGFzICwgQGlkX3R1cm5vICwgQGhvcmFfaW5pY2lvICwgQGhvcmFfZmluICwgQGlkX3RyYWJhamFkb3IgLCBAaWRfcGxhbmlsbGEgLCAxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSA9ICggc2VsZWN0IG1heCggaWQgKSBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEuZm9yRWFjaCAoIHJlY2hhem8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YSArPSBgaW5zZXJ0IGludG8gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgdGlwbyAsIGlkX2RlZmVjdG8gLCBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLCBlc3RhZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoICR7IHJlY2hhem8uY2FudGlkYWQgfSwgJHsgcmVjaGF6by50aXBvIH0gLCAkeyByZWNoYXpvLmlkX2RlZmVjdG8gfSAsIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSA9IChzZWxlY3QgbWF4KGlkKSBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1pvbmFzWHJlY2hhem8gPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2hhem8udmVjWm9uYXMuZm9yRWFjaCAoIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHpvbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHBhcnNlSW50ICggem9uYS5jYW50aWRhZCApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXRyYSA6IHpvbmEubGV0cmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVybyA6IHBhcnNlSW50ICggem9uYS5udW1lcm8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5wdXNoKCB6b28gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLmZvckVhY2ggKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhICs9IGAgaW5zZXJ0IGludG8gem9uYXNfeF9yZWNoYXpvX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYW50aWRhZCAsIGxldHJhICwgbnVtZXJvICwgaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoICR7IHpvbmEuY2FudGlkYWQgfSAsICckeyB6b25hLmxldHJhIH0nICwgJHsgem9uYS5udW1lcm8gfSAsIEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSAsIDEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5xdWVyeSAoIGNvbnN1bHRhICwgKCBlcnIgLCByZXN1bHQgKSA9PiB7IGlmICggZXJyICkgeyAgY2FsbGJhY2sgKCBlcnIgKSB9IGVsc2UgeyBjYWxsYmFjayAoICApIH0gfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgKCBlcnIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnIubWVzc2FnZSB9ICkuc3RhdHVzICggNDAzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNQYXJhZGFzRGVNYXF1aW5hID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5mb3JFYWNoICggcG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhTUFDID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmRlc2RlUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5kZXNkZVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uaGFzdGFQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmhhc3RhUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGFyYWRhc19tYXF1aW5hOiBwYXJzZUludCggcG0uaWRQYXJhZGFNYXF1aW5hICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BsYW5pbGxhOiBpZFBsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNEZU1hcXVpbmEucHVzaCAoIHBhcmFNQUMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY1BhcmFkYXNEZU1hcXVpbmEgLCAoIFBNICwgY2FsbGJhY2tQTSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYSA9ICBuZXcgUmVxdWVzdCAoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2luY2lvJyAsIG1zc3FsLlRpbWUgLCBQTS5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaG9yYV9maW4nICwgbXNzcWwuVGltZSAsIFBNLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdpZF9wYXJhZGFzX21hcXVpbmEnICwgbXNzcWwuSW50ICwgUE0uaWRfcGFyYWRhc19tYXF1aW5hIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdpZF9wbGFuaWxsYScgLCBtc3NxbC5JbnQgLCBQTS5pZF9wbGFuaWxsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEucXVlcnkgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpbnNlcnQgaW50byBwYXJhZGFzX21hcXVpbmFzX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIGhvcmFfaW5jaW8gLCBob3JhX2ZpbiAsIGlkX3BhcmFkYXNfbWFxdWluYSAsIGlkX3BsYW5pbGxhICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIEBob3JhX2luY2lvICwgQGhvcmFfZmluICwgQGlkX3BhcmFkYXNfbWFxdWluYSAsIEBpZF9wbGFuaWxsYSAsIDEgKWAgLCAoIEVSICwgcmVzdWx0UE0gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIEVSICkgeyBjYWxsYmFja1BNKCBFUiApIH0gZWxzZSB7IGNhbGxiYWNrUE0oICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCBlcnJvUiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9SICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb1IubWVzc2FnZSB9ICkuc3RhdHVzICggNDAzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyICggJ0NvbnRlbnQtVHlwZScgLCAndGV4dC9ldmVudC1zdHJlYW0nIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzICggMjAwICkuanNvbiAoIHsgbWVuc2FqZSA6ICdBY3R1YWxpemFjaW9uIGV4aXRvc2EnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOiBlLm1lc3NhZ2UgLCBtZW5zYWplMjogJ0Vycm9yIGNhdGNoIEZJTkFMJyB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXRvZG9UcmFuc2FjY2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnZXJyIGNvbW1pdCcgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0gKVxyXG5yb3V0ZXIucG9zdCggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHZhciB7IGZlY2hhUHJvZHVjY2lvbiwgZmVjaGFGdW5kaWNpb24sIGlkVHVybm8sIEhvcmFJbmljaW9Qcm9kdWNjaW9uLFxyXG4gICAgICAgIEhvcmFGaW5Qcm9kdWNjaW9uLCAgaWRPcGVyYWNpb24sIGlkTWFxdWluYSwgIGlkUGllemEsICBpZE1vbGRlLCBpZFRpcG9Qcm9jZXNvLFxyXG4gICAgICAgIHZlY09wZXJhcmlvcywgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGFcclxuICAgIH0gPSByZXEuYm9keVxyXG4gICAgdmFyICBpZFBsYW5pbGxhUHJvZHVjY2lvblxyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggJ2NvbnN1bHRhc2EnIClcclxuICAgIGNvbnN0IHsgVHJhbnNhY3Rpb24gfSA9ICByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IG1zc3FsICA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0LFByZXBhcmVkU3RhdGVtZW50IH0gPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHRyYW5zYWNjaW9uID0gIGF3YWl0IG5ldyBUcmFuc2FjdGlvbiggY29uZXhpb25BYmllcnRhIClcclxuICAgIGNvbnN0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IG5ldyBQcmVwYXJlZFN0YXRlbWVudCggdHJhbnNhY2Npb24gKVxyXG4gICAgY29uc3QgY29uc3VsdGFJRHBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IG5ldyBSZXF1ZXN0KCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlKCAnYXN5bmMnIClcclxuICAgIHRyYW5zYWNjaW9uLmJlZ2luKGFzeW5jIGZ1bmN0aW9uICggZXJyICkgIHtcclxuICAgICAgICBpZighZXJyKXtcclxuICAgICAgICAgICAgY29uc3QgbWV0b2RvVHJhbnNhY2Npb24gPSAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2ZlX3Byb2R1Y2Npb24nLG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2ZlX2Z1bmRpY2lvbicsbXNzcWwuRGF0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnaG9yYV9pbmljaW8nLG1zc3FsLlRpbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2hvcmFfZmluJyxtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdpZF9tb2xkZScsbXNzcWwuSW50IClcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24ucHJlcGFyZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgYHNldCBkYXRlZm9ybWF0IGRteSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkUHJvY2UgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZFByb2NlID0gKHNlbGVjdCB0b3AgMSBpZCBmcm9tIHByb2Nlc29zIHAgIHdoZXJlIHAuaWRfbWFxdWluYSA9ICR7IGlkTWFxdWluYSB9IGFuZCBwLmlkX3BpZXphID0gJHsgaWRQaWV6YSB9IGFuZCBpZF90aXBvc19wcm9jZXNvID0gJHsgaWRUaXBvUHJvY2VzbyB9IGFuZCBlc3RhZG8gPSAxICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQgaW50byBwbGFuaWxsYXNfcHJvZHVjY2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoIGZlX2NhcmdhICwgZmVfcHJvZHVjY2lvbiAsIGZlX2Z1bmRpY2lvbiAsIGhvcmFfaW5pY2lvICwgaG9yYV9maW4gLCBpZF9wcm9jZXNvICwgaWRfbW9sZGUgICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggR0VUREFURSgpICwgQGZlX3Byb2R1Y2Npb24gLCBAZmVfZnVuZGljaW9uICwgQGhvcmFfaW5pY2lvICwgQGhvcmFfZmluICwgQGlkUHJvY2UgLCBAaWRfbW9sZGUgLCAxIClgXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZV9wcm9kdWNjaW9uOiBmZWNoYVByb2R1Y2Npb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlX2Z1bmRpY2lvbjogZmVjaGFGdW5kaWNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggSG9yYUluaWNpb1Byb2R1Y2Npb24gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7SG9yYUluaWNpb1Byb2R1Y2Npb259OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggSG9yYUZpblByb2R1Y2Npb24gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7SG9yYUZpblByb2R1Y2Npb259OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkX3R1cm5vOiBwYXJzZUludCggaWRUdXJubyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZTogcGFyc2VJbnQoIGlkTW9sZGUgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0QzFcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRDMSA9IGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5leGVjdXRlKCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5wcmVwYXJlZCA9IGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi51bnByZXBhcmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCB1bnByZXBhcmVkICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6J0Vycm9yIEluc2VyY2lvblBsYW5pbGxhJy55ZWxsb3cgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdEMxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRQbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uLnF1ZXJ5KCBgc2VsZWN0IG1heCggaWQgKSBhcyBpZFBsYW5pbGxhIGZyb20gcGxhbmlsbGFzX3Byb2R1Y2Npb25gIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaWRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0WzBdLmlkUGxhbmlsbGEgJiYgISBpc05hTiggaWRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0WzBdLmlkUGxhbmlsbGEgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3MuZm9yRWFjaCggb3BlcmFyaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbG9yaWFzOiBwYXJzZUludCggb3BlcmFyaW8uY2Fsb3JpYXMgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwemFfcHJvZHVjaWRhczogcGFyc2VJbnQoIG9wZXJhcmlvLnByb2R1Y2Npb24gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIG9wZXJhcmlvLmhvcmFJbmljaW8gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7b3BlcmFyaW8uaG9yYUluaWNpb306MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIG9wZXJhcmlvLmhvcmFGaW4gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7b3BlcmFyaW8uaG9yYUZpbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90cmFiYWphZG9yOiBwYXJzZUludCggb3BlcmFyaW8uaWRPcGVyYXJpbyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IHBhcnNlSW50KCBpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3R1cm5vOiBwYXJzZUludCggb3BlcmFyaW8uaWRUdXJubyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zOiBvcGVyYXJpby52ZWNSZWNoYXpvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEucHVzaCggb3AgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY09wZXJhcmlvc1hwbGFuaWxsYSAsICggdHJhYmFqYWRvciAsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYSA9IG5ldyBSZXF1ZXN0ICggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2NhbG9yaWFzJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuY2Fsb3JpYXMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ3B6YV9wcm9kdWNpZGFzJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IucHphX3Byb2R1Y2lkYXMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3R1cm5vJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHVybm8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfaW5pY2lvJyAsIG1zc3FsLlRpbWUgLCB0cmFiYWphZG9yLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgdHJhYmFqYWRvci5ob3JhX2ZpbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfdHJhYmFqYWRvcicsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHJhYmFqYWRvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfcGxhbmlsbGEnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF9wbGFuaWxsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhYmFqYWRvci52ZWNSZWNoYXpvcy5mb3JFYWNoKCByZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlY2hhem9aID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZDogcGFyc2VJbnQoIHJlLmNhbnRpZGFkUmVjaGF6byApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbzogcmUudGlwbyA/IDEgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9kZWZlY3RvOiBwYXJzZUludCggcmUuaWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hczogcmUudmVjWm9uYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhLnB1c2ggKCByZWNoYXpvWiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnN1bHRhID0gYGluc2VydCBpbnRvIHRyYWJhamFkb3JfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbG9yaWFzICwgcHphX3Byb2R1Y2lkYXMsIGlkX3R1cm5vICwgaG9yYV9pbmljaW8gLCBob3JhX2ZpbiAsIGlkX3RyYWJhamFkb3IgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKEBjYWxvcmlhcyAsIEBwemFfcHJvZHVjaWRhcyAsIEBpZF90dXJubyAsIEBob3JhX2luaWNpbyAsIEBob3JhX2ZpbiAsIEBpZF90cmFiYWphZG9yICwgQGlkX3BsYW5pbGxhICwgMSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgPSAoIHNlbGVjdCBtYXgoIGlkICkgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhIGZyb20gdHJhYmFqYWRvcl94X3BsYW5pbGxhICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEuZm9yRWFjaCAoIHJlY2hhem8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhICs9IGBpbnNlcnQgaW50byByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYW50aWRhZCAsIHRpcG8gLCBpZF9kZWZlY3RvICwgaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgcmVjaGF6by5jYW50aWRhZCB9LCAkeyByZWNoYXpvLnRpcG8gfSAsICR7IHJlY2hhem8uaWRfZGVmZWN0byB9ICwgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsMSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgPSAoc2VsZWN0IG1heChpZCkgZnJvbSByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1pvbmFzWHJlY2hhem8gPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaGF6by52ZWNab25hcy5mb3JFYWNoKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHpvbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkOiBwYXJzZUludCAoIHpvbmEuY2FudGlkYWQgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXRyYTogem9uYS5sZXRyYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVybzogcGFyc2VJbnQgKCB6b25hLm51bWVybyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5wdXNoICggem9vIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzWHJlY2hhem8uZm9yRWFjaCggem9uYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhICs9IGAgaW5zZXJ0IGludG8gem9uYXNfeF9yZWNoYXpvX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgbGV0cmEgLCBudW1lcm8gLCBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoICR7IHpvbmEuY2FudGlkYWQgfSAsICckeyB6b25hLmxldHJhIH0nICwgJHsgem9uYS5udW1lcm8gfSAsIEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSAsIDEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5xdWVyeSggY29uc3VsdGEsKGVycixyZXN1bHQpPT57IGlmKCBlcnIgKSB7ICBjYWxsYmFjayggZXJyICkgfSBlbHNlIHsgY2FsbGJhY2soKSB9IH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICwgKCBlcnIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVyciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVyci5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjUGFyYWRhc0RlTWFxdWluYSA9IFsgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmZvckVhY2ggKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYU1BQyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmRlc2RlUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5kZXNkZVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5oYXN0YVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uaGFzdGFQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BhcmFkYXNfbWFxdWluYTogcGFyc2VJbnQoIHBtLmlkUGFyYWRhTWFxdWluYSApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BsYW5pbGxhOiBpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc0RlTWFxdWluYS5wdXNoICggcGFyYU1BQyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY1BhcmFkYXNEZU1hcXVpbmEgLCAoIFBNICwgY2FsbGJhY2tQTSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hID0gIG5ldyBSZXF1ZXN0ICggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaG9yYV9pbmNpbycgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9pbmljaW8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaG9yYV9maW4nICwgbXNzcWwuVGltZSAsIFBNLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BhcmFkYXNfbWFxdWluYScgLCBtc3NxbC5JbnQsUE0uaWRfcGFyYWRhc19tYXF1aW5hIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIFBNLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLnF1ZXJ5IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpbnNlcnQgaW50byBwYXJhZGFzX21hcXVpbmFzX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaG9yYV9pbmNpbyAsIGhvcmFfZmluICwgaWRfcGFyYWRhc19tYXF1aW5hICwgaWRfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIEBob3JhX2luY2lvICwgQGhvcmFfZmluICwgQGlkX3BhcmFkYXNfbWFxdWluYSAsIEBpZF9wbGFuaWxsYSAsIDEgKWAsKCBFUixyZXN1bHRQTSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBFUiApIHsgY2FsbGJhY2tQTSAoIEVSICkgfSBlbHNlIHsgY2FsbGJhY2tQTSAoICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIGVycm9SID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvUiApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOmVycm9SLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5jb21taXQgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoICdDb250ZW50LVR5cGUnLCAndGV4dC9ldmVudC1zdHJlYW0nIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0luc2VyY2lvbiBleGl0b3JhJyB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIC8vICEgRklOIEZPUiBFQUNIXHJcbiAgICAgICAgICAgICAgICAgICAgfSAvLyEgRklOICBJSUZcclxuICAgICAgICAgICAgICAgIH0gLy8hIEZJTiBERUwgVFJZXHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBtZW5zYWplMiA6ICdFcnJvciBjYXRjaCBGSU5BTCcgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWV0b2RvVHJhbnNhY2Npb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ2VyciBjb21taXQnIClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IClcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoICdleHByZXNzJyApXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5yb3V0ZXIuZ2V0ICggICcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdsaXN0YVBsYW50YXMnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgcC5pZCBhcyBpZFBsYW50YSAsIHAubm9tYnJlIGFzIG5vbWJyZVBsYW50YSAsIHAuYmFycmlvIGFzIGJhcnJpb1BsYW50YSAsXHJcbiAgICAgICAgcC5jcCBhcyBjb2RpZ29Qb3N0YWxQbGFudGEgLCBwLmNhbGxlIGFzIGNhbGxlUGxhbnRhICwgcC5hbHR1cmFfY2FsbGUgYXMgYWx0dXJhQ2FsbGVQbGFudGFcclxuICAgICAgICBmcm9tIHBsYW50YXMgcFxyXG4gICAgICAgIHdoZXJlIHAuZXN0YWRvID0gMWBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3BvbnNlICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHJlc3BvbnNlLnJlY29yZHNldCApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZVBsYW50YSAsIGJhcnJpb1BsYW50YSAsIGNvZGlnb1Bvc3RhbFBsYW50YSAsIGNhbGxlUGxhbnRhICwgYWx0dXJhQ2FsbGVQbGFudGEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UGxhbnRhJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVBsYW50YScgLCBWYXJDaGFyICwgbm9tYnJlUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnYmFycmlvUGxhbnRhJyAsIFZhckNoYXIgLCBiYXJyaW9QbGFudGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdjb2RpZ29Qb3N0YWxQbGFudGEnICwgSW50ICwgY29kaWdvUG9zdGFsUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnY2FsbGVQbGFudGEnICwgVmFyQ2hhciAsIGNhbGxlUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnYWx0dXJhQ2FsbGVQbGFudGEnICwgSW50ICwgYWx0dXJhQ2FsbGVQbGFudGEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHBsYW50YXMgKCBub21icmUgLCBiYXJyaW8gLCBjcCAsIGNhbGxlICwgYWx0dXJhX2NhbGxlICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVQbGFudGEgLCBAYmFycmlvUGxhbnRhICwgQGNvZGlnb1Bvc3RhbFBsYW50YSAsIEBjYWxsZVBsYW50YSAsIEBhbHR1cmFDYWxsZVBsYW50YSAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BsYW50YSBJbnNlcnRhZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBsYW50YSAsIG5vbWJyZVBsYW50YSAsIGJhcnJpb1BsYW50YSAsIGNvZGlnb1Bvc3RhbFBsYW50YSAsIGNhbGxlUGxhbnRhICwgYWx0dXJhQ2FsbGVQbGFudGEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlUGxhbnRhJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVBsYW50YScgLCBWYXJDaGFyICwgbm9tYnJlUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnYmFycmlvUGxhbnRhJyAsIFZhckNoYXIgLCBiYXJyaW9QbGFudGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdjb2RpZ29Qb3N0YWxQbGFudGEnICwgSW50ICwgY29kaWdvUG9zdGFsUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnY2FsbGVQbGFudGEnICwgVmFyQ2hhciAsIGNhbGxlUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnYWx0dXJhQ2FsbGVQbGFudGEnICwgSW50ICwgYWx0dXJhQ2FsbGVQbGFudGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBsYW50YScgLCBJbnQgLCBpZFBsYW50YSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHBsYW50YXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlUGxhbnRhICxcclxuICAgICAgICBiYXJyaW8gPSBAYmFycmlvUGxhbnRhICxcclxuICAgICAgICBjcCA9IEBjb2RpZ29Qb3N0YWxQbGFudGEgLFxyXG4gICAgICAgIGNhbGxlID0gQGNhbGxlUGxhbnRhICxcclxuICAgICAgICBhbHR1cmFfY2FsbGUgPSBAYWx0dXJhQ2FsbGVQbGFudGFcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBsYW50YWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BsYW50YSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBsYW50YSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVBsYW50YScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBsYW50YScgLCBJbnQgLCBpZFBsYW50YSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHBsYW50YXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQbGFudGFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQbGFudGEgZWxpbWluYWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5yb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgaWQgYXMgaWRUaXBvUHJvY2Vzbywgbm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvXHJcbiAgICAgICAgZnJvbSB0aXBvc19wcm9jZXNvXHJcbiAgICAgICAgd2hlcmUgZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5yb3V0ZXIucG9zdCgnL3htYXF1aW5hcGllemF0aXBvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge2lkTWFxdWluYSxpZFBpZXphLGlkVGlwb1Byb2Nlc299ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcHJvLmlkIGFzIGlkUHJvY2VzbywgcHJvLmRlc2NyaXBjaW9uIGFzIGRlc2NyaXBjaW9uUHJvY2Vzb1xyXG4gICAgICAgIGZyb20gcHJvY2Vzb3MgcHJvXHJcbiAgICAgICAgd2hlcmUgcHJvLmVzdGFkbyA9IDFcclxuICAgICAgICBhbmQgcHJvLmlkX3BpZXphID0gJHtpZFBpZXphfVxyXG4gICAgICAgIGFuZCBwcm8uaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfVxyXG4gICAgICAgIGFuZCBwcm8uaWRfdGlwb3NfcHJvY2VzbyA9ICR7aWRUaXBvUHJvY2Vzb31gLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLmdldCAoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdzZWxlY3RQcm9jZXNvcycgKVxyXG4gICAgY29uc3QgeyBUcmFuc2FjdGlvbiAsIFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IG15VHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24gKCBjb25leGlvbiApXHJcbiAgICBteVRyYW5zYWN0aW9uLmJlZ2luICggYXN5bmMgKCBlcnJvclRyYW5zYWMgKSA9PiB7XHJcbiAgICAgICAgaWYgKCBlcnJvclRyYW5zYWMgKSB7XHJcbiAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9yVHJhbnNhYy5tZXNzYWdlIH0gKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgdmVjUHJvY2Vzb3MgPSBbICBdXHJcbiAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggbXlUcmFuc2FjdGlvbiApXHJcbiAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzdFBpZXphWGhzID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0IHAuaWQgYXMgaWRQcm9jZXNvICwgcC5kZXNjcmlwY2lvbiBhcyBkZXNjaXBjaW9uUHJvY2VzbyAsIHAuaWRfcGllemEgYXMgaWRQaWV6YSAsXHJcbiAgICAgICAgICAgIHBpZS5ub21icmUgYXMgbm9tYnJlUGllemEgLCBwLmlkX21hcXVpbmEgYXMgaWRNYXF1aW5hICwgbWFxLm5vbWJyZSBhcyBub21icmVNYXF1aW5hICxcclxuICAgICAgICAgICAgcC5pZF90aXBvc19wcm9jZXNvIGFzIGlkVGlwb1Byb2Nlc28gLCB0cC5ub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc29cclxuICAgICAgICAgICAgZnJvbSBwcm9jZXNvcyBwXHJcbiAgICAgICAgICAgIGpvaW4gcGllemFzIHBpZSBvbiBwLmlkX3BpZXphID0gcGllLmlkXHJcbiAgICAgICAgICAgIGpvaW4gbWFxdWluYXMgbWFxIG9uIHAuaWRfbWFxdWluYSA9IG1hcS5pZFxyXG4gICAgICAgICAgICBqb2luIHRpcG9zX3Byb2Nlc28gdHAgb24gcC5pZF90aXBvc19wcm9jZXNvID0gdHAuaWRcclxuICAgICAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxYFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICAgICAgaWYgKCByZXNwb25zZSApIHtcclxuICAgICAgICAgICAgICAgIHZlY1Byb2Nlc29zID0gcmVzcG9uc2UucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICB2YXIgaWRQcm9jZXNvcyA9ICcnXHJcbiAgICAgICAgICAgICAgICBpZiAoIEFycmF5LmlzQXJyYXkgKCB2ZWNQcm9jZXNvcyApICApIHtcclxuICAgICAgICAgICAgICAgICAgICB2ZWNQcm9jZXNvcy5mb3JFYWNoICggKCBwICwgaSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRQcm9jZXNvcyArPSBgICR7cC5pZFByb2Nlc299ICxgXHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaWRQcm9jZXNvcyA9PT0gJycgKSB7IGlkUHJvY2Vzb3MgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgeyBpZFByb2Nlc29zID0gaWRQcm9jZXNvcy50cmltICggICkuc3Vic3RyaW5nICggMCAsICBpZFByb2Nlc29zLmxlbmd0aCAtMiApIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICggaWRQcm9jZXNvcyApXHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVBpZXphWGhzID0gYHNlbGVjdCBweGguaWQgYXMgaWRQaWV6YXNYaHMgLCBweGguY2FudGlkYWQgYXMgY2FudGlkYWRQaWV6YXNYaHMgLCBweGguZmVfZGVzZGUgYXMgZGVzZGVQaWV6YXNYaHMgLFxyXG4gICAgICAgICAgICAgICAgcHhoLmZlX2hhc3RhIGFzIGhhc3RhUGllemFzWGhzICwgcHhoLmlkX3Byb2Nlc28gYXMgaWRQcm9jZXNvXHJcbiAgICAgICAgICAgICAgICBmcm9tIHBpZXphc194X2hvcmEgcHhoXHJcbiAgICAgICAgICAgICAgICB3aGVyZSBweGguaWRfcHJvY2VzbyBpbiAoJHtpZFByb2Nlc29zfSlgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHJwelhocyA9IGF3YWl0IG15UmVxdWVzdFBpZXphWGhzLnF1ZXJ5ICggcXVlcnlQaWV6YVhocyApXHJcbiAgICAgICAgICAgICAgICB2YXIgdmVjUGllemFzWGhvcmEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICBpZiAoIHJlc3VscnB6WGhzICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICggdmVjUGllemFzWGhvcmEgKVxyXG4gICAgICAgICAgICAgICAgICAgIHZlY1BpZXphc1hob3JhID0gcmVzdWxycHpYaHMucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCByZXN1bHJwelhocy5yZWNvcmRzZXQgKVxyXG4gICAgICAgICAgICAgICAgICAgIHZlY1Byb2Nlc29zLmZvckVhY2ggKCAoIHAgLCBpICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLnZlY1BpZXphc1hob3JhID0gWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BpZXphc1hob3JhLmZvckVhY2ggKCAoIHB6WGhzICwgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHBhcnNlSW50ICggcC5pZFByb2Nlc28gKSA9PT0gcGFyc2VJbnQgKCBwelhocy5pZFByb2Nlc28gKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnZlY1BpZXphc1hob3JhLnB1c2ggKCBwelhocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggdmVjUHJvY2Vzb3MgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH0gKVxyXG59IClcclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc2NyaXBjaW9uUHJvY2VzbyAsIGlkUGllemEgLCBpZE1hcXVpbmEgLCBpZFRpcG9zUHJvY2VzbyAsIHZlY1BpZXphc1hob3JhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFByb2Nlc28nIClcclxuICAgICAgICBjb25zdCAgeyBUcmFuc2FjdGlvbiAsIFJlcXVlc3QgLERhdGUgLCBJbnQgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlUcmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3RQcm9jZXNvID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlICggJ2FzeW5jJyApXHJcbiAgICAgICAgbXlUcmFuc2FjdGlvbi5iZWdpbiAoIGFzeW5jICggZXJyb3JUcmFzYWN0aW9ucyApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBlcnJvclRyYXNhY3Rpb25zICkge1xyXG4gICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvclRyYXNhY3Rpb25zLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdkZXNjcmlwY2lvblByb2Nlc28nICwgVmFyQ2hhciAsICBkZXNjcmlwY2lvblByb2Nlc28gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkUGllemEnICwgSW50ICwgIGlkUGllemEgKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkTWFxdWluYScgLCBJbnQgLCAgaWRNYXF1aW5hIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFRpcG9zUHJvY2VzbycgLCBJbnQgLCAgaWRUaXBvc1Byb2Nlc28gKVxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeVByb2Nlc29zID0gYGluc2VydCBpbnRvIHByb2Nlc29zICggZGVzY3JpcGNpb24gLCBpZF9waWV6YSAsIGlkX21hcXVpbmEgLCBpZF90aXBvc19wcm9jZXNvICwgZXN0YWRvIClcclxuICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICggQGRlc2NyaXBjaW9uUHJvY2VzbyAsIEBpZFBpZXphICwgQGlkTWFxdWluYSAsIEBpZFRpcG9zUHJvY2VzbyAsIDEgKSA7XHJcbiAgICAgICAgICAgIGRlY2xhcmUgQGlkUHJvY2VzbyBpbnRcclxuICAgICAgICAgICAgc2V0IEBpZFByb2Nlc28gPSAoIHNlbGVjdCB0b3AgMSBtYXggKCBpZCApIGZyb20gcHJvY2Vzb3MgKVxyXG4gICAgICAgICAgICBzZWxlY3QgQGlkUHJvY2VzbyBhcyBpZFByb2Nlc29gXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUHJvY2Vzb3MgPSBhd2FpdCBteVJlcXVlc3RQcm9jZXNvLnF1ZXJ5ICggcXVlcnlQcm9jZXNvcyApXHJcbiAgICAgICAgICAgIHZhciBpZFByb2Nlc29cclxuICAgICAgICAgICAgaWYgKCByZXNwb25zZVByb2Nlc29zICkge1xyXG4gICAgICAgICAgICAgICAgaWRQcm9jZXNvID0gcmVzcG9uc2VQcm9jZXNvcy5yZWNvcmRzZXRzWzBdWzBdLmlkUHJvY2Vzb1xyXG4gICAgICAgICAgICAgICAgaWYgKCBBcnJheS5pc0FycmF5ICggdmVjUGllemFzWGhvcmEgKSAmJiB2ZWNQaWV6YXNYaG9yYS5sZW5ndGggPiAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGllemFzWGhvcmEgLCAoIHBpZXphWGhzICwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzdFBpZVhocyA9IG5ldyBSZXF1ZXN0ICggbXlUcmFuc2FjdGlvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdjYW50aWRhZFBpZXphc1hocycgLCBJbnQgLCBwaWV6YVhocy5jYW50aWRhZFBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdkZXNkZVBpZXphc1hocycgLCBEYXRlICwgcGllemFYaHMuZGVzZGVQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnaGFzdGFQaWV6YXNYaHMnICwgRGF0ZSAsIHBpZXphWGhzLmhhc3RhUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2lkUHJvY2VzbycgLCBJbnQgLCBwYXJzZUludCAoIGlkUHJvY2VzbyApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnlQaWV4aHMgPSBgaW5zZXJ0IGludG8gcGllemFzX3hfaG9yYSAoIGNhbnRpZGFkICwgZmVfZGVzZGUgLCBmZV9oYXN0YSAsIGlkX3Byb2Nlc28gLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgKCBAY2FudGlkYWRQaWV6YXNYaHMgLCBAZGVzZGVQaWV6YXNYaHMgLCBAaGFzdGFQaWV6YXNYaHMgLCBAaWRQcm9jZXNvICwgMSApYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMucXVlcnkgKCBxdWVyeVBpZXhocyAsICggZXJyb3IgLCByZXN1bHQgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9yICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICggZXJyb3IgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICB9ICwgKCBlcnJvckNhbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb3JDYWxiYWNrICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9yQ2FsYmFjay5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5jb21taXQgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1Byb2Nlc28gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFByb2Nlc28gLCBkZXNjcmlwY2lvblByb2Nlc28gLCBpZFBpZXphICwgaWRNYXF1aW5hICwgaWRUaXBvc1Byb2Nlc28gLCB2ZWNQaWV6YXNYaG9yYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRQcm9jZXNvJyApXHJcbiAgICAgICAgY29uc3QgIHsgVHJhbnNhY3Rpb24gLCBSZXF1ZXN0ICxEYXRlICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15VHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24gKCBjb25leGlvbiApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0UHJvY2VzbyA9IG5ldyBSZXF1ZXN0ICggbXlUcmFuc2FjdGlvbiApXHJcbiAgICAgICAgY29uc3QgYXNpbmNyb25vID0gcmVxdWlyZSAoICdhc3luYycgKVxyXG4gICAgICAgIG15VHJhbnNhY3Rpb24uYmVnaW4gKCBhc3luYyAoIGVycm9yVHJhc2FjdGlvbnMgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggZXJyb3JUcmFzYWN0aW9ucyApIHtcclxuICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JUcmFzYWN0aW9ucy5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnZGVzY3JpcGNpb25Qcm9jZXNvJyAsIFZhckNoYXIgLCAgZGVzY3JpcGNpb25Qcm9jZXNvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFBpZXphJyAsIEludCAsICBpZFBpZXphIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZE1hcXVpbmEnICwgSW50ICwgIGlkTWFxdWluYSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRUaXBvc1Byb2Nlc28nICwgSW50ICwgIGlkVGlwb3NQcm9jZXNvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFByb2Nlc28nICwgSW50ICwgIGlkUHJvY2VzbyApXHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UHJvY2Vzb3MgPSBgdXBkYXRlIHByb2Nlc29zXHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICBkZXNjcmlwY2lvbiA9IEBkZXNjcmlwY2lvblByb2Nlc28gLFxyXG4gICAgICAgICAgICBpZF9waWV6YSA9IEBpZFBpZXphICxcclxuICAgICAgICAgICAgaWRfbWFxdWluYSA9IEBpZE1hcXVpbmEgLFxyXG4gICAgICAgICAgICBpZF90aXBvc19wcm9jZXNvID0gQGlkVGlwb3NQcm9jZXNvXHJcbiAgICAgICAgICAgIHdoZXJlIGlkID0gQGlkUHJvY2VzbyA7IGRlbGV0ZSBwaWV6YXNfeF9ob3JhIHdoZXJlIGlkX3Byb2Nlc28gPSBAaWRQcm9jZXNvYFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVByb2Nlc29zID0gYXdhaXQgbXlSZXF1ZXN0UHJvY2Vzby5xdWVyeSAoIHF1ZXJ5UHJvY2Vzb3MgKVxyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlUHJvY2Vzb3MgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIEFycmF5LmlzQXJyYXkgKCB2ZWNQaWV6YXNYaG9yYSApICYmIHZlY1BpZXphc1hob3JhLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNQaWV6YXNYaG9yYSAsICggcGllemFYaHMgLCBjYWxsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0UGllWGhzID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2NhbnRpZGFkUGllemFzWGhzJyAsIEludCAsIHBpZXphWGhzLmNhbnRpZGFkUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2Rlc2RlUGllemFzWGhzJyAsIERhdGUgLCBwaWV6YVhocy5kZXNkZVBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdoYXN0YVBpZXphc1hocycgLCBEYXRlICwgcGllemFYaHMuaGFzdGFQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnaWRQcm9jZXNvJyAsIEludCAsIHBhcnNlSW50ICggaWRQcm9jZXNvICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVBpZXhocyA9IGBpbnNlcnQgaW50byBwaWV6YXNfeF9ob3JhICggY2FudGlkYWQgLCBmZV9kZXNkZSAsIGZlX2hhc3RhICwgaWRfcHJvY2VzbyAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAoIEBjYW50aWRhZFBpZXphc1hocyAsIEBkZXNkZVBpZXphc1hocyAsIEBoYXN0YVBpZXphc1hocyAsIEBpZFByb2Nlc28gLCAxIClgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5xdWVyeSAoIHF1ZXJ5UGlleGhzICwgKCBlcnJvciAsIHJlc3VsdCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCBlcnJvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gLCAoIGVycm9yQ2FsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvckNhbGJhY2sgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JDYWxiYWNrLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHJvY2VzbyBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQcm9jZXNvIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVByb2Nlc28nIClcclxuICAgICAgICBjb25zdCAgeyAgUmVxdWVzdCAgLCBJbnQgIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0UHJvY2VzbyA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRQcm9jZXNvJyAsIEludCAsICBpZFByb2Nlc28gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UHJvY2Vzb3MgPSBgdXBkYXRlIHByb2Nlc29zXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUHJvY2VzbyBgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VQcm9jZXNvcyA9IGF3YWl0IG15UmVxdWVzdFByb2Nlc28ucXVlcnkgKCBxdWVyeVByb2Nlc29zIClcclxuICAgICAgICBpZiAoIHJlc3BvbnNlUHJvY2Vzb3MgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1Byb2Nlc29zIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICggJ2V4cHJlc3MnIClcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2xpc3RhclB1ZXN0b3MnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgaWQgYXMgaWRQdWVzdG8gLCBub21icmUgYXMgbm9tYnJlUHVlc3RvIGZyb20gcHVlc3RvcyB3aGVyZSBlc3RhZG8gPSAxYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoICByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggcmVzdWx0LnJlY29yZHNldCApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+e1xyXG4gICAgY29uc3QgeyBub21icmVQdWVzdG8gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UHVlc3RvJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVB1ZXN0bycgLCBWYXJDaGFyICwgbm9tYnJlUHVlc3RvIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBwdWVzdG9zICggbm9tYnJlICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVQdWVzdG8gLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQdWVzdG8gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+e1xyXG4gICAgY29uc3QgeyBpZFB1ZXN0byAsIG5vbWJyZVB1ZXN0byB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQdWVzdG8nIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgLCBEYXRlICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVB1ZXN0bycgLCBWYXJDaGFyICwgbm9tYnJlUHVlc3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQdWVzdG8nICwgSW50ICwgaWRQdWVzdG8gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBwdWVzdG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmUgPSBAbm9tYnJlUHVlc3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIGlkID0gQGlkUHVlc3RvYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHVlc3RvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT57XHJcbiAgICBjb25zdCB7IGlkUHVlc3RvIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVB1ZXN0bycgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUHVlc3RvJyAsIEludCAsIGlkUHVlc3RvIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcHVlc3Rvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSBpZCA9IEBpZFB1ZXN0b2BcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1B1ZXN0byBlbGltaW5hZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoICdleHByZXNzJyApXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvcmVjaGF6b3NQcmltZXJhVnVlbHRhJyAgLCBhc3luYyAoIHJlcSwgcmVzICkgPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IGZlY2hhRnVuZGljaW9uRGVzZGUgLCBmZWNoYUZ1bmRpY2lvbkhhc3RhICwgaWRNYXF1aW5hICwgaWRQaWV6YSAsIGlkTW9sZGUgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnY29uc3VsdGFSZXBvcnRlUmVjaGF6b3MnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnZmVjaGFGdW5kaWNpb25EZXNkZScgLCBtc3NxbC5EYXRlICwgZmVjaGFGdW5kaWNpb25EZXNkZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2ZlY2hhRnVuZGljaW9uSGFzdGEnICwgbXNzcWwuRGF0ZSAsIGZlY2hhRnVuZGljaW9uSGFzdGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE1hcXVpbmEnICwgbXNzcWwuSW50ICwgaWRNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBtc3NxbC5JbnQgLCBpZFBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRNb2xkZScgLCBtc3NxbC5JbnQgLCBpZE1vbGRlIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoICdwYV9yZWNoYXpvc1RvdGFsZXMnIClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgc3RhdHVzIDogNDAzICwgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wb3N0ICgnL3BhcmFkYXNNYXF1aW5hJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7aWRBcmVhICwgZmVjaGFGdW5kaWNpb25EZXNkZSAsIGZlY2hhRnVuZGljaW9uSGFzdGF9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgncmVwb3J0ZVBhcmFkYXNNYXF1aW5hJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQXJlYScgLCBtc3NxbC5JbnQgLCBpZEFyZWEpXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdmZWNoYUZ1bmRpY2lvbkRlc2RlJyAsIG1zc3FsLkRhdGUgLCBmZWNoYUZ1bmRpY2lvbkRlc2RlKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZmVjaGFGdW5kaWNpb25IYXN0YScgLCBtc3NxbC5EYXRlICwgZmVjaGFGdW5kaWNpb25IYXN0YSlcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfcmVwb3J0ZVBhcmFkYXNNYXF1aW5hJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0gKVxyXG5cclxucm91dGVyLnBvc3QgKCcvZGV0YWxsZVBhcmFNYXF1aW5hWG1hcXVpbmEnICwgYXN5bmMgKHJlcSxyZXMpID0+IHtcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3QgeyBmZWNoYURlc2RlRnVuZGljaW9uICwgZmVjaGFIYXN0YUZ1bmRpY2lvbiAsIG5vbWJyZU1hcXVpbmEsIGlkQXJlYSB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnY29uc3VsdGFEZXRhbGxlUGFyZGFNYXF1aW5hJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2ZlY2hhRGVzZGVGdW5kaWNpb24nICwgbXNzcWwuRGF0ZSAsIGZlY2hhRGVzZGVGdW5kaWNpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZmVjaGFIYXN0YUZ1bmRpY2lvbicgLCBtc3NxbC5EYXRlICwgZmVjaGFIYXN0YUZ1bmRpY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVNYXF1aW5hJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQXJlYScgLCBtc3NxbC5JbnQgLCBpZEFyZWEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGV0YWxsZVBhcmFkYU1hcXVpbmEnKVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICgpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLmpzb24oe3N0YXR1cyA6IDQwMyAsIG1lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucG9zdCAoJy9wYXJhZGFzTWFxdWluYVhwbScgLCBhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7IGZlY2hhRGVzZGVGdW5kaWNpb24gLCBmZWNoYUhhc3RhRnVuZGljaW9uICB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnY29uc3VsdGFQYXJkYU1hcXVpbmFYcG0nKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZmVjaGFEZXNkZUZ1bmRpY2lvbicgLCBtc3NxbC5EYXRlICwgZmVjaGFEZXNkZUZ1bmRpY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdmZWNoYUhhc3RhRnVuZGljaW9uJyAsIG1zc3FsLkRhdGUgLCBmZWNoYUhhc3RhRnVuZGljaW9uIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3JlcG9ydGVQTScpXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuanNvbih7c3RhdHVzIDogNDAzICwgbWVuc2FqZSA6IGUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wb3N0ICgnL2RldGFsbGVQYXJhTWFxdWluYVhwbScgLCBhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7IGZlY2hhRGVzZGVGdW5kaWNpb24gLCBmZWNoYUhhc3RhRnVuZGljaW9uICwgbm9tYnJlUGFyYWRhTWFxdWluYSB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnY29uc3VsdGFEZXRhbGxlUGFyZGFNYXF1aW5hWHBtMicpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdmZWNoYURlc2RlRnVuZGljaW9uJyAsIG1zc3FsLkRhdGUgLCBmZWNoYURlc2RlRnVuZGljaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2ZlY2hhSGFzdGFGdW5kaWNpb24nICwgbXNzcWwuRGF0ZSAsIGZlY2hhSGFzdGFGdW5kaWNpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlUGFyYWRhTWFxdWluYScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZXRhbGxlUGFyYWRhTWFxdWluYTInKVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICgpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLmpzb24oe3N0YXR1cyA6IDQwMyAsIG1lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QgKCAnL3JlY2hhem9zWHBpZXphJyAsIGFzeW5jICggcmVxICwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGZlY2hhRnVuZGljaW9uRGVzZGUgLCBmZWNoYUZ1bmRpY2lvbkhhc3RhICwgaWRNYXF1aW5hICwgaWRQaWV6YSAsIGlkTW9sZGUgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnY29uc3VsdGFSZWNoYXpvc1htYXF1aW5hJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSAgbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdmZWNoYUZ1bmRpY2lvbkRlc2RlJyAsIG1zc3FsLkRhdGUgLCBmZWNoYUZ1bmRpY2lvbkRlc2RlKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZmVjaGFGdW5kaWNpb25IYXN0YScgLCBtc3NxbC5EYXRlICwgZmVjaGFGdW5kaWNpb25IYXN0YSlcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkTWFxdWluYScgLCBtc3NxbC5JbnQgLCBpZE1hcXVpbmEpXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFBpZXphJyAsIG1zc3FsLkludCAsIGlkUGllemEpXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZE1vbGRlJyAsIG1zc3FsLkludCAsIGlkTW9sZGUpXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX3JlY2hhem9zWHBpZXphcycpXHJcbiAgICAgICAgaWYocmVzdWx0KXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5qc29uKHtzdGF0dXMgOiA0MDMgLCBtZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCcvY2Fsb3JpYXMnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGZlY2hhUHJvZHVjY2lvbkRlc2RlICwgZmVjaGFQcm9kdWNjaW9uSGFzdGEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MICB9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAncmVwb3J0ZUNhbG9yaWFzJyApXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCAnZmVjaGFQcm9kdWNjaW9uRGVzZGUnICwgbXNzcWwuRGF0ZSAsIGZlY2hhUHJvZHVjY2lvbkRlc2RlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoICdmZWNoYVByb2R1Y2Npb25IYXN0YScgLCBtc3NxbC5EYXRlICwgZmVjaGFQcm9kdWNjaW9uSGFzdGEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCAncGFfY2Fsb3JpYXNYdHJhYmFqYWRvcicgKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKClcclxuICAgICAgICAgICAgcmVzLmpzb24oIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuanNvbih7ICBzdGF0dXMgOiA0MDMgLCBtZW5zYWplIDogZS5tZXNzYWdlIH0pXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wb3N0KCcvZGV0YWxsZUNhbG9yaWFzJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBmZWNoYVByb2R1Y2Npb25EZXNkZSAsIGZlY2hhUHJvZHVjY2lvbkhhc3RhICwgaWRUcmFiYWphZG9yIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCAgfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggJ3JlcG9ydGVEZXRhbGxlQ2Fsb3JpYXMnIClcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoICdmZWNoYVByb2R1Y2Npb25EZXNkZScgLCBtc3NxbC5EYXRlICwgZmVjaGFQcm9kdWNjaW9uRGVzZGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCggJ2ZlY2hhUHJvZHVjY2lvbkhhc3RhJyAsIG1zc3FsLkRhdGUgLCBmZWNoYVByb2R1Y2Npb25IYXN0YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCAnaWRUcmFiYWphZG9yJyAsIG1zc3FsLkludCAsIGlkVHJhYmFqYWRvciApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoICdwYV9kZXRhbGxlQ2Fsb3JpYXNUcmFiYWphZG9yZScgKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKClcclxuICAgICAgICAgICAgcmVzLmpzb24oIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuanNvbih7ICBzdGF0dXMgOiA0MDMgLCBtZW5zYWplIDogZS5tZXNzYWdlIH0pXHJcbiAgICB9XHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCAnZXhwcmVzcycgKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCAgKVxyXG5cclxucm91dGVyLmdldCAoICAnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnbGlzdGFUaXBvc01hcXVpbmEnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgdG0uaWQgYXMgaWRUaXBvTWFxdWluYSAsIHRtLm5vbWJyZSBhcyBub21icmVUaXBvTWFxdWluYSAsIHRtLmlkX29wZXJhY2lvbiBhcyBpZE9wZXJhY2lvbiAsXHJcbiAgICAgICAgby5ub21icmUgYXMgbm9tYnJlT3BlcmFjaW9uXHJcbiAgICAgICAgZnJvbSB0aXBvc19tYXF1aW5hIHRtXHJcbiAgICAgICAgam9pbiBvcGVyYWNpb25lcyBvIG9uIHRtLmlkX29wZXJhY2lvbiA9IG8uaWRcclxuICAgICAgICB3aGVyZSB0bS5lc3RhZG8gPSAxYFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzcG9uc2UgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggcmVzcG9uc2UucmVjb3Jkc2V0IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlVGlwb01hcXVpbmEgICwgaWRPcGVyYWNpb24gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0VGlwb01hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlVGlwb01hcXVpbmEnICwgVmFyQ2hhciAsIG5vbWJyZVRpcG9NYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRPcGVyYWNpb24nICwgSW50ICwgaWRPcGVyYWNpb24gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHRpcG9zX21hcXVpbmEgKCBub21icmUgLCBpZF9vcGVyYWNpb24gLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZVRpcG9NYXF1aW5hICwgQGlkT3BlcmFjaW9uICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVGlwbyBkZSBtYXF1aW5hIEluc2VydGFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkVGlwb01hcXVpbmEgLCBub21icmVUaXBvTWFxdWluYSAsIGlkT3BlcmFjaW9uIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVRpcG9NYXF1aW5hJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVRpcG9NYXF1aW5hJyAsIFZhckNoYXIgLCBub21icmVUaXBvTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkT3BlcmFjaW9uJyAsIEludCAsIGlkT3BlcmFjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWFxdWluYScgLCBJbnQgLCBpZFRpcG9NYXF1aW5hIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWFxdWluYVxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVUaXBvTWFxdWluYSAsXHJcbiAgICAgICAgaWRfb3BlcmFjaW9uID0gQGlkT3BlcmFjaW9uXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRUaXBvTWFxdWluYWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgbWFxdWluYSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRpcG9NYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlVGlwb01hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWFxdWluYScgLCBJbnQgLCBpZFRpcG9NYXF1aW5hIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWFxdWluYVxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFRpcG9NYXF1aW5hYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVGlwbyBkZSBtYXF1aW5hIGVsaW1pbmFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoIClcclxuXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy9saXN0JyAsIGFzeW5jICAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdjb25zdWx0YUxpc3RhQ2xpZW50ZXMnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgaWQgYXMgaWRUaXBvTWF0ZXJpYWwgLCBub21icmUgYXMgbm9tYnJlVGlwb01hdGVyaWFsXHJcbiAgICAgICAgZnJvbSB0aXBvc19tYXRlcmlhbFxyXG4gICAgICAgIHdoZXJlIGVzdGFkbyA9IDFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0VGlwb01hdHJpYWwnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlTWF0ZXJpYWwnICwgVmFyQ2hhciAsIG5vbWJyZU1hdGVyaWFsICApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gdGlwb3NfbWF0ZXJpYWwgKCBub21icmUgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlcyAoIEBub21icmVNYXRlcmlhbCAsIDEgKSAgYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVGlwbyBkZSBNYXRlcmlhbCBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRpcG9NYXRlcmlhbCAgLCAgbm9tYnJlVGlwb01hdGVyaWFsIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVRpcG9NYXRlcmlhbCcgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVUaXBvTWF0ZXJpYWwnICwgVmFyQ2hhciAsIG5vbWJyZVRpcG9NYXRlcmlhbCAgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXRlcmlhbCcgLCBJbnQgLCBpZFRpcG9NYXRlcmlhbCAgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSB0aXBvc19tYXRlcmlhbFxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVUaXBvTWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFRpcG9NYXRlcmlhbGBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgTWF0ZXJpYWwgYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldFRpcG9NYXRlcmlhbCcgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXRlcmlhbCcgLCBJbnQgLCBpZFRpcG9NYXRlcmlhbCAgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSB0aXBvc19tYXRlcmlhbFxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFRpcG9NYXRlcmlhbGBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgTWF0ZXJpYWwgZWxpbWluYWRvICBjb3JyZWN0YW1lbnRlICcgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKCByZXEsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbiB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBpZCBhcyBpZFRpcG9Qcm9jZXNvLCBub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc28gZnJvbSB0aXBvc19wcm9jZXNvIHdoZXJlIGVzdGFkbyA9IDEgJyAsIChlLHJlc3VsdCk9PntcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxucm91dGVyLnBvc3QoJy8nLCBhc3luYyAoIHJlcSwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBpZXphLCBpZE1hcXVpbmEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb24gfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KGBzZWxlY3QgdHAuaWQgYXMgaWRUaXBvUHJvY2VzbywgdHAubm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvIGZyb20gdGlwb3NfcHJvY2VzbyB0cFxyXG4gICAgam9pbiBwcm9jZXNvcyBwIG9uIHRwLmlkID0gcC5pZF90aXBvc19wcm9jZXNvIHdoZXJlIHAuaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfSBhbmQgcC5pZF9waWV6YSA9ICR7aWRQaWV6YX0gYW5kIHRwLmVzdGFkbyA9IDFgLCAoZSxyZXN1bHQpPT57XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggIClcclxuXHJcbnJvdXRlci5nZXQgKCAnLycgLCBhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gIHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCB0LmlkIGFzIGlkVHJhYmFqYWRvciwgdC5ub21icmUgYXMgbm9tYnJlVHJhYmFqYWRvciwgdC5hcGVsbGlkbyBhcyBhcGVsbGlkb1RyYWJhamFkb3IsXHJcbiAgICAgICAgdC5mX25hY2ltaWVudG8gYXMgbmFjaW1pZW50b1RyYWJhamFkb3IsIHQuZl9pbmdyZXNvIGFzIGluZ3Jlc29UcmFiYWphZG9yLFxyXG4gICAgICAgIHQuaWRfcHVlc3RvIGFzIGlkUHVlc3RvLCBwLm5vbWJyZSBhcyBub21icmVQdWVzdG9cclxuICAgICAgICBmcm9tIHRyYWJhamFkb3JlcyB0XHJcbiAgICAgICAgam9pbiBwdWVzdG9zIHAgb24gdC5pZF9wdWVzdG89cC5pZFxyXG4gICAgICAgIHdoZXJlIHQuZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKCBlcnIgLCBkYXRvICkgPT4ge1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7Y2VycmFyQ29uZXhpb24oKX1cclxuICAgICAgICAgICAgZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7Y2VycmFyQ29uZXhpb24oKX1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0gKVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVUcmFiYWphZG9yICwgYXBlbGxpZG9UcmFiYWphZG9yICwgbmFjaW1pZW50b1RyYWJhamFkb3IgLCBpbmdyZXNvVHJhYmFqYWRvciAsIGlkUHVlc3RvIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgTW9tZW50ID0gcmVxdWlyZSAgKCAnbW9tZW50JyApXHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0VHJhYmFqYWRvcicgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIERhdGUgLCBWYXJDaGFyIH0gPSByZXF1aXJlICgnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlVHJhYmFqYWRvcicgLCBWYXJDaGFyICwgbm9tYnJlVHJhYmFqYWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2FwZWxsaWRvVHJhYmFqYWRvcicgLCBWYXJDaGFyICwgYXBlbGxpZG9UcmFiYWphZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbmFjaW1pZW50b1RyYWJhamFkb3InICwgRGF0ZSAsICBuYWNpbWllbnRvVHJhYmFqYWRvciAgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpbmdyZXNvVHJhYmFqYWRvcicgLCBEYXRlICwgIGluZ3Jlc29UcmFiYWphZG9yICApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUHVlc3RvJyAsIEludCAsIGlkUHVlc3RvIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBzZXQgZGF0ZWZvcm1hdCBkbXkgOyBpbnNlcnQgaW50byB0cmFiYWphZG9yZXMgKCBub21icmUgLCBhcGVsbGlkbyAsIGZfbmFjaW1pZW50byAsIGZfaW5ncmVzbyAsIGlkX3B1ZXN0byAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlVHJhYmFqYWRvciAsIEBhcGVsbGlkb1RyYWJhamFkb3IgLCBAbmFjaW1pZW50b1RyYWJhamFkb3IgLCBAaW5ncmVzb1RyYWJhamFkb3IgLCBAaWRQdWVzdG8gLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUcmFiYWphZG9yIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkVHJhYmFqYWRvciAsIG5vbWJyZVRyYWJhamFkb3IgLCBhcGVsbGlkb1RyYWJhamFkb3IgLCBuYWNpbWllbnRvVHJhYmFqYWRvciAsIGluZ3Jlc29UcmFiYWphZG9yICwgaWRQdWVzdG8gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlVHJhYmFqYWRvcicgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIERhdGUgLCBWYXJDaGFyIH0gPSByZXF1aXJlICgnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlVHJhYmFqYWRvcicgLCBWYXJDaGFyICwgbm9tYnJlVHJhYmFqYWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2FwZWxsaWRvVHJhYmFqYWRvcicgLCBWYXJDaGFyICwgYXBlbGxpZG9UcmFiYWphZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbmFjaW1pZW50b1RyYWJhamFkb3InICwgRGF0ZSAsIG5hY2ltaWVudG9UcmFiYWphZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaW5ncmVzb1RyYWJhamFkb3InICwgRGF0ZSAsICBpbmdyZXNvVHJhYmFqYWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUHVlc3RvJyAsIEludCAsIGlkUHVlc3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUcmFiYWphZG9yJyAsIEludCAsIGlkVHJhYmFqYWRvciApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHRyYWJhamFkb3Jlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlID0gQG5vbWJyZVRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkbyA9IEBhcGVsbGlkb1RyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmX25hY2ltaWVudG8gPSBAbmFjaW1pZW50b1RyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmX2luZ3Jlc28gPSBAaW5ncmVzb1RyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wdWVzdG8gPSBAaWRQdWVzdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRUcmFiYWphZG9yYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVHJhYmFqYWRvciBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+e1xyXG4gICAgY29uc3QgeyBpZFRyYWJhamFkb3IgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlVHJhYmFqYWRvcicgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVHJhYmFqYWRvcicgLCBJbnQgLCBpZFRyYWJhamFkb3IgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSB0cmFiYWphZG9yZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRUcmFiYWphZG9yYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVHJhYmFqYWRvciBlbGltaW5hZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcclxuIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHQuaWQgYXMgaWRUdXJubywgdC5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvblR1cm5vLHQuaHNfaW5pY2lvIGFzIGhzSW5pY2lvVHVybm8gLHQuaHNfZmluIGFzIGhzRmluVHVybm8gIFxyXG4gICAgICAgIGZyb20gdHVybm9zIHRcclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXAgPSByZXF1aXJlKCdiY3J5cHQnKVxyXG5yZXF1aXJlKCcuLi9jb25leGlvbmVzL21vbmdvRGInKVxyXG5jb25zdCBVc3VhcmlvID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hVXN1YXJpb3MnKVxyXG5jb25zdCBQZXJmaWwgPSByZXF1aXJlKCcuLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxuLy8gcm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBhd2FpdCBVc3VhcmlvLmZpbmQoKGUsZGF0byk9PntcclxuLy8gICAgICAgICBlID8gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ0Vycm9yIGVuIGVsIHJlcXVlc3QnKSA6XHJcbi8vICAgICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoZGF0bylcclxuLy8gICAgIH0pXHJcbi8vIH0pXHJcbi8vICEgbGlzdGFkbyBkZSB1c3Vhcmlvc1xyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlhc3RhVXN1YXJpbycpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhVXN1YXJpb3MnKVxyXG4gICAgICAgIGlmKHJlc3VsdCl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy8gcm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBsaXN0YVBlcmZpbGVzID0gYXdhaXQgUGVyZmlsLmZpbmQoKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGxpc3RhUGVyZmlsZXMpXHJcbi8vICAgICB9XHJcbi8vICAgICBjYXRjaChlKXtcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4vLyEgbGlzdGEgZGUgcGVyZmlsZXNcclxucm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnbGlzdGFQZXJmaWxlcycpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX2xpc3RhUGVyZmlsZXMnKVxyXG4gICAgICAgIGlmKHJlc3VsdCl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG4vLyEgaW5zZXIgcGVyZmlsZXMgTU9OR09cclxuLy8gcm91dGVyLnBvc3QoJy9wZXJmaWxlcycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICB0cnl7XHJcbi8vICAgICAgICAgY29uc3Qge3BlcmZpbH0gPSByZXEuYm9keVxyXG4vLyAgICAgICAgIGNvbnN0IG5ld1BlcmZpbCA9IG5ldyBQZXJmaWwoe3BlcmZpbH0pXHJcbi8vICAgICAgICAgYXdhaXQgbmV3UGVyZmlsLnNhdmUoKVxyXG4vLyAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidHdWFyZGFkbyBFeGl0b3NhbWVudGUgISd9KVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuLy8gICAgIH1cclxuLy8gfSlcclxuXHJcbi8vIHJvdXRlci5nZXQoJy86aWQnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4vLyAgICAgdHJ5e1xyXG4vLyAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc3VhcmlvLmZpbmRCeUlkICggeyBfaWQ6cmVxLnBhcmFtcy5pZCB9IClcclxuLy8gICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY2F0Y2goZSl7XHJcbi8vICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuLy8gICAgIH1cclxuLy8gfSlcclxuLy8hIGNvbnN1bHRhIHVzdWFyaW8gcG9yIGlkXHJcbnJvdXRlci5nZXQoJy86aWQnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkXHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggJ2dldFVzZXhJZCcpXHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFVzdWFyaW8nICwgbXNzcWwuSW50ICwgaWQpXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0XHJcbiAgICAgICAgdS5pZCBhcyBpZFVzdWFyaW8gLFxyXG4gICAgICAgIHUudXNlck5hbWUgYXMgdXNlck5hbWUgLFxyXG4gICAgICAgIHUuZW1haWwgYXMgZW1haWwgLFxyXG4gICAgICAgIHUubm9tYnJlIGFzIG5vbWJyZVVzdWFyaW8gLFxyXG4gICAgICAgIHUuYXBlbGxpZG8gYXMgYXBlbGxpZG9Vc3VhcmlvICxcclxuICAgICAgICBwLmlkIGFzIGlkUGVyZmlsICxcclxuICAgICAgICBwLm5vbWJyZSBhcyBub21icmVQZXJmaWxcclxuICAgICAgICBmcm9tIHVzdWFyaW9zIHVcclxuICAgICAgICBqb2luIHBlcmZpbGVzIHAgb24gcC5pZCA9IHUuaWRfcGVyZmlsXHJcbiAgICAgICAgd2hlcmUgdS5pZCA9IEBpZFVzdWFyaW9gXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5KHF1ZXJ5KVxyXG4gICAgICAgIGlmKHJlc3VsdCl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtzdGF0dXM6IDQwMyxtZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7c3RhdHVzOiA0MDMsbWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy8hZ3VhcmRhIHVzdWFyaW9cclxucm91dGVyLnBvc3QoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0ICB7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLGlkUGVyZmlsfSA9IHJlcS5ib2R5XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnc2F2ZVVzZXInKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSAoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuICAgICAgICBjb25zdCBwdyA9IGJjcnlwLmhhc2hTeW5jKHBhc3N3b3JkLDEwKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHB3KVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgndXNlck5hbWUnICwgbXNzcWwuVmFyQ2hhciAsIHVzZXJOYW1lKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgncGFzc3dvcmQnICwgbXNzcWwuVmFyQ2hhciAsIHB3KVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZW1haWwnICwgbXNzcWwuVmFyQ2hhciAsIGVtYWlsKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmUpXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhcGVsbGlkbycgLCBtc3NxbC5WYXJDaGFyICwgYXBlbGxpZG8pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFBlcmZpbCcgLCBtc3NxbC5JbnQgLCBpZFBlcmZpbClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfaW5zZXJ0VXN1YXJpb3MnKVxyXG4gICAgICAgIGlmKHJlc3VsdCl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZW5zYWplOiAndXN1YXJpbyBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZSAhJyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7ZXJyb3I6ZXJyLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG4vLyByb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbi8vICAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4vLyAgICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWx9ID0gcmVxLmJvZHlcclxuLy8gICAgIHRyeXtcclxuLy8gICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdzYXZlVXNlcicpXHJcbi8vICAgICAgICAgcGFzc3dvcmQgPSBiY3J5cC5oYXNoU3luYyhwYXNzd29yZClcclxuICAgICAgICBcclxuLy8gICAgICAgICBjb25zdCBuZXdVc2VyPSBuZXcgVXN1YXJpbyh7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLHBlcmZpbH0pXHJcbi8vICAgICAgICAgY29uc3QgZGF0byA9IGF3YWl0IG5ld1VzZXIuc2F2ZSgpXHJcbi8vICAgICAgICAgaWYoZGF0byl7IHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidVc3VhcmlvIGd1YXJkYWRvIGV4aXRvc2FtZW50ZSAhJ30pIH1cclxuLy8gICAgIH1cclxuLy8gICAgIGNhdGNoKGVycil7XHJcbi8vICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe2Vycm9yOmVyci5tZXNzYWdlfSlcclxuLy8gICAgIH1cclxuLy8gfSlcclxuXHJcbi8vIHJvdXRlci5wdXQoJy86aWQnLChyZXEscmVzKT0+e1xyXG4vLyAgICAgY29uc3Qge2lkfSA9IHJlcS5wYXJhbXNcclxuLy8gICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keVxyXG4vLyAgICAgaWYoYm9keS5wYXNzd29yZCl7Ym9keS5wYXNzd29yZCA9IGJjcnlwLmhhc2hTeW5jKGJvZHkucGFzc3dvcmQpIH1cclxuLy8gICAgIFVzdWFyaW8uZmluZEJ5SWRBbmRVcGRhdGUoe19pZDppZH0sYm9keSwoZSxkKT0+e1xyXG4vLyAgICAgICAgIGU/IHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplLm1lc3NhZ2V9KSA6XHJcbi8vICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J01vZGlmaWNhZG8gY29ycmVjdGFtZW50ZSAhJ30pXHJcbi8vICAgICB9KVxyXG4vLyB9KVxyXG5yb3V0ZXIucHV0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3QgIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8saWRQZXJmaWwgLCBpZFVzdWFyaW99ID0gcmVxLmJvZHlcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCd1cGRhdGVVc2VyJylcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUgKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCd1c2VyTmFtZScgLCBtc3NxbC5WYXJDaGFyICwgdXNlck5hbWUpXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdwYXNzd29yZCcgLCBtc3NxbC5WYXJDaGFyICwgYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQpKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZW1haWwnICwgbXNzcWwuVmFyQ2hhciAsIGVtYWlsKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmUpXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdhcGVsbGlkbycgLCBtc3NxbC5WYXJDaGFyICwgYXBlbGxpZG8pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdpZFBlcmZpbCcgLCBtc3NxbC5JbnQgLCBpZFBlcmZpbClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkVXN1YXJpbycgLCBtc3NxbC5JbnQgLCBpZFVzdWFyaW8pXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUoJ3BhX3VwZGF0ZVVzdWFyaW9zJylcclxuICAgICAgICBpZihyZXN1bHQpe1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVuc2FqZTogJ3VzdWFyaW8gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUgIScgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3luY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb3JnYW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXNzcWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==