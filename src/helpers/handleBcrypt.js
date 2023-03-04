const bcrypt = require('bcrypt');

//encriptación del password
const encrypt = async(textPlano) => {
    const hash = await bcrypt.hash(textPlano, 10)
    return hash
}

//comparación 
const compare = async(passwordPlano, hashPassword) =>{
    return await bcrypt.compare(passwordPlano, hashPassword)
}

module.exports = {encrypt, compare}
