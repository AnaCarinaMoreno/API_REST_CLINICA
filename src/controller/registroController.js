const { encrypt } = require('../helpers/handleBcrypt');
//importación del schema
const Registro = require('../models/registroSchema');

exports.newRegistro = async (req, res) => {
  try{
      const {identificacion, email, telefono, password, tipoUsuario} = req.body

      const passwordHash = await encrypt(password);
      const registroUsuario = await Registro.create({
        identificacion,
        email, 
        telefono,
        password : passwordHash,
        tipoUsuario
      })
      res.send({data: registroUsuario})

  } catch (error) {
    res.status(400).json({error})
  }

}
   
