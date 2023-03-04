const express = require('Express');
const router = express.Router();
const {login} = require('../controller/loginCotroller')

router.route('/login').post(login)

module.exports = router;