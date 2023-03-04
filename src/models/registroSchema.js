const mongoose = require ('mongoose');


const registroSchema = mongoose.Schema({
    identificacion:{
        type: Number,
        required: true,
        maxLength: 120,
        unique:true,
    },

    email :{
        type: String,
        required: true,
        trim:true,
        lowercase: true,
        maxLength: 120

    },

    telefono: {
        type: String,
        required: true,
        trim:true,
        maxLength: 120

    },

    password:{
        type: String,
        required: true,
        min:6
    },

    tipoUsuario : {
        type: String,
        require: true,
        emun:['hospital','paciente'],
        defaul:'paciente'
    }
});

module.exports = mongoose.model('Registro', registroSchema);