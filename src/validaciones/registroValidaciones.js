const  {check} = require('express-validator')
const {validateResult} = require('../helpers/validacionesHelper')

const validacion = [
    check('identificacion')
    .exists()
    .not()
    .isNumeric(),
    check('email')
    .exists()
    .not()
    .isEmail(),
    check('telefono')
    .exists()
    .not()
    .isEmpty(),
    check('password')
    .exists()
    .not()
    .isEmpty(),
    check('tipoUsuario')
    .exists()
    .not()
    .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)

    }



]

module.exports = {validacion}