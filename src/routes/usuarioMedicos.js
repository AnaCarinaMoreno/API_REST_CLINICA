const express = require('Express');
const router = express.Router();
const { usuarioMedico, getRegistroMedico  } = require('../controller/usuarioHospital');
const {updatePassword} = require('../controller/actualizarPasswordController')

//ruta para registrar informacion de usuario hospital médico
router.route('/hospital/medico').post(usuarioMedico)

//ruta para consultar la información de usuario hospital tipo médico
router.route('/hospital/medico').get(getRegistroMedico)


//ruta para actualizar contraseña
router.route('/actualizarPassword').patch(updatePassword);

module.exports = router;