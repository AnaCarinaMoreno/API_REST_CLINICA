const mongoose = require ('mongoose');


const userHospitalSchema = mongoose.Schema({
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

  
});

module.exports = mongoose.model('UserHospital', userHospitalSchema);