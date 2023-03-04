const { encrypt, compare } = require('../helpers/handleBcrypt');
//importación del schema
const Registro = require('../models/registroSchema');

exports.login = async (req, res) => {
    try {
        const {identificacion, password} = req.body
        //buscar email en la base de datos
        const user = await Registro.findOne({identificacion})

        if(!user){
            res.status(404)
            res.send({error: 'Usuario no se encuentra registrado'})

        }

        //comparamos la contraseñas ingresada con la registrada en la base de datos
        const checkPassword = await compare(password, user.password)

        if(checkPassword){
            res.send({
                data: user
            })
            return
        }

        if (!checkPassword){
            res.status(409)
            res.send({
                error: 'Contraseña inválida'
            })

        }


    }catch (error) {
        res.status(400).json({error})
    }    
}