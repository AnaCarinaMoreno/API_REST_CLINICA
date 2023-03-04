const express = require('Express');
const router = express.Router();
const{newRegistro } = require('../controller/registroController')
const {validacion} = require('../validaciones/registroValidaciones')

//ruta para ingresar un usuario nuevo
router.route('/registro').post(validacion, newRegistro);


module.exports = router;