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

if (true) {
  __webpack_require__(/*! colors */ "colors");
}

var URI;

if (false) {} else {
  URI = 'mongodb://localhost:5000:27017/usuariosEMS';
}

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var conexion = mongoose.connection;
conexion.on('error', console.error.bind(console, 'error de conexion'));
conexion.once('open', () => {
  if (true) {
    console.log('Conectado a MONGODB'.red);
  } else {}
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

var URI;

if (false) {} else {
  URI = {
    user: 'DBjav',

    /* DBjav emsDB  */
    password: 'belgrano455',
    database: 'EMS_DB_SQL',
    port: 1433,
    server: 'DESKTOP-G1I097C',

    /* DESKTOP-G1I097C  PC2360 */
    options: {
      appName: 'ems-node-api',
      enableArithAbort: true,
      encrypt: false
    },
    connectionTimeOut: 150000,
    driver: 'tedious',
    stream: false,
    pool: {
      max: 20,
      min: 0,
      idleTimeoutMillis: 30000
    }
  };
}

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
servidor.use('/api/usuarios', __webpack_require__(/*! ./rutasApi/authAccesos/authAdminRouter */ "./rutasApi/authAccesos/authAdminRouter.js"), __webpack_require__(/*! ./rutasApi/usuarios */ "./rutasApi/usuarios.js"));
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

const bcrypt = __webpack_require__(/*! bcrypt-nodejs */ "bcrypt-nodejs");

const Usuario = __webpack_require__(/*! ../esquemasMongo/esquemaUsuarios */ "./esquemasMongo/esquemaUsuarios.js");

const {
  secret
} = __webpack_require__(/*! ../CONFIG */ "./CONFIG.js");

const jwt = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");

const router = Router();
router.post('/', async (req, res, next) => {
  try {
    const user = await Usuario.find({
      userName: req.body.userName
    });

    if (!user[0]) {
      res.status(403).json({
        mensaje: 'Usuario Inexistente !'
      });
    } else {
      const verificaPass = await bcrypt.compareSync(req.body.password, user[0].password);

      if (!verificaPass) {
        res.status(403).json({
          mensaje: 'Password Incorrecta'
        });
      } else {
        const miUsuario = {
          userName: user[0].userName,
          email: user[0].email,
          nombre: user[0].nombre,
          apellido: user[0].apellido,
          perfil: user[0].perfil
        };
        jwt.sign(miUsuario, secret, {
          expiresIn: 14400
        }, (e, token) => {
          e ? res.status(404).json({
            mensaje: 'Error al generar el token'
          }) : res.status(200).json({
            token
          });
        });
      }
    }
  } catch (e) {
    res.status(404).json({
      e
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
      console.log(datosUser.perfil);

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
    console.log('pasepornext');
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
    cerrarConexionPOOL();
    res.json({
      mensaje: 'Eliminacion exitosa !'
    });
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
          // var idZonasDelete = ''
          // var idRechazosDelete = ''
          // var idOperariosDelete = ''
          // var idPmDelete = ''
          // vecParadasMaquinaSeleccionada.forEach ( ( p , ip ) => {
          //     if(( vecParadasMaquinaSeleccionada.length -1 )  === ip  ) {
          //         idPmDelete += ` ${parseInt ( p.idParadaMaquinaXplanilla )}  `
          //     }
          //     else {
          //         idPmDelete += ` ${parseInt ( p.idParadaMaquinaXplanilla )} , `
          //     }
          // } )
          // vecOperarios.forEach ( ( o , io ) => {
          //     idOperariosDelete += ` ${parseInt( o.idTrabajadorXplanilla )} , `
          //     o.vecRechazo.forEach ( ( r , ir ) => {
          //         idRechazosDelete += ` ${parseInt ( r.idRechazoXtrabajadorYplanilla )} , `
          //         r.vecZonas.forEach ( ( z , iz ) => {
          //             idZonasDelete += ` ${parseInt ( z.idZona )} , `
          //         })
          //     } )
          // } )
          // if ( idOperariosDelete !== '' ) { idOperariosDelete =  idOperariosDelete.trim (  ).substring ( 0 , idOperariosDelete.trim (  ).length - 1 )}
          // if ( idRechazosDelete !== '' ) { idRechazosDelete =  idRechazosDelete.trim (  ).substring ( 0 , idRechazosDelete.trim (  ).length - 1 )}
          // if ( idZonasDelete !== '' ) { idZonasDelete =  idZonasDelete.trim (  ).substring ( 0 , idZonasDelete.trim (  ).length - 1 )}
          // const resultDelete = await deleteZonasRechazosOperariosPm.query ( ` delete zonas_x_rechazo_x_planilla where id in ( ${ idZonasDelete === '' ? null : idZonasDelete} ) ;
          // delete rechazos_x_trabajador_y_planilla where id in ( ${ idRechazosDelete === '' ? null : idRechazosDelete } ) ;
          // delete trabajador_x_planilla where id in ( ${ idOperariosDelete === '' ? null : idOperariosDelete } ) ;
          // delete paradas_maquinas_x_planilla where id in ( ${ idPmDelete === '' ? null : idPmDelete } ) ; ` )
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

const bcryp = __webpack_require__(/*! bcrypt-nodejs */ "bcrypt-nodejs");

__webpack_require__(/*! ../conexiones/mongoDb */ "./conexiones/mongoDb.js");

const Usuario = __webpack_require__(/*! ../esquemasMongo/esquemaUsuarios */ "./esquemasMongo/esquemaUsuarios.js");

const Perfil = __webpack_require__(/*! ../esquemasMongo/esquemaRolesUsuarios */ "./esquemasMongo/esquemaRolesUsuarios.js");

const router = Router();
router.get('/', async (req, res) => {
  await Usuario.find((e, dato) => {
    e ? res.status(403).send('Error en el request') : res.status(200).send(dato);
  });
});
router.get('/perfiles', async (req, res) => {
  try {
    const listaPerfiles = await Perfil.find();
    res.status(200).json(listaPerfiles);
  } catch (e) {
    res.status(404).json({
      mensaje: e.message
    });
  }
});
router.post('/perfiles', async (req, res) => {
  try {
    const {
      perfil
    } = req.body;
    const newPerfil = new Perfil({
      perfil
    });
    await newPerfil.save();
    res.status(200).json({
      mensaje: 'Guardado Exitosamente !'
    });
  } catch (e) {
    res.status(403).json({
      mensaje: e.message
    });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const user = await Usuario.findById({
      _id: req.params.id
    });
    res.status(200).json(user);
  } catch (e) {
    res.status(403).json({
      mensaje: e.message
    });
  }
});
router.post('/', async (req, res) => {
  try {
    var {
      userName,
      password,
      email,
      nombre,
      apellido,
      perfil
    } = req.body;
    password = await bcryp.hashSync(password);
    const newUser = new Usuario({
      userName,
      password,
      email,
      nombre,
      apellido,
      perfil
    });
    const dato = await newUser.save();
    res.status(200).json({
      mensaje: 'Usuario guardado exitosamente !'
    });
  } catch (err) {
    res.status(403).json({
      error: err.message
    });
  }
});
router.put('/:id', (req, res) => {
  const {
    id
  } = req.params;
  const body = req.body;

  if (body.password) {
    body.password = bcryp.hashSync(body.password);
  }

  Usuario.findByIdAndUpdate({
    _id: id
  }, body, (e, d) => {
    e ? res.status(403).json({
      error: e.message
    }) : res.status(200).json({
      mensaje: 'Modificado correctamente !'
    });
  });
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

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvbW9uZ29EYi5qcyIsIndlYnBhY2s6Ly8vLi9jb25leGlvbmVzL3NxbFNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvYXJlYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3MvYXV0aEFkbWluUm91dGVyLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL2F1dGhBY2Nlc29zL2F1dGhBbGxSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoQWRtaW5Sb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDFSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDJSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDNSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDRSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDVSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9jbGllbnRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9kZWZlY3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9tYXF1aW5hcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9tb2xkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvb2VlLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL29wZXJhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BpZXphcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BsYW50YXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvcHJvY2Vzb3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvcHVlc3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9yZXBvcnRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc01hcXVpbmEuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdGlwb3NNYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc1Byb2Nlc28uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdHJhYmFqYWRvcmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3R1cm5vcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS91c3Vhcmlvcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3luY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdC1ub2RlanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXNzcWxcIiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VjcmV0IiwibW9uZ29vc2UiLCJyZXF1aXJlIiwicHJvY2VzcyIsIlVSSSIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25leGlvbiIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJlcnJvciIsImJpbmQiLCJvbmNlIiwibG9nIiwicmVkIiwibXNzcWwiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsInBvcnQiLCJzZXJ2ZXIiLCJvcHRpb25zIiwiYXBwTmFtZSIsImVuYWJsZUFyaXRoQWJvcnQiLCJlbmNyeXB0IiwiY29ubmVjdGlvblRpbWVPdXQiLCJkcml2ZXIiLCJzdHJlYW0iLCJwb29sIiwibWF4IiwibWluIiwiaWRsZVRpbWVvdXRNaWxsaXMiLCJDb25leGlvblNRTCIsImFicmlyQ29uZXhpb24iLCJ1bmRlZmluZWQiLCJjZXJyYXJDb25leGlvbiIsImFicmlyQ29uZXhpb25QT09MIiwiY2VycmFyQ29uZXhpb25QT09MIiwidGhlbiIsIl9jb25uZWN0ZWQiLCJibHVlIiwiZ3JlZW4iLCJjbG9zZSIsImNvbmV4aW9uZXMiLCJuYW1lIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibmV3Q29uZXhpb24iLCJDb25uZWN0aW9uUG9vbCIsImFyZ3MiLCJQcm9taXNlIiwiYWxsIiwidmFsdWVzIiwibWFwIiwicGVyZmlsIiwiU2NoZW1hIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsImVudW0iLCJzZXQiLCJtb2RlbCIsInVzdWFyaW8iLCJ1c2VyTmFtZSIsInJlcXVpcmVkIiwiZW1haWwiLCJub21icmUiLCJhcGVsbGlkbyIsImV4cHJlc3MiLCJjb3JzIiwibW9yZ2FuIiwic2Vydmlkb3IiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiZW52IiwiUE9SVCIsImxpc3RlbiIsImdldCIsIm0iLCJlIiwieWVsbG93IiwiUm91dGVyIiwiand0IiwiQ09ORklHIiwicm91dGVyIiwicmVxIiwicmVzIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJtZW5zYWplIiwidG9rZW4iLCJzcGxpdCIsInZlcmlmeSIsImQiLCJiY3J5cHQiLCJVc3VhcmlvIiwicG9zdCIsIm5leHQiLCJmaW5kIiwiYm9keSIsInZlcmlmaWNhUGFzcyIsImNvbXBhcmVTeW5jIiwibWlVc3VhcmlvIiwic2lnbiIsImV4cGlyZXNJbiIsIlJlcXVlc3QiLCJteVJlcXVpcmVzIiwicmVzdWx0IiwicXVlcnkiLCJyZWNvcmRzZXQiLCJtZXNzYWdlIiwibm9tYnJlQXJlYSIsIlZhckNoYXIiLCJteVJlcXVlc3QiLCJpbnB1dCIsInB1dCIsImlkQXJlYSIsIkludCIsImRhdG9zVXNlciIsInBhdGgiLCJkYXRvcyIsIm90cm8iLCJwZXJtaXNvIiwiY29uZXhpb24yIiwibXlSZXF1ZXN0MiIsInBhcnNlSW50IiwiaWRDbGllbnRlIiwibm9tYnJlQ2xpZW50ZSIsInJhem9uU29jaWFsQ2xpZW50ZSIsImNvbnN1bHRhIiwiZXJyIiwiZGF0byIsIm5vbWJyZURlZmVjdG8iLCJpZE9wZXJhY2lvbiIsImlkRGVmZWN0byIsInBhcmFtcyIsIm5vbWJyZU1hcXVpbmEiLCJkZXNjcmlwY2lvbk1hcXVpbmEiLCJpZFRpcG9NYXF1aW5hIiwiaWRQbGFudGEiLCJpZE1hcXVpbmEiLCJpZFBpZXphIiwibm9tYnJlTW9sZGUiLCJpZE1vbGRlIiwiZmVjaGFGdW5kaWNpb25EZXNkZSIsImZlY2hhRnVuZGljaW9uSGFzdGEiLCJteVJlcXVlcyIsIkRhdGUiLCJleGVjdXRlIiwiZmVjaGFQcm9kdWNjaW9uRGVzZGUiLCJmZWNoYVByb2R1Y2Npb25IYXN0YSIsIm5vbWJyZU9wZXJhY2lvbiIsIm5vbWJyZVBhcmFkYU1hcXVpbmEiLCJ0aXBvUGFyYWRhTWFxdWluYSIsInNldHVwUGFyYWRhTWFxdWluYSIsIkJpdCIsImlkUGFyYWRhTWFxdWluYSIsIm5vbWJyZVBpZXphIiwiaWRUaXBvTWF0ZXJpYWwiLCJNb21lbnQiLCJjb252aWVydGVIb3JhIiwiaG9yYSIsIkhvckluaWNpb25PIiwic2V0SG91cnMiLCJnZXRIb3VycyIsImlkUGxhbmlsbGEiLCJjb25leGlvbkFiaWVydGEiLCJmZWNoYURlc2RlUHJvZHVjY2lvbiIsImZlY2hhSGFzdGFQcm9kdWNjaW9uIiwiZmVjaGFEZXNkZUZ1bmRpY2lvbiIsImZlY2hhSGFzdGFGdW5kaWNvbiIsImlkVGlwb1Byb2Nlc28iLCJUcmFuc2FjdGlvbiIsInRyYW5zYWNjaW9uIiwiYmVnaW4iLCJzcWxDb25zdWx0YSIsImNvbnN1bHRhUGxhbmlsbGEiLCJjb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSIsImNvbnN1bHRhUmVjaGF6b3MiLCJjb25zdWx0YVpvbmFzIiwiY29uc3VsdGFQTSIsInZlY1BsYW5pbGxhUHJvZHVjY2lvbiIsInZlY1RyYWJhamFkb3JlcyIsInZlY1JlY2hhem9zIiwidmVjWm9uYXMiLCJ2ZWNQTSIsInJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbiIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJwbGEiLCJwbGFuaWxsYSIsImZlY2hhQ2FyZ2EiLCJmZWNoYVByb2R1Y2Npb24iLCJmZWNoYUZ1bmRpY2lvbiIsImhvcmFJbmljaW8iLCJmb3JtYXQiLCJob3JhRmluIiwidGlwb1Byb2Nlc28iLCJpZFByb2Nlc28iLCJwdXNoIiwibGlzdGFJZFBsYW5pbGxhc1Byb2R1YyIsImluZGV4UGxhbmlsbGEiLCJsZW5ndGgiLCJzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSIsInNxbENvbnN1bHRhUE0iLCJ0cmFiYWphZG9yZXNYcGxhbmlsbGEiLCJyZWNvcmRzZXRzIiwibGlzdGFJZFRyYWJhamFkb3JlcyIsInQiLCJpIiwiaWRUcmFiYWphZG9yWHBsYW5pbGxhIiwic3FsQ29uc3VsdGFSZWNoYXpvcyIsInJlY2hhem9zIiwibGlzdGFJZFJlY2hhem9zIiwicmUiLCJpbmRleFJlY2hhem8iLCJpZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSIsInNxbENvbnN1bHRhWm9uYXMiLCJkaXJlcmVuY2lhRW5NaW51dG9zIiwiaF9pbmljaW8iLCJoX2ZpbiIsImhEZXNkZSIsImhIYXN0YSIsImxpc3RhWm9uYXMiLCJwbCIsInZlY09wZXJhcmlvcyIsInZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhIiwicG0iLCJwYXJhZGFNYXEiLCJpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEiLCJkZXNkZVBhcmFkYU1hcXVpbmEiLCJob3JhSW5pY2lvUGFyYWRhTWFxdWluYSIsImhhc3RhUGFyYWRhTWFxdWluYSIsImhvcmFGaW5QYXJhZGFNYXF1aW5hIiwiZHVyYWNpb25QYXJhZGFNYXF1aW5hIiwidHIiLCJpbmRleFRyYWJhamFkb3IiLCJ0cmFYcGxhIiwiaWRPcGVyYXJpbyIsImlkVHJhYmFqYWRvciIsImlkVHVybm8iLCJub21icmVUcmFiYWphZG9yIiwiYXBlbGxpZG9UcmFiYWphZG9yIiwidHVybm9UcmFiYWphZG9yIiwicHJvZHVjY2lvbiIsInBpZXphc1Byb2R1Y2lkYXMiLCJjYWxvcmlhcyIsInZlY1JlY2hhem8iLCJyZWNoIiwiaWRSZWNoYXpvIiwibm9tYnJlUmVjaGF6byIsInRpcG8iLCJ0aXBvUmVjaGF6byIsImNhbnRpZGFkUmVjaGF6byIsImNhbnRpZGFkUmVjaGF6b3MiLCJ6b24iLCJpZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGEiLCJ6b25hWHJlY2hhIiwiaWRab25hIiwibGV0cmEiLCJsZXRyYVpvbmEiLCJudW1lcm8iLCJudW1lcm9ab25hIiwiY2FudGlkYWQiLCJjYW50aWRhZFpvbmEiLCJjb21taXQiLCJyb2xsYmFjayIsIkhvcmFJbmljaW9Qcm9kdWNjaW9uIiwiSG9yYUZpblByb2R1Y2Npb24iLCJQcmVwYXJlZFN0YXRlbWVudCIsInBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbiIsImRlbGV0ZVpvbmFzUmVjaGF6b3NPcGVyYXJpb3NQbSIsImFzaW5jcm9ubyIsIm1ldG9kb1RyYW5zYWNjaW9uIiwicmVzdWx0RGVsZXRlIiwiVGltZSIsInByZXBhcmUiLCJkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiIsImZlX3Byb2R1Y2Npb24iLCJmZV9mdW5kaWNpb24iLCJob3JhX2luaWNpbyIsImhvcmFfZmluIiwiaWRfdHVybm8iLCJpZF9tb2xkZSIsInJlc3VsdEMxIiwidW5wcmVwYXJlZCIsInVucHJlcGFyZSIsInZlY09wZXJhcmlvc1hwbGFuaWxsYSIsIm9wZXJhcmlvIiwib3AiLCJwemFfcHJvZHVjaWRhcyIsImlkX3RyYWJhamFkb3IiLCJpZF9wbGFuaWxsYSIsImVhY2hTZXJpZXMiLCJ0cmFiYWphZG9yIiwiY2FsbGJhY2siLCJwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEiLCJ2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEiLCJyZWNoYXpvWiIsImlkX2RlZmVjdG8iLCJyZWNoYXpvIiwidmVjWm9uYXNYcmVjaGF6byIsInpvbmEiLCJ6b28iLCJ2ZWNQYXJhZGFzRGVNYXF1aW5hIiwicGFyYU1BQyIsImlkX3BhcmFkYXNfbWFxdWluYSIsIlBNIiwiY2FsbGJhY2tQTSIsImNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYSIsIkVSIiwicmVzdWx0UE0iLCJlcnJvUiIsInNldEhlYWRlciIsIm1lbnNhamUyIiwiaWRQbGFuaWxsYVByb2R1Y2Npb24iLCJjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uIiwiaXNOYU4iLCJyZXNwb25zZSIsIm5vbWJyZVBsYW50YSIsImJhcnJpb1BsYW50YSIsImNvZGlnb1Bvc3RhbFBsYW50YSIsImNhbGxlUGxhbnRhIiwiYWx0dXJhQ2FsbGVQbGFudGEiLCJteVRyYW5zYWN0aW9uIiwiZXJyb3JUcmFuc2FjIiwidmVjUHJvY2Vzb3MiLCJteVJlcXVlc3RQaWV6YVhocyIsImlkUHJvY2Vzb3MiLCJwIiwidHJpbSIsInN1YnN0cmluZyIsInF1ZXJ5UGllemFYaHMiLCJyZXN1bHJwelhocyIsInZlY1BpZXphc1hob3JhIiwicHpYaHMiLCJpbmRleCIsImRlc2NyaXBjaW9uUHJvY2VzbyIsImlkVGlwb3NQcm9jZXNvIiwibXlSZXF1ZXN0UHJvY2VzbyIsImVycm9yVHJhc2FjdGlvbnMiLCJxdWVyeVByb2Nlc29zIiwicmVzcG9uc2VQcm9jZXNvcyIsInBpZXphWGhzIiwibXlSZXF1ZXN0UGllWGhzIiwiY2FudGlkYWRQaWV6YXNYaHMiLCJkZXNkZVBpZXphc1hocyIsImhhc3RhUGllemFzWGhzIiwicXVlcnlQaWV4aHMiLCJlcnJvckNhbGJhY2siLCJub21icmVQdWVzdG8iLCJpZFB1ZXN0byIsImZlY2hhSGFzdGFGdW5kaWNpb24iLCJub21icmVUaXBvTWFxdWluYSIsIm5vbWJyZU1hdGVyaWFsIiwibm9tYnJlVGlwb01hdGVyaWFsIiwibmFjaW1pZW50b1RyYWJhamFkb3IiLCJpbmdyZXNvVHJhYmFqYWRvciIsImJjcnlwIiwiUGVyZmlsIiwic2VuZCIsImxpc3RhUGVyZmlsZXMiLCJuZXdQZXJmaWwiLCJzYXZlIiwiZmluZEJ5SWQiLCJfaWQiLCJpZCIsImhhc2hTeW5jIiwibmV3VXNlciIsImZpbmRCeUlkQW5kVXBkYXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxj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OztBQUNqRW1GLFNBQU8sQ0FBQ21SLGlCQUFSLENBQTBCO0FBQUNKLE9BQUcsRUFBQ0M7QUFBTCxHQUExQixFQUFtQzVRLElBQW5DLEVBQXdDLENBQUNyQixDQUFELEVBQUdlLENBQUgsS0FBTztBQUMzQ2YsS0FBQyxHQUFFTyxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCbEIsSUFBaEIsQ0FBcUI7QUFBQ2pFLFdBQUssRUFBQ3lFLENBQUMsQ0FBQ2dDO0FBQVQsS0FBckIsQ0FBRixHQUNEekIsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQmxCLElBQWhCLENBQXFCO0FBQUNtQixhQUFPLEVBQUM7QUFBVCxLQUFyQixDQURBO0FBRUgsR0FIRDtBQUlILENBUkQ7QUFVQWxHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjJGLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDekVBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNlY3JldDonamF2aWVyMTkwNSdcclxufSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbnJlcXVpcmUoJ2NvbG9ycycpXHJcbn1cclxuXHJcbnZhciBVUkk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpe1xyXG4gICAgIFVSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcbn1cclxuZWxzZXtcclxuICAgICBVUkkgPSAnbW9uZ29kYjovL2xvY2FsaG9zdDo1MDAwOjI3MDE3L3VzdWFyaW9zRU1TJ1xyXG59XHJcblxyXG5tb25nb29zZS5jb25uZWN0KFVSSSx7dXNlTmV3VXJsUGFyc2VyOnRydWUsdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlfSk7XHJcblxyXG52YXIgY29uZXhpb24gPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG5cclxuY29uZXhpb24ub24oJ2Vycm9yJyxjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwnZXJyb3IgZGUgY29uZXhpb24nKSk7XHJcblxyXG5jb25leGlvbi5vbmNlKCdvcGVuJywoKT0+e1xyXG4gICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgIGNvbnNvbGUgLmxvZygnQ29uZWN0YWRvIGEgTU9OR09EQicucmVkKVxyXG4gICAgIH0gXHJcbiAgICAgZWxzZXtcclxuICAgICAgICAgIGNvbnNvbGUgLmxvZygnQ29uZWN0YWRvIGEgTU9OR09EQicpXHJcbiAgICAgfVxyXG59KVxyXG4iLCJjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJyk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXsgcmVxdWlyZSgnY29sb3JzJykgfVxyXG5cclxudmFyIFVSSVxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyl7XHJcbiAgICBVUkkgPSB7XHJcbiAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuVVNFUlNRTCxcclxuICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUEFTU1dPUkRTUUwsXHJcbiAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRBVEFCQVNFU1FMLFxyXG4gICAgICAgIHNlcnZlcjpwcm9jZXNzLmVudi5TRVJWRVJTUUwsXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuZWxzZXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiAnREJqYXYnLCAvKiBEQmphdiBlbXNEQiAgKi9cclxuICAgICAgICBwYXNzd29yZDogJ2JlbGdyYW5vNDU1JyxcclxuICAgICAgICBkYXRhYmFzZTogJ0VNU19EQl9TUUwnLFxyXG4gICAgICAgIHBvcnQ6MTQzMyxcclxuICAgICAgICBzZXJ2ZXI6J0RFU0tUT1AtRzFJMDk3QycsIC8qIERFU0tUT1AtRzFJMDk3QyAgUEMyMzYwICovXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGFwcE5hbWU6J2Vtcy1ub2RlLWFwaScsXHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAgY29ubmVjdGlvblRpbWVPdXQ6MTUwMDAwLFxyXG4gICAgICAgIGRyaXZlcjondGVkaW91cycsXHJcbiAgICAgICAgc3RyZWFtOmZhbHNlLFxyXG4gICAgICAgIHBvb2w6e1xyXG4gICAgICAgICAgICBtYXg6MjAsXHJcbiAgICAgICAgICAgIG1pbjowLFxyXG4gICAgICAgICAgICBpZGxlVGltZW91dE1pbGxpczozMDAwMCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBDb25leGlvblNRTCA9IHsgYWJyaXJDb25leGlvbjp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uOnVuZGVmaW5lZCwgYWJyaXJDb25leGlvblBPT0w6dW5kZWZpbmVkLCBjZXJyYXJDb25leGlvblBPT0w6dW5kZWZpbmVkIH1cclxudmFyIGNvbmV4aW9uXHJcbkNvbmV4aW9uU1FMLmFicmlyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGF3YWl0IG1zc3FsLmNvbm5lY3QoVVJJKVxyXG4gICAgLnRoZW4ocG9vbD0+e1xyXG4gICAgICAgIGlmKHBvb2wuX2Nvbm5lY3RlZCl7XHJcbiAgICAgICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25lY2lvbiBTUUwgU0VSVkVSJy5ibHVlLCcgQUJJRVJUQScuZ3JlZW4pXHJcbiAgICAgICAgICAgICAgICBjb25leGlvbiA9IHBvb2xcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZGUgQ29uZXhpb24nLHBvb2wuX2Nvbm5lY3RlZClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbkNvbmV4aW9uU1FMLmNlcnJhckNvbmV4aW9uID0gYXN5bmMgZnVuY3Rpb24gKCl7XHJcbiAgICBhd2FpdCBjb25leGlvbi5jbG9zZSgpXHJcbiAgICBpZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBDRVJSQURBJy5ncmVlbilcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY29uZXhpb25lcyA9IHt9XHJcblxyXG5Db25leGlvblNRTC5hYnJpckNvbmV4aW9uUE9PTCA9IGFzeW5jIG5hbWUgPT57XHJcbiAgIFxyXG4gICAgaWYoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25leGlvbmVzLG5hbWUpKXtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdDb25leGlvbiA9IG5ldyBtc3NxbC5Db25uZWN0aW9uUG9vbChVUkkpXHJcbiAgICAgICAgY29uc3QgY2xvc2UgPSBuZXdDb25leGlvbi5jbG9zZS5iaW5kKG5ld0NvbmV4aW9uKVxyXG4gICAgICAgXHJcbiAgICAgICAgbmV3Q29uZXhpb24uY2xvc2UgPSAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICBkZWxldGUgY29uZXhpb25lc1tuYW1lXVxyXG4gICAgICAgICAgICByZXR1cm4gY2xvc2UoLi4uYXJncylcclxuICAgICAgICB9XHJcbiAgICAgICAgYXdhaXQgbmV3Q29uZXhpb24uY29ubmVjdCgpXHJcbiAgICAgICAgY29uZXhpb25lc1tuYW1lXSA9IG5ld0NvbmV4aW9uXHJcbiAgICAgICAgcmV0dXJuIGNvbmV4aW9uZXNbbmFtZV1cclxuICAgIH1cclxufVxyXG5cclxuQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb25QT09MID0gKCkgPT57XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LnZhbHVlcyhjb25leGlvbmVzKS5tYXAoKHBvb2wpPT57XHJcbiAgICAgICAgcmV0dXJuIHBvb2wuY2xvc2UoKVxyXG4gICAgfSkpXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBDb25leGlvblNRTCIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgcGVyZmlsID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgICBwZXJmaWw6e1xyXG4gICAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmU6dHJ1ZSxcclxuICAgICAgICB1bmlxdWU6dHJ1ZSxcclxuICAgICAgICBlbnVtOlsnQWRtaW4nLCduaXZlbC0xJywnbml2ZWwtMicsJ25pdmVsLTMnLCduaXZlbC00Jywnbml2ZWwtNSddXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb25nb29zZS5zZXQoJ3VzZUNyZWF0ZUluZGV4JywgdHJ1ZSlcclxubW9uZ29vc2Uuc2V0KCd1c2VGaW5kQW5kTW9kaWZ5JywgZmFsc2UpXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vbmdvb3NlLm1vZGVsKCdwZXJmaWwnLHBlcmZpbCkiLCJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbmNvbnN0IHVzdWFyaW8gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuXHJcbiAgICB1c2VyTmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGFzc3dvcmQ6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgZW1haWw6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlXHJcbiAgICB9LFxyXG4gICAgbm9tYnJlOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIGFwZWxsaWRvOntcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gICAgfSxcclxuICAgIHBlcmZpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICBlbnVtOlsnQWRtaW4nLCduaXZlbC0xJywnbml2ZWwtMicsJ25pdmVsLTMnLCduaXZlbC00Jywnbml2ZWwtNSddXHJcbiAgICB9XHJcbn0pXHJcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKVxyXG5tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ3VzdWFyaW8nLHVzdWFyaW8pIiwiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBjb3JzID0gcmVxdWlyZSgnY29ycycpXHJcbnZhciBtb3JnYW47XHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICByZXF1aXJlKCdjb2xvcnMnKVxyXG4gICAgbW9yZ2FuID0gcmVxdWlyZSgnbW9yZ2FuJylcclxufVxyXG4vLyBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVilcclxuXHJcbmNvbnN0IHNlcnZpZG9yID0gZXhwcmVzcygpXHJcbnNlcnZpZG9yLnVzZShjb3JzKCkpXHJcblxyXG4vLyBtaWRkZWx3YXJlXHJcblxyXG5zZXJ2aWRvci51c2UoZXhwcmVzcy5qc29uKCkpXHJcbnNlcnZpZG9yLnVzZShleHByZXNzLnVybGVuY29kZWQoe2V4dGVuZGVkOiB0cnVlfSkpXHJcbnNlcnZpZG9yLnVzZShyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zL2F1dGhBbGxSb3V0ZXInKSlcclxuXHJcblxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbiAgICBzZXJ2aWRvci51c2UobW9yZ2FuKCdkZXYnKSlcclxufVxyXG5cclxuc2Vydmlkb3IudXNlKCcvYXBpL2F1dGhSb3V0ZXJSZWFjdC9hZG1pbicscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhBZG1pblJvdXRlclJlYWN0JykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWwxJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsMVJvdXRlclJlYWN0JykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWwyJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsMlJvdXRlclJlYWN0JykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWwzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsM1JvdXRlclJlYWN0JykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWw0JyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsNFJvdXRlclJlYWN0JykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3Qvbml2ZWw1JyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zUmVhY3QvYXV0aE5pdmVsNVJvdXRlclJlYWN0JykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9tYXF1aW5hcycscmVxdWlyZSgnLi9ydXRhc0FwaS9tYXF1aW5hcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdXN1YXJpb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3MvYXV0aEFkbWluUm91dGVyJykscmVxdWlyZSgnLi9ydXRhc0FwaS91c3VhcmlvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbG9ndWVvJyxyZXF1aXJlKCcuL3J1dGFzQXBpL0xvZ3VlbycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvYXV0ZW50aWZpY2FzaW9uJyxyZXF1aXJlKCcuL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbicpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcGllemFzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BpZXphcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbW9sZGVzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL21vbGRlcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvZGVmZWN0b3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvZGVmZWN0b3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL29wZXJhY2lvbmVzJyxyZXF1aXJlKCcuL3J1dGFzQXBpL29wZXJhY2lvbmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wcm9jZXNvcycscmVxdWlyZSgnLi9ydXRhc0FwaS9wcm9jZXNvcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdHVybm9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3R1cm5vcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcGFyYWRhc01hcXVpbmEnLHJlcXVpcmUoJy4vcnV0YXNBcGkvcGFyYWRhc01hcXVpbmEnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RyYWJhamFkb3JlcycscmVxdWlyZSgnLi9ydXRhc0FwaS90cmFiYWphZG9yZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BsYW5pbGxhc1Byb2R1Y2Npb24nLHJlcXVpcmUoJy4vcnV0YXNBcGkvcGxhbmlsbGFzUHJvZHVjY2lvbicpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvdGlwb3NQcm9jZXNvJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3RpcG9zUHJvY2VzbycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvY2xpZW50ZXMnLCByZXF1aXJlKCAnLi9ydXRhc0FwaS9jbGllbnRlcycgKSApXHJcbnNlcnZpZG9yLnVzZSAoJy9hcGkvdGlwb3NNYXRlcmlhbCcsIHJlcXVpcmUgKCAnLi9ydXRhc0FwaS90aXBvc01hdGVyaWFsJyApIClcclxuc2Vydmlkb3IudXNlICgnL2FwaS9hcmVhcycsIHJlcXVpcmUgKCAnLi9ydXRhc0FwaS9hcmVhcycgKSApXHJcbnNlcnZpZG9yLnVzZSAoICcvYXBpL3RpcG9zTWFxdWluYScgLCByZXF1aXJlICggJy4vcnV0YXNBcGkvdGlwb3NNYXF1aW5hJyApKVxyXG5zZXJ2aWRvci51c2UgKCAnL2FwaS9wbGFudGFzJyAsIHJlcXVpcmUgKCAnLi9ydXRhc0FwaS9wbGFudGFzJyApKVxyXG5zZXJ2aWRvci51c2UgKCAnL2FwaS9wdWVzdG9zJyAsIHJlcXVpcmUgKCAnLi9ydXRhc0FwaS9wdWVzdG9zJyApIClcclxuc2Vydmlkb3IudXNlICggJy9hcGkvb2VlJyAsIHJlcXVpcmUgKCAnLi9ydXRhc0FwaS9vZWUnICkgKVxyXG5zZXJ2aWRvci51c2UgKCcvYXBpL3JlcG9ydGVzJyAsIHJlcXVpcmUgKCAnLi9ydXRhc0FwaS9yZXBvcnRlcycgKSlcclxuXHJcbi8vU2V0dGluZ3Ncclxuc2Vydmlkb3Iuc2V0KCdwb3J0Jyxwcm9jZXNzLmVudi5QT1JUIHx8IDUwMDApXHJcblxyXG5zZXJ2aWRvci5saXN0ZW4oc2Vydmlkb3IuZ2V0KCdwb3J0JyksKG0sZSk9PntcclxuICAgIGlmKGUpe2NvbnNvbGUubG9nKGUpfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vydmlkb3IgY29ycmllbmRvIGVuIGVsIFBVRVJUTycueWVsbG93LHNlcnZpZG9yLmdldCgncG9ydCcpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2Vydmlkb3IgY29ycmllbmRvIGVuIGVsIFBVRVJUTycsc2Vydmlkb3IuZ2V0KCdwb3J0JykpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSIsImNvbnN0IFJvdXRlciA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCBDT05GSUcgPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyPVJvdXRlcigpO1xyXG5cclxucm91dGVyLmdldCgnLycsKHJlcSxyZXMpPT57XHJcblxyXG4gICAgaWYoIXJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidObyBlbnZpbyBlbCBUb2tlbiBlbiBlbCBoZWFkZXJzJ30pXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXTtcclxuICAgICAgICBqd3QudmVyaWZ5KHRva2VuLENPTkZJRy5zZWNyZXQsKGUsZCk9PntcclxuICAgICAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm5hbWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXB0ID1yZXF1aXJlKCdiY3J5cHQtbm9kZWpzJylcclxuY29uc3QgVXN1YXJpbyA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi9DT05GSUcnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMsbmV4dCk9PntcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzdWFyaW8uZmluZCh7dXNlck5hbWU6cmVxLmJvZHkudXNlck5hbWV9KVxyXG4gICAgICAgIGlmKCF1c2VyWzBdKXtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J1VzdWFyaW8gSW5leGlzdGVudGUgISd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJpZmljYVBhc3MgPSBhd2FpdCBiY3J5cHQuY29tcGFyZVN5bmMocmVxLmJvZHkucGFzc3dvcmQsdXNlclswXS5wYXNzd29yZClcclxuICAgICAgICAgICAgaWYoIXZlcmlmaWNhUGFzcyl7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonUGFzc3dvcmQgSW5jb3JyZWN0YSd9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaVVzdWFyaW8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWU6dXNlclswXS51c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDp1c2VyWzBdLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vbWJyZTp1c2VyWzBdLm5vbWJyZSxcclxuICAgICAgICAgICAgICAgICAgICBhcGVsbGlkbzp1c2VyWzBdLmFwZWxsaWRvLFxyXG4gICAgICAgICAgICAgICAgICAgIHBlcmZpbDp1c2VyWzBdLnBlcmZpbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgand0LnNpZ24obWlVc3VhcmlvLHNlY3JldCx7ZXhwaXJlc0luOjE0NDAwfSwoZSx0b2tlbik9PntcclxuICAgICAgICAgICAgICAgICAgICBlPyByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVuc2FqZTonRXJyb3IgYWwgZ2VuZXJhciBlbCB0b2tlbid9KTpcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7dG9rZW59KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHtlfSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICggJ2V4cHJlc3MnIClcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy8nICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2xpc3RhQXJlYXMnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgfSA9IG5ldyByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1aXJlcyA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWlyZXMucXVlcnkgKFxyXG4gICAgICAgICAgICBgc2VsZWN0IGlkIGFzIGlkQXJlYSAsIG5vbWJyZSBhcyBub21icmVBcmVhXHJcbiAgICAgICAgICAgIGZyb20gYXJlYXNcclxuICAgICAgICAgICAgd2hlcmUgZXN0YWRvID0gMWBcclxuICAgICAgICApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggcmVzdWx0LnJlY29yZHNldCApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZUFyZWEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydEFyZWEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlQXJlYScgLCBWYXJDaGFyICwgbm9tYnJlQXJlYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gYXJlYXMgKCBub21icmUgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZUFyZWEgLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdBcmVhIEluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRBcmVhICwgbm9tYnJlQXJlYSAgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlQXJlYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVBcmVhJyAsIFZhckNoYXIgLCBub21icmVBcmVhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRBcmVhJyAsIEludCAsIGlkQXJlYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIGFyZWFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZUFyZWFcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZEFyZWFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdBcmVhIGFjdHVhbGl6YWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZEFyZWEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVBcmVhJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkQXJlYScgLCBJbnQgLCBpZEFyZWEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBhcmVhc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZEFyZWFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdBcmVhIGVsaW1pbmFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUgKCcuLi8uLi9DT05GSUcnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoIHJlcSAsIHJlcyAsbmV4dCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV1cclxuICAgIGp3dC52ZXJpZnkodG9rZW4sIHNlY3JldCAsIChlICwgZGF0b3NVc2VyKSA9PiB7XHJcbiAgICAgICAgaWYoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0b3NVc2VyLnBlcmZpbClcclxuICAgICAgICAgICAgaWYoZGF0b3NVc2VyLnBlcmZpbCAhPT0gJ0FkbWluJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogJ0FjY2VzbyBkZW5lZ2FkbyBwb3Igbm8gc2VyIGFkbWluJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV4dCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi8uLi9DT05GSUcnKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocmVxICwgcmVzICxuZXh0KSB7XHJcbiAgICBpZiAocmVxLnBhdGggIT09ICcvYXBpL2xvZ3VlbycpIHtcclxuICAgICAgICBpZiggIXJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamUgOiAnTm8gZW52aW8gZWwgdG9qZW4gZW4gZWwgaGVhZGVycyd9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXVxyXG4gICAgICAgICAgICBqd3QudmVyaWZ5KHRva2VuICxzZWNyZXQgLCAoIGUgLCBkYXRvcyApPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlICwgb3RybyA6ICdlcnJvciAgZW4gbGEgY29tbXByb3ZhY2lvbiB0b2tlbid9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygncGFzZXBvcm5leHQnKVxyXG4gICAgICAgIHJldHVybiBuZXh0KClcclxuICAgIH1cclxufSIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vLi4vQ09ORklHJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PiB7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV1cclxuICAgIGp3dC52ZXJpZnkodG9rZW4sc2VjcmV0LChlLGRhdG9zVXNlcik9PiB7XHJcbiAgICAgICAgaWYoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6IGUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihkYXRvc1VzZXIucGVyZmlsID09PSAnYWRtaW4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7cGVybWlzbyA6IHRydWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOiAndXN0ZWQgbm8gZXMgYWRtaW4nfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUoJy4uLy4uL0NPTkZJRycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsKHJlcSxyZXMpPT4ge1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdXHJcbiAgICBqd3QudmVyaWZ5KHRva2VuLHNlY3JldCwoZSxkYXRvc1VzZXIpPT4ge1xyXG4gICAgICAgIGlmKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOiBlLm1lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoZGF0b3NVc2VyLnBlcmZpbCA9PT0gJ25pdmVsLTEnKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7cGVybWlzbyA6IHRydWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOiAndXN0ZWQgbm8gZXMgbml2ZWwgMSd9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vLi4vQ09ORklHJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PiB7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV1cclxuICAgIGp3dC52ZXJpZnkodG9rZW4sc2VjcmV0LChlLGRhdG9zVXNlcik9PiB7XHJcbiAgICAgICAgaWYoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6IGUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihkYXRvc1VzZXIucGVyZmlsID09PSAnbml2ZWwtMicpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtwZXJtaXNvIDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ICd1c3RlZCBubyBlcyBuaXZlbCAyJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi8uLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLChyZXEscmVzKT0+IHtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXVxyXG4gICAgand0LnZlcmlmeSh0b2tlbixzZWNyZXQsKGUsZGF0b3NVc2VyKT0+IHtcclxuICAgICAgICBpZihlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTogZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGRhdG9zVXNlci5wZXJmaWwgPT09ICduaXZlbC0zJykge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Blcm1pc28gOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTogJ3VzdGVkIG5vIGVzIG5pdmVsIDMnfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUoJy4uLy4uL0NPTkZJRycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsKHJlcSxyZXMpPT4ge1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdXHJcbiAgICBqd3QudmVyaWZ5KHRva2VuLHNlY3JldCwoZSxkYXRvc1VzZXIpPT4ge1xyXG4gICAgICAgIGlmKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOiBlLm1lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoZGF0b3NVc2VyLnBlcmZpbCA9PT0gJ25pdmVsLTQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7cGVybWlzbyA6IHRydWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOiAndXN0ZWQgbm8gZXMgbml2ZWwgNCd9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vLi4vQ09ORklHJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PiB7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV1cclxuICAgIGp3dC52ZXJpZnkodG9rZW4sc2VjcmV0LChlLGRhdG9zVXNlcik9PiB7XHJcbiAgICAgICAgaWYoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6IGUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihkYXRvc1VzZXIucGVyZmlsID09PSAnbml2ZWwtNScpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtwZXJtaXNvIDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ICd1c3RlZCBubyBlcyBuaXZlbCA1J30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCAnZXhwcmVzcycgKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggIClcclxuXHJcbnJvdXRlci5nZXQgKCAnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2NvbnN1bHRhQ2xpZW50ZXMnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICBjb25zdCBxdWVyeSA9IGAgc2VsZWN0IGMuaWQgYXMgaWRDbGllbnRlICwgYy5ub21icmUgYXMgbm9tYnJlQ2xpZW50ZSAsIGMucmF6b25fc29jaWFsIGFzIHJhem9uU29jaWFsQ2xpZW50ZVxyXG4gICAgZnJvbSBjbGllbnRlcyBjXHJcbiAgICB3aGVyZSBjLmVzdGFkbyA9IDFgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggcmVzdWx0LnJlY29yZHNldCApXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uMiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZUNsaWVudGUnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QyID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbjIgIClcclxuICAgICAgICBteVJlcXVlc3QyLmlucHV0ICggJ2lkQ2xpZW50ZScgLCBJbnQgLCBwYXJzZUludCAoIHJlcS5ib2R5LmlkQ2xpZW50ZSApIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgY2xpZW50ZXMgc2V0IGVzdGFkbyA9IDAgd2hlcmUgaWQgPSBAaWRDbGllbnRlYFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdDIucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0NsaWVudGUgRWxpbWluYWRvIENvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJyAsIGFzeW5jICggIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlQ2xpZW50ZSAsICByYXpvblNvY2lhbENsaWVudGUgLCBpZENsaWVudGUgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZUNsaWVudGUnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZUNsaWVudGUnICwgVmFyQ2hhciAsICBub21icmVDbGllbnRlIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdyYXpvblNvY2lhbENsaWVudGUnICwgVmFyQ2hhciAsICByYXpvblNvY2lhbENsaWVudGUgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkQ2xpZW50ZScgLCBJbnQgLCAgaWRDbGllbnRlIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYCB1cGRhdGUgY2xpZW50ZXNcclxuICAgIHNldFxyXG4gICAgbm9tYnJlID0gQG5vbWJyZUNsaWVudGUgLFxyXG4gICAgcmF6b25fc29jaWFsID0gQHJhem9uU29jaWFsQ2xpZW50ZVxyXG4gICAgd2hlcmUgaWQgPSBAaWRDbGllbnRlYFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0NsaWVudGUgQWN0dWFsaXphZG8gQ29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JyAsICBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlQ2xpZW50ZSAsICByYXpvblNvY2lhbENsaWVudGUgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRDbGllbnRlJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoICBjb25leGlvbiApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlQ2xpZW50ZScgLCBWYXJDaGFyICwgbm9tYnJlQ2xpZW50ZSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAncmF6b25Tb2NpYWxDbGllbnRlJyAsIFZhckNoYXIgLCByYXpvblNvY2lhbENsaWVudGUgKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gY2xpZW50ZXMgKCBub21icmUgLCByYXpvbl9zb2NpYWwgLCBlc3RhZG8gICkgdmFsdWVzICAoIEBub21icmVDbGllbnRlICwgQHJhem9uU29jaWFsQ2xpZW50ZSAsIDEgKWBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdDbGllbnRlIEluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgZC5pZCBhcyBpZERlZmVjdG8sIGQubm9tYnJlIGFzIG5vbWJyZURlZmVjdG8sIGQuaWRfb3BlcmFjaW9uIGFzIGlkT3BlcmFjaW9uLG8ubm9tYnJlIGFzIG5vbWJyZU9wZXJhY2lvbiBmcm9tIGRlZmVjdG9zIGQgam9pbiBvcGVyYWNpb25lcyBvIG9uIGQuaWRfb3BlcmFjaW9uPW8uaWQgd2hlcmUgZC5lc3RhZG8gPSAxJywoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlRGVmZWN0byAsIGlkT3BlcmFjaW9uIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydERlZmVjdG8nIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlRGVmZWN0bycgLCBWYXJDaGFyICwgbm9tYnJlRGVmZWN0byApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkT3BlcmFjaW9uJyAsIEludCAsIGlkT3BlcmFjaW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBkZWZlY3RvcyAoIG5vbWJyZSAsIGlkX29wZXJhY2lvbiAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlRGVmZWN0byAsIEBpZE9wZXJhY2lvbiAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0RlZmVjdG8gSW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZERlZmVjdG8gLCBub21icmVEZWZlY3RvICwgaWRPcGVyYWNpb24gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlRGVmZWN0bycgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVEZWZlY3RvJyAsIFZhckNoYXIgLCBub21icmVEZWZlY3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRPcGVyYWNpb24nICwgSW50ICwgaWRPcGVyYWNpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZERlZmVjdG8nICwgSW50ICwgaWREZWZlY3RvIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgZGVmZWN0b3NcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlRGVmZWN0byAsXHJcbiAgICAgICAgaWRfb3BlcmFjaW9uID0gQGlkT3BlcmFjaW9uXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWREZWZlY3RvYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRGVmZWN0byBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWREZWZlY3RvIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlRGVmZWN0bycgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZERlZmVjdG8nICwgSW50ICwgaWREZWZlY3RvIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgZGVmZWN0b3NcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWREZWZlY3RvYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRGVmZWN0byBlbGltaW5hZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICBjb25zdWx0YS5xdWVyeShcclxuICAgIGBzZWxlY3QgbS5pZCBhcyBpZE1hcXVpbmEgLCBtLm5vbWJyZSBhcyBub21icmVNYXF1aW5hICwgbS5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvbk1hcXVpbmEgLFxyXG4gICAgbS5pZF90aXBvc19tYXF1aW5hIGFzIGlkVGlwb01hcXVpbmEgLCB0bS5ub21icmUgYXMgbm9tYnJlVGlwb01hcXVpbmEgLCBtLmlkX3BsYW50YSBhcyBpZFBsYW50YSAsIHAubm9tYnJlIGFzIG5vbWJyZVBsYW50YVxyXG4gICAgZnJvbSBtYXF1aW5hcyBtXHJcbiAgICBqb2luIHRpcG9zX21hcXVpbmEgdG0gb24gbS5pZF90aXBvc19tYXF1aW5hID0gdG0uaWRcclxuICAgIGpvaW4gcGxhbnRhcyBwIG9uIG0uaWRfcGxhbnRhID0gcC5pZFxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxYCxcclxuICAgIChlcnIsZGF0byk9PntcclxuICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfVxyXG4gIClcclxufSlcclxucm91dGVyLmdldCgnL3hvcGVyYWNpb24vOmlkT3BlcmFjaW9uJywgYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gIGNvbnN0IHtpZE9wZXJhY2lvbn0gPSByZXEucGFyYW1zXHJcbiAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgYHNlbGVjdCBtLmlkIGFzIGlkTWFxdWluYSwgbS5ub21icmUgYXMgbm9tYnJlTWFxdWluYVxyXG4gICAgZnJvbSBtYXF1aW5hcyBtXHJcbiAgICBqb2luIHRpcG9zX21hcXVpbmEgdG0gb24gbS5pZF90aXBvc19tYXF1aW5hID0gdG0uaWRcclxuICAgIHdoZXJlIG0uZXN0YWRvID0gMSBhbmQgdG0uaWRfb3BlcmFjaW9uID0gJHtpZE9wZXJhY2lvbn1gLFxyXG4gICAgKGVycixkYXRvKT0+e1xyXG4gICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9XHJcbiAgKVxyXG59IClcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gIGNvbnN0IHsgbm9tYnJlTWFxdWluYSAsIGRlc2NyaXBjaW9uTWFxdWluYSAsIGlkVGlwb01hcXVpbmEgLCBpZFBsYW50YSB9ID0gcmVxLmJvZHlcclxuICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydE1hcXVpbmEnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU1hcXVpbmEnICwgVmFyQ2hhciAsIG5vbWJyZU1hcXVpbmEgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2Rlc2NyaXBjaW9uTWFxdWluYScgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25NYXF1aW5hIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXF1aW5hJyAsIEludCAsIGlkVGlwb01hcXVpbmEgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGxhbnRhJyAsIEludCAsIGlkUGxhbnRhIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIG1hcXVpbmFzICggbm9tYnJlICwgZGVzY3JpcGNpb24gLCBpZF90aXBvc19tYXF1aW5hICwgaWRfcGxhbnRhICwgZXN0YWRvIClcclxuICAgIHZhbHVlc1xyXG4gICAgKCBAbm9tYnJlTWFxdWluYSAsIEBkZXNjcmlwY2lvbk1hcXVpbmEgLCBAaWRUaXBvTWFxdWluYSAsIEBpZFBsYW50YSAsIDEgKWBcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdNYXF1aW5hIEluc2VydGFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgIH1cclxuICB9XHJcbiAgY2F0Y2ggKCBlICkge1xyXG4gICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICBjb25zdCB7IGlkTWFxdWluYSAsIG5vbWJyZU1hcXVpbmEgLCBkZXNjcmlwY2lvbk1hcXVpbmEgLCBpZFRpcG9NYXF1aW5hICwgaWRQbGFudGEgfSA9IHJlcS5ib2R5XHJcbiAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICB0cnkge1xyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVNYXF1aW5hJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVNYXF1aW5hJyAsIFZhckNoYXIgLCBub21icmVNYXF1aW5hIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdkZXNjcmlwY2lvbk1hcXVpbmEnICwgVmFyQ2hhciAsIGRlc2NyaXBjaW9uTWFxdWluYSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWFxdWluYScgLCBJbnQgLCBpZFRpcG9NYXF1aW5hIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBsYW50YScgLCBJbnQgLCBpZFBsYW50YSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRNYXF1aW5hJyAsIEludCAsIGlkTWFxdWluYSApXHJcbiAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgbWFxdWluYXNcclxuICAgIHNldFxyXG4gICAgbm9tYnJlID0gQG5vbWJyZU1hcXVpbmEgLFxyXG4gICAgZGVzY3JpcGNpb24gPSBAZGVzY3JpcGNpb25NYXF1aW5hICxcclxuICAgIGlkX3RpcG9zX21hcXVpbmEgPSBAaWRUaXBvTWFxdWluYSAsXHJcbiAgICBpZF9wbGFudGEgPSBAaWRQbGFudGFcclxuICAgIHdoZXJlIGlkID0gQGlkTWFxdWluYWBcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdNYXF1aW5hIGFjdHVhbGl6YWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgfVxyXG4gIH1cclxuICBjYXRjaCAoIGUgKSB7XHJcbiAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICBjb25zdCB7IGlkTWFxdWluYSB9ID0gcmVxLmJvZHlcclxuICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlTWFxdWluYScgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRNYXF1aW5hJyAsIEludCAsIGlkTWFxdWluYSApXHJcbiAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgbWFxdWluYXNcclxuICAgIHNldFxyXG4gICAgZXN0YWRvID0gMFxyXG4gICAgd2hlcmUgaWQgPSBAaWRNYXF1aW5hYFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01hcXVpbmEgZWxpbWluYWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgfVxyXG4gIH1cclxuICBjYXRjaCAoIGUgKSB7XHJcbiAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0IG0uaWQgYXMgaWRNb2xkZSAsIG0ubm9tYnJlIGFzIG5vbWJyZU1vbGRlICwgbS5pZF9waWV6YSBhcyBpZFBpZXphICwgcC5ub21icmUgYXMgbm9tYnJlUGllemFcclxuICAgIGZyb20gbW9sZGVzIG1cclxuICAgIGpvaW4gcGllemFzIHAgb24gbS5pZF9waWV6YSA9IHAuaWRcclxuICAgIHdoZXJlIG0uZXN0YWRvID0gMWBcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCBxdWVyeSAsKGVycixkYXRvKT0+e1xyXG4gICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH0pXHJcbn0pXHJcbnJvdXRlci5nZXQoJy94cGllemEvOmlkUGllemEnLCBhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge2lkUGllemF9ID0gcmVxLnBhcmFtc1xyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeSgnc2VsZWN0IGlkIGFzIGlkTW9sZGUsIG5vbWJyZSBhcyBub21icmVNb2xkZSBmcm9tIG1vbGRlcyB3aGVyZSBlc3RhZG8gPSAxIGFuZCBpZF9waWV6YSA9ICcraWRQaWV6YSwoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZU1vbGRlICwgaWRQaWV6YSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRNb2xkZScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVNb2xkZScgLCBWYXJDaGFyICwgbm9tYnJlTW9sZGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBpZXphJyAsIEludCAsIGlkUGllemEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIG1vbGRlcyAoIG5vbWJyZSAsIGlkX3BpZXphICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVNb2xkZSAsIEBpZFBpZXphICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnTW9sZGUgSW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZE1vbGRlICwgbm9tYnJlTW9sZGUgLCBpZFBpZXphIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZU1vbGRlJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU1vbGRlJyAsIFZhckNoYXIgLCBub21icmVNb2xkZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGllemEnICwgSW50ICwgaWRQaWV6YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkTW9sZGUnICwgSW50ICwgaWRNb2xkZSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIG1vbGRlc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVNb2xkZSAsXHJcbiAgICAgICAgaWRfcGllemEgPSBAaWRQaWV6YVxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkTW9sZGVgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdNb2xkZSBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRNb2xkZSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZU1vbGRlJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkTW9sZGUnICwgSW50ICwgaWRNb2xkZSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIG1vbGRlc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZE1vbGRlYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnTW9sZGUgZWxpbWluYWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlclxyXG4iLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoICdleHByZXNzJyApXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCAgKVxyXG5cclxuXHJcbnJvdXRlci5wb3N0ICggJy9mdW5kaWNpb24nICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkTWFxdWluYSAsIGlkUGllemEgLCBpZE1vbGRlICwgZmVjaGFGdW5kaWNpb25EZXNkZSAsIGZlY2hhRnVuZGljaW9uSGFzdGEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2xpc3RhT0VFZnVuZGljaW9uJyApXHJcbiAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzID0gbmV3ICBtc3NxbC5SZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdpZE1hcXVpbmEnICwgbXNzcWwuSW50ICwgaWRNYXF1aW5hIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnaWRQaWV6YScgLCBtc3NxbC5JbnQgLCBpZFBpZXphIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnaWRNb2xkZScgLCBtc3NxbC5JbnQgLCBpZE1vbGRlIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnZmVjaGFGdW5kaWNpb25EZXNkZScgLCBtc3NxbC5EYXRlICwgZmVjaGFGdW5kaWNpb25EZXNkZSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2ZlY2hhRnVuZGljaW9uSGFzdGEnICwgbXNzcWwuRGF0ZSAsIGZlY2hhRnVuZGljaW9uSGFzdGEgKVxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlcy5leGVjdXRlICggJ3BhX2RhdG9zT0VFZnVuJyApXHJcbiAgICAgICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uICggcmVzdWx0LnJlY29yZHNldCApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgICAgICB9XHJcbn0gIClcclxuXHJcbnJvdXRlci5wb3N0ICggJy9ncmFuYWxsYWRvJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZE1hcXVpbmEgLCBpZFBpZXphICwgaWRNb2xkZSAsIGZlY2hhUHJvZHVjY2lvbkRlc2RlICwgZmVjaGFQcm9kdWNjaW9uSGFzdGEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2xpc3RhT0VFZ3JhbmFsbGFkbycgKVxyXG4gICAgICAgICAgICBjb25zdCBteVJlcXVlcyA9IG5ldyAgbXNzcWwuUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnaWRNYXF1aW5hJyAsIG1zc3FsLkludCAsIGlkTWFxdWluYSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2lkUGllemEnICwgbXNzcWwuSW50ICwgaWRQaWV6YSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2lkTW9sZGUnICwgbXNzcWwuSW50ICwgaWRNb2xkZSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2ZlY2hhUHJvZHVjY2lvbkRlc2RlJyAsIG1zc3FsLkRhdGUgLCBmZWNoYVByb2R1Y2Npb25EZXNkZSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2ZlY2hhUHJvZHVjY2lvbkhhc3RhJyAsIG1zc3FsLkRhdGUgLCBmZWNoYVByb2R1Y2Npb25IYXN0YSApXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzLmV4ZWN1dGUgKCAncGFfZGF0b3NPRUVncmEnIClcclxuICAgICAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgICAgIH1cclxufSAgKVxyXG5cclxucm91dGVyLnBvc3QgKCAnL21lY2FuaXphZG8nICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IGlkTWFxdWluYSAsIGlkUGllemEgLCBpZE1vbGRlICwgZmVjaGFQcm9kdWNjaW9uRGVzZGUgLCBmZWNoYVByb2R1Y2Npb25IYXN0YSB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdsaXN0YU9FRW1lY2FuaXphZG8nIClcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlcyA9IG5ldyAgbXNzcWwuUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdpZE1hcXVpbmEnICwgbXNzcWwuSW50ICwgaWRNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdpZFBpZXphJyAsIG1zc3FsLkludCAsIGlkUGllemEgKVxyXG4gICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2lkTW9sZGUnICwgbXNzcWwuSW50ICwgaWRNb2xkZSApXHJcbiAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnZmVjaGFQcm9kdWNjaW9uRGVzZGUnICwgbXNzcWwuRGF0ZSAsIGZlY2hhUHJvZHVjY2lvbkRlc2RlIClcclxuICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdmZWNoYVByb2R1Y2Npb25IYXN0YScgLCBtc3NxbC5EYXRlICwgZmVjaGFQcm9kdWNjaW9uSGFzdGEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzLmV4ZWN1dGUgKCAncGFfZGF0b3NPRUVtZWMnIClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy8nLGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uICwgY2VycmFyQ29uZXhpb24gfSA9IHJlcXVpcmUgKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uICggIClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlICgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QgKCAgKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBpZCBhcyBpZE9wZXJhY2lvbiwgbm9tYnJlIGFzIG5vbWJyZU9wZXJhY2lvblxyXG4gICAgICAgIGZyb20gb3BlcmFjaW9uZXMgd2hlcmUgZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGVycixkYXRvKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0gKVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVPcGVyYWNpb24gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0T3BlcmFjaW9uJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVPcGVyYWNpb24nICwgVmFyQ2hhciAsIG5vbWJyZU9wZXJhY2lvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gb3BlcmFjaW9uZXMgKCBub21icmUgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZU9wZXJhY2lvbiAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ09wZXJhY2lvbiBpbnNlcnRhZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlT3BlcmFjaW9uICwgaWRPcGVyYWNpb24gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlT3BlcmFjaW9uJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU9wZXJhY2lvbicgLCBWYXJDaGFyICwgbm9tYnJlT3BlcmFjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRPcGVyYWNpb24nICwgSW50ICwgaWRPcGVyYWNpb24gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBvcGVyYWNpb25lc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVPcGVyYWNpb25cclxuICAgICAgICB3aGVyZSBpZCA9IEBpZE9wZXJhY2lvbmBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ09wZXJhY2lvbiBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZE9wZXJhY2lvbiB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZU9wZXJhY2lvbicgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE9wZXJhY2lvbicgLCBJbnQgLCBpZE9wZXJhY2lvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIG9wZXJhY2lvbmVzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkT3BlcmFjaW9uYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnT3BlcmFjaW9uIGVsaW1pbmFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5cclxucm91dGVyLmdldCAoICcvJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdmFyIHsgYWJyaXJDb25leGlvbiAsIGNlcnJhckNvbmV4aW9uIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uICggIClcclxuICAgIHZhciB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCAoICApXHJcbiAgICBjb25zdWx0YS5xdWVyeSAoXHJcbiAgICAgICAgYHNlbGVjdCBwbS5pZCBhcyBpZFBhcmFkYU1hcXVpbmEsIHBtLm5vbWJyZSBhcyBub21icmVQYXJhZGFNYXF1aW5hLCBwbS50aXBvIGFzIHRpcG9QYXJhZGFNYXF1aW5hICwgcG0uc2V0dXAgYXMgc2V0dXBQYXJhZGFNYXF1aW5hICwgcG0uaWRfYXJlYSBhcyBpZEFyZWEsIGEubm9tYnJlIGFzIG5vbWJyZUFyZWFcclxuICAgICAgICBmcm9tIHBhcmFkYXNfbWFxdWluYSBwbVxyXG5cdFx0am9pbiBhcmVhcyBhIG9uIHBtLmlkX2FyZWE9YS5pZFxyXG4gICAgICAgIHdoZXJlIHBtLmVzdGFkbyA9IDFgLFxyXG4gICAgICAgICggZSAsIGRhdG8gKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggIWUgKXtcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uICggIClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uICggZGF0by5yZWNvcmRzZXQgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgeyBjZXJyYXJDb25leGlvbiAoICApXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlUGFyYWRhTWFxdWluYSAsIHRpcG9QYXJhZGFNYXF1aW5hICwgc2V0dXBQYXJhZGFNYXF1aW5hICwgaWRBcmVhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCAsIEJpdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFBhcmFkYU1hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGFyYWRhTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ3RpcG9QYXJhZGFNYXF1aW5hJyAsIEJpdCAsIHRpcG9QYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRBcmVhJyAsIEludCAsIGlkQXJlYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ3NldHVwUGFyYWRhTWFxdWluYScgLCBJbnQgLCBzZXR1cFBhcmFkYU1hcXVpbmEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYSAoIG5vbWJyZSAsIHRpcG8gLCBzZXR1cCAsIGlkX2FyZWEgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZVBhcmFkYU1hcXVpbmEgLCBAdGlwb1BhcmFkYU1hcXVpbmEgLCBAc2V0dXBQYXJhZGFNYXF1aW5hICwgQGlkQXJlYSAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BhcmFkYSBkZSBNYXF1aW5hIEluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGFyYWRhTWFxdWluYSAsIG5vbWJyZVBhcmFkYU1hcXVpbmEgLCBzZXR1cFBhcmFkYU1hcXVpbmEgLCB0aXBvUGFyYWRhTWFxdWluYSAsIGlkQXJlYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgLCBCaXQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQYXJhZGFNYXF1aW5hJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVBhcmFkYU1hcXVpbmEnICwgVmFyQ2hhciAsIG5vbWJyZVBhcmFkYU1hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICd0aXBvUGFyYWRhTWFxdWluYScgLCBCaXQgLCB0aXBvUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkQXJlYScgLCBJbnQgLCBpZEFyZWEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBhcmFkYU1hcXVpbmEnICwgSW50ICwgaWRQYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnc2V0dXBQYXJhZGFNYXF1aW5hJyAsIEludCAsIHNldHVwUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHBhcmFkYXNfbWFxdWluYVxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICB0aXBvID0gQHRpcG9QYXJhZGFNYXF1aW5hICxcclxuICAgICAgICBzZXR1cCA9IEBzZXR1cFBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgIGlkX2FyZWEgPSBAaWRBcmVhXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQYXJhZGFNYXF1aW5hYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGFyYWRhIGRlIG1hcXVpbmEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGFyYWRhTWFxdWluYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVBhcmFkYU1hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQYXJhZGFNYXF1aW5hJyAsIEludCAsIGlkUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHBhcmFkYXNfbWFxdWluYVxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBhcmFkYU1hcXVpbmFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQYXJhZGFzIGRlIE1hcXVpbmEgZWxpbWluYWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IG5ldyByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcC5pZCBhcyBpZFBpZXphLCBwLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIHAuaWRfY2xpZW50ZSBhcyBpZENsaWVudGUgLCBjLm5vbWJyZSBhcyBub21icmVDbGllbnRlICxcclxuICAgICAgICBwLmlkX3RpcG9zX21hdGVyaWFsIGFzIGlkVGlwb01hdGVyaWFsICwgdG0ubm9tYnJlIGFzIG5vbWJyZVRpcG9NYXRlcmlhbFxyXG4gICAgICAgIGZyb20gcGllemFzIHBcclxuICAgICAgICBqb2luIGNsaWVudGVzIGMgb24gcC5pZF9jbGllbnRlID0gYy5pZFxyXG4gICAgICAgIGpvaW4gdGlwb3NfbWF0ZXJpYWwgdG0gb24gcC5pZF90aXBvc19tYXRlcmlhbCA9IHRtLmlkXHJcbiAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5nZXQoJy94bWFxdWluYS86aWRNYXF1aW5hJywgYXN5bmMgKHJlcSxyZXMpPT57IC8vICEgTElTVEFETyBERSBQSUVaQVMgU0VHVU4gTUFRVUlOQVxyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hfSA9IHJlcS5wYXJhbXNcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHAuaWQgYXMgaWRQaWV6YSwgcC5ub21icmUgYXMgbm9tYnJlUGllemFcclxuICAgICAgICBmcm9tIHBpZXphcyBwXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwcm9cclxuICAgICAgICBvbiBwcm8uaWRfcGllemEgPSBwLmlkXHJcbiAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxIGFuZCBwcm8uaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9IFxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZVBpZXphICwgaWRDbGllbnRlICwgaWRUaXBvTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UGllemEnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVBpZXphJyAsIFZhckNoYXIgLCBub21icmVQaWV6YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkQ2xpZW50ZScgLCBJbnQgLCBpZENsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXRlcmlhbCcgLCBJbnQgLCBpZFRpcG9NYXRlcmlhbCApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gcGllemFzICggbm9tYnJlICwgaWRfY2xpZW50ZSAsIGlkX3RpcG9zX21hdGVyaWFsICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXMgKCBAbm9tYnJlUGllemEgLCBAaWRDbGllbnRlICwgQGlkVGlwb01hdGVyaWFsICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGllemEgaW5zZXJ0YWRhIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJyAsIGFzeW5jICggcmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgaWRQaWV6YSAsIG5vbWJyZVBpZXphICwgaWRDbGllbnRlICwgaWRUaXBvTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlUGllemEnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGllemEnICwgSW50ICwgaWRQaWV6YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVBpZXphJyAsIFZhckNoYXIgLCBub21icmVQaWV6YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkQ2xpZW50ZScgLCBJbnQgLCBpZENsaWVudGUgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXRlcmlhbCcgLCBJbnQgLCBpZFRpcG9NYXRlcmlhbCApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHBpZXphc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVQaWV6YSAsXHJcbiAgICAgICAgaWRfY2xpZW50ZSA9IEBpZENsaWVudGUgLFxyXG4gICAgICAgIGlkX3RpcG9zX21hdGVyaWFsID0gQGlkVGlwb01hdGVyaWFsXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQaWV6YWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BpZXphIGFjdHVhbGl6YWRhIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgaWRQaWV6YSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGllemFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUGllemFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQaWV6YSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBNb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5jb25zdCBjb252aWVydGVIb3JhID0gKCBob3JhICkgPT4ge1xyXG4gICAgdmFyIEhvckluaWNpb25PID0gbmV3IERhdGUoYDIwMjAtMDItMTVUJHtob3JhfTowMGApXHJcbiAgICBIb3JJbmljaW9uTy5zZXRIb3VycyggSG9ySW5pY2lvbk8uZ2V0SG91cnMoKSAtIDMgKVxyXG4gICAgcmV0dXJuIEhvckluaWNpb25PXHJcbn1cclxucm91dGVyLnBvc3QgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQbGFuaWxsYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZWxpbWluYVBsYW5pbGxhJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnN1bHRhLnF1ZXJ5KCBgdXBkYXRlIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gJHsgcGFyc2VJbnQgKCBpZFBsYW5pbGxhICkgfWBcclxuICAgICAgICApXHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdFbGltaW5hY2lvbiBleGl0b3NhICEnIH0gKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnBvc3QoICcvbGlzdGFyJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICBmZWNoYURlc2RlUHJvZHVjY2lvbiAsIGZlY2hhSGFzdGFQcm9kdWNjaW9uICxcclxuICAgICAgICAgICAgICAgIGZlY2hhRGVzZGVGdW5kaWNpb24gLCBmZWNoYUhhc3RhRnVuZGljb24gLCBpZE1hcXVpbmEgLCBpZFBpZXphICwgaWRNb2xkZSAsaWRUaXBvUHJvY2VzbyAsIGlkT3BlcmFjaW9uXHJcbiAgICB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0woICApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uICwgSW50IH0gPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHRyYW5zYWNjaW9uID0gbmV3IFRyYW5zYWN0aW9uKGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIHRyYW5zYWNjaW9uLmJlZ2luKCBhc3luYyBlID0+e1xyXG4gICAgICAgIGlmKCBlICkgeyAgcmVzLmpzb24oIHsgbWVuc2FqZTogZS5tZXNzYWdlIH0gKSAgfVxyXG4gICAgICAgIGNvbnN0IHNxbENvbnN1bHRhID0gYFxyXG4gICAgICAgIHNlbGVjdCBwbC5pZCBhcyBpZFBsYW5pbGxhLCBwbC5mZV9jYXJnYSBhcyBmZWNoYUNhcmdhLCBwbC5mZV9wcm9kdWNjaW9uIGFzIGZlY2hhUHJvZHVjY2lvbiwgcGwuZmVfZnVuZGljaW9uIGFzIGZlY2hhRnVuZGljaW9uLFxyXG4gICAgICAgIHBsLmhvcmFfaW5pY2lvIGFzIGhvcmFJbmljaW8gLCBwbC5ob3JhX2ZpbiBhcyBob3JhRmluLCB0bS5pZF9vcGVyYWNpb24gYXMgaWRPcGVyYWNpb24sIG1hcS5pZCBhcyBpZE1hcXVpbmEgLG1hcS5ub21icmUgYXMgbm9tYnJlTWFxdWluYSAsIHBpZS5pZCBhcyBpZFBpZXphLFxyXG4gICAgICAgIHBpZS5ub21icmUgYXMgbm9tYnJlUGllemEgLCBtb2wuaWQgYXMgaWRNb2xkZSwgIG1vbC5ub21icmUgYXMgbm9tYnJlTW9sZGUgLCB0cC5pZCBhcyBpZFRpcG9Qcm9jZXNvLCB0cC5ub21icmUgYXMgdGlwb1Byb2Nlc29cclxuICAgICAgICAsIHBsLmlkX3Byb2Nlc28gYXMgaWRQcm9jZXNvXHJcbiAgICAgICAgZnJvbSBwbGFuaWxsYXNfcHJvZHVjY2lvbiBwbFxyXG4gICAgICAgIGpvaW4gbW9sZGVzIG1vbCBvbiBwbC5pZF9tb2xkZSA9IG1vbC5pZFxyXG4gICAgICAgIGpvaW4gcHJvY2Vzb3MgcCBvbiBwbC5pZF9wcm9jZXNvID0gcC5pZFxyXG4gICAgICAgIGpvaW4gcGllemFzIHBpZSBvbiBwLmlkX3BpZXphID0gcGllLmlkXHJcbiAgICAgICAgam9pbiBtYXF1aW5hcyBtYXEgb24gcC5pZF9tYXF1aW5hID0gbWFxLmlkXHJcbiAgICAgICAgam9pbiB0aXBvc19wcm9jZXNvIHRwIG9uIHAuaWRfdGlwb3NfcHJvY2VzbyA9IHRwLmlkXHJcbiAgICAgICAgam9pbiB0aXBvc19tYXF1aW5hIHRtIG9uIG1hcS5pZF90aXBvc19tYXF1aW5hID0gdG0uaWRcclxuICAgICAgICB3aGVyZSBwbC5lc3RhZG8gPSAxXHJcbiAgICAgICAgYW5kICBwbC5mZV9mdW5kaWNpb24gYmV0d2VlbiBAZmVjaGFEZXNkZUZ1bmRpY2lvbiBhbmQgIEBmZWNoYUhhc3RhRnVuZGljb25cclxuICAgICAgICBhbmQgIHBsLmZlX3Byb2R1Y2Npb24gYmV0d2VlbiAgQGZlY2hhRGVzZGVQcm9kdWNjaW9uIGFuZCAgQGZlY2hhSGFzdGFQcm9kdWNjaW9uXHJcbiAgICAgICAgYW5kICggIEBpZE1hcXVpbmEgIGlzIG51bGwgIG9yIHAuaWRfbWFxdWluYSA9ICBAaWRNYXF1aW5hICApXHJcbiAgICAgICAgYW5kICggIEBpZFBpZXphICBpcyBudWxsICBvciBwLmlkX3BpZXphID0gIEBpZFBpZXphICApXHJcbiAgICAgICAgYW5kICggIEBpZE1vbGRlICBpcyBudWxsICBvciBwbC5pZF9tb2xkZSA9ICBAaWRNb2xkZSAgKVxyXG4gICAgICAgIGFuZCAoICBAaWRUaXBvUHJvY2VzbyAgaXMgbnVsbCAgb3IgcC5pZF90aXBvc19wcm9jZXNvID0gIEBpZFRpcG9Qcm9jZXNvICApXHJcbiAgICAgICAgYW5kICggIEBpZE9wZXJhY2lvbiAgaXMgbnVsbCAgb3IgdG0uaWRfb3BlcmFjaW9uID0gICBAaWRPcGVyYWNpb24gICkgYFxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN1bHRhUGxhbmlsbGEuaW5wdXQoICdmZWNoYURlc2RlRnVuZGljaW9uJyAsIG1zc3FsLkRhdGUgLCBmZWNoYURlc2RlRnVuZGljaW9uIClcclxuICAgICAgICBjb25zdWx0YVBsYW5pbGxhLmlucHV0KCAnZmVjaGFIYXN0YUZ1bmRpY29uJyAsIG1zc3FsLkRhdGUgLCBmZWNoYUhhc3RhRnVuZGljb24gKVxyXG4gICAgICAgIGNvbnN1bHRhUGxhbmlsbGEuaW5wdXQoICdmZWNoYURlc2RlUHJvZHVjY2lvbicgLCBtc3NxbC5EYXRlICwgZmVjaGFEZXNkZVByb2R1Y2Npb24gKVxyXG4gICAgICAgIGNvbnN1bHRhUGxhbmlsbGEuaW5wdXQoICdmZWNoYUhhc3RhUHJvZHVjY2lvbicgLCBtc3NxbC5EYXRlICwgZmVjaGFIYXN0YVByb2R1Y2Npb24pXHJcbiAgICAgICAgY29uc3VsdGFQbGFuaWxsYS5pbnB1dCggJ2lkTWFxdWluYScgLCBJbnQgLCBpZE1hcXVpbmEgPT09ICcnID8gbnVsbCA6IHBhcnNlSW50ICggaWRNYXF1aW5hICkgKVxyXG4gICAgICAgIGNvbnN1bHRhUGxhbmlsbGEuaW5wdXQoICdpZFBpZXphJyAsIEludCAsIGlkUGllemEgPT09ICcnID8gbnVsbCA6IHBhcnNlSW50ICggaWRQaWV6YSApIClcclxuICAgICAgICBjb25zdWx0YVBsYW5pbGxhLmlucHV0KCAnaWRNb2xkZScgLCBJbnQgLCBpZE1vbGRlID09PSAnJyA/IG51bGwgOiBwYXJzZUludCAoICBpZE1vbGRlICkgKVxyXG4gICAgICAgIGNvbnN1bHRhUGxhbmlsbGEuaW5wdXQoICdpZFRpcG9Qcm9jZXNvJyAsIEludCAsIGlkVGlwb1Byb2Nlc28gPT09ICcnID8gbnVsbCA6IHBhcnNlSW50ICggaWRUaXBvUHJvY2VzbyApIClcclxuICAgICAgICBjb25zdWx0YVBsYW5pbGxhLmlucHV0KCAnaWRPcGVyYWNpb24nICwgSW50ICwgaWRPcGVyYWNpb24gPT09ICcnID8gbnVsbCA6IHBhcnNlSW50ICggIGlkT3BlcmFjaW9uICkgKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVJlY2hhem9zID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVpvbmFzID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICBjb25zdCBjb25zdWx0YVBNID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICB2YXIgdmVjUGxhbmlsbGFQcm9kdWNjaW9uID0gWyAgXVxyXG4gICAgICAgIHZhciB2ZWNUcmFiYWphZG9yZXNcclxuICAgICAgICB2YXIgdmVjUmVjaGF6b3NcclxuICAgICAgICB2YXIgdmVjWm9uYXNcclxuICAgICAgICB2YXIgdmVjUE1cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBjb25zdWx0YVBsYW5pbGxhLnF1ZXJ5KCBzcWxDb25zdWx0YSApXHJcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkocmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldCkpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0UGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldC5mb3JFYWNoKCBwbGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwbGFuaWxsYSAgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkUGxhbmlsbGEgOiBwbGEuaWRQbGFuaWxsYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlY2hhQ2FyZ2EgOiBwbGEuZmVjaGFDYXJnYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlY2hhUHJvZHVjY2lvbiA6IHBsYS5mZWNoYVByb2R1Y2Npb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWNoYUZ1bmRpY2lvbiA6IHBsYS5mZWNoYUZ1bmRpY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFJbmljaW8gOiBuZXcgTW9tZW50ICggcGxhLmhvcmFJbmljaW8gKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUZpbiA6IG5ldyBNb21lbnQgKCAgcGxhLmhvcmFGaW4gKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRPcGVyYWNpb24gOiBwbGEuaWRPcGVyYWNpb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE1hcXVpbmEgOiBwbGEuaWRNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlTWFxdWluYSA6IHBsYS5ub21icmVNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRQaWV6YSA6IHBsYS5pZFBpZXphICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlUGllemEgOiBwbGEubm9tYnJlUGllemEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE1vbGRlIDogcGxhLmlkTW9sZGUgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVNb2xkZSA6IHBsYS5ub21icmVNb2xkZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkVGlwb1Byb2Nlc28gOiBwbGEuaWRUaXBvUHJvY2VzbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcG9Qcm9jZXNvIDogcGxhLnRpcG9Qcm9jZXNvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRQcm9jZXNvIDogcGxhLmlkUHJvY2Vzb1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2ZWNQbGFuaWxsYVByb2R1Y2Npb24ucHVzaChwbGFuaWxsYSlcclxuICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgPSAnJ1xyXG4gICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLmZvckVhY2goKHBsYSxpbmRleFBsYW5pbGxhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGluZGV4UGxhbmlsbGEgPT09IChyZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0Lmxlbmd0aCAtIDEpKXsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyArPSBgJHtwYXJzZUludChwbGEuaWRQbGFuaWxsYSl9IGAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgKz0gYCR7cGFyc2VJbnQocGxhLmlkUGxhbmlsbGEpfSAsYCB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaWYoIGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgPT09ICcnICl7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgIHZhciBzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSA9IGBzZWxlY3QgdHhwLmlkIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSAsIHQubm9tYnJlIGFzIG5vbWJyZVRyYWJhamFkb3IsIHQuYXBlbGxpZG8gYXMgYXBlbGxpZG9UcmFiYWphZG9yLCB0dXIuZGVzY3JpcGNpb24gIGFzIHR1cm5vVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICB0eHAuaG9yYV9pbmljaW8gYXMgaG9yYUluaWNpbyAsIHR4cC5ob3JhX2ZpbiBhcyBob3JhRmluLCAgdHhwLnB6YV9wcm9kdWNpZGFzIGFzIHBpZXphc1Byb2R1Y2lkYXMgLFxyXG4gICAgICAgICAgICAgICAgdHhwLmNhbG9yaWFzIGFzIGNhbG9yaWFzICwgdHhwLmlkX3BsYW5pbGxhIGFzIGlkUGxhbmlsbGEgLCB0eHAuaWRfdHJhYmFqYWRvciBhcyBpZFRyYWJhamFkb3IgLCB0eHAuaWRfdHVybm8gYXMgaWRUdXJub1xyXG4gICAgICAgICAgICAgICAgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgdHhwXHJcbiAgICAgICAgICAgICAgICBqb2luIHRyYWJhamFkb3JlcyB0IG9uIHR4cC5pZF90cmFiYWphZG9yID0gdC5pZFxyXG4gICAgICAgICAgICAgICAgam9pbiB0dXJub3MgdHVyIG9uIHR4cC5pZF90dXJubyA9IHR1ci5pZFxyXG4gICAgICAgICAgICAgICAgd2hlcmUgdHhwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgIGFuZCB0eHAuaWRfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjIH0gKSAgOyBgXHJcbiAgICAgICAgICAgICAgICB2YXIgc3FsQ29uc3VsdGFQTSA9IGAgc2VsZWN0IHBteHAuaWQgYXMgaWRQYXJhZGFNYXF1aW5hWHBsYW5pbGxhICwgcG0uaWQgYXMgaWRQYXJhZGFNYXF1aW5hICwgcG0ubm9tYnJlIGFzIG5vbWJyZVBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgcG14cC5ob3JhX2luY2lvIGFzIGhvcmFJbmljaW9QYXJhZGFNYXF1aW5hICwgcG14cC5ob3JhX2ZpbiBhcyBob3JhRmluUGFyYWRhTWFxdWluYSAsIHBteHAuaWRfcGxhbmlsbGEgYXMgaWRQbGFuaWxsYSAsIHBtLnRpcG8gYXMgdGlwb1BhcmFkYU1hcXVpbmFcclxuICAgICAgICAgICAgICAgIGZyb20gcGFyYWRhc19tYXF1aW5hc194X3BsYW5pbGxhIHBteHBcclxuICAgICAgICAgICAgICAgIGpvaW4gcGFyYWRhc19tYXF1aW5hIHBtIG9uIHBteHAuaWRfcGFyYWRhc19tYXF1aW5hID0gcG0uaWRcclxuICAgICAgICAgICAgICAgIHdoZXJlIHBteHAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgYW5kIHBteHAuaWRfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjIH0gKSA7IGBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYWJhamFkb3Jlc1hwbGFuaWxsYSA9IGF3YWl0ICBjb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYS5xdWVyeSggc3FsQ29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgKyBzcWxDb25zdWx0YVBNIClcclxuICAgICAgICAgICAgICAgIGlmKHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzBdICYmIHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzFdKXtcclxuICAgICAgICAgICAgICAgICAgICB2ZWNUcmFiYWphZG9yZXMgPSB0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1swXVxyXG4gICAgICAgICAgICAgICAgICAgIHZlY1BNID0gdHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMV1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGFJZFRyYWJhamFkb3JlcyA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjVHJhYmFqYWRvcmVzLmZvckVhY2goKCB0ICwgaSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIGkgPT09ICggdmVjVHJhYmFqYWRvcmVzLmxlbmd0aCAtIDEpKXsgbGlzdGFJZFRyYWJhamFkb3JlcyArPSBgJHtwYXJzZUludCh0LmlkVHJhYmFqYWRvclhwbGFuaWxsYSl9IGAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNleyBsaXN0YUlkVHJhYmFqYWRvcmVzICs9IGAke3BhcnNlSW50KHQuaWRUcmFiYWphZG9yWHBsYW5pbGxhKX0gLGAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBsaXN0YUlkVHJhYmFqYWRvcmVzID09PSAnJyApIHsgbGlzdGFJZFRyYWJhamFkb3JlcyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcWxDb25zdWx0YVJlY2hhem9zID0gYCBzZWxlY3Qgcnh0eXAuaWQgYXMgaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgLCBkLm5vbWJyZSBhcyBub21icmVSZWNoYXpvICxcclxuICAgICAgICAgICAgICAgICAgICByeHR5cC50aXBvIGFzIHRpcG9SZWNoYXpvICwgcnh0eXAuY2FudGlkYWQgYXMgY2FudGlkYWRSZWNoYXpvcyAsIHJ4dHlwLmlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgLCByeHR5cC5pZF9kZWZlY3RvIGFzIGlkRGVmZWN0b1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgcnh0eXBcclxuICAgICAgICAgICAgICAgICAgICBqb2luIGRlZmVjdG9zIGQgb24gcnh0eXAuaWRfZGVmZWN0byA9IGQuaWRcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZSByeHR5cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICAgICAgYW5kIHJ4dHlwLmlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRUcmFiYWphZG9yZXMgfSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlY2hhem9zID0gYXdhaXQgY29uc3VsdGFSZWNoYXpvcy5xdWVyeSggc3FsQ29uc3VsdGFSZWNoYXpvcyApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHJlY2hhem9zLnJlY29yZHNldCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvcyA9IHJlY2hhem9zLnJlY29yZHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGFJZFJlY2hhem9zID0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MuZm9yRWFjaCggKCByZSAsICBpbmRleFJlY2hhem8gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggaW5kZXhSZWNoYXpvID09PSAoIHZlY1JlY2hhem9zLmxlbmd0aCAtIDEpKXsgbGlzdGFJZFJlY2hhem9zICs9IGAke3BhcnNlSW50KCByZS5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSApfSBgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IGxpc3RhSWRSZWNoYXpvcyArPSBgJHtwYXJzZUludChyZS5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggbGlzdGFJZFJlY2hhem9zID09PSAnJyApIHsgbGlzdGFJZFJlY2hhem9zID0gbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNxbENvbnN1bHRhWm9uYXMgPSBgIHNlbGVjdCB6eHJ5cC5pZCBhcyBpZFpvbmEgLCB6eHJ5cC5sZXRyYSBhcyBsZXRyYVpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB6eHJ5cC5udW1lcm8gYXMgbnVtZXJvWm9uYSAsIHp4cnlwLmNhbnRpZGFkIGFzIGNhbnRpZGFkWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHp4cnlwLmlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGFzIGlkUmVjaGF6b3NYdHJhYmFqYWRvcllwbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhIHp4cnlwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIHp4cnlwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHp4cnlwLmlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFJlY2hhem9zIH0gKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpcmVyZW5jaWFFbk1pbnV0b3MgPSAoaG9yYUluaWNpbyxob3JhRmluKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoX2luaWNpbyA9IG5ldyBNb21lbnQgKCAgaG9yYUluaWNpbyAgKS5mb3JtYXQgKCBcIkhIOm1tXCIgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhfZmluID0gbmV3IE1vbWVudCAoICBob3JhRmluICApLmZvcm1hdCAoIFwiSEg6bW1cIiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaERlc2RlID0gbmV3IERhdGUoYDE5OTUtMTItMTdUMDM6JHtoX2luaWNpb31gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhIYXN0YSA9IG5ldyBEYXRlKGAxOTk1LTEyLTE3VDAzOiR7aF9maW59YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhfaW5pY2lvID09PSAnMDY6MDAnICYmIGhfZmluID09PSAnMDY6MDAnKXsgIHJldHVybiAyNCAqIDYwICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKChoSGFzdGEtaERlc2RlKS8xMDAwIDwgMCl7IHJldHVybiAoaEhhc3RhLWhEZXNkZSkvMTAwMCArIDE0NDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgcmV0dXJuIChoSGFzdGEtaERlc2RlKS8xMDAwIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdGFab25hcyA9IGF3YWl0IGNvbnN1bHRhWm9uYXMucXVlcnkoIHNxbENvbnN1bHRhWm9uYXMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggbGlzdGFab25hcy5yZWNvcmRzZXQgKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzID0gbGlzdGFab25hcy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BsYW5pbGxhUHJvZHVjY2lvbi5mb3JFYWNoKCAocGwgLCBpbmRleFBsYW5pbGxhICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY09wZXJhcmlvcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BNLmZvckVhY2goIHBtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHBhcnNlSW50KCBwbS5pZFBsYW5pbGxhICkgPT09IHBhcnNlSW50KCBwbC5pZFBsYW5pbGxhICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYWRhTWFxID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYTogcG0uaWRQYXJhZGFNYXF1aW5hWHBsYW5pbGxhICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBhcmFkYU1hcXVpbmEgOiBwbS5pZFBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVBhcmFkYU1hcXVpbmEgOiBwbS5ub21icmVQYXJhZGFNYXF1aW5hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNkZVBhcmFkYU1hcXVpbmEgOiBuZXcgTW9tZW50ICggcG0uaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEgKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXN0YVBhcmFkYU1hcXVpbmEgOiBuZXcgTW9tZW50ICggcG0uaG9yYUZpblBhcmFkYU1hcXVpbmEgKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhY2lvblBhcmFkYU1hcXVpbmEgOiBkaXJlcmVuY2lhRW5NaW51dG9zKCBwbS5ob3JhSW5pY2lvUGFyYWRhTWFxdWluYSAsICBwbS5ob3JhRmluUGFyYWRhTWFxdWluYSApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvUGFyYWRhTWFxdWluYSA6IHBtLnRpcG9QYXJhZGFNYXF1aW5hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5wdXNoKCBwYXJhZGFNYXEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNUcmFiYWphZG9yZXMuZm9yRWFjaCggKHRyICwgaW5kZXhUcmFiYWphZG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcGFyc2VJbnQoIHBsLmlkUGxhbmlsbGEgKSA9PT0gcGFyc2VJbnQgKCB0ci5pZFBsYW5pbGxhICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJhWHBsYSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFRyYWJhamFkb3JYcGxhbmlsbGEgOiB0ci5pZFRyYWJhamFkb3JYcGxhbmlsbGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRPcGVyYXJpbyA6IHRyLmlkVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRUdXJubyA6IHRyLmlkVHVybm8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVRyYWJhamFkb3IgOiB0ci5ub21icmVUcmFiYWphZG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZSA6IHRyLmlkVHJhYmFqYWRvciAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG9UcmFiYWphZG9yIDogdHIuYXBlbGxpZG9UcmFiYWphZG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR1cm5vVHJhYmFqYWRvciA6IHRyLnR1cm5vVHJhYmFqYWRvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhSW5pY2lvIDogbmV3IE1vbWVudCAoIHRyLmhvcmFJbmljaW8gKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhRmluIDogbmV3IE1vbWVudCAoIHRyLmhvcmFGaW4gKS5mb3JtYXQoIFwiSEg6bW1cIiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWNjaW9uIDogdHIucGllemFzUHJvZHVjaWRhcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxvcmlhcyA6IHRyLmNhbG9yaWFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem8gOiBbIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zLmZvckVhY2goIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggcGFyc2VJbnQoIHRyYVhwbGEuaWRUcmFiYWphZG9yWHBsYW5pbGxhICkgPT09IHBhcnNlSW50ICggcmUuaWRUcmFiYWphZG9yWHBsYW5pbGxhICkgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWNoID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgOiByZS5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUmVjaGF6byA6IHJlLmlkRGVmZWN0byAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmVSZWNoYXpvIDogcmUubm9tYnJlUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvIDogcmUudGlwb1JlY2hhem8gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWRSZWNoYXpvIDogcmUuY2FudGlkYWRSZWNoYXpvcyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hczogW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXMuZm9yRWFjaCggem9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggcGFyc2VJbnQoIHpvbi5pZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGEgKSA9PT0gcGFyc2VJbnQoIHJlY2guaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgICkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9uYVhyZWNoYSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkWm9uYSA6IHpvbi5pZFpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0cmEgOiB6b24ubGV0cmFab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVybyA6IHpvbi5udW1lcm9ab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkIDogem9uLmNhbnRpZGFkWm9uYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2gudmVjWm9uYXMucHVzaCggem9uYVhyZWNoYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhWHBsYS52ZWNSZWNoYXpvLnB1c2goIHJlY2ggKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNPcGVyYXJpb3MucHVzaCggdHJhWHBsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgIC8vIGhvbGEgbXVuZG8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5jb21taXQoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggdmVjUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlKXtcclxuICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2soICApXHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCggIClcclxuICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTogZS5tZXNzYWdlIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHZhciB7IGZlY2hhUHJvZHVjY2lvbiwgZmVjaGFGdW5kaWNpb24sIGlkVHVybm8sIEhvcmFJbmljaW9Qcm9kdWNjaW9uLFxyXG4gICAgICAgIEhvcmFGaW5Qcm9kdWNjaW9uICwgIGlkT3BlcmFjaW9uICwgaWRNYXF1aW5hICwgIGlkUGllemEgLCAgaWRNb2xkZSAsIGlkVGlwb1Byb2Nlc28gLFxyXG4gICAgICAgIHZlY09wZXJhcmlvcyAsIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhICwgaWRQbGFuaWxsYVxyXG4gICAgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zb2xlLmxvZyAoIGlkUGxhbmlsbGEgKVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb25BYmllcnRhID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlUGxhbmlsbGEnIClcclxuICAgIGNvbnN0IHsgVHJhbnNhY3Rpb24gfSA9ICByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBtc3NxbCAgPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QsUHJlcGFyZWRTdGF0ZW1lbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHRyYW5zYWNjaW9uID0gIGF3YWl0IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICBjb25zdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBuZXcgUHJlcGFyZWRTdGF0ZW1lbnQgKCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBkZWxldGVab25hc1JlY2hhem9zT3BlcmFyaW9zUG0gPSBhd2FpdCBuZXcgUmVxdWVzdCAoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUgKCAnYXN5bmMnIClcclxuICAgIHRyYW5zYWNjaW9uLmJlZ2luICggYXN5bmMgZnVuY3Rpb24gKCBlcnIgKSAge1xyXG4gICAgICAgIGlmICggIWVyciApIHtcclxuICAgICAgICAgICAgY29uc3QgbWV0b2RvVHJhbnNhY2Npb24gPSAgYXN5bmMgKCAgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBpZFpvbmFzRGVsZXRlID0gJydcclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgaWRSZWNoYXpvc0RlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIGlkT3BlcmFyaW9zRGVsZXRlID0gJydcclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgaWRQbURlbGV0ZSA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEuZm9yRWFjaCAoICggcCAsIGlwICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZigoIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmxlbmd0aCAtMSApICA9PT0gaXAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWRQbURlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCBwLmlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSApfSAgYFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWRQbURlbGV0ZSArPSBgICR7cGFyc2VJbnQgKCBwLmlkUGFyYWRhTWFxdWluYVhwbGFuaWxsYSApfSAsIGBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZlY09wZXJhcmlvcy5mb3JFYWNoICggKCBvICwgaW8gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlkT3BlcmFyaW9zRGVsZXRlICs9IGAgJHtwYXJzZUludCggby5pZFRyYWJhamFkb3JYcGxhbmlsbGEgKX0gLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIG8udmVjUmVjaGF6by5mb3JFYWNoICggKCByICwgaXIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZFJlY2hhem9zRGVsZXRlICs9IGAgJHtwYXJzZUludCAoIHIuaWRSZWNoYXpvWHRyYWJhamFkb3JZcGxhbmlsbGEgKX0gLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByLnZlY1pvbmFzLmZvckVhY2ggKCAoIHogLCBpeiApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBpZFpvbmFzRGVsZXRlICs9IGAgJHtwYXJzZUludCAoIHouaWRab25hICl9ICwgYFxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSApXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCBpZE9wZXJhcmlvc0RlbGV0ZSAhPT0gJycgKSB7IGlkT3BlcmFyaW9zRGVsZXRlID0gIGlkT3BlcmFyaW9zRGVsZXRlLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgaWRPcGVyYXJpb3NEZWxldGUudHJpbSAoICApLmxlbmd0aCAtIDEgKX1cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIGlkUmVjaGF6b3NEZWxldGUgIT09ICcnICkgeyBpZFJlY2hhem9zRGVsZXRlID0gIGlkUmVjaGF6b3NEZWxldGUudHJpbSAoICApLnN1YnN0cmluZyAoIDAgLCBpZFJlY2hhem9zRGVsZXRlLnRyaW0gKCAgKS5sZW5ndGggLSAxICl9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKCBpZFpvbmFzRGVsZXRlICE9PSAnJyApIHsgaWRab25hc0RlbGV0ZSA9ICBpZFpvbmFzRGVsZXRlLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgaWRab25hc0RlbGV0ZS50cmltICggICkubGVuZ3RoIC0gMSApfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlc3VsdERlbGV0ZSA9IGF3YWl0IGRlbGV0ZVpvbmFzUmVjaGF6b3NPcGVyYXJpb3NQbS5xdWVyeSAoIGAgZGVsZXRlIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRab25hc0RlbGV0ZSA9PT0gJycgPyBudWxsIDogaWRab25hc0RlbGV0ZX0gKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRSZWNoYXpvc0RlbGV0ZSA9PT0gJycgPyBudWxsIDogaWRSZWNoYXpvc0RlbGV0ZSB9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgd2hlcmUgaWQgaW4gKCAkeyBpZE9wZXJhcmlvc0RlbGV0ZSA9PT0gJycgPyBudWxsIDogaWRPcGVyYXJpb3NEZWxldGUgfSApIDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgcGFyYWRhc19tYXF1aW5hc194X3BsYW5pbGxhIHdoZXJlIGlkIGluICggJHsgaWRQbURlbGV0ZSA9PT0gJycgPyBudWxsIDogaWRQbURlbGV0ZSB9ICkgOyBgIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHREZWxldGUgPSBhd2FpdCBkZWxldGVab25hc1JlY2hhem9zT3BlcmFyaW9zUG0ucXVlcnkoYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgem9uYXNfeF9yZWNoYXpvX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgaW4gKCAoc2VsZWN0IHIuaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSByXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIHIuaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhIGluICggKCBzZWxlY3QgdC5pZCBmcm9tIHRyYWJhamFkb3JfeF9wbGFuaWxsYSB0IHdoZXJlIHQuaWRfcGxhbmlsbGEgPSAke2lkUGxhbmlsbGF9ICkgKSApICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhIGluICggKCBzZWxlY3QgdC5pZCBmcm9tIHRyYWJhamFkb3JfeF9wbGFuaWxsYSB0IHdoZXJlIHQuaWRfcGxhbmlsbGEgPSAke2lkUGxhbmlsbGF9ICkgKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgd2hlcmUgaWRfcGxhbmlsbGEgPSAke2lkUGxhbmlsbGF9IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYSB3aGVyZSBpZF9wbGFuaWxsYSA9ICR7aWRQbGFuaWxsYX0gO1xyXG4gICAgICAgICAgICAgICAgICAgIGApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCByZXN1bHREZWxldGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdmZV9wcm9kdWNjaW9uJyAsIG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnZmVfZnVuZGljaW9uJyAsIG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2lkX21vbGRlJyAsIG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdpZFBsYW5pbGxhJyAsIG1zc3FsLkludCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5wcmVwYXJlIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBzZXQgZGF0ZWZvcm1hdCBkbXkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZFByb2NlID0gKHNlbGVjdCB0b3AgMSBpZCBmcm9tIHByb2Nlc29zIHAgIHdoZXJlIHAuaWRfbWFxdWluYSA9ICR7IGlkTWFxdWluYSB9IGFuZCBwLmlkX3BpZXphID0gJHsgaWRQaWV6YSB9IGFuZCBpZF90aXBvc19wcm9jZXNvID0gJHsgaWRUaXBvUHJvY2VzbyB9ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb24gPSBAZmVfcHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb24gPSBAZmVfZnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvID0gQGhvcmFfaW5pY2lvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluID0gQGhvcmFfZmluICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3Byb2Nlc28gPSBAaWRQcm9jZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZSA9IEBpZF9tb2xkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRQbGFuaWxsYWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb246IGZlY2hhUHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9mdW5kaWNpb246IGZlY2hhRnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggSG9yYUluaWNpb1Byb2R1Y2Npb24gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7SG9yYUluaWNpb1Byb2R1Y2Npb259OjAwYCkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhRmluUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhRmluUHJvZHVjY2lvbn06MDBgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90dXJubzogcGFyc2VJbnQoIGlkVHVybm8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZTogcGFyc2VJbnQoIGlkTW9sZGUgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhIDogcGFyc2VJbnQgKCBpZFBsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0QzFcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0QzEgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uZXhlY3V0ZSAoIGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5wcmVwYXJlZCA9IGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi51bnByZXBhcmUgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHVucHJlcGFyZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRXJyb3IgSW5zZXJjaW9uUGxhbmlsbGEnIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcmVzdWx0QzEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjT3BlcmFyaW9zWHBsYW5pbGxhID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zLmZvckVhY2ggKCBvcGVyYXJpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxvcmlhcyA6IHBhcnNlSW50ICggb3BlcmFyaW8uY2Fsb3JpYXMgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB6YV9wcm9kdWNpZGFzIDogcGFyc2VJbnQgKCBvcGVyYXJpby5wcm9kdWNjaW9uICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIG9wZXJhcmlvLmhvcmFJbmljaW8gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7b3BlcmFyaW8uaG9yYUluaWNpb306MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhRmluICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFGaW59OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3RyYWJhamFkb3I6IHBhcnNlSW50ICggb3BlcmFyaW8uaWRPcGVyYXJpbyApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IHBhcnNlSW50ICggaWRQbGFuaWxsYSApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBvcGVyYXJpby5pZFR1cm5vICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvczogb3BlcmFyaW8udmVjUmVjaGF6b1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEucHVzaCAoIG9wIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY09wZXJhcmlvc1hwbGFuaWxsYSAsICggdHJhYmFqYWRvciAsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdjYWxvcmlhcycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmNhbG9yaWFzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAncHphX3Byb2R1Y2lkYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5wemFfcHJvZHVjaWRhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3R1cm5vJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHVybm8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdob3JhX2luaWNpbycgLCBtc3NxbC5UaW1lICwgdHJhYmFqYWRvci5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfZmluJywgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90cmFiYWphZG9yJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHJhYmFqYWRvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhYmFqYWRvci52ZWNSZWNoYXpvcy5mb3JFYWNoICggcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHBhcnNlSW50ICggcmUuY2FudGlkYWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbzogcmUudGlwbyA/IDEgOiAwICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2RlZmVjdG8gOiBwYXJzZUludCAoIHJlLmlkUmVjaGF6byApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzIDogcmUudmVjWm9uYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEucHVzaCAoIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb25zdWx0YSA9IGBpbnNlcnQgaW50byB0cmFiYWphZG9yX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChAY2Fsb3JpYXMgLCBAcHphX3Byb2R1Y2lkYXMgLCBAaWRfdHVybm8gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRfdHJhYmFqYWRvciAsIEBpZF9wbGFuaWxsYSAsIDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhID0gKCBzZWxlY3QgbWF4KCBpZCApIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSBmcm9tIHRyYWJhamFkb3JfeF9wbGFuaWxsYSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoICggcmVjaGF6byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhICs9IGBpbnNlcnQgaW50byByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCB0aXBvICwgaWRfZGVmZWN0byAsIGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgcmVjaGF6by5jYW50aWRhZCB9LCAkeyByZWNoYXpvLnRpcG8gfSAsICR7IHJlY2hhem8uaWRfZGVmZWN0byB9ICwgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsMSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhID0gKHNlbGVjdCBtYXgoaWQpIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEpIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjWm9uYXNYcmVjaGF6byA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaGF6by52ZWNab25hcy5mb3JFYWNoICggem9uYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkIDogcGFyc2VJbnQgKCB6b25hLmNhbnRpZGFkICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhIDogem9uYS5sZXRyYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvIDogcGFyc2VJbnQgKCB6b25hLm51bWVybyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2goIHpvbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzWHJlY2hhem8uZm9yRWFjaCAoIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYCBpbnNlcnQgaW50byB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgbGV0cmEgLCBudW1lcm8gLCBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgem9uYS5jYW50aWRhZCB9ICwgJyR7IHpvbmEubGV0cmEgfScgLCAkeyB6b25hLm51bWVybyB9ICwgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgMSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLnF1ZXJ5ICggY29uc3VsdGEgLCAoIGVyciAsIHJlc3VsdCApID0+IHsgaWYgKCBlcnIgKSB7ICBjYWxsYmFjayAoIGVyciApIH0gZWxzZSB7IGNhbGxiYWNrICggICkgfSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoIGVyciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVyciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVyci5tZXNzYWdlIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1BhcmFkYXNEZU1hcXVpbmEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmZvckVhY2ggKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFNQUMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uZGVzZGVQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmRlc2RlUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5oYXN0YVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uaGFzdGFQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wYXJhZGFzX21hcXVpbmE6IHBhcnNlSW50KCBwbS5pZFBhcmFkYU1hcXVpbmEgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IGlkUGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc0RlTWFxdWluYS5wdXNoICggcGFyYU1BQyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGFyYWRhc0RlTWFxdWluYSAsICggUE0gLCBjYWxsYmFja1BNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hID0gIG5ldyBSZXF1ZXN0ICggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2hvcmFfaW5jaW8nICwgbXNzcWwuVGltZSAsIFBNLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BhcmFkYXNfbWFxdWluYScgLCBtc3NxbC5JbnQgLCBQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIFBNLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5xdWVyeSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaG9yYV9pbmNpbyAsIGhvcmFfZmluICwgaWRfcGFyYWRhc19tYXF1aW5hICwgaWRfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCAsICggRVIgLCByZXN1bHRQTSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggRVIgKSB7IGNhbGxiYWNrUE0oIEVSICkgfSBlbHNlIHsgY2FsbGJhY2tQTSggICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIGVycm9SID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb1IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvUi5tZXNzYWdlIH0gKS5zdGF0dXMgKCA0MDMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIgKCAnQ29udGVudC1UeXBlJyAsICd0ZXh0L2V2ZW50LXN0cmVhbScgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMgKCAyMDAgKS5qc29uICggeyBtZW5zYWplIDogJ0FjdHVhbGl6YWNpb24gZXhpdG9zYScgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6IGUubWVzc2FnZSAsIG1lbnNhamUyOiAnRXJyb3IgY2F0Y2ggRklOQUwnIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1ldG9kb1RyYW5zYWNjaW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coICdlcnIgY29tbWl0JyApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSApXHJcbnJvdXRlci5wb3N0KCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdmFyIHsgZmVjaGFQcm9kdWNjaW9uLCBmZWNoYUZ1bmRpY2lvbiwgaWRUdXJubywgSG9yYUluaWNpb1Byb2R1Y2Npb24sXHJcbiAgICAgICAgSG9yYUZpblByb2R1Y2Npb24sICBpZE9wZXJhY2lvbiwgaWRNYXF1aW5hLCAgaWRQaWV6YSwgIGlkTW9sZGUsIGlkVGlwb1Byb2Nlc28sXHJcbiAgICAgICAgdmVjT3BlcmFyaW9zLCB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYVxyXG4gICAgfSA9IHJlcS5ib2R5XHJcbiAgICB2YXIgIGlkUGxhbmlsbGFQcm9kdWNjaW9uXHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wsIGNlcnJhckNvbmV4aW9uUE9PTH0gPSByZXF1aXJlKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uQWJpZXJ0YSA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCAnY29uc3VsdGFzYScgKVxyXG4gICAgY29uc3QgeyBUcmFuc2FjdGlvbiB9ID0gIHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXNzcWwgID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QsUHJlcGFyZWRTdGF0ZW1lbnQgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSAgYXdhaXQgbmV3IFRyYW5zYWN0aW9uKCBjb25leGlvbkFiaWVydGEgKVxyXG4gICAgY29uc3QgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFByZXBhcmVkU3RhdGVtZW50KCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uID0gYXdhaXQgbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUoICdhc3luYycgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oYXN5bmMgZnVuY3Rpb24gKCBlcnIgKSAge1xyXG4gICAgICAgIGlmKCFlcnIpe1xyXG4gICAgICAgICAgICBjb25zdCBtZXRvZG9UcmFuc2FjY2lvbiA9ICBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfcHJvZHVjY2lvbicsbXNzcWwuRGF0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnZmVfZnVuZGljaW9uJyxtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdob3JhX2luaWNpbycsbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnaG9yYV9maW4nLG1zc3FsLlRpbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2lkX21vbGRlJyxtc3NxbC5JbnQgKVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5wcmVwYXJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgc2V0IGRhdGVmb3JtYXQgZG15IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkUHJvY2UgPSAoc2VsZWN0IHRvcCAxIGlkIGZyb20gcHJvY2Vzb3MgcCAgd2hlcmUgcC5pZF9tYXF1aW5hID0gJHsgaWRNYXF1aW5hIH0gYW5kIHAuaWRfcGllemEgPSAkeyBpZFBpZXphIH0gYW5kIGlkX3RpcG9zX3Byb2Nlc28gPSAkeyBpZFRpcG9Qcm9jZXNvIH0gYW5kIGVzdGFkbyA9IDEgKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydCBpbnRvIHBsYW5pbGxhc19wcm9kdWNjaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggZmVfY2FyZ2EgLCBmZV9wcm9kdWNjaW9uICwgZmVfZnVuZGljaW9uICwgaG9yYV9pbmljaW8gLCBob3JhX2ZpbiAsIGlkX3Byb2Nlc28gLCBpZF9tb2xkZSAgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCBHRVREQVRFKCkgLCBAZmVfcHJvZHVjY2lvbiAsIEBmZV9mdW5kaWNpb24gLCBAaG9yYV9pbmljaW8gLCBAaG9yYV9maW4gLCBAaWRQcm9jZSAsIEBpZF9tb2xkZSAsIDEgKWBcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlX3Byb2R1Y2Npb246IGZlY2hhUHJvZHVjY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVfZnVuZGljaW9uOiBmZWNoYUZ1bmRpY2lvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhSW5pY2lvUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhSW5pY2lvUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBIb3JhRmluUHJvZHVjY2lvbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtIb3JhRmluUHJvZHVjY2lvbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBpZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkX21vbGRlOiBwYXJzZUludCggaWRNb2xkZSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHRDMVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdEMxID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmV4ZWN1dGUoIGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1bnByZXBhcmVkID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLnVucHJlcGFyZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHVucHJlcGFyZWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oIHsgbWVuc2FqZTonRXJyb3IgSW5zZXJjaW9uUGxhbmlsbGEnLnllbGxvdyB9IClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0QzEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IGNvbnN1bHRhSURwbGFuaWxsYVByb2R1Y2Npb24ucXVlcnkoIGBzZWxlY3QgbWF4KCBpZCApIGFzIGlkUGxhbmlsbGEgZnJvbSBwbGFuaWxsYXNfcHJvZHVjY2lvbmAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSAmJiAhIGlzTmFOKCBpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSApKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY09wZXJhcmlvc1hwbGFuaWxsYSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvcy5mb3JFYWNoKCBvcGVyYXJpbyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3AgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXM6IHBhcnNlSW50KCBvcGVyYXJpby5jYWxvcmlhcyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB6YV9wcm9kdWNpZGFzOiBwYXJzZUludCggb3BlcmFyaW8ucHJvZHVjY2lvbiApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUluaWNpbyApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhSW5pY2lvfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUZpbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhRmlufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3RyYWJhamFkb3I6IHBhcnNlSW50KCBvcGVyYXJpby5pZE9wZXJhcmlvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wbGFuaWxsYTogcGFyc2VJbnQoIGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBvcGVyYXJpby5pZFR1cm5vICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3M6IG9wZXJhcmlvLnZlY1JlY2hhem9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvc1hwbGFuaWxsYS5wdXNoKCBvcCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjT3BlcmFyaW9zWHBsYW5pbGxhICwgKCB0cmFiYWphZG9yICwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhID0gbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnY2Fsb3JpYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5jYWxvcmlhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAncHphX3Byb2R1Y2lkYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5wemFfcHJvZHVjaWRhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfdHVybm8nICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90dXJubyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9pbmljaW8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfZmluJyAsIG1zc3FsLlRpbWUgLCB0cmFiYWphZG9yLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90cmFiYWphZG9yJywgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF90cmFiYWphZG9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF9wbGFuaWxsYScgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFiYWphZG9yLnZlY1JlY2hhem9zLmZvckVhY2goIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVjaGF6b1ogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkOiBwYXJzZUludCggcmUuY2FudGlkYWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXBvOiByZS50aXBvID8gMSA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX2RlZmVjdG86IHBhcnNlSW50KCByZS5pZFJlY2hhem8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzOiByZS52ZWNab25hc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEucHVzaCAoIHJlY2hhem9aIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uc3VsdGEgPSBgaW5zZXJ0IGludG8gdHJhYmFqYWRvcl94X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2Fsb3JpYXMgLCBwemFfcHJvZHVjaWRhcywgaWRfdHVybm8gLCBob3JhX2luaWNpbyAsIGhvcmFfZmluICwgaWRfdHJhYmFqYWRvciAsIGlkX3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQGNhbG9yaWFzICwgQHB6YV9wcm9kdWNpZGFzICwgQGlkX3R1cm5vICwgQGhvcmFfaW5pY2lvICwgQGhvcmFfZmluICwgQGlkX3RyYWJhamFkb3IgLCBAaWRfcGxhbmlsbGEgLCAxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSA9ICggc2VsZWN0IG1heCggaWQgKSBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zVHJhYmFqYWRvclhwbGFuaWxsYS5mb3JFYWNoICggcmVjaGF6byA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYGluc2VydCBpbnRvIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgdGlwbyAsIGlkX2RlZmVjdG8gLCBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLCBlc3RhZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCAkeyByZWNoYXpvLmNhbnRpZGFkIH0sICR7IHJlY2hhem8udGlwbyB9ICwgJHsgcmVjaGF6by5pZF9kZWZlY3RvIH0gLCBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhICwxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSA9IChzZWxlY3QgbWF4KGlkKSBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjWm9uYXNYcmVjaGF6byA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNoYXpvLnZlY1pvbmFzLmZvckVhY2goIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgem9vID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQ6IHBhcnNlSW50ICggem9uYS5jYW50aWRhZCApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHJhOiB6b25hLmxldHJhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvOiBwYXJzZUludCAoIHpvbmEubnVtZXJvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLnB1c2ggKCB6b28gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5mb3JFYWNoKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGEgKz0gYCBpbnNlcnQgaW50byB6b25hc194X3JlY2hhem9feF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2FudGlkYWQgLCBsZXRyYSAsIG51bWVybyAsIGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgem9uYS5jYW50aWRhZCB9ICwgJyR7IHpvbmEubGV0cmEgfScgLCAkeyB6b25hLm51bWVybyB9ICwgQGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhICwgMSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLnF1ZXJ5KCBjb25zdWx0YSwoZXJyLHJlc3VsdCk9PnsgaWYoIGVyciApIHsgIGNhbGxiYWNrKCBlcnIgKSB9IGVsc2UgeyBjYWxsYmFjaygpIH0gfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gLCAoIGVyciApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNQYXJhZGFzRGVNYXF1aW5hID0gWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEuZm9yRWFjaCAoIHBtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhTUFDID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uZGVzZGVQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmRlc2RlUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmhhc3RhUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5oYXN0YVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGFyYWRhc19tYXF1aW5hOiBwYXJzZUludCggcG0uaWRQYXJhZGFNYXF1aW5hICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IGlkUGxhbmlsbGFQcm9kdWNjaW9uLnJlY29yZHNldFswXS5pZFBsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzRGVNYXF1aW5hLnB1c2ggKCBwYXJhTUFDIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGFyYWRhc0RlTWFxdWluYSAsICggUE0gLCBjYWxsYmFja1BNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEgPSAgbmV3IFJlcXVlc3QgKCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2luY2lvJyAsIG1zc3FsLlRpbWUgLCBQTS5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9maW4gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGFyYWRhc19tYXF1aW5hJyAsIG1zc3FsLkludCxQTS5pZF9wYXJhZGFzX21hcXVpbmEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaWRfcGxhbmlsbGEnICwgbXNzcWwuSW50ICwgUE0uaWRfcGxhbmlsbGEgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEucXVlcnkgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGluc2VydCBpbnRvIHBhcmFkYXNfbWFxdWluYXNfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBob3JhX2luY2lvICwgaG9yYV9maW4gLCBpZF9wYXJhZGFzX21hcXVpbmEgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggQGhvcmFfaW5jaW8gLCBAaG9yYV9maW4gLCBAaWRfcGFyYWRhc19tYXF1aW5hICwgQGlkX3BsYW5pbGxhICwgMSApYCwoIEVSLHJlc3VsdFBNICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIEVSICkgeyBjYWxsYmFja1BNICggRVIgKSB9IGVsc2UgeyBjYWxsYmFja1BNICggICkgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgZXJyb1IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9SICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6ZXJyb1IubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnNldEhlYWRlciggJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2V2ZW50LXN0cmVhbScgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnSW5zZXJjaW9uIGV4aXRvcmEnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkgLy8gISBGSU4gRk9SIEVBQ0hcclxuICAgICAgICAgICAgICAgICAgICB9IC8vISBGSU4gIElJRlxyXG4gICAgICAgICAgICAgICAgfSAvLyEgRklOIERFTCBUUllcclxuICAgICAgICAgICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIG1lbnNhamUyIDogJ0Vycm9yIGNhdGNoIEZJTkFMJyB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXRvZG9UcmFuc2FjY2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnZXJyIGNvbW1pdCcgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0gKVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICggJ2V4cHJlc3MnIClcclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggIClcclxuXHJcbnJvdXRlci5nZXQgKCAgJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2xpc3RhUGxhbnRhcycgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHNlbGVjdCBwLmlkIGFzIGlkUGxhbnRhICwgcC5ub21icmUgYXMgbm9tYnJlUGxhbnRhICwgcC5iYXJyaW8gYXMgYmFycmlvUGxhbnRhICxcclxuICAgICAgICBwLmNwIGFzIGNvZGlnb1Bvc3RhbFBsYW50YSAsIHAuY2FsbGUgYXMgY2FsbGVQbGFudGEgLCBwLmFsdHVyYV9jYWxsZSBhcyBhbHR1cmFDYWxsZVBsYW50YVxyXG4gICAgICAgIGZyb20gcGxhbnRhcyBwXHJcbiAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxYFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzcG9uc2UgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggcmVzcG9uc2UucmVjb3Jkc2V0IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlUGxhbnRhICwgYmFycmlvUGxhbnRhICwgY29kaWdvUG9zdGFsUGxhbnRhICwgY2FsbGVQbGFudGEgLCBhbHR1cmFDYWxsZVBsYW50YSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRQbGFudGEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGxhbnRhJyAsIFZhckNoYXIgLCBub21icmVQbGFudGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdiYXJyaW9QbGFudGEnICwgVmFyQ2hhciAsIGJhcnJpb1BsYW50YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2NvZGlnb1Bvc3RhbFBsYW50YScgLCBJbnQgLCBjb2RpZ29Qb3N0YWxQbGFudGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdjYWxsZVBsYW50YScgLCBWYXJDaGFyICwgY2FsbGVQbGFudGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdhbHR1cmFDYWxsZVBsYW50YScgLCBJbnQgLCBhbHR1cmFDYWxsZVBsYW50YSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gcGxhbnRhcyAoIG5vbWJyZSAsIGJhcnJpbyAsIGNwICwgY2FsbGUgLCBhbHR1cmFfY2FsbGUgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZVBsYW50YSAsIEBiYXJyaW9QbGFudGEgLCBAY29kaWdvUG9zdGFsUGxhbnRhICwgQGNhbGxlUGxhbnRhICwgQGFsdHVyYUNhbGxlUGxhbnRhICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGxhbnRhIEluc2VydGFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGxhbnRhICwgbm9tYnJlUGxhbnRhICwgYmFycmlvUGxhbnRhICwgY29kaWdvUG9zdGFsUGxhbnRhICwgY2FsbGVQbGFudGEgLCBhbHR1cmFDYWxsZVBsYW50YSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQbGFudGEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGxhbnRhJyAsIFZhckNoYXIgLCBub21icmVQbGFudGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdiYXJyaW9QbGFudGEnICwgVmFyQ2hhciAsIGJhcnJpb1BsYW50YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2NvZGlnb1Bvc3RhbFBsYW50YScgLCBJbnQgLCBjb2RpZ29Qb3N0YWxQbGFudGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdjYWxsZVBsYW50YScgLCBWYXJDaGFyICwgY2FsbGVQbGFudGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdhbHR1cmFDYWxsZVBsYW50YScgLCBJbnQgLCBhbHR1cmFDYWxsZVBsYW50YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGxhbnRhJyAsIEludCAsIGlkUGxhbnRhIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGxhbnRhc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVQbGFudGEgLFxyXG4gICAgICAgIGJhcnJpbyA9IEBiYXJyaW9QbGFudGEgLFxyXG4gICAgICAgIGNwID0gQGNvZGlnb1Bvc3RhbFBsYW50YSAsXHJcbiAgICAgICAgY2FsbGUgPSBAY2FsbGVQbGFudGEgLFxyXG4gICAgICAgIGFsdHVyYV9jYWxsZSA9IEBhbHR1cmFDYWxsZVBsYW50YVxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUGxhbnRhYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGxhbnRhIGFjdHVhbGl6YWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUGxhbnRhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlUGxhbnRhJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGxhbnRhJyAsIEludCAsIGlkUGxhbnRhIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGxhbnRhc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBsYW50YWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BsYW50YSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbnJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBpZCBhcyBpZFRpcG9Qcm9jZXNvLCBub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc29cclxuICAgICAgICBmcm9tIHRpcG9zX3Byb2Nlc29cclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcveG1hcXVpbmFwaWV6YXRpcG8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRNYXF1aW5hLGlkUGllemEsaWRUaXBvUHJvY2Vzb30gPSByZXEuYm9keVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBwcm8uaWQgYXMgaWRQcm9jZXNvLCBwcm8uZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25Qcm9jZXNvXHJcbiAgICAgICAgZnJvbSBwcm9jZXNvcyBwcm9cclxuICAgICAgICB3aGVyZSBwcm8uZXN0YWRvID0gMVxyXG4gICAgICAgIGFuZCBwcm8uaWRfcGllemEgPSAke2lkUGllemF9XHJcbiAgICAgICAgYW5kIHByby5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9XHJcbiAgICAgICAgYW5kIHByby5pZF90aXBvc19wcm9jZXNvID0gJHtpZFRpcG9Qcm9jZXNvfWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5yb3V0ZXIuZ2V0ICgnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3NlbGVjdFByb2Nlc29zJyApXHJcbiAgICBjb25zdCB7IFRyYW5zYWN0aW9uICwgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXlUcmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uIClcclxuICAgIG15VHJhbnNhY3Rpb24uYmVnaW4gKCBhc3luYyAoIGVycm9yVHJhbnNhYyApID0+IHtcclxuICAgICAgICBpZiAoIGVycm9yVHJhbnNhYyApIHtcclxuICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JUcmFuc2FjLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciB2ZWNQcm9jZXNvcyA9IFsgIF1cclxuICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0UGllemFYaHMgPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgcC5pZCBhcyBpZFByb2Nlc28gLCBwLmRlc2NyaXBjaW9uIGFzIGRlc2NpcGNpb25Qcm9jZXNvICwgcC5pZF9waWV6YSBhcyBpZFBpZXphICxcclxuICAgICAgICAgICAgcGllLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIHAuaWRfbWFxdWluYSBhcyBpZE1hcXVpbmEgLCBtYXEubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmEgLFxyXG4gICAgICAgICAgICBwLmlkX3RpcG9zX3Byb2Nlc28gYXMgaWRUaXBvUHJvY2VzbyAsIHRwLm5vbWJyZSBhcyBub21icmVUaXBvUHJvY2Vzb1xyXG4gICAgICAgICAgICBmcm9tIHByb2Nlc29zIHBcclxuICAgICAgICAgICAgam9pbiBwaWV6YXMgcGllIG9uIHAuaWRfcGllemEgPSBwaWUuaWRcclxuICAgICAgICAgICAgam9pbiBtYXF1aW5hcyBtYXEgb24gcC5pZF9tYXF1aW5hID0gbWFxLmlkXHJcbiAgICAgICAgICAgIGpvaW4gdGlwb3NfcHJvY2VzbyB0cCBvbiBwLmlkX3RpcG9zX3Byb2Nlc28gPSB0cC5pZFxyXG4gICAgICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDFgXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlICkge1xyXG4gICAgICAgICAgICAgICAgdmVjUHJvY2Vzb3MgPSByZXNwb25zZS5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgIHZhciBpZFByb2Nlc29zID0gJydcclxuICAgICAgICAgICAgICAgIGlmICggQXJyYXkuaXNBcnJheSAoIHZlY1Byb2Nlc29zICkgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1Byb2Nlc29zLmZvckVhY2ggKCAoIHAgLCBpICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFByb2Nlc29zICs9IGAgJHtwLmlkUHJvY2Vzb30gLGBcclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpZFByb2Nlc29zID09PSAnJyApIHsgaWRQcm9jZXNvcyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7IGlkUHJvY2Vzb3MgPSBpZFByb2Nlc29zLnRyaW0gKCAgKS5zdWJzdHJpbmcgKCAwICwgIGlkUHJvY2Vzb3MubGVuZ3RoIC0yICkgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCBpZFByb2Nlc29zIClcclxuICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGllemFYaHMgPSBgc2VsZWN0IHB4aC5pZCBhcyBpZFBpZXphc1hocyAsIHB4aC5jYW50aWRhZCBhcyBjYW50aWRhZFBpZXphc1hocyAsIHB4aC5mZV9kZXNkZSBhcyBkZXNkZVBpZXphc1hocyAsXHJcbiAgICAgICAgICAgICAgICBweGguZmVfaGFzdGEgYXMgaGFzdGFQaWV6YXNYaHMgLCBweGguaWRfcHJvY2VzbyBhcyBpZFByb2Nlc29cclxuICAgICAgICAgICAgICAgIGZyb20gcGllemFzX3hfaG9yYSBweGhcclxuICAgICAgICAgICAgICAgIHdoZXJlIHB4aC5pZF9wcm9jZXNvIGluICgke2lkUHJvY2Vzb3N9KWBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VscnB6WGhzID0gYXdhaXQgbXlSZXF1ZXN0UGllemFYaHMucXVlcnkgKCBxdWVyeVBpZXphWGhzIClcclxuICAgICAgICAgICAgICAgIHZhciB2ZWNQaWV6YXNYaG9yYSA9IFsgIF1cclxuICAgICAgICAgICAgICAgIGlmICggcmVzdWxycHpYaHMgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCB2ZWNQaWV6YXNYaG9yYSApXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUGllemFzWGhvcmEgPSByZXN1bHJwelhocy5yZWNvcmRzZXRcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAoIHJlc3VscnB6WGhzLnJlY29yZHNldCApXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUHJvY2Vzb3MuZm9yRWFjaCAoICggcCAsIGkgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAudmVjUGllemFzWGhvcmEgPSBbIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGllemFzWGhvcmEuZm9yRWFjaCAoICggcHpYaHMgLCBpbmRleCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggcGFyc2VJbnQgKCBwLmlkUHJvY2VzbyApID09PSBwYXJzZUludCAoIHB6WGhzLmlkUHJvY2VzbyApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAudmVjUGllemFzWGhvcmEucHVzaCAoIHB6WGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5jb21taXQgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB2ZWNQcm9jZXNvcyApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfSApXHJcbn0gKVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgZGVzY3JpcGNpb25Qcm9jZXNvICwgaWRQaWV6YSAsIGlkTWFxdWluYSAsIGlkVGlwb3NQcm9jZXNvICwgdmVjUGllemFzWGhvcmEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UHJvY2VzbycgKVxyXG4gICAgICAgIGNvbnN0ICB7IFRyYW5zYWN0aW9uICwgUmVxdWVzdCAsRGF0ZSAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uICggY29uZXhpb24gKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdFByb2Nlc28gPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgIGNvbnN0IGFzaW5jcm9ubyA9IHJlcXVpcmUgKCAnYXN5bmMnIClcclxuICAgICAgICBteVRyYW5zYWN0aW9uLmJlZ2luICggYXN5bmMgKCBlcnJvclRyYXNhY3Rpb25zICkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGVycm9yVHJhc2FjdGlvbnMgKSB7XHJcbiAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9yVHJhc2FjdGlvbnMubWVzc2FnZSB9IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2Rlc2NyaXBjaW9uUHJvY2VzbycgLCBWYXJDaGFyICwgIGRlc2NyaXBjaW9uUHJvY2VzbyApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCAgaWRQaWV6YSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRNYXF1aW5hJyAsIEludCAsICBpZE1hcXVpbmEgKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkVGlwb3NQcm9jZXNvJyAsIEludCAsICBpZFRpcG9zUHJvY2VzbyApXHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UHJvY2Vzb3MgPSBgaW5zZXJ0IGludG8gcHJvY2Vzb3MgKCBkZXNjcmlwY2lvbiAsIGlkX3BpZXphICwgaWRfbWFxdWluYSAsIGlkX3RpcG9zX3Byb2Nlc28gLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgKCBAZGVzY3JpcGNpb25Qcm9jZXNvICwgQGlkUGllemEgLCBAaWRNYXF1aW5hICwgQGlkVGlwb3NQcm9jZXNvICwgMSApIDtcclxuICAgICAgICAgICAgZGVjbGFyZSBAaWRQcm9jZXNvIGludFxyXG4gICAgICAgICAgICBzZXQgQGlkUHJvY2VzbyA9ICggc2VsZWN0IHRvcCAxIG1heCAoIGlkICkgZnJvbSBwcm9jZXNvcyApXHJcbiAgICAgICAgICAgIHNlbGVjdCBAaWRQcm9jZXNvIGFzIGlkUHJvY2Vzb2BcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VQcm9jZXNvcyA9IGF3YWl0IG15UmVxdWVzdFByb2Nlc28ucXVlcnkgKCBxdWVyeVByb2Nlc29zIClcclxuICAgICAgICAgICAgdmFyIGlkUHJvY2Vzb1xyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlUHJvY2Vzb3MgKSB7XHJcbiAgICAgICAgICAgICAgICBpZFByb2Nlc28gPSByZXNwb25zZVByb2Nlc29zLnJlY29yZHNldHNbMF1bMF0uaWRQcm9jZXNvXHJcbiAgICAgICAgICAgICAgICBpZiAoIEFycmF5LmlzQXJyYXkgKCB2ZWNQaWV6YXNYaG9yYSApICYmIHZlY1BpZXphc1hob3JhLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNQaWV6YXNYaG9yYSAsICggcGllemFYaHMgLCBjYWxsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0UGllWGhzID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2NhbnRpZGFkUGllemFzWGhzJyAsIEludCAsIHBpZXphWGhzLmNhbnRpZGFkUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2Rlc2RlUGllemFzWGhzJyAsIERhdGUgLCBwaWV6YVhocy5kZXNkZVBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdoYXN0YVBpZXphc1hocycgLCBEYXRlICwgcGllemFYaHMuaGFzdGFQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnaWRQcm9jZXNvJyAsIEludCAsIHBhcnNlSW50ICggaWRQcm9jZXNvICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVBpZXhocyA9IGBpbnNlcnQgaW50byBwaWV6YXNfeF9ob3JhICggY2FudGlkYWQgLCBmZV9kZXNkZSAsIGZlX2hhc3RhICwgaWRfcHJvY2VzbyAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAoIEBjYW50aWRhZFBpZXphc1hocyAsIEBkZXNkZVBpZXphc1hocyAsIEBoYXN0YVBpZXphc1hocyAsIEBpZFByb2Nlc28gLCAxIClgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5xdWVyeSAoIHF1ZXJ5UGlleGhzICwgKCBlcnJvciAsIHJlc3VsdCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCBlcnJvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gLCAoIGVycm9yQ2FsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvckNhbGJhY2sgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JDYWxiYWNrLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHJvY2VzbyBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkUHJvY2VzbyAsIGRlc2NyaXBjaW9uUHJvY2VzbyAsIGlkUGllemEgLCBpZE1hcXVpbmEgLCBpZFRpcG9zUHJvY2VzbyAsIHZlY1BpZXphc1hob3JhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFByb2Nlc28nIClcclxuICAgICAgICBjb25zdCAgeyBUcmFuc2FjdGlvbiAsIFJlcXVlc3QgLERhdGUgLCBJbnQgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlUcmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3RQcm9jZXNvID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlICggJ2FzeW5jJyApXHJcbiAgICAgICAgbXlUcmFuc2FjdGlvbi5iZWdpbiAoIGFzeW5jICggZXJyb3JUcmFzYWN0aW9ucyApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBlcnJvclRyYXNhY3Rpb25zICkge1xyXG4gICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvclRyYXNhY3Rpb25zLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdkZXNjcmlwY2lvblByb2Nlc28nICwgVmFyQ2hhciAsICBkZXNjcmlwY2lvblByb2Nlc28gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkUGllemEnICwgSW50ICwgIGlkUGllemEgKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkTWFxdWluYScgLCBJbnQgLCAgaWRNYXF1aW5hIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFRpcG9zUHJvY2VzbycgLCBJbnQgLCAgaWRUaXBvc1Byb2Nlc28gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkUHJvY2VzbycgLCBJbnQgLCAgaWRQcm9jZXNvIClcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlQcm9jZXNvcyA9IGB1cGRhdGUgcHJvY2Vzb3NcclxuICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgIGRlc2NyaXBjaW9uID0gQGRlc2NyaXBjaW9uUHJvY2VzbyAsXHJcbiAgICAgICAgICAgIGlkX3BpZXphID0gQGlkUGllemEgLFxyXG4gICAgICAgICAgICBpZF9tYXF1aW5hID0gQGlkTWFxdWluYSAsXHJcbiAgICAgICAgICAgIGlkX3RpcG9zX3Byb2Nlc28gPSBAaWRUaXBvc1Byb2Nlc29cclxuICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRQcm9jZXNvIDsgZGVsZXRlIHBpZXphc194X2hvcmEgd2hlcmUgaWRfcHJvY2VzbyA9IEBpZFByb2Nlc29gXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUHJvY2Vzb3MgPSBhd2FpdCBteVJlcXVlc3RQcm9jZXNvLnF1ZXJ5ICggcXVlcnlQcm9jZXNvcyApXHJcbiAgICAgICAgICAgIGlmICggcmVzcG9uc2VQcm9jZXNvcyApIHtcclxuICAgICAgICAgICAgICAgIGlmICggQXJyYXkuaXNBcnJheSAoIHZlY1BpZXphc1hob3JhICkgJiYgdmVjUGllemFzWGhvcmEubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY1BpZXphc1hob3JhICwgKCBwaWV6YVhocyAsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBteVJlcXVlc3RQaWVYaHMgPSBuZXcgUmVxdWVzdCAoIG15VHJhbnNhY3Rpb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnY2FudGlkYWRQaWV6YXNYaHMnICwgSW50ICwgcGllemFYaHMuY2FudGlkYWRQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnZGVzZGVQaWV6YXNYaHMnICwgRGF0ZSAsIHBpZXphWGhzLmRlc2RlUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2hhc3RhUGllemFzWGhzJyAsIERhdGUgLCBwaWV6YVhocy5oYXN0YVBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdpZFByb2Nlc28nICwgSW50ICwgcGFyc2VJbnQgKCBpZFByb2Nlc28gKSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGlleGhzID0gYGluc2VydCBpbnRvIHBpZXphc194X2hvcmEgKCBjYW50aWRhZCAsIGZlX2Rlc2RlICwgZmVfaGFzdGEgLCBpZF9wcm9jZXNvICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzICggQGNhbnRpZGFkUGllemFzWGhzICwgQGRlc2RlUGllemFzWGhzICwgQGhhc3RhUGllemFzWGhzICwgQGlkUHJvY2VzbyAsIDEgKWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLnF1ZXJ5ICggcXVlcnlQaWV4aHMgLCAoIGVycm9yICwgcmVzdWx0ICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoIGVycm9yIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgfSAsICggZXJyb3JDYWxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9yQ2FsYmFjayApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvckNhbGJhY2subWVzc2FnZSB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQcm9jZXNvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFByb2Nlc28gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlUHJvY2VzbycgKVxyXG4gICAgICAgIGNvbnN0ICB7ICBSZXF1ZXN0ICAsIEludCAgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3RQcm9jZXNvID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFByb2Nlc28nICwgSW50ICwgIGlkUHJvY2VzbyApXHJcbiAgICAgICAgY29uc3QgcXVlcnlQcm9jZXNvcyA9IGB1cGRhdGUgcHJvY2Vzb3NcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQcm9jZXNvIGBcclxuICAgICAgICBjb25zdCByZXNwb25zZVByb2Nlc29zID0gYXdhaXQgbXlSZXF1ZXN0UHJvY2Vzby5xdWVyeSAoIHF1ZXJ5UHJvY2Vzb3MgKVxyXG4gICAgICAgIGlmICggcmVzcG9uc2VQcm9jZXNvcyApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHJvY2Vzb3MgZWxpbWluYWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCAnZXhwcmVzcycgKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggIClcclxuXHJcbnJvdXRlci5nZXQgKCAnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnbGlzdGFyUHVlc3RvcycgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHNlbGVjdCBpZCBhcyBpZFB1ZXN0byAsIG5vbWJyZSBhcyBub21icmVQdWVzdG8gZnJvbSBwdWVzdG9zIHdoZXJlIGVzdGFkbyA9IDFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT57XHJcbiAgICBjb25zdCB7IG5vbWJyZVB1ZXN0byB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRQdWVzdG8nIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICgnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUHVlc3RvJyAsIFZhckNoYXIgLCBub21icmVQdWVzdG8gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHB1ZXN0b3MgKCBub21icmUgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZVB1ZXN0byAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1B1ZXN0byBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxucm91dGVyLnB1dCAoICcvdXBkYXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT57XHJcbiAgICBjb25zdCB7IGlkUHVlc3RvICwgbm9tYnJlUHVlc3RvIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVB1ZXN0bycgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIERhdGUgLCBWYXJDaGFyIH0gPSByZXF1aXJlICgnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUHVlc3RvJyAsIFZhckNoYXIgLCBub21icmVQdWVzdG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFB1ZXN0bycgLCBJbnQgLCBpZFB1ZXN0byApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHB1ZXN0b3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZSA9IEBub21icmVQdWVzdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRQdWVzdG9gXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQdWVzdG8gYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PntcclxuICAgIGNvbnN0IHsgaWRQdWVzdG8gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlUHVlc3RvJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICgnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQdWVzdG8nICwgSW50ICwgaWRQdWVzdG8gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBwdWVzdG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIGlkID0gQGlkUHVlc3RvYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHVlc3RvIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICggJ2V4cHJlc3MnIClcclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggIClcclxuXHJcbnJvdXRlci5wb3N0ICggJy9yZWNoYXpvc1ByaW1lcmFWdWVsdGEnICAsIGFzeW5jICggcmVxLCByZXMgKSA9PntcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgZmVjaGFGdW5kaWNpb25EZXNkZSAsIGZlY2hhRnVuZGljaW9uSGFzdGEgLCBpZE1hcXVpbmEgLCBpZFBpZXphICwgaWRNb2xkZSB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdjb25zdWx0YVJlcG9ydGVSZWNoYXpvcycgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdmZWNoYUZ1bmRpY2lvbkRlc2RlJyAsIG1zc3FsLkRhdGUgLCBmZWNoYUZ1bmRpY2lvbkRlc2RlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnZmVjaGFGdW5kaWNpb25IYXN0YScgLCBtc3NxbC5EYXRlICwgZmVjaGFGdW5kaWNpb25IYXN0YSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkTWFxdWluYScgLCBtc3NxbC5JbnQgLCBpZE1hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBpZXphJyAsIG1zc3FsLkludCAsIGlkUGllemEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE1vbGRlJyAsIG1zc3FsLkludCAsIGlkTW9sZGUgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICggJ3BhX3JlY2hhem9zVG90YWxlcycgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBzdGF0dXMgOiA0MDMgLCBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnBvc3QgKCcvcGFyYWRhc01hcXVpbmEnLCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHtpZEFyZWEgLCBmZWNoYUZ1bmRpY2lvbkRlc2RlICwgZmVjaGFGdW5kaWNpb25IYXN0YX0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdyZXBvcnRlUGFyYWRhc01hcXVpbmEnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRBcmVhJyAsIG1zc3FsLkludCAsIGlkQXJlYSlcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2ZlY2hhRnVuZGljaW9uRGVzZGUnICwgbXNzcWwuRGF0ZSAsIGZlY2hhRnVuZGljaW9uRGVzZGUpXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdmZWNoYUZ1bmRpY2lvbkhhc3RhJyAsIG1zc3FsLkRhdGUgLCBmZWNoYUZ1bmRpY2lvbkhhc3RhKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlKCdwYV9yZXBvcnRlUGFyYWRhc01hcXVpbmEnKVxyXG4gICAgICAgIGlmKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSApXHJcblxyXG5yb3V0ZXIucG9zdCAoJy9kZXRhbGxlUGFyYU1hcXVpbmFYbWFxdWluYScgLCBhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7IGZlY2hhRGVzZGVGdW5kaWNpb24gLCBmZWNoYUhhc3RhRnVuZGljaW9uICwgbm9tYnJlTWFxdWluYSwgaWRBcmVhIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdjb25zdWx0YURldGFsbGVQYXJkYU1hcXVpbmEnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZmVjaGFEZXNkZUZ1bmRpY2lvbicgLCBtc3NxbC5EYXRlICwgZmVjaGFEZXNkZUZ1bmRpY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdmZWNoYUhhc3RhRnVuZGljaW9uJyAsIG1zc3FsLkRhdGUgLCBmZWNoYUhhc3RhRnVuZGljaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ25vbWJyZU1hcXVpbmEnICwgbXNzcWwuVmFyQ2hhciAsIG5vbWJyZU1hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnaWRBcmVhJyAsIG1zc3FsLkludCAsIGlkQXJlYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZXRhbGxlUGFyYWRhTWFxdWluYScpXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuanNvbih7c3RhdHVzIDogNDAzICwgbWVuc2FqZSA6IGUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wb3N0ICgnL3BhcmFkYXNNYXF1aW5hWHBtJyAsIGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHsgZmVjaGFEZXNkZUZ1bmRpY2lvbiAsIGZlY2hhSGFzdGFGdW5kaWNpb24gIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdjb25zdWx0YVBhcmRhTWFxdWluYVhwbScpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdmZWNoYURlc2RlRnVuZGljaW9uJyAsIG1zc3FsLkRhdGUgLCBmZWNoYURlc2RlRnVuZGljaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2ZlY2hhSGFzdGFGdW5kaWNpb24nICwgbXNzcWwuRGF0ZSAsIGZlY2hhSGFzdGFGdW5kaWNpb24gKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfcmVwb3J0ZVBNJylcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoKVxyXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoKGUpIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0woKVxyXG4gICAgICAgIHJlcy5qc29uKHtzdGF0dXMgOiA0MDMgLCBtZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxucm91dGVyLnBvc3QgKCcvZGV0YWxsZVBhcmFNYXF1aW5hWHBtJyAsIGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHsgZmVjaGFEZXNkZUZ1bmRpY2lvbiAsIGZlY2hhSGFzdGFGdW5kaWNpb24gLCBub21icmVQYXJhZGFNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MKCdjb25zdWx0YURldGFsbGVQYXJkYU1hcXVpbmFYcG0yJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2ZlY2hhRGVzZGVGdW5kaWNpb24nICwgbXNzcWwuRGF0ZSAsIGZlY2hhRGVzZGVGdW5kaWNpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZmVjaGFIYXN0YUZ1bmRpY2lvbicgLCBtc3NxbC5EYXRlICwgZmVjaGFIYXN0YUZ1bmRpY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVQYXJhZGFNYXF1aW5hJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVQYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX2RldGFsbGVQYXJhZGFNYXF1aW5hMicpXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuanNvbih7c3RhdHVzIDogNDAzICwgbWVuc2FqZSA6IGUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCAnZXhwcmVzcycgKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCAgKVxyXG5cclxucm91dGVyLmdldCAoICAnL2xpc3QnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnbGlzdGFUaXBvc01hcXVpbmEnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgdG0uaWQgYXMgaWRUaXBvTWFxdWluYSAsIHRtLm5vbWJyZSBhcyBub21icmVUaXBvTWFxdWluYSAsIHRtLmlkX29wZXJhY2lvbiBhcyBpZE9wZXJhY2lvbiAsXHJcbiAgICAgICAgby5ub21icmUgYXMgbm9tYnJlT3BlcmFjaW9uXHJcbiAgICAgICAgZnJvbSB0aXBvc19tYXF1aW5hIHRtXHJcbiAgICAgICAgam9pbiBvcGVyYWNpb25lcyBvIG9uIHRtLmlkX29wZXJhY2lvbiA9IG8uaWRcclxuICAgICAgICB3aGVyZSB0bS5lc3RhZG8gPSAxYFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzcG9uc2UgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggcmVzcG9uc2UucmVjb3Jkc2V0IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlVGlwb01hcXVpbmEgICwgaWRPcGVyYWNpb24gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0VGlwb01hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlVGlwb01hcXVpbmEnICwgVmFyQ2hhciAsIG5vbWJyZVRpcG9NYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRPcGVyYWNpb24nICwgSW50ICwgaWRPcGVyYWNpb24gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHRpcG9zX21hcXVpbmEgKCBub21icmUgLCBpZF9vcGVyYWNpb24gLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZVRpcG9NYXF1aW5hICwgQGlkT3BlcmFjaW9uICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVGlwbyBkZSBtYXF1aW5hIEluc2VydGFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkVGlwb01hcXVpbmEgLCBub21icmVUaXBvTWFxdWluYSAsIGlkT3BlcmFjaW9uIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVRpcG9NYXF1aW5hJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVRpcG9NYXF1aW5hJyAsIFZhckNoYXIgLCBub21icmVUaXBvTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkT3BlcmFjaW9uJyAsIEludCAsIGlkT3BlcmFjaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWFxdWluYScgLCBJbnQgLCBpZFRpcG9NYXF1aW5hIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWFxdWluYVxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVUaXBvTWFxdWluYSAsXHJcbiAgICAgICAgaWRfb3BlcmFjaW9uID0gQGlkT3BlcmFjaW9uXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRUaXBvTWFxdWluYWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgbWFxdWluYSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRpcG9NYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlVGlwb01hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWFxdWluYScgLCBJbnQgLCBpZFRpcG9NYXF1aW5hIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWFxdWluYVxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFRpcG9NYXF1aW5hYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVGlwbyBkZSBtYXF1aW5hIGVsaW1pbmFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUgKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoIClcclxuXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy9saXN0JyAsIGFzeW5jICAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdjb25zdWx0YUxpc3RhQ2xpZW50ZXMnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgaWQgYXMgaWRUaXBvTWF0ZXJpYWwgLCBub21icmUgYXMgbm9tYnJlVGlwb01hdGVyaWFsXHJcbiAgICAgICAgZnJvbSB0aXBvc19tYXRlcmlhbFxyXG4gICAgICAgIHdoZXJlIGVzdGFkbyA9IDFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0VGlwb01hdHJpYWwnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlTWF0ZXJpYWwnICwgVmFyQ2hhciAsIG5vbWJyZU1hdGVyaWFsICApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gdGlwb3NfbWF0ZXJpYWwgKCBub21icmUgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlcyAoIEBub21icmVNYXRlcmlhbCAsIDEgKSAgYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVGlwbyBkZSBNYXRlcmlhbCBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRpcG9NYXRlcmlhbCAgLCAgbm9tYnJlVGlwb01hdGVyaWFsIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVRpcG9NYXRlcmlhbCcgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVUaXBvTWF0ZXJpYWwnICwgVmFyQ2hhciAsIG5vbWJyZVRpcG9NYXRlcmlhbCAgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXRlcmlhbCcgLCBJbnQgLCBpZFRpcG9NYXRlcmlhbCAgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSB0aXBvc19tYXRlcmlhbFxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVUaXBvTWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFRpcG9NYXRlcmlhbGBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgTWF0ZXJpYWwgYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldFRpcG9NYXRlcmlhbCcgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXRlcmlhbCcgLCBJbnQgLCBpZFRpcG9NYXRlcmlhbCAgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSB0aXBvc19tYXRlcmlhbFxyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFRpcG9NYXRlcmlhbGBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgTWF0ZXJpYWwgZWxpbWluYWRvICBjb3JyZWN0YW1lbnRlICcgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKCByZXEsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbiB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBpZCBhcyBpZFRpcG9Qcm9jZXNvLCBub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc28gZnJvbSB0aXBvc19wcm9jZXNvIHdoZXJlIGVzdGFkbyA9IDEgJyAsIChlLHJlc3VsdCk9PntcclxuICAgICAgICBpZihlKXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxucm91dGVyLnBvc3QoJy8nLCBhc3luYyAoIHJlcSwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBpZXphLCBpZE1hcXVpbmEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb24gfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KGBzZWxlY3QgdHAuaWQgYXMgaWRUaXBvUHJvY2VzbywgdHAubm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvIGZyb20gdGlwb3NfcHJvY2VzbyB0cFxyXG4gICAgam9pbiBwcm9jZXNvcyBwIG9uIHRwLmlkID0gcC5pZF90aXBvc19wcm9jZXNvIHdoZXJlIHAuaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfSBhbmQgcC5pZF9waWV6YSA9ICR7aWRQaWV6YX0gYW5kIHRwLmVzdGFkbyA9IDFgLCAoZSxyZXN1bHQpPT57XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggIClcclxuXHJcbnJvdXRlci5nZXQgKCAnLycgLCBhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gIHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCB0LmlkIGFzIGlkVHJhYmFqYWRvciwgdC5ub21icmUgYXMgbm9tYnJlVHJhYmFqYWRvciwgdC5hcGVsbGlkbyBhcyBhcGVsbGlkb1RyYWJhamFkb3IsXHJcbiAgICAgICAgdC5mX25hY2ltaWVudG8gYXMgbmFjaW1pZW50b1RyYWJhamFkb3IsIHQuZl9pbmdyZXNvIGFzIGluZ3Jlc29UcmFiYWphZG9yLFxyXG4gICAgICAgIHQuaWRfcHVlc3RvIGFzIGlkUHVlc3RvLCBwLm5vbWJyZSBhcyBub21icmVQdWVzdG9cclxuICAgICAgICBmcm9tIHRyYWJhamFkb3JlcyB0XHJcbiAgICAgICAgam9pbiBwdWVzdG9zIHAgb24gdC5pZF9wdWVzdG89cC5pZFxyXG4gICAgICAgIHdoZXJlIHQuZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKCBlcnIgLCBkYXRvICkgPT4ge1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7Y2VycmFyQ29uZXhpb24oKX1cclxuICAgICAgICAgICAgZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7Y2VycmFyQ29uZXhpb24oKX1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0gKVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVUcmFiYWphZG9yICwgYXBlbGxpZG9UcmFiYWphZG9yICwgbmFjaW1pZW50b1RyYWJhamFkb3IgLCBpbmdyZXNvVHJhYmFqYWRvciAsIGlkUHVlc3RvIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgTW9tZW50ID0gcmVxdWlyZSAgKCAnbW9tZW50JyApXHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0VHJhYmFqYWRvcicgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIERhdGUgLCBWYXJDaGFyIH0gPSByZXF1aXJlICgnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlVHJhYmFqYWRvcicgLCBWYXJDaGFyICwgbm9tYnJlVHJhYmFqYWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2FwZWxsaWRvVHJhYmFqYWRvcicgLCBWYXJDaGFyICwgYXBlbGxpZG9UcmFiYWphZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbmFjaW1pZW50b1RyYWJhamFkb3InICwgRGF0ZSAsICBuYWNpbWllbnRvVHJhYmFqYWRvciAgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpbmdyZXNvVHJhYmFqYWRvcicgLCBEYXRlICwgIGluZ3Jlc29UcmFiYWphZG9yICApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUHVlc3RvJyAsIEludCAsIGlkUHVlc3RvIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBzZXQgZGF0ZWZvcm1hdCBkbXkgOyBpbnNlcnQgaW50byB0cmFiYWphZG9yZXMgKCBub21icmUgLCBhcGVsbGlkbyAsIGZfbmFjaW1pZW50byAsIGZfaW5ncmVzbyAsIGlkX3B1ZXN0byAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlVHJhYmFqYWRvciAsIEBhcGVsbGlkb1RyYWJhamFkb3IgLCBAbmFjaW1pZW50b1RyYWJhamFkb3IgLCBAaW5ncmVzb1RyYWJhamFkb3IgLCBAaWRQdWVzdG8gLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUcmFiYWphZG9yIGluc2VydGFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkVHJhYmFqYWRvciAsIG5vbWJyZVRyYWJhamFkb3IgLCBhcGVsbGlkb1RyYWJhamFkb3IgLCBuYWNpbWllbnRvVHJhYmFqYWRvciAsIGluZ3Jlc29UcmFiYWphZG9yICwgaWRQdWVzdG8gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlVHJhYmFqYWRvcicgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIERhdGUgLCBWYXJDaGFyIH0gPSByZXF1aXJlICgnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlVHJhYmFqYWRvcicgLCBWYXJDaGFyICwgbm9tYnJlVHJhYmFqYWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2FwZWxsaWRvVHJhYmFqYWRvcicgLCBWYXJDaGFyICwgYXBlbGxpZG9UcmFiYWphZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbmFjaW1pZW50b1RyYWJhamFkb3InICwgRGF0ZSAsIG5hY2ltaWVudG9UcmFiYWphZG9yIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaW5ncmVzb1RyYWJhamFkb3InICwgRGF0ZSAsICBpbmdyZXNvVHJhYmFqYWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUHVlc3RvJyAsIEludCAsIGlkUHVlc3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUcmFiYWphZG9yJyAsIEludCAsIGlkVHJhYmFqYWRvciApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHRyYWJhamFkb3Jlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlID0gQG5vbWJyZVRyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkbyA9IEBhcGVsbGlkb1RyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmX25hY2ltaWVudG8gPSBAbmFjaW1pZW50b1RyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmX2luZ3Jlc28gPSBAaW5ncmVzb1RyYWJhamFkb3IgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wdWVzdG8gPSBAaWRQdWVzdG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRUcmFiYWphZG9yYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVHJhYmFqYWRvciBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+e1xyXG4gICAgY29uc3QgeyBpZFRyYWJhamFkb3IgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlVHJhYmFqYWRvcicgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVHJhYmFqYWRvcicgLCBJbnQgLCBpZFRyYWJhamFkb3IgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSB0cmFiYWphZG9yZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgaWQgPSBAaWRUcmFiYWphZG9yYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVHJhYmFqYWRvciBlbGltaW5hZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcclxuIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKSA9PiB7XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IHQuaWQgYXMgaWRUdXJubywgdC5kZXNjcmlwY2lvbiBhcyBkZXNjcmlwY2lvblR1cm5vLHQuaHNfaW5pY2lvIGFzIGhzSW5pY2lvVHVybm8gLHQuaHNfZmluIGFzIGhzRmluVHVybm8gIFxyXG4gICAgICAgIGZyb20gdHVybm9zIHRcclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3QgYmNyeXAgPSByZXF1aXJlKCdiY3J5cHQtbm9kZWpzJylcclxucmVxdWlyZSgnLi4vY29uZXhpb25lcy9tb25nb0RiJylcclxuY29uc3QgVXN1YXJpbyA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zJylcclxuY29uc3QgUGVyZmlsID0gcmVxdWlyZSgnLi4vZXNxdWVtYXNNb25nby9lc3F1ZW1hUm9sZXNVc3VhcmlvcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgYXdhaXQgVXN1YXJpby5maW5kKChlLGRhdG8pPT57XHJcbiAgICAgICAgZSA/IHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdFcnJvciBlbiBlbCByZXF1ZXN0JykgOlxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGRhdG8pXHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLmdldCgnL3BlcmZpbGVzJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBsaXN0YVBlcmZpbGVzID0gYXdhaXQgUGVyZmlsLmZpbmQoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGxpc3RhUGVyZmlsZXMpXHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoJy9wZXJmaWxlcycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3Qge3BlcmZpbH0gPSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IG5ld1BlcmZpbCA9IG5ldyBQZXJmaWwoe3BlcmZpbH0pXHJcbiAgICAgICAgYXdhaXQgbmV3UGVyZmlsLnNhdmUoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidHdWFyZGFkbyBFeGl0b3NhbWVudGUgISd9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxufSlcclxuXHJcbnJvdXRlci5nZXQoJy86aWQnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc3VhcmlvLmZpbmRCeUlkKHtfaWQ6cmVxLnBhcmFtcy5pZH0pXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odXNlcilcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIucG9zdCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgdmFyIHt1c2VyTmFtZSxwYXNzd29yZCxlbWFpbCxub21icmUsYXBlbGxpZG8scGVyZmlsfSA9IHJlcS5ib2R5XHJcbiAgICAgICAgcGFzc3dvcmQgPSBhd2FpdCBiY3J5cC5oYXNoU3luYyhwYXNzd29yZClcclxuICAgICAgICBjb25zdCBuZXdVc2VyPSBuZXcgVXN1YXJpbyh7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLHBlcmZpbH0pXHJcbiAgICAgICAgY29uc3QgZGF0byA9IGF3YWl0IG5ld1VzZXIuc2F2ZSgpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J1VzdWFyaW8gZ3VhcmRhZG8gZXhpdG9zYW1lbnRlICEnfSlcclxuICAgIH1cclxuICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe2Vycm9yOmVyci5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wdXQoJy86aWQnLChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2lkfSA9IHJlcS5wYXJhbXNcclxuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keVxyXG4gICAgaWYoYm9keS5wYXNzd29yZCl7Ym9keS5wYXNzd29yZCA9IGJjcnlwLmhhc2hTeW5jKGJvZHkucGFzc3dvcmQpIH1cclxuICAgIFVzdWFyaW8uZmluZEJ5SWRBbmRVcGRhdGUoe19pZDppZH0sYm9keSwoZSxkKT0+e1xyXG4gICAgICAgIGU/IHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplLm1lc3NhZ2V9KSA6XHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lbnNhamU6J01vZGlmaWNhZG8gY29ycmVjdGFtZW50ZSAhJ30pXHJcbiAgICB9KVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXN5bmNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmNyeXB0LW5vZGVqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9yZ2FuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zc3FsXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=