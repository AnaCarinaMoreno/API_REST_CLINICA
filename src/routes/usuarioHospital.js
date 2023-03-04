const express = require('Express');
const router = express.Router();
const {newRegistroUserHospital, getRegistroMedico  }  = require('../controller/usuarioHospital')
const {updatePassword} = require('../controller/actualizarPasswordController')


//ruta para ingresar datos básico ususario hospital
router.route('/hospital').post(newRegistroUserHospital);

//ruta para cosultar los datos tipo médico
router.route('/hospital/medico').get(getRegistroMedico);

//ruta para actualizar contraseña
router.route('/actualizarPassword').patch(updatePassword);


module.exports = router;