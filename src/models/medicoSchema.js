const mongoose = require ('mongoose');


const userMedicoSchema = mongoose.Schema({
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

    serviciosMedicos: {
        type: String,
        required: true,
        trim:true,
        maxLength: 120

    },

    especialidad: {
        type: String,
        required: true,
        trim:true,
        maxLength: 120

    },

    osbervaciones: {
        type: String,
        required: true,
        trim:true,
        

    },

    estadoPaciente: {
        type: String,
        required: true,
        trim:true,
       

    }

  
});

module.exports = mongoose.model('medico', userMedicoSchema);