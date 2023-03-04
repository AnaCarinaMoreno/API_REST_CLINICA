const paciente = require('../models/pacienteSchema');

exports.registroPaciente = async( req, res, next) => {
    try{
        const {nombre,direccion, fechaNacimiento} = req.body
  
       
        const registroUsuario = await paciente.create({
          nombre,
          direccion, 
          fechaNacimiento  
        })
        res.send({data: registroUsuario})
  
    } catch (error) {
      res.status(400).json({error})
    }
  
};
//solicitar informacion de sus datos por parte del paciente
exports.getPaciente = async(req, res, next) => {
  try{
    const {identificacion} = req.params;
    const getDatos = await  paciente.findById({_id:identificacion})
    res.status(200).json({
      success: true,
      getDatos 
   })
   
  } catch (error) {
   console.log(error)
   res.status(500).send("Hubo un error")
   
  }         

} 



