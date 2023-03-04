const UserHospital = require('../models/usuarioHospitalSchema');
const { encrypt } = require('../helpers/handleBcrypt');

//Actualizar contraseña

exports.updatePassword = async (req, res, next) => {
    try {
        const {identificacion} = req.params;
        const passwordHash = await encrypt(password);
        let userPassword = await UserHospital.findByIdAndUpdate({_id:identificacion}, { password:passwordHash}, {new:true});
        return res.status(200).json({
            success: true,
            message:"contraseña actualizada correctamente",
            userPassword
        })
        
    }catch(error){
        return res.status(500).json({status:false, error:'Hubo un error interno'})
        
    }

    
}
     
  