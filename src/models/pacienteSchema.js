const mongoose = require ('mongoose');


const pacienteSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        maxLength: 120,
        trim:true
    },

    direccion :{
        type: String,
        required: true,
        trim:true,
        maxLength: 120

    },

    fechaNacimiento: {
        type: Date,
        required: true,    

    }

    
   
});

module.exports = mongoose.model('Paciente', pacienteSchema);