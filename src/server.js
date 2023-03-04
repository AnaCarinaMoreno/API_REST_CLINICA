const app = require('./app');
const dotenv = require('dotenv');
const conectData = require('./config/DB');


dotenv.config({path:'src/config/config.env'});

//conexión con la base de datos MongoDB
conectData();



//llamada al servidor
const server =app.listen(process.env.PORT, () =>{
    console.log(`servidor iniciado en el puerto ${process.env.PORT}`)
}); 