//importamos el schema
const UserHospital = require('../models/usuarioHospitalSchema');
const medico = require('../models/medicoSchema');


//registro  de infomación básica de usuario hospital 
exports.newRegistroUserHospital = async (req, res) => {
    try{
        const {nombre,direccion, serviciosMedicos} = req.body
  
       
        const registroUsuario = await UserHospital.create({
          nombre,
          direccion, 
          serviciosMedicos  
        })
        res.send({data: registroUsuario})
  
    } catch (error) {
      res.status(400).json({error})
    }
  
};

//registro  de infomación básica de usuario hospital médico

exports.usuarioMedico = async(req, res, next) => {
    try{
        const {nombre, direccion, serviciosMedicos, especialidad, observaciones} = req.body
  
       
        const registroMedico = await medico.create({
          nombre,
          direccion, 
          serviciosMedicos,
          especialidad,
          observaciones  
        })
        res.send({data: registroMedico})
  
    } catch (error) {
      res.status(400).json({error})
    }

};
//consulta de sus datos tipo usuarios médico
exports.getRegistroMedico = async (req, res, next) => {
    try{
        const {identificacion} = req.params;
        const getDatos = await  medico.findById({_id:identificacion})
        res.status(200).json({
          success: true,
          getDatos 
       })
       
    } catch (error) {
       console.log(error)
       res.status(500).send("Hubo un error")
       
    }         
            

}


