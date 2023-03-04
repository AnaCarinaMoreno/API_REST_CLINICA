const express = require('Express');
const router = express.Router();
const {registroPaciente, getPaciente} = require('../controller/usuarioPaciente');
const {updatePassword} = require('../controller/actualizarPasswordController')


//ruta para ingresar datos básicos del paciente
router.route('/paciente').post(registroPaciente);

//ruta para actualizar contraseña
router.route('/actualizarPassword').patch(updatePassword);


//ruta para consultar datos básicos del paciente
router.route('/paciente/datos').get(getPaciente);



module.exports = router;
