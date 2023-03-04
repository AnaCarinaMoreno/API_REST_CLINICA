const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({path:'src/config/config.env'})

const conectData = async () => {
   await mongoose.connect(process.env.DB_LOCAL_URI,{
      useNewUrlParser: true,
      useUnifiedTopology:true 
   
      }).then (con =>{
           console.log(`Base de datos mongo conectada con el servidor  ${con.connection.host}`)
    
      })

}
module.exports = conectData;