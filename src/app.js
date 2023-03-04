const express = require('express');
const app = express();
const registro = require('./routes/registro');
const login = require('./routes/login');
const userHospital = require('./routes/usuarioHospital');
const userPaciente = require('./routes/usuarioPaciente');
const userMedico = require('./routes/usuarioMedicos')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middleware rutas
app.use('api/user', registro );
app.use('api/user', login);
app.use('api/user', userHospital);
app.use('api/user', userPaciente);
app.use('api/user', userMedico);



module.exports = app;