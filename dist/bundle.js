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

if (true) {
  URI = 'mongodb://localhost:5000:27017/usuariosEMS';
} else {}

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

if (true) {
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
} else {}

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

    if (dato) {
      res.status(200).json({
        mensaje: 'Usuario guardado exitosamente !'
      });
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ09ORklHLmpzIiwid2VicGFjazovLy8uL2NvbmV4aW9uZXMvbW9uZ29EYi5qcyIsIndlYnBhY2s6Ly8vLi9jb25leGlvbmVzL3NxbFNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFSb2xlc1VzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVVzdWFyaW9zLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL0F1dGVudGlmaWNhc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9Mb2d1ZW8uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvYXJlYXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3MvYXV0aEFkbWluUm91dGVyLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL2F1dGhBY2Nlc29zL2F1dGhBbGxSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoQWRtaW5Sb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDFSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDJSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDNSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDRSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDVSb3V0ZXJSZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9jbGllbnRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9kZWZlY3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9tYXF1aW5hcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9tb2xkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvb2VlLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL29wZXJhY2lvbmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BpZXphcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3BsYW50YXMuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvcHJvY2Vzb3MuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvcHVlc3Rvcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS9yZXBvcnRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc01hcXVpbmEuanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdGlwb3NNYXRlcmlhbC5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS90aXBvc1Byb2Nlc28uanMiLCJ3ZWJwYWNrOi8vLy4vcnV0YXNBcGkvdHJhYmFqYWRvcmVzLmpzIiwid2VicGFjazovLy8uL3J1dGFzQXBpL3R1cm5vcy5qcyIsIndlYnBhY2s6Ly8vLi9ydXRhc0FwaS91c3Vhcmlvcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3luY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJjcnlwdC1ub2RlanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb2xvcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9yZ2FuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXNzcWxcIiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VjcmV0IiwibW9uZ29vc2UiLCJyZXF1aXJlIiwicHJvY2VzcyIsIlVSSSIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25leGlvbiIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJlcnJvciIsImJpbmQiLCJvbmNlIiwibG9nIiwicmVkIiwibXNzcWwiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsInBvcnQiLCJzZXJ2ZXIiLCJvcHRpb25zIiwiYXBwTmFtZSIsImVuYWJsZUFyaXRoQWJvcnQiLCJlbmNyeXB0IiwiY29ubmVjdGlvblRpbWVPdXQiLCJkcml2ZXIiLCJzdHJlYW0iLCJwb29sIiwibWF4IiwibWluIiwiaWRsZVRpbWVvdXRNaWxsaXMiLCJDb25leGlvblNRTCIsImFicmlyQ29uZXhpb24iLCJ1bmRlZmluZWQiLCJjZXJyYXJDb25leGlvbiIsImFicmlyQ29uZXhpb25QT09MIiwiY2VycmFyQ29uZXhpb25QT09MIiwidGhlbiIsIl9jb25uZWN0ZWQiLCJibHVlIiwiZ3JlZW4iLCJjbG9zZSIsImNvbmV4aW9uZXMiLCJuYW1lIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibmV3Q29uZXhpb24iLCJDb25uZWN0aW9uUG9vbCIsImFyZ3MiLCJQcm9taXNlIiwiYWxsIiwidmFsdWVzIiwibWFwIiwicGVyZmlsIiwiU2NoZW1hIiwidHlwZSIsIlN0cmluZyIsInVuaXF1ZSIsImVudW0iLCJzZXQiLCJtb2RlbCIsInVzdWFyaW8iLCJ1c2VyTmFtZSIsInJlcXVpcmVkIiwiZW1haWwiLCJub21icmUiLCJhcGVsbGlkbyIsImV4cHJlc3MiLCJjb3JzIiwibW9yZ2FuIiwic2Vydmlkb3IiLCJ1c2UiLCJqc29uIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwiZW52IiwiUE9SVCIsImxpc3RlbiIsImdldCIsIm0iLCJlIiwieWVsbG93IiwiUm91dGVyIiwiand0IiwiQ09ORklHIiwicm91dGVyIiwicmVxIiwicmVzIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJtZW5zYWplIiwidG9rZW4iLCJzcGxpdCIsInZlcmlmeSIsImQiLCJiY3J5cHQiLCJVc3VhcmlvIiwicG9zdCIsIm5leHQiLCJmaW5kIiwiYm9keSIsInZlcmlmaWNhUGFzcyIsImNvbXBhcmVTeW5jIiwibWlVc3VhcmlvIiwic2lnbiIsImV4cGlyZXNJbiIsIlJlcXVlc3QiLCJteVJlcXVpcmVzIiwicmVzdWx0IiwicXVlcnkiLCJyZWNvcmRzZXQiLCJtZXNzYWdlIiwibm9tYnJlQXJlYSIsIlZhckNoYXIiLCJteVJlcXVlc3QiLCJpbnB1dCIsInB1dCIsImlkQXJlYSIsIkludCIsImRhdG9zVXNlciIsInBhdGgiLCJkYXRvcyIsIm90cm8iLCJwZXJtaXNvIiwiY29uZXhpb24yIiwibXlSZXF1ZXN0MiIsInBhcnNlSW50IiwiaWRDbGllbnRlIiwibm9tYnJlQ2xpZW50ZSIsInJhem9uU29jaWFsQ2xpZW50ZSIsImNvbnN1bHRhIiwiZXJyIiwiZGF0byIsIm5vbWJyZURlZmVjdG8iLCJpZE9wZXJhY2lvbiIsImlkRGVmZWN0byIsInBhcmFtcyIsIm5vbWJyZU1hcXVpbmEiLCJkZXNjcmlwY2lvbk1hcXVpbmEiLCJpZFRpcG9NYXF1aW5hIiwiaWRQbGFudGEiLCJpZE1hcXVpbmEiLCJpZFBpZXphIiwibm9tYnJlTW9sZGUiLCJpZE1vbGRlIiwiZmVjaGFGdW5kaWNpb25EZXNkZSIsImZlY2hhRnVuZGljaW9uSGFzdGEiLCJteVJlcXVlcyIsIkRhdGUiLCJleGVjdXRlIiwiZmVjaGFQcm9kdWNjaW9uRGVzZGUiLCJmZWNoYVByb2R1Y2Npb25IYXN0YSIsIm5vbWJyZU9wZXJhY2lvbiIsIm5vbWJyZVBhcmFkYU1hcXVpbmEiLCJ0aXBvUGFyYWRhTWFxdWluYSIsInNldHVwUGFyYWRhTWFxdWluYSIsIkJpdCIsImlkUGFyYWRhTWFxdWluYSIsIm5vbWJyZVBpZXphIiwiaWRUaXBvTWF0ZXJpYWwiLCJNb21lbnQiLCJjb252aWVydGVIb3JhIiwiaG9yYSIsIkhvckluaWNpb25PIiwic2V0SG91cnMiLCJnZXRIb3VycyIsImlkUGxhbmlsbGEiLCJjb25leGlvbkFiaWVydGEiLCJmZWNoYURlc2RlUHJvZHVjY2lvbiIsImZlY2hhSGFzdGFQcm9kdWNjaW9uIiwiZmVjaGFEZXNkZUZ1bmRpY2lvbiIsImZlY2hhSGFzdGFGdW5kaWNvbiIsImlkVGlwb1Byb2Nlc28iLCJUcmFuc2FjdGlvbiIsInRyYW5zYWNjaW9uIiwiYmVnaW4iLCJzcWxDb25zdWx0YSIsImNvbnN1bHRhUGxhbmlsbGEiLCJjb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSIsImNvbnN1bHRhUmVjaGF6b3MiLCJjb25zdWx0YVpvbmFzIiwiY29uc3VsdGFQTSIsInZlY1BsYW5pbGxhUHJvZHVjY2lvbiIsInZlY1RyYWJhamFkb3JlcyIsInZlY1JlY2hhem9zIiwidmVjWm9uYXMiLCJ2ZWNQTSIsInJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbiIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJwbGEiLCJwbGFuaWxsYSIsImZlY2hhQ2FyZ2EiLCJmZWNoYVByb2R1Y2Npb24iLCJmZWNoYUZ1bmRpY2lvbiIsImhvcmFJbmljaW8iLCJmb3JtYXQiLCJob3JhRmluIiwidGlwb1Byb2Nlc28iLCJpZFByb2Nlc28iLCJwdXNoIiwibGlzdGFJZFBsYW5pbGxhc1Byb2R1YyIsImluZGV4UGxhbmlsbGEiLCJsZW5ndGgiLCJzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSIsInNxbENvbnN1bHRhUE0iLCJ0cmFiYWphZG9yZXNYcGxhbmlsbGEiLCJyZWNvcmRzZXRzIiwibGlzdGFJZFRyYWJhamFkb3JlcyIsInQiLCJpIiwiaWRUcmFiYWphZG9yWHBsYW5pbGxhIiwic3FsQ29uc3VsdGFSZWNoYXpvcyIsInJlY2hhem9zIiwibGlzdGFJZFJlY2hhem9zIiwicmUiLCJpbmRleFJlY2hhem8iLCJpZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSIsInNxbENvbnN1bHRhWm9uYXMiLCJkaXJlcmVuY2lhRW5NaW51dG9zIiwiaF9pbmljaW8iLCJoX2ZpbiIsImhEZXNkZSIsImhIYXN0YSIsImxpc3RhWm9uYXMiLCJwbCIsInZlY09wZXJhcmlvcyIsInZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhIiwicG0iLCJwYXJhZGFNYXEiLCJpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEiLCJkZXNkZVBhcmFkYU1hcXVpbmEiLCJob3JhSW5pY2lvUGFyYWRhTWFxdWluYSIsImhhc3RhUGFyYWRhTWFxdWluYSIsImhvcmFGaW5QYXJhZGFNYXF1aW5hIiwiZHVyYWNpb25QYXJhZGFNYXF1aW5hIiwidHIiLCJpbmRleFRyYWJhamFkb3IiLCJ0cmFYcGxhIiwiaWRPcGVyYXJpbyIsImlkVHJhYmFqYWRvciIsImlkVHVybm8iLCJub21icmVUcmFiYWphZG9yIiwiYXBlbGxpZG9UcmFiYWphZG9yIiwidHVybm9UcmFiYWphZG9yIiwicHJvZHVjY2lvbiIsInBpZXphc1Byb2R1Y2lkYXMiLCJjYWxvcmlhcyIsInZlY1JlY2hhem8iLCJyZWNoIiwiaWRSZWNoYXpvIiwibm9tYnJlUmVjaGF6byIsInRpcG8iLCJ0aXBvUmVjaGF6byIsImNhbnRpZGFkUmVjaGF6byIsImNhbnRpZGFkUmVjaGF6b3MiLCJ6b24iLCJpZFJlY2hhem9zWHRyYWJhamFkb3JZcGxhbmlsbGEiLCJ6b25hWHJlY2hhIiwiaWRab25hIiwibGV0cmEiLCJsZXRyYVpvbmEiLCJudW1lcm8iLCJudW1lcm9ab25hIiwiY2FudGlkYWQiLCJjYW50aWRhZFpvbmEiLCJjb21taXQiLCJyb2xsYmFjayIsIkhvcmFJbmljaW9Qcm9kdWNjaW9uIiwiSG9yYUZpblByb2R1Y2Npb24iLCJQcmVwYXJlZFN0YXRlbWVudCIsInBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbiIsImRlbGV0ZVpvbmFzUmVjaGF6b3NPcGVyYXJpb3NQbSIsImFzaW5jcm9ubyIsIm1ldG9kb1RyYW5zYWNjaW9uIiwicmVzdWx0RGVsZXRlIiwiVGltZSIsInByZXBhcmUiLCJkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiIsImZlX3Byb2R1Y2Npb24iLCJmZV9mdW5kaWNpb24iLCJob3JhX2luaWNpbyIsImhvcmFfZmluIiwiaWRfdHVybm8iLCJpZF9tb2xkZSIsInJlc3VsdEMxIiwidW5wcmVwYXJlZCIsInVucHJlcGFyZSIsInZlY09wZXJhcmlvc1hwbGFuaWxsYSIsIm9wZXJhcmlvIiwib3AiLCJwemFfcHJvZHVjaWRhcyIsImlkX3RyYWJhamFkb3IiLCJpZF9wbGFuaWxsYSIsImVhY2hTZXJpZXMiLCJ0cmFiYWphZG9yIiwiY2FsbGJhY2siLCJwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEiLCJ2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEiLCJyZWNoYXpvWiIsImlkX2RlZmVjdG8iLCJyZWNoYXpvIiwidmVjWm9uYXNYcmVjaGF6byIsInpvbmEiLCJ6b28iLCJ2ZWNQYXJhZGFzRGVNYXF1aW5hIiwicGFyYU1BQyIsImlkX3BhcmFkYXNfbWFxdWluYSIsIlBNIiwiY2FsbGJhY2tQTSIsImNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYSIsIkVSIiwicmVzdWx0UE0iLCJlcnJvUiIsInNldEhlYWRlciIsIm1lbnNhamUyIiwiaWRQbGFuaWxsYVByb2R1Y2Npb24iLCJjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uIiwiaXNOYU4iLCJyZXNwb25zZSIsIm5vbWJyZVBsYW50YSIsImJhcnJpb1BsYW50YSIsImNvZGlnb1Bvc3RhbFBsYW50YSIsImNhbGxlUGxhbnRhIiwiYWx0dXJhQ2FsbGVQbGFudGEiLCJteVRyYW5zYWN0aW9uIiwiZXJyb3JUcmFuc2FjIiwidmVjUHJvY2Vzb3MiLCJteVJlcXVlc3RQaWV6YVhocyIsImlkUHJvY2Vzb3MiLCJwIiwidHJpbSIsInN1YnN0cmluZyIsInF1ZXJ5UGllemFYaHMiLCJyZXN1bHJwelhocyIsInZlY1BpZXphc1hob3JhIiwicHpYaHMiLCJpbmRleCIsImRlc2NyaXBjaW9uUHJvY2VzbyIsImlkVGlwb3NQcm9jZXNvIiwibXlSZXF1ZXN0UHJvY2VzbyIsImVycm9yVHJhc2FjdGlvbnMiLCJxdWVyeVByb2Nlc29zIiwicmVzcG9uc2VQcm9jZXNvcyIsInBpZXphWGhzIiwibXlSZXF1ZXN0UGllWGhzIiwiY2FudGlkYWRQaWV6YXNYaHMiLCJkZXNkZVBpZXphc1hocyIsImhhc3RhUGllemFzWGhzIiwicXVlcnlQaWV4aHMiLCJlcnJvckNhbGJhY2siLCJub21icmVQdWVzdG8iLCJpZFB1ZXN0byIsImZlY2hhSGFzdGFGdW5kaWNpb24iLCJub21icmVUaXBvTWFxdWluYSIsIm5vbWJyZU1hdGVyaWFsIiwibm9tYnJlVGlwb01hdGVyaWFsIiwibmFjaW1pZW50b1RyYWJhamFkb3IiLCJpbmdyZXNvVHJhYmFqYWRvciIsImJjcnlwIiwiUGVyZmlsIiwic2VuZCIsImxpc3RhUGVyZmlsZXMiLCJuZXdQZXJmaWwiLCJzYXZlIiwiZmluZEJ5SWQiLCJfaWQiLCJpZCIsImhhc2hTeW5jIiwibmV3VXNlciIsImZpbmRCeUlkQW5kVXBkYXRlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxj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QWdCbEIsSUFBaEIsQ0FBcUI7QUFBQ2pFLFdBQUssRUFBQ3lFLENBQUMsQ0FBQ2dDO0FBQVQsS0FBckIsQ0FBRixHQUNEekIsR0FBRyxDQUFDRyxNQUFKLENBQVcsR0FBWCxFQUFnQmxCLElBQWhCLENBQXFCO0FBQUNtQixhQUFPLEVBQUM7QUFBVCxLQUFyQixDQURBO0FBRUgsR0FIRDtBQUlILENBUkQ7QUFVQWxHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjJGLE1BQWpCLEM7Ozs7Ozs7Ozs7O0FDdEVBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIHNlY3JldDonamF2aWVyMTkwNSdcclxufSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XHJcbnJlcXVpcmUoJ2NvbG9ycycpXHJcbn1cclxuXHJcbnZhciBVUkk7XHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICBVUkkgPSAnbW9uZ29kYjovL2xvY2FsaG9zdDo1MDAwOjI3MDE3L3VzdWFyaW9zRU1TJ1xyXG59XHJcbmVsc2V7XHJcbiAgICAgVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgICAgIFxyXG59XHJcblxyXG5tb25nb29zZS5jb25uZWN0KFVSSSx7dXNlTmV3VXJsUGFyc2VyOnRydWUsdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlfSk7XHJcblxyXG52YXIgY29uZXhpb24gPSBtb25nb29zZS5jb25uZWN0aW9uO1xyXG5cclxuY29uZXhpb24ub24oJ2Vycm9yJyxjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSwnZXJyb3IgZGUgY29uZXhpb24nKSk7XHJcblxyXG5jb25leGlvbi5vbmNlKCdvcGVuJywoKT0+e1xyXG4gICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdDb25lY3RhZG8gYSBNT05HT0RCJy5yZWQpXHJcbiAgICAgfSBcclxuICAgICBlbHNle1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjdGFkbyBhIE1PTkdPREInKVxyXG4gICAgIH1cclxufSlcclxuIiwiY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpO1xyXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7IHJlcXVpcmUoJ2NvbG9ycycpIH1cclxuXHJcbnZhciBVUklcclxuXHJcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiAnREJqYXYnLCAvKiBEQmphdiBlbXNEQiAgKi9cclxuICAgICAgICBwYXNzd29yZDogJ2JlbGdyYW5vNDU1JyxcclxuICAgICAgICBkYXRhYmFzZTogJ0VNU19EQl9TUUwnLFxyXG4gICAgICAgIHBvcnQ6MTQzMyxcclxuICAgICAgICBzZXJ2ZXI6J0RFU0tUT1AtRzFJMDk3QycsIC8qIERFU0tUT1AtRzFJMDk3QyAgUEMyMzYwICovXHJcbiAgICAgICAgb3B0aW9uczp7XHJcbiAgICAgICAgICAgIGFwcE5hbWU6J2Vtcy1ub2RlLWFwaScsXHJcbiAgICAgICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6dHJ1ZSxcclxuICAgICAgICAgICAgZW5jcnlwdDpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICAsXHJcbiAgICAgICAgY29ubmVjdGlvblRpbWVPdXQ6MTUwMDAwLFxyXG4gICAgICAgIGRyaXZlcjondGVkaW91cycsXHJcbiAgICAgICAgc3RyZWFtOmZhbHNlLFxyXG4gICAgICAgIHBvb2w6e1xyXG4gICAgICAgICAgICBtYXg6MjAsXHJcbiAgICAgICAgICAgIG1pbjowLFxyXG4gICAgICAgICAgICBpZGxlVGltZW91dE1pbGxpczozMDAwMCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZWxzZXtcclxuICAgIFVSSSA9IHtcclxuICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5VU0VSU1FMLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5QQVNTV09SRFNRTCxcclxuICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREFUQUJBU0VTUUwsXHJcbiAgICAgICAgc2VydmVyOnByb2Nlc3MuZW52LlNFUlZFUlNRTCxcclxuICAgICAgICBvcHRpb25zOntcclxuICAgICAgICAgICAgZW5hYmxlQXJpdGhBYm9ydDp0cnVlLFxyXG4gICAgICAgICAgICBlbmNyeXB0OmZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxudmFyIENvbmV4aW9uU1FMID0geyBhYnJpckNvbmV4aW9uOnVuZGVmaW5lZCwgY2VycmFyQ29uZXhpb246dW5kZWZpbmVkLCBhYnJpckNvbmV4aW9uUE9PTDp1bmRlZmluZWQsIGNlcnJhckNvbmV4aW9uUE9PTDp1bmRlZmluZWQgfVxyXG52YXIgY29uZXhpb25cclxuQ29uZXhpb25TUUwuYWJyaXJDb25leGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpe1xyXG4gICAgYXdhaXQgbXNzcWwuY29ubmVjdChVUkkpXHJcbiAgICAudGhlbihwb29sPT57XHJcbiAgICAgICAgaWYocG9vbC5fY29ubmVjdGVkKXtcclxuICAgICAgICAgICAgaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NvbmVjaW9uIFNRTCBTRVJWRVInLmJsdWUsJyBBQklFUlRBJy5ncmVlbilcclxuICAgICAgICAgICAgICAgIGNvbmV4aW9uID0gcG9vbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBkZSBDb25leGlvbicscG9vbC5fY29ubmVjdGVkKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuQ29uZXhpb25TUUwuY2VycmFyQ29uZXhpb24gPSBhc3luYyBmdW5jdGlvbiAoKXtcclxuICAgIGF3YWl0IGNvbmV4aW9uLmNsb3NlKClcclxuICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ29uZWNpb24gU1FMIFNFUlZFUicuYmx1ZSwnIENFUlJBREEnLmdyZWVuKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjb25leGlvbmVzID0ge31cclxuXHJcbkNvbmV4aW9uU1FMLmFicmlyQ29uZXhpb25QT09MID0gYXN5bmMgbmFtZSA9PntcclxuICAgIGlmKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29uZXhpb25lcyxuYW1lKSl7XHJcbiAgICAgICAgY29uc3QgbmV3Q29uZXhpb24gPSBuZXcgbXNzcWwuQ29ubmVjdGlvblBvb2woVVJJKVxyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gbmV3Q29uZXhpb24uY2xvc2UuYmluZChuZXdDb25leGlvbilcclxuICAgICAgICBuZXdDb25leGlvbi5jbG9zZSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb25leGlvbmVzW25hbWVdXHJcbiAgICAgICAgICAgIHJldHVybiBjbG9zZSguLi5hcmdzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBhd2FpdCBuZXdDb25leGlvbi5jb25uZWN0KClcclxuICAgICAgICBjb25leGlvbmVzW25hbWVdID0gbmV3Q29uZXhpb25cclxuICAgICAgICByZXR1cm4gY29uZXhpb25lc1tuYW1lXVxyXG4gICAgfVxyXG59XHJcblxyXG5Db25leGlvblNRTC5jZXJyYXJDb25leGlvblBPT0wgPSAoKSA9PntcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChPYmplY3QudmFsdWVzKGNvbmV4aW9uZXMpLm1hcCgocG9vbCk9PntcclxuICAgICAgICByZXR1cm4gcG9vbC5jbG9zZSgpXHJcbiAgICB9KSlcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbmV4aW9uU1FMIiwiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG5jb25zdCBwZXJmaWwgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIHBlcmZpbDp7XHJcbiAgICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZTp0cnVlLFxyXG4gICAgICAgIHVuaXF1ZTp0cnVlLFxyXG4gICAgICAgIGVudW06WydBZG1pbicsJ25pdmVsLTEnLCduaXZlbC0yJywnbml2ZWwtMycsJ25pdmVsLTQnLCduaXZlbC01J11cclxuICAgIH1cclxufSlcclxuXHJcbm1vbmdvb3NlLnNldCgndXNlQ3JlYXRlSW5kZXgnLCB0cnVlKVxyXG5tb25nb29zZS5zZXQoJ3VzZUZpbmRBbmRNb2RpZnknLCBmYWxzZSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWwoJ3BlcmZpbCcscGVyZmlsKSIsImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuY29uc3QgdXN1YXJpbyA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG5cclxuICAgIHVzZXJOYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWVcclxuICAgIH0sXHJcbiAgICBlbWFpbDp7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgdW5pcXVlOnRydWVcclxuICAgIH0sXHJcbiAgICBub21icmU6e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgYXBlbGxpZG86e1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlXHJcbiAgICB9LFxyXG4gICAgcGVyZmlsOntcclxuICAgICAgICB0eXBlOlN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDp0cnVlLFxyXG4gICAgICAgIGVudW06WydBZG1pbicsJ25pdmVsLTEnLCduaXZlbC0yJywnbml2ZWwtMycsJ25pdmVsLTQnLCduaXZlbC01J11cclxuICAgIH1cclxufSlcclxubW9uZ29vc2Uuc2V0KCd1c2VDcmVhdGVJbmRleCcsIHRydWUpXHJcbm1vbmdvb3NlLnNldCgndXNlRmluZEFuZE1vZGlmeScsIGZhbHNlKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbCgndXN1YXJpbycsdXN1YXJpbykiLCJjb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGNvcnMgPSByZXF1aXJlKCdjb3JzJylcclxudmFyIG1vcmdhblxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgcmVxdWlyZSgnY29sb3JzJylcclxuICAgIG1vcmdhbiA9IHJlcXVpcmUoJ21vcmdhbicpXHJcbn1cclxuLy8gY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTk9ERV9FTlYpXHJcblxyXG5jb25zdCBzZXJ2aWRvciA9IGV4cHJlc3MoKVxyXG5zZXJ2aWRvci51c2UoY29ycygpKVxyXG5cclxuLy8gbWlkZGVsd2FyZVxyXG5cclxuc2Vydmlkb3IudXNlKGV4cHJlc3MuanNvbigpKVxyXG5zZXJ2aWRvci51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHtleHRlbmRlZDogdHJ1ZX0pKVxyXG5zZXJ2aWRvci51c2UocmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvcy9hdXRoQWxsUm91dGVyJykpXHJcblxyXG5cclxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpe1xyXG4gICAgc2Vydmlkb3IudXNlKG1vcmdhbignZGV2JykpXHJcbn1cclxuXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9hdXRoUm91dGVyUmVhY3QvYWRtaW4nLHJlcXVpcmUoJy4vcnV0YXNBcGkvYXV0aEFjY2Vzb3NSZWFjdC9hdXRoQWRtaW5Sb3V0ZXJSZWFjdCcpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsMScscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDFSb3V0ZXJSZWFjdCcpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsMicscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDJSb3V0ZXJSZWFjdCcpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsMycscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDNSb3V0ZXJSZWFjdCcpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsNCcscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDRSb3V0ZXJSZWFjdCcpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvYXV0aFJvdXRlclJlYWN0L25pdmVsNScscmVxdWlyZSgnLi9ydXRhc0FwaS9hdXRoQWNjZXNvc1JlYWN0L2F1dGhOaXZlbDVSb3V0ZXJSZWFjdCcpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvbWFxdWluYXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvbWFxdWluYXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3VzdWFyaW9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2F1dGhBY2Nlc29zL2F1dGhBZG1pblJvdXRlcicpLHJlcXVpcmUoJy4vcnV0YXNBcGkvdXN1YXJpb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2xvZ3VlbycscmVxdWlyZSgnLi9ydXRhc0FwaS9Mb2d1ZW8nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2F1dGVudGlmaWNhc2lvbicscmVxdWlyZSgnLi9ydXRhc0FwaS9BdXRlbnRpZmljYXNpb24nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BpZXphcycscmVxdWlyZSgnLi9ydXRhc0FwaS9waWV6YXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL21vbGRlcycscmVxdWlyZSgnLi9ydXRhc0FwaS9tb2xkZXMnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2RlZmVjdG9zJyxyZXF1aXJlKCcuL3J1dGFzQXBpL2RlZmVjdG9zJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9vcGVyYWNpb25lcycscmVxdWlyZSgnLi9ydXRhc0FwaS9vcGVyYWNpb25lcycpKVxyXG5zZXJ2aWRvci51c2UoJy9hcGkvcHJvY2Vzb3MnLHJlcXVpcmUoJy4vcnV0YXNBcGkvcHJvY2Vzb3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3R1cm5vcycscmVxdWlyZSgnLi9ydXRhc0FwaS90dXJub3MnKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3BhcmFkYXNNYXF1aW5hJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BhcmFkYXNNYXF1aW5hJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS90cmFiYWphZG9yZXMnLHJlcXVpcmUoJy4vcnV0YXNBcGkvdHJhYmFqYWRvcmVzJykpXHJcbnNlcnZpZG9yLnVzZSgnL2FwaS9wbGFuaWxsYXNQcm9kdWNjaW9uJyxyZXF1aXJlKCcuL3J1dGFzQXBpL3BsYW5pbGxhc1Byb2R1Y2Npb24nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL3RpcG9zUHJvY2VzbycscmVxdWlyZSgnLi9ydXRhc0FwaS90aXBvc1Byb2Nlc28nKSlcclxuc2Vydmlkb3IudXNlKCcvYXBpL2NsaWVudGVzJywgcmVxdWlyZSggJy4vcnV0YXNBcGkvY2xpZW50ZXMnICkgKVxyXG5zZXJ2aWRvci51c2UgKCcvYXBpL3RpcG9zTWF0ZXJpYWwnLCByZXF1aXJlICggJy4vcnV0YXNBcGkvdGlwb3NNYXRlcmlhbCcgKSApXHJcbnNlcnZpZG9yLnVzZSAoJy9hcGkvYXJlYXMnLCByZXF1aXJlICggJy4vcnV0YXNBcGkvYXJlYXMnICkgKVxyXG5zZXJ2aWRvci51c2UgKCAnL2FwaS90aXBvc01hcXVpbmEnICwgcmVxdWlyZSAoICcuL3J1dGFzQXBpL3RpcG9zTWFxdWluYScgKSlcclxuc2Vydmlkb3IudXNlICggJy9hcGkvcGxhbnRhcycgLCByZXF1aXJlICggJy4vcnV0YXNBcGkvcGxhbnRhcycgKSlcclxuc2Vydmlkb3IudXNlICggJy9hcGkvcHVlc3RvcycgLCByZXF1aXJlICggJy4vcnV0YXNBcGkvcHVlc3RvcycgKSApXHJcbnNlcnZpZG9yLnVzZSAoICcvYXBpL29lZScgLCByZXF1aXJlICggJy4vcnV0YXNBcGkvb2VlJyApIClcclxuc2Vydmlkb3IudXNlICgnL2FwaS9yZXBvcnRlcycgLCByZXF1aXJlICggJy4vcnV0YXNBcGkvcmVwb3J0ZXMnICkpXHJcblxyXG4vL1NldHRpbmdzXHJcbnNlcnZpZG9yLnNldCgncG9ydCcscHJvY2Vzcy5lbnYuUE9SVCB8fCA1MDAwKVxyXG5cclxuc2Vydmlkb3IubGlzdGVuKHNlcnZpZG9yLmdldCgncG9ydCcpLChtLGUpPT57XHJcbiAgICBpZihlKXtjb25zb2xlLmxvZyhlKX1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLnllbGxvdyxzZXJ2aWRvci5nZXQoJ3BvcnQnKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpZG9yIGNvcnJpZW5kbyBlbiBlbCBQVUVSVE8nLHNlcnZpZG9yLmdldCgncG9ydCcpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSkiLCJjb25zdCBSb3V0ZXIgPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3QgQ09ORklHID0gcmVxdWlyZSgnLi4vQ09ORklHJylcclxuXHJcbmNvbnN0IHJvdXRlcj1Sb3V0ZXIoKTtcclxuXHJcbnJvdXRlci5nZXQoJy8nLChyZXEscmVzKT0+e1xyXG5cclxuICAgIGlmKCFyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTonTm8gZW52aW8gZWwgVG9rZW4gZW4gZWwgaGVhZGVycyd9KVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV07XHJcbiAgICAgICAgand0LnZlcmlmeSh0b2tlbixDT05GSUcuc2VjcmV0LChlLGQpPT57XHJcbiAgICAgICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ZS5uYW1lfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGJjcnlwdCA9cmVxdWlyZSgnYmNyeXB0LW5vZGVqcycpXHJcbmNvbnN0IFVzdWFyaW8gPSByZXF1aXJlKCcuLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFVc3VhcmlvcycpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vQ09ORklHJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpO1xyXG5cclxucm91dGVyLnBvc3QoJy8nLGFzeW5jIChyZXEscmVzLG5leHQpPT57XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc3VhcmlvLmZpbmQoe3VzZXJOYW1lOnJlcS5ib2R5LnVzZXJOYW1lfSlcclxuICAgICAgICBpZighdXNlclswXSl7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOidVc3VhcmlvIEluZXhpc3RlbnRlICEnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3QgdmVyaWZpY2FQYXNzID0gYXdhaXQgYmNyeXB0LmNvbXBhcmVTeW5jKHJlcS5ib2R5LnBhc3N3b3JkLHVzZXJbMF0ucGFzc3dvcmQpXHJcbiAgICAgICAgICAgIGlmKCF2ZXJpZmljYVBhc3Mpe1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6J1Bhc3N3b3JkIEluY29ycmVjdGEnfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWlVc3VhcmlvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOnVzZXJbMF0udXNlck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6dXNlclswXS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBub21icmU6dXNlclswXS5ub21icmUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG86dXNlclswXS5hcGVsbGlkbyxcclxuICAgICAgICAgICAgICAgICAgICBwZXJmaWw6dXNlclswXS5wZXJmaWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGp3dC5zaWduKG1pVXN1YXJpbyxzZWNyZXQse2V4cGlyZXNJbjoxNDQwMH0sKGUsdG9rZW4pPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZT8gcmVzLnN0YXR1cyg0MDQpLmpzb24oe21lbnNhamU6J0Vycm9yIGFsIGdlbmVyYXIgZWwgdG9rZW4nfSk6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Rva2VufSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7ZX0pO1xyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoICdleHByZXNzJyApXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCAgKVxyXG5cclxucm91dGVyLmdldCAoICcvJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdsaXN0YUFyZWFzJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0IH0gPSBuZXcgcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWlyZXMgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVpcmVzLnF1ZXJ5IChcclxuICAgICAgICAgICAgYHNlbGVjdCBpZCBhcyBpZEFyZWEgLCBub21icmUgYXMgbm9tYnJlQXJlYVxyXG4gICAgICAgICAgICBmcm9tIGFyZWFzXHJcbiAgICAgICAgICAgIHdoZXJlIGVzdGFkbyA9IDFgXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVBcmVhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRBcmVhJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZUFyZWEnICwgVmFyQ2hhciAsIG5vbWJyZUFyZWEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIGFyZWFzICggbm9tYnJlICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVBcmVhICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQXJlYSBJbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkQXJlYSAsIG5vbWJyZUFyZWEgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZUFyZWEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlQXJlYScgLCBWYXJDaGFyICwgbm9tYnJlQXJlYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkQXJlYScgLCBJbnQgLCBpZEFyZWEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBhcmVhc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVBcmVhXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRBcmVhYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQXJlYSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRBcmVhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlQXJlYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZEFyZWEnICwgSW50ICwgaWRBcmVhIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgYXJlYXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRBcmVhYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQXJlYSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlICgnLi4vLi4vQ09ORklHJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gKCByZXEgLCByZXMgLG5leHQpID0+IHtcclxuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdXHJcbiAgICBqd3QudmVyaWZ5KHRva2VuLCBzZWNyZXQgLCAoZSAsIGRhdG9zVXNlcikgPT4ge1xyXG4gICAgICAgIGlmKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGRhdG9zVXNlci5wZXJmaWwgIT09ICdBZG1pbicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6ICdBY2Nlc28gZGVuZWdhZG8gcG9yIG5vIHNlciBhZG1pbid9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsImNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vLi4vQ09ORklHJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHJlcSAsIHJlcyAsbmV4dCkge1xyXG4gICAgaWYgKHJlcS5wYXRoICE9PSAnL2FwaS9sb2d1ZW8nKSB7XHJcbiAgICAgICAgaWYoICFyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplIDogJ05vIGVudmlvIGVsIHRvamVuIGVuIGVsIGhlYWRlcnMnfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV1cclxuICAgICAgICAgICAgand0LnZlcmlmeSh0b2tlbiAsc2VjcmV0ICwgKCBlICwgZGF0b3MgKT0+IHtcclxuICAgICAgICAgICAgICAgIGlmICggZSApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZSAsIG90cm8gOiAnZXJyb3IgIGVuIGxhIGNvbW1wcm92YWNpb24gdG9rZW4nfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHQoKVxyXG4gICAgfVxyXG59IiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi8uLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLChyZXEscmVzKT0+IHtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXVxyXG4gICAgand0LnZlcmlmeSh0b2tlbixzZWNyZXQsKGUsZGF0b3NVc2VyKT0+IHtcclxuICAgICAgICBpZihlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTogZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGRhdG9zVXNlci5wZXJmaWwgPT09ICdhZG1pbicpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtwZXJtaXNvIDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ICd1c3RlZCBubyBlcyBhZG1pbid9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vLi4vQ09ORklHJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PiB7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV1cclxuICAgIGp3dC52ZXJpZnkodG9rZW4sc2VjcmV0LChlLGRhdG9zVXNlcik9PiB7XHJcbiAgICAgICAgaWYoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6IGUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihkYXRvc1VzZXIucGVyZmlsID09PSAnbml2ZWwtMScpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtwZXJtaXNvIDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ICd1c3RlZCBubyBlcyBuaXZlbCAxJ30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi8uLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLChyZXEscmVzKT0+IHtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXVxyXG4gICAgand0LnZlcmlmeSh0b2tlbixzZWNyZXQsKGUsZGF0b3NVc2VyKT0+IHtcclxuICAgICAgICBpZihlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTogZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGRhdG9zVXNlci5wZXJmaWwgPT09ICduaXZlbC0yJykge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Blcm1pc28gOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTogJ3VzdGVkIG5vIGVzIG5pdmVsIDInfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCBqd3QgPSByZXF1aXJlKCdqc29ud2VidG9rZW4nKVxyXG5jb25zdCB7c2VjcmV0fSA9IHJlcXVpcmUoJy4uLy4uL0NPTkZJRycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsKHJlcSxyZXMpPT4ge1xyXG5cclxuICAgIGNvbnN0IHRva2VuID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdXHJcbiAgICBqd3QudmVyaWZ5KHRva2VuLHNlY3JldCwoZSxkYXRvc1VzZXIpPT4ge1xyXG4gICAgICAgIGlmKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOiBlLm1lc3NhZ2V9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYoZGF0b3NVc2VyLnBlcmZpbCA9PT0gJ25pdmVsLTMnKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7cGVybWlzbyA6IHRydWV9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOiAndXN0ZWQgbm8gZXMgbml2ZWwgMyd9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGp3dCA9IHJlcXVpcmUoJ2pzb253ZWJ0b2tlbicpXHJcbmNvbnN0IHtzZWNyZXR9ID0gcmVxdWlyZSgnLi4vLi4vQ09ORklHJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJywocmVxLHJlcyk9PiB7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV1cclxuICAgIGp3dC52ZXJpZnkodG9rZW4sc2VjcmV0LChlLGRhdG9zVXNlcik9PiB7XHJcbiAgICAgICAgaWYoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6IGUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihkYXRvc1VzZXIucGVyZmlsID09PSAnbml2ZWwtNCcpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtwZXJtaXNvIDogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLmpzb24oe21lbnNhamU6ICd1c3RlZCBubyBlcyBuaXZlbCA0J30pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJylcclxuY29uc3Qge3NlY3JldH0gPSByZXF1aXJlKCcuLi8uLi9DT05GSUcnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLChyZXEscmVzKT0+IHtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24uc3BsaXQoJyAnKVsxXVxyXG4gICAgand0LnZlcmlmeSh0b2tlbixzZWNyZXQsKGUsZGF0b3NVc2VyKT0+IHtcclxuICAgICAgICBpZihlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTogZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKGRhdG9zVXNlci5wZXJmaWwgPT09ICduaXZlbC01Jykge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe3Blcm1pc28gOiB0cnVlfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTogJ3VzdGVkIG5vIGVzIG5pdmVsIDUnfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoICdleHByZXNzJyApXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCAgKVxyXG5cclxucm91dGVyLmdldCAoICcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnY29uc3VsdGFDbGllbnRlcycgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYCBzZWxlY3QgYy5pZCBhcyBpZENsaWVudGUgLCBjLm5vbWJyZSBhcyBub21icmVDbGllbnRlICwgYy5yYXpvbl9zb2NpYWwgYXMgcmF6b25Tb2NpYWxDbGllbnRlXHJcbiAgICBmcm9tIGNsaWVudGVzIGNcclxuICAgIHdoZXJlIGMuZXN0YWRvID0gMWBcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgICAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24yID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlQ2xpZW50ZScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdDIgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uMiAgKVxyXG4gICAgICAgIG15UmVxdWVzdDIuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIHBhcnNlSW50ICggcmVxLmJvZHkuaWRDbGllbnRlICkgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBjbGllbnRlcyBzZXQgZXN0YWRvID0gMCB3aGVyZSBpZCA9IEBpZENsaWVudGVgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0Mi5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQ2xpZW50ZSBFbGltaW5hZG8gQ29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgICAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCAgcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVDbGllbnRlICwgIHJhem9uU29jaWFsQ2xpZW50ZSAsIGlkQ2xpZW50ZSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlQ2xpZW50ZScgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlQ2xpZW50ZScgLCBWYXJDaGFyICwgIG5vbWJyZUNsaWVudGUgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ3Jhem9uU29jaWFsQ2xpZW50ZScgLCBWYXJDaGFyICwgIHJhem9uU29jaWFsQ2xpZW50ZSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsICBpZENsaWVudGUgKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgIHVwZGF0ZSBjbGllbnRlc1xyXG4gICAgc2V0XHJcbiAgICBub21icmUgPSBAbm9tYnJlQ2xpZW50ZSAsXHJcbiAgICByYXpvbl9zb2NpYWwgPSBAcmF6b25Tb2NpYWxDbGllbnRlXHJcbiAgICB3aGVyZSBpZCA9IEBpZENsaWVudGVgXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnQ2xpZW50ZSBBY3R1YWxpemFkbyBDb3JyZWN0YW1lbnRlICcgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVDbGllbnRlICwgIHJhem9uU29jaWFsQ2xpZW50ZSAgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydENsaWVudGUnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggIGNvbmV4aW9uIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVDbGllbnRlJyAsIFZhckNoYXIgLCBub21icmVDbGllbnRlIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdyYXpvblNvY2lhbENsaWVudGUnICwgVmFyQ2hhciAsIHJhem9uU29jaWFsQ2xpZW50ZSApXHJcbiAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBjbGllbnRlcyAoIG5vbWJyZSAsIHJhem9uX3NvY2lhbCAsIGVzdGFkbyAgKSB2YWx1ZXMgICggQG5vbWJyZUNsaWVudGUgLCBAcmF6b25Tb2NpYWxDbGllbnRlICwgMSApYFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0NsaWVudGUgSW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoJ3NlbGVjdCBkLmlkIGFzIGlkRGVmZWN0bywgZC5ub21icmUgYXMgbm9tYnJlRGVmZWN0bywgZC5pZF9vcGVyYWNpb24gYXMgaWRPcGVyYWNpb24sby5ub21icmUgYXMgbm9tYnJlT3BlcmFjaW9uIGZyb20gZGVmZWN0b3MgZCBqb2luIG9wZXJhY2lvbmVzIG8gb24gZC5pZF9vcGVyYWNpb249by5pZCB3aGVyZSBkLmVzdGFkbyA9IDEnLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVEZWZlY3RvICwgaWRPcGVyYWNpb24gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0RGVmZWN0bycgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVEZWZlY3RvJyAsIFZhckNoYXIgLCBub21icmVEZWZlY3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRPcGVyYWNpb24nICwgSW50ICwgaWRPcGVyYWNpb24gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIGRlZmVjdG9zICggbm9tYnJlICwgaWRfb3BlcmFjaW9uICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVEZWZlY3RvICwgQGlkT3BlcmFjaW9uICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRGVmZWN0byBJbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkRGVmZWN0byAsIG5vbWJyZURlZmVjdG8gLCBpZE9wZXJhY2lvbiB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVEZWZlY3RvJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZURlZmVjdG8nICwgVmFyQ2hhciAsIG5vbWJyZURlZmVjdG8gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE9wZXJhY2lvbicgLCBJbnQgLCBpZE9wZXJhY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkRGVmZWN0bycgLCBJbnQgLCBpZERlZmVjdG8gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBkZWZlY3Rvc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIG5vbWJyZSA9IEBub21icmVEZWZlY3RvICxcclxuICAgICAgICBpZF9vcGVyYWNpb24gPSBAaWRPcGVyYWNpb25cclxuICAgICAgICB3aGVyZSBpZCA9IEBpZERlZmVjdG9gXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdEZWZlY3RvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZERlZmVjdG8gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVEZWZlY3RvJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkRGVmZWN0bycgLCBJbnQgLCBpZERlZmVjdG8gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBkZWZlY3Rvc1xyXG4gICAgICAgIHNldFxyXG4gICAgICAgIGVzdGFkbyA9IDBcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZERlZmVjdG9gXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdEZWZlY3RvIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQoJy8nLCBhc3luYyAocmVxLHJlcyk9PntcclxuICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgYHNlbGVjdCBtLmlkIGFzIGlkTWFxdWluYSAsIG0ubm9tYnJlIGFzIG5vbWJyZU1hcXVpbmEgLCBtLmRlc2NyaXBjaW9uIGFzIGRlc2NyaXBjaW9uTWFxdWluYSAsXHJcbiAgICBtLmlkX3RpcG9zX21hcXVpbmEgYXMgaWRUaXBvTWFxdWluYSAsIHRtLm5vbWJyZSBhcyBub21icmVUaXBvTWFxdWluYSAsIG0uaWRfcGxhbnRhIGFzIGlkUGxhbnRhICwgcC5ub21icmUgYXMgbm9tYnJlUGxhbnRhXHJcbiAgICBmcm9tIG1hcXVpbmFzIG1cclxuICAgIGpvaW4gdGlwb3NfbWFxdWluYSB0bSBvbiBtLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgam9pbiBwbGFudGFzIHAgb24gbS5pZF9wbGFudGEgPSBwLmlkXHJcbiAgICB3aGVyZSBtLmVzdGFkbyA9IDFgLFxyXG4gICAgKGVycixkYXRvKT0+e1xyXG4gICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9XHJcbiAgKVxyXG59KVxyXG5yb3V0ZXIuZ2V0KCcveG9wZXJhY2lvbi86aWRPcGVyYWNpb24nLCBhc3luYyAocmVxLHJlcyk9PntcclxuICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgY29uc3Qge2lkT3BlcmFjaW9ufSA9IHJlcS5wYXJhbXNcclxuICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgY29uc3VsdGEucXVlcnkoXHJcbiAgICBgc2VsZWN0IG0uaWQgYXMgaWRNYXF1aW5hLCBtLm5vbWJyZSBhcyBub21icmVNYXF1aW5hXHJcbiAgICBmcm9tIG1hcXVpbmFzIG1cclxuICAgIGpvaW4gdGlwb3NfbWFxdWluYSB0bSBvbiBtLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxIGFuZCB0bS5pZF9vcGVyYWNpb24gPSAke2lkT3BlcmFjaW9ufWAsXHJcbiAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgIH1cclxuICApXHJcbn0gKVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgY29uc3QgeyBub21icmVNYXF1aW5hICwgZGVzY3JpcGNpb25NYXF1aW5hICwgaWRUaXBvTWFxdWluYSAsIGlkUGxhbnRhIH0gPSByZXEuYm9keVxyXG4gIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0TWFxdWluYScgKVxyXG4gICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlTWFxdWluYSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnZGVzY3JpcGNpb25NYXF1aW5hJyAsIFZhckNoYXIgLCBkZXNjcmlwY2lvbk1hcXVpbmEgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hcXVpbmEnICwgSW50ICwgaWRUaXBvTWFxdWluYSApXHJcbiAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQbGFudGEnICwgSW50ICwgaWRQbGFudGEgKVxyXG4gICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gbWFxdWluYXMgKCBub21icmUgLCBkZXNjcmlwY2lvbiAsIGlkX3RpcG9zX21hcXVpbmEgLCBpZF9wbGFudGEgLCBlc3RhZG8gKVxyXG4gICAgdmFsdWVzXHJcbiAgICAoIEBub21icmVNYXF1aW5hICwgQGRlc2NyaXBjaW9uTWFxdWluYSAsIEBpZFRpcG9NYXF1aW5hICwgQGlkUGxhbnRhICwgMSApYFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01hcXVpbmEgSW5zZXJ0YWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgfVxyXG4gIH1cclxuICBjYXRjaCAoIGUgKSB7XHJcbiAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gIGNvbnN0IHsgaWRNYXF1aW5hICwgbm9tYnJlTWFxdWluYSAsIGRlc2NyaXBjaW9uTWFxdWluYSAsIGlkVGlwb01hcXVpbmEgLCBpZFBsYW50YSB9ID0gcmVxLmJvZHlcclxuICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZU1hcXVpbmEnIClcclxuICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU1hcXVpbmEnICwgVmFyQ2hhciAsIG5vbWJyZU1hcXVpbmEgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2Rlc2NyaXBjaW9uTWFxdWluYScgLCBWYXJDaGFyICwgZGVzY3JpcGNpb25NYXF1aW5hIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRpcG9NYXF1aW5hJyAsIEludCAsIGlkVGlwb01hcXVpbmEgKVxyXG4gICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGxhbnRhJyAsIEludCAsIGlkUGxhbnRhIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE1hcXVpbmEnICwgSW50ICwgaWRNYXF1aW5hIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBtYXF1aW5hc1xyXG4gICAgc2V0XHJcbiAgICBub21icmUgPSBAbm9tYnJlTWFxdWluYSAsXHJcbiAgICBkZXNjcmlwY2lvbiA9IEBkZXNjcmlwY2lvbk1hcXVpbmEgLFxyXG4gICAgaWRfdGlwb3NfbWFxdWluYSA9IEBpZFRpcG9NYXF1aW5hICxcclxuICAgIGlkX3BsYW50YSA9IEBpZFBsYW50YVxyXG4gICAgd2hlcmUgaWQgPSBAaWRNYXF1aW5hYFxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01hcXVpbmEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhdGNoICggZSApIHtcclxuICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gIGNvbnN0IHsgaWRNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICB0cnkge1xyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdkZWxldGVNYXF1aW5hJyApXHJcbiAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE1hcXVpbmEnICwgSW50ICwgaWRNYXF1aW5hIClcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBtYXF1aW5hc1xyXG4gICAgc2V0XHJcbiAgICBlc3RhZG8gPSAwXHJcbiAgICB3aGVyZSBpZCA9IEBpZE1hcXVpbmFgXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnTWFxdWluYSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNhdGNoICggZSApIHtcclxuICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgbS5pZCBhcyBpZE1vbGRlICwgbS5ub21icmUgYXMgbm9tYnJlTW9sZGUgLCBtLmlkX3BpZXphIGFzIGlkUGllemEgLCBwLm5vbWJyZSBhcyBub21icmVQaWV6YVxyXG4gICAgZnJvbSBtb2xkZXMgbVxyXG4gICAgam9pbiBwaWV6YXMgcCBvbiBtLmlkX3BpZXphID0gcC5pZFxyXG4gICAgd2hlcmUgbS5lc3RhZG8gPSAxYFxyXG4gICAgY29uc3VsdGEucXVlcnkoIHF1ZXJ5ICwoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgfSlcclxufSlcclxucm91dGVyLmdldCgnL3hwaWV6YS86aWRQaWV6YScsIGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICBjb25zdCB7aWRQaWV6YX0gPSByZXEucGFyYW1zXHJcbiAgICBjb25zdCB7UmVxdWVzdH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRNb2xkZSwgbm9tYnJlIGFzIG5vbWJyZU1vbGRlIGZyb20gbW9sZGVzIHdoZXJlIGVzdGFkbyA9IDEgYW5kIGlkX3BpZXphID0gJytpZFBpZXphLChlcnIsZGF0byk9PntcclxuICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlTW9sZGUgLCBpZFBpZXphIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydE1vbGRlJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU1vbGRlJyAsIFZhckNoYXIgLCBub21icmVNb2xkZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGllemEnICwgSW50ICwgaWRQaWV6YSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gbW9sZGVzICggbm9tYnJlICwgaWRfcGllemEgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZU1vbGRlICwgQGlkUGllemEgLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdNb2xkZSBJbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkTW9sZGUgLCBub21icmVNb2xkZSAsIGlkUGllemEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlTW9sZGUnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlTW9sZGUnICwgVmFyQ2hhciAsIG5vbWJyZU1vbGRlIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRNb2xkZScgLCBJbnQgLCBpZE1vbGRlIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgbW9sZGVzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZU1vbGRlICxcclxuICAgICAgICBpZF9waWV6YSA9IEBpZFBpZXphXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRNb2xkZWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ01vbGRlIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZE1vbGRlIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlTW9sZGUnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRNb2xkZScgLCBJbnQgLCBpZE1vbGRlIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgbW9sZGVzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkTW9sZGVgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdNb2xkZSBlbGltaW5hZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyXHJcbiIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICggJ2V4cHJlc3MnIClcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5cclxucm91dGVyLnBvc3QgKCAnL2Z1bmRpY2lvbicgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRNYXF1aW5hICwgaWRQaWV6YSAsIGlkTW9sZGUgLCBmZWNoYUZ1bmRpY2lvbkRlc2RlICwgZmVjaGFGdW5kaWNpb25IYXN0YSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnbGlzdGFPRUVmdW5kaWNpb24nIClcclxuICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXMgPSBuZXcgIG1zc3FsLlJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2lkTWFxdWluYScgLCBtc3NxbC5JbnQgLCBpZE1hcXVpbmEgKVxyXG4gICAgICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdpZFBpZXphJyAsIG1zc3FsLkludCAsIGlkUGllemEgKVxyXG4gICAgICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdpZE1vbGRlJyAsIG1zc3FsLkludCAsIGlkTW9sZGUgKVxyXG4gICAgICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdmZWNoYUZ1bmRpY2lvbkRlc2RlJyAsIG1zc3FsLkRhdGUgLCBmZWNoYUZ1bmRpY2lvbkRlc2RlIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnZmVjaGFGdW5kaWNpb25IYXN0YScgLCBtc3NxbC5EYXRlICwgZmVjaGFGdW5kaWNpb25IYXN0YSApXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzLmV4ZWN1dGUgKCAncGFfZGF0b3NPRUVmdW4nIClcclxuICAgICAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgICAgIH1cclxufSAgKVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2dyYW5hbGxhZG8nICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkTWFxdWluYSAsIGlkUGllemEgLCBpZE1vbGRlICwgZmVjaGFQcm9kdWNjaW9uRGVzZGUgLCBmZWNoYVByb2R1Y2Npb25IYXN0YSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnbGlzdGFPRUVncmFuYWxsYWRvJyApXHJcbiAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzID0gbmV3ICBtc3NxbC5SZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdpZE1hcXVpbmEnICwgbXNzcWwuSW50ICwgaWRNYXF1aW5hIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnaWRQaWV6YScgLCBtc3NxbC5JbnQgLCBpZFBpZXphIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnaWRNb2xkZScgLCBtc3NxbC5JbnQgLCBpZE1vbGRlIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnZmVjaGFQcm9kdWNjaW9uRGVzZGUnICwgbXNzcWwuRGF0ZSAsIGZlY2hhUHJvZHVjY2lvbkRlc2RlIClcclxuICAgICAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnZmVjaGFQcm9kdWNjaW9uSGFzdGEnICwgbXNzcWwuRGF0ZSAsIGZlY2hhUHJvZHVjY2lvbkhhc3RhIClcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXMuZXhlY3V0ZSAoICdwYV9kYXRvc09FRWdyYScgKVxyXG4gICAgICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICByZXMuanNvbiAoIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICAgICAgfVxyXG59ICApXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvbWVjYW5pemFkbycgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgaWRNYXF1aW5hICwgaWRQaWV6YSAsIGlkTW9sZGUgLCBmZWNoYVByb2R1Y2Npb25EZXNkZSAsIGZlY2hhUHJvZHVjY2lvbkhhc3RhIH0gPSByZXEuYm9keVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2xpc3RhT0VFbWVjYW5pemFkbycgKVxyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzID0gbmV3ICBtc3NxbC5SZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2lkTWFxdWluYScgLCBtc3NxbC5JbnQgLCBpZE1hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2lkUGllemEnICwgbXNzcWwuSW50ICwgaWRQaWV6YSApXHJcbiAgICAgICAgbXlSZXF1ZXMuaW5wdXQgKCAnaWRNb2xkZScgLCBtc3NxbC5JbnQgLCBpZE1vbGRlIClcclxuICAgICAgICBteVJlcXVlcy5pbnB1dCAoICdmZWNoYVByb2R1Y2Npb25EZXNkZScgLCBtc3NxbC5EYXRlICwgZmVjaGFQcm9kdWNjaW9uRGVzZGUgKVxyXG4gICAgICAgIG15UmVxdWVzLmlucHV0ICggJ2ZlY2hhUHJvZHVjY2lvbkhhc3RhJyAsIG1zc3FsLkRhdGUgLCBmZWNoYVByb2R1Y2Npb25IYXN0YSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXMuZXhlY3V0ZSAoICdwYV9kYXRvc09FRW1lYycgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHJlc3VsdC5yZWNvcmRzZXQgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuY29uc3Qgcm91dGVyID0gUm91dGVyKClcclxuXHJcbnJvdXRlci5nZXQgKCAnLycsYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb24gLCBjZXJyYXJDb25leGlvbiB9ID0gcmVxdWlyZSAoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24gKCAgKVxyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUgKCdtc3NxbCcpXHJcbiAgICB2YXIgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCAoICApXHJcbiAgICBjb25zdWx0YS5xdWVyeShcclxuICAgICAgICBgc2VsZWN0IGlkIGFzIGlkT3BlcmFjaW9uLCBub21icmUgYXMgbm9tYnJlT3BlcmFjaW9uXHJcbiAgICAgICAgZnJvbSBvcGVyYWNpb25lcyB3aGVyZSBlc3RhZG8gPSAxYCxcclxuICAgICAgICAoZXJyLGRhdG8pID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSApXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZU9wZXJhY2lvbiB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRPcGVyYWNpb24nIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU9wZXJhY2lvbicgLCBWYXJDaGFyICwgbm9tYnJlT3BlcmFjaW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBvcGVyYWNpb25lcyAoIG5vbWJyZSAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlT3BlcmFjaW9uICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnT3BlcmFjaW9uIGluc2VydGFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVPcGVyYWNpb24gLCBpZE9wZXJhY2lvbiB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVPcGVyYWNpb24nIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlT3BlcmFjaW9uJyAsIFZhckNoYXIgLCBub21icmVPcGVyYWNpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE9wZXJhY2lvbicgLCBJbnQgLCBpZE9wZXJhY2lvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIG9wZXJhY2lvbmVzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZU9wZXJhY2lvblxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkT3BlcmFjaW9uYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnT3BlcmFjaW9uIGFjdHVhbGl6YWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkT3BlcmFjaW9uIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlT3BlcmFjaW9uJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkT3BlcmFjaW9uJyAsIEludCAsIGlkT3BlcmFjaW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgb3BlcmFjaW9uZXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRPcGVyYWNpb25gXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdPcGVyYWNpb24gZWxpbWluYWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggIClcclxuXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy8nICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICB2YXIgeyBhYnJpckNvbmV4aW9uICwgY2VycmFyQ29uZXhpb24gfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24gKCAgKVxyXG4gICAgdmFyIHsgUmVxdWVzdCB9ID0gcmVxdWlyZSAoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0ICggIClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5IChcclxuICAgICAgICBgc2VsZWN0IHBtLmlkIGFzIGlkUGFyYWRhTWFxdWluYSwgcG0ubm9tYnJlIGFzIG5vbWJyZVBhcmFkYU1hcXVpbmEsIHBtLnRpcG8gYXMgdGlwb1BhcmFkYU1hcXVpbmEgLCBwbS5zZXR1cCBhcyBzZXR1cFBhcmFkYU1hcXVpbmEgLCBwbS5pZF9hcmVhIGFzIGlkQXJlYSwgYS5ub21icmUgYXMgbm9tYnJlQXJlYVxyXG4gICAgICAgIGZyb20gcGFyYWRhc19tYXF1aW5hIHBtXHJcblx0XHRqb2luIGFyZWFzIGEgb24gcG0uaWRfYXJlYT1hLmlkXHJcbiAgICAgICAgd2hlcmUgcG0uZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKCBlICwgZGF0byApID0+IHtcclxuICAgICAgICAgICAgaWYgKCAhZSApe1xyXG4gICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb24gKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCBkYXRvLnJlY29yZHNldCApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7IGNlcnJhckNvbmV4aW9uICggIClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBub21icmVQYXJhZGFNYXF1aW5hICwgdGlwb1BhcmFkYU1hcXVpbmEgLCBzZXR1cFBhcmFkYU1hcXVpbmEgLCBpZEFyZWEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50ICwgQml0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UGFyYWRhTWFxdWluYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVQYXJhZGFNYXF1aW5hJyAsIFZhckNoYXIgLCBub21icmVQYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAndGlwb1BhcmFkYU1hcXVpbmEnICwgQml0ICwgdGlwb1BhcmFkYU1hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZEFyZWEnICwgSW50ICwgaWRBcmVhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnc2V0dXBQYXJhZGFNYXF1aW5hJyAsIEludCAsIHNldHVwUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgaW5zZXJ0IGludG8gcGFyYWRhc19tYXF1aW5hICggbm9tYnJlICwgdGlwbyAsIHNldHVwICwgaWRfYXJlYSAsIGVzdGFkbyApXHJcbiAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgKCBAbm9tYnJlUGFyYWRhTWFxdWluYSAsIEB0aXBvUGFyYWRhTWFxdWluYSAsIEBzZXR1cFBhcmFkYU1hcXVpbmEgLCBAaWRBcmVhICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGFyYWRhIGRlIE1hcXVpbmEgSW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQYXJhZGFNYXF1aW5hICwgbm9tYnJlUGFyYWRhTWFxdWluYSAsIHNldHVwUGFyYWRhTWFxdWluYSAsIHRpcG9QYXJhZGFNYXF1aW5hICwgaWRBcmVhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCAsIEJpdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVBhcmFkYU1hcXVpbmEnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGFyYWRhTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ3RpcG9QYXJhZGFNYXF1aW5hJyAsIEJpdCAsIHRpcG9QYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRBcmVhJyAsIEludCAsIGlkQXJlYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUGFyYWRhTWFxdWluYScgLCBJbnQgLCBpZFBhcmFkYU1hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdzZXR1cFBhcmFkYU1hcXVpbmEnICwgSW50ICwgc2V0dXBQYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGFyYWRhc19tYXF1aW5hXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZVBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgIHRpcG8gPSBAdGlwb1BhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgIHNldHVwID0gQHNldHVwUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgaWRfYXJlYSA9IEBpZEFyZWFcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBhcmFkYU1hcXVpbmFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQYXJhZGEgZGUgbWFxdWluYSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQYXJhZGFNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRlUGFyYWRhTWFxdWluYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBhcmFkYU1hcXVpbmEnICwgSW50ICwgaWRQYXJhZGFNYXF1aW5hIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGFyYWRhc19tYXF1aW5hXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUGFyYWRhTWFxdWluYWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BhcmFkYXMgZGUgTWFxdWluYSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge1JlcXVlc3R9ID0gbmV3IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIGNvbnN0IGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCBwLmlkIGFzIGlkUGllemEsIHAubm9tYnJlIGFzIG5vbWJyZVBpZXphICwgcC5pZF9jbGllbnRlIGFzIGlkQ2xpZW50ZSAsIGMubm9tYnJlIGFzIG5vbWJyZUNsaWVudGUgLFxyXG4gICAgICAgIHAuaWRfdGlwb3NfbWF0ZXJpYWwgYXMgaWRUaXBvTWF0ZXJpYWwgLCB0bS5ub21icmUgYXMgbm9tYnJlVGlwb01hdGVyaWFsXHJcbiAgICAgICAgZnJvbSBwaWV6YXMgcFxyXG4gICAgICAgIGpvaW4gY2xpZW50ZXMgYyBvbiBwLmlkX2NsaWVudGUgPSBjLmlkXHJcbiAgICAgICAgam9pbiB0aXBvc19tYXRlcmlhbCB0bSBvbiBwLmlkX3RpcG9zX21hdGVyaWFsID0gdG0uaWRcclxuICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDFgLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLmdldCgnL3htYXF1aW5hLzppZE1hcXVpbmEnLCBhc3luYyAocmVxLHJlcyk9PnsgLy8gISBMSVNUQURPIERFIFBJRVpBUyBTRUdVTiBNQVFVSU5BXHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtpZE1hcXVpbmF9ID0gcmVxLnBhcmFtc1xyXG4gICAgdmFyIHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcC5pZCBhcyBpZFBpZXphLCBwLm5vbWJyZSBhcyBub21icmVQaWV6YVxyXG4gICAgICAgIGZyb20gcGllemFzIHBcclxuICAgICAgICBqb2luIHByb2Nlc29zIHByb1xyXG4gICAgICAgIG9uIHByby5pZF9waWV6YSA9IHAuaWRcclxuICAgICAgICB3aGVyZSBwLmVzdGFkbyA9IDEgYW5kIHByby5pZF9tYXF1aW5hID0gJHtpZE1hcXVpbmF9YCxcclxuICAgICAgICAoZXJyLGRhdG8pPT57XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH0gXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JyAsIGFzeW5jICggcmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlUGllemEgLCBpZENsaWVudGUgLCBpZFRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGllemEnICwgVmFyQ2hhciAsIG5vbWJyZVBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIGlkQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hdGVyaWFsJyAsIEludCAsIGlkVGlwb01hdGVyaWFsIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBwaWV6YXMgKCBub21icmUgLCBpZF9jbGllbnRlICwgaWRfdGlwb3NfbWF0ZXJpYWwgLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlcyAoIEBub21icmVQaWV6YSAsIEBpZENsaWVudGUgLCBAaWRUaXBvTWF0ZXJpYWwgLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQaWV6YSBpbnNlcnRhZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy91cGRhdGUnICwgYXN5bmMgKCByZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBpZXphICwgbm9tYnJlUGllemEgLCBpZENsaWVudGUgLCBpZFRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQaWV6YScgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCAsIFZhckNoYXIgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBJbnQgLCBpZFBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlUGllemEnICwgVmFyQ2hhciAsIG5vbWJyZVBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRDbGllbnRlJyAsIEludCAsIGlkQ2xpZW50ZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hdGVyaWFsJyAsIEludCAsIGlkVGlwb01hdGVyaWFsIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcGllemFzXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgbm9tYnJlID0gQG5vbWJyZVBpZXphICxcclxuICAgICAgICBpZF9jbGllbnRlID0gQGlkQ2xpZW50ZSAsXHJcbiAgICAgICAgaWRfdGlwb3NfbWF0ZXJpYWwgPSBAaWRUaXBvTWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBpZXphYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUGllemEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnICwgYXN5bmMgKCByZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBpZXphIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVBpZXphJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgSW50ICB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBpZXphJyAsIEludCAsIGlkUGllemEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBwaWV6YXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQaWV6YWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BpZXphIGVsaW1pbmFkYSBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IE1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcbmNvbnN0IGNvbnZpZXJ0ZUhvcmEgPSAoIGhvcmEgKSA9PiB7XHJcbiAgICB2YXIgSG9ySW5pY2lvbk8gPSBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke2hvcmF9OjAwYClcclxuICAgIEhvckluaWNpb25PLnNldEhvdXJzKCBIb3JJbmljaW9uTy5nZXRIb3VycygpIC0gMyApXHJcbiAgICByZXR1cm4gSG9ySW5pY2lvbk9cclxufVxyXG5yb3V0ZXIucG9zdCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBsYW5pbGxhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdlbGltaW5hUGxhbmlsbGEnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uQWJpZXJ0YSApXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29uc3VsdGEucXVlcnkoIGB1cGRhdGUgcGxhbmlsbGFzX3Byb2R1Y2Npb25cclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSAkeyBwYXJzZUludCAoIGlkUGxhbmlsbGEgKSB9YFxyXG4gICAgICAgIClcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnRWxpbWluYWNpb24gZXhpdG9zYSAhJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucG9zdCggJy9saXN0YXInLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIGZlY2hhRGVzZGVQcm9kdWNjaW9uICwgZmVjaGFIYXN0YVByb2R1Y2Npb24gLFxyXG4gICAgICAgICAgICAgICAgZmVjaGFEZXNkZUZ1bmRpY2lvbiAsIGZlY2hhSGFzdGFGdW5kaWNvbiAsIGlkTWFxdWluYSAsIGlkUGllemEgLCBpZE1vbGRlICxpZFRpcG9Qcm9jZXNvICwgaWRPcGVyYWNpb25cclxuICAgIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggIClcclxuICAgIGNvbnN0IHsgVHJhbnNhY3Rpb24gLCBJbnQgfSA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSBuZXcgVHJhbnNhY3Rpb24oY29uZXhpb25BYmllcnRhIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSggJ21zc3FsJyApXHJcbiAgICBjb25zdCBtc3NxbCA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4oIGFzeW5jIGUgPT57XHJcbiAgICAgICAgaWYoIGUgKSB7ICByZXMuanNvbiggeyBtZW5zYWplOiBlLm1lc3NhZ2UgfSApICB9XHJcbiAgICAgICAgY29uc3Qgc3FsQ29uc3VsdGEgPSBgXHJcbiAgICAgICAgc2VsZWN0IHBsLmlkIGFzIGlkUGxhbmlsbGEsIHBsLmZlX2NhcmdhIGFzIGZlY2hhQ2FyZ2EsIHBsLmZlX3Byb2R1Y2Npb24gYXMgZmVjaGFQcm9kdWNjaW9uLCBwbC5mZV9mdW5kaWNpb24gYXMgZmVjaGFGdW5kaWNpb24sXHJcbiAgICAgICAgcGwuaG9yYV9pbmljaW8gYXMgaG9yYUluaWNpbyAsIHBsLmhvcmFfZmluIGFzIGhvcmFGaW4sIHRtLmlkX29wZXJhY2lvbiBhcyBpZE9wZXJhY2lvbiwgbWFxLmlkIGFzIGlkTWFxdWluYSAsbWFxLm5vbWJyZSBhcyBub21icmVNYXF1aW5hICwgcGllLmlkIGFzIGlkUGllemEsXHJcbiAgICAgICAgcGllLm5vbWJyZSBhcyBub21icmVQaWV6YSAsIG1vbC5pZCBhcyBpZE1vbGRlLCAgbW9sLm5vbWJyZSBhcyBub21icmVNb2xkZSAsIHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyB0aXBvUHJvY2Vzb1xyXG4gICAgICAgICwgcGwuaWRfcHJvY2VzbyBhcyBpZFByb2Nlc29cclxuICAgICAgICBmcm9tIHBsYW5pbGxhc19wcm9kdWNjaW9uIHBsXHJcbiAgICAgICAgam9pbiBtb2xkZXMgbW9sIG9uIHBsLmlkX21vbGRlID0gbW9sLmlkXHJcbiAgICAgICAgam9pbiBwcm9jZXNvcyBwIG9uIHBsLmlkX3Byb2Nlc28gPSBwLmlkXHJcbiAgICAgICAgam9pbiBwaWV6YXMgcGllIG9uIHAuaWRfcGllemEgPSBwaWUuaWRcclxuICAgICAgICBqb2luIG1hcXVpbmFzIG1hcSBvbiBwLmlkX21hcXVpbmEgPSBtYXEuaWRcclxuICAgICAgICBqb2luIHRpcG9zX3Byb2Nlc28gdHAgb24gcC5pZF90aXBvc19wcm9jZXNvID0gdHAuaWRcclxuICAgICAgICBqb2luIHRpcG9zX21hcXVpbmEgdG0gb24gbWFxLmlkX3RpcG9zX21hcXVpbmEgPSB0bS5pZFxyXG4gICAgICAgIHdoZXJlIHBsLmVzdGFkbyA9IDFcclxuICAgICAgICBhbmQgIHBsLmZlX2Z1bmRpY2lvbiBiZXR3ZWVuIEBmZWNoYURlc2RlRnVuZGljaW9uIGFuZCAgQGZlY2hhSGFzdGFGdW5kaWNvblxyXG4gICAgICAgIGFuZCAgcGwuZmVfcHJvZHVjY2lvbiBiZXR3ZWVuICBAZmVjaGFEZXNkZVByb2R1Y2Npb24gYW5kICBAZmVjaGFIYXN0YVByb2R1Y2Npb25cclxuICAgICAgICBhbmQgKCAgQGlkTWFxdWluYSAgaXMgbnVsbCAgb3IgcC5pZF9tYXF1aW5hID0gIEBpZE1hcXVpbmEgIClcclxuICAgICAgICBhbmQgKCAgQGlkUGllemEgIGlzIG51bGwgIG9yIHAuaWRfcGllemEgPSAgQGlkUGllemEgIClcclxuICAgICAgICBhbmQgKCAgQGlkTW9sZGUgIGlzIG51bGwgIG9yIHBsLmlkX21vbGRlID0gIEBpZE1vbGRlICApXHJcbiAgICAgICAgYW5kICggIEBpZFRpcG9Qcm9jZXNvICBpcyBudWxsICBvciBwLmlkX3RpcG9zX3Byb2Nlc28gPSAgQGlkVGlwb1Byb2Nlc28gIClcclxuICAgICAgICBhbmQgKCAgQGlkT3BlcmFjaW9uICBpcyBudWxsICBvciB0bS5pZF9vcGVyYWNpb24gPSAgIEBpZE9wZXJhY2lvbiAgKSBgXHJcbiAgICAgICAgY29uc3QgY29uc3VsdGFQbGFuaWxsYSA9IG5ldyBSZXF1ZXN0KCB0cmFuc2FjY2lvbiApXHJcbiAgICAgICAgY29uc3VsdGFQbGFuaWxsYS5pbnB1dCggJ2ZlY2hhRGVzZGVGdW5kaWNpb24nICwgbXNzcWwuRGF0ZSAsIGZlY2hhRGVzZGVGdW5kaWNpb24gKVxyXG4gICAgICAgIGNvbnN1bHRhUGxhbmlsbGEuaW5wdXQoICdmZWNoYUhhc3RhRnVuZGljb24nICwgbXNzcWwuRGF0ZSAsIGZlY2hhSGFzdGFGdW5kaWNvbiApXHJcbiAgICAgICAgY29uc3VsdGFQbGFuaWxsYS5pbnB1dCggJ2ZlY2hhRGVzZGVQcm9kdWNjaW9uJyAsIG1zc3FsLkRhdGUgLCBmZWNoYURlc2RlUHJvZHVjY2lvbiApXHJcbiAgICAgICAgY29uc3VsdGFQbGFuaWxsYS5pbnB1dCggJ2ZlY2hhSGFzdGFQcm9kdWNjaW9uJyAsIG1zc3FsLkRhdGUgLCBmZWNoYUhhc3RhUHJvZHVjY2lvbilcclxuICAgICAgICBjb25zdWx0YVBsYW5pbGxhLmlucHV0KCAnaWRNYXF1aW5hJyAsIEludCAsIGlkTWFxdWluYSA9PT0gJycgPyBudWxsIDogcGFyc2VJbnQgKCBpZE1hcXVpbmEgKSApXHJcbiAgICAgICAgY29uc3VsdGFQbGFuaWxsYS5pbnB1dCggJ2lkUGllemEnICwgSW50ICwgaWRQaWV6YSA9PT0gJycgPyBudWxsIDogcGFyc2VJbnQgKCBpZFBpZXphICkgKVxyXG4gICAgICAgIGNvbnN1bHRhUGxhbmlsbGEuaW5wdXQoICdpZE1vbGRlJyAsIEludCAsIGlkTW9sZGUgPT09ICcnID8gbnVsbCA6IHBhcnNlSW50ICggIGlkTW9sZGUgKSApXHJcbiAgICAgICAgY29uc3VsdGFQbGFuaWxsYS5pbnB1dCggJ2lkVGlwb1Byb2Nlc28nICwgSW50ICwgaWRUaXBvUHJvY2VzbyA9PT0gJycgPyBudWxsIDogcGFyc2VJbnQgKCBpZFRpcG9Qcm9jZXNvICkgKVxyXG4gICAgICAgIGNvbnN1bHRhUGxhbmlsbGEuaW5wdXQoICdpZE9wZXJhY2lvbicgLCBJbnQgLCBpZE9wZXJhY2lvbiA9PT0gJycgPyBudWxsIDogcGFyc2VJbnQgKCAgaWRPcGVyYWNpb24gKSApXHJcbiAgICAgICAgY29uc3QgY29uc3VsdGFPcGVyYXJpb3NYcGxhbmlsbGEgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUmVjaGF6b3MgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhWm9uYXMgPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIGNvbnN0IGNvbnN1bHRhUE0gPSBuZXcgUmVxdWVzdCggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgIHZhciB2ZWNQbGFuaWxsYVByb2R1Y2Npb24gPSBbICBdXHJcbiAgICAgICAgdmFyIHZlY1RyYWJhamFkb3Jlc1xyXG4gICAgICAgIHZhciB2ZWNSZWNoYXpvc1xyXG4gICAgICAgIHZhciB2ZWNab25hc1xyXG4gICAgICAgIHZhciB2ZWNQTVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IGNvbnN1bHRhUGxhbmlsbGEucXVlcnkoIHNxbENvbnN1bHRhIClcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShyZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0KSl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0LmZvckVhY2goIHBsYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBsYW5pbGxhICA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRQbGFuaWxsYSA6IHBsYS5pZFBsYW5pbGxhICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVjaGFDYXJnYSA6IHBsYS5mZWNoYUNhcmdhICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVjaGFQcm9kdWNjaW9uIDogcGxhLmZlY2hhUHJvZHVjY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlY2hhRnVuZGljaW9uIDogcGxhLmZlY2hhRnVuZGljaW9uICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG9yYUluaWNpbyA6IG5ldyBNb21lbnQgKCBwbGEuaG9yYUluaWNpbyApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3JhRmluIDogbmV3IE1vbWVudCAoICBwbGEuaG9yYUZpbiApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZE9wZXJhY2lvbiA6IHBsYS5pZE9wZXJhY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkTWFxdWluYSA6IHBsYS5pZE1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVNYXF1aW5hIDogcGxhLm5vbWJyZU1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFBpZXphIDogcGxhLmlkUGllemEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub21icmVQaWV6YSA6IHBsYS5ub21icmVQaWV6YSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkTW9sZGUgOiBwbGEuaWRNb2xkZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZU1vbGRlIDogcGxhLm5vbWJyZU1vbGRlICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRUaXBvUHJvY2VzbyA6IHBsYS5pZFRpcG9Qcm9jZXNvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwb1Byb2Nlc28gOiBwbGEudGlwb1Byb2Nlc28gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZFByb2Nlc28gOiBwbGEuaWRQcm9jZXNvXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZlY1BsYW5pbGxhUHJvZHVjY2lvbi5wdXNoKHBsYW5pbGxhKVxyXG4gICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyA9ICcnXHJcbiAgICAgICAgICAgICAgICB2ZWNQbGFuaWxsYVByb2R1Y2Npb24uZm9yRWFjaCgocGxhLGluZGV4UGxhbmlsbGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiggaW5kZXhQbGFuaWxsYSA9PT0gKHJlc3VsdFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXQubGVuZ3RoIC0gMSkpeyBsaXN0YUlkUGxhbmlsbGFzUHJvZHVjICs9IGAke3BhcnNlSW50KHBsYS5pZFBsYW5pbGxhKX0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyArPSBgJHtwYXJzZUludChwbGEuaWRQbGFuaWxsYSl9ICxgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZiggbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyA9PT0gJycgKXsgbGlzdGFJZFBsYW5pbGxhc1Byb2R1YyA9IG51bGwgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHNxbENvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhID0gYHNlbGVjdCB0eHAuaWQgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhICwgdC5ub21icmUgYXMgbm9tYnJlVHJhYmFqYWRvciwgdC5hcGVsbGlkbyBhcyBhcGVsbGlkb1RyYWJhamFkb3IsIHR1ci5kZXNjcmlwY2lvbiAgYXMgdHVybm9UcmFiYWphZG9yICxcclxuICAgICAgICAgICAgICAgIHR4cC5ob3JhX2luaWNpbyBhcyBob3JhSW5pY2lvICwgdHhwLmhvcmFfZmluIGFzIGhvcmFGaW4sICB0eHAucHphX3Byb2R1Y2lkYXMgYXMgcGllemFzUHJvZHVjaWRhcyAsXHJcbiAgICAgICAgICAgICAgICB0eHAuY2Fsb3JpYXMgYXMgY2Fsb3JpYXMgLCB0eHAuaWRfcGxhbmlsbGEgYXMgaWRQbGFuaWxsYSAsIHR4cC5pZF90cmFiYWphZG9yIGFzIGlkVHJhYmFqYWRvciAsIHR4cC5pZF90dXJubyBhcyBpZFR1cm5vXHJcbiAgICAgICAgICAgICAgICBmcm9tIHRyYWJhamFkb3JfeF9wbGFuaWxsYSB0eHBcclxuICAgICAgICAgICAgICAgIGpvaW4gdHJhYmFqYWRvcmVzIHQgb24gdHhwLmlkX3RyYWJhamFkb3IgPSB0LmlkXHJcbiAgICAgICAgICAgICAgICBqb2luIHR1cm5vcyB0dXIgb24gdHhwLmlkX3R1cm5vID0gdHVyLmlkXHJcbiAgICAgICAgICAgICAgICB3aGVyZSB0eHAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgYW5kIHR4cC5pZF9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgfSApICA7IGBcclxuICAgICAgICAgICAgICAgIHZhciBzcWxDb25zdWx0YVBNID0gYCBzZWxlY3QgcG14cC5pZCBhcyBpZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgLCBwbS5pZCBhcyBpZFBhcmFkYU1hcXVpbmEgLCBwbS5ub21icmUgYXMgbm9tYnJlUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICBwbXhwLmhvcmFfaW5jaW8gYXMgaG9yYUluaWNpb1BhcmFkYU1hcXVpbmEgLCBwbXhwLmhvcmFfZmluIGFzIGhvcmFGaW5QYXJhZGFNYXF1aW5hICwgcG14cC5pZF9wbGFuaWxsYSBhcyBpZFBsYW5pbGxhICwgcG0udGlwbyBhcyB0aXBvUGFyYWRhTWFxdWluYVxyXG4gICAgICAgICAgICAgICAgZnJvbSBwYXJhZGFzX21hcXVpbmFzX3hfcGxhbmlsbGEgcG14cFxyXG4gICAgICAgICAgICAgICAgam9pbiBwYXJhZGFzX21hcXVpbmEgcG0gb24gcG14cC5pZF9wYXJhZGFzX21hcXVpbmEgPSBwbS5pZFxyXG4gICAgICAgICAgICAgICAgd2hlcmUgcG14cC5lc3RhZG8gPSAxXHJcbiAgICAgICAgICAgICAgICBhbmQgcG14cC5pZF9wbGFuaWxsYSBpbiAoICR7IGxpc3RhSWRQbGFuaWxsYXNQcm9kdWMgfSApIDsgYFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhYmFqYWRvcmVzWHBsYW5pbGxhID0gYXdhaXQgIGNvbnN1bHRhT3BlcmFyaW9zWHBsYW5pbGxhLnF1ZXJ5KCBzcWxDb25zdWx0YU9wZXJhcmlvc1hwbGFuaWxsYSArIHNxbENvbnN1bHRhUE0gKVxyXG4gICAgICAgICAgICAgICAgaWYodHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMF0gJiYgdHJhYmFqYWRvcmVzWHBsYW5pbGxhLnJlY29yZHNldHNbMV0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3JlcyA9IHRyYWJhamFkb3Jlc1hwbGFuaWxsYS5yZWNvcmRzZXRzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjUE0gPSB0cmFiYWphZG9yZXNYcGxhbmlsbGEucmVjb3Jkc2V0c1sxXVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsaXN0YUlkVHJhYmFqYWRvcmVzID0gJydcclxuICAgICAgICAgICAgICAgICAgICB2ZWNUcmFiYWphZG9yZXMuZm9yRWFjaCgoIHQgLCBpICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggaSA9PT0gKCB2ZWNUcmFiYWphZG9yZXMubGVuZ3RoIC0gMSkpeyBsaXN0YUlkVHJhYmFqYWRvcmVzICs9IGAke3BhcnNlSW50KHQuaWRUcmFiYWphZG9yWHBsYW5pbGxhKX0gYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2V7IGxpc3RhSWRUcmFiYWphZG9yZXMgKz0gYCR7cGFyc2VJbnQodC5pZFRyYWJhamFkb3JYcGxhbmlsbGEpfSAsYCB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGxpc3RhSWRUcmFiYWphZG9yZXMgPT09ICcnICkgeyBsaXN0YUlkVHJhYmFqYWRvcmVzID0gbnVsbCB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNxbENvbnN1bHRhUmVjaGF6b3MgPSBgIHNlbGVjdCByeHR5cC5pZCBhcyBpZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSAsIGQubm9tYnJlIGFzIG5vbWJyZVJlY2hhem8gLFxyXG4gICAgICAgICAgICAgICAgICAgIHJ4dHlwLnRpcG8gYXMgdGlwb1JlY2hhem8gLCByeHR5cC5jYW50aWRhZCBhcyBjYW50aWRhZFJlY2hhem9zICwgcnh0eXAuaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhIGFzIGlkVHJhYmFqYWRvclhwbGFuaWxsYSAsIHJ4dHlwLmlkX2RlZmVjdG8gYXMgaWREZWZlY3RvXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSByeHR5cFxyXG4gICAgICAgICAgICAgICAgICAgIGpvaW4gZGVmZWN0b3MgZCBvbiByeHR5cC5pZF9kZWZlY3RvID0gZC5pZFxyXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlIHJ4dHlwLmVzdGFkbyA9IDFcclxuICAgICAgICAgICAgICAgICAgICBhbmQgcnh0eXAuaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhIGluICggJHsgbGlzdGFJZFRyYWJhamFkb3JlcyB9ICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjaGF6b3MgPSBhd2FpdCBjb25zdWx0YVJlY2hhem9zLnF1ZXJ5KCBzcWxDb25zdWx0YVJlY2hhem9zIClcclxuICAgICAgICAgICAgICAgICAgICBpZiggcmVjaGF6b3MucmVjb3Jkc2V0ICl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zID0gcmVjaGF6b3MucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaXN0YUlkUmVjaGF6b3MgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvcy5mb3JFYWNoKCAoIHJlICwgIGluZGV4UmVjaGF6byApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBpbmRleFJlY2hhem8gPT09ICggdmVjUmVjaGF6b3MubGVuZ3RoIC0gMSkpeyBsaXN0YUlkUmVjaGF6b3MgKz0gYCR7cGFyc2VJbnQoIHJlLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhICl9IGAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXsgbGlzdGFJZFJlY2hhem9zICs9IGAke3BhcnNlSW50KHJlLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhKX0gLGAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBsaXN0YUlkUmVjaGF6b3MgPT09ICcnICkgeyBsaXN0YUlkUmVjaGF6b3MgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3FsQ29uc3VsdGFab25hcyA9IGAgc2VsZWN0IHp4cnlwLmlkIGFzIGlkWm9uYSAsIHp4cnlwLmxldHJhIGFzIGxldHJhWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHp4cnlwLm51bWVybyBhcyBudW1lcm9ab25hICwgenhyeXAuY2FudGlkYWQgYXMgY2FudGlkYWRab25hICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgenhyeXAuaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgYXMgaWRSZWNoYXpvc1h0cmFiYWphZG9yWXBsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gem9uYXNfeF9yZWNoYXpvX3hfcGxhbmlsbGEgenhyeXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlcmUgenhyeXAuZXN0YWRvID0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgenhyeXAuaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgaW4gKCAkeyBsaXN0YUlkUmVjaGF6b3MgfSApIDsgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlyZXJlbmNpYUVuTWludXRvcyA9IChob3JhSW5pY2lvLGhvcmFGaW4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhfaW5pY2lvID0gbmV3IE1vbWVudCAoICBob3JhSW5pY2lvICApLmZvcm1hdCAoIFwiSEg6bW1cIiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaF9maW4gPSBuZXcgTW9tZW50ICggIGhvcmFGaW4gICkuZm9ybWF0ICggXCJISDptbVwiIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoRGVzZGUgPSBuZXcgRGF0ZShgMTk5NS0xMi0xN1QwMzoke2hfaW5pY2lvfWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaEhhc3RhID0gbmV3IERhdGUoYDE5OTUtMTItMTdUMDM6JHtoX2Zpbn1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaF9pbmljaW8gPT09ICcwNjowMCcgJiYgaF9maW4gPT09ICcwNjowMCcpeyAgcmV0dXJuIDI0ICogNjAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYoKGhIYXN0YS1oRGVzZGUpLzEwMDAgPCAwKXsgcmV0dXJuIChoSGFzdGEtaERlc2RlKS8xMDAwICsgMTQ0MCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNleyByZXR1cm4gKGhIYXN0YS1oRGVzZGUpLzEwMDAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaXN0YVpvbmFzID0gYXdhaXQgY29uc3VsdGFab25hcy5xdWVyeSggc3FsQ29uc3VsdGFab25hcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBsaXN0YVpvbmFzLnJlY29yZHNldCApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXMgPSBsaXN0YVpvbmFzLnJlY29yZHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGxhbmlsbGFQcm9kdWNjaW9uLmZvckVhY2goIChwbCAsIGluZGV4UGxhbmlsbGEgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGwudmVjT3BlcmFyaW9zID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbC52ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYSA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUE0uZm9yRWFjaCggcG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggcGFyc2VJbnQoIHBtLmlkUGxhbmlsbGEgKSA9PT0gcGFyc2VJbnQoIHBsLmlkUGxhbmlsbGEgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhZGFNYXEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQYXJhZGFNYXF1aW5hWHBsYW5pbGxhOiBwbS5pZFBhcmFkYU1hcXVpbmFYcGxhbmlsbGEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkUGFyYWRhTWFxdWluYSA6IHBtLmlkUGFyYWRhTWFxdWluYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlUGFyYWRhTWFxdWluYSA6IHBtLm5vbWJyZVBhcmFkYU1hcXVpbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2RlUGFyYWRhTWFxdWluYSA6IG5ldyBNb21lbnQgKCBwbS5ob3JhSW5pY2lvUGFyYWRhTWFxdWluYSApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc3RhUGFyYWRhTWFxdWluYSA6IG5ldyBNb21lbnQgKCBwbS5ob3JhRmluUGFyYWRhTWFxdWluYSApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmFjaW9uUGFyYWRhTWFxdWluYSA6IGRpcmVyZW5jaWFFbk1pbnV0b3MoIHBtLmhvcmFJbmljaW9QYXJhZGFNYXF1aW5hICwgIHBtLmhvcmFGaW5QYXJhZGFNYXF1aW5hICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG9QYXJhZGFNYXF1aW5hIDogcG0udGlwb1BhcmFkYU1hcXVpbmFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLnB1c2goIHBhcmFkYU1hcSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1RyYWJhamFkb3Jlcy5mb3JFYWNoKCAodHIgLCBpbmRleFRyYWJhamFkb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBwYXJzZUludCggcGwuaWRQbGFuaWxsYSApID09PSBwYXJzZUludCAoIHRyLmlkUGxhbmlsbGEgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0cmFYcGxhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVHJhYmFqYWRvclhwbGFuaWxsYSA6IHRyLmlkVHJhYmFqYWRvclhwbGFuaWxsYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZE9wZXJhcmlvIDogdHIuaWRUcmFiYWphZG9yICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFR1cm5vIDogdHIuaWRUdXJubyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlVHJhYmFqYWRvciA6IHRyLm5vbWJyZVRyYWJhamFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9tYnJlIDogdHIuaWRUcmFiYWphZG9yICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGVsbGlkb1RyYWJhamFkb3IgOiB0ci5hcGVsbGlkb1RyYWJhamFkb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHVybm9UcmFiYWphZG9yIDogdHIudHVybm9UcmFiYWphZG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFJbmljaW8gOiBuZXcgTW9tZW50ICggdHIuaG9yYUluaWNpbyApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFGaW4gOiBuZXcgTW9tZW50ICggdHIuaG9yYUZpbiApLmZvcm1hdCggXCJISDptbVwiICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y2Npb24gOiB0ci5waWV6YXNQcm9kdWNpZGFzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbG9yaWFzIDogdHIuY2Fsb3JpYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6byA6IFsgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3MuZm9yRWFjaCggcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwYXJzZUludCggdHJhWHBsYS5pZFRyYWJhamFkb3JYcGxhbmlsbGEgKSA9PT0gcGFyc2VJbnQgKCByZS5pZFRyYWJhamFkb3JYcGxhbmlsbGEgKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlY2ggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSA6IHJlLmlkUmVjaGF6b1h0cmFiYWphZG9yWXBsYW5pbGxhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRSZWNoYXpvIDogcmUuaWREZWZlY3RvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZVJlY2hhem8gOiByZS5ub21icmVSZWNoYXpvICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG8gOiByZS50aXBvUmVjaGF6byAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZFJlY2hhem8gOiByZS5jYW50aWRhZFJlY2hhem9zICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzOiBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hcy5mb3JFYWNoKCB6b24gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBwYXJzZUludCggem9uLmlkUmVjaGF6b3NYdHJhYmFqYWRvcllwbGFuaWxsYSApID09PSBwYXJzZUludCggcmVjaC5pZFJlY2hhem9YdHJhYmFqYWRvcllwbGFuaWxsYSAgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB6b25hWHJlY2hhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRab25hIDogem9uLmlkWm9uYSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXRyYSA6IHpvbi5sZXRyYVpvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtZXJvIDogem9uLm51bWVyb1pvbmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQgOiB6b24uY2FudGlkYWRab25hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaC52ZWNab25hcy5wdXNoKCB6b25hWHJlY2hhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFYcGxhLnZlY1JlY2hhem8ucHVzaCggcmVjaCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsLnZlY09wZXJhcmlvcy5wdXNoKCB0cmFYcGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSAgLy8gaG9sYSBtdW5kbyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLmNvbW1pdCggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB2ZWNQbGFuaWxsYVByb2R1Y2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoKGUpe1xyXG4gICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayggIClcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOiBlLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgdmFyIHsgZmVjaGFQcm9kdWNjaW9uLCBmZWNoYUZ1bmRpY2lvbiwgaWRUdXJubywgSG9yYUluaWNpb1Byb2R1Y2Npb24sXHJcbiAgICAgICAgSG9yYUZpblByb2R1Y2Npb24gLCAgaWRPcGVyYWNpb24gLCBpZE1hcXVpbmEgLCAgaWRQaWV6YSAsICBpZE1vbGRlICwgaWRUaXBvUHJvY2VzbyAsXHJcbiAgICAgICAgdmVjT3BlcmFyaW9zICwgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGEgLCBpZFBsYW5pbGxhXHJcbiAgICB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnNvbGUubG9nICggaWRQbGFuaWxsYSApXHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQbGFuaWxsYScgKVxyXG4gICAgY29uc3QgeyBUcmFuc2FjdGlvbiB9ID0gIHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IG1zc3FsICA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCxQcmVwYXJlZFN0YXRlbWVudCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgdHJhbnNhY2Npb24gPSAgYXdhaXQgbmV3IFRyYW5zYWN0aW9uICggY29uZXhpb25BYmllcnRhIClcclxuICAgIGNvbnN0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IG5ldyBQcmVwYXJlZFN0YXRlbWVudCAoIHRyYW5zYWNjaW9uIClcclxuICAgIGNvbnN0IGRlbGV0ZVpvbmFzUmVjaGF6b3NPcGVyYXJpb3NQbSA9IGF3YWl0IG5ldyBSZXF1ZXN0ICggdHJhbnNhY2Npb24gKVxyXG4gICAgY29uc3QgYXNpbmNyb25vID0gcmVxdWlyZSAoICdhc3luYycgKVxyXG4gICAgdHJhbnNhY2Npb24uYmVnaW4gKCBhc3luYyBmdW5jdGlvbiAoIGVyciApICB7XHJcbiAgICAgICAgaWYgKCAhZXJyICkge1xyXG4gICAgICAgICAgICBjb25zdCBtZXRvZG9UcmFuc2FjY2lvbiA9ICBhc3luYyAoICApID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0RGVsZXRlID0gYXdhaXQgZGVsZXRlWm9uYXNSZWNoYXpvc09wZXJhcmlvc1BtLnF1ZXJ5KGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHpvbmFzX3hfcmVjaGF6b194X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIGlkX3JlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhIGluICggKHNlbGVjdCByLmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSByLmlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBpbiAoICggc2VsZWN0IHQuaWQgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgdCB3aGVyZSB0LmlkX3BsYW5pbGxhID0gJHtpZFBsYW5pbGxhfSApICkgKSApIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSBpbiAoICggc2VsZWN0IHQuaWQgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgdCB3aGVyZSB0LmlkX3BsYW5pbGxhID0gJHtpZFBsYW5pbGxhfSApICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdHJhYmFqYWRvcl94X3BsYW5pbGxhIHdoZXJlIGlkX3BsYW5pbGxhID0gJHtpZFBsYW5pbGxhfSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJhZGFzX21hcXVpbmFzX3hfcGxhbmlsbGEgd2hlcmUgaWRfcGxhbmlsbGEgPSAke2lkUGxhbmlsbGF9IDtcclxuICAgICAgICAgICAgICAgICAgICBgKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICggcmVzdWx0RGVsZXRlICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnZmVfcHJvZHVjY2lvbicgLCBtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2ZlX2Z1bmRpY2lvbicgLCBtc3NxbC5EYXRlIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0ICggJ2hvcmFfaW5pY2lvJyAsIG1zc3FsLlRpbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnaG9yYV9maW4nICwgbXNzcWwuVGltZSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCAoICdpZF9tb2xkZScgLCBtc3NxbC5JbnQgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQgKCAnaWRQbGFuaWxsYScgLCBtc3NxbC5JbnQgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24ucHJlcGFyZSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgc2V0IGRhdGVmb3JtYXQgZG15IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkUHJvY2UgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRQcm9jZSA9IChzZWxlY3QgdG9wIDEgaWQgZnJvbSBwcm9jZXNvcyBwICB3aGVyZSBwLmlkX21hcXVpbmEgPSAkeyBpZE1hcXVpbmEgfSBhbmQgcC5pZF9waWV6YSA9ICR7IGlkUGllemEgfSBhbmQgaWRfdGlwb3NfcHJvY2VzbyA9ICR7IGlkVGlwb1Byb2Nlc28gfSApIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZSBwbGFuaWxsYXNfcHJvZHVjY2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9wcm9kdWNjaW9uID0gQGZlX3Byb2R1Y2Npb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVfZnVuZGljaW9uID0gQGZlX2Z1bmRpY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbyA9IEBob3JhX2luaWNpbyAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbiA9IEBob3JhX2ZpbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9wcm9jZXNvID0gQGlkUHJvY2UgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfbW9sZGUgPSBAaWRfbW9sZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIGlkID0gQGlkUGxhbmlsbGFgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0b3NQbGFuaWxsYVByb2R1Y2Npb24gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZV9wcm9kdWNjaW9uOiBmZWNoYVByb2R1Y2Npb24gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVfZnVuZGljaW9uOiBmZWNoYUZ1bmRpY2lvbiAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIEhvcmFJbmljaW9Qcm9kdWNjaW9uICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke0hvcmFJbmljaW9Qcm9kdWNjaW9ufTowMGApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggSG9yYUZpblByb2R1Y2Npb24gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7SG9yYUZpblByb2R1Y2Npb259OjAwYCkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfdHVybm86IHBhcnNlSW50KCBpZFR1cm5vICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfbW9sZGU6IHBhcnNlSW50KCBpZE1vbGRlICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRQbGFuaWxsYSA6IHBhcnNlSW50ICggaWRQbGFuaWxsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdEMxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEMxID0gYXdhaXQgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmV4ZWN1dGUgKCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVucHJlcGFyZWQgPSBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24udW5wcmVwYXJlICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCB1bnByZXBhcmVkICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0Vycm9yIEluc2VyY2lvblBsYW5pbGxhJyB9ICkuc3RhdHVzICggNDAzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHJlc3VsdEMxICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY09wZXJhcmlvc1hwbGFuaWxsYSA9IFsgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY09wZXJhcmlvcy5mb3JFYWNoICggb3BlcmFyaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Fsb3JpYXMgOiBwYXJzZUludCAoIG9wZXJhcmlvLmNhbG9yaWFzICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwemFfcHJvZHVjaWRhcyA6IHBhcnNlSW50ICggb3BlcmFyaW8ucHJvZHVjY2lvbiApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9pbmljaW86IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBvcGVyYXJpby5ob3JhSW5pY2lvICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke29wZXJhcmlvLmhvcmFJbmljaW99OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggb3BlcmFyaW8uaG9yYUZpbiApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtvcGVyYXJpby5ob3JhRmlufTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90cmFiYWphZG9yOiBwYXJzZUludCAoIG9wZXJhcmlvLmlkT3BlcmFyaW8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BsYW5pbGxhOiBwYXJzZUludCAoIGlkUGxhbmlsbGEgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3R1cm5vOiBwYXJzZUludCggb3BlcmFyaW8uaWRUdXJubyApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3M6IG9wZXJhcmlvLnZlY1JlY2hhem9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjT3BlcmFyaW9zWHBsYW5pbGxhLnB1c2ggKCBvcCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEgLCAoIHRyYWJhamFkb3IgLCBjYWxsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhID0gbmV3IFJlcXVlc3QoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnY2Fsb3JpYXMnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5jYWxvcmlhcyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ3B6YV9wcm9kdWNpZGFzJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IucHphX3Byb2R1Y2lkYXMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF90dXJubycgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3R1cm5vIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaG9yYV9pbmljaW8nICwgbXNzcWwuVGltZSAsIHRyYWJhamFkb3IuaG9yYV9pbmljaW8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdob3JhX2ZpbicsIG1zc3FsLlRpbWUgLCB0cmFiYWphZG9yLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfdHJhYmFqYWRvcicgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3RyYWJhamFkb3IgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdpZF9wbGFuaWxsYScgLCBtc3NxbC5JbnQgLCB0cmFiYWphZG9yLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYWJhamFkb3IudmVjUmVjaGF6b3MuZm9yRWFjaCAoIHJlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlY2hhem9aID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FudGlkYWQgOiBwYXJzZUludCAoIHJlLmNhbnRpZGFkUmVjaGF6byApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpcG86IHJlLnRpcG8gPyAxIDogMCAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9kZWZlY3RvIDogcGFyc2VJbnQgKCByZS5pZFJlY2hhem8gKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hcyA6IHJlLnZlY1pvbmFzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhLnB1c2ggKCByZWNoYXpvWiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29uc3VsdGEgPSBgaW5zZXJ0IGludG8gdHJhYmFqYWRvcl94X3BsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbG9yaWFzICwgcHphX3Byb2R1Y2lkYXMsIGlkX3R1cm5vICwgaG9yYV9pbmljaW8gLCBob3JhX2ZpbiAsIGlkX3RyYWJhamFkb3IgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoQGNhbG9yaWFzICwgQHB6YV9wcm9kdWNpZGFzICwgQGlkX3R1cm5vICwgQGhvcmFfaW5pY2lvICwgQGhvcmFfZmluICwgQGlkX3RyYWJhamFkb3IgLCBAaWRfcGxhbmlsbGEgLCAxKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSA9ICggc2VsZWN0IG1heCggaWQgKSBhcyBpZFRyYWJhamFkb3JYcGxhbmlsbGEgZnJvbSB0cmFiYWphZG9yX3hfcGxhbmlsbGEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEuZm9yRWFjaCAoIHJlY2hhem8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YSArPSBgaW5zZXJ0IGludG8gcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgdGlwbyAsIGlkX2RlZmVjdG8gLCBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLCBlc3RhZG8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoICR7IHJlY2hhem8uY2FudGlkYWQgfSwgJHsgcmVjaGF6by50aXBvIH0gLCAkeyByZWNoYXpvLmlkX2RlZmVjdG8gfSAsIEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgLDEpIDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSA9IChzZWxlY3QgbWF4KGlkKSBmcm9tIHJlY2hhem9zX3hfdHJhYmFqYWRvcl95X3BsYW5pbGxhKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1pvbmFzWHJlY2hhem8gPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2hhem8udmVjWm9uYXMuZm9yRWFjaCAoIHpvbmEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHpvbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZCA6IHBhcnNlSW50ICggem9uYS5jYW50aWRhZCApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXRyYSA6IHpvbmEubGV0cmEgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVybyA6IHBhcnNlSW50ICggem9uYS5udW1lcm8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5wdXNoKCB6b28gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hc1hyZWNoYXpvLmZvckVhY2ggKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhICs9IGAgaW5zZXJ0IGludG8gem9uYXNfeF9yZWNoYXpvX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYW50aWRhZCAsIGxldHJhICwgbnVtZXJvICwgaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoICR7IHpvbmEuY2FudGlkYWQgfSAsICckeyB6b25hLmxldHJhIH0nICwgJHsgem9uYS5udW1lcm8gfSAsIEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSAsIDEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5xdWVyeSAoIGNvbnN1bHRhICwgKCBlcnIgLCByZXN1bHQgKSA9PiB7IGlmICggZXJyICkgeyAgY2FsbGJhY2sgKCBlcnIgKSB9IGVsc2UgeyBjYWxsYmFjayAoICApIH0gfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICwgKCBlcnIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnIgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnIubWVzc2FnZSB9ICkuc3RhdHVzICggNDAzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNQYXJhZGFzRGVNYXF1aW5hID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNQYXJhZGFzTWFxdWluYVNlbGVjY2lvbmFkYS5mb3JFYWNoICggcG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJhTUFDID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmRlc2RlUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5kZXNkZVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggcG0uaGFzdGFQYXJhZGFNYXF1aW5hICkgOiBuZXcgRGF0ZShgMjAyMC0wMi0xNVQke3BtLmhhc3RhUGFyYWRhTWFxdWluYX06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGFyYWRhc19tYXF1aW5hOiBwYXJzZUludCggcG0uaWRQYXJhZGFNYXF1aW5hICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BsYW5pbGxhOiBpZFBsYW5pbGxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNEZU1hcXVpbmEucHVzaCAoIHBhcmFNQUMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY1BhcmFkYXNEZU1hcXVpbmEgLCAoIFBNICwgY2FsbGJhY2tQTSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYSA9ICBuZXcgUmVxdWVzdCAoIHRyYW5zYWNjaW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdob3JhX2luY2lvJyAsIG1zc3FsLlRpbWUgLCBQTS5ob3JhX2luaWNpbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaG9yYV9maW4nICwgbXNzcWwuVGltZSAsIFBNLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdpZF9wYXJhZGFzX21hcXVpbmEnICwgbXNzcWwuSW50ICwgUE0uaWRfcGFyYWRhc19tYXF1aW5hIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhSW5zZXJjaW9uUGFyYWRhc0RlTWFxdWluYS5pbnB1dCAoICdpZF9wbGFuaWxsYScgLCBtc3NxbC5JbnQgLCBQTS5pZF9wbGFuaWxsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEucXVlcnkgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpbnNlcnQgaW50byBwYXJhZGFzX21hcXVpbmFzX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIGhvcmFfaW5jaW8gLCBob3JhX2ZpbiAsIGlkX3BhcmFkYXNfbWFxdWluYSAsIGlkX3BsYW5pbGxhICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIEBob3JhX2luY2lvICwgQGhvcmFfZmluICwgQGlkX3BhcmFkYXNfbWFxdWluYSAsIEBpZF9wbGFuaWxsYSAsIDEgKWAgLCAoIEVSICwgcmVzdWx0UE0gKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIEVSICkgeyBjYWxsYmFja1BNKCBFUiApIH0gZWxzZSB7IGNhbGxiYWNrUE0oICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gLCBlcnJvUiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9SICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb1IubWVzc2FnZSB9ICkuc3RhdHVzICggNDAzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc2V0SGVhZGVyICggJ0NvbnRlbnQtVHlwZScgLCAndGV4dC9ldmVudC1zdHJlYW0nIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzICggMjAwICkuanNvbiAoIHsgbWVuc2FqZSA6ICdBY3R1YWxpemFjaW9uIGV4aXRvc2EnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOiBlLm1lc3NhZ2UgLCBtZW5zYWplMjogJ0Vycm9yIGNhdGNoIEZJTkFMJyB9IClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtZXRvZG9UcmFuc2FjY2lvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCAnZXJyIGNvbW1pdCcgKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0gKVxyXG5yb3V0ZXIucG9zdCggJy9pbnNlcnQnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIHZhciB7IGZlY2hhUHJvZHVjY2lvbiwgZmVjaGFGdW5kaWNpb24sIGlkVHVybm8sIEhvcmFJbmljaW9Qcm9kdWNjaW9uLFxyXG4gICAgICAgIEhvcmFGaW5Qcm9kdWNjaW9uLCAgaWRPcGVyYWNpb24sIGlkTWFxdWluYSwgIGlkUGllemEsICBpZE1vbGRlLCBpZFRpcG9Qcm9jZXNvLFxyXG4gICAgICAgIHZlY09wZXJhcmlvcywgdmVjUGFyYWRhc01hcXVpbmFTZWxlY2Npb25hZGFcclxuICAgIH0gPSByZXEuYm9keVxyXG4gICAgdmFyICBpZFBsYW5pbGxhUHJvZHVjY2lvblxyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MLCBjZXJyYXJDb25leGlvblBPT0x9ID0gcmVxdWlyZSggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCBjb25leGlvbkFiaWVydGEgPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCggJ2NvbnN1bHRhc2EnIClcclxuICAgIGNvbnN0IHsgVHJhbnNhY3Rpb24gfSA9ICByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IG1zc3FsICA9IHJlcXVpcmUoICdtc3NxbCcgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0LFByZXBhcmVkU3RhdGVtZW50IH0gPSByZXF1aXJlKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IHRyYW5zYWNjaW9uID0gIGF3YWl0IG5ldyBUcmFuc2FjdGlvbiggY29uZXhpb25BYmllcnRhIClcclxuICAgIGNvbnN0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IG5ldyBQcmVwYXJlZFN0YXRlbWVudCggdHJhbnNhY2Npb24gKVxyXG4gICAgY29uc3QgY29uc3VsdGFJRHBsYW5pbGxhUHJvZHVjY2lvbiA9IGF3YWl0IG5ldyBSZXF1ZXN0KCB0cmFuc2FjY2lvbiApXHJcbiAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlKCAnYXN5bmMnIClcclxuICAgIHRyYW5zYWNjaW9uLmJlZ2luKGFzeW5jIGZ1bmN0aW9uICggZXJyICkgIHtcclxuICAgICAgICBpZighZXJyKXtcclxuICAgICAgICAgICAgY29uc3QgbWV0b2RvVHJhbnNhY2Npb24gPSAgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2ZlX3Byb2R1Y2Npb24nLG1zc3FsLkRhdGUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2ZlX2Z1bmRpY2lvbicsbXNzcWwuRGF0ZSApXHJcbiAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uUGxhbmlsbGFQcm9kdWNjaW9uLmlucHV0KCAnaG9yYV9pbmljaW8nLG1zc3FsLlRpbWUgKVxyXG4gICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5pbnB1dCggJ2hvcmFfZmluJyxtc3NxbC5UaW1lIClcclxuICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24uaW5wdXQoICdpZF9tb2xkZScsbXNzcWwuSW50IClcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwc19pbnNlcmNpb25QbGFuaWxsYVByb2R1Y2Npb24ucHJlcGFyZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgYHNldCBkYXRlZm9ybWF0IGRteSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2xhcmUgQGlkUHJvY2UgaW50IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZFByb2NlID0gKHNlbGVjdCB0b3AgMSBpZCBmcm9tIHByb2Nlc29zIHAgIHdoZXJlIHAuaWRfbWFxdWluYSA9ICR7IGlkTWFxdWluYSB9IGFuZCBwLmlkX3BpZXphID0gJHsgaWRQaWV6YSB9IGFuZCBpZF90aXBvc19wcm9jZXNvID0gJHsgaWRUaXBvUHJvY2VzbyB9IGFuZCBlc3RhZG8gPSAxICkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnQgaW50byBwbGFuaWxsYXNfcHJvZHVjY2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoIGZlX2NhcmdhICwgZmVfcHJvZHVjY2lvbiAsIGZlX2Z1bmRpY2lvbiAsIGhvcmFfaW5pY2lvICwgaG9yYV9maW4gLCBpZF9wcm9jZXNvICwgaWRfbW9sZGUgICwgZXN0YWRvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICggR0VUREFURSgpICwgQGZlX3Byb2R1Y2Npb24gLCBAZmVfZnVuZGljaW9uICwgQGhvcmFfaW5pY2lvICwgQGhvcmFfZmluICwgQGlkUHJvY2UgLCBAaWRfbW9sZGUgLCAxIClgXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdG9zUGxhbmlsbGFQcm9kdWNjaW9uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZV9wcm9kdWNjaW9uOiBmZWNoYVByb2R1Y2Npb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlX2Z1bmRpY2lvbjogZmVjaGFGdW5kaWNpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfaW5pY2lvOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggSG9yYUluaWNpb1Byb2R1Y2Npb24gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7SG9yYUluaWNpb1Byb2R1Y2Npb259OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvcmFfZmluOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jz8gY29udmllcnRlSG9yYSggSG9yYUZpblByb2R1Y2Npb24gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7SG9yYUZpblByb2R1Y2Npb259OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkX3R1cm5vOiBwYXJzZUludCggaWRUdXJubyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZF9tb2xkZTogcGFyc2VJbnQoIGlkTW9sZGUgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0QzFcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRDMSA9IGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi5leGVjdXRlKCBkYXRvc1BsYW5pbGxhUHJvZHVjY2lvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdW5wcmVwYXJlZCA9IGF3YWl0IHBzX2luc2VyY2lvblBsYW5pbGxhUHJvZHVjY2lvbi51bnByZXBhcmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCB1bnByZXBhcmVkICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uKCB7IG1lbnNhamU6J0Vycm9yIEluc2VyY2lvblBsYW5pbGxhJy55ZWxsb3cgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdEMxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRQbGFuaWxsYVByb2R1Y2Npb24gPSBhd2FpdCBjb25zdWx0YUlEcGxhbmlsbGFQcm9kdWNjaW9uLnF1ZXJ5KCBgc2VsZWN0IG1heCggaWQgKSBhcyBpZFBsYW5pbGxhIGZyb20gcGxhbmlsbGFzX3Byb2R1Y2Npb25gIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaWRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0WzBdLmlkUGxhbmlsbGEgJiYgISBpc05hTiggaWRQbGFuaWxsYVByb2R1Y2Npb24ucmVjb3Jkc2V0WzBdLmlkUGxhbmlsbGEgKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3MuZm9yRWFjaCggb3BlcmFyaW8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbG9yaWFzOiBwYXJzZUludCggb3BlcmFyaW8uY2Fsb3JpYXMgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwemFfcHJvZHVjaWRhczogcGFyc2VJbnQoIG9wZXJhcmlvLnByb2R1Y2Npb24gKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIG9wZXJhcmlvLmhvcmFJbmljaW8gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7b3BlcmFyaW8uaG9yYUluaWNpb306MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2ZpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIG9wZXJhcmlvLmhvcmFGaW4gKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7b3BlcmFyaW8uaG9yYUZpbn06MDBgKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90cmFiYWphZG9yOiBwYXJzZUludCggb3BlcmFyaW8uaWRPcGVyYXJpbyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcGxhbmlsbGE6IHBhcnNlSW50KCBpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYSApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3R1cm5vOiBwYXJzZUludCggb3BlcmFyaW8uaWRUdXJubyApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1JlY2hhem9zOiBvcGVyYXJpby52ZWNSZWNoYXpvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNPcGVyYXJpb3NYcGxhbmlsbGEucHVzaCggb3AgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY09wZXJhcmlvc1hwbGFuaWxsYSAsICggdHJhYmFqYWRvciAsIGNhbGxiYWNrICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYSA9IG5ldyBSZXF1ZXN0ICggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2NhbG9yaWFzJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuY2Fsb3JpYXMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ3B6YV9wcm9kdWNpZGFzJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IucHphX3Byb2R1Y2lkYXMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2lkX3R1cm5vJyAsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHVybm8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHNfaW5zZXJjaW9uVHJhYmFqYWRvcmVzWFBsYW5pbGxhLmlucHV0ICggJ2hvcmFfaW5pY2lvJyAsIG1zc3FsLlRpbWUgLCB0cmFiYWphZG9yLmhvcmFfaW5pY2lvIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5pbnB1dCAoICdob3JhX2ZpbicgLCBtc3NxbC5UaW1lICwgdHJhYmFqYWRvci5ob3JhX2ZpbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfdHJhYmFqYWRvcicsIG1zc3FsLkludCAsIHRyYWJhamFkb3IuaWRfdHJhYmFqYWRvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwc19pbnNlcmNpb25UcmFiYWphZG9yZXNYUGxhbmlsbGEuaW5wdXQgKCAnaWRfcGxhbmlsbGEnICwgbXNzcWwuSW50ICwgdHJhYmFqYWRvci5pZF9wbGFuaWxsYSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhID0gWyAgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhYmFqYWRvci52ZWNSZWNoYXpvcy5mb3JFYWNoKCByZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlY2hhem9aID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW50aWRhZDogcGFyc2VJbnQoIHJlLmNhbnRpZGFkUmVjaGF6byApICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlwbzogcmUudGlwbyA/IDEgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF9kZWZlY3RvOiBwYXJzZUludCggcmUuaWRSZWNoYXpvICkgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNab25hczogcmUudmVjWm9uYXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUmVjaGF6b3NUcmFiYWphZG9yWHBsYW5pbGxhLnB1c2ggKCByZWNoYXpvWiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnN1bHRhID0gYGluc2VydCBpbnRvIHRyYWJhamFkb3JfeF9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbG9yaWFzICwgcHphX3Byb2R1Y2lkYXMsIGlkX3R1cm5vICwgaG9yYV9pbmljaW8gLCBob3JhX2ZpbiAsIGlkX3RyYWJhamFkb3IgLCBpZF9wbGFuaWxsYSAsIGVzdGFkbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKEBjYWxvcmlhcyAsIEBwemFfcHJvZHVjaWRhcyAsIEBpZF90dXJubyAsIEBob3JhX2luaWNpbyAsIEBob3JhX2ZpbiAsIEBpZF90cmFiYWphZG9yICwgQGlkX3BsYW5pbGxhICwgMSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjbGFyZSBAaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhIGludCA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNsYXJlIEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSBpbnQgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IEBpZF90cmFiYWphZG9yX3hfcGxhbmlsbGEgPSAoIHNlbGVjdCBtYXgoIGlkICkgYXMgaWRUcmFiYWphZG9yWHBsYW5pbGxhIGZyb20gdHJhYmFqYWRvcl94X3BsYW5pbGxhICkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZWNSZWNoYXpvc1RyYWJhamFkb3JYcGxhbmlsbGEuZm9yRWFjaCAoIHJlY2hhem8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhICs9IGBpbnNlcnQgaW50byByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYW50aWRhZCAsIHRpcG8gLCBpZF9kZWZlY3RvICwgaWRfdHJhYmFqYWRvcl94X3BsYW5pbGxhICwgZXN0YWRvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggJHsgcmVjaGF6by5jYW50aWRhZCB9LCAkeyByZWNoYXpvLnRpcG8gfSAsICR7IHJlY2hhem8uaWRfZGVmZWN0byB9ICwgQGlkX3RyYWJhamFkb3JfeF9wbGFuaWxsYSAsMSkgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBAaWRfcmVjaGF6b3NfeF90cmFiYWphZG9yX3lfcGxhbmlsbGEgPSAoc2VsZWN0IG1heChpZCkgZnJvbSByZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSkgOyBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZlY1pvbmFzWHJlY2hhem8gPSBbICBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjaGF6by52ZWNab25hcy5mb3JFYWNoKCB6b25hID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHpvbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbnRpZGFkOiBwYXJzZUludCAoIHpvbmEuY2FudGlkYWQgKSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXRyYTogem9uYS5sZXRyYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWVybzogcGFyc2VJbnQgKCB6b25hLm51bWVybyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjWm9uYXNYcmVjaGF6by5wdXNoICggem9vIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1pvbmFzWHJlY2hhem8uZm9yRWFjaCggem9uYSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN1bHRhICs9IGAgaW5zZXJ0IGludG8gem9uYXNfeF9yZWNoYXpvX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhbnRpZGFkICwgbGV0cmEgLCBudW1lcm8gLCBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoICR7IHpvbmEuY2FudGlkYWQgfSAsICckeyB6b25hLmxldHJhIH0nICwgJHsgem9uYS5udW1lcm8gfSAsIEBpZF9yZWNoYXpvc194X3RyYWJhamFkb3JfeV9wbGFuaWxsYSAsIDEgKSA7IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBzX2luc2VyY2lvblRyYWJhamFkb3Jlc1hQbGFuaWxsYS5xdWVyeSggY29uc3VsdGEsKGVycixyZXN1bHQpPT57IGlmKCBlcnIgKSB7ICBjYWxsYmFjayggZXJyICkgfSBlbHNlIHsgY2FsbGJhY2soKSB9IH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICwgKCBlcnIgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVyciApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVyci5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmVjUGFyYWRhc0RlTWFxdWluYSA9IFsgXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BhcmFkYXNNYXF1aW5hU2VsZWNjaW9uYWRhLmZvckVhY2ggKCBwbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYU1BQyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3JhX2luaWNpbzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc/IGNvbnZpZXJ0ZUhvcmEoIHBtLmRlc2RlUGFyYWRhTWFxdWluYSApIDogbmV3IERhdGUoYDIwMjAtMDItMTVUJHtwbS5kZXNkZVBhcmFkYU1hcXVpbmF9OjAwYCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG9yYV9maW46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnPyBjb252aWVydGVIb3JhKCBwbS5oYXN0YVBhcmFkYU1hcXVpbmEgKSA6IG5ldyBEYXRlKGAyMDIwLTAyLTE1VCR7cG0uaGFzdGFQYXJhZGFNYXF1aW5hfTowMGApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BhcmFkYXNfbWFxdWluYTogcGFyc2VJbnQoIHBtLmlkUGFyYWRhTWFxdWluYSApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkX3BsYW5pbGxhOiBpZFBsYW5pbGxhUHJvZHVjY2lvbi5yZWNvcmRzZXRbMF0uaWRQbGFuaWxsYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVjUGFyYWRhc0RlTWFxdWluYS5wdXNoICggcGFyYU1BQyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc2luY3Jvbm8uZWFjaFNlcmllcyAoIHZlY1BhcmFkYXNEZU1hcXVpbmEgLCAoIFBNICwgY2FsbGJhY2tQTSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hID0gIG5ldyBSZXF1ZXN0ICggdHJhbnNhY2Npb24gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaG9yYV9pbmNpbycgLCBtc3NxbC5UaW1lICwgUE0uaG9yYV9pbmljaW8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdWx0YUluc2VyY2lvblBhcmFkYXNEZU1hcXVpbmEuaW5wdXQgKCAnaG9yYV9maW4nICwgbXNzcWwuVGltZSAsIFBNLmhvcmFfZmluIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BhcmFkYXNfbWFxdWluYScgLCBtc3NxbC5JbnQsUE0uaWRfcGFyYWRhc19tYXF1aW5hIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLmlucHV0ICggJ2lkX3BsYW5pbGxhJyAsIG1zc3FsLkludCAsIFBNLmlkX3BsYW5pbGxhIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3VsdGFJbnNlcmNpb25QYXJhZGFzRGVNYXF1aW5hLnF1ZXJ5IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpbnNlcnQgaW50byBwYXJhZGFzX21hcXVpbmFzX3hfcGxhbmlsbGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggaG9yYV9pbmNpbyAsIGhvcmFfZmluICwgaWRfcGFyYWRhc19tYXF1aW5hICwgaWRfcGxhbmlsbGEgLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIEBob3JhX2luY2lvICwgQGhvcmFfZmluICwgQGlkX3BhcmFkYXNfbWFxdWluYSAsIEBpZF9wbGFuaWxsYSAsIDEgKWAsKCBFUixyZXN1bHRQTSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBFUiApIHsgY2FsbGJhY2tQTSAoIEVSICkgfSBlbHNlIHsgY2FsbGJhY2tQTSAoICApIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAsIGVycm9SID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvUiApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zYWNjaW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiggeyBtZW5zYWplOmVycm9SLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjY2lvbi5jb21taXQgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoICdDb250ZW50LVR5cGUnLCAndGV4dC9ldmVudC1zdHJlYW0nIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ0luc2VyY2lvbiBleGl0b3JhJyB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pIC8vICEgRklOIEZPUiBFQUNIXHJcbiAgICAgICAgICAgICAgICAgICAgfSAvLyEgRklOICBJSUZcclxuICAgICAgICAgICAgICAgIH0gLy8hIEZJTiBERUwgVFJZXHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY2Npb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBtZW5zYWplMiA6ICdFcnJvciBjYXRjaCBGSU5BTCcgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWV0b2RvVHJhbnNhY2Npb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ2VyciBjb21taXQnIClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IClcclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoICdleHByZXNzJyApXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5yb3V0ZXIuZ2V0ICggICcvbGlzdCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdsaXN0YVBsYW50YXMnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgcC5pZCBhcyBpZFBsYW50YSAsIHAubm9tYnJlIGFzIG5vbWJyZVBsYW50YSAsIHAuYmFycmlvIGFzIGJhcnJpb1BsYW50YSAsXHJcbiAgICAgICAgcC5jcCBhcyBjb2RpZ29Qb3N0YWxQbGFudGEgLCBwLmNhbGxlIGFzIGNhbGxlUGxhbnRhICwgcC5hbHR1cmFfY2FsbGUgYXMgYWx0dXJhQ2FsbGVQbGFudGFcclxuICAgICAgICBmcm9tIHBsYW50YXMgcFxyXG4gICAgICAgIHdoZXJlIHAuZXN0YWRvID0gMWBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3BvbnNlICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHJlc3BvbnNlLnJlY29yZHNldCApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZVBsYW50YSAsIGJhcnJpb1BsYW50YSAsIGNvZGlnb1Bvc3RhbFBsYW50YSAsIGNhbGxlUGxhbnRhICwgYWx0dXJhQ2FsbGVQbGFudGEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UGxhbnRhJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVBsYW50YScgLCBWYXJDaGFyICwgbm9tYnJlUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnYmFycmlvUGxhbnRhJyAsIFZhckNoYXIgLCBiYXJyaW9QbGFudGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdjb2RpZ29Qb3N0YWxQbGFudGEnICwgSW50ICwgY29kaWdvUG9zdGFsUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnY2FsbGVQbGFudGEnICwgVmFyQ2hhciAsIGNhbGxlUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnYWx0dXJhQ2FsbGVQbGFudGEnICwgSW50ICwgYWx0dXJhQ2FsbGVQbGFudGEgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHBsYW50YXMgKCBub21icmUgLCBiYXJyaW8gLCBjcCAsIGNhbGxlICwgYWx0dXJhX2NhbGxlICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVQbGFudGEgLCBAYmFycmlvUGxhbnRhICwgQGNvZGlnb1Bvc3RhbFBsYW50YSAsIEBjYWxsZVBsYW50YSAsIEBhbHR1cmFDYWxsZVBsYW50YSAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BsYW50YSBJbnNlcnRhZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBsYW50YSAsIG5vbWJyZVBsYW50YSAsIGJhcnJpb1BsYW50YSAsIGNvZGlnb1Bvc3RhbFBsYW50YSAsIGNhbGxlUGxhbnRhICwgYWx0dXJhQ2FsbGVQbGFudGEgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAndXBkYXRlUGxhbnRhJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVBsYW50YScgLCBWYXJDaGFyICwgbm9tYnJlUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnYmFycmlvUGxhbnRhJyAsIFZhckNoYXIgLCBiYXJyaW9QbGFudGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdjb2RpZ29Qb3N0YWxQbGFudGEnICwgSW50ICwgY29kaWdvUG9zdGFsUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnY2FsbGVQbGFudGEnICwgVmFyQ2hhciAsIGNhbGxlUGxhbnRhIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnYWx0dXJhQ2FsbGVQbGFudGEnICwgSW50ICwgYWx0dXJhQ2FsbGVQbGFudGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBsYW50YScgLCBJbnQgLCBpZFBsYW50YSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHBsYW50YXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlUGxhbnRhICxcclxuICAgICAgICBiYXJyaW8gPSBAYmFycmlvUGxhbnRhICxcclxuICAgICAgICBjcCA9IEBjb2RpZ29Qb3N0YWxQbGFudGEgLFxyXG4gICAgICAgIGNhbGxlID0gQGNhbGxlUGxhbnRhICxcclxuICAgICAgICBhbHR1cmFfY2FsbGUgPSBAYWx0dXJhQ2FsbGVQbGFudGFcclxuICAgICAgICB3aGVyZSBpZCA9IEBpZFBsYW50YWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1BsYW50YSBhY3R1YWxpemFkYSBjb3JyZWN0YW1lbnRlJyAsIHN0YXR1cyA6IDIwMCB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFBsYW50YSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVBsYW50YScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFBsYW50YScgLCBJbnQgLCBpZFBsYW50YSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHBsYW50YXNcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRQbGFudGFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQbGFudGEgZWxpbWluYWRhIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7Um91dGVyfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5yb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICBjb25zdCB7YWJyaXJDb25leGlvbixjZXJyYXJDb25leGlvbn0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgaWQgYXMgaWRUaXBvUHJvY2Vzbywgbm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvXHJcbiAgICAgICAgZnJvbSB0aXBvc19wcm9jZXNvXHJcbiAgICAgICAgd2hlcmUgZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGVycixkYXRvKT0+e1xyXG4gICAgICAgICAgICBpZighZXJyKXtyZXMuanNvbihkYXRvLnJlY29yZHNldCk7IGNlcnJhckNvbmV4aW9uKCkgfSBlbHNlIHsgcmVzLmpzb24oe21lbnNhamU6ZXJyLm1lc3NhZ2V9KTsgY2VycmFyQ29uZXhpb24oKSB9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5yb3V0ZXIucG9zdCgnL3htYXF1aW5hcGllemF0aXBvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3Qge2lkTWFxdWluYSxpZFBpZXphLGlkVGlwb1Byb2Nlc299ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9IHJlcXVpcmUoJ21zc3FsJylcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgcHJvLmlkIGFzIGlkUHJvY2VzbywgcHJvLmRlc2NyaXBjaW9uIGFzIGRlc2NyaXBjaW9uUHJvY2Vzb1xyXG4gICAgICAgIGZyb20gcHJvY2Vzb3MgcHJvXHJcbiAgICAgICAgd2hlcmUgcHJvLmVzdGFkbyA9IDFcclxuICAgICAgICBhbmQgcHJvLmlkX3BpZXphID0gJHtpZFBpZXphfVxyXG4gICAgICAgIGFuZCBwcm8uaWRfbWFxdWluYSA9ICR7aWRNYXF1aW5hfVxyXG4gICAgICAgIGFuZCBwcm8uaWRfdGlwb3NfcHJvY2VzbyA9ICR7aWRUaXBvUHJvY2Vzb31gLFxyXG4gICAgICAgIChlcnIsZGF0byk9PntcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpOyBjZXJyYXJDb25leGlvbigpIH0gZWxzZSB7IHJlcy5qc29uKHttZW5zYWplOmVyci5tZXNzYWdlfSk7IGNlcnJhckNvbmV4aW9uKCkgfVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxucm91dGVyLmdldCAoJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdzZWxlY3RQcm9jZXNvcycgKVxyXG4gICAgY29uc3QgeyBUcmFuc2FjdGlvbiAsIFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIGNvbnN0IG15VHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24gKCBjb25leGlvbiApXHJcbiAgICBteVRyYW5zYWN0aW9uLmJlZ2luICggYXN5bmMgKCBlcnJvclRyYW5zYWMgKSA9PiB7XHJcbiAgICAgICAgaWYgKCBlcnJvclRyYW5zYWMgKSB7XHJcbiAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9yVHJhbnNhYy5tZXNzYWdlIH0gKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgdmVjUHJvY2Vzb3MgPSBbICBdXHJcbiAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggbXlUcmFuc2FjdGlvbiApXHJcbiAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzdFBpZXphWGhzID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0IHAuaWQgYXMgaWRQcm9jZXNvICwgcC5kZXNjcmlwY2lvbiBhcyBkZXNjaXBjaW9uUHJvY2VzbyAsIHAuaWRfcGllemEgYXMgaWRQaWV6YSAsXHJcbiAgICAgICAgICAgIHBpZS5ub21icmUgYXMgbm9tYnJlUGllemEgLCBwLmlkX21hcXVpbmEgYXMgaWRNYXF1aW5hICwgbWFxLm5vbWJyZSBhcyBub21icmVNYXF1aW5hICxcclxuICAgICAgICAgICAgcC5pZF90aXBvc19wcm9jZXNvIGFzIGlkVGlwb1Byb2Nlc28gLCB0cC5ub21icmUgYXMgbm9tYnJlVGlwb1Byb2Nlc29cclxuICAgICAgICAgICAgZnJvbSBwcm9jZXNvcyBwXHJcbiAgICAgICAgICAgIGpvaW4gcGllemFzIHBpZSBvbiBwLmlkX3BpZXphID0gcGllLmlkXHJcbiAgICAgICAgICAgIGpvaW4gbWFxdWluYXMgbWFxIG9uIHAuaWRfbWFxdWluYSA9IG1hcS5pZFxyXG4gICAgICAgICAgICBqb2luIHRpcG9zX3Byb2Nlc28gdHAgb24gcC5pZF90aXBvc19wcm9jZXNvID0gdHAuaWRcclxuICAgICAgICAgICAgd2hlcmUgcC5lc3RhZG8gPSAxYFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICAgICAgaWYgKCByZXNwb25zZSApIHtcclxuICAgICAgICAgICAgICAgIHZlY1Byb2Nlc29zID0gcmVzcG9uc2UucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICB2YXIgaWRQcm9jZXNvcyA9ICcnXHJcbiAgICAgICAgICAgICAgICBpZiAoIEFycmF5LmlzQXJyYXkgKCB2ZWNQcm9jZXNvcyApICApIHtcclxuICAgICAgICAgICAgICAgICAgICB2ZWNQcm9jZXNvcy5mb3JFYWNoICggKCBwICwgaSApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRQcm9jZXNvcyArPSBgICR7cC5pZFByb2Nlc299ICxgXHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaWRQcm9jZXNvcyA9PT0gJycgKSB7IGlkUHJvY2Vzb3MgPSBudWxsIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgeyBpZFByb2Nlc29zID0gaWRQcm9jZXNvcy50cmltICggICkuc3Vic3RyaW5nICggMCAsICBpZFByb2Nlc29zLmxlbmd0aCAtMiApIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICggaWRQcm9jZXNvcyApXHJcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVBpZXphWGhzID0gYHNlbGVjdCBweGguaWQgYXMgaWRQaWV6YXNYaHMgLCBweGguY2FudGlkYWQgYXMgY2FudGlkYWRQaWV6YXNYaHMgLCBweGguZmVfZGVzZGUgYXMgZGVzZGVQaWV6YXNYaHMgLFxyXG4gICAgICAgICAgICAgICAgcHhoLmZlX2hhc3RhIGFzIGhhc3RhUGllemFzWGhzICwgcHhoLmlkX3Byb2Nlc28gYXMgaWRQcm9jZXNvXHJcbiAgICAgICAgICAgICAgICBmcm9tIHBpZXphc194X2hvcmEgcHhoXHJcbiAgICAgICAgICAgICAgICB3aGVyZSBweGguaWRfcHJvY2VzbyBpbiAoJHtpZFByb2Nlc29zfSlgXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHJwelhocyA9IGF3YWl0IG15UmVxdWVzdFBpZXphWGhzLnF1ZXJ5ICggcXVlcnlQaWV6YVhocyApXHJcbiAgICAgICAgICAgICAgICB2YXIgdmVjUGllemFzWGhvcmEgPSBbICBdXHJcbiAgICAgICAgICAgICAgICBpZiAoIHJlc3VscnB6WGhzICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICggdmVjUGllemFzWGhvcmEgKVxyXG4gICAgICAgICAgICAgICAgICAgIHZlY1BpZXphc1hob3JhID0gcmVzdWxycHpYaHMucmVjb3Jkc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cgKCByZXN1bHJwelhocy5yZWNvcmRzZXQgKVxyXG4gICAgICAgICAgICAgICAgICAgIHZlY1Byb2Nlc29zLmZvckVhY2ggKCAoIHAgLCBpICkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLnZlY1BpZXphc1hob3JhID0gWyBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlY1BpZXphc1hob3JhLmZvckVhY2ggKCAoIHB6WGhzICwgaW5kZXggKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIHBhcnNlSW50ICggcC5pZFByb2Nlc28gKSA9PT0gcGFyc2VJbnQgKCBwelhocy5pZFByb2Nlc28gKSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwLnZlY1BpZXphc1hob3JhLnB1c2ggKCBwelhocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24uY29tbWl0ICggIClcclxuICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggdmVjUHJvY2Vzb3MgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH0gKVxyXG59IClcclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc2NyaXBjaW9uUHJvY2VzbyAsIGlkUGllemEgLCBpZE1hcXVpbmEgLCBpZFRpcG9zUHJvY2VzbyAsIHZlY1BpZXphc1hob3JhIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFByb2Nlc28nIClcclxuICAgICAgICBjb25zdCAgeyBUcmFuc2FjdGlvbiAsIFJlcXVlc3QgLERhdGUgLCBJbnQgLCBWYXJDaGFyIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlUcmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbiAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3RQcm9jZXNvID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICBjb25zdCBhc2luY3Jvbm8gPSByZXF1aXJlICggJ2FzeW5jJyApXHJcbiAgICAgICAgbXlUcmFuc2FjdGlvbi5iZWdpbiAoIGFzeW5jICggZXJyb3JUcmFzYWN0aW9ucyApID0+IHtcclxuICAgICAgICAgICAgaWYgKCBlcnJvclRyYXNhY3Rpb25zICkge1xyXG4gICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlcnJvclRyYXNhY3Rpb25zLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdkZXNjcmlwY2lvblByb2Nlc28nICwgVmFyQ2hhciAsICBkZXNjcmlwY2lvblByb2Nlc28gKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkUGllemEnICwgSW50ICwgIGlkUGllemEgKVxyXG4gICAgICAgICAgICBteVJlcXVlc3RQcm9jZXNvLmlucHV0ICggJ2lkTWFxdWluYScgLCBJbnQgLCAgaWRNYXF1aW5hIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFRpcG9zUHJvY2VzbycgLCBJbnQgLCAgaWRUaXBvc1Byb2Nlc28gKVxyXG4gICAgICAgICAgICBjb25zdCBxdWVyeVByb2Nlc29zID0gYGluc2VydCBpbnRvIHByb2Nlc29zICggZGVzY3JpcGNpb24gLCBpZF9waWV6YSAsIGlkX21hcXVpbmEgLCBpZF90aXBvc19wcm9jZXNvICwgZXN0YWRvIClcclxuICAgICAgICAgICAgdmFsdWVzXHJcbiAgICAgICAgICAgICggQGRlc2NyaXBjaW9uUHJvY2VzbyAsIEBpZFBpZXphICwgQGlkTWFxdWluYSAsIEBpZFRpcG9zUHJvY2VzbyAsIDEgKSA7XHJcbiAgICAgICAgICAgIGRlY2xhcmUgQGlkUHJvY2VzbyBpbnRcclxuICAgICAgICAgICAgc2V0IEBpZFByb2Nlc28gPSAoIHNlbGVjdCB0b3AgMSBtYXggKCBpZCApIGZyb20gcHJvY2Vzb3MgKVxyXG4gICAgICAgICAgICBzZWxlY3QgQGlkUHJvY2VzbyBhcyBpZFByb2Nlc29gXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlUHJvY2Vzb3MgPSBhd2FpdCBteVJlcXVlc3RQcm9jZXNvLnF1ZXJ5ICggcXVlcnlQcm9jZXNvcyApXHJcbiAgICAgICAgICAgIHZhciBpZFByb2Nlc29cclxuICAgICAgICAgICAgaWYgKCByZXNwb25zZVByb2Nlc29zICkge1xyXG4gICAgICAgICAgICAgICAgaWRQcm9jZXNvID0gcmVzcG9uc2VQcm9jZXNvcy5yZWNvcmRzZXRzWzBdWzBdLmlkUHJvY2Vzb1xyXG4gICAgICAgICAgICAgICAgaWYgKCBBcnJheS5pc0FycmF5ICggdmVjUGllemFzWGhvcmEgKSAmJiB2ZWNQaWV6YXNYaG9yYS5sZW5ndGggPiAwICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzaW5jcm9uby5lYWNoU2VyaWVzICggdmVjUGllemFzWGhvcmEgLCAoIHBpZXphWGhzICwgY2FsbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG15UmVxdWVzdFBpZVhocyA9IG5ldyBSZXF1ZXN0ICggbXlUcmFuc2FjdGlvbiApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdjYW50aWRhZFBpZXphc1hocycgLCBJbnQgLCBwaWV6YVhocy5jYW50aWRhZFBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdkZXNkZVBpZXphc1hocycgLCBEYXRlICwgcGllemFYaHMuZGVzZGVQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnaGFzdGFQaWV6YXNYaHMnICwgRGF0ZSAsIHBpZXphWGhzLmhhc3RhUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2lkUHJvY2VzbycgLCBJbnQgLCBwYXJzZUludCAoIGlkUHJvY2VzbyApIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVlcnlQaWV4aHMgPSBgaW5zZXJ0IGludG8gcGllemFzX3hfaG9yYSAoIGNhbnRpZGFkICwgZmVfZGVzZGUgLCBmZV9oYXN0YSAsIGlkX3Byb2Nlc28gLCBlc3RhZG8gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgKCBAY2FudGlkYWRQaWV6YXNYaHMgLCBAZGVzZGVQaWV6YXNYaHMgLCBAaGFzdGFQaWV6YXNYaHMgLCBAaWRQcm9jZXNvICwgMSApYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMucXVlcnkgKCBxdWVyeVBpZXhocyAsICggZXJyb3IgLCByZXN1bHQgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVycm9yICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrICggZXJyb3IgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IClcclxuICAgICAgICAgICAgICAgICAgICB9ICwgKCBlcnJvckNhbGJhY2sgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb3JDYWxiYWNrICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGVycm9yQ2FsYmFjay5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlUcmFuc2FjdGlvbi5jb21taXQgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1Byb2Nlc28gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IClcclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvdXBkYXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFByb2Nlc28gLCBkZXNjcmlwY2lvblByb2Nlc28gLCBpZFBpZXphICwgaWRNYXF1aW5hICwgaWRUaXBvc1Byb2Nlc28gLCB2ZWNQaWV6YXNYaG9yYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICdpbnNlcnRQcm9jZXNvJyApXHJcbiAgICAgICAgY29uc3QgIHsgVHJhbnNhY3Rpb24gLCBSZXF1ZXN0ICxEYXRlICwgSW50ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15VHJhbnNhY3Rpb24gPSBuZXcgVHJhbnNhY3Rpb24gKCBjb25leGlvbiApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0UHJvY2VzbyA9IG5ldyBSZXF1ZXN0ICggbXlUcmFuc2FjdGlvbiApXHJcbiAgICAgICAgY29uc3QgYXNpbmNyb25vID0gcmVxdWlyZSAoICdhc3luYycgKVxyXG4gICAgICAgIG15VHJhbnNhY3Rpb24uYmVnaW4gKCBhc3luYyAoIGVycm9yVHJhc2FjdGlvbnMgKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICggZXJyb3JUcmFzYWN0aW9ucyApIHtcclxuICAgICAgICAgICAgICAgIG15VHJhbnNhY3Rpb24ucm9sbGJhY2sgKCAgKVxyXG4gICAgICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JUcmFzYWN0aW9ucy5tZXNzYWdlIH0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnZGVzY3JpcGNpb25Qcm9jZXNvJyAsIFZhckNoYXIgLCAgZGVzY3JpcGNpb25Qcm9jZXNvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFBpZXphJyAsIEludCAsICBpZFBpZXphIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZE1hcXVpbmEnICwgSW50ICwgIGlkTWFxdWluYSApXHJcbiAgICAgICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRUaXBvc1Byb2Nlc28nICwgSW50ICwgIGlkVGlwb3NQcm9jZXNvIClcclxuICAgICAgICAgICAgbXlSZXF1ZXN0UHJvY2Vzby5pbnB1dCAoICdpZFByb2Nlc28nICwgSW50ICwgIGlkUHJvY2VzbyApXHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UHJvY2Vzb3MgPSBgdXBkYXRlIHByb2Nlc29zXHJcbiAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICBkZXNjcmlwY2lvbiA9IEBkZXNjcmlwY2lvblByb2Nlc28gLFxyXG4gICAgICAgICAgICBpZF9waWV6YSA9IEBpZFBpZXphICxcclxuICAgICAgICAgICAgaWRfbWFxdWluYSA9IEBpZE1hcXVpbmEgLFxyXG4gICAgICAgICAgICBpZF90aXBvc19wcm9jZXNvID0gQGlkVGlwb3NQcm9jZXNvXHJcbiAgICAgICAgICAgIHdoZXJlIGlkID0gQGlkUHJvY2VzbyA7IGRlbGV0ZSBwaWV6YXNfeF9ob3JhIHdoZXJlIGlkX3Byb2Nlc28gPSBAaWRQcm9jZXNvYFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVByb2Nlc29zID0gYXdhaXQgbXlSZXF1ZXN0UHJvY2Vzby5xdWVyeSAoIHF1ZXJ5UHJvY2Vzb3MgKVxyXG4gICAgICAgICAgICBpZiAoIHJlc3BvbnNlUHJvY2Vzb3MgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIEFycmF5LmlzQXJyYXkgKCB2ZWNQaWV6YXNYaG9yYSApICYmIHZlY1BpZXphc1hob3JhLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNpbmNyb25vLmVhY2hTZXJpZXMgKCB2ZWNQaWV6YXNYaG9yYSAsICggcGllemFYaHMgLCBjYWxsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXlSZXF1ZXN0UGllWGhzID0gbmV3IFJlcXVlc3QgKCBteVRyYW5zYWN0aW9uIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2NhbnRpZGFkUGllemFzWGhzJyAsIEludCAsIHBpZXphWGhzLmNhbnRpZGFkUGllemFzWGhzIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlSZXF1ZXN0UGllWGhzLmlucHV0ICggJ2Rlc2RlUGllemFzWGhzJyAsIERhdGUgLCBwaWV6YVhocy5kZXNkZVBpZXphc1hocyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5pbnB1dCAoICdoYXN0YVBpZXphc1hocycgLCBEYXRlICwgcGllemFYaHMuaGFzdGFQaWV6YXNYaHMgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteVJlcXVlc3RQaWVYaHMuaW5wdXQgKCAnaWRQcm9jZXNvJyAsIEludCAsIHBhcnNlSW50ICggaWRQcm9jZXNvICkgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVBpZXhocyA9IGBpbnNlcnQgaW50byBwaWV6YXNfeF9ob3JhICggY2FudGlkYWQgLCBmZV9kZXNkZSAsIGZlX2hhc3RhICwgaWRfcHJvY2VzbyAsIGVzdGFkbyApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyAoIEBjYW50aWRhZFBpZXphc1hocyAsIEBkZXNkZVBpZXphc1hocyAsIEBoYXN0YVBpZXphc1hocyAsIEBpZFByb2Nlc28gLCAxIClgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15UmVxdWVzdFBpZVhocy5xdWVyeSAoIHF1ZXJ5UGlleGhzICwgKCBlcnJvciAsIHJlc3VsdCApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZXJyb3IgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgKCBlcnJvciApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gLCAoIGVycm9yQ2FsYmFjayApID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBlcnJvckNhbGJhY2sgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLnJvbGxiYWNrICggIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZXJyb3JDYWxiYWNrLm1lc3NhZ2UgfSApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteVRyYW5zYWN0aW9uLmNvbW1pdCAoICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHJvY2VzbyBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgbXlUcmFuc2FjdGlvbi5yb2xsYmFjayAoICApXHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQcm9jZXNvIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVByb2Nlc28nIClcclxuICAgICAgICBjb25zdCAgeyAgUmVxdWVzdCAgLCBJbnQgIH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0UHJvY2VzbyA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdFByb2Nlc28uaW5wdXQgKCAnaWRQcm9jZXNvJyAsIEludCAsICBpZFByb2Nlc28gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5UHJvY2Vzb3MgPSBgdXBkYXRlIHByb2Nlc29zXHJcbiAgICAgICAgc2V0XHJcbiAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkUHJvY2VzbyBgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VQcm9jZXNvcyA9IGF3YWl0IG15UmVxdWVzdFByb2Nlc28ucXVlcnkgKCBxdWVyeVByb2Nlc29zIClcclxuICAgICAgICBpZiAoIHJlc3BvbnNlUHJvY2Vzb3MgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1Byb2Nlc29zIGVsaW1pbmFkbyBjb3JyZWN0YW1lbnRlJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICggJ2V4cHJlc3MnIClcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2xpc3RhclB1ZXN0b3MnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBzZWxlY3QgaWQgYXMgaWRQdWVzdG8gLCBub21icmUgYXMgbm9tYnJlUHVlc3RvIGZyb20gcHVlc3RvcyB3aGVyZSBlc3RhZG8gPSAxYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoICByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggcmVzdWx0LnJlY29yZHNldCApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+e1xyXG4gICAgY29uc3QgeyBub21icmVQdWVzdG8gfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnaW5zZXJ0UHVlc3RvJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVB1ZXN0bycgLCBWYXJDaGFyICwgbm9tYnJlUHVlc3RvIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byBwdWVzdG9zICggbm9tYnJlICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVQdWVzdG8gLCAxIClgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdQdWVzdG8gaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+e1xyXG4gICAgY29uc3QgeyBpZFB1ZXN0byAsIG5vbWJyZVB1ZXN0byB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVQdWVzdG8nIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgLCBEYXRlICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVB1ZXN0bycgLCBWYXJDaGFyICwgbm9tYnJlUHVlc3RvIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQdWVzdG8nICwgSW50ICwgaWRQdWVzdG8gKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSBwdWVzdG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub21icmUgPSBAbm9tYnJlUHVlc3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIGlkID0gQGlkUHVlc3RvYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnUHVlc3RvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxucm91dGVyLnB1dCAoICcvZGVsZXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT57XHJcbiAgICBjb25zdCB7IGlkUHVlc3RvIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVB1ZXN0bycgKVxyXG4gICAgICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkUHVlc3RvJyAsIEludCAsIGlkUHVlc3RvIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgcHVlc3Rvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvID0gMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGVyZSBpZCA9IEBpZFB1ZXN0b2BcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1B1ZXN0byBlbGltaW5hZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXIiLCJjb25zdCB7IFJvdXRlciB9ID0gcmVxdWlyZSAoICdleHByZXNzJyApXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5yb3V0ZXIucG9zdCAoICcvcmVjaGF6b3NQcmltZXJhVnVlbHRhJyAgLCBhc3luYyAoIHJlcSwgcmVzICkgPT57XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICBjb25zdCB7IGZlY2hhRnVuZGljaW9uRGVzZGUgLCBmZWNoYUZ1bmRpY2lvbkhhc3RhICwgaWRNYXF1aW5hICwgaWRQaWV6YSAsIGlkTW9sZGUgfSA9IHJlcS5ib2R5XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IG1zc3FsID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnY29uc3VsdGFSZXBvcnRlUmVjaGF6b3MnIClcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnZmVjaGFGdW5kaWNpb25EZXNkZScgLCBtc3NxbC5EYXRlICwgZmVjaGFGdW5kaWNpb25EZXNkZSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2ZlY2hhRnVuZGljaW9uSGFzdGEnICwgbXNzcWwuRGF0ZSAsIGZlY2hhRnVuZGljaW9uSGFzdGEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE1hcXVpbmEnICwgbXNzcWwuSW50ICwgaWRNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRQaWV6YScgLCBtc3NxbC5JbnQgLCBpZFBpZXphIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRNb2xkZScgLCBtc3NxbC5JbnQgLCBpZE1vbGRlIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoICdwYV9yZWNoYXpvc1RvdGFsZXMnIClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgc3RhdHVzIDogNDAzICwgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wb3N0ICgnL3BhcmFkYXNNYXF1aW5hJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7aWRBcmVhICwgZmVjaGFGdW5kaWNpb25EZXNkZSAsIGZlY2hhRnVuZGljaW9uSGFzdGF9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgncmVwb3J0ZVBhcmFkYXNNYXF1aW5hJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQXJlYScgLCBtc3NxbC5JbnQgLCBpZEFyZWEpXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdmZWNoYUZ1bmRpY2lvbkRlc2RlJyAsIG1zc3FsLkRhdGUgLCBmZWNoYUZ1bmRpY2lvbkRlc2RlKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZmVjaGFGdW5kaWNpb25IYXN0YScgLCBtc3NxbC5EYXRlICwgZmVjaGFGdW5kaWNpb25IYXN0YSlcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSgncGFfcmVwb3J0ZVBhcmFkYXNNYXF1aW5hJylcclxuICAgICAgICBpZihyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuanNvbih7bWVuc2FqZSA6IGUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0gKVxyXG5cclxucm91dGVyLnBvc3QgKCcvZGV0YWxsZVBhcmFNYXF1aW5hWG1hcXVpbmEnICwgYXN5bmMgKHJlcSxyZXMpID0+IHtcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgY29uc3QgeyBmZWNoYURlc2RlRnVuZGljaW9uICwgZmVjaGFIYXN0YUZ1bmRpY2lvbiAsIG5vbWJyZU1hcXVpbmEsIGlkQXJlYSB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnY29uc3VsdGFEZXRhbGxlUGFyZGFNYXF1aW5hJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgbXNzcWwuUmVxdWVzdChjb25leGlvbilcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2ZlY2hhRGVzZGVGdW5kaWNpb24nICwgbXNzcWwuRGF0ZSAsIGZlY2hhRGVzZGVGdW5kaWNpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZmVjaGFIYXN0YUZ1bmRpY2lvbicgLCBtc3NxbC5EYXRlICwgZmVjaGFIYXN0YUZ1bmRpY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdub21icmVNYXF1aW5hJyAsIG1zc3FsLlZhckNoYXIgLCBub21icmVNYXF1aW5hIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2lkQXJlYScgLCBtc3NxbC5JbnQgLCBpZEFyZWEgKVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5leGVjdXRlICgncGFfZGV0YWxsZVBhcmFkYU1hcXVpbmEnKVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICgpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLmpzb24oe3N0YXR1cyA6IDQwMyAsIG1lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5yb3V0ZXIucG9zdCAoJy9wYXJhZGFzTWFxdWluYVhwbScgLCBhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7IGZlY2hhRGVzZGVGdW5kaWNpb24gLCBmZWNoYUhhc3RhRnVuZGljaW9uICB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnY29uc3VsdGFQYXJkYU1hcXVpbmFYcG0nKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBtc3NxbC5SZXF1ZXN0KGNvbmV4aW9uKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnZmVjaGFEZXNkZUZ1bmRpY2lvbicgLCBtc3NxbC5EYXRlICwgZmVjaGFEZXNkZUZ1bmRpY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdmZWNoYUhhc3RhRnVuZGljaW9uJyAsIG1zc3FsLkRhdGUgLCBmZWNoYUhhc3RhRnVuZGljaW9uIClcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QuZXhlY3V0ZSAoJ3BhX3JlcG9ydGVQTScpXHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MKClcclxuICAgICAgICByZXMuanNvbih7c3RhdHVzIDogNDAzICwgbWVuc2FqZSA6IGUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcbnJvdXRlci5wb3N0ICgnL2RldGFsbGVQYXJhTWFxdWluYVhwbScgLCBhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBjb25zdCB7IGZlY2hhRGVzZGVGdW5kaWNpb24gLCBmZWNoYUhhc3RhRnVuZGljaW9uICwgbm9tYnJlUGFyYWRhTWFxdWluYSB9ID0gcmVxLmJvZHlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbXNzcWwgPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCgnY29uc3VsdGFEZXRhbGxlUGFyZGFNYXF1aW5hWHBtMicpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IG1zc3FsLlJlcXVlc3QoY29uZXhpb24pXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0KCdmZWNoYURlc2RlRnVuZGljaW9uJyAsIG1zc3FsLkRhdGUgLCBmZWNoYURlc2RlRnVuZGljaW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQoJ2ZlY2hhSGFzdGFGdW5kaWNpb24nICwgbXNzcWwuRGF0ZSAsIGZlY2hhSGFzdGFGdW5kaWNpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCgnbm9tYnJlUGFyYWRhTWFxdWluYScgLCBtc3NxbC5WYXJDaGFyICwgbm9tYnJlUGFyYWRhTWFxdWluYSApXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LmV4ZWN1dGUgKCdwYV9kZXRhbGxlUGFyYWRhTWFxdWluYTInKVxyXG4gICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICgpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHJlc3VsdC5yZWNvcmRzZXQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCgpXHJcbiAgICAgICAgcmVzLmpzb24oe3N0YXR1cyA6IDQwMyAsIG1lbnNhamUgOiBlLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICggJ2V4cHJlc3MnIClcclxuY29uc3Qgcm91dGVyID0gUm91dGVyICggIClcclxuXHJcbnJvdXRlci5nZXQgKCAgJy9saXN0JyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2xpc3RhVGlwb3NNYXF1aW5hJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0IHRtLmlkIGFzIGlkVGlwb01hcXVpbmEgLCB0bS5ub21icmUgYXMgbm9tYnJlVGlwb01hcXVpbmEgLCB0bS5pZF9vcGVyYWNpb24gYXMgaWRPcGVyYWNpb24gLFxyXG4gICAgICAgIG8ubm9tYnJlIGFzIG5vbWJyZU9wZXJhY2lvblxyXG4gICAgICAgIGZyb20gdGlwb3NfbWFxdWluYSB0bVxyXG4gICAgICAgIGpvaW4gb3BlcmFjaW9uZXMgbyBvbiB0bS5pZF9vcGVyYWNpb24gPSBvLmlkXHJcbiAgICAgICAgd2hlcmUgdG0uZXN0YWRvID0gMWBcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3BvbnNlICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHJlc3BvbnNlLnJlY29yZHNldCApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucG9zdCAoICcvaW5zZXJ0JywgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZVRpcG9NYXF1aW5hICAsIGlkT3BlcmFjaW9uIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFRpcG9NYXF1aW5hJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVRpcG9NYXF1aW5hJyAsIFZhckNoYXIgLCBub21icmVUaXBvTWFxdWluYSApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkT3BlcmFjaW9uJyAsIEludCAsIGlkT3BlcmFjaW9uIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGBpbnNlcnQgaW50byB0aXBvc19tYXF1aW5hICggbm9tYnJlICwgaWRfb3BlcmFjaW9uICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXNcclxuICAgICAgICAoIEBub21icmVUaXBvTWFxdWluYSAsIEBpZE9wZXJhY2lvbiAsIDEgKWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgbWFxdWluYSBJbnNlcnRhZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRpcG9NYXF1aW5hICwgbm9tYnJlVGlwb01hcXVpbmEgLCBpZE9wZXJhY2lvbiB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIFZhckNoYXIgLCBJbnQgfSA9IHJlcXVpcmUgKCAnbXNzcWwnIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVUaXBvTWFxdWluYScgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdub21icmVUaXBvTWFxdWluYScgLCBWYXJDaGFyICwgbm9tYnJlVGlwb01hcXVpbmEgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZE9wZXJhY2lvbicgLCBJbnQgLCBpZE9wZXJhY2lvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hcXVpbmEnICwgSW50ICwgaWRUaXBvTWFxdWluYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHRpcG9zX21hcXVpbmFcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlVGlwb01hcXVpbmEgLFxyXG4gICAgICAgIGlkX29wZXJhY2lvbiA9IEBpZE9wZXJhY2lvblxyXG4gICAgICAgIHdoZXJlIGlkID0gQGlkVGlwb01hcXVpbmFgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIG1hcXVpbmEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgY2VycmFyQ29uZXhpb25QT09MICggKVxyXG4gICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRUaXBvTWFxdWluYSB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCAsIEludCB9ID0gcmVxdWlyZSAoICdtc3NxbCcgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVRpcG9NYXF1aW5hJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVGlwb01hcXVpbmEnICwgSW50ICwgaWRUaXBvTWFxdWluYSApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgdXBkYXRlIHRpcG9zX21hcXVpbmFcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRUaXBvTWFxdWluYWBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgbWFxdWluYSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSAsIHN0YXR1cyA6IDQwMyB9IClcclxuICAgIH1cclxufSApXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHsgUm91dGVyIH0gPSByZXF1aXJlICgnZXhwcmVzcycpXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIgKCApXHJcblxyXG5cclxucm91dGVyLmdldCAoICcvbGlzdCcgLCBhc3luYyAgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnY29uc3VsdGFMaXN0YUNsaWVudGVzJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlICggJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgc2VsZWN0IGlkIGFzIGlkVGlwb01hdGVyaWFsICwgbm9tYnJlIGFzIG5vbWJyZVRpcG9NYXRlcmlhbFxyXG4gICAgICAgIGZyb20gdGlwb3NfbWF0ZXJpYWxcclxuICAgICAgICB3aGVyZSBlc3RhZG8gPSAxYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCByZXN1bHQucmVjb3Jkc2V0IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wb3N0ICggJy9pbnNlcnQnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IG5vbWJyZU1hdGVyaWFsIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFRpcG9NYXRyaWFsJyApXHJcbiAgICAgICAgY29uc3QgeyBSZXF1ZXN0ICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoICdtc3NxbCcpXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZU1hdGVyaWFsJyAsIFZhckNoYXIgLCBub21icmVNYXRlcmlhbCAgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYGluc2VydCBpbnRvIHRpcG9zX21hdGVyaWFsICggbm9tYnJlICwgZXN0YWRvIClcclxuICAgICAgICB2YWx1ZXMgKCBAbm9tYnJlTWF0ZXJpYWwgLCAxICkgIGBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RpcG8gZGUgTWF0ZXJpYWwgaW5zZXJ0YWRvIGNvcnJlY3RhbWVudGUgJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL3VwZGF0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRUaXBvTWF0ZXJpYWwgICwgIG5vbWJyZVRpcG9NYXRlcmlhbCB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IHsgYWJyaXJDb25leGlvblBPT0wgLCBjZXJyYXJDb25leGlvblBPT0wgfSA9IHJlcXVpcmUgKCAnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInIClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29uZXhpb24gPSBhd2FpdCBhYnJpckNvbmV4aW9uUE9PTCAoICd1cGRhdGVUaXBvTWF0ZXJpYWwnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnbm9tYnJlVGlwb01hdGVyaWFsJyAsIFZhckNoYXIgLCBub21icmVUaXBvTWF0ZXJpYWwgIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWF0ZXJpYWwnICwgSW50ICwgaWRUaXBvTWF0ZXJpYWwgIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWF0ZXJpYWxcclxuICAgICAgICBzZXRcclxuICAgICAgICBub21icmUgPSBAbm9tYnJlVGlwb01hdGVyaWFsXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRUaXBvTWF0ZXJpYWxgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIE1hdGVyaWFsIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUgJyB9IClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoIGUgKSB7XHJcbiAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6IGUubWVzc2FnZSB9IClcclxuICAgIH1cclxufSApXHJcbnJvdXRlci5wdXQgKCAnL2RlbGV0ZScgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRUaXBvTWF0ZXJpYWwgfSA9IHJlcS5ib2R5XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb25QT09MICwgY2VycmFyQ29uZXhpb25QT09MIH0gPSByZXF1aXJlICggJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJyApXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNvbmV4aW9uID0gYXdhaXQgYWJyaXJDb25leGlvblBPT0wgKCAnZGVsZXRUaXBvTWF0ZXJpYWwnIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBWYXJDaGFyICwgSW50IH0gPSByZXF1aXJlICggJ21zc3FsJylcclxuICAgICAgICBjb25zdCBteVJlcXVlc3QgPSBuZXcgUmVxdWVzdCAoIGNvbmV4aW9uIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaWRUaXBvTWF0ZXJpYWwnICwgSW50ICwgaWRUaXBvTWF0ZXJpYWwgIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdGlwb3NfbWF0ZXJpYWxcclxuICAgICAgICBzZXRcclxuICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgd2hlcmUgaWQgPSBAaWRUaXBvTWF0ZXJpYWxgXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbXlSZXF1ZXN0LnF1ZXJ5ICggcXVlcnkgKVxyXG4gICAgICAgIGlmICggcmVzdWx0ICkge1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgICAgICByZXMuanNvbiAoIHsgbWVuc2FqZSA6ICdUaXBvIGRlIE1hdGVyaWFsIGVsaW1pbmFkbyAgY29ycmVjdGFtZW50ZSAnIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3QgeyBSb3V0ZXIgfSA9IHJlcXVpcmUoJ2V4cHJlc3MnKVxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxyXG5cclxucm91dGVyLmdldCgnLycsIGFzeW5jICggcmVxLCByZXMgKSA9PiB7XHJcbiAgICBjb25zdCB7IGFicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb24gfSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGF3YWl0IGFicmlyQ29uZXhpb24oKVxyXG4gICAgY29uc3QgeyBSZXF1ZXN0IH0gPSByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBjb25zdCBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KCdzZWxlY3QgaWQgYXMgaWRUaXBvUHJvY2Vzbywgbm9tYnJlIGFzIG5vbWJyZVRpcG9Qcm9jZXNvIGZyb20gdGlwb3NfcHJvY2VzbyB3aGVyZSBlc3RhZG8gPSAxICcgLCAoZSxyZXN1bHQpPT57XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb24oKVxyXG4gICAgICAgICAgICByZXMuanNvbihyZXN1bHQucmVjb3Jkc2V0KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcbnJvdXRlci5wb3N0KCcvJywgYXN5bmMgKCByZXEsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgaWRQaWV6YSwgaWRNYXF1aW5hIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9uIH0gPSByZXF1aXJlKCcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIGNvbnN0IHsgUmVxdWVzdCB9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgY29uc3QgY29uc3VsdGEgPSBuZXcgUmVxdWVzdCgpXHJcbiAgICBjb25zdWx0YS5xdWVyeShgc2VsZWN0IHRwLmlkIGFzIGlkVGlwb1Byb2Nlc28sIHRwLm5vbWJyZSBhcyBub21icmVUaXBvUHJvY2VzbyBmcm9tIHRpcG9zX3Byb2Nlc28gdHBcclxuICAgIGpvaW4gcHJvY2Vzb3MgcCBvbiB0cC5pZCA9IHAuaWRfdGlwb3NfcHJvY2VzbyB3aGVyZSBwLmlkX21hcXVpbmEgPSAke2lkTWFxdWluYX0gYW5kIHAuaWRfcGllemEgPSAke2lkUGllemF9IGFuZCB0cC5lc3RhZG8gPSAxYCwgKGUscmVzdWx0KT0+e1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBjZXJyYXJDb25leGlvbigpXHJcbiAgICAgICAgICAgIHJlcy5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uKClcclxuICAgICAgICAgICAgcmVzLmpzb24ocmVzdWx0LnJlY29yZHNldClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyIiwiY29uc3Qge1JvdXRlcn0gPSByZXF1aXJlKCdleHByZXNzJylcclxuXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlciAoICApXHJcblxyXG5yb3V0ZXIuZ2V0ICggJy8nICwgYXN5bmMgKHJlcSxyZXMpID0+IHtcclxuICAgIGNvbnN0IHthYnJpckNvbmV4aW9uLGNlcnJhckNvbmV4aW9ufSA9IHJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvc3FsU2VydmVyJylcclxuICAgIGNvbnN0IHtSZXF1ZXN0fSA9ICByZXF1aXJlKCdtc3NxbCcpXHJcbiAgICBhd2FpdCBhYnJpckNvbmV4aW9uKClcclxuICAgIHZhciBjb25zdWx0YSA9IG5ldyBSZXF1ZXN0KClcclxuICAgIGNvbnN1bHRhLnF1ZXJ5KFxyXG4gICAgICAgIGBzZWxlY3QgdC5pZCBhcyBpZFRyYWJhamFkb3IsIHQubm9tYnJlIGFzIG5vbWJyZVRyYWJhamFkb3IsIHQuYXBlbGxpZG8gYXMgYXBlbGxpZG9UcmFiYWphZG9yLFxyXG4gICAgICAgIHQuZl9uYWNpbWllbnRvIGFzIG5hY2ltaWVudG9UcmFiYWphZG9yLCB0LmZfaW5ncmVzbyBhcyBpbmdyZXNvVHJhYmFqYWRvcixcclxuICAgICAgICB0LmlkX3B1ZXN0byBhcyBpZFB1ZXN0bywgcC5ub21icmUgYXMgbm9tYnJlUHVlc3RvXHJcbiAgICAgICAgZnJvbSB0cmFiYWphZG9yZXMgdFxyXG4gICAgICAgIGpvaW4gcHVlc3RvcyBwIG9uIHQuaWRfcHVlc3RvPXAuaWRcclxuICAgICAgICB3aGVyZSB0LmVzdGFkbyA9IDFgLFxyXG4gICAgICAgICggZXJyICwgZGF0byApID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7cmVzLmpzb24oZGF0by5yZWNvcmRzZXQpO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgICAgIGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pO2NlcnJhckNvbmV4aW9uKCl9XHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59IClcclxucm91dGVyLnBvc3QgKCAnL2luc2VydCcgLCBhc3luYyAoIHJlcSAsIHJlcyApID0+IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlVHJhYmFqYWRvciAsIGFwZWxsaWRvVHJhYmFqYWRvciAsIG5hY2ltaWVudG9UcmFiYWphZG9yICwgaW5ncmVzb1RyYWJhamFkb3IgLCBpZFB1ZXN0byB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IE1vbWVudCA9IHJlcXVpcmUgICggJ21vbWVudCcgKVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2luc2VydFRyYWJhamFkb3InIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgLCBEYXRlICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVRyYWJhamFkb3InICwgVmFyQ2hhciAsIG5vbWJyZVRyYWJhamFkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdhcGVsbGlkb1RyYWJhamFkb3InICwgVmFyQ2hhciAsIGFwZWxsaWRvVHJhYmFqYWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25hY2ltaWVudG9UcmFiYWphZG9yJyAsIERhdGUgLCAgbmFjaW1pZW50b1RyYWJhamFkb3IgIClcclxuICAgICAgICBteVJlcXVlc3QuaW5wdXQgKCAnaW5ncmVzb1RyYWJhamFkb3InICwgRGF0ZSAsICBpbmdyZXNvVHJhYmFqYWRvciAgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFB1ZXN0bycgLCBJbnQgLCBpZFB1ZXN0byApXHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBgc2V0IGRhdGVmb3JtYXQgZG15IDsgaW5zZXJ0IGludG8gdHJhYmFqYWRvcmVzICggbm9tYnJlICwgYXBlbGxpZG8gLCBmX25hY2ltaWVudG8gLCBmX2luZ3Jlc28gLCBpZF9wdWVzdG8gLCBlc3RhZG8gKVxyXG4gICAgICAgIHZhbHVlc1xyXG4gICAgICAgICggQG5vbWJyZVRyYWJhamFkb3IgLCBAYXBlbGxpZG9UcmFiYWphZG9yICwgQG5hY2ltaWVudG9UcmFiYWphZG9yICwgQGluZ3Jlc29UcmFiYWphZG9yICwgQGlkUHVlc3RvICwgMSApYFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG15UmVxdWVzdC5xdWVyeSAoIHF1ZXJ5IClcclxuICAgICAgICBpZiAoIHJlc3VsdCApIHtcclxuICAgICAgICAgICAgY2VycmFyQ29uZXhpb25QT09MICggIClcclxuICAgICAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiAnVHJhYmFqYWRvciBpbnNlcnRhZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5cclxucm91dGVyLnB1dCAoICcvdXBkYXRlJyAsIGFzeW5jICggcmVxICwgcmVzICkgPT4ge1xyXG4gICAgY29uc3QgeyBpZFRyYWJhamFkb3IgLCBub21icmVUcmFiYWphZG9yICwgYXBlbGxpZG9UcmFiYWphZG9yICwgbmFjaW1pZW50b1RyYWJhamFkb3IgLCBpbmdyZXNvVHJhYmFqYWRvciAsIGlkUHVlc3RvIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ3VwZGF0ZVRyYWJhamFkb3InIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgLCBEYXRlICwgVmFyQ2hhciB9ID0gcmVxdWlyZSAoJ21zc3FsJyApXHJcbiAgICAgICAgY29uc3QgbXlSZXF1ZXN0ID0gbmV3IFJlcXVlc3QgKCBjb25leGlvbiApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25vbWJyZVRyYWJhamFkb3InICwgVmFyQ2hhciAsIG5vbWJyZVRyYWJhamFkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdhcGVsbGlkb1RyYWJhamFkb3InICwgVmFyQ2hhciAsIGFwZWxsaWRvVHJhYmFqYWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ25hY2ltaWVudG9UcmFiYWphZG9yJyAsIERhdGUgLCBuYWNpbWllbnRvVHJhYmFqYWRvciApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2luZ3Jlc29UcmFiYWphZG9yJyAsIERhdGUgLCAgaW5ncmVzb1RyYWJhamFkb3IgKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFB1ZXN0bycgLCBJbnQgLCBpZFB1ZXN0byApXHJcbiAgICAgICAgbXlSZXF1ZXN0LmlucHV0ICggJ2lkVHJhYmFqYWRvcicgLCBJbnQgLCBpZFRyYWJhamFkb3IgKVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYHVwZGF0ZSB0cmFiYWphZG9yZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vbWJyZSA9IEBub21icmVUcmFiYWphZG9yICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG8gPSBAYXBlbGxpZG9UcmFiYWphZG9yICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZl9uYWNpbWllbnRvID0gQG5hY2ltaWVudG9UcmFiYWphZG9yICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZl9pbmdyZXNvID0gQGluZ3Jlc29UcmFiYWphZG9yICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRfcHVlc3RvID0gQGlkUHVlc3RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIGlkID0gQGlkVHJhYmFqYWRvcmBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RyYWJhamFkb3IgYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZScgLCBzdGF0dXMgOiAyMDAgfSApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKCBlICkge1xyXG4gICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgcmVzLmpzb24gKCB7IG1lbnNhamUgOiBlLm1lc3NhZ2UgLCBzdGF0dXMgOiA0MDMgfSApXHJcbiAgICB9XHJcbn0gKVxyXG5yb3V0ZXIucHV0ICggJy9kZWxldGUnICwgYXN5bmMgKCByZXEgLCByZXMgKSA9PntcclxuICAgIGNvbnN0IHsgaWRUcmFiYWphZG9yIH0gPSByZXEuYm9keVxyXG4gICAgY29uc3QgeyBhYnJpckNvbmV4aW9uUE9PTCAsIGNlcnJhckNvbmV4aW9uUE9PTCB9ID0gcmVxdWlyZSAoICcuLi9jb25leGlvbmVzL3NxbFNlcnZlcicgKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb25leGlvbiA9IGF3YWl0IGFicmlyQ29uZXhpb25QT09MICggJ2RlbGV0ZVRyYWJhamFkb3InIClcclxuICAgICAgICBjb25zdCB7IFJlcXVlc3QgLCBJbnQgfSA9IHJlcXVpcmUgKCdtc3NxbCcgKVxyXG4gICAgICAgIGNvbnN0IG15UmVxdWVzdCA9IG5ldyBSZXF1ZXN0ICggY29uZXhpb24gKVxyXG4gICAgICAgIG15UmVxdWVzdC5pbnB1dCAoICdpZFRyYWJhamFkb3InICwgSW50ICwgaWRUcmFiYWphZG9yIClcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGB1cGRhdGUgdHJhYmFqYWRvcmVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlc3RhZG8gPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoZXJlIGlkID0gQGlkVHJhYmFqYWRvcmBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBteVJlcXVlc3QucXVlcnkgKCBxdWVyeSApXHJcbiAgICAgICAgaWYgKCByZXN1bHQgKSB7XHJcbiAgICAgICAgICAgIGNlcnJhckNvbmV4aW9uUE9PTCAoICApXHJcbiAgICAgICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogJ1RyYWJhamFkb3IgZWxpbWluYWRvIGNvcnJlY3RhbWVudGUnICwgc3RhdHVzIDogMjAwIH0gKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoICggZSApIHtcclxuICAgICAgICBjZXJyYXJDb25leGlvblBPT0wgKCAgKVxyXG4gICAgICAgIHJlcy5qc29uICggeyBtZW5zYWplIDogZS5tZXNzYWdlICwgc3RhdHVzIDogNDAzIH0gKVxyXG4gICAgfVxyXG59IClcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyXHJcbiIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IHJvdXRlciA9IFJvdXRlcigpXHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcykgPT4ge1xyXG4gICAgY29uc3Qge2FicmlyQ29uZXhpb24sY2VycmFyQ29uZXhpb259ID0gcmVxdWlyZSgnLi4vY29uZXhpb25lcy9zcWxTZXJ2ZXInKVxyXG4gICAgYXdhaXQgYWJyaXJDb25leGlvbigpXHJcbiAgICB2YXIge1JlcXVlc3R9ID0gcmVxdWlyZSgnbXNzcWwnKVxyXG4gICAgdmFyIGNvbnN1bHRhID0gbmV3IFJlcXVlc3QoKVxyXG4gICAgY29uc3VsdGEucXVlcnkoXHJcbiAgICAgICAgYHNlbGVjdCB0LmlkIGFzIGlkVHVybm8sIHQuZGVzY3JpcGNpb24gYXMgZGVzY3JpcGNpb25UdXJubyx0LmhzX2luaWNpbyBhcyBoc0luaWNpb1R1cm5vICx0LmhzX2ZpbiBhcyBoc0ZpblR1cm5vICBcclxuICAgICAgICBmcm9tIHR1cm5vcyB0XHJcbiAgICAgICAgd2hlcmUgZXN0YWRvID0gMWAsXHJcbiAgICAgICAgKGVycixkYXRvKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFlcnIpe3Jlcy5qc29uKGRhdG8ucmVjb3Jkc2V0KTsgY2VycmFyQ29uZXhpb24oKSB9IGVsc2UgeyByZXMuanNvbih7bWVuc2FqZTplcnIubWVzc2FnZX0pOyBjZXJyYXJDb25leGlvbigpIH1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJvdXRlciIsImNvbnN0IHtSb3V0ZXJ9ID0gcmVxdWlyZSgnZXhwcmVzcycpXHJcbmNvbnN0IGJjcnlwID0gcmVxdWlyZSgnYmNyeXB0LW5vZGVqcycpXHJcbnJlcXVpcmUoJy4uL2NvbmV4aW9uZXMvbW9uZ29EYicpXHJcbmNvbnN0IFVzdWFyaW8gPSByZXF1aXJlKCcuLi9lc3F1ZW1hc01vbmdvL2VzcXVlbWFVc3VhcmlvcycpXHJcbmNvbnN0IFBlcmZpbCA9IHJlcXVpcmUoJy4uL2VzcXVlbWFzTW9uZ28vZXNxdWVtYVJvbGVzVXN1YXJpb3MnKVxyXG5cclxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XHJcblxyXG5yb3V0ZXIuZ2V0KCcvJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIGF3YWl0IFVzdWFyaW8uZmluZCgoZSxkYXRvKT0+e1xyXG4gICAgICAgIGUgPyByZXMuc3RhdHVzKDQwMykuc2VuZCgnRXJyb3IgZW4gZWwgcmVxdWVzdCcpIDpcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChkYXRvKVxyXG4gICAgfSlcclxufSlcclxuXHJcbnJvdXRlci5nZXQoJy9wZXJmaWxlcycsYXN5bmMgKHJlcSxyZXMpPT57XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgbGlzdGFQZXJmaWxlcyA9IGF3YWl0IFBlcmZpbC5maW5kKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihsaXN0YVBlcmZpbGVzKVxyXG4gICAgfVxyXG4gICAgY2F0Y2goZSl7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oe21lbnNhamU6ZS5tZXNzYWdlfSlcclxuICAgIH1cclxufSlcclxuXHJcbnJvdXRlci5wb3N0KCcvcGVyZmlsZXMnLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHtwZXJmaWx9ID0gcmVxLmJvZHlcclxuICAgICAgICBjb25zdCBuZXdQZXJmaWwgPSBuZXcgUGVyZmlsKHtwZXJmaWx9KVxyXG4gICAgICAgIGF3YWl0IG5ld1BlcmZpbC5zYXZlKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonR3VhcmRhZG8gRXhpdG9zYW1lbnRlICEnfSlcclxuICAgIH1cclxuICAgIGNhdGNoKGUpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHttZW5zYWplOmUubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIuZ2V0KCcvOmlkJyxhc3luYyAocmVxLHJlcyk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXN1YXJpby5maW5kQnlJZCh7X2lkOnJlcS5wYXJhbXMuaWR9KVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHVzZXIpXHJcbiAgICB9XHJcbiAgICBjYXRjaChlKXtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMykuanNvbih7bWVuc2FqZTplLm1lc3NhZ2V9KVxyXG4gICAgfVxyXG59KVxyXG5cclxucm91dGVyLnBvc3QoJy8nLGFzeW5jIChyZXEscmVzKT0+e1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHZhciB7dXNlck5hbWUscGFzc3dvcmQsZW1haWwsbm9tYnJlLGFwZWxsaWRvLHBlcmZpbH0gPSByZXEuYm9keVxyXG4gICAgICAgIHBhc3N3b3JkID0gYXdhaXQgYmNyeXAuaGFzaFN5bmMocGFzc3dvcmQpXHJcbiAgICAgICAgY29uc3QgbmV3VXNlcj0gbmV3IFVzdWFyaW8oe3VzZXJOYW1lLHBhc3N3b3JkLGVtYWlsLG5vbWJyZSxhcGVsbGlkbyxwZXJmaWx9KVxyXG4gICAgICAgIGNvbnN0IGRhdG8gPSBhd2FpdCBuZXdVc2VyLnNhdmUoKVxyXG4gICAgICAgIGlmKGRhdG8peyByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVuc2FqZTonVXN1YXJpbyBndWFyZGFkbyBleGl0b3NhbWVudGUgISd9KSB9XHJcbiAgICB9XHJcbiAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAzKS5qc29uKHtlcnJvcjplcnIubWVzc2FnZX0pXHJcbiAgICB9XHJcbn0pXHJcblxyXG5yb3V0ZXIucHV0KCcvOmlkJywocmVxLHJlcyk9PntcclxuICAgIGNvbnN0IHtpZH0gPSByZXEucGFyYW1zXHJcbiAgICBjb25zdCBib2R5ID0gcmVxLmJvZHlcclxuICAgIGlmKGJvZHkucGFzc3dvcmQpe2JvZHkucGFzc3dvcmQgPSBiY3J5cC5oYXNoU3luYyhib2R5LnBhc3N3b3JkKSB9XHJcbiAgICBVc3VhcmlvLmZpbmRCeUlkQW5kVXBkYXRlKHtfaWQ6aWR9LGJvZHksKGUsZCk9PntcclxuICAgICAgICBlPyByZXMuc3RhdHVzKDQwMykuanNvbih7ZXJyb3I6ZS5tZXNzYWdlfSkgOlxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZW5zYWplOidNb2RpZmljYWRvIGNvcnJlY3RhbWVudGUgISd9KVxyXG4gICAgfSlcclxufSlcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzeW5jXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdC1ub2RlanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vcmdhblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtc3NxbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9